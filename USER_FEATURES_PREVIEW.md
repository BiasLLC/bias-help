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
- No spaces (use hyphens: `#c