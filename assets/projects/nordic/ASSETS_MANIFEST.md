# Nordic ONE — Assets Manifest & Image Placement Guide

This guide maps every visual asset slot in [`nordic.html`](../../../../nordic.html) to its file path, aspect ratio, purpose, and replacement guidelines.

All 9 slots currently use high-fidelity, infinite-resolution vector SVGs located in `assets/projects/nordic/`. You can replace any of these with your own exported screenshots or PNG/WebP/SVG files by saving your export under the corresponding filename or editing the `src` attribute in `nordic.html`.

---

## Asset Slots Overview

| Slot ID | Asset ID | File Name | Recommended Size | Target Section | Content / Subject |
|---|---|---|---|---|---|
| `#slot-nordic-img-01` | `NORDIC-IMG-01` | [`nordic-hero.svg`](nordic-hero.svg) | 1200 × 640 (16:9 or 15:8) | Hero &amp; 01 — Overview | Full-width platform screenshot, central application launcher, 5 connected domains |
| `#slot-nordic-img-02a` | `NORDIC-IMG-02A` | [`nordic-rbac-systems.svg`](nordic-rbac-systems.svg) | 1200 × 580 (2:1) | 02 — My Role &amp; Systems | Role-Based Access Control (RBAC) governance matrix across 5 industrial personas |
| `#slot-nordic-img-02b` | `NORDIC-IMG-02B` | [`nordic-architecture.svg`](nordic-architecture.svg) | 1200 × 520 (21:9 or 2.3:1) | 02 — My Role &amp; Systems | Platform architecture hierarchy diagram (Shell → Foundation Tokens → 5 Micro-Apps) |
| `#slot-nordic-img-03` | `NORDIC-IMG-03` | [`nordic-before-after.svg`](nordic-before-after.svg) | 1200 × 480 (2.5:1) | 03 — Why This Matters | Before &amp; After: Fragmented silos vs. unified platform shell &amp; Event Bus integration |
| `#slot-nordic-img-04` | `NORDIC-IMG-04` | [`nordic-ecosystem-suite.svg`](nordic-ecosystem-suite.svg) | 1200 × 580 (2:1) | 04 — Understanding the Ecosystem | 5-panel product suite walkthrough (Vision, ERP, MES, EQMS, Visitor) in operational context |
| `#slot-nordic-img-05` | `NORDIC-IMG-05` | [`nordic-cross-app.svg`](nordic-cross-app.svg) | 1200 × 680 (16:9) | 05 — The Challenge | Side-by-side screens annotating purpose, information density, and primary actions |
| `#slot-nordic-img-06` | `NORDIC-IMG-06` | [`nordic-factory-flow.svg`](nordic-factory-flow.svg) | 1200 × 620 (1.9:1) | 06 — How Systems Relate in a Factory | End-to-end manufacturing flow (ERP → MES → Vision), EQMS quality branch &amp; parallel Visitor kiosk |
| `#slot-nordic-img-07` | `NORDIC-IMG-07` | [`nordic-design-system.svg`](nordic-design-system.svg) | 1200 × 480 (2.5:1) | 07 — Design Opportunity | Platform-level consistency vs. application-level flexibility comparison |
| `#slot-nordic-img-08` | `NORDIC-IMG-08` | [`nordic-launcher-ui.svg`](nordic-launcher-ui.svg) | 1200 × 680 (16:9) | 08 — Platform &amp; Interface Design | Global application launcher popover, federated ⌘K search, plant context, callouts |
| `#slot-nordic-img-09` | `NORDIC-IMG-09` | [`nordic-composite-final.svg`](nordic-composite-final.svg) | 1200 × 640 (16:9 or 15:8) | 09 — Outcome &amp; Learnings | Multi-window perspective composition showcasing the ecosystem as a unified whole |

---

## Detailed Specifications for Each Slot

### 1. Hero Platform Overview (`NORDIC-IMG-01`)
- **Location:** `assets/projects/nordic/nordic-hero.svg`
- **Section:** Hero / 01 — Overview
- **Visual Subject:** Central application launcher showing Nordic ONE shell chrome with 5 application tiles (Nordic Vision, Nordic ERP, Nordic MES, Nordic EQMS, Nordic Visitor Management) with live status indicators and plant selector.
- **Replacement Advice:** Capture your highest-fidelity desktop application launcher screen at 2x resolution (2400 × 1280px).

### 2A. Role-Based Access Control (RBAC) Governance Matrix (`NORDIC-IMG-02A`)
- **Location:** `assets/projects/nordic/nordic-rbac-systems.svg`
- **Section:** 02 — My Role &amp; Systems Architecture
- **Visual Subject:** Comprehensive permission matrix mapping access rights and dynamic UI redactions across 5 industrial persona roles: Plant General Manager, Optical QA Engineer, CNC Machine Operator, ISO Compliance Auditor, and Front Gate Security.
- **Replacement Advice:** Export your Figma RBAC permission diagram or settings matrix at 2x resolution (2400 × 1160px).

### 2B. Platform Architecture & Ecosystem Topology (`NORDIC-IMG-02B`)
- **Location:** `assets/projects/nordic/nordic-architecture.svg`
- **Section:** 02 — My Role &amp; Systems Architecture
- **Visual Subject:** Diagram mapping the 3 platform tiers:
  1. Nordic ONE Unified Platform Shell (SSO, Audit Logging, Event Bus)
  2. Shared Design System & Token Foundation (0px radius, typography, shared data tables)
  3. Five Domain Micro-Applications (Vision, ERP, MES, EQMS, Visitor Management)

### 3. Before & After Architectural Comparison (`NORDIC-IMG-03`)
- **Location:** `assets/projects/nordic/nordic-before-after.svg`
- **Section:** 03 — Why This Matters
- **Visual Subject:** Direct visual contrast comparing:
  - **Left (Before):** 5 disconnected silos with separate logins, manual CSV export, and delayed records.
  - **Right (After):** Nordic ONE single sign-on shell (Level 1: Unified Access) paired with the Cross-App Event Bus (Level 2: Data & Workflow Integration).

### 4. Five Applications in Operational Context (`NORDIC-IMG-04`)
- **Location:** `assets/projects/nordic/nordic-ecosystem-suite.svg`
- **Section:** 04 — Understanding the Ecosystem
- **Visual Subject:** 5 dedicated visual panels for each application, featuring representative UI workflows:
  - Nordic Vision: Camera Station 04 with defect bounding box
  - Nordic ERP: Supply chain batch allocation ledger
  - Nordic MES: Shop floor CNC line telemetry & OEE gauge
  - Nordic EQMS: Non-conformance ticket & CAPA investigation
  - Nordic Visitor Management: Contractor check-in & kiosk badging

### 5. Side-by-Side Screen Comparison (`NORDIC-IMG-05`)
- **Location:** `assets/projects/nordic/nordic-cross-app.svg`
- **Section:** 05 — The Challenge
- **Visual Subject:** Side-by-side screens annotating how purpose, information density, and operator interactions differ between high-contrast optical inspection (Vision) and shop floor tactile execution (MES).

### 6. End-to-End Factory Process Flow (`NORDIC-IMG-06`)
- **Location:** `assets/projects/nordic/nordic-factory-flow.svg`
- **Section:** 06 — How the Systems Relate in a Factory
- **Visual Subject:** Complete manufacturing flow showing:
  - Step 01: ERP planning and batch Lot B-881 allocation
  - Step 02: MES production telemetry and CNC milling
  - Step 03: Vision 4K AI optical inspection
  - Step 04: EQMS non-conformance ticket (#NC-4402) and automated line halt interlock
  - Step 05: Visitor Management operating in parallel to secure contractor and auditor site access

### 7. Design Opportunity & Token Hierarchy (`NORDIC-IMG-07`)
- **Location:** `assets/projects/nordic/nordic-design-system.svg`
- **Section:** 07 — Design Opportunity
- **Visual Subject:** Direct side-by-side comparison between platform-level consistency (global shell, tokens, shared components) and application-level flexibility.

### 8. Platform Launcher & Interface Design (`NORDIC-IMG-08`)
- **Location:** `assets/projects/nordic/nordic-launcher-ui.svg`
- **Section:** 08 — Platform & Interface Design
- **Visual Subject:** Detailed walkthrough of the global application launcher dropdown with annotations explaining key design decisions:
  - Callout 01: Global Persistent Shell (56px chrome)
  - Callout 02: Micro-Frontend Application Launcher (zero reload context jump)
  - Callout 03: Cross-Ecosystem Federated ⌘K Search (queries all domain databases simultaneously)

### 9. Outcome & Final Composite (`NORDIC-IMG-09`)
- **Location:** `assets/projects/nordic/nordic-composite-final.svg`
- **Section:** 09 — Outcome & Learnings
- **Visual Subject:** Multi-window perspective composition showing the depth of the ecosystem and the unity of its platform experience, unifying all 5 application domains into one cohesive platform stack.

---

## How to Swap Assets

1. **Keep the same filenames:**  
   Export your PNG, JPG, or SVG from Figma and place it in `assets/projects/nordic/` with the exact filename (e.g. `nordic-hero.svg` or `nordic-hero.png`).
2. **If using PNG/JPG instead of SVG:**  
   Open [`nordic.html`](../../../../nordic.html), search for the `id` (e.g. `nordic-img-01`), and update `src="assets/projects/nordic/nordic-hero.svg"` to `src="assets/projects/nordic/nordic-hero.png"`.
