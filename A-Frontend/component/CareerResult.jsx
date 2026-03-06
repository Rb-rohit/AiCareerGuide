import React from "react";
import { useLocation } from "react-router-dom";
import CareerSummary from "./CareerSummary";
import SkillGapSection from "./SkillGapSection";
import RoadmapSection from "./RoadmapSection";
import SalarySection from "./SalarySection";
import ProjectSection from "./ProjectSection";

export default function CareerResult() {
  const location = useLocation();
  const stored = localStorage.getItem("careerData");
  const careerData =
  location.state?.careerData ||
  (stored ? JSON.parse(stored) : null); 
  if (!careerData) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto space-y-8">

        <CareerSummary
          careerPath={careerData.careerPath}
          matchScore={careerData.matchScore}
        />

        <SkillGapSection
          skillsHave={careerData.skillsHave}
          skillsMissing={careerData.skillsMissing}
        />

        <RoadmapSection roadmap={careerData.roadmap} />

        <SalarySection salary={careerData.salary} />

        <ProjectSection projects={careerData.projects} />

      </div>
    </div>
  );
}
