export class ProjectType {
  constructor(public title: string, public tech: string[], public githubLink: string) {}
}

const TECH_STACK = [
  ["HTML", "CSS", "JS"],
  ["HTML", "CSS", "JS"],
  ["HTML", "CSS", "JS"],
  ["HTML", "CSS", "TS", "TSX", "React", "Styled-Comp"]
];

export const PROJECT_TITLES = ["Match Game", "Rotate Cube", "No Dice", "Resume Builder"];

const MATCH_GAME = new ProjectType(PROJECT_TITLES[0], TECH_STACK[0], "https://github.com/worldOfVerdure/GameNMatch");
const ROTATE_CUBE = new ProjectType(PROJECT_TITLES[1], TECH_STACK[1], "https://github.com/worldOfVerdure/rotateCube");
const NO_DICE = new ProjectType(PROJECT_TITLES[2], TECH_STACK[2], "https://github.com/worldOfVerdure/noDice");
const RESUME_BUILDER = new ProjectType(PROJECT_TITLES[3], TECH_STACK[3], "https://github.com/worldOfVerdure/resumeBuilder");

export const PROJECTS = [MATCH_GAME, ROTATE_CUBE, NO_DICE, RESUME_BUILDER];
