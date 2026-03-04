# BIAS Writer — User Guide

---

## Table of Contents

1. [Introduction](#introduction)
2. [Core Concepts](#core-concepts)
3. [Annotation Syntax](#annotation-syntax)
   - Memos
   - Omits
   - Tags
   - Footnotes
4. [The Find Panel](#the-find-panel)
   - Search Mode
   - Memos Mode
   - Omits Mode
   - Tags Mode
5. [Two-Stage Filtering (Patent-Pending)](#two-stage-filtering-patent-pending)
6. [The Library](#the-library)
   - Sidebar Layout
   - Documents Tab
   - Projects Tab
7. [Document Management](#document-management)
   - Creating Documents
   - Importing Documents
   - Document Types
   - Document Actions
   - Selection Mode & Bulk Operations
   - Split Document
   - Viewing Archived Documents
8. [Deleting and Recovery](#deleting-and-recovery)
   - Soft-Delete
   - Recovery View
9. [Writing Tools](#writing-tools)
   - Formatting Toolbar
   - Sprint & Stats
   - Inspiration
   - Print
10. [Export Features](#export-features)
    - Export Formats
    - Annotation Control
11. [Settings](#settings)
    - Appearance
    - Typography
    - Author Info
    - Subscription
    - Recovery
    - About
12. [Project Organization](#project-organization)
13. [Markdown Guide](#markdown-guide)
14. [Keyboard Shortcuts](#keyboard-shortcuts)
15. [Use Cases & Workflows](#use-cases--workflows)
    - TODO Management
    - Revision Tracking
    - Theme Analysis
    - Starting a New Draft
    - Breaking Up Large Manuscripts
    - Daily Writing Sessions
16. [Tips & Best Practices](#tips--best-practices)
17. [Common Questions](#common-questions)
18. [Troubleshooting](#troubleshooting)

---

## Introduction

BIAS Writer is a professional markdown writing environment designed for novelists, screenwriters, academics, and content creators who need powerful organizational tools without sacrificing writing flow.

It runs on iPhone, iPad, and Mac with automatic iCloud sync across all your devices.

### What Makes BIAS Writer Different?

**Patent-Pending Two-Stage Filtering System**

Unlike traditional search tools that require complex boolean syntax (`type:memo AND content:TODO`), BIAS Writer uses an intuitive two-step approach:

1. **Select what you want to find** (Memos, Omits, or Tags)
2. **Search within those results** (optional refinement)

The result? Powerful filtered searches that feel natural and show you exactly what you found with clear **X/Y count displays** (e.g., "3/12 memos found").

### Key Features at a Glance

- **Three annotation types:** Memos, Omits, and Tags
- **Multi-mode Find Panel:** Search, Memos, Omits, Tags
- **Two-stage filtering:** Category first, then search
- **Clear result counts:** Always know filtered vs. total
- **Project organization:** Multiple projects, unlimited documents
- **Flexible export:** Selectively include/exclude annotations
- **Sprint timer:** Timed writing sessions with word count tracking
- **Selection mode:** Bulk operations on multiple documents
- **Soft-delete with recovery:** 30-day recovery window for deleted items
- **Offline-first:** All data stored locally, works without internet
- **iCloud sync:** Automatic across iPhone, iPad, and Mac

---

## Core Concepts

### What Are Annotations?

Annotations are special text markers you add inline while writing. They serve as:
- **Notes to yourself** (memos)
- **Content to exclude** (omits)
- **Organizational labels** (tags)

Unlike traditional comments that sit in margins, BIAS Writer annotations live **inside your text** using simple, non-intrusive syntax.

### The Three Annotation Types

| Type | Syntax | Purpose | Visual Style |
|------|--------|---------|--------------|
| **Memo** | `((text))` | Private notes, TODOs, reminders | Yellow highlight |
| **Omit** | `[[text]]` | Content to exclude from exports | Dimmed with strikethrough |
| **Tag** | `#tag` | Categorical labels, topics | Blue pill |

---

## Annotation Syntax

### Memos

**Syntax:** `((your note here))`

**Purpose:** Private notes that don't appear in final output

**Examples:**
```markdown
The protagonist entered ((TODO: research medieval architecture)) the great hall.

She smiled ((is this the right emotion?)) and waved goodbye.

The data shows ((VERIFY: check source)) a 42% increase.
```

**Use cases:**
- Research reminders
- Editorial notes
- Revision tasks
- Questions to answer later
- Placeholder text

**Visual appearance:** Yellow background highlight

---

### Omits

**Syntax:** `[[text to cut]]`

**Purpose:** Content you want to keep but exclude from exports

**Examples:**
```markdown
The hero fought [[and engaged in lengthy combat that slowed the pacing]] 
the villain.

The meeting covered [[extensive technical details about the algorithm]] 
the new product launch.
```

**Use cases:**
- Cut content (but keep for reference)
- Alternative versions
- Deleted scenes
- Verbose passages

**Visual appearance:** Dimmed text with strikethrough

**Special feature:** Toggle visibility on/off in the editor to preview your final version.

---

### Tags

**Syntax:** `#tagname`

**Purpose:** Categorical labels for organizing and filtering content

**Examples:**
```markdown
The lab developed a new algorithm #machinelearning #innovation

This chapter needs work #needsrevision #draft1
```

**Rules:**
- Must start with `#`
- Can contain: letters, numbers, hyphens, underscores
- Case-insensitive (stored as lowercase)
- No spaces (use hyphens: `#character-arc`)

**Visual appearance:** Blue text with pill-style background

---

### Footnotes

**Syntax:** `[^1]` inline, with `[^1]: Your text here.` at the bottom of the document.

Insert footnotes from the formatting toolbar or with `⌘⌥F`. Footnotes are automatically collected into a Notes section on export and renumbered as needed.

---

## The Find Panel

The Find Panel is your command center for navigating annotations across all documents in a project.

### Opening the Find Panel

**Methods:**
- Press `⌘F`
- Tap the magnifying glass icon in the sidebar

### Four Modes

#### 1. Search Mode

**Purpose:** Traditional full-text search across all document content

**Features:**
- Search any text in your documents
- Shows results with context
- Tap any result to jump to that location in the editor

**Example:** Search for "castle" to find all mentions across your novel.

---

#### 2. Memos Mode (Two-Stage Filtering)

**Purpose:** Browse and filter all `((memos))` in your project

**How it works:**

**Stage 1 — Show All Memos:**
```
Display: "12/12 memos found"
```
- Automatically collects ALL memos from ALL documents
- Groups by document
- Shows memo content with context
- Tap any memo to jump to it in the editor

**Stage 2 — Filter Memos:**
```
Type "TODO" in filter box
Display: "3/12 memos found"
```
- Searches within the collected memos
- Only shows memos containing "TODO"
- Maintains document grouping
- Clear X/Y count shows filtered vs. total

**Example workflow:**
1. Open Memos mode → See all 45 memos across 12 documents
2. Type "character" → Find 8 memos about characters
3. Type "Alice character" → Narrow to 3 memos about Alice
4. Tap result → Jump directly to that memo in its document

---

#### 3. Omits Mode (Two-Stage Filtering)

**Purpose:** Browse and filter all `[[omits]]` in your project

Same two-stage approach as Memos mode. See all omitted content across your project, then filter to find specific cuts.

**Special feature:** Toggle omit visibility in the editor to hide omitted text and preview your final version.

**Example workflow:**
1. Open Omits mode → See all 23 omitted sections
2. Type "chapter 5" → Find omits from that chapter
3. Review if any should be restored
4. Toggle visibility to preview final version

---

#### 4. Tags Mode (Aggregation)

**Purpose:** View all `#tags` and find their instances

**Tag Collection:**
```
Display: "15 tags found"
Shows: #needsrevision (8), #act1 (12), #Alice (7), ...
```
- Extracts all unique tags with occurrence counts
- Displays as tappable pills
- Sorted alphabetically

**Tag Instance View:**
```
Tap "#needsrevision"
Display: Shows all 8 instances across documents
```
- See every place you used that tag
- Context shown for each instance
- Jump to any instance
- Understand tag distribution

**Example workflow:**
1. Open Tags mode → See all 20 tags in your novel
2. Tap `#characterdev` → Find all 15 character development scenes
3. Review distribution across chapters
4. Plan revision priorities

---

## Two-Stage Filtering (Patent-Pending)

### The Innovation

Traditional search requires you to know complex syntax:
```
Traditional: type:memo AND content:TODO
BIAS Writer: 1) Click "Memos"  2) Type "TODO"
```

### Why It Matters

**Intuitive Interface** — No need to learn boolean operators. Visual mode selection. Natural language search.

**Clear Results** — Always shows filtered/total counts. "3/12 memos found" is immediately understandable. Know your search scope at a glance.

**Categorical Focus** — Results never mix types. Memos stay separate from omits. Maintains your mental model.

**Compound Queries Made Simple** — Want memos about characters in Act 1? Tag scenes with `#act1`, add memos with `((character notes))`. Filter tags to `#act1`, then filter memos containing "character." No complex syntax needed.

### The X/Y Count Format

The count display always shows: **"X/Y [type] found"**

- **X** = Results matching your current filter
- **Y** = Total items of this type in project
- Examples: `12/12 memos found` (no filter), `3/12 memos found` (filter active), `15 tags found` (tag collection)

---

## The Library

### Sidebar Layout

The sidebar contains tabs for navigating your content:

- **Projects tab** — All your projects
- **Documents tab** — Documents in the current project
- **Find tab** — The Find Panel

### Documents Tab

Shows all documents in your current project.

**View controls:**
- **Active / Archived toggle** — Switch between active and archived documents
- **Reference Only filter** — Show only reference documents
- **Sort dropdown** — Manual, Date Modified, Date Created, Name, or Word Count
- **Sort direction** — Ascending or descending
- **Selection Mode** — Tap the selection icon for bulk operations

Drag-and-drop to reorder documents in Manual sort mode.

### Projects Tab

Shows all your projects.

**View controls:**
- **Active / Archived toggle** — Switch between active and archived projects
- **Sort dropdown** — Manual, Date Modified, Date Created, or Name

**Project actions (swipe or long-press):**
- **Edit** — Rename or add project notes
- **Duplicate** — Copy the entire project with all documents
- **Archive** — Move to archive (reversible)
- **Delete** — Soft-delete with 30-day recovery

---

## Document Management

### Creating Documents

Tap the `+` button in the sidebar. The first line of your document automatically becomes its title.

### Importing Documents

Overflow menu (three dots) → Import Files. Supported formats:
- Markdown (.md)
- Plain text (.txt)
- RTF (.rtf)
- Word documents (.docx) — coming soon

### Document Types

**Normal documents** — Default type for active writing. Full editing capabilities.

**Reference documents** — For research, notes, and background material. Marked with a blue indicator bar on the left edge and a faint diamond watermark in the editor. Reference documents don't count toward project word totals.

Mark any document as reference via long-press or swipe → "Make Reference."

### Document Actions

**Single document (swipe or long-press):**
- **Duplicate** — Create an exact copy placed after the original
- **Make Reference / Make Regular** — Toggle reference status
- **Archive** — Move to archive (reversible)
- **Delete** — Soft-delete with 30-day recovery

---

### Selection Mode & Bulk Operations

**Activate Selection Mode:** Tap the selection icon in the documents tab. Checkboxes appear next to all documents.

**Bulk operations available:**

**Merge:** Combine selected documents into one. Opens a merge dialog where you choose the order. Creates a new merged document.

**Duplicate:** Copy all selected documents.

**Duplicate + Archive:** Duplicate selected documents and automatically archive the originals. Perfect for creating new draft versions while preserving the original.

**Archive:** Archive all selected documents simultaneously.

**Add Tag:** Add tags to multiple documents at once. Opens a tag input dialog.

**Make Reference / Make Regular:** Toggle reference status on all selected documents.

**Delete:** Soft-delete all selected documents.

**Exit Selection Mode:** Tap the selection icon again.

---

### Split Document

Break large documents into smaller, more manageable pieces.

**Access:** Tap the split button in the **formatting toolbar** (sliders icon).

**Split at Cursor:**
- Place cursor where you want to split
- Select "Split at Cursor"
- Content before cursor → first document
- Content after cursor → second document

**Split at Headers:**
- Choose header level (H1, H2, or H3)
- One document created per header section
- Header text becomes each document's title
- Maintains document order

**After splitting:** The original document is archived. New documents appear in order in the document list. All annotations are preserved in each section.

**Example:**
```
Original document: "Novel - Full Draft" (50,000 words)
Split at: H2 headers (## Chapter 1, ## Chapter 2, etc.)
Result: 
- Chapter 1 (document)
- Chapter 2 (document)
- Chapter 3 (document)
...
Original: Archived
```

---

### Viewing Archived Documents

Toggle to "Archived" in the document list view controls.

**When viewing archived documents:**
- Find Panel searches only archived documents
- Active documents are hidden from view
- Toggle back to see active documents again
- Restore documents back to the active list via swipe or long-press

---

## Deleting and Recovery

### Soft-Delete

When you delete a project or document — from the active list, archive, or selection mode — it's soft-deleted. Hidden from your library but recoverable for 30 days.

A confirmation dialog tells you: "You can restore it from Settings → Recovery for 30 days."

### Recovery View

**Settings → Recovery**

The Recovery view has two sections:

**Projects:** Deleted projects with document count and deletion date. Restore brings back the project and all its documents. If the project was archived before deletion, it returns to the archive.

**Documents:** Individually deleted documents whose parent project still exists. Shows the document title and parent project name. Restore puts the document back in its project.

Each item can be **Restored** or **Deleted Permanently** (with a second confirmation). Use the search bar to find specific items.

After 30 days, items are automatically purged.

---

## Writing Tools

### Formatting Toolbar

Tap the sliders icon to toggle the formatting toolbar.

On **iPhone**, it drops down below the toolbar as an overlay with a translucent background. On **iPad and Mac**, it appears inline in the toolbar.

**Toolbar buttons:**
- **← / →** — Navigate to previous/next document
- **Memo** — Insert `(( ))` markers
- **Omit** — Insert `[[ ]]` markers
- **B** — Bold
- **I** — Italic
- **Blockquote** — Insert `>`
- **Footnote** — Open footnote insertion
- **Split** — Open the split panel

---

### Sprint & Stats

**Access:** Overflow menu → Sprint & Stats

A writing sprint timer with real-time word count tracking.

**Timer modes:**
- **Countdown** — Set a duration (e.g., 25 minutes for Pomodoro). Visual notification when time is up.
- **Count-up** — Start from 0:00 to track session length.

**Live statistics:**
- Current document word count
- Total project word count
- Updates in real time as you type

**Ghost counter:** Enable the word count pill for a floating word count display while writing, without keeping the Sprint panel open.

**Use cases:**
- **Pomodoro Technique:** 25-minute focused sessions
- **Daily Writing Habit:** Track time spent writing
- **Sprint Sessions:** Timed writing challenges
- **Progress Monitoring:** Watch word count climb

---

### Inspiration

**Access:** Overflow menu → Inspiration

Shows a random writing quote for motivation.

---

### Print

**Access:** Overflow menu → Print

Uses the native iOS/macOS print system.

---

## Export Features

**Access:** Overflow menu → Export

### Export Formats

- **Markdown** (.md) — Preserves all syntax, re-importable, compatible with all text editors
- **Plain Text** (.txt) — Raw text, no formatting
- **PDF** — Paginated, print-ready, professional presentation
- **HTML** — Web-ready format

### Annotation Control

Control which annotations appear in exports:

| Option | Default | Effect |
|--------|---------|--------|
| Include Memos | OFF | Show/hide `(( ))` content |
| Include Omits | OFF | Show/hide `[[ ]]` content |
| Include Tags | ON | Show/hide `#tags` |

**Clean manuscript for publisher:** All three OFF. Markdown syntax, memos, omits, and tags are stripped. Your clean document remains.

**Draft for editor with notes:** Memos ON, Tags ON, Omits OFF. Text with your notes visible, cuts hidden.

**Review deleted content:** Memos OFF, Omits ON, Tags OFF. See what was cut.

Footnotes are automatically collected into a Notes section at the end of your export.

---

## Settings

**Access:** Overflow menu → Settings

### Appearance

**Theme:** Light, Dark, or System.

### Typography

**Font Size:** Small, Medium, or Large.

**Font Family:** Sans, Serif, or Mono.

### Author Info

Your information for export headers:
- Name
- Email
- Phone
- Representation

### Subscription

- **Manage Subscription** — View or change your plan
- **Restore Purchases** — Restore a previous subscription

### Recovery

Access the 30-day recovery system for deleted projects and documents. See [Deleting and Recovery](#deleting-and-recovery).

### About BIAS Writer

Version info, links to website, help, support, privacy policy, terms of service, and contact emails.

---

## Project Organization

### What Is a Project?

A project is a collection of related documents. Think:
- **Novel:** All chapters and notes
- **Thesis:** All sections and research
- **Blog:** All articles in a series
- **Screenplay:** All scenes and treatments

### Project Features

**Isolated workspaces:**
- Each project has its own documents
- Tags don't cross projects
- Separate search scopes

**Project actions:**
- Create unlimited projects
- Duplicate entire project (with all documents)
- Archive (reversible)
- Delete (30-day recovery)
- Switch between projects instantly

### Best Practices

**Keep projects focused:**
- ✅ Good: "Fantasy Novel — Book 1"
- ❌ Too broad: "All My Writing"

**Use projects for versions:**
- "Novel — First Draft"
- "Novel — Second Draft"
- "Novel — Editor Version"

**Use reference documents** for research and background material within a project, rather than mixing them with your main writing.

---

## Markdown Guide

BIAS Writer supports standard markdown syntax:

| Syntax | Result |
|--------|--------|
| `# Heading 1` | Large heading |
| `## Heading 2` | Medium heading |
| `### Heading 3` | Small heading |
| `**bold**` | **bold** |
| `*italic*` | *italic* |
| `> blockquote` | Blockquote |
| `---` | Horizontal rule |
| `[^1]` | Footnote reference |

Headers must start at the beginning of a line: `#`, then a space, then your text.

---

## Keyboard Shortcuts

### Formatting

| Action | Shortcut |
|--------|----------|
| Bold | `⌘B` |
| Italic | `⌘I` |
| Memo | `⌘9` or `⌘0` |
| Omit | `⌘]` or `⌘[` |
| Blockquote | `⌘'` |
| Footnote | `⌘⌥F` |
| Heading 1 | `⌘⇧1` |
| Heading 2 | `⌘⇧2` |
| Heading 3 | `⌘⇧3` |

### Navigation & Tools

| Action | Shortcut |
|--------|----------|
| Find Panel | `⌘F` |
| Toggle Sidebar | `⌘\` |
| Toggle Formatting Bar | `⇧⌘F` |
| New Document | `⌘N` |
| New Project | `⇧⌘N` |
| Duplicate Document | `⇧⌘D` |
| Split at Cursor | `⇧⌘S` |
| Settings | `⌘,` |

### Editor

| Action | Shortcut |
|--------|----------|
| Undo | `⌘Z` |
| Redo | `⌘⇧Z` |
| Select All | `⌘A` |

---

## Use Cases & Workflows

### TODO Management

**Scenario:** You're drafting a novel and need to track research tasks.

**Workflow:**
1. While writing, add TODO memos:
   ```
   The castle ((TODO: research medieval architecture)) loomed ahead.
   ```
2. Continue writing without breaking flow
3. When ready to research:
   - Open Find Panel → Memos mode
   - See all memos: `45/45 memos found`
   - Type "TODO" in filter: `12/45 memos found`
   - Work through each TODO item
   - Update or remove memos as completed

---

### Revision Tracking

**Scenario:** Your editor requested changes across multiple chapters.

**Workflow:**
1. Tag affected scenes: `#needsrevision #pacing`
2. Add specific notes: `She turned away ((editor note: strengthen her motivation here))`
3. Use omits for cuts: `The dialogue continued [[with excessive back-and-forth]] briefly.`
4. Review progress: Tags mode → tap `#needsrevision` → see all flagged scenes
5. Remove tags as you complete revisions

---

### Theme Analysis

**Scenario:** You want to track themes across your novel.

**Workflow:**
1. Tag thematic passages: `The butterfly imagery returns. #redemption #transformation`
2. Open Tags mode → see distribution across manuscripts
3. Identify chapters that lack key themes
4. Balance development across acts

---

### Starting a New Draft

**Scenario:** Ready to revise your manuscript.

**Workflow:**
1. Enter Selection Mode → select all chapters
2. Tap "Duplicate + Archive"
3. Get fresh copies to revise, originals safely archived
4. Tag the new version: `#draft2 #revision-2026`

---

### Breaking Up Large Manuscripts

**Scenario:** You have a long document that needs to be split into chapters.

**Workflow:**
1. Import the long document
2. Add headers at chapter breaks: `## Chapter 1`, `## Chapter 2`, etc.
3. Open the Split tool from the formatting toolbar
4. Split at H2 headers
5. Each chapter becomes its own document, original archived

---

### Daily Writing Sessions

**Scenario:** Building a consistent writing habit.

**Workflow:**
1. Open Sprint & Stats from the overflow menu
2. Set a 25-minute countdown (Pomodoro)
3. Write — watch your word count grow in real time
4. Enable the ghost counter for persistent word count display
5. When the timer ends, take a break and repeat

---

## Tips & Best Practices

**Write first, organize later.** Don't stop writing to categorize. Drop memos and tags as you go, then review them in batches.

**Preserve your darlings.** Before cutting beloved passages, wrap them in `[[ ]]`. You might find a place for them later.

**Create a tagging system:**
- Character tags: `#Alice`, `#Bob`
- Plot tags: `#act1`, `#climax`, `#resolution`
- Status tags: `#needswork`, `#done`, `#review`
- Location tags: `#castle`, `#village`

**Use Duplicate + Archive for major revisions.** Select documents, duplicate + archive, tag the new versions. Fresh copies to work on, originals safely preserved.

**Bulk tag for organization.** Select related documents in Selection Mode, add status or version tags. Makes filtering and tracking easy.

**Merge related documents.** Short chapters? Merge into longer sections. Research notes? Combine into a reference document.

**Review counts regularly.** High memo count? Time to address TODOs. High omit count? Time to commit to cuts. Uneven tag distribution? Balance needed.

**Use Sprint & Stats for focused sessions.** Set a timer, write, track progress. Build consistent daily habits.

---

## Common Questions

**Do annotations count toward word count?**
No. Word count excludes all annotation syntax.

**Can I control which annotations appear in exports?**
Yes. Choose to include or exclude each annotation type (memos, omits, tags) in the export dialog.

**Do archived documents appear in Find Panel searches?**
When "Archived" view is active, the Find Panel searches only archived documents. When viewing active documents, it searches only active docs. The scope matches your current view.

**What's the difference between Reference and Archived documents?**
Reference documents are active documents marked for research/background (blue indicator, diamond watermark, excluded from word counts). Archived documents are in a separate view. Reference is an organizational label; Archive is a separate state.

**Can I search across projects?**
Not currently. Search is per-project. Use tags consistently across projects as a workaround.

**Can I recover deleted items?**
Yes. Deleted projects and documents are recoverable from Settings → Recovery for 30 days. After that, they are permanently purged.

**How many documents can I have?**
No limit. Performance stays good with hundreds of documents per project.

**What does "Duplicate + Archive" do?**
Creates duplicates of all selected documents and automatically archives the originals. Perfect for starting a new draft version while preserving the original. Available in Selection Mode.

---

## Troubleshooting

**Annotations not highlighting:**
- Check syntax: `((text))`, `[[text]]`, `#tag`
- Ensure no spaces break the markers: `( (text) )` won't work

**Search not finding results:**
- Check which mode you're in (Search, Memos, Omits, Tags)
- Check your view: "Archived" shows only archived docs, "Active" shows only active docs
- Try clearing the filter and searching again

**Document seems missing:**
- Check if it's archived (toggle to Archived view)
- Check if it was deleted (Settings → Recovery)
- Verify you're in the correct project

**Export missing annotations:**
- Check export dialog settings
- Ensure the annotation types you want are toggled on

---

## Resources

- **Website:** https://www.bias.pub
- **Help:** https://help.bias.pub
- **Support:** support@bias.pub
- **General inquiries:** info@bias.pub

### Patent-Pending Technology

BIAS Writer's two-stage hierarchical content filtering system is protected by U.S. Provisional Patent Application No. 63/949,099, filed December 26, 2024.

---

**BIAS Writer**
© 2026 BIAS LLC. All rights reserved.
Patent Pending — U.S. Provisional Patent Application No. 63/949,099
