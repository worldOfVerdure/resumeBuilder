import { PROJECT_TITLES } from "./projectData.ts";

export function indexRetrieval(projectTitle: string): number {
  switch(projectTitle) {
    case PROJECT_TITLES[0]: //Match Game
      return 0;
    case PROJECT_TITLES[1]: //Rotate Cube
      return 1;
    case PROJECT_TITLES[2]: //No Dice
      return 2;
    case PROJECT_TITLES[3]: //Resume Builder
      return 3;
    default:
      throw new Error("Incorrect title was passed.");
  }
}
