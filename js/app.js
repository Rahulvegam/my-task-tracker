/* ══════════════════════════════════════════════════
   MY TASK TRACKER  ·  app.js
   ══════════════════════════════════════════════════ */

// ── STATE ─────────────────────────────────────────────
let STATE = {
  tasks:  [],   // array of task objects
  filter: "all",
  sort:   "added_desc",
};

let _editingId   = null;   // null = new task, else task id being edited
let _deleteId    = null;

// ── PERSISTENCE ───────────────────────────────────────
function persist() {
  localStorage.setItem("rtt_tasks", JSON.stringify(STATE.tasks));
}
function loadFromStorage() {
  try {
    const raw = localStorage.getItem("rtt_tasks");
    if (raw) STATE.tasks = JSON.parse(raw);
  } catch(_) { STATE.tasks = []; }
}

// ── UNIQUE ID ─────────────────────────────────────────
function uid() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
}

// ── MODAL: ADD / EDIT TASK ────────────────────────────
function openAddModal() {
  _editingId = null;
  clearForm();
  document.getElementById("modal-title").textContent = "Add New Task";
  document.getElementById("modal-sub").textContent   = "Fill in the details from your Redmine tracker";
  document.getElementById("task-overlay").classList.remove("hidden");
  document.getElementById("f-id").focus();
}

function openEditModal(id) {
  const task = STATE.tasks.find(t => t.id === id);
  if (!task) return;
  _editingId = id;
  fillForm(task);
  document.getElementById("modal-title").textContent = `Edit Task #${task.trackerId}`;
  document.getElementById("modal-sub").textContent   = "Update the task details";
  document.getElementById("task-overlay").classList.remove("hidden");
}

function closeTaskModal() {
  document.getElementById("task-overlay").classList.add("hidden");
  _editingId = null;
}

function clearForm() {
  ["f-id","f-subject","f-project","f-tracker-type","f-assigned","f-author",
   "f-start","f-due","f-done","f-version","f-parent","f-children",
   "f-relations","f-category","f-desc","f-note"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = "";
  });
  document.getElementById("f-status").value   = "";
  document.getElementById("f-priority").value = "";
}

function fillForm(task) {
  const set = (id, val) => { const el = document.getElementById(id); if (el) el.value = val || ""; };
  set("f-id",           task.trackerId);
  set("f-subject",      task.subject);
  set("f-status",       task.status);
  set("f-priority",     task.priority);
  set("f-project",      task.project);
  set("f-tracker-type", task.trackerType);
  set("f-assigned",     task.assignedTo);
  set("f-author",       task.author);
  set("f-start",        task.startDate);
  set("f-due",          task.dueDate);
  set("f-done",         task.donePct != null ? task.donePct : "");
  set("f-version",      task.version);
  set("f-parent",       task.parentId);
  set("f-children",     task.childIds);
  set("f-relations",    task.relatedIds);
  set("f-category",     task.category);
  set("f-desc",         task.description);
  set("f-note",         task.note);
}

function saveTask() {
  const trackerId = document.getElementById("f-id").value.trim();
  const subject   = document.getElementById("f-subject").value.trim();
  const status    = document.getElementById("f-status").value;

  // Validation
  if (!trackerId || isNaN(parseInt(trackerId))) {
    toast("Please enter a valid Tracker ID.", "error"); return;
  }
  if (!subject) {
    toast("Subject / Title is required.", "error"); return;
  }
  if (!status) {
    toast("Please select a Status.", "error"); return;
  }

  // Check duplicate tracker ID (only when adding new)
  if (!_editingId) {
    const exists = STATE.tasks.find(t => String(t.trackerId) === String(trackerId));
    if (exists) { toast(`Tracker #${trackerId} already exists in your list.`, "error"); return; }
  }

  const taskData = {
    trackerId:   parseInt(trackerId, 10),
    subject:     subject,
    status:      status,
    priority:    document.getElementById("f-priority").value,
    project:     document.getElementById("f-project").value.trim(),
    trackerType: document.getElementById("f-tracker-type").value.trim(),
    assignedTo:  document.getElementById("f-assigned").value.trim(),
    author:      document.getElementById("f-author").value.trim(),
    startDate:   document.getElementById("f-start").value,
    dueDate:     document.getElementById("f-due").value,
    donePct:     document.getElementById("f-done").value !== "" ? parseInt(document.getElementById("f-done").value, 10) : null,
    version:     document.getElementById("f-version").value.trim(),
    parentId:    document.getElementById("f-parent").value.trim(),
    childIds:    document.getElementById("f-children").value.trim(),
    relatedIds:  document.getElementById("f-relations").value.trim(),
    category:    document.getElementById("f-category").value.trim(),
    description: document.getElementById("f-desc").value.trim(),
    note:        document.getElementById("f-note").value.trim(),
  };

  if (_editingId) {
    // Update existing
    const idx = STATE.tasks.findIndex(t => t.id === _editingId);
    if (idx !== -1) {
      STATE.tasks[idx] = { ...STATE.tasks[idx], ...taskData, updatedAt: new Date().toISOString() };
    }
    toast("Task updated ✓", "success");
  } else {
    // Add new
    STATE.tasks.unshift({
      id:        uid(),
      ...taskData,
      addedAt:   new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });
    toast(`Task #${trackerId} added ✓`, "success");
  }

  persist();
  closeTaskModal();
  renderCards();
  updateSidebar();
}

// ── DELETE ────────────────────────────────────────────
function askDelete(id) {
  _deleteId = id;
  const task = STATE.tasks.find(t => t.id === id);
  document.getElementById("delete-id-label").textContent = task ? `#${task.trackerId} — ${task.subject}` : `#${id}`;
  document.getElementById("delete-overlay").classList.remove("hidden");
}
function closeDelete() {
  document.getElementById("delete-overlay").classList.add("hidden");
  _deleteId = null;
}
function confirmDelete() {
  STATE.tasks = STATE.tasks.filter(t => t.id !== _deleteId);
  persist();
  closeDelete();
  renderCards();
  updateSidebar();
  toast("Task removed.", "");
}

// ── FILTER & SORT ─────────────────────────────────────
function setFilter(val, btn) {
  STATE.filter = val;
  document.querySelectorAll(".pill").forEach(p => p.classList.remove("active"));
  btn.classList.add("active");
  renderCards();
}
function setSort(val) {
  STATE.sort = val;
  renderCards();
}

function filteredSorted() {
  let list = [...STATE.tasks];

  // Search
  const q = (document.getElementById("search-input")?.value || "").toLowerCase().trim();
  if (q) {
    list = list.filter(t =>
      String(t.trackerId).includes(q) ||
      (t.subject     || "").toLowerCase().includes(q) ||
      (t.project     || "").toLowerCase().includes(q) ||
      (t.assignedTo  || "").toLowerCase().includes(q) ||
      (t.category    || "").toLowerCase().includes(q) ||
      (t.trackerType || "").toLowerCase().includes(q)
    );
  }

  // Filter
  if (STATE.filter !== "all") {
    list = list.filter(t => t.status === STATE.filter);
  }

  // Sort
  const PRIORITY_ORDER = { Immediate:0, Urgent:1, High:2, Normal:3, Low:4, "":5 };
  const STATUS_ORDER   = { "In Progress":0, New:1, Feedback:2, Resolved:3, Closed:4, Rejected:5, "":6 };

  switch (STATE.sort) {
    case "added_desc": list.sort((a,b) => new Date(b.addedAt) - new Date(a.addedAt)); break;
    case "added_asc":  list.sort((a,b) => new Date(a.addedAt) - new Date(b.addedAt)); break;
    case "id_asc":     list.sort((a,b) => a.trackerId - b.trackerId); break;
    case "id_desc":    list.sort((a,b) => b.trackerId - a.trackerId); break;
    case "due_asc":    list.sort((a,b) => {
      if (!a.dueDate && !b.dueDate) return 0;
      if (!a.dueDate) return 1;
      if (!b.dueDate) return -1;
      return new Date(a.dueDate) - new Date(b.dueDate);
    }); break;
    case "status":   list.sort((a,b) => (STATUS_ORDER[a.status]||6) - (STATUS_ORDER[b.status]||6)); break;
    case "priority": list.sort((a,b) => (PRIORITY_ORDER[a.priority]||5) - (PRIORITY_ORDER[b.priority]||5)); break;
  }
  return list;
}

// ── RENDER ────────────────────────────────────────────
function renderCards() {
  const container = document.getElementById("cards-container");
  const empty     = document.getElementById("empty-state");
  const list      = filteredSorted();

  if (STATE.tasks.length === 0) {
    empty.classList.remove("hidden");
    container.innerHTML = "";
    updateMainSub();
    return;
  }

  empty.classList.add("hidden");

  if (list.length === 0) {
    container.innerHTML = `<div class="empty-state" style="margin-top:0">
      <div class="empty-icon">🔍</div>
      <div class="empty-title">No tasks match</div>
      <div class="empty-sub">Try a different filter or search term.</div>
    </div>`;
    updateMainSub();
    return;
  }

  container.innerHTML = list.map(buildCard).join("");
  updateMainSub(list.length);
}

function buildCard(task) {
  const statusKey = (task.status || "").replace(/\s+/g, "");
  const badgeCls  = `badge-${statusKey}` ;

  // Priority dot colour
  const PDOT = { Low:"#10b981", Normal:"#3b82f6", High:"#f59e0b", Urgent:"#ef4444", Immediate:"#dc2626" };
  const pdotColor = PDOT[task.priority] || "#94a3b8";

  // Due date display
  let dueHTML = "";
  if (task.dueDate) {
    const due     = new Date(task.dueDate);
    const today   = new Date(); today.setHours(0,0,0,0);
    const overdue = due < today && !["Resolved","Closed"].includes(task.status);
    dueHTML = `<span class="card-due${overdue ? " overdue" : ""}">Due: ${fmtDate(task.dueDate)}${overdue ? " ⚠" : ""}</span>`;
  }

  // Done % bar
  const doneHTML = task.donePct != null ? `
    <div class="done-bar-wrap">
      <div class="fi-label">Done %</div>
      <div class="fi-value" style="font-size:12px;margin-bottom:4px">${task.donePct}%</div>
      <div class="done-bar-track"><div class="done-bar-fill" style="width:${task.donePct}%"></div></div>
    </div>` : "";

  // Relations
  let relHTML = "";
  const hasRel = task.parentId || task.childIds || task.relatedIds;
  if (hasRel) {
    relHTML = `<div class="relations-block"><div class="relations-title">🔗 Relations</div>`;
    if (task.parentId) {
      relHTML += `<div class="relation-row"><span class="rel-type">Parent</span><span class="rel-id">#${esc(task.parentId)}</span></div>`;
    }
    if (task.childIds) {
      task.childIds.split(",").map(s => s.trim()).filter(Boolean).forEach(cid => {
        relHTML += `<div class="relation-row"><span class="rel-type">Child</span><span class="rel-id">#${esc(cid)}</span></div>`;
      });
    }
    if (task.relatedIds) {
      task.relatedIds.split(",").map(s => s.trim()).filter(Boolean).forEach(rid => {
        relHTML += `<div class="relation-row"><span class="rel-type">Related</span><span class="rel-id">#${esc(rid)}</span></div>`;
      });
    }
    relHTML += `</div>`;
  }

  // Notes
  const noteHTML = task.note
    ? `<div class="note-display">${esc(task.note).replace(/\n/g,"<br>")}</div>`
    : `<div class="note-empty">No notes added yet.</div>`;

  // Description
  const descHTML = task.description
    ? `<div class="desc-block">${esc(task.description)}</div>` : "";

  return `<div class="task-card" id="card-${task.id}" data-status="${esc(task.status || "")}">
    <div class="card-header" onclick="toggleCard('${task.id}')">
      <span class="card-chevron">▼</span>
      <div class="card-meta">
        <div class="card-top-row">
          <span class="card-id">#${task.trackerId}</span>
          <span class="badge ${badgeCls}">${esc(task.status || "—")}</span>
          ${task.priority ? `<span style="display:flex;align-items:center;gap:4px;font-size:11.5px;color:var(--text-3)"><span class="priority-dot" style="background:${pdotColor}"></span>${esc(task.priority)}</span>` : ""}
          ${task.trackerType ? `<span style="font-size:11px;color:var(--text-4)">${esc(task.trackerType)}</span>` : ""}
        </div>
        <div class="card-subject">${esc(task.subject)}</div>
        <div class="card-project-row">
          ${task.project ? `<span class="card-project">📁 ${esc(task.project)}</span>` : ""}
          ${dueHTML}
        </div>
      </div>
      <div class="card-actions" onclick="event.stopPropagation()">
        <button class="icon-btn edit"   title="Edit task"   onclick="openEditModal('${task.id}')">✏</button>
        <button class="icon-btn remove" title="Remove task" onclick="askDelete('${task.id}')">✕</button>
      </div>
    </div>
    <div class="card-body">
      <div class="fields-grid">
        ${fi("Assigned To", task.assignedTo)}
        ${fi("Author",      task.author)}
        ${fi("Project",     task.project)}
        ${fi("Category",    task.category)}
        ${fi("Version",     task.version)}
        ${fi("Start Date",  fmtDate(task.startDate))}
        ${fi("Due Date",    fmtDate(task.dueDate))}
        ${doneHTML || fi("Done %", null)}
      </div>
      ${descHTML}
      ${relHTML}
      <div class="divider"></div>
      <div class="notes-block">
        <div class="notes-header">
          <span class="notes-title">📝 My Notes</span>
        </div>
        ${noteHTML}
      </div>
      <div class="card-timestamp">Added: ${fmtDateTime(task.addedAt)}${task.updatedAt !== task.addedAt ? `  ·  Updated: ${fmtDateTime(task.updatedAt)}` : ""}</div>
    </div>
  </div>`;
}

function fi(label, val) {
  const empty = !val || val === "—";
  return `<div>
    <div class="fi-label">${label}</div>
    <div class="fi-value${empty ? " empty" : ""}">${empty ? "—" : esc(String(val))}</div>
  </div>`;
}

function toggleCard(id) {
  document.getElementById(`card-${id}`)?.classList.toggle("collapsed");
}

// ── SIDEBAR STATS ─────────────────────────────────────
function updateSidebar() {
  const t = STATE.tasks;
  document.getElementById("s-total").textContent    = t.length;
  document.getElementById("s-open").textContent     = t.filter(x => ["New","Feedback"].includes(x.status)).length;
  document.getElementById("s-progress").textContent = t.filter(x => x.status === "In Progress").length;
  document.getElementById("s-done").textContent     = t.filter(x => ["Resolved","Closed"].includes(x.status)).length;
}

function updateMainSub(count) {
  const el = document.getElementById("main-sub-text");
  if (!el) return;
  if (STATE.tasks.length === 0) {
    el.textContent = "Track your Redmine tasks with personal notes";
  } else {
    el.textContent = `Showing ${count ?? filteredSorted().length} of ${STATE.tasks.length} task${STATE.tasks.length !== 1 ? "s" : ""}`;
  }
}

// ── EXPORT EXCEL ──────────────────────────────────────
function exportExcel() {
  if (!window.XLSX) { toast("SheetJS not loaded.", "error"); return; }
  if (STATE.tasks.length === 0) { toast("No tasks to export.", ""); return; }

  const rows = STATE.tasks.map(t => ({
    "Tracker ID":    t.trackerId,
    "Subject":       t.subject || "",
    "Status":        t.status || "",
    "Priority":      t.priority || "",
    "Assigned To":   t.assignedTo || "",
    "Author":        t.author || "",
    "Project":       t.project || "",
    "Tracker Type":  t.trackerType || "",
    "Category":      t.category || "",
    "Version":       t.version || "",
    "Start Date":    t.startDate || "",
    "Due Date":      t.dueDate || "",
    "Done %":        t.donePct != null ? t.donePct + "%" : "",
    "Parent ID":     t.parentId || "",
    "Child IDs":     t.childIds || "",
    "Related IDs":   t.relatedIds || "",
    "Description":   t.description || "",
    "My Notes":      t.note || "",
    "Added At":      fmtDateTime(t.addedAt),
    "Updated At":    fmtDateTime(t.updatedAt),
  }));

  const ws = XLSX.utils.json_to_sheet(rows);

  // Column widths
  ws["!cols"] = [10,45,15,12,22,22,25,18,18,18,13,13,10,12,25,25,50,60,22,22]
    .map(w => ({ wch: w }));

  // Header row style (bold)
  const range = XLSX.utils.decode_range(ws["!ref"]);
  for (let c = range.s.c; c <= range.e.c; c++) {
    const cell = ws[XLSX.utils.encode_cell({ r: 0, c })];
    if (cell) cell.s = { font: { bold: true }, fill: { fgColor: { rgb: "EFF6FF" } } };
  }

  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "My Tasks");

  // Summary sheet
  const summary = [
    ["My Task Tracker — Export"],
    [""],
    ["Exported At",    fmtDateTime(new Date().toISOString())],
    ["Total Tasks",    STATE.tasks.length],
    ["New",            STATE.tasks.filter(t => t.status === "New").length],
    ["In Progress",    STATE.tasks.filter(t => t.status === "In Progress").length],
    ["Feedback",       STATE.tasks.filter(t => t.status === "Feedback").length],
    ["Resolved",       STATE.tasks.filter(t => t.status === "Resolved").length],
    ["Closed",         STATE.tasks.filter(t => t.status === "Closed").length],
    ["Rejected",       STATE.tasks.filter(t => t.status === "Rejected").length],
  ];
  XLSX.utils.book_append_sheet(wb, XLSX.utils.aoa_to_sheet(summary), "Summary");

  const fname = `my-tasks-${new Date().toISOString().slice(0,10)}.xlsx`;
  XLSX.writeFile(wb, fname);
  toast(`Exported as ${fname} ✓`, "success");
}

// ── IMPORT EXCEL ──────────────────────────────────────
function importExcel() {
  document.getElementById("import-input").click();
}

function handleImport(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const wb   = XLSX.read(e.target.result, { type: "array" });
      const ws   = wb.Sheets["My Tasks"] || wb.Sheets[wb.SheetNames[0]];
      const rows = XLSX.utils.sheet_to_json(ws);

      let imported = 0, skipped = 0;
      rows.forEach(row => {
        const tid = parseInt(row["Tracker ID"], 10);
        if (!tid || !row["Subject"]) { skipped++; return; }
        if (STATE.tasks.find(t => t.trackerId === tid)) { skipped++; return; }
        STATE.tasks.push({
          id:          uid(),
          trackerId:   tid,
          subject:     row["Subject"]      || "",
          status:      row["Status"]       || "New",
          priority:    row["Priority"]     || "",
          assignedTo:  row["Assigned To"]  || "",
          author:      row["Author"]       || "",
          project:     row["Project"]      || "",
          trackerType: row["Tracker Type"] || "",
          category:    row["Category"]     || "",
          version:     row["Version"]      || "",
          startDate:   row["Start Date"]   || "",
          dueDate:     row["Due Date"]     || "",
          donePct:     row["Done %"] ? parseInt(row["Done %"], 10) : null,
          parentId:    row["Parent ID"]    || "",
          childIds:    row["Child IDs"]    || "",
          relatedIds:  row["Related IDs"]  || "",
          description: row["Description"]  || "",
          note:        row["My Notes"]     || "",
          addedAt:     new Date().toISOString(),
          updatedAt:   new Date().toISOString(),
        });
        imported++;
      });

      persist();
      renderCards();
      updateSidebar();
      toast(`Imported ${imported} task${imported !== 1 ? "s" : ""}${skipped ? `, ${skipped} skipped` : ""} ✓`, "success");
    } catch(err) {
      toast("Import failed: " + err.message, "error");
    }
    event.target.value = "";
  };
  reader.readAsArrayBuffer(file);
}

// ── HELPERS ───────────────────────────────────────────
function esc(s) {
  return String(s || "")
    .replace(/&/g,"&amp;").replace(/</g,"&lt;")
    .replace(/>/g,"&gt;").replace(/"/g,"&quot;");
}

function fmtDate(d) {
  if (!d) return "";
  try {
    const dt = new Date(d + "T00:00:00");
    return dt.toLocaleDateString("en-IN", { day:"2-digit", month:"short", year:"numeric" });
  } catch(_) { return d; }
}

function fmtDateTime(d) {
  if (!d) return "";
  try {
    return new Date(d).toLocaleString("en-IN", {
      day:"2-digit", month:"short", year:"numeric",
      hour:"2-digit", minute:"2-digit"
    });
  } catch(_) { return d; }
}

// ── TOAST ─────────────────────────────────────────────
let _toastTimer = null;
function toast(msg, type = "") {
  const el = document.getElementById("toast");
  if (!el) return;
  el.textContent = msg;
  el.className   = "show" + (type ? " " + type : "");
  if (_toastTimer) clearTimeout(_toastTimer);
  _toastTimer = setTimeout(() => { el.className = ""; }, 3000);
}

// ── OVERLAY CLOSE ON BG CLICK ─────────────────────────
function overlayClickClose(event, overlayId) {
  if (event.target.id === overlayId) {
    if (overlayId === "task-overlay")   closeTaskModal();
    if (overlayId === "delete-overlay") closeDelete();
  }
}

// ── KEYBOARD ──────────────────────────────────────────
document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    closeTaskModal();
    closeDelete();
  }
});

// ── INIT ──────────────────────────────────────────────
(function init() {
  loadFromStorage();
  renderCards();
  updateSidebar();
})();
