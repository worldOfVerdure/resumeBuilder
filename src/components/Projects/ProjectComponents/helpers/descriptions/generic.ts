import { type ProjectTitle } from "../projectData.ts";

const DESCRIPTION: Record<ProjectTitle, readonly string[]> = {
  "Resume Builder": [
    "Built a resume editor powered by .ts files for dynamic text control",
    "Identified and resolved a type-checking bug by migrating to .tsx, improving overall stability",
    "Applied absolute CSS units to achieve a print-ready layout (8.5in × 11in)"
  ],
  "Match Game": [
    "Designed a responsive match game with adaptive images and dynamic tile count",
    "Implemented a Fisher-Yates shuffle for O(n) randomization of the image array",
    "Delivered scalable assets using srcset and sizes attributes",
    "Rendered a timer using asynchronous setInterval updates every 25ms"
  ],
  "Rotate Cube": [
    "Created a 3D cube using CSS perspective with rotate() and translate() transformations",
    "Controlled cube orientation via range sliders, radio buttons, and checkboxes",
    "Linked orientation values to dynamic display beneath input controls",
    "Achieved smooth rotation using the rotate3d() CSS function"
  ],
  "No Dice": [
    "Developed a dice game where players attempt to reach a score of 21 with a 'hold' feature",
    "Implemented core game logic using imperative JavaScript",
    "Enhanced accessibility with visual outlines and disabled button states",
    "Coded all SVG elements using basic geometry and algebra"
  ]
}

export default DESCRIPTION;
