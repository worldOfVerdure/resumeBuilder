import EducationContent from "./EducationContent.tsx";
// import RelevantCoursework from "./RelevantCourseWork.tsx";
import SectionTitle from "../reuseable/SectionTitle.tsx";

export default function Education() {
  return (
    <section>
      <SectionTitle sectionTitle="Education" />
      <EducationContent />
      {/* <RelevantCoursework /> */}
    </section>
  );
}
