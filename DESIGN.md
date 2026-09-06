# DESIGN-SYSTEM.md: Industrial Design Portfolio

## 01 / APPROACH

* **Headline:** First, I define the approach.
* **Description:** Before building the UI, I define how to merge an interactive "Blueprint Workshop" with a structural, retro terminal aesthetic.
* **The Concept:** A custom-drawn pixel art room (industrial design shop) resting on top of a subtle blueprint grid. The room's objects act as interactive nodes.
* **Mobile Strategy:** The landscape room will be placed inside a horizontally scrollable container with a hidden scrollbar and a gentle "Swipe to explore" indicator. On tap, modals will take up 90% of the mobile screen.
* **Checklist:**
    * `[x]` 01 Interactive room canvas (Hotspots & panning)
    * `[x]` 02 Dithered Nav Bar transition
    * `[x]` 03 Structural Retro UI elements (Brackets, chunky borders)
    * `[x]` 04 Modal overlay (Subtle dot-matrix dimming)
    * `[x]` 05 Project gallery & details pop-ups
* **Note:** Structure the interactive logic before drawing the final room art.

---

## 02 / TYPOGRAPHY

* **Headline:** Then I build the type system.
* **Description:** Condensed, heavy impact meets technical readability to bridge the gap between industrial design and terminal tech.
* **Font Selection:**
    * **DISPLAY:** Oswald (or Bebas Neue) — *Bold, condensed, and mechanical.*
    * **BODY:** Inter Regular — *Clean, technical readability for UI labels and project descriptions.*
* **Type Scale:**
    * **H1:** 64 PX $\rightarrow$ Name / Hero identity
    * **H2:** 40 PX $\rightarrow$ Modal project titles
    * **H3:** 24 PX $\rightarrow$ Structural UI headers (e.g., `[ WORKBENCH ]`)
    * **BODY:** 16 PX $\rightarrow$ Project descriptions
    * **SMALL:** 12 PX $\rightarrow$ Terminal meta-data (e.g., `SYS.STATUS`, `[CLICK TO VIEW]`)
* **Note:** Good font pairing makes the retro style feel deliberate, not outdated.

---

## 03 / COLOR SYSTEM

* **Headline:** Then I lock the color palette.
* **Description:** Using the 60-30-10 rule, borrowed directly from the warm, editorial UGC reference.
* **Palette Breakdown:**
    * **60% PRIMARY:** Warm Sand (`#E1CFAB`)
    * **30% SECONDARY:** Muted Navy (`#536387`)
    * **10% ACCENT:** Pale Cream (`#F2E9CD`)
* **Application:**
    * **60 (Warm Sand) $\rightarrow$** The dominant background canvas, empty space, and blueprint base.
    * **30 (Muted Navy) $\rightarrow$** Nav bar top, blueprint grid lines, structural borders, terminal brackets, and text.
    * **10 (Pale Cream) $\rightarrow$** Hover states, active hotspot fills, and modal backgrounds for high contrast.
* **Note:** Using Navy for the structural grid lines creates a true "engineering blueprint" aesthetic.

---

## 04 / INTERACTION & UI LANGUAGE

* **Headline:** Then I define the visual rules.
* **Description:** Establishing the "middle ground" retro feel—tactile and structured without being overly grainy or chaotic.
* **Nav Bar:** 
    * No solid borders. 
    * Uses a CSS-based custom dither (fine noise gradient) that starts as solid Muted Navy at the very top of the screen and diffuses downward into the Warm Sand background.
* **Hotspots (Room Objects):** 
    * Visible but unobtrusive to preserve the pixel art.
    * **Idling:** Fine, 1px dashed Muted Navy borders with small corner brackets (e.g., `[+]` at the edges).
    * **Hover:** The borders turn solid, and the box fills with a 10% opacity Pale Cream to indicate interactivity.
* **Modal Overlay:** 
    * Instead of harsh, chunky pixelation, the background dims using a fine, semi-transparent Navy "halftone" or dot-matrix pattern. It darkens the room slightly while keeping the pixel art visible underneath.
* **UI Borders:** 
    * Modals and content boxes use thick, solid Muted Navy borders (2px to 4px) to mimic the structural, compartmentalized style of the original computer science portfolio.

---

## 05 / DESIGN SYSTEM ARCHITECTURE

* **Headline:** Finally, I turn it into a system.
* **Description:** Everything goes into one Markdown blueprint before development starts.

### 5.1 Stack & Architecture
* **Framework:** React / Next.js (for component management of hotspots)
* **Styling:** Tailwind CSS + Custom CSS (for dithering/halftone filters)
* **Canvas:** HTML5 Scrollable Container (Mobile) / Fixed Aspect Ratio (Desktop)

### 5.2 UI Components & CSS Rules
* **[NAVBAR]:** Solid Navy top $\rightarrow$ Dithered gradient $\rightarrow$ Transparent bottom. Sticky positioning.
* **[BACKGROUND]:** Warm Sand base + 1px Navy blueprint grid lines (spacing: 40px).
* **[HOTSPOT_IDLE]:** `border: 1px dashed #536387;`
* **[HOTSPOT_HOVER]:** `border: 2px solid #536387; background: rgba(242, 233, 205, 0.1); cursor: pointer;`
* **[MODAL_OVERLAY]:** Fine Navy halftone pattern, opacity 40%.
* **[MODAL_CONTAINER]:** Background Pale Cream, Border 4px solid Muted Navy, sharp corners (no border-radius).

### 5.3 Development Plan
* `01` Structure the layout and Dithered Nav Bar.
* `02` Implement the blueprint grid background.
* `03` Place placeholder pixel-art room assets.
* `04` Map absolute positioning for interactive hotspots.
* `05` Build modal logic and halftone overlay.
* `06` Populate with `[CLIENT_NAME]` and placeholder project data.