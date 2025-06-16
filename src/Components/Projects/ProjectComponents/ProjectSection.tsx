import { PROJECTS } from "./helpers/projectData.ts";
import SingularProject from "./SingularProject.tsx";

export default function Projects() {
  return (
    <section >
      {PROJECTS.map(project => {
        return (
          <SingularProject key={project.title} {...project} />
        );
      })}
    </section>
  );
}
