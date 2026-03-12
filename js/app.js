/* MY TASK TRACKER - app.js - v4 */

const SEED_DATA = [{"id": "19cde2263484a15", "client": "BASF", "trackerId": 68898, "trackerType": "Bug", "module": "", "plant": "", "subject": "Loading Issue in Truck Management screen", "status": "Released to Production", "note": "", "priority": "", "project": "BASF", "assignedTo": "", "author": "", "startDate": "", "dueDate": "", "donePct": null, "version": "", "parentId": "", "childIds": "", "relatedIds": "", "category": "", "description": "", "addedAt": "2026-03-11T00:00:00.000Z", "updatedAt": "2026-03-11T00:00:00.000Z"}, {"id": "19cde226348b212", "client": "BASF", "trackerId": 17343, "trackerType": "CR", "module": "", "plant": "", "subject": "Handling PO Visibility in SFS Based on Delivery Order Creation in SAP ( RFG)", "status": "New", "note": "", "priority": "", "project": "BASF", "assignedTo": "", "author": "", "startDate": "", "dueDate": "", "donePct": null, "version": "", "parentId": "", "childIds": "", "relatedIds": "", "category": "", "description": "", "addedAt": "2026-03-11T00:00:00.000Z", "updatedAt": "2026-03-11T00:00:00.000Z"}, {"id": "19cde2263483f2f", "client": "Henkel", "trackerId": 68925, "trackerType": "Bug", "module": "Dispatch", "plant": "", "subject": "Issue during stock movement to dispatch gate", "status": "Released to henkel latam production server", "note": "", "priority": "", "project": "Henkel", "assignedTo": "", "author": "", "startDate": "", "dueDate": "", "donePct": null, "version": "", "parentId": "", "childIds": "", "relatedIds": "", "category": "Dispatch", "description": "", "addedAt": "2026-03-11T00:00:00.000Z", "updatedAt": "2026-03-11T00:00:00.000Z"}, {"id": "19cde226348942e", "client": "Henkel", "trackerId": 67960, "trackerType": "CR", "module": "Goods Receipt", "plant": "", "subject": "Itapevi GR Workflow changes", "status": "Local testing Completed", "note": "", "priority": "", "project": "Henkel", "assignedTo": "", "author": "", "startDate": "", "dueDate": "", "donePct": null, "version": "", "parentId": "", "childIds": "", "relatedIds": "", "category": "Goods Receipt", "description": "", "addedAt": "2026-03-11T00:00:00.000Z", "updatedAt": "2026-03-11T00:00:00.000Z"}, {"id": "19cde226348656b", "client": "Henkel", "trackerId": 67124, "trackerType": "Bug", "module": "Dispatch", "plant": "", "subject": "Dispatch shuttle process enhancement with Spanish translations", "status": "Released to henkel latam production server", "note": "", "priority": "", "project": "Henkel", "assignedTo": "", "author": "", "startDate": "", "dueDate": "", "donePct": null, "version": "", "parentId": "", "childIds": "", "relatedIds": "", "category": "Dispatch", "description": "", "addedAt": "2026-03-11T00:00:00.000Z", "updatedAt": "2026-03-11T00:00:00.000Z"}, {"id": "19cde226348d08b", "client": "Henkel", "trackerId": 69974, "trackerType": "Bug", "module": "Dispatch", "plant": "", "subject": "Delivery order unit issue in Stock transfer flow", "status": "Released to henkel latam production server", "note": "", "priority": "", "project": "Henkel", "assignedTo": "", "author": "", "startDate": "", "dueDate": "", "donePct": null, "version": "", "parentId": "", "childIds": "", "relatedIds": "", "category": "Dispatch", "description": "", "addedAt": "2026-03-11T00:00:00.000Z", "updatedAt": "2026-03-11T00:00:00.000Z"}, {"id": "19cde2263481e2a", "client": "Henkel", "trackerId": 70044, "trackerType": "Bug", "module": "Dispatch", "plant": "", "subject": "Dispatch go-live issue fix", "status": "Released to 203", "note": "Awaiting confirmation from client", "priority": "", "project": "Henkel", "assignedTo": "", "author": "", "startDate": "", "dueDate": "", "donePct": null, "version": "", "parentId": "", "childIds": "", "relatedIds": "", "category": "Dispatch", "description": "", "addedAt": "2026-03-11T00:00:00.000Z", "updatedAt": "2026-03-11T00:00:00.000Z"}, {"id": "19cde22634828ce", "client": "Henkel", "trackerId": 68278, "trackerType": "CR", "module": "Dispatch", "plant": "", "subject": "New enhancement to dispatch shuttle process", "status": "Closed", "note": "", "priority": "", "project": "Henkel", "assignedTo": "", "author": "", "startDate": "", "dueDate": "", "donePct": null, "version": "", "parentId": "", "childIds": "", "relatedIds": "", "category": "Dispatch", "description": "", "addedAt": "2026-03-11T00:00:00.000Z", "updatedAt": "2026-03-11T00:00:00.000Z"}, {"id": "19cde226348f70", "client": "Henkel", "trackerId": 80449, "trackerType": "CR", "module": "Manufacture", "plant": "Kunpeng", "subject": "Enable Re-Creation of Failed Staging Order via Mobile \u201cRequest Replenish\u201d", "status": "New", "note": "when staging order for issue addition and request replenishment is failed, user can click request replenish on mobile, system can pop up message and re create instead of creating on staging order web page", "priority": "", "project": "Henkel", "assignedTo": "", "author": "", "startDate": "", "dueDate": "", "donePct": null, "version": "", "parentId": "", "childIds": "", "relatedIds": "", "category": "Manufacture", "description": "", "addedAt": "2026-03-11T00:00:00.000Z", "updatedAt": "2026-03-11T00:00:00.000Z"}, {"id": "19cde226348dcf7", "client": "Henkel", "trackerId": 80393, "trackerType": "CR", "module": "Manufacture", "plant": "Rancho", "subject": "Display Gross & Tare Weight with Pallet Label Information", "status": "Waiting for PO", "note": "SOW sent ", "priority": "", "project": "Henkel", "assignedTo": "", "author": "", "startDate": "", "dueDate": "", "donePct": null, "version": "", "parentId": "", "childIds": "", "relatedIds": "", "category": "Manufacture", "description": "", "addedAt": "2026-03-11T00:00:00.000Z", "updatedAt": "2026-03-11T00:00:00.000Z"}, {"id": "19cde2263488a9f", "client": "Henkel", "trackerId": 80399, "trackerType": "CR", "module": "Manufacture", "plant": "WGQ", "subject": "Implementation of Weighing Scale Feature for Gross Weight Capture During Bulk FG Confirmation", "status": "PO received - assigned to developer ( Narendra)", "note": "SOW sent ", "priority": "", "project": "Henkel", "assignedTo": "", "author": "", "startDate": "", "dueDate": "", "donePct": null, "version": "", "parentId": "", "childIds": "", "relatedIds": "", "category": "Manufacture", "description": "", "addedAt": "2026-03-11T00:00:00.000Z", "updatedAt": "2026-03-11T00:00:00.000Z"}, {"id": "19cde2263481ce3", "client": "Henkel", "trackerId": 78023, "trackerType": "CR", "module": "Manufacture", "plant": "Rancho", "subject": "Enhancement to Capture Manual Tare Weight During Bulk FG Confirmation", "status": "New - rework on design ( savita ma'am comments)", "note": "Design shared - effort 04", "priority": "", "project": "Henkel", "assignedTo": "", "author": "", "startDate": "", "dueDate": "", "donePct": null, "version": "", "parentId": "", "childIds": "", "relatedIds": "", "category": "Manufacture", "description": "", "addedAt": "2026-03-11T00:00:00.000Z", "updatedAt": "2026-03-11T00:00:00.000Z"}, {"id": "19cde226348e6a7", "client": "Henkel", "trackerId": 79173, "trackerType": "CR", "module": "Staging", "plant": "Kunpeng", "subject": "\tSend an email notification in case of failure in staging order creation or pallet transfer", "status": "New - Design phase", "note": "", "priority": "", "project": "Henkel", "assignedTo": "", "author": "", "startDate": "", "dueDate": "", "donePct": null, "version": "", "parentId": "", "childIds": "", "relatedIds": "", "category": "Staging", "description": "", "addedAt": "2026-03-11T00:00:00.000Z", "updatedAt": "2026-03-11T00:00:00.000Z"}, {"id": "19cde2263484ee9", "client": "Henkel", "trackerId": 79174, "trackerType": "CR", "module": "Manufacture", "plant": "Kunpeng", "subject": "DG dashboard enhancements", "status": "New - Design phase", "note": "", "priority": "", "project": "Henkel", "assignedTo": "", "author": "", "startDate": "", "dueDate": "", "donePct": null, "version": "", "parentId": "", "childIds": "", "relatedIds": "", "category": "Manufacture", "description": "", "addedAt": "2026-03-11T00:00:00.000Z", "updatedAt": "2026-03-11T00:00:00.000Z"}, {"id": "19cde226348d484", "client": "Henkel", "trackerId": 81245, "trackerType": "CR", "module": "Staging", "plant": "Kunpeng", "subject": "Send process order number to swisslog when request replenishment", "status": "Need inputs from chythra ma'am ", "note": "", "priority": "", "project": "Henkel", "assignedTo": "", "author": "", "startDate": "", "dueDate": "", "donePct": null, "version": "", "parentId": "", "childIds": "", "relatedIds": "", "category": "Staging", "description": "", "addedAt": "2026-03-11T00:00:00.000Z", "updatedAt": "2026-03-11T00:00:00.000Z"}, {"id": "19cde226348ed52", "client": "Henkel", "trackerId": 81237, "trackerType": "Bug", "module": "Staging", "plant": "Kunpeng", "subject": "process order log has no reservation log", "status": "New", "note": "", "priority": "", "project": "Henkel", "assignedTo": "", "author": "", "startDate": "", "dueDate": "", "donePct": null, "version": "", "parentId": "", "childIds": "", "relatedIds": "", "category": "Staging", "description": "", "addedAt": "2026-03-11T00:00:00.000Z", "updatedAt": "2026-03-11T00:00:00.000Z"}, {"id": "19cde226348b5bb", "client": "Henkel", "trackerId": 62821, "trackerType": "CR", "module": "Manufacture", "plant": "All", "subject": "Batch Tracebility ", "status": "Competed", "note": "", "priority": "", "project": "Henkel", "assignedTo": "", "author": "", "startDate": "", "dueDate": "", "donePct": null, "version": "", "parentId": "", "childIds": "", "relatedIds": "", "category": "Manufacture", "description": "", "addedAt": "2026-03-11T00:00:00.000Z", "updatedAt": "2026-03-11T00:00:00.000Z"}, {"id": "19cde226348f11c", "client": "WorkItem", "trackerId": 71122, "trackerType": "WorkItem", "module": "", "plant": "", "subject": "Refinished goods dispatch - approach and Document", "status": "Document sent to customer and received the approval.", "note": "", "priority": "", "project": "WorkItem", "assignedTo": "", "author": "", "startDate": "", "dueDate": "", "donePct": null, "version": "", "parentId": "", "childIds": "", "relatedIds": "", "category": "", "description": "", "addedAt": "2026-03-11T00:00:00.000Z", "updatedAt": "2026-03-11T00:00:00.000Z"}];

var appState = {
  tasks: [],
  clientFilter: "all",
  statusFilter: "all",
  typeFilter:   "all",
  sortBy:       "added_desc",
  activeTab:    "active"
};
var editingTaskId  = null;
var deletingTaskId = null;

/* ── STORAGE ── */
function save() { localStorage.setItem("rtt_v4", JSON.stringify(appState.tasks)); }
function load() {
  try { var r = localStorage.getItem("rtt_v4"); if (r) { appState.tasks = JSON.parse(r); return; } } catch(e) {}
  appState.tasks = SEED_DATA.map(function(t) { return Object.assign({}, t); });
  save();
}
function uid() { return Date.now().toString(36) + Math.random().toString(36).slice(2,6); }

/* ── STATUS GROUP ── */
function statusGroup(s) {
  s = (s || "").toLowerCase();
  if (s.indexOf("new") >= 0 || s === "") return "new";
  if (s.indexOf("progress") >= 0 || s.indexOf("design") >= 0 || s.indexOf("testing") >= 0 ||
      s.indexOf("waiting") >= 0 || s.indexOf("po received") >= 0 || s.indexOf("assigned") >= 0 ||
      s.indexOf("inputs") >= 0) return "active";
  if (s.indexOf("released") >= 0 || s.indexOf("production") >= 0 || s.indexOf("competed") >= 0 ||
      s.indexOf("completed") >= 0 || s.indexOf("approval") >= 0 || s.indexOf("closed") >= 0) return "released";
  if (s.indexOf("reject") >= 0 || s.indexOf("cancel") >= 0) return "closed";
  return "active";
}

/* ── HTML ESCAPE ── */
function esc(s) { return String(s||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"); }

/* ── DATES ── */
function fmtDate(d) { if(!d)return""; try{return new Date(d+"T00:00:00").toLocaleDateString("en-IN",{day:"2-digit",month:"short",year:"numeric"});}catch(e){return d;} }
function fmtDT(d)   { if(!d)return""; try{return new Date(d).toLocaleString("en-IN",{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"});}catch(e){return d;} }

/* ── BADGE STYLES ── */
function typeBadgeClass(type) {
  if (type==="Bug")      return "badge bug";
  if (type==="CR")       return "badge cr";
  if (type==="WorkItem") return "badge workitem";
  return "badge other";
}
function clientBadgeClass(c) {
  if (c==="BASF")     return "client-badge basf";
  if (c==="Henkel")   return "client-badge henkel";
  if (c==="WorkItem") return "client-badge workitem";
  return "client-badge basf";
}
function cardClass(c) {
  if (c==="BASF")     return "task-card basf";
  if (c==="Henkel")   return "task-card henkel";
  if (c==="WorkItem") return "task-card workitem";
  return "task-card";
}

/* ── MODAL ── */
function openAddModal() {
  editingTaskId = null; clearForm();
  document.getElementById("modal-title").textContent = "Add New Task";
  document.getElementById("modal-sub").textContent   = "Fill in the details from your Redmine tracker";
  document.getElementById("task-overlay").classList.remove("hidden");
  document.getElementById("f-id").focus();
}
function openEditModal(id) {
  var task = findTask(id); if (!task) return;
  editingTaskId = id; fillForm(task);
  document.getElementById("modal-title").textContent = "Edit #" + task.trackerId;
  document.getElementById("modal-sub").textContent   = task.subject;
  document.getElementById("task-overlay").classList.remove("hidden");
}
function closeTaskModal() { document.getElementById("task-overlay").classList.add("hidden"); editingTaskId = null; }

function clearForm() {
  ["f-id","f-subject","f-module","f-plant","f-status","f-assigned","f-author",
   "f-start","f-due","f-done","f-version","f-parent","f-children","f-note"].forEach(function(id) {
    var el = document.getElementById(id); if (el) el.value = "";
  });
  document.getElementById("f-client").value = "";
  document.getElementById("f-tracker-type").value = "";
  document.getElementById("f-priority").value = "";
}
function fillForm(t) {
  function sv(id,v){ var el=document.getElementById(id); if(el) el.value=v||""; }
  sv("f-id",t.trackerId); sv("f-subject",t.subject); sv("f-status",t.status);
  sv("f-module",t.module); sv("f-plant",t.plant); sv("f-assigned",t.assignedTo);
  sv("f-author",t.author); sv("f-start",t.startDate); sv("f-due",t.dueDate);
  sv("f-done",t.donePct!=null?t.donePct:""); sv("f-version",t.version);
  sv("f-parent",t.parentId); sv("f-children",t.childIds); sv("f-note",t.note);
  document.getElementById("f-client").value = t.client||"";
  document.getElementById("f-tracker-type").value = t.trackerType||"";
  document.getElementById("f-priority").value = t.priority||"";
}
function findTask(id) { for(var i=0;i<appState.tasks.length;i++){if(appState.tasks[i].id===id)return appState.tasks[i];} return null; }

function saveTask() {
  var tid  = parseInt(document.getElementById("f-id").value.trim(),10);
  var subj = document.getElementById("f-subject").value.trim();
  var stat = document.getElementById("f-status").value.trim();
  var cli  = document.getElementById("f-client").value;
  if (!tid||isNaN(tid))  { toast("Please enter a valid Tracker ID.","error"); return; }
  if (!subj)             { toast("Subject is required.","error"); return; }
  if (!stat)             { toast("Please enter a Status.","error"); return; }
  if (!cli)              { toast("Please select a Client.","error"); return; }
  if (!editingTaskId) {
    for(var ci=0;ci<appState.tasks.length;ci++){
      if(String(appState.tasks[ci].trackerId)===String(tid)){ toast("Tracker #"+tid+" already exists.","error"); return; }
    }
  }
  var dp = document.getElementById("f-done").value;
  var data = {
    trackerId:tid, subject:subj, status:stat, client:cli,
    trackerType:document.getElementById("f-tracker-type").value,
    module:document.getElementById("f-module").value.trim(),
    plant:document.getElementById("f-plant").value.trim(),
    priority:document.getElementById("f-priority").value,
    assignedTo:document.getElementById("f-assigned").value.trim(),
    author:document.getElementById("f-author").value.trim(),
    startDate:document.getElementById("f-start").value,
    dueDate:document.getElementById("f-due").value,
    donePct:dp!==""?parseInt(dp,10):null,
    version:document.getElementById("f-version").value.trim(),
    parentId:document.getElementById("f-parent").value.trim(),
    childIds:document.getElementById("f-children").value.trim(),
    note:document.getElementById("f-note").value.trim(),
    project:cli
  };
  if (editingTaskId) {
    for(var ei=0;ei<appState.tasks.length;ei++){
      if(appState.tasks[ei].id===editingTaskId){
        appState.tasks[ei]=Object.assign({},appState.tasks[ei],data,{updatedAt:new Date().toISOString()}); break;
      }
    }
    toast("Task updated ✓","success");
  } else {
    data.id=uid(); data.addedAt=new Date().toISOString(); data.updatedAt=data.addedAt; data.hidden=false;
    appState.tasks.unshift(data);
    toast("Task #"+tid+" added ✓","success");
  }
  save(); closeTaskModal(); renderCards(); updateStats();
}

/* ── DELETE ── */
function askDelete(id) {
  deletingTaskId = id;
  var t = findTask(id);
  document.getElementById("delete-id-label").textContent = t ? "#"+t.trackerId+" — "+t.subject : "#"+id;
  document.getElementById("delete-overlay").classList.remove("hidden");
}
function closeDeleteModal() { document.getElementById("delete-overlay").classList.add("hidden"); deletingTaskId=null; }
function confirmDelete() {
  var nl=[]; for(var i=0;i<appState.tasks.length;i++){if(appState.tasks[i].id!==deletingTaskId)nl.push(appState.tasks[i]);}
  appState.tasks=nl; save(); closeDeleteModal(); renderCards(); updateStats();
  toast("Task removed.","");
}

/* ── HIDE / UNHIDE ── */
function hideTask(id) {
  var t = findTask(id); if (!t) return;
  t.hidden = true; save(); renderCards(); updateStats();
  toast("Task hidden. Find it in the Hidden tab.","");
}
function unhideTask(id) {
  var t = findTask(id); if (!t) return;
  t.hidden = false; save(); renderCards(); updateStats();
  toast("Task restored to Active.","success");
}

/* ── TABS ── */
function switchTab(tab, btn) {
  appState.activeTab = tab;
  document.querySelectorAll(".tab-btn").forEach(function(b){b.classList.remove("active");});
  btn.classList.add("active");
  renderCards();
}

/* ── FILTERS ── */
function setClient(val,btn){ appState.clientFilter=val; activePill("#client-pills",btn); renderCards(); }
function setFilter(val,btn){ appState.statusFilter=val; activePill("#status-pills",btn); renderCards(); }
function setType(val,btn)  { appState.typeFilter=val;   activePill("#type-pills",btn);   renderCards(); }
function setSort(val)      { appState.sortBy=val; renderCards(); }
function activePill(sel,btn){ document.querySelectorAll(sel+" .pill").forEach(function(p){p.classList.remove("active");}); btn.classList.add("active"); }

/* ── FILTER + SORT ── */
function getList() {
  var isHidden = appState.activeTab === "hidden";
  var result = appState.tasks.filter(function(t){ return isHidden ? t.hidden===true : !t.hidden; });

  var q = (document.getElementById("search-input")||{}).value;
  q = (q||"").toLowerCase().trim();
  if (q) {
    result = result.filter(function(t){
      return String(t.trackerId).indexOf(q)>=0 || (t.subject||"").toLowerCase().indexOf(q)>=0 ||
             (t.client||"").toLowerCase().indexOf(q)>=0 || (t.module||"").toLowerCase().indexOf(q)>=0 ||
             (t.plant||"").toLowerCase().indexOf(q)>=0  || (t.status||"").toLowerCase().indexOf(q)>=0 ||
             (t.trackerType||"").toLowerCase().indexOf(q)>=0 || (t.note||"").toLowerCase().indexOf(q)>=0;
    });
  }
  if (appState.clientFilter!=="all") result=result.filter(function(t){return t.client===appState.clientFilter;});
  if (appState.statusFilter!=="all") result=result.filter(function(t){return statusGroup(t.status)===appState.statusFilter;});
  if (appState.typeFilter!=="all")   result=result.filter(function(t){return t.trackerType===appState.typeFilter;});

  result.sort(function(a,b){
    if (appState.sortBy==="added_asc") return new Date(a.addedAt)-new Date(b.addedAt);
    if (appState.sortBy==="id_asc")    return a.trackerId-b.trackerId;
    if (appState.sortBy==="id_desc")   return b.trackerId-a.trackerId;
    if (appState.sortBy==="client")    return (a.client||"").localeCompare(b.client||"");
    return new Date(b.addedAt)-new Date(a.addedAt);
  });
  return result;
}

/* ── RENDER ── */
function renderCards() {
  var container = document.getElementById("cards-container");
  var emptyEl   = document.getElementById("empty-state");
  var list      = getList();

  /* update tab counts */
  var activeCount = appState.tasks.filter(function(t){return !t.hidden;}).length;
  var hiddenCount = appState.tasks.filter(function(t){return t.hidden===true;}).length;
  document.getElementById("tab-active-count").textContent = activeCount;
  document.getElementById("tab-hidden-count").textContent = hiddenCount;

  if (list.length===0) {
    emptyEl.classList.remove("hidden"); container.innerHTML="";
  } else {
    emptyEl.classList.add("hidden");
    var html="";
    if (appState.activeTab==="hidden") {
      html+='<div class="hidden-banner">👁 These tasks are hidden from your main view. Click <strong>Unhide</strong> to restore them.</div>';
    }
    for(var i=0;i<list.length;i++) html+=buildCard(list[i]);
    container.innerHTML=html;
  }

  var subEl=document.getElementById("main-sub");
  if(subEl) subEl.textContent="Showing "+list.length+" of "+appState.tasks.length+" task"+(appState.tasks.length!==1?"s":"");
}

function buildCard(task) {
  var grp = statusGroup(task.status);
  var typeB = task.trackerType ? '<span class="'+typeBadgeClass(task.trackerType)+'">'+esc(task.trackerType)+'</span>' : "";
  var cliB  = '<span class="'+clientBadgeClass(task.client)+'">'+esc(task.client||"")+'</span>';
  var modB  = task.module  ? '<span class="card-meta-tag">&#x1F4E6; '+esc(task.module)+'</span>' : "";
  var pltB  = task.plant   ? '<span class="card-meta-tag">&#x1F3ED; '+esc(task.plant)+'</span>'  : "";
  var dueB  = task.dueDate ? '<span class="card-meta-tag" style="font-family:var(--mono);font-size:11px">&#x1F4C5; '+fmtDate(task.dueDate)+'</span>' : "";

  /* action buttons */
  var hideBtn = task.hidden
    ? '<button class="card-action-btn unhide" title="Restore to Active" onclick="event.stopPropagation();unhideTask(\''+task.id+'\')">&#x1F441;</button>'
    : '<button class="card-action-btn hide"   title="Hide this task"    onclick="event.stopPropagation();hideTask(\''+task.id+'\')">&#x1F648;</button>';

  var summary =
    '<div class="card-summary" onclick="toggleCard(\''+task.id+'\')">' +
      '<span class="card-chevron">&#x25BC;</span>' +
      '<div class="card-left">' +
        '<div class="card-row1">' +
          '<span class="card-id">'+esc(String(task.trackerId))+'</span>' +
          typeB + cliB +
          '<span class="status-dot '+grp+'">'+esc(task.status||"")+'</span>' +
        '</div>' +
        '<div class="card-subject">'+esc(task.subject)+'</div>' +
        '<div class="card-meta-row">'+modB+pltB+dueB+'</div>' +
      '</div>' +
      '<div class="card-right" onclick="event.stopPropagation()">' +
        '<button class="card-action-btn edit" title="Edit" onclick="openEditModal(\''+task.id+'\')">&#x270F;</button>' +
        hideBtn +
        '<button class="card-action-btn del"  title="Remove" onclick="askDelete(\''+task.id+'\')">&#x1F5D1;</button>' +
      '</div>' +
    '</div>';

  /* done bar */
  var doneSection = "";
  if (task.donePct!=null) {
    doneSection = '<div class="done-bar"><div class="done-bar-top"><span>Progress</span><span>'+task.donePct+'%</span></div><div class="done-track"><div class="done-fill" style="width:'+task.donePct+'%"></div></div></div>';
  }

  /* relations */
  var relSection = "";
  if (task.parentId||task.childIds) {
    relSection='<div class="rel-row">';
    if(task.parentId) relSection+='<span class="rel-tag">&#x2B06; Parent #'+esc(task.parentId)+'</span>';
    if(task.childIds){var ca=task.childIds.split(",");for(var ci=0;ci<ca.length;ci++){var cid=ca[ci].trim();if(cid)relSection+='<span class="rel-tag">&#x2B07; Child #'+esc(cid)+'</span>';}}
    relSection+='</div>';
  }

  /* fields */
  function fi(l,v){ var e=!v||v==="—"; return '<div class="field-item"><div class="field-label">'+l+'</div><div class="field-value'+(e?' empty':'')+'">'+( e ? '&#x2014;' : esc(String(v)) )+'</div></div>'; }

  var noteSection = task.note
    ? '<div class="notes-box">'+esc(task.note).replace(/\n/g,"<br>")+'</div>'
    : '<div class="notes-empty">No comments yet &#x2014; click &#x270F; to add notes.</div>';

  var body =
    '<div class="card-body">' +
      '<div class="fields-grid">' +
        fi("Assigned To",task.assignedTo)+fi("Author",task.author)+fi("Priority",task.priority)+
        fi("Version",task.version)+fi("Start Date",fmtDate(task.startDate))+fi("Due Date",fmtDate(task.dueDate)) +
      '</div>' +
      doneSection +
      (relSection?'<div class="card-divider"></div>'+relSection:"") +
      '<div class="card-divider"></div>' +
      '<div class="field-label" style="margin-bottom:7px">&#x1F4DD; Comments / Notes</div>' +
      noteSection +
      '<div class="card-timestamp">Added: '+fmtDT(task.addedAt)+'</div>' +
    '</div>';

  return '<div class="'+cardClass(task.client)+(task.hidden?' hidden-card':'')+'" id="card-'+task.id+'">'+summary+body+'</div>';
}

function toggleCard(id) {
  var el = document.getElementById("card-"+id);
  if (el) el.classList.toggle("expanded");
}

/* ── STATS ── */
function updateStats() {
  var all = appState.tasks.filter(function(t){return !t.hidden;});
  var nc=0,ac=0,rc=0;
  for(var i=0;i<all.length;i++){
    var g=statusGroup(all[i].status);
    if(g==="new")nc++; if(g==="active")ac++; if(g==="released")rc++;
  }
  document.getElementById("s-total").textContent = all.length;
  document.getElementById("s-new").textContent   = nc;
  document.getElementById("s-active").textContent= ac;
  document.getElementById("s-done").textContent  = rc;
}

/* ── EXPORT ── */
function exportExcel() {
  if(!window.XLSX){toast("SheetJS not loaded.","error");return;}
  if(appState.tasks.length===0){toast("No tasks to export.","");return;}
  var wb=XLSX.utils.book_new();
  var clients=[];
  for(var i=0;i<appState.tasks.length;i++){var cn=appState.tasks[i].client||"Other";if(clients.indexOf(cn)<0)clients.push(cn);}
  for(var xc=0;xc<clients.length;xc++){
    var cname=clients[xc]; var cTasks=[]; var rows=[];
    for(var xt=0;xt<appState.tasks.length;xt++){if((appState.tasks[xt].client||"Other")===cname)cTasks.push(appState.tasks[xt]);}
    for(var xr=0;xr<cTasks.length;xr++){
      var t=cTasks[xr];
      if(cname==="Henkel") rows.push({"Sl.No":xr+1,"Tracker type":t.trackerType||"","Module":t.module||"","Tracker id":t.trackerId,"Description":t.subject||"","Plant":t.plant||"","Status":t.status||"","Comments":t.note||"","Hidden":t.hidden?"Yes":""});
      else if(cname==="WorkItem") rows.push({"Sl.No":xr+1,"Tracker id":t.trackerId,"Description":t.subject||"","Status":t.status||"","Comments":t.note||"","Hidden":t.hidden?"Yes":""});
      else rows.push({"Sl.No":xr+1,"Tracker type":t.trackerType||"","Tracker id":t.trackerId,"Description":t.subject||"","Status":t.status||"","Comments":t.note||"","Hidden":t.hidden?"Yes":""});
    }
    var ws=XLSX.utils.json_to_sheet(rows);
    var cw=cname==="Henkel"?[6,14,18,10,60,14,35,60,6]:cname==="WorkItem"?[6,10,60,35,60,6]:[6,14,10,60,35,60,6];
    ws["!cols"]=cw.map(function(w){return{wch:w};});
    XLSX.utils.book_append_sheet(wb,ws,cname);
  }
  var sd=[["My Task Tracker"],["Exported",fmtDT(new Date().toISOString())],[""],["Client","Total","New","Active","Released","Hidden"]];
  for(var xs=0;xs<clients.length;xs++){
    var sc=clients[xs]; var sct=[]; for(var st=0;st<appState.tasks.length;st++){if((appState.tasks[st].client||"Other")===sc)sct.push(appState.tasks[st]);}
    var sn=0,sa=0,sr=0,sh=0; for(var sg=0;sg<sct.length;sg++){var g=statusGroup(sct[sg].status);if(g==="new")sn++;if(g==="active")sa++;if(g==="released")sr++;if(sct[sg].hidden)sh++;}
    sd.push([sc,sct.length,sn,sa,sr,sh]);
  }
  sd.push([""]);sd.push(["Grand Total",appState.tasks.length]);
  XLSX.utils.book_append_sheet(wb,XLSX.utils.aoa_to_sheet(sd),"Summary");
  XLSX.writeFile(wb,"task-tracker-"+new Date().toISOString().slice(0,10)+".xlsx");
  toast("Exported ✓","success");
}

/* ── IMPORT ── */
function importExcel(){ document.getElementById("import-input").click(); }
function handleImport(event) {
  var file=event.target.files[0]; if(!file)return;
  var reader=new FileReader();
  reader.onload=function(e){
    try{
      var wb=XLSX.read(e.target.result,{type:"array"}); var imported=0,skipped=0;
      for(var si=0;si<wb.SheetNames.length;si++){
        var sn=wb.SheetNames[si]; if(sn==="Summary")continue;
        var rows=XLSX.utils.sheet_to_json(wb.Sheets[sn]);
        for(var ri=0;ri<rows.length;ri++){
          var row=rows[ri]; var tid=parseInt(row["Tracker id"]||row["Tracker ID"]||0,10);
          if(!tid){skipped++;continue;}
          var exists=false; for(var ei=0;ei<appState.tasks.length;ei++){if(appState.tasks[ei].trackerId===tid){exists=true;break;}}
          if(exists){skipped++;continue;}
          appState.tasks.push({id:uid(),client:sn,trackerId:tid,trackerType:row["Tracker type"]||"",module:row["Module"]||"",plant:row["Plant"]||"",subject:row["Description"]||"",status:row["Status"]||"",note:row["Comments"]||"",hidden:row["Hidden"]==="Yes",priority:"",assignedTo:"",author:"",startDate:"",dueDate:"",donePct:null,version:"",parentId:"",childIds:"",project:sn,addedAt:new Date().toISOString(),updatedAt:new Date().toISOString()});
          imported++;
        }
      }
      save(); renderCards(); updateStats();
      toast("Imported "+imported+(skipped?", "+skipped+" skipped":""),"success");
    }catch(err){toast("Import failed: "+err.message,"error");}
    event.target.value="";
  };
  reader.readAsArrayBuffer(file);
}

/* ── TOAST ── */
var _tt=null;
function toast(msg,type){
  var el=document.getElementById("toast"); if(!el)return;
  el.textContent=msg; el.className="show"+(type?" "+type:"");
  if(_tt)clearTimeout(_tt); _tt=setTimeout(function(){el.className="";},3000);
}

/* ── OVERLAY ── */
function overlayClose(event,id){
  if(event.target.id===id){if(id==="task-overlay")closeTaskModal();if(id==="delete-overlay")closeDeleteModal();}
}
document.addEventListener("keydown",function(e){if(e.key==="Escape"){closeTaskModal();closeDeleteModal();}});

/* ── INIT ── */
load(); renderCards(); updateStats();
