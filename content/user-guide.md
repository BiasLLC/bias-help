# BIAS Writer - User Features Guide

---
**BIAS Writer - Patent Pending**  
Copyright © 2025 BIAS LLC. All rights reserved.

U.S. Provisional Patent Application No. 63/949,099  
Two-Stage Hierarchical Content Filtering System

**Filing Date:** December 26, 2024
---

## Table of Contents

1. [Introduction](#introduction)
2. [Core Concepts](#core-concepts)
3. [Annotation Syntax](#annotation-syntax)
4. [The Find Panel](#the-find-panel)
5. [Two-Stage Filtering (Patent-Pending)](#two-stage-filtering-patent-pending)
6. [Document Management](#document-management)
   - Creating Documents
   - Document Types
   - Document Operations (Single & Merge)
   - Selection Mode & Bulk Operations
   - Library Panel Organization
   - Right-Click / Swipe Controls
   - Toolbar & Menu System
   - Sprint & Stats
   - Desktop Focus Mode
   - Sorting Options
   - Split Document Feature
   - Viewing Archived Documents
7. [Project Organization](#project-organization)
8. [Export Features](#export-features)
9. [Markdown Guide](#markdown-guide)
10. [Keyboard Shortcuts](#keyboard-shortcuts)
11. [Use Cases & Workflows](#use-cases--workflows)
    - TODO Item Management
    - Revision Tracking
    - Theme Analysis
    - Multi-Version Management
    - Collaborative Feedback
    - Breaking Up Large Manuscripts
    - Starting a New Draft Version
    - Daily Writing Sessions with Timer
12. [Tips & Best Practices](#tips--best-practices)

---

## Introduction

BIAS Writer is a professional markdown writing environment designed for novelists, screenwriters, academics, and content creators who need powerful organizational tools without sacrificing writing flow.

### What Makes BIAS Writer Different?

**Patent-Pending Two-Stage Filtering System**

Unlike traditional search tools that require complex boolean syntax (`type:memo AND content:TODO`), BIAS Writer uses an intuitive two-step approach:

1. **Select what you want to find** (Memos, Omits, or Tags)
2. **Search within those results** (optional refinement)

The result? Powerful filtered searches that feel natural and show you exactly what you found with clear **X/Y count displays** (e.g., "3/12 memos found").

### Key Features at a Glance

✅ **Three annotation types:** Memos, Omits, and Tags  
✅ **Multi-mode Find Panel:** Search, Memos, Omits, Tags  
✅ **Two-stage filtering:** Category first, then search  
✅ **Clear result counts:** Always know filtered vs. total  
✅ **Project organization:** Multiple projects, unlimited documents  
✅ **Flexible export:** Selectively include/exclude annotations  
✅ **Offline-first:** All data stored locally, works without internet

---

## Core Concepts

### What are Annotations?

Annotations are special text markers you add inline while writing. They serve as:
- **Notes to yourself** (memos)
- **Content to exclude** (omits)
- **Organizational labels** (tags)

Unlike traditional comments that sit in margins, BIAS Writer annotations live **inside your text** using simple, non-intrusive syntax.

### The Three Annotation Types

| Type | Symbol | Purpose | Visual Style |
|------|--------|---------|--------------|
| **Memo** | `((text))` | Private notes, TODOs, reminders | 🟨 Yellow highlight |
| **Omit** | `[[text]]` | Content to exclude from exports | Dimmed + strikethrough |
| **Tag** | `#tag` | Categorical labels, topics | 🟦 Blue |

---

## Annotation Syntax

### Memos

**Syntax:** `((your note here))`

**Purpose:** Private notes that don't appear in final output

**Examples:**
```markdown
The protagonist entered ((TODO: describe the castle)) the great hall.

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

Chapter 3 begins with [[a long description that my editor didn't like]] 
the main event.
```

**Use cases:**
- Cut content (but keep for reference)
- Alternative versions
- Deleted scenes
- Verbose passages
- Behind-the-scenes notes

**Visual appearance:** Dimmed text with strikethrough

**Special feature:** Toggle visibility on/off with omit elision

---

### Tags

**Syntax:** `#tagname`

**Purpose:** Categorical labels for organizing and filtering content

**Examples:**
```markdown
The lab developed a new algorithm #machinelearning #innovation

She discovered her powers #characterdevelopment #act1

This chapter needs work #needsrevision #draft1
```

**Rules:**
- Must start with `#`
- Can contain: letters, numbers, hyphens, underscores
- Case-insensitive (stored as lowercase)
- No spaces (use hyphens: `#character-arc`)

**Use cases:**
- Scene organization
- Character tracking
- Theme tagging
- Status indicators
- Content categorization

**Visual appearance:** Blue text with pill-style background

---

## The Find Panel

The Find Panel is your command center for navigating annotations across all documents in a project.

### Opening the Find Panel

**Methods:**
- Click "Find" button in toolbar
- Press `Cmd/Ctrl + F`
- Click any annotation to open relevant mode

### Four Modes

#### 1. Search Mode

**Purpose:** Traditional full-text search across all document content

**Features:**
- Search any text in your documents
- Case-sensitive option
- Regular expression support
- Whole word matching
- Shows results with context

**Example:** Search for "castle" to find all mentions across your novel.

---

#### 2. Memos Mode (Two-Stage Filtering)

**Purpose:** Browse and filter all `((memos))` in your project

**How it works:**

**Stage 1 - Show All Memos:**
```
Display: "12/12 memos found"
```
- Automatically collects ALL memos from ALL documents
- Groups by document
- Shows memo content with context
- Click any memo to jump to it in editor

**Stage 2 - Filter Memos:**
```
Type "TODO" in filter box
Display: "3/12 memos found"
```
- Searches within the 12 collected memos
- Only shows memos containing "TODO"
- Maintains document grouping
- Clear X/Y count shows filtered vs. total

**Example workflow:**
1. Open Memos mode → See all 45 memos across 12 documents
2. Type "character" → Find 8 memos about characters
3. Type "Alice character" → Narrow to 3 memos about Alice
4. Click result → Jump directly to that memo in its document

---

#### 3. Omits Mode (Two-Stage Filtering)

**Purpose:** Browse and filter all `[[omits]]` in your project

**How it works:**

**Stage 1 - Show All Omits:**
```
Display: "8/8 omits found"
```
- Collects ALL omitted content
- Shows what you've cut but kept
- Useful for reviewing deleted scenes

**Stage 2 - Filter Omits:**
```
Type "combat" in filter box
Display: "2/8 omits found"
```
- Find specific omitted content
- Review related cuts together
- Restore content if needed

**Special feature:** Toggle omit visibility in editor
- Click "Show/Hide in editor" button
- Hides omitted text completely (shows [...])
- Helps see final version while writing

**Example workflow:**
1. Open Omits mode → See all 23 omitted sections
2. Type "chapter 5" → Find omits from that chapter
3. Review if any should be restored
4. Toggle visibility to preview final version

---

#### 4. Tags Mode (Aggregation)

**Purpose:** View all `#tags` and find their instances

**How it works:**

**Tag Collection:**
```
Display: "15 tags found"
Shows: #needsrevision (8), #act1 (12), #Alice (7), ...
```
- Automatically extracts all unique tags
- Shows occurrence count for each
- Displays as clickable pills
- Sorted alphabetically

**Tag Instance View:**
```
Click "#needsrevision"
Display: Shows all 8 instances across documents
```
- See every place you used that tag
- Context shown for each instance
- Jump to any instance
- Understand tag distribution

**Example workflow:**
1. Open Tags mode → See all 20 tags in your novel
2. Click `#characterdev` → Find all 15 character development scenes
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

**1. Intuitive Interface**
- No need to learn boolean operators
- Visual mode selection
- Natural language search

**2. Clear Results**
- Always shows filtered/total counts
- "3/12 memos found" is immediately understandable
- Know your search scope at a glance

**3. Categorical Focus**
- Results never mix types
- Memos stay separate from omits
- Maintains mental model

**4. Compound Queries Made Simple**
- Want memos about characters in Act 1?
- Tag scenes with `#act1`, add memos with `((character notes))`
- Filter tags to `#act1`, then filter memos containing "character"
- No complex syntax needed

### The X/Y Count Format

The count display always shows: **"X/Y [type] found"**

**What it means:**
- **X** = Results matching your current filter
- **Y** = Total items of this type in project
- **[type]** = memos, omits, or tags

**Examples:**
- `12/12 memos found` - No filter applied, showing all memos
- `3/12 memos found` - Filter active, 3 match out of 12 total
- `1/8 omits found` - Very specific search
- `15 tags found` - Tag collection (no filtering yet)

---

## Document Management

### Creating Documents

**Methods:**
- Click "+ New" button
- Import from file

**Automatic features:**
- Title extracted from first line
- Tags extracted from content
- Word count calculated (excluding annotations)
- Timestamps tracked

### Document Types

**Normal Documents:**
- Default type
- For active writing
- Full editing capabilities
- No special indicators

**Reference Documents:**
- Colored dot indicator
- "Reference" watermark overlay
- Blue line in editor
- For research, notes, background material
- Separate visual treatment
- Can be excluded from certain operations

### Document Operations

**Single Document Operations:**

**Duplicate:**
- Creates exact copy
- Placed after original
- Useful for alternative versions

**Split Document:**
- Split at cursor position
- Split at headers (H1, H2, or H3)
- Creates multiple documents from one
- Preserves or archives original
- Maintains document order

**Merge Documents:**
- Combine multiple documents into one
- Opens merge dialog with document selector
- Choose which documents to merge
- Select merge order
- Creates new merged document
- Original documents can be kept, archived, or deleted

**Archive:**
- Hides from main document list
- Preserves all content and metadata
- Accessible via "Show Archived" toggle
- Useful for old drafts or unused content
- Reversible operation (can restore anytime)
- **Find Panel behavior:** When "Show Archived" is ON, Find Panel searches ONLY archived documents. When OFF, searches only active documents.

**Delete:**
- Permanent removal
- Confirmation required
- Cannot be undone

---

### Selection Mode & Bulk Operations

**Activate Selection Mode:**
- Click selection icon in Library panel
- Enter multi-select mode
- Checkboxes appear next to documents

**Select Documents:**
- Click checkboxes to select multiple documents
- Select all with "Select All" button
- Deselect with "Clear Selection"

**Bulk Operations Available:**

**Duplicate + Archive Original:**
- Duplicates all selected documents
- Archives the originals automatically
- Perfect for creating new draft versions
- Maintains document order
- **Example:** Select chapters 1-5 → Duplicate + Archive → Get fresh copies, originals safely archived

**Bulk Tag:**
- Add tags to multiple documents at once
- Opens tag input dialog
- Enter tags (e.g., `#draft2 #revised`)
- Tags added to all selected documents
- **Example:** Select all Act 1 scenes → Add `#act1 #needsrevision`

**Bulk Archive:**
- Archive multiple documents simultaneously
- All selected documents moved to archive view
- Preserves all content and metadata

**Bulk Delete:**
- Delete multiple documents at once
- Confirmation dialog shows count
- Permanent - cannot be undone
- Use carefully!

**Exit Selection Mode:**
- Click selection icon again
- Or click "Cancel" / "Done"

---

### Library Panel Organization

**Two Tabs:**

**Documents Tab:**
- Shows all documents in current project
- **View Controls:**
  - "Show Archived" toggle - View archived documents
  - "Reference Only" toggle - Show only reference documents
  - Sort dropdown - Manual, Alphabetical, Created, Modified
  - Selection Mode button - Activate bulk operations
- Drag-and-drop to reorder (in Manual sort mode)

**Projects Tab:**
- Shows all projects
- **View Controls:**
  - "Show Archived" toggle - View archived projects
  - Sort dropdown - Sort projects
- Drag-and-drop to reorder projects

---

### Right-Click / Swipe Controls

**Document Controls** (Right-click or swipe on document):
- **Mark as Reference** / **Mark as Normal** - Toggle reference status
- **Archive** - Move to archive
- **Restore** (if archived) - Bring back to active list

**Project Controls** (Right-click or swipe on project):
- **Edit Name** - Rename project
- **Add Notes** - Add project description/notes
- **Archive** - Move project to archive
- **Delete** - Permanently remove project

**Mobile Gestures:**
- Swipe left/right on document or project
- Reveals action buttons
- Quick access to common operations

---

### Toolbar & Menu System

**Formatting Toolbar** (Sliders icon):
- Click sliders icon to open formatting toolbar
- **Text Formatting:**
  - `((` Insert memo
  - `[[` Insert omit
  - **B** Bold
  - **I** Italic
  - `>"` Blockquote
  - `[^` Add footnote
  - **Split button** - Opens split panel (split at cursor or at headings)
- **Page Navigation:**
  - Navigate between pages/sections
  - Jump to specific locations

**Three-Dot Menu** (Main application menu):

**ACTIONS:**
- **Import Files...** - Import documents from your device
- **Export Document(s)...** - Export current or selected documents

**TOOLS:**
- **Sprint & Stats** - Access Sprint Mode and Statistics Panel
- **Shortcuts** - View keyboard shortcuts reference
- **Quick Tour** - Interactive tutorial for new users

**SETTINGS:**
- **Theme:** Light | Dark | System - Choose appearance
- **Settings** - Configure app preferences
- **Help & Documentation** - Access user guides
- **About BIAS Writer** - Version and app information
- **Sign Out** - Log out of your account

---

### Sprint & Stats

**Access:** Three-dot menu → "Sprint & Stats"

Opens Sprint & Stats panel with timer and live statistics.

**Sprint & Stats Panel:**

**Controls:**
- **Play button** - Start writing session
- **Reset button** - Reset timer to 0:00
- **Timer button** - Set timer duration
- **Bell button** - Timer alarm/notification settings

**Timer Display:**
- Large timer shows: `1:00` (minutes:seconds)
- Set duration with input field (e.g., "1 minutes")
- Timer counts down or up during writing
- Visual notification when countdown timer finishes (no audio alarm)

**Live Statistics:**
- **Document icon + number** - Current document word count (e.g., 106 words)
- **Folder icon + number** - Total project word count (e.g., 2,063 words)
- Updates in real-time as you type

**Show word count pill:**
- Checkbox to enable/disable
- When enabled, shows floating word count indicator while writing
- Displays progress without opening panel

**How to Use:**

**Timer Countdown:**
1. Click timer button
2. Enter duration (e.g., 25 minutes for Pomodoro)
3. Click play to start
4. Write while timer counts down
5. Visual notification when time is up (no audio)

**Timer Count-Up:**
1. Leave timer at 0:00
2. Click play to start
3. Timer counts up to track session length
4. Monitor how long you've been writing

**Track Progress:**
- Watch document word count grow in real-time
- See project total update as you write
- Enable word count pill for persistent display
- Use timer for focused writing sessions

**Use Cases:**
- **Pomodoro Technique:** 25-minute focused sessions
- **Daily Writing Habit:** Track time spent writing
- **Sprint Sessions:** Timed writing challenges
- **Progress Monitoring:** Watch word count climb
- **Distraction-Free:** Minimize panel, enable word count pill

---

### Desktop Focus Mode

**Purpose:** Distraction-free writing by hiding the Library panel

**Activate Focus Mode:**
- **Keyboard:** `Shift + Cmd/Ctrl + L`
- **Click:** Chevron button to collapse/expand Library panel

**In Focus Mode:**
- Library panel hidden
- Full width for editor
- All editing features still available
- Formatting toolbar still accessible
- Find Panel still works

**Exit Focus Mode:**
- Press `Shift + Cmd/Ctrl + L` again
- Click chevron button to restore Library panel

**Use Cases:**
- Distraction-free writing sessions
- Focus on current document only
- Maximize screen space for editor
- Reduce visual clutter
- Pair with Sprint & Stats timer for deep work

---

### Sorting Options

**Manual:** Drag-and-drop custom order
**Alphabetical:** By document title
**Created:** Newest or oldest first
**Modified:** Recently edited first

### Split Document Feature

Break large documents into smaller, more manageable pieces.

**Access Split Panel:**
- Click Split button in formatting toolbar (sliders icon)
- Or right-click document → Split
- Opens split panel with options

**Split Methods:**

**1. Split at Cursor:**
- Place cursor where you want to split
- Open split panel
- Select "Split at Cursor"
- Creates two documents at cursor position
- Content before cursor → First document
- Content after cursor → Second document

**2. Split at Headers:**
- Open split panel
- Choose header level (H1, H2, or H3)
- Automatically creates one document per header
- Each section becomes its own document
- Header text becomes document title
- Maintains document order

**After Splitting:**
- Choose what to do with original:
  - **Keep:** Original stays in library
  - **Archive:** Original moved to archive
  - **Delete:** Original removed
- New documents appear in order after original
- All annotations preserved in each section

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

**Use cases:**
- Break long manuscripts into chapters
- Separate research sections
- Divide by topic or theme
- Create smaller, focused documents

### Viewing Archived Documents

**Toggle archived view:**
- Click "Show Archived" in Library panel
- Switches to archived-only view
- Find Panel searches only archived documents in this view
- Restore documents back to active list
- Permanently delete archived documents

**Important:** When viewing archived documents:
- ✅ Find Panel searches ONLY archived documents
- ✅ Active documents are hidden from view
- ✅ Toggle back to see active documents again
- ✅ Find Panel automatically switches scope based on view

---

## Project Organization

### What is a Project?

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
- Independent settings

**Project actions:**
- Create unlimited projects
- Duplicate entire project (with all documents)
- Delete project (removes all documents)
- Switch between projects instantly

### Best Practices

**Keep projects focused:**
✅ Good: "Fantasy Novel - Book 1"
❌ Too broad: "All My Writing"

**Use projects for versions:**
- "Novel - First Draft"
- "Novel - Second Draft"
- "Novel - Editor Version"

**Separate reference material:**
- Main project for manuscript
- Reference project for research
- Use document types within projects

---

## Export Features

### Export Formats

**Markdown:**
- Universal text format
- Preserves all syntax
- Full annotation fidelity
- Re-importable
- Compatible with all text editors

**PDF:**
- Paginated output
- Print-ready
- Locked format
- Professional presentation

### Selective Export (Key Feature)

Control which annotations appear in exports:

**Export dialog options:**
```
☑ Include Memos (default: OFF)
☑ Include Omits (default: OFF)
☑ Include Tags (default: ON)
```

**Example scenarios:**

**1. Clean manuscript for publisher:**
```
☐ Memos - OFF (remove all notes)
☐ Omits - OFF (remove cut content)
☐ Tags - OFF (remove labels)
Result: Pure text, no annotations
```

**2. Draft for editor with notes:**
```
☑ Memos - ON (show editing notes)
☐ Omits - OFF (hide cuts)
☑ Tags - ON (show scene labels)
Result: Text with your notes visible
```

**3. Review deleted content:**
```
☐ Memos - OFF
☑ Omits - ON (show what was cut)
☐ Tags - OFF
Result: See only omitted content
```

---

## Keyboard Shortcuts

### Global

| Action | macOS | Windows/Linux |
|--------|-------|---------------|
| Open/Close Find Panel | `Cmd + F` | `Ctrl + F` |
| Jump to Memos | `Cmd + 9` or `Cmd + 0` | `Ctrl + 9` or `Ctrl + 0` |
| Jump to Omits | `Cmd + [` or `Cmd + ]` | `Ctrl + [` or `Ctrl + ]` |
| Toggle Focus Mode | `Shift + Cmd + L` | `Shift + Ctrl + L` |
| Save | `Cmd + S` | `Ctrl + S` |
| Close Panel | `Esc` | `Esc` |

### Editor

| Action | Shortcut |
|--------|----------|
| Bold | `Cmd/Ctrl + B` |
| Italic | `Cmd/Ctrl + I` |
| Undo | `Cmd/Ctrl + Z` |
| Redo | `Cmd/Ctrl + Shift + Z` |
| Select All | `Cmd/Ctrl + A` |

### Find Panel Navigation

| Action | Method |
|--------|--------|
| Navigate Results | Click on result |
| Close Find Panel | `Esc` or `Cmd/Ctrl + F` |
| Jump to Memos Mode | `Cmd/Ctrl + 9` or `Cmd/Ctrl + 0` |
| Jump to Omits Mode | `Cmd/Ctrl + [` or `Cmd/Ctrl + ]` |

### Annotation Shortcuts (Future)

*Coming soon:* Quick insertion of annotation syntax

---

## Use Cases & Workflows

### Use Case 1: TODO Item Management

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

**Benefits:**
- Never lose track of research needs
- Continue writing without interruption
- Batch research tasks efficiently
- Clear visual of progress (X/Y count)

---

### Use Case 2: Revision Tracking

**Scenario:** Your editor requested changes across multiple chapters.

**Workflow:**
1. As you revise, tag affected scenes:
   ```
   The confrontation scene begins here. #needsrevision #pacing
   ```

2. Add memos for specific notes:
   ```
   She turned away ((editor note: strengthen her motivation here))
   ```

3. Use omits for cuts:
   ```
   The dialogue continued [[with excessive back-and-forth]] briefly.
   ```

4. Review progress:
   - Tags mode → Click `#needsrevision`
   - See all flagged scenes
   - Check off completed revisions
   - Remove tags when done

**Benefits:**
- Visual tracking of revision status
- Editor notes preserved inline
- Easy to find what needs work
- Cut content saved for reference

---

### Use Case 3: Theme Analysis

**Scenario:** You want to track themes across your novel.

**Workflow:**
1. Tag thematically significant passages:
   ```
   The butterfly imagery returns. #redemption #transformation
   
   Another reference to water. #purification #rebirth
   ```

2. Analyze distribution:
   - Tags mode → View all theme tags
   - Click `#redemption` → See 23 instances
   - Click `#transformation` → See 18 instances
   - Note which chapters lack theme development

3. Balance themes:
   - Identify chapters without key themes
   - Add thematic elements where needed
   - Ensure even distribution across acts

**Benefits:**
- Visual map of theme distribution
- Identify gaps in thematic development
- Balance across narrative structure
- Track multiple themes simultaneously

---

### Use Case 4: Multi-Version Management

**Scenario:** You're writing alternative versions of a scene.

**Workflow:**
1. Write primary version normally

2. Add alternative in omits:
   ```
   She reached for the door. [[Alternative: She hesitated, then reached for the door, her hand trembling.]]
   ```

3. Keep both versions:
   - Main text is primary version
   - Omit contains alternative
   - Toggle omit elision to preview each

4. Decision time:
   - Review all alternatives in Omits mode
   - Promote alternatives by moving out of `[[]]`
   - Delete unused versions

**Benefits:**
- Both versions preserved
- Easy A/B comparison
- No separate files needed
- Quick switching between versions

---

### Use Case 5: Collaborative Feedback

**Scenario:** Multiple beta readers are giving feedback.

**Workflow:**
1. Tag feedback by reader:
   ```
   This metaphor is confusing. ((Sarah: simplify)) #feedback-sarah
   
   Love this scene! ((Mike: keep this tone)) #feedback-mike
   ```

2. Organize feedback:
   - Tags mode → See all readers' tags
   - Click `#feedback-sarah` → Sarah's comments
   - Click `#feedback-mike` → Mike's comments
   - Address feedback systematically

3. Track implementation:
   - Add `#implemented` tag when addressed
   - Filter memos to find unaddressed notes
   - Remove memos when complete

**Benefits:**
- Feedback organized by source
- Easy to address one reader at a time
- Track implementation progress
- Nothing gets lost

---

### Use Case 6: Breaking Up Large Manuscripts

**Scenario:** You've drafted your entire novel in one document (80,000 words) and need to split it into chapters.

**Workflow:**
1. Add H2 headers for each chapter:
   ```markdown
   ## Chapter 1: The Beginning
   [chapter content]
   
   ## Chapter 2: The Journey
   [chapter content]
   
   ## Chapter 3: The Conflict
   [chapter content]
   ```

2. Use Split Document feature:
   - Click Split button in formatting toolbar
   - Select "Split at H2 headers"
   - Choose "Archive original"
   - Confirm split

3. Result:
   - 20 individual chapter documents created
   - Each titled from its header
   - Original archived for backup
   - All annotations preserved in their chapters

4. Benefits:
   - Easier to navigate specific chapters
   - Faster Find Panel searches (smaller scope)
   - Can reorder chapters via drag-and-drop
   - Can work on chapters independently

**Benefits:**
- Transform monolithic document into organized structure
- Maintain all content and annotations
- Improve performance and usability
- Keep original as backup

---

### Use Case 7: Starting a New Draft Version

**Scenario:** You've finished your first draft and want to start a second draft while preserving the original.

**Workflow:**
1. Enter Selection Mode in Library panel

2. Select all documents you want to revise:
   - Click "Select All" for entire manuscript
   - Or select specific chapters/sections

3. Use "Duplicate + Archive":
   - Click "Duplicate + Archive" button
   - System creates duplicates of all selected documents
   - Original documents automatically archived
   - New documents appear in library

4. Tag new draft version:
   - With documents still selected (or select again)
   - Click "Bulk Tag" button
   - Add tags: `#draft2 #2025-revision`
   - All new documents tagged

5. Begin revision work:
   - Work on new documents freely
   - Original draft safely archived
   - Access archive anytime to reference original

**Benefits:**
- One-click creation of new draft version
- Originals preserved and accessible
- Clear version separation with tags
- No manual copying needed
- Perfect for major revisions

**Alternative workflow - Per Chapter:**
- Select just chapters needing heavy revision
- Duplicate + Archive those
- Keep other chapters as active documents
- Mix old and new draft in one project

---

### Use Case 8: Daily Writing Sessions with Timer

**Scenario:** You want to build a consistent daily writing habit with timed sessions.

**Workflow:**
1. Open your current chapter/document

2. Open Sprint & Stats:
   - Click three-dot menu → "Sprint & Stats"
   - Panel opens with timer and stats

3. Set up timer session:
   - **Option A - Pomodoro (25 minutes):**
     - Click timer button
     - Enter "25 minutes"
     - Click play button
     - Write until timer visual notification appears
   
   - **Option B - Track time (count up):**
     - Leave timer at 0:00
     - Click play button
     - Timer counts up to show session length

4. Write and monitor progress:
   - Watch document word count update in real-time
   - See project total climb as you write
   - Enable "Show word count pill" for persistent display
   - Focus on writing, not checking stats

5. Complete session:
   - Visual notification appears (countdown mode)
   - Or stop timer when done (count-up mode)
   - Review final word counts
   - Note session length for tracking

6. Build consistency:
   - Repeat daily at same time
   - Track total words per session
   - Use timer to maintain focus
   - Build writing momentum

**Benefits:**
- Timer creates focused writing blocks
- No distractions from word count goals
- Real-time stats show actual progress
- Simple: just write and watch the timer
- Flexible: countdown or count-up modes
- Word count pill keeps you motivated

**Session Types:**
- **Quick Sprint:** 10-15 minutes, warm up
- **Pomodoro:** 25 minutes, take 5-minute break
- **Deep Work:** 45-60 minutes, longer session
- **Track & Flow:** No timer, just watch time count up

---

## Markdown Guide

BIAS Writer is a markdown editor. Here's a complete guide to markdown syntax.

### Headings

```markdown
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6
```

**Use headings to:**
- Structure your document
- Create a table of contents
- Organize chapters and sections

### Text Formatting

**Bold:**
```markdown
**bold text** or __bold text__
```

**Italic:**
```markdown
*italic text* or _italic text_
```

**Bold and italic:**
```markdown
***bold and italic***
```

**Strikethrough:**
```markdown
~~strikethrough~~
```

### Lists

**Unordered:**
```markdown
- Item 1
- Item 2
  - Nested item
- Item 3
```

**Ordered:**
```markdown
1. First item
2. Second item
   1. Nested item
```

**Task lists:**
```markdown
- [ ] Unchecked
- [x] Checked
```

### Links & Images

**Link:**
```markdown
[Link text](https://example.com)
```

**Image:**
```markdown
![Alt text](image.jpg)
```

**Auto-link:**
```markdown
<https://example.com>
```

### Blockquotes

```markdown
> This is a quote
>> Nested quote
```

### Code

**Inline:**
```markdown
Use `code` for inline code
```

**Block:**
````markdown
```javascript
function hello() {
  console.log("Hello!");
}
```
````

### Horizontal Rules

```markdown
---
***
___
```

### Tables

```markdown
| Header 1 | Header 2 |
|----------|----------|
| Cell 1   | Cell 2   |
```

**Alignment:**
- `:---` Left
- `:---:` Center
- `---:` Right

### Escaping

Use `\` to escape special characters:
```markdown
\* \# \[ \] \( \)
```

### BIAS Writer Annotations

**Memos:**
```markdown
((private note))
```
Yellow highlight, for TODOs and notes

**Omits:**
```markdown
[[content to exclude]]
```
Dimmed with strikethrough, for cuts

**Tags:**
```markdown
#tag #another-tag
```
Blue styling, for organization

### Quick Reference

```
# H1                 ## H2                ### H3
**bold**             *italic*             ~~strike~~
`code`               [link](url)          ![img](url)
> quote              

- list               1. ordered           - [ ] task
---                  ((memo))             [[omit]]
#tag                 

| table |
|-------|
```

---

## Tips & Best Practices

### Annotation Best Practices

**Keep memos concise:**
```
✅ Good: ((TODO: verify date))
❌ Too long: ((I need to check this date because I'm not sure if it's...))
```

**Use tags consistently:**
```
✅ Good: #characterdev, #character-dev (pick one format)
❌ Inconsistent: #characterdev, #character_development, #chardev
```

**Omits are for keeping, not discarding:**
```
✅ Good use: [[detailed description I might restore]]
❌ Bad use: [[sdfjklsdjf keyboard mashing]]
```

### Workflow Tips

**1. Tag early, tag often**
- Tag scenes as you write them
- Don't wait until revision
- Makes finding content effortless

**2. Use memo TODOs liberally**
- Don't break writing flow to research
- Add `((TODO: research X))` and continue
- Batch research tasks later

**3. Preserve your darlings**
- Before cutting beloved passages, wrap in `[[]]`
- You might find a place for them later
- Avoids regret and loss

**4. Create a tagging system**
- Character tags: `#Alice`, `#Bob`
- Plot tags: `#act1`, `#climax`, `#resolution`
- Status tags: `#needswork`, `#done`, `#review`
- Location tags: `#castle`, `#village`

**5. Review counts regularly**
- High memo count? Time to address TODOs
- High omit count? Time to commit to cuts
- Uneven tag distribution? Balance needed

**6. Use Duplicate + Archive for major revisions**
- Select all documents (or chapters needing heavy revision)
- Click "Duplicate + Archive"
- Get fresh copies, originals safely preserved
- Tag new version: `#draft2 #revision-2025`

**7. Bulk tag for organization**
- Select related documents in Selection Mode
- Add status tags: `#completed`, `#in-progress`
- Add version tags: `#draft1`, `#draft2`
- Makes filtering and tracking easy

**8. Merge related documents**
- Short chapters? Merge into longer sections
- Research notes? Combine into reference document
- Use merge dialog to control order

**9. Use Sprint & Stats for focused sessions**
- Set timer for focused writing (25 min Pomodoro)
- Track time with count-up timer
- Enable word count pill for motivation
- Build consistent daily habits

**10. Monitor stats regularly**
- Check word count progress
- Review annotation counts (too many TODOs?)
- Track reading time estimates
- Use project stats to see big picture

**11. Use Desktop Focus Mode for distraction-free writing**
- Press `Shift + Cmd/Ctrl + L` to hide Library panel
- Pair with Sprint & Stats timer
- Full editor width for immersive writing
- Toggle back when you need to navigate documents

### Search Tips

**Memos Mode:**
- Leave filter empty to see all memos
- Use keywords like "TODO", "VERIFY", "FIX"
- Review by document to see context

**Omits Mode:**
- Filter by chapter numbers
- Find similar cuts across manuscript
- Toggle elision to preview final version

**Tags Mode:**
- Click tags to see distribution
- Identify underused tags
- Find scenes by multiple characteristics

### Performance Tips

**Keep documents manageable:**
- Use Split Document feature for very long documents (>50,000 words)
- One chapter per document works well
- Improves search performance
- Easier to navigate and organize

**Clean up old annotations:**
- Remove resolved TODO memos
- Delete unnecessary omits
- Archive tags no longer needed

**Use projects to organize:**
- Don't put everything in one project
- Separate drafts, notes, and reference
- Faster search within focused scope

---

## Getting Help

### Common Questions

**Q: Can I use nested annotations?**
A: Yes! You can nest annotations like `((memo with [[omit]] inside))`. The editor will highlight both annotation types correctly.

**Q: Do annotations count toward word count?**
A: No. Word count excludes all annotation syntax.

**Q: Can I control which annotations appear in exports?**
A: Yes! You can choose to include or exclude each annotation type (memos, omits, tags) in your exports. However, you cannot export ONLY annotations without the main text - annotations are always exported alongside your content.

**Q: Do archived documents appear in Find Panel searches?**
A: It depends on your current view. When "Show Archived" is ON, Find Panel searches ONLY archived documents. When OFF, it searches only active documents. The search scope automatically matches your current view.

**Q: What's the difference between Reference and Archived documents?**
A: Reference documents are active documents marked for research/background (colored dot, watermark, blue line in editor). Archived documents are in a separate view and only searchable when "Show Archived" is toggled on. Reference = organizational label; Archived = separate view.

**Q: How many documents can I have?**
A: No limit. Performance stays good up to 1000+ documents per project.

**Q: Can I search across projects?**
A: Not currently. Search is per-project. Use tags consistently across projects as a workaround.

**Q: What does "Duplicate + Archive" do?**
A: It creates duplicates of all selected documents and automatically archives the originals. Perfect for starting a new draft version while preserving the original. This is a bulk operation available in Selection Mode.

**Q: How do I select multiple documents?**
A: Click the selection icon in the Library panel to enter Selection Mode. Checkboxes will appear next to all documents. Click to select/deselect, or use "Select All" button.

**Q: Can I undo a bulk delete?**
A: No. Bulk delete is permanent and cannot be undone. Always double-check your selection before deleting. Consider archiving instead if you might need the documents later.

**Q: How do I mark a document as reference?**
A: Right-click (or swipe on mobile) on the document in the Library panel and select "Mark as Reference". Reference documents show a colored dot indicator, watermark overlay, and blue line in the editor.

**Q: What is Sprint & Stats?**
A: Sprint & Stats is a panel that combines a writing timer with real-time word count statistics. Set a timer (countdown or count-up), write, and watch your document and project word counts update live. Enable the word count pill for a persistent display while writing.

**Q: Can I set word count goals in Sprint & Stats?**
A: No. Sprint & Stats focuses on time-based sessions and real-time word count tracking. You set a timer and write - the stats show your progress naturally without predefined goals.

**Q: Do stats update in real-time?**
A: Yes! Word counts, character counts, and annotation counts update as you type. No need to refresh or save - stats are always current.

**Q: Can I see stats for my entire project?**
A: Yes. The Stats panel shows both document-level stats (current document) and project-level stats (all documents combined, including total words, documents, and annotations).

**Q: What is Desktop Focus Mode?**
A: Desktop Focus Mode hides the Library panel to give you full-width editor space for distraction-free writing. Toggle it with `Shift + Cmd/Ctrl + L` or click the chevron button.

**Q: How do I get the Library panel back after hiding it?**
A: Press `Shift + Cmd/Ctrl + L` again, or click the chevron button at the edge of the screen to restore the Library panel.

### Troubleshooting

**Annotations not highlighting:**
- Check if syntax is correct: `((text))`, `[[text]]`, `#tag`
- Ensure no spaces: `( (text) )` won't work
- Refresh the editor if needed

**Search not finding results:**
- Check which mode you're in (Search, Memos, Omits, Tags)
- Verify documents are in active project
- **Check your view:** "Show Archived" ON searches only archived docs; OFF searches only active docs
- Try clearing filter and searching again

**Document seems missing:**
- Check if it's archived (toggle "Show Archived" to switch views)
- Verify you're in the correct project
- Check if document was accidentally deleted

**Can't find annotation in search:**
- Verify the document containing it is in your current view (active vs. archived)
- Check spelling in filter text
- Try the relevant mode (Memos, Omits, Tags) instead of Search

**Export missing annotations:**
- Check export dialog settings
- Ensure annotation types are toggled on
- Try different export format

---

## Keyboard Shortcuts Reference Card

```
┌─────────────────────────────────────────┐
│         BIAS WRITER SHORTCUTS           │
├─────────────────────────────────────────┤
│ GLOBAL                                  │
│  Cmd/Ctrl + F     Toggle Find Panel     │
│  Cmd/Ctrl + 9/0   Jump to Memos         │
│  Cmd/Ctrl + [/]   Jump to Omits         │
│  Shift+Cmd/Ctrl+L Toggle Focus Mode     │
│  Cmd/Ctrl + S     Save                  │
│  Esc              Close Panel           │
├─────────────────────────────────────────┤
│ EDITOR                                  │
│  Cmd/Ctrl + B     Bold                  │
│  Cmd/Ctrl + I     Italic                │
│  Cmd/Ctrl + Z     Undo                  │
│  Cmd/Ctrl + Y     Redo                  │
├─────────────────────────────────────────┤
│ FIND PANEL                              │
│  Click            Navigate to Result    │
│  Esc              Close Panel           │
│  Cmd/Ctrl + F     Toggle Panel          │
└─────────────────────────────────────────┘
```

---

## Version History

**v1.0 (December 2024)**
- Initial release
- Two-stage filtering system
- Three annotation types
- Multi-mode Find Panel
- Project organization
- Export functionality

---

## About BIAS Writer

BIAS Writer is developed by BIAS LLC and protected by U.S. Provisional Patent Application No. 63/949,099 covering the two-stage hierarchical content filtering system.

**Patent-Pending Technology:**
The two-stage filtering approach is novel and provides significant advantages over traditional search methods. The X/Y count format, categorical filtering, and lexical refinement work together to create an intuitive, powerful annotation management system.

**For More Information:**
- Technical details: See ARCHITECTURE.md
- Patent information: See PATENTS.md
- License: See LICENSE

---

**Copyright © 2025 BIAS LLC. All rights reserved.**

Patent Pending - U.S. Provisional Patent Application No. 63/949,099
