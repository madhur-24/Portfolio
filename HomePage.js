import React from "react";
import ProjectSection from "./ProjectSection";
import BlogSection from "./BlogSection";
import SkillsSection from "./SkillsSection";
import RecommendationSection from "./RecommendationSection";
import Title from "./Title";
import About from "./About";

function HomePage() {
  return (
    <div>
      <Title name="Muskaan Banthia" leadText="I am pursuing BTech in IT from Banasthali Vidyapith" />
      <RecommendationSection />
      <SkillsSection />
      <ProjectSection />
      <About />
      <BlogSection />
    </div>
  );
}

export default HomePage;
