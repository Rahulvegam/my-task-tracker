/* ══════════════════════════════════════════════════
   MY TASK TRACKER  ·  app.js
   ══════════════════════════════════════════════════ */

// ── PRE-LOADED DATA FROM YOUR EXCEL ───────────────────
const SEED_DATA = [{"id": "19cde2263484a15", "client": "BASF", "trackerId": 68898, "trackerType": "Bug", "module": "", "plant": "", "subject": "Loading Issue in Truck Management screen", "status": "Released to Production", "note": "", "priority": "", "project": "BASF", "assignedTo": "", "author": "", "startDate": "", "dueDate": "", "donePct": null, "version": "", "parentId": "", "childIds": "", "relatedIds": "", "category": "", "description": "", "addedAt": "2026-03-11T00:00:00.000Z", "updatedAt": "2026-03-11T00:00:00.000Z"}, {"id": "19cde226348b212", "client": "BASF", "trackerId": 17343, "trackerType": "CR", "module": "", "plant": "", "subject": "Handling PO Visibility in SFS Based on Delivery Order Creation in SAP ( RFG)", "status": "New", "note": "", "priority": "", "project": "BASF", "assignedTo": "", "author": "", "startDate": "", "dueDate": "", "donePct": null, "version": "", "parentId": "", "childIds": "", "relatedIds": "", "category": "", "description": "", "addedAt": "2026-03-11T00:00:00.000Z", "updatedAt": "2026-03-11T00:00:00.000Z"}, {"id": "19cde2263483f2f", "client": "Henkel", "trackerId": 68925, "trackerType": "Bug", "module": "Dispatch", "plant": "", "subject": "Issue during stock movement to dispatch gate", "status": "Released to henkel latam production server", "note": "", "priority": "", "project": "Henkel", "assignedTo": "", "author": "", "startDate": "", "dueDate": "", "donePct": null, "version": "", "parentId": "", "childIds": "", "relatedIds": "", "category": "Dispatch", "description": "", "addedAt": "2026-03-11T00:00:00.000Z", "updatedAt": "2026-03-11T00:00:00.000Z"}, {"id": "19cde226348942e", "client": "Henkel", "trackerId": 67960, "trackerType": "CR", "module": "Goods Receipt", "plant": "", "subject": "Itapevi GR Workflow changes", "status": "Local testing Completed", "note": "", "priority": "", "project": "Henkel", "assignedTo": "", "author": "", "startDate": "", "dueDate": "", "donePct": null, "version": "", "parentId": "", "childIds": "", "relatedIds": "", "category": "Goods Receipt", "description": "", "addedAt": "2026-03-11T00:00:00.000Z", "updatedAt": "2026-03-11T00:00:00.000Z"}, {"id": "19cde226348656b", "client": "Henkel", "trackerId": 67124, "trackerType": "Bug", "module": "Dispatch", "plant": "", "subject": "Dispatch shuttle process enhancement with Spanish translations", "status": "Released to henkel latam production server", "note": "", "priority": "", "project": "Henkel", "assignedTo": "", "author": "", "startDate": "", "dueDate": "", "donePct": null, "version": "", "parentId": "", "childIds": "", "relatedIds": "", "category": "Dispatch", "description": "", "addedAt": "2026-03-11T00:00:00.000Z", "updatedAt": "2026-03-11T00:00:00.000Z"}, {"id": "19cde226348d08b", "client": "Henkel", "trackerId": 69974, "trackerType": "Bug", "module": "Dispatch", "plant": "", "subject": "Delivery order unit issue in Stock transfer flow", "status": "Released to henkel latam production server", "note": "", "priority": "", "project": "Henkel", "assignedTo": "", "author": "", "startDate": "", "dueDate": "", "donePct": null, "version": "", "parentId": "", "childIds": "", "relatedIds": "", "category": "Dispatch", "description": "", "addedAt": "2026-03-11T00:00:00.000Z", "updatedAt": "2026-03-11T00:00:00.000Z"}, {"id": "19cde2263481e2a", "client": "Henkel", "trackerId": 70044, "trackerType": "Bug", "module": "Dispatch", "plant": "", "subject": "Dispatch go-live issue fix", "status": "Released to 203", "note": "Awaiting confirmation from client", "priority": "", "project": "Henkel", "assignedTo": "", "author": "", "startDate": "", "dueDate": "", "donePct": null, "version": "", "parentId": "", "childIds": "", "relatedIds": "", "category": "Dispatch", "description": "", "addedAt": "2026-03-11T00:00:00.000Z", "updatedAt": "2026-03-11T00:00:00.000Z"}, {"id": "19cde22634828ce", "client": "Henkel", "trackerId": 68278, "trackerType": "CR", "module": "Dispatch", "plant": "", "subject": "New enhancement to dispatch shuttle process", "status": "Closed", "note": "", "priority": "", "project": "Henkel", "assignedTo": "", "author": "", "startDate": "", "dueDate": "", "donePct": null, "version": "", "parentId": "", "childIds": "", "relatedIds": "", "category": "Dispatch", "description": "", "addedAt": "2026-03-11T00:00:00.000Z", "updatedAt": "2026-03-11T00:00:00.000Z"}, {"id": "19cde226348f70", "client": "Henkel", "trackerId": 80449, "trackerType": "CR", "module": "Manufacture", "plant": "Kunpeng", "subject": "Enable Re-Creation of Failed Staging Order via Mobile \u201cRequest Replenish\u201d", "status": "New", "note": "when staging order for issue addition and request replenishment is failed, user can click request replenish on mobile, system can pop up message and re create instead of creating on staging order web page", "priority": "", "project": "Henkel", "assignedTo": "", "author": "", "startDate": "", "dueDate": "", "donePct": null, "version": "", "parentId": "", "childIds": "", "relatedIds": "", "category": "Manufacture", "description": "", "addedAt": "2026-03-11T00:00:00.000Z", "updatedAt": "2026-03-11T00:00:00.000Z"}, {"id": "19cde226348dcf7", "client": "Henkel", "trackerId": 80393, "trackerType": "CR", "module": "Manufacture", "plant": "Rancho", "subject": "Display Gross & Tare Weight with Pallet Label Information", "status": "Waiting for PO", "note": "SOW sent ", "priority": "", "project": "Henkel", "assignedTo": "", "author": "", "startDate": "", "dueDate": "", "donePct": null, "version": "", "parentId": "", "childIds": "", "relatedIds": "", "category": "Manufacture", "description": "", "addedAt": "2026-03-11T00:00:00.000Z", "updatedAt": "2026-03-11T00:00:00.000Z"}, {"id": "19cde2263488a9f", "client": "Henkel", "trackerId": 80399, "trackerType": "CR", "module": "Manufacture", "plant": "WGQ", "subject": "Implementation of Weighing Scale Feature for Gross Weight Capture During Bulk FG Confirmation", "status": "PO received - assigned to developer ( Narendra)", "note": "SOW sent ", "priority": "", "project": "Henkel", "assignedTo": "", "author": "", "startDate": "", "dueDate": "", "donePct": null, "version": "", "parentId": "", "childIds": "", "relatedIds": "", "category": "Manufacture", "description": "", "addedAt": "2026-03-11T00:00:00.000Z", "updatedAt": "2026-03-11T00:00:00.000Z"}, {"id": "19cde2263481ce3", "client": "Henkel", "trackerId": 78023, "trackerType": "CR", "module": "Manufacture", "plant": "Rancho", "subject": "Enhancement to Capture Manual Tare Weight During Bulk FG Confirmation", "status": "New - rework on design ( savita ma'am comments)", "note": "Design shared - effort 04", "priority": "", "project": "Henkel", "assignedTo": "", "author": "", "startDate": "", "dueDate": "", "donePct": null, "version": "", "parentId": "", "childIds": "", "relatedIds": "", "category": "Manufacture", "description": "", "addedAt": "2026-03-11T00:00:00.000Z", "updatedAt": "2026-03-11T00:00:00.000Z"}, {"id": "19cde226348e6a7", "client": "Henkel", "trackerId": 79173, "trackerType": "CR", "module": "Staging", "plant": "Kunpeng", "subject": "Send an email notification in case of failure in staging order creation or pallet transfer", "status": "New - Design phase", "note": "", "priority": "", "project": "Henkel", "assignedTo": "", "author": "", "startDate": "", "dueDate": "", "donePct": null, "version": "", "parentId": "", "childIds": "", "relatedIds": "", "category": "Staging", "description": "", "addedAt": "2026-03-11T00:00:00.000Z", "updatedAt": "2026-03-11T00:00:00.000Z"}, {"id": "19cde2263484ee9", "client": "Henkel", "trackerId": 79174, "trackerType": "CR", "module": "Manufacture", "plant": "Kunpeng", "subject": "DG dashboard enhancements", "status": "New - Design phase", "note": "", "priority": "", "project": "Henkel", "assignedTo": "", "author": "", "startDate": "", "dueDate": "", "donePct": null, "version": "", "parentId": "", "childIds": "", "relatedIds": "", "category": "Manufacture", "description": "", "addedAt": "2026-03-11T00:00:00.000Z", "updatedAt": "2026-03-11T00:00:00.000Z"}, {"id": "19cde226348d484", "client": "Henkel", "trackerId": 81245, "trackerType": "CR", "module": "Staging", "plant": "Kunpeng", "subject": "Send process order number to swisslog when request replenishment", "status": "Need inputs from chythra ma'am ", "note": "", "priority": "", "project": "Henkel", "assignedTo": "", "author": "", "startDate": "", "dueDate": "", "donePct": null, "version": "", "parentId": "", "childIds": "", "relatedIds": "", "category": "Staging", "description": "", "addedAt": "2026-03-11T00:00:00.000Z", "updatedAt": "2026-03-11T00:00:00.000Z"}, {"id": "19cde226348ed52", "client": "Henkel", "trackerId": 81237, "trackerType": "Bug", "module": "Staging", "plant": "Kunpeng", "subject": "process order log has no reservation log", "status": "New", "note": "", "priority": "", "project": "Henkel", "assignedTo": "", "author": "", "startDate": "", "dueDate": "", "donePct": null, "version": "", "parentId": "", "childIds": "", "relatedIds": "", "category": "Staging", "description": "", "addedAt": "2026-03-11T00:00:00.000Z", "updatedAt": "2026-03-11T00:00:00.000Z"}, {"id": "19cde226348b5bb", "client": "Henkel", "trackerId": 62821, "trackerType": "CR", "module": "Manufacture", "plant": "All", "subject": "Batch Tracebility ", "status": "Competed", "note": "", "priority": "", "project": "Henkel", "assignedTo": "", "author": "", "startDate": "", "dueDate": "", "donePct": null, "version": "", "parentId": "", "childIds": "", "relatedIds": "", "category": "Manufacture", "description": "", "addedAt": "2026-03-11T00:00:00.000Z", "updatedAt": "2026-03-11T00:00:00.000Z"}, {"id": "19cde226348f11c", "client": "WorkItem", "trackerId": 71122, "trackerType": "WorkItem", "module": "", "plant": "", "subject": "Refinished goods dispatch - approach and Document", "status": "Document sent to customer and received the approval.", "note": "", "priority": "", "project": "WorkItem", "assignedTo": "", "author": "", "startDate": "", "dueDate": "", "donePct": null, "version": "", "parentId": "", "childIds": "", "relatedIds": "", "category": "", "description": "", "addedAt": "2026-03-11T00:00:00.000Z", "updatedAt": "2026-03-11T00:00:00.000Z"}];

// ── STATE ─────────────────────────────────────────────
let STATE = {
  tasks:  [],
  client: "all",
  filter: "all",
  type:   "all",
  sort:   "added_desc",
};
let _editingId = null;
let _deleteId  = null;

// ── PERSISTENCE ───────────────────────────────────────
function persist() { localStorage.setItem("rtt_tasks_v2", JSON.stringify(STATE.tasks)); }

function loadFromStorage() {
  try {
    const raw = localStorage.getItem("rtt_tasks_v2");
    if (raw) { STATE.tasks = JSON.parse(raw); return; }
  } catch(_) {}
  STATE.tasks = SEED_DATA.map(t => ({ ...t }));
  persist();
}

function uid() { return Date.now().toString(36) + Math.random().toString(36).slice(2,6); }

function statusGroup(status) {
  const s = (status || "").toLowerCase();
  if (s.includes("new") || s === "")                                                     return "new";
  if (s.includes("progress") || s.includes("design") || s.includes("testing") ||
      s.includes("waiting")  || s.includes("po received") || s.includes("assigned") ||
      s.includes("inputs"))                                                               return "active";
  if (s.includes("released") || s.includes("production") || s.includes("competed") ||
      s.includes("completed") || s.includes("approval")  || s.includes("closed"))       return "released";
  if (s.includes("reject") || s.includes("cancel"))                                      return "closed";
  return "active";
}

const CLIENT_COLORS = {
  BASF:     { bg:"#eff6ff", border:"#2563eb", text:"#1d4ed8" },
  Henkel:   { bg:"#fef3c7", border:"#d97706", text:"#92400e" },
  WorkItem: { bg:"#f0fdf4", border:"#059669", text:"#065f46" },
  Other:    { bg:"#f5f3ff", border:"#7c3aed", text:"#5b21b6" },
};
function clientColor(client) { return CLIENT_COLORS[client] || CLIENT_COLORS.Other; }

function typeBadgeStyle(type) {
  if (type === "Bug")      return "background:#fef2f2;color:#dc2626;border:1px solid #fecaca";
  if (type === "CR")       return "background:#eff6ff;color:#2563eb;border:1px solid #bfdbfe";
  if (type === "WorkItem") return "background:#f0fdf4;color:#059669;border:1px solid #a7f3d0";
  return "background:#f5f3ff;color:#7c3aed;border:1px solid #ddd6fe";
}

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
  document.getElementById("modal-title").textContent = `Edit #${task.trackerId}`;
  document.getElementById("modal-sub").textContent   = task.subject;
  document.getElementById("task-overlay").classList.remove("hidden");
}

function closeTaskModal() {
  document.getElementById("task-overlay").classList.add("hidden");
  _editingId = null;
}

function clearForm() {
  ["f-id","f-subject","f-module","f-plant","f-status","f-assigned","f-author",
   "f-start","f-due","f-done","f-version","f-parent","f-children","f-note"]
    .forEach(id => { const el = document.getElementById(id); if (el) el.value = ""; });
  document.getElementById("f-client").value       = "";
  document.getElementById("f-tracker-type").value = "";
  document.getElementById("f-priority").value     = "";
}

function fillForm(t) {
  const set = (id, val) => { const el = document.getElementById(id); if (el) el.value = val || ""; };
  set("f-id",       t.trackerId);   set("f-subject",  t.subject);
  set("f-status",   t.status);      set("f-module",   t.module);
  set("f-plant",    t.plant);       set("f-assigned", t.assignedTo);
  set("f-author",   t.author);      set("f-start",    t.startDate);
  set("f-due",      t.dueDate);     set("f-done",     t.donePct != null ? t.donePct : "");
  set("f-version",  t.version);     set("f-parent",   t.parentId);
  set("f-children", t.childIds);    set("f-note",     t.note);
  document.getElementById("f-client").value       = t.client || "";
  document.getElementById("f-tracker-type").value = t.trackerType || "";
  document.getElementById("f-priority").value     = t.priority || "";
}

function saveTask() {
  const trackerId = parseInt(document.getElementById("f-id").value.trim(), 10);
  const subject   = document.getElementById("f-subject").value.trim();
  const status    = document.getElementById("f-status").value.trim();
  const client    = document.getElementById("f-client").value;

  if (!trackerId || isNaN(trackerId)) { toast("Please enter a valid Tracker ID.", "error"); return; }
  if (!subject)   { toast("Subject / Description is required.", "error"); return; }
  if (!status)    { toast("Please enter a Status.", "error"); return; }
  if (!client)    { toast("Please select a Client / Project.", "error"); return; }

  if (!_editingId && STATE.tasks.find(t => String(t.trackerId) === String(trackerId))) {
    toast(`Tracker #${trackerId} already exists.`, "error"); return;
  }

  const taskData = {
    trackerId, subject, status, client,
    trackerType: document.getElementById("f-tracker-type").value,
    module:      document.getElementById("f-module").value.trim(),
    plant:       document.getElementById("f-plant").value.trim(),
    priority:    document.getElementById("f-priority").value,
    assignedTo:  document.getElementById("f-assigned").value.trim(),
    author:      document.getElementById("f-author").value.trim(),
    startDate:   document.getElementById("f-start").value,
    dueDate:     document.getElementById("f-due").value,
    donePct:     document.getElementById("f-done").value !== "" ? parseInt(document.getElementById("f-done").value, 10) : null,
    version:     document.getElementById("f-version").value.trim(),
    parentId:    document.getElementById("f-parent").value.trim(),
    childIds:    document.getElementById("f-children").value.trim(),
    note:        document.getElementById("f-note").value.trim(),
    project:     client,
  };

  if (_editingId) {
    const idx = STATE.tasks.findIndex(t => t.id === _editingId);
    if (idx !== -1) STATE.tasks[idx] = { ...STATE.tasks[idx], ...taskData, updatedAt: new Date().toISOString() };
    toast("Task updated ✓", "success");
  } else {
    STATE.tasks.unshift({ id: uid(), ...taskData, addedAt: new Date().toISOString(), updatedAt: new Date().toISOString() });
    toast(`Task #${trackerId} added ✓`, "success");
  }
  persist(); closeTaskModal(); renderCards(); updateSidebar();
}

function askDelete(id) {
  _deleteId = id;
  const t = STATE.tasks.find(x => x.id === id);
  document.getElementById("delete-id-label").textContent = t ? `#${t.trackerId} — ${t.subject}` : `#${id}`;
  document.getElementById("delete-overlay").classList.remove("hidden");
}
function closeDelete() { document.getElementById("delete-overlay").classList.add("hidden"); _deleteId = null; }
function confirmDelete() {
  STATE.tasks = STATE.tasks.filter(t => t.id !== _deleteId);
  persist(); closeDelete(); renderCards(); updateSidebar();
  toast("Task removed.", "");
}

function setClient(val, btn) {
  STATE.client = val;
  document.querySelectorAll("#client-pills .pill").forEach(p => p.classList.remove("active"));
  btn.classList.add("active"); renderCards();
}
function setFilter(val, btn) {
  STATE.filter = val;
  document.querySelectorAll("#status-pills .pill").forEach(p => p.classList.remove("active"));
  btn.classList.add("active"); renderCards();
}
function setType(val, btn) {
  STATE.type = val;
  document.querySelectorAll("#type-pills .pill").forEach(p => p.classList.remove("active"));
  btn.classList.add("active"); renderCards();
}
function setSort(val) { STATE.sort = val; renderCards(); }

function filteredSorted() {
  let list = [...STATE.tasks];
  const q = (document.getElementById("search-input")?.value || "").toLowerCase().trim();
  if (q) {
    list = list.filter(t =>
      String(t.trackerId).includes(q) ||
      (t.subject||"").toLowerCase().includes(q) || (t.client||"").toLowerCase().includes(q) ||
      (t.module||"").toLowerCase().includes(q)  || (t.plant||"").toLowerCase().includes(q)  ||
      (t.status||"").toLowerCase().includes(q)  || (t.trackerType||"").toLowerCase().includes(q) ||
      (t.note||"").toLowerCase().includes(q)
    );
  }
  if (STATE.client !== "all") list = list.filter(t => t.client === STATE.client);
  if (STATE.filter !== "all") list = list.filter(t => statusGroup(t.status) === STATE.filter);
  if (STATE.type   !== "all") list = list.filter(t => t.trackerType === STATE.type);
  switch (STATE.sort) {
    case "added_desc": list.sort((a,b) => new Date(b.addedAt)-new Date(a.addedAt)); break;
    case "added_asc":  list.sort((a,b) => new Date(a.addedAt)-new Date(b.addedAt)); break;
    case "id_asc":     list.sort((a,b) => a.trackerId-b.trackerId); break;
    case "id_desc":    list.sort((a,b) => b.trackerId-a.trackerId); break;
    case "client":     list.sort((a,b) => (a.client||"").localeCompare(b.client||"")); break;
  }
  return list;
}

function renderCards() {
  const container = document.getElementById("cards-container");
  const empty     = document.getElementById("empty-state");
  const list      = filteredSorted();
  if (list.length === 0) { empty.classList.remove("hidden"); container.innerHTML = ""; }
  else { empty.classList.add("hidden"); container.innerHTML = list.map(buildCard).join(""); }
  updateMainSub(list.length);
}

function buildCard(task) {
  const cc  = clientColor(task.client);
  const grp = statusGroup(task.status);
  const dotColors = { new:"#3b82f6", active:"#f59e0b", released:"#10b981", closed:"#6b7280" };
  const dotColor  = dotColors[grp] || "#94a3b8";

  const doneHTML = task.donePct != null
    ? `<div style="margin-top:8px"><div style="display:flex;justify-content:space-between;font-size:11px;color:var(--text-4);margin-bottom:3px"><span>Done</span><span>${task.donePct}%</span></div><div style="background:var(--border);border-radius:99px;height:5px;overflow:hidden"><div style="width:${task.donePct}%;height:100%;background:linear-gradient(90deg,#2563eb,#3b82f6);border-radius:99px"></div></div></div>` : "";

  let relHTML = "";
  if (task.parentId || task.childIds) {
    relHTML = `<div style="margin-bottom:10px">`;
    if (task.parentId) relHTML += `<span style="font-size:11px;background:var(--bg);border:1px solid var(--border);border-radius:5px;padding:2px 8px;margin-right:5px;color:var(--text-3)">⬆ Parent: <strong>#${esc(task.parentId)}</strong></span>`;
    if (task.childIds) task.childIds.split(",").map(s=>s.trim()).filter(Boolean).forEach(c => {
      relHTML += `<span style="font-size:11px;background:var(--bg);border:1px solid var(--border);border-radius:5px;padding:2px 8px;margin-right:5px;color:var(--text-3)">⬇ Child: <strong>#${esc(c)}</strong></span>`;
    });
    relHTML += `</div>`;
  }

  const noteHTML = task.note
    ? `<div style="background:#fefce8;border:1px solid #fef08a;border-radius:8px;padding:9px 12px;font-size:12.5px;color:var(--text-2);line-height:1.6;white-space:pre-wrap;word-break:break-word">${esc(task.note).replace(/\n/g,"<br>")}</div>`
    : `<div style="background:var(--surface-2);border:1px dashed var(--border);border-radius:8px;padding:9px 12px;font-size:12px;color:var(--text-4);font-style:italic">No comments yet. Click ✏ to add notes.</div>`;

  return `<div class="task-card" id="card-${task.id}">
    <div class="card-header" onclick="toggleCard('${task.id}')">
      <span class="card-chevron">▼</span>
      <div class="card-meta">
        <div class="card-top-row">
          <span class="card-id">#${task.trackerId}</span>
          ${task.trackerType ? `<span style="font-size:11px;font-weight:600;border-radius:5px;padding:2px 8px;${typeBadgeStyle(task.trackerType)}">${esc(task.trackerType)}</span>` : ""}
          <span style="display:inline-flex;align-items:center;gap:4px;font-size:11.5px;font-weight:600;background:${cc.bg};color:${cc.text};border:1px solid ${cc.border};border-radius:5px;padding:2px 9px">${esc(task.client||"")}</span>
          <span style="display:inline-flex;align-items:center;gap:5px;font-size:12px;color:var(--text-3)"><span style="width:7px;height:7px;border-radius:50%;background:${dotColor};display:inline-block;flex-shrink:0"></span>${esc(task.status||"")}</span>
        </div>
        <div class="card-subject">${esc(task.subject)}</div>
        <div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:4px">
          ${task.module ? `<span style="font-size:11px;color:var(--text-3)">📦 ${esc(task.module)}</span>` : ""}
          ${task.plant  ? `<span style="font-size:11px;color:var(--text-3)">🏭 ${esc(task.plant)}</span>`  : ""}
          ${task.dueDate ? `<span style="font-size:11px;color:var(--text-4);font-family:var(--mono)">📅 ${fmtDate(task.dueDate)}</span>` : ""}
        </div>
      </div>
      <div class="card-actions" onclick="event.stopPropagation()">
        <button class="icon-btn edit"   title="Edit"   onclick="openEditModal('${task.id}')">✏</button>
        <button class="icon-btn remove" title="Remove" onclick="askDelete('${task.id}')">✕</button>
      </div>
    </div>
    <div class="card-body">
      <div class="fields-grid">
        ${fi("Assigned To",t.assignedTo)} ${fi("Author",t.author)}
        ${fi("Priority",t.priority)}      ${fi("Version",t.version)}
        ${fi("Start Date",fmtDate(t.startDate))} ${fi("Due Date",fmtDate(t.dueDate))}
      </div>
      ${doneHTML}
      ${relHTML ? `<div class="divider"></div>${relHTML}` : ""}
      <div class="divider"></div>
      <div style="font-size:10px;font-weight:600;letter-spacing:.5px;text-transform:uppercase;color:var(--text-3);margin-bottom:7px">📝 Comments / Notes</div>
      ${noteHTML}
      <div style="font-size:10.5px;color:var(--text-4);margin-top:8px;font-family:var(--mono)">Added: ${fmtDateTime(task.addedAt)}</div>
    </div>
  </div>`;
}

function fi(label, val) {
  const empty = !val || val === "—";
  return `<div><div class="fi-label">${label}</div><div class="fi-value${empty?" empty":""}">${empty?"—":esc(String(val))}</div></div>`;
}

function toggleCard(id) { document.getElementById(`card-${id}`)?.classList.toggle("collapsed"); }

function updateSidebar() {
  const t = STATE.tasks;
  document.getElementById("s-total").textContent  = t.length;
  document.getElementById("s-new").textContent    = t.filter(x => statusGroup(x.status)==="new").length;
  document.getElementById("s-active").textContent = t.filter(x => statusGroup(x.status)==="active").length;
  document.getElementById("s-done").textContent   = t.filter(x => statusGroup(x.status)==="released").length;
}

function updateMainSub(count) {
  const el = document.getElementById("main-sub-text");
  if (el) el.textContent = `Showing ${count} of ${STATE.tasks.length} task${STATE.tasks.length!==1?"s":""}`;
}

function exportExcel() {
  if (!window.XLSX) { toast("SheetJS not loaded.", "error"); return; }
  if (STATE.tasks.length === 0) { toast("No tasks to export.", ""); return; }
  const wb = XLSX.utils.book_new();
  const clients = [...new Set(STATE.tasks.map(t => t.client || "Other"))];
  clients.forEach(client => {
    const ct = STATE.tasks.filter(t => (t.client||"Other") === client);
    let rows;
    if (client === "Henkel") {
      rows = ct.map((t,i) => ({"Sl.No":i+1,"Tracker type":t.trackerType||"","Module":t.module||"","Tracker id":t.trackerId,"Description":t.subject||"","Plant":t.plant||"","Status":t.status||"","Comments":t.note||""}));
    } else if (client === "WorkItem") {
      rows = ct.map((t,i) => ({"Sl.No":i+1,"Tracker id":t.trackerId,"Description":t.subject||"","Status":t.status||"","Comments":t.note||""}));
    } else {
      rows = ct.map((t,i) => ({"Sl.No":i+1,"Tracker type":t.trackerType||"","Tracker id":t.trackerId,"Description":t.subject||"","Status":t.status||"","Comments":t.note||""}));
    }
    const ws = XLSX.utils.json_to_sheet(rows);
    const w  = client==="Henkel"?[6,14,18,10,60,14,35,60]:client==="WorkItem"?[6,10,60,35,60]:[6,14,10,60,35,60];
    ws["!cols"] = w.map(w=>({wch:w}));
    XLSX.utils.book_append_sheet(wb, ws, client);
  });
  const summary = [["My Task Tracker — Export"],["Exported At",fmtDateTime(new Date().toISOString())],[""],["Client","Total","New","Active","Released"],...clients.map(c=>{const ct=STATE.tasks.filter(t=>(t.client||"Other")===c);return[c,ct.length,ct.filter(t=>statusGroup(t.status)==="new").length,ct.filter(t=>statusGroup(t.status)==="active").length,ct.filter(t=>statusGroup(t.status)==="released").length];}),[""],["Grand Total",STATE.tasks.length]];
  XLSX.utils.book_append_sheet(wb, XLSX.utils.aoa_to_sheet(summary), "Summary");
  XLSX.writeFile(wb, `task-tracker-${new Date().toISOString().slice(0,10)}.xlsx`);
  toast("Exported ✓", "success");
}

function importExcel() { document.getElementById("import-input").click(); }
function handleImport(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const wb = XLSX.read(e.target.result, {type:"array"});
      let imported=0, skipped=0;
      wb.SheetNames.filter(n=>n!=="Summary").forEach(sheetName => {
        XLSX.utils.sheet_to_json(wb.Sheets[sheetName]).forEach(row => {
          const tid = parseInt(row["Tracker id"]||row["Tracker ID"]||0,10);
          if (!tid || STATE.tasks.find(t=>t.trackerId===tid)) { skipped++; return; }
          STATE.tasks.push({id:uid(),client:sheetName,trackerId:tid,trackerType:row["Tracker type"]||"",module:row["Module"]||"",plant:row["Plant"]||"",subject:row["Description"]||"",status:row["Status"]||"",note:row["Comments"]||"",priority:"",assignedTo:"",author:"",startDate:"",dueDate:"",donePct:null,version:"",parentId:"",childIds:"",project:sheetName,addedAt:new Date().toISOString(),updatedAt:new Date().toISOString()});
          imported++;
        });
      });
      persist(); renderCards(); updateSidebar();
      toast(`Imported ${imported}${skipped?`, ${skipped} skipped`:""}`, "success");
    } catch(err) { toast("Import failed: "+err.message, "error"); }
    event.target.value = "";
  };
  reader.readAsArrayBuffer(file);
}

function esc(s) { return String(s||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"); }
function fmtDate(d) { if(!d)return""; try{return new Date(d+"T00:00:00").toLocaleDateString("en-IN",{day:"2-digit",month:"short",year:"numeric"});}catch(_){return d;} }
function fmtDateTime(d) { if(!d)return""; try{return new Date(d).toLocaleString("en-IN",{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"});}catch(_){return d;} }

let _tt=null;
function toast(msg,type="") {
  const el=document.getElementById("toast"); if(!el)return;
  el.textContent=msg; el.className="show"+(type?" "+type:"");
  if(_tt)clearTimeout(_tt); _tt=setTimeout(()=>{el.className="";},3000);
}

function overlayClickClose(event,id) {
  if(event.target.id===id){if(id==="task-overlay")closeTaskModal();if(id==="delete-overlay")closeDelete();}
}

document.addEventListener("keydown",e=>{ if(e.key==="Escape"){closeTaskModal();closeDelete();} });

(function init(){ loadFromStorage(); renderCards(); updateSidebar(); })();