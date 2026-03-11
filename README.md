# 📋 My Task Tracker

A personal Redmine task tracker — no backend, no login, no CORS issues.  
You manually enter your task details, add personal notes, and everything is saved in your browser and exportable to Excel.

---

## ✨ Features

| Feature | Details |
|---------|---------|
| **Add tasks manually** | Enter Tracker ID, subject, status, priority, dates, and all fields |
| **Personal notes** | Add post-demo notes, observations, anything personal per task |
| **Parent / Child / Related** | Record related tracker IDs for full context |
| **Filter by status** | New, In Progress, Feedback, Resolved, Closed, Rejected |
| **Sort** | By date added, tracker ID, due date, status, or priority |
| **Search** | Search across ID, title, project, category |
| **Due date alerts** | Overdue tasks are highlighted in red |
| **Export to Excel** | Download `.xlsx` with all fields + summary tab |
| **Import from Excel** | Re-import your exported file to restore or migrate data |
| **Local storage** | Data saved in your browser — survives page refresh |
| **GitHub Pages ready** | Pure HTML + CSS + JS, zero build step |

---

## 🚀 Deploy to GitHub Pages (5 minutes)

### Step 1 — Create a GitHub repository

Go to [github.com/new](https://github.com/new) and create a new repo (e.g. `my-task-tracker`).

### Step 2 — Upload these files

You can either use Git or just drag-and-drop in the GitHub UI:

```
my-task-tracker/
├── index.html
├── css/
│   └── style.css
└── js/
    └── app.js
```

**Using Git:**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/my-task-tracker.git
git push -u origin main
```

### Step 3 — Enable GitHub Pages

1. Go to your repo on GitHub
2. Click **Settings** → **Pages** (left sidebar)
3. Under **Source**: choose `Deploy from a branch`
4. Branch: `main` | Folder: `/ (root)`
5. Click **Save**

Your app will be live at:
```
https://YOUR_USERNAME.github.io/my-task-tracker/
```

---

## 💾 Data & Backup

| Data | Where stored |
|------|-------------|
| All tasks and notes | Browser `localStorage` (stays on your machine) |
| Excel backup | Download on demand via **Export to Excel** |

> **Tip:** Export to Excel regularly as a backup. If you clear your browser data, localStorage is wiped. You can re-import the Excel file to restore everything.

---

## 📊 Excel Export / Import

### Export
Click **Export to Excel** in the sidebar. Downloads a `.xlsx` with:
- All task fields (ID, subject, status, priority, dates, relations, etc.)
- Your personal notes
- A Summary tab with task counts by status

### Import
Click **Import from Excel** and select a previously exported file.  
Tasks with existing Tracker IDs are skipped (no duplicates).

---

## 🔄 Making Changes in Future

Edit the files locally and push:
```bash
git add .
git commit -m "describe your change"
git push
```
GitHub Pages auto-deploys within ~1 minute.

---

## 📁 File Structure

```
├── index.html      → App layout, modals, sidebar, cards
├── css/style.css   → All styles (light theme)
├── js/app.js       → All logic (state, render, export, import)
└── README.md
```

*No npm, no build tools, no dependencies to install.*  
*SheetJS (for Excel) is loaded from CDN.*
