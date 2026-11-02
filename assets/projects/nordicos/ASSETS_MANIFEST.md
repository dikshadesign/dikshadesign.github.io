# Nordic OS — Assets Manifest & Image Placement Guide

This guide maps every visual asset slot in [`nordicos.html`](../../../../nordicos.html) to its file path, aspect ratio, purpose, and replacement guidelines.

All 5 slots currently use high-fidelity, infinite-resolution vector SVGs located in `assets/projects/nordicos/`. You can replace any of these with your own exported screenshots or PNG/WebP/SVG files by saving your export under the corresponding filename or editing the `src` attribute in `nordicos.html`.

---

## Asset Slots Overview

| Slot ID | Asset ID | File Name | Recommended Size | Target Section | Content / Subject |
|---|---|---|---|---|---|
| `#slot-nordicos-img-01` | `NORDICOS-IMG-01` | [`nordicos-hero.svg`](nordicos-hero.svg) | 1200 × 720 (16:9) | Hero &amp; 06 — Projects Workspace | **Live Interface:** Projects Workspace UI running at `localhost:3002/daily-activity` with `BD 28 0004 · ₹77.0 L`, `POC Stage 2 of 9`, and Engineering Nudge actions |
| `#slot-nordicos-img-02` | `NORDICOS-IMG-02` | [`nordicos-modules-grid.svg`](nordicos-modules-grid.svg) | 1200 × 580 (2:1) | 04 — The System | The six operational workspaces (Overview, Sales & BD, Projects, Engineering, Procurement, Admin) |
| `#slot-nordicos-img-03` | `NORDICOS-IMG-03` | [`nordicos-lifecycle.svg`](nordicos-lifecycle.svg) | 1200 × 500 (2.4:1) | 05 — How It Works | Connected machine vision lifecycle pipeline from optical trial to signed customer PO |
| `#slot-nordicos-sys-01` | `NORDICOS-SYS-01` | [`nordicos-state-machine.svg`](nordicos-state-machine.svg) | 1200 × 960 (1.25:1) | 05A — 9-Stage Pipeline | **Flowchart Reference (Screenshot 1):** 9-Stage Machine Vision & Engineering Pipeline from Technical Discovery to Post-PO 3D CAD Freeze |
| `#slot-nordicos-sys-02` | `NORDICOS-SYS-02` | [`nordicos-trigger-action-tree.svg`](nordicos-trigger-action-tree.svg) | 1200 × 860 (1.4:1) | 05B — Role-Wise Access (RBAC) | **Role Matrix Reference (Screenshot 2):** 11 Departmental Personas (admin, ceo, cto, cfo, eng_head, proj_head, robotics_head, sales, technical, procurement, projects) |
| `#slot-nordicos-img-04` | `NORDICOS-IMG-04` | [`nordicos-architecture-code.svg`](nordicos-architecture-code.svg) | 1200 × 620 (1.9:1) | 07 &amp; 08 — Building Product | Vibe coding & prototyping: Component architecture and reactive UI logic |
| `#slot-nordicos-img-05` | `NORDICOS-IMG-05` | [`nordicos-composite-final.svg`](nordicos-composite-final.svg) | 1200 × 640 (16:9 or 15:8) | 09 &amp; 10 — Outcome &amp; Learnings | Production composite: Projects Workspace control room alongside role-based pipeline views |

---

## Detailed Specifications for Each Slot

### 1. Hero Interface Overview (`NORDICOS-IMG-01`)
- **Location:** `assets/projects/nordicos/nordicos-hero.svg`
- **Section:** Hero / 06 — Workspace UI
- **Visual Subject:** Exact representation of the user's running `localhost:3002/daily-activity` UI:
  - Top navigation bar with red 'N' logo and tabs: `Overview`, `Sales & BD`, `Projects`, `Engineering` (active), `Finance & Investor`, `Operations & Supply`, `People & HR`, `Admin & Setup`
  - Workspace header: "Projects Workspace · Central operational hub · 3 active projects in flight across organization"
  - Active project card: `BD 28 0004 · Rung 2 · tt`, `ysr · Owner: Ayush`, `₹77.0 L`
  - 9-segment stage stepper: `POC (Client) · Stage 2 of 9`
  - Callout box: `Step 5 · Customer Feasibility Trial Report · Awaiting Engineering POC captures · Action With: Engineering`
  - Action buttons: `Nudge Engineering Lead` and `Prepare Drawing & Specs Early →`
  - Status indicators: `TECHNICAL STAGE: Proof of Concept (POC)`, `PHYSICAL SAMPLES: Awaiting Client Samples`, `CUSTOMER ACCOUNT: ysr`

### 2. Six Operational Layers (`NORDICOS-IMG-02`)
- **Location:** `assets/projects/nordicos/nordicos-modules-grid.svg`
- **Section:** 04 — Departmental Workspaces
- **Visual Subject:** 6-card interactive grid breaking down Overview, Sales, Projects, Engineering, Procurement, and Admin.

### 3. Connected Lifecycle Pipeline (`NORDICOS-IMG-03`)
- **Location:** `assets/projects/nordicos/nordicos-lifecycle.svg`
- **Section:** 05 — Operational Flow
- **Visual Subject:** Flow pipeline illustrating data continuity:
  `Optical Discovery → Hardware Sizing → POC → Costing → Proforma Invoice → Customer Acceptance (50% Advance) → PO Upload → CAD Freeze`

### 4. 9-Stage Machine Vision & Engineering Pipeline (`NORDICOS-SYS-01`)
- **Location:** `assets/projects/nordicos/nordicos-state-machine.svg`
- **Section:** 05A — The 9-Stage Machine Vision & Engineering Pipeline
- **Visual Subject:** Dark-mode flowchart matching the user's first reference screenshot:
  - Step 1: Technical Discovery (Part Specs & Reflectivity)
  - Step 2: Solution Architecture (Hardware Sizing)
  - Step 3: POC (Trial Images & Motion Setup — No Costing)
  - Step 4: Internal DAP (Mechanical & System Layout)
  - Step 5: Quotation & All Costings (BOM, Labor, Margin, Commercial Terms)
  - Inter-stage gate: `Approve & Release to Sales for Invoice`
  - Sales Step 6: PO & Proforma Invoice (Auto-populated from Confirmed Costing)
  - Inter-stage gate: `Send Proforma Commercial Invoice`
  - Customer Review & Acceptance (50% Advance Terms)
  - Inter-stage gate: `Issues Official Customer PO`
  - Sales Uploads Customer PO Document (Logs PO #, Date, & Signed PDF)
  - Inter-stage gate: `Confirm PO & Give Heads Up`
  - Engineering: Post-PO DAP Internal (Detailed 3D CAD Freeze, DFM & Procurement)

### 5. Role-Wise Access Architecture Matrix (`NORDICOS-SYS-02`)
- **Location:** `assets/projects/nordicos/nordicos-trigger-action-tree.svg`
- **Section:** 05B — Role-Wise Access Architecture: 11 Departmental Personas
- **Visual Subject:** Dark amber matrix matching the user's second reference screenshot:
  - 11 distinct rows mapping `Role Key`, `Persona & Designation`, `Target Route / View`, and `Operational Access Scope & Pipelines`
  - Roles included: `admin`, `ceo`, `cto`, `cfo`, `eng_head`, `proj_head`, `robotics_head`, `sales`, `technical`, `procurement`, `projects`

### 6. Full-Stack Architecture & Implementation (`NORDICOS-IMG-04`)
- **Location:** `assets/projects/nordicos/nordicos-architecture-code.svg`
- **Section:** 07 &amp; 08 — Product Architecture &amp; Building the Product
- **Visual Subject:** 3-column architectural diagram demonstrating sole designer/developer execution:
  - Column 1: Frontend component hierarchy &amp; 0px CSS token system
  - Column 2: Backend Node/Express controller &amp; real-time WebSocket broadcast
  - Column 3: PostgreSQL entity relationship schema with foreign keys

### 5. Production Software Composite (`NORDICOS-IMG-05`)
- **Location:** `assets/projects/nordicos/nordicos-composite-final.svg`
- **Section:** 09 &amp; 10 — Outcome &amp; What I Learned
- **Visual Subject:** Multi-device composition showcasing the desktop management portal alongside the touch-optimized shop floor tablet HMI used by factory technicians with gloves.

---

## How to Swap Assets

1. **Keep the same filenames:**  
   Export your PNG, JPG, or SVG from Figma or your live codebase and place it in `assets/projects/nordicos/` with the exact filename (e.g. `nordicos-hero.svg` or `nordicos-hero.png`).
2. **If using PNG/JPG instead of SVG:**  
   Open [`nordicos.html`](../../../../nordicos.html), search for the `id` (e.g. `nordicos-img-01`), and update `src="assets/projects/nordicos/nordicos-hero.svg"` to `src="assets/projects/nordicos/nordicos-hero.png"`.
