/* TASK TRACKER v5 - Light Theme */

const SEED_DATA = [{"id": "19cde2263484a15", "client": "BASF", "trackerId": 68898, "trackerType": "Bug", "module": "", "plant": "", "subject": "Loading Issue in Truck Management screen", "status": "Released to Production", "note": "", "priority": "", "project": "BASF", "assignedTo": "", "author": "", "startDate": "", "dueDate": "", "donePct": null, "version": "", "parentId": "", "childIds": "", "relatedIds": "", "category": "", "description": "", "addedAt": "2026-03-11T00:00:00.000Z", "updatedAt": "2026-03-11T00:00:00.000Z"}, {"id": "19cde226348b212", "client": "BASF", "trackerId": 17343, "trackerType": "CR", "module": "", "plant": "", "subject": "Handling PO Visibility in SFS Based on Delivery Order Creation in SAP ( RFG)", "status": "New", "note": "", "priority": "", "project": "BASF", "assignedTo": "", "author": "", "startDate": "", "dueDate": "", "donePct": null, "version": "", "parentId": "", "childIds": "", "relatedIds": "", "category": "", "description": "", "addedAt": "2026-03-11T00:00:00.000Z", "updatedAt": "2026-03-11T00:00:00.000Z"}, {"id": "19cde2263483f2f", "client": "Henkel", "trackerId": 68925, "trackerType": "Bug", "module": "Dispatch", "plant": "", "subject": "Issue during stock movement to dispatch gate", "status": "Released to henkel latam production server", "note": "", "priority": "", "project": "Henkel", "assignedTo": "", "author": "", "startDate": "", "dueDate": "", "donePct": null, "version": "", "parentId": "", "childIds": "", "relatedIds": "", "category": "Dispatch", "description": "", "addedAt": "2026-03-11T00:00:00.000Z", "updatedAt": "2026-03-11T00:00:00.000Z"}, {"id": "19cde226348942e", "client": "Henkel", "trackerId": 67960, "trackerType": "CR", "module": "Goods Receipt", "plant": "", "subject": "Itapevi GR Workflow changes", "status": "Local testing Completed", "note": "", "priority": "", "project": "Henkel", "assignedTo": "", "author": "", "startDate": "", "dueDate": "", "donePct": null, "version": "", "parentId": "", "childIds": "", "relatedIds": "", "category": "Goods Receipt", "description": "", "addedAt": "2026-03-11T00:00:00.000Z", "updatedAt": "2026-03-11T00:00:00.000Z"}, {"id": "19cde226348656b", "client": "Henkel", "trackerId": 67124, "trackerType": "Bug", "module": "Dispatch", "plant": "", "subject": "Dispatch shuttle process enhancement with Spanish translations", "status": "Released to henkel latam production server", "note": "", "priority": "", "project": "Henkel", "assignedTo": "", "author": "", "startDate": "", "dueDate": "", "donePct": null, "version": "", "parentId": "", "childIds": "", "relatedIds": "", "category": "Dispatch", "description": "", "addedAt": "2026-03-11T00:00:00.000Z", "updatedAt": "2026-03-11T00:00:00.000Z"}, {"id": "19cde226348d08b", "client": "Henkel", "trackerId": 69974, "trackerType": "Bug", "module": "Dispatch", "plant": "", "subject": "Delivery order unit issue in Stock transfer flow", "status": "Released to henkel latam production server", "note": "", "priority": "", "project": "Henkel", "assignedTo": "", "author": "", "startDate": "", "dueDate": "", "donePct": null, "version": "", "parentId": "", "childIds": "", "relatedIds": "", "category": "Dispatch", "description": "", "addedAt": "2026-03-11T00:00:00.000Z", "updatedAt": "2026-03-11T00:00:00.000Z"}, {"id": "19cde2263481e2a", "client": "Henkel", "trackerId": 70044, "trackerType": "Bug", "module": "Dispatch", "plant": "", "subject": "Dispatch go-live issue fix", "status": "Released to 203", "note": "Awaiting confirmation from client", "priority": "", "project": "Henkel", "assignedTo": "", "author": "", "startDate": "", "dueDate": "", "donePct": null, "version": "", "parentId": "", "childIds": "", "relatedIds": "", "category": "Dispatch", "description": "", "addedAt": "2026-03-11T00:00:00.000Z", "updatedAt": "2026-03-11T00:00:00.000Z"}, {"id": "19cde22634828ce", "client": "Henkel", "trackerId": 68278, "trackerType": "CR", "module": "Dispatch", "plant": "", "subject": "New enhancement to dispatch shuttle process", "status": "Closed", "note": "", "priority": "", "project": "Henkel", "assignedTo": "", "author": "", "startDate": "", "dueDate": "", "donePct": null, "version": "", "parentId": "", "childIds": "", "relatedIds": "", "category": "Dispatch", "description": "", "addedAt": "2026-03-11T00:00:00.000Z", "updatedAt": "2026-03-11T00:00:00.000Z"}, {"id": "19cde226348f70", "client": "Henkel", "trackerId": 80449, "trackerType": "CR", "module": "Manufacture", "plant": "Kunpeng", "subject": "Enable Re-Creation of Failed Staging Order via Mobile \u201cRequest Replenish\u201d", "status": "New", "note": "when staging order for issue addition and request replenishment is failed, user can click request replenish on mobile, system can pop up message and re create instead of creating on staging order web page", "priority": "", "project": "Henkel", "assignedTo": "", "author": "", "startDate": "", "dueDate": "", "donePct": null, "version": "", "parentId": "", "childIds": "", "relatedIds": "", "category": "Manufacture", "description": "", "addedAt": "2026-03-11T00:00:00.000Z", "updatedAt": "2026-03-11T00:00:00.000Z"}, {"id": "19cde226348dcf7", "client": "Henkel", "trackerId": 80393, "trackerType": "CR", "module": "Manufacture", "plant": "Rancho", "subject": "Display Gross & Tare Weight with Pallet Label Information", "status": "Waiting for PO", "note": "SOW sent ", "priority": "", "project": "Henkel", "assignedTo": "", "author": "", "startDate": "", "dueDate": "", "donePct": null, "version": "", "parentId": "", "childIds": "", "relatedIds": "", "category": "Manufacture", "description": "", "addedAt": "2026-03-11T00:00:00.000Z", "updatedAt": "2026-03-11T00:00:00.000Z"}, {"id": "19cde2263488a9f", "client": "Henkel", "trackerId": 80399, "trackerType": "CR", "module": "Manufacture", "plant": "WGQ", "subject": "Implementation of Weighing Scale Feature for Gross Weight Capture During Bulk FG Confirmation", "status": "PO received - assigned to developer ( Narendra)", "note": "SOW sent ", "priority": "", "project": "Henkel", "assignedTo": "", "author": "", "startDate": "", "dueDate": "", "donePct": null, "version": "", "parentId": "", "childIds": "", "relatedIds": "", "category": "Manufacture", "description": "", "addedAt": "2026-03-11T00:00:00.000Z", "updatedAt": "2026-03-11T00:00:00.000Z"}, {"id": "19cde2263481ce3", "client": "Henkel", "trackerId": 78023, "trackerType": "CR", "module": "Manufacture", "plant": "Rancho", "subject": "Enhancement to Capture Manual Tare Weight During Bulk FG Confirmation", "status": "New - rework on design ( savita ma'am comments)", "note": "Design shared - effort 04", "priority": "", "project": "Henkel", "assignedTo": "", "author": "", "startDate": "", "dueDate": "", "donePct": null, "version": "", "parentId": "", "childIds": "", "relatedIds": "", "category": "Manufacture", "description": "", "addedAt": "2026-03-11T00:00:00.000Z", "updatedAt": "2026-03-11T00:00:00.000Z"}, {"id": "19cde226348e6a7", "client": "Henkel", "trackerId": 79173, "trackerType": "CR", "module": "Staging", "plant": "Kunpeng", "subject": "\tSend an email notification in case of failure in staging order creation or pallet transfer", "status": "New - Design phase", "note": "", "priority": "", "project": "Henkel", "assignedTo": "", "author": "", "startDate": "", "dueDate": "", "donePct": null, "version": "", "parentId": "", "childIds": "", "relatedIds": "", "category": "Staging", "description": "", "addedAt": "2026-03-11T00:00:00.000Z", "updatedAt": "2026-03-11T00:00:00.000Z"}, {"id": "19cde2263484ee9", "client": "Henkel", "trackerId": 79174, "trackerType": "CR", "module": "Manufacture", "plant": "Kunpeng", "subject": "DG dashboard enhancements", "status": "New - Design phase", "note": "", "priority": "", "project": "Henkel", "assignedTo": "", "author": "", "startDate": "", "dueDate": "", "donePct": null, "version": "", "parentId": "", "childIds": "", "relatedIds": "", "category": "Manufacture", "description": "", "addedAt": "2026-03-11T00:00:00.000Z", "updatedAt": "2026-03-11T00:00:00.000Z"}, {"id": "19cde226348d484", "client": "Henkel", "trackerId": 81245, "trackerType": "CR", "module": "Staging", "plant": "Kunpeng", "subject": "Send process order number to swisslog when request replenishment", "status": "Need inputs from chythra ma'am ", "note": "", "priority": "", "project": "Henkel", "assignedTo": "", "author": "", "startDate": "", "dueDate": "", "donePct": null, "version": "", "parentId": "", "childIds": "", "relatedIds": "", "category": "Staging", "description": "", "addedAt": "2026-03-11T00:00:00.000Z", "updatedAt": "2026-03-11T00:00:00.000Z"}, {"id": "19cde226348ed52", "client": "Henkel", "trackerId": 81237, "trackerType": "Bug", "module": "Staging", "plant": "Kunpeng", "subject": "process order log has no reservation log", "status": "New", "note": "", "priority": "", "project": "Henkel", "assignedTo": "", "author": "", "startDate": "", "dueDate": "", "donePct": null, "version": "", "parentId": "", "childIds": "", "relatedIds": "", "category": "Staging", "description": "", "addedAt": "2026-03-11T00:00:00.000Z", "updatedAt": "2026-03-11T00:00:00.000Z"}, {"id": "19cde226348b5bb", "client": "Henkel", "trackerId": 62821, "trackerType": "CR", "module": "Manufacture", "plant": "All", "subject": "Batch Tracebility ", "status": "Competed", "note": "", "priority": "", "project": "Henkel", "assignedTo": "", "author": "", "startDate": "", "dueDate": "", "donePct": null, "version": "", "parentId": "", "childIds": "", "relatedIds": "", "category": "Manufacture", "description": "", "addedAt": "2026-03-11T00:00:00.000Z", "updatedAt": "2026-03-11T00:00:00.000Z"}, {"id": "19cde226348f11c", "client": "WorkItem", "trackerId": 71122, "trackerType": "WorkItem", "module": "", "plant": "", "subject": "Refinished goods dispatch - approach and Document", "status": "Document sent to customer and received the approval.", "note": "", "priority": "", "project": "WorkItem", "assignedTo": "", "author": "", "startDate": "", "dueDate": "", "donePct": null, "version": "", "parentId": "", "childIds": "", "relatedIds": "", "category": "", "description": "", "addedAt": "2026-03-11T00:00:00.000Z", "updatedAt": "2026-03-11T00:00:00.000Z"}];

var S = { tasks:[], client:"all", status:"all", type:"all", sort:"added_desc", tab:"active" };
var editId=null, delId=null;

function save(){ localStorage.setItem("rtt_v5",JSON.stringify(S.tasks)); }
function load(){
  try{ var r=localStorage.getItem("rtt_v5"); if(r){S.tasks=JSON.parse(r);return;} }catch(e){}
  S.tasks=SEED_DATA.map(function(t){return Object.assign({},t);});
  save();
}
function uid(){ return Date.now().toString(36)+Math.random().toString(36).slice(2,6); }

function grp(s){
  s=(s||"").toLowerCase();
  if(s.indexOf("new")>=0||s==="")return "new";
  if(s.indexOf("progress")>=0||s.indexOf("design")>=0||s.indexOf("testing")>=0||
     s.indexOf("waiting")>=0||s.indexOf("po received")>=0||s.indexOf("assigned")>=0||s.indexOf("inputs")>=0)return "active";
  if(s.indexOf("released")>=0||s.indexOf("production")>=0||s.indexOf("competed")>=0||
     s.indexOf("completed")>=0||s.indexOf("approval")>=0||s.indexOf("closed")>=0)return "released";
  if(s.indexOf("reject")>=0||s.indexOf("cancel")>=0)return "closed";
  return "active";
}

function esc(s){ return String(s||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"); }
function fd(d){ if(!d)return""; try{return new Date(d+"T00:00:00").toLocaleDateString("en-IN",{day:"2-digit",month:"short",year:"numeric"});}catch(e){return d;} }
function fdt(d){ if(!d)return""; try{return new Date(d).toLocaleString("en-IN",{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"});}catch(e){return d;} }

/* Modals */
function openAddModal(){
  editId=null; clearForm();
  document.getElementById("modal-title").textContent="Add New Task";
  document.getElementById("modal-sub").textContent="Fill in the details from your Redmine tracker";
  document.getElementById("task-overlay").classList.remove("hidden");
  document.getElementById("f-id").focus();
}
function openEditModal(id){
  var t=find(id); if(!t)return;
  editId=id; fillForm(t);
  document.getElementById("modal-title").textContent="Edit #"+t.trackerId;
  document.getElementById("modal-sub").textContent=t.subject;
  document.getElementById("task-overlay").classList.remove("hidden");
}
function closeTaskModal(){ document.getElementById("task-overlay").classList.add("hidden"); editId=null; }

function clearForm(){
  ["f-id","f-subject","f-module","f-plant","f-status","f-assigned","f-author","f-start","f-due","f-done","f-version","f-parent","f-children","f-note"].forEach(function(x){var e=document.getElementById(x);if(e)e.value="";});
  ["f-client","f-tracker-type","f-priority"].forEach(function(x){var e=document.getElementById(x);if(e)e.value="";});
}
function fillForm(t){
  function s(id,v){var e=document.getElementById(id);if(e)e.value=v||"";}
  s("f-id",t.trackerId);s("f-subject",t.subject);s("f-status",t.status);s("f-module",t.module);s("f-plant",t.plant);
  s("f-assigned",t.assignedTo);s("f-author",t.author);s("f-start",t.startDate);s("f-due",t.dueDate);
  s("f-done",t.donePct!=null?t.donePct:"");s("f-version",t.version);s("f-parent",t.parentId);s("f-children",t.childIds);s("f-note",t.note);
  document.getElementById("f-client").value=t.client||"";
  document.getElementById("f-tracker-type").value=t.trackerType||"";
  document.getElementById("f-priority").value=t.priority||"";
}
function find(id){ for(var i=0;i<S.tasks.length;i++){if(S.tasks[i].id===id)return S.tasks[i];} return null; }

function saveTask(){
  var tid=parseInt(document.getElementById("f-id").value.trim(),10);
  var sub=document.getElementById("f-subject").value.trim();
  var sta=document.getElementById("f-status").value.trim();
  var cli=document.getElementById("f-client").value;
  if(!tid||isNaN(tid)){toast("Please enter a valid Tracker ID.","error");return;}
  if(!sub){toast("Subject is required.","error");return;}
  if(!sta){toast("Please enter a Status.","error");return;}
  if(!cli){toast("Please select a Client.","error");return;}
  if(!editId){for(var ci=0;ci<S.tasks.length;ci++){if(String(S.tasks[ci].trackerId)===String(tid)){toast("Tracker #"+tid+" already exists.","error");return;}}}
  var dp=document.getElementById("f-done").value;
  var d={trackerId:tid,subject:sub,status:sta,client:cli,
    trackerType:document.getElementById("f-tracker-type").value,
    module:document.getElementById("f-module").value.trim(),plant:document.getElementById("f-plant").value.trim(),
    priority:document.getElementById("f-priority").value,assignedTo:document.getElementById("f-assigned").value.trim(),
    author:document.getElementById("f-author").value.trim(),startDate:document.getElementById("f-start").value,
    dueDate:document.getElementById("f-due").value,donePct:dp!==""?parseInt(dp,10):null,
    version:document.getElementById("f-version").value.trim(),parentId:document.getElementById("f-parent").value.trim(),
    childIds:document.getElementById("f-children").value.trim(),note:document.getElementById("f-note").value.trim(),project:cli};
  if(editId){for(var ei=0;ei<S.tasks.length;ei++){if(S.tasks[ei].id===editId){S.tasks[ei]=Object.assign({},S.tasks[ei],d,{updatedAt:new Date().toISOString()});break;}} toast("Task updated ✓","success");}
  else{d.id=uid();d.addedAt=new Date().toISOString();d.updatedAt=d.addedAt;d.hidden=false;S.tasks.unshift(d);toast("Task #"+tid+" added ✓","success");}
  save();closeTaskModal();renderCards();updateStats();
}

/* Delete */
function askDelete(id){
  delId=id; var t=find(id);
  document.getElementById("delete-id-label").textContent=t?"#"+t.trackerId+" — "+t.subject:"#"+id;
  document.getElementById("delete-overlay").classList.remove("hidden");
}
function closeDeleteModal(){ document.getElementById("delete-overlay").classList.add("hidden"); delId=null; }
function confirmDelete(){
  var nl=[];for(var i=0;i<S.tasks.length;i++){if(S.tasks[i].id!==delId)nl.push(S.tasks[i]);}
  S.tasks=nl;save();closeDeleteModal();renderCards();updateStats();toast("Task removed.","");
}

/* Hide/Unhide */
function hideTask(id){ var t=find(id);if(!t)return;t.hidden=true;save();renderCards();updateStats();toast("Task hidden — see Hidden tab.",""); }
function unhideTask(id){ var t=find(id);if(!t)return;t.hidden=false;save();renderCards();updateStats();toast("Task restored to Active.","success"); }

/* Tabs */
function switchTab(tab,btn){
  S.tab=tab;
  document.querySelectorAll(".tab-btn").forEach(function(b){b.classList.remove("active");});
  btn.classList.add("active");
  renderCards();
}

/* Filters */
function setClient(v,b){S.client=v;ap("#client-pills",b);renderCards();}
function setFilter(v,b){S.status=v;ap("#status-pills",b);renderCards();}
function setType(v,b)  {S.type=v;  ap("#type-pills",b);  renderCards();}
function setSort(v)    {S.sort=v;   renderCards();}
function ap(sel,btn){ document.querySelectorAll(sel+" .pill").forEach(function(p){p.classList.remove("active");}); btn.classList.add("active"); }

function getList(){
  var isH=S.tab==="hidden";
  var list=S.tasks.filter(function(t){return isH?t.hidden===true:!t.hidden;});
  var q=((document.getElementById("search-input")||{}).value||"").toLowerCase().trim();
  if(q) list=list.filter(function(t){return String(t.trackerId).indexOf(q)>=0||(t.subject||"").toLowerCase().indexOf(q)>=0||(t.client||"").toLowerCase().indexOf(q)>=0||(t.module||"").toLowerCase().indexOf(q)>=0||(t.plant||"").toLowerCase().indexOf(q)>=0||(t.status||"").toLowerCase().indexOf(q)>=0||(t.trackerType||"").toLowerCase().indexOf(q)>=0||(t.note||"").toLowerCase().indexOf(q)>=0;});
  if(S.client!=="all")list=list.filter(function(t){return t.client===S.client;});
  if(S.status!=="all")list=list.filter(function(t){return grp(t.status)===S.status;});
  if(S.type!=="all")  list=list.filter(function(t){return t.trackerType===S.type;});
  list.sort(function(a,b){
    if(S.sort==="added_asc")return new Date(a.addedAt)-new Date(b.addedAt);
    if(S.sort==="id_asc")   return a.trackerId-b.trackerId;
    if(S.sort==="id_desc")  return b.trackerId-a.trackerId;
    if(S.sort==="client")   return(a.client||"").localeCompare(b.client||"");
    return new Date(b.addedAt)-new Date(a.addedAt);
  });
  return list;
}

function renderCards(){
  var con=document.getElementById("cards-container");
  var emp=document.getElementById("empty-state");
  var list=getList();

  var ac=S.tasks.filter(function(t){return !t.hidden;}).length;
  var hc=S.tasks.filter(function(t){return t.hidden===true;}).length;
  document.getElementById("tab-active-count").textContent=ac;
  document.getElementById("tab-hidden-count").textContent=hc;

  if(list.length===0){emp.classList.remove("hidden");con.innerHTML="";}
  else{
    emp.classList.add("hidden");
    var html="";
    if(S.tab==="hidden") html='<div class="hidden-banner">&#x1F441; These tasks are hidden from your main view. Click Unhide to restore them.</div>';
    for(var i=0;i<list.length;i++) html+=buildCard(list[i]);
    con.innerHTML=html;
  }
  var sub=document.getElementById("main-sub");
  if(sub) sub.textContent="Showing "+list.length+" of "+S.tasks.length+" task"+(S.tasks.length!==1?"s":"");
}

function buildCard(t){
  var g=grp(t.status);

  /* badges */
  var tBadge=""; if(t.trackerType){var tc=t.trackerType==="Bug"?"bug":t.trackerType==="CR"?"cr":t.trackerType==="WorkItem"?"workitem":"other"; tBadge='<span class="badge '+tc+'">'+esc(t.trackerType)+'</span>';}
  var cBadge='<span class="client-badge '+(t.client==="BASF"?"basf":t.client==="Henkel"?"henkel":t.client==="WorkItem"?"workitem":"basf")+'">'+esc(t.client||"")+'</span>';
  var modT=t.module?'<span class="card-meta-tag">&#x1F4E6; '+esc(t.module)+'</span>':"";
  var pltT=t.plant?'<span class="card-meta-tag">&#x1F3ED; '+esc(t.plant)+'</span>':"";
  var dueT=t.dueDate?'<span class="card-meta-tag" style="font-family:var(--mono);font-size:11px">&#x1F4C5; '+fd(t.dueDate)+'</span>':"";

  /* hide/unhide btn */
  var hBtn=t.hidden
    ?'<button class="cab unhide" title="Restore to Active" onclick="event.stopPropagation();unhideTask(\''+t.id+'\')">&#x1F441;</button>'
    :'<button class="cab hide"   title="Hide this task"    onclick="event.stopPropagation();hideTask(\''+t.id+'\')">&#x1F648;</button>';

  var summary=
    '<div class="card-summary" onclick="toggleCard(\''+t.id+'\')">' +
      '<span class="card-chevron">&#x25BC;</span>' +
      '<div class="card-left">' +
        '<div class="card-row1">' +
          '<span class="card-id">'+esc(String(t.trackerId))+'</span>' +
          tBadge+cBadge+
          '<span class="status-chip '+g+'">'+esc(t.status||"")+'</span>'+
        '</div>'+
        '<div class="card-subject">'+esc(t.subject)+'</div>'+
        '<div class="card-meta-row">'+modT+pltT+dueT+'</div>'+
      '</div>'+
      '<div class="card-right" onclick="event.stopPropagation()">'+
        '<button class="cab edit" title="Edit" onclick="openEditModal(\''+t.id+'\')">&#x270F;</button>'+
        hBtn+
        '<button class="cab del" title="Remove" onclick="askDelete(\''+t.id+'\')">&#x1F5D1;</button>'+
      '</div>'+
    '</div>';

  /* done bar */
  var done=""; if(t.donePct!=null) done='<div class="done-bar"><div class="done-top"><span>Progress</span><span>'+t.donePct+'%</span></div><div class="done-track"><div class="done-fill" style="width:'+t.donePct+'%"></div></div></div>';

  /* relations */
  var rel="";
  if(t.parentId||t.childIds){
    rel='<div class="rel-row">';
    if(t.parentId)rel+='<span class="rel-tag">&#x2B06; Parent #'+esc(t.parentId)+'</span>';
    if(t.childIds){var ca=t.childIds.split(",");for(var ci=0;ci<ca.length;ci++){var cid=ca[ci].trim();if(cid)rel+='<span class="rel-tag">&#x2B07; Child #'+esc(cid)+'</span>';}}
    rel+='</div>';
  }

  /* fields helper */
  function fi(l,v){var e=!v||v==="—";return '<div class="fi"><div class="fi-label">'+l+'</div><div class="fi-value'+(e?' empty':'')+'">'+( e?'&#x2014;':esc(String(v)))+'</div></div>';}

  var noteH=t.note?'<div class="notes-box">'+esc(t.note).replace(/\n/g,"<br>")+'</div>':'<div class="notes-empty">No comments yet &#x2014; click &#x270F; to add notes.</div>';

  var body=
    '<div class="card-body">'+
      '<div class="fields-grid">'+fi("Assigned To",t.assignedTo)+fi("Author",t.author)+fi("Priority",t.priority)+fi("Version",t.version)+fi("Start Date",fd(t.startDate))+fi("Due Date",fd(t.dueDate))+'</div>'+
      done+(rel?'<div class="divider"></div>'+rel:"")+
      '<div class="divider"></div>'+
      '<div class="fi-label" style="margin-bottom:7px">&#x1F4DD; Comments / Notes</div>'+
      noteH+
      '<div class="card-ts">Added: '+fdt(t.addedAt)+'</div>'+
    '</div>';

  var cardC="task-card"+(t.client==="BASF"?" basf":t.client==="Henkel"?" henkel":t.client==="WorkItem"?" workitem":"")+(t.hidden?" hidden-card":"");
  return '<div class="'+cardC+'" id="card-'+t.id+'">'+summary+body+'</div>';
}

function toggleCard(id){ var el=document.getElementById("card-"+id);if(el)el.classList.toggle("expanded"); }

function updateStats(){
  var all=S.tasks.filter(function(t){return !t.hidden;});
  var nc=0,ac=0,rc=0;
  for(var i=0;i<all.length;i++){var g=grp(all[i].status);if(g==="new")nc++;if(g==="active")ac++;if(g==="released")rc++;}
  document.getElementById("s-total").textContent=all.length;
  document.getElementById("s-new").textContent=nc;
  document.getElementById("s-active").textContent=ac;
  document.getElementById("s-done").textContent=rc;
}

function exportExcel(){
  if(!window.XLSX){toast("SheetJS not loaded.","error");return;}
  if(S.tasks.length===0){toast("No tasks to export.","");return;}
  var wb=XLSX.utils.book_new();
  var cls=[];for(var i=0;i<S.tasks.length;i++){var cn=S.tasks[i].client||"Other";if(cls.indexOf(cn)<0)cls.push(cn);}
  for(var xc=0;xc<cls.length;xc++){
    var cn=cls[xc];var ct=[];var rows=[];
    for(var xt=0;xt<S.tasks.length;xt++){if((S.tasks[xt].client||"Other")===cn)ct.push(S.tasks[xt]);}
    for(var xr=0;xr<ct.length;xr++){
      var t=ct[xr];
      if(cn==="Henkel")rows.push({"Sl.No":xr+1,"Tracker type":t.trackerType||"","Module":t.module||"","Tracker id":t.trackerId,"Description":t.subject||"","Plant":t.plant||"","Status":t.status||"","Comments":t.note||"","Hidden":t.hidden?"Yes":""});
      else if(cn==="WorkItem")rows.push({"Sl.No":xr+1,"Tracker id":t.trackerId,"Description":t.subject||"","Status":t.status||"","Comments":t.note||"","Hidden":t.hidden?"Yes":""});
      else rows.push({"Sl.No":xr+1,"Tracker type":t.trackerType||"","Tracker id":t.trackerId,"Description":t.subject||"","Status":t.status||"","Comments":t.note||"","Hidden":t.hidden?"Yes":""});
    }
    var ws=XLSX.utils.json_to_sheet(rows);
    var cw=cn==="Henkel"?[6,14,18,10,60,14,35,60,6]:cn==="WorkItem"?[6,10,60,35,60,6]:[6,14,10,60,35,60,6];
    ws["!cols"]=cw.map(function(w){return{wch:w};});
    XLSX.utils.book_append_sheet(wb,ws,cn);
  }
  var sd=[["Task Tracker"],["Exported",fdt(new Date().toISOString())],[""],["Client","Total","New","Active","Released","Hidden"]];
  for(var xs=0;xs<cls.length;xs++){var sc=cls[xs];var sct=[];for(var st=0;st<S.tasks.length;st++){if((S.tasks[st].client||"Other")===sc)sct.push(S.tasks[st]);}var sn=0,sa=0,sr=0,sh=0;for(var sg=0;sg<sct.length;sg++){var g=grp(sct[sg].status);if(g==="new")sn++;if(g==="active")sa++;if(g==="released")sr++;if(sct[sg].hidden)sh++;}sd.push([sc,sct.length,sn,sa,sr,sh]);}
  sd.push([""]);sd.push(["Grand Total",S.tasks.length]);
  XLSX.utils.book_append_sheet(wb,XLSX.utils.aoa_to_sheet(sd),"Summary");
  XLSX.writeFile(wb,"task-tracker-"+new Date().toISOString().slice(0,10)+".xlsx");
  toast("Exported ✓","success");
}

function importExcel(){ document.getElementById("import-input").click(); }
function handleImport(event){
  var file=event.target.files[0];if(!file)return;
  var reader=new FileReader();
  reader.onload=function(e){
    try{
      var wb=XLSX.read(e.target.result,{type:"array"});var imported=0,skipped=0;
      for(var si=0;si<wb.SheetNames.length;si++){
        var sn=wb.SheetNames[si];if(sn==="Summary")continue;
        var rows=XLSX.utils.sheet_to_json(wb.Sheets[sn]);
        for(var ri=0;ri<rows.length;ri++){
          var row=rows[ri];var tid=parseInt(row["Tracker id"]||row["Tracker ID"]||0,10);
          if(!tid){skipped++;continue;}
          var ex=false;for(var ei=0;ei<S.tasks.length;ei++){if(S.tasks[ei].trackerId===tid){ex=true;break;}}
          if(ex){skipped++;continue;}
          S.tasks.push({id:uid(),client:sn,trackerId:tid,trackerType:row["Tracker type"]||"",module:row["Module"]||"",plant:row["Plant"]||"",subject:row["Description"]||"",status:row["Status"]||"",note:row["Comments"]||"",hidden:row["Hidden"]==="Yes",priority:"",assignedTo:"",author:"",startDate:"",dueDate:"",donePct:null,version:"",parentId:"",childIds:"",project:sn,addedAt:new Date().toISOString(),updatedAt:new Date().toISOString()});
          imported++;
        }
      }
      save();renderCards();updateStats();
      toast("Imported "+imported+(skipped?", "+skipped+" skipped":""),"success");
    }catch(err){toast("Import failed: "+err.message,"error");}
    event.target.value="";
  };
  reader.readAsArrayBuffer(file);
}

var _tt=null;
function toast(msg,type){var el=document.getElementById("toast");if(!el)return;el.textContent=msg;el.className="show"+(type?" "+type:"");if(_tt)clearTimeout(_tt);_tt=setTimeout(function(){el.className="";},3000);}
function overlayClose(e,id){if(e.target.id===id){if(id==="task-overlay")closeTaskModal();if(id==="delete-overlay")closeDeleteModal();}}
document.addEventListener("keydown",function(e){if(e.key==="Escape"){closeTaskModal();closeDeleteModal();}});

load(); renderCards(); updateStats();
