export class ProjectType {
  constructor(public title: string, public tech: string[], public githubLink: string) {}
}

const TECH_STACK = [
  ["HTML", "CSS", "JS"],
  ["HTML", "CSS", "JS"],
  ["HTML", "CSS", "JS"],
  ["HTML", "CSS", "JS", "React", "Styled-Comp"]
];

const MATCH_GAME = new ProjectType("Match Game", TECH_STACK[0], "https://github.com/worldOfVerdure/GameNMatch");
const ROTATE_CUBE = new ProjectType("Rotate Cube", TECH_STACK[1], "https://github.com/worldOfVerdure/rotateCube");
const NO_DICE = new ProjectType("No Dice", TECH_STACK[2], "https://github.com/worldOfVerdure/noDice");
const TASK_TRACKER = new ProjectType("Task Tracker (WIP)", TECH_STACK[3], "https://github.com/worldOfVerdure/managementApp");

export const PROJECTS = [MATCH_GAME, ROTATE_CUBE, NO_DICE, TASK_TRACKER];
