const NUM_OF_PROJECTS = 4;

//Tech Stack Starts
const TECH_STACK = [
  ["HTML", "CSS", "TS", "TSX", "React", "Styled-Comp"],
  ["HTML", "CSS", "JS"],
  ["HTML", "CSS", "JS"],
  ["HTML", "CSS", "JS"]
] as const;

Object.freeze(TECH_STACK);

type TechStack = typeof TECH_STACK[number];
//Project Titles Start
export const PROJECT_TITLES = [
  "Resume Builder",
  "Match Game",
  "Rotate Cube",
  "No Dice"
] as const;

Object.freeze(PROJECT_TITLES);

export type ProjectTitle = typeof PROJECT_TITLES[number];
// GitHub link start
const GITHUB_LINK = [
  "https://github.com/worldOfVerdure/resumeBuilder",
  "https://github.com/worldOfVerdure/GameNMatch",
  "https://github.com/worldOfVerdure/rotateCube",
  "https://github.com/worldOfVerdure/noDice"
] as const;

type GithubLink = typeof GITHUB_LINK[number];
// ProjectClassType class 
export class ProjectClassType {
  constructor(public title: ProjectTitle, public tech: TechStack, public githubLink: GithubLink) {}
}

export const PROJECTS: ProjectClassType[] = [];

for(let i=0; i < NUM_OF_PROJECTS; ++i) {
  const tempProject: ProjectClassType = new ProjectClassType(
    PROJECT_TITLES[i],
    TECH_STACK[i], 
    GITHUB_LINK[i]
  );
  PROJECTS.push(tempProject);
}
