import { profileData } from "./profile";
import { projectsData } from "./projects";
import { skillCategoriesData } from "./skills";
import { educationData } from "./education";

export * from "@/types/portfolio";
export { profileData, projectsData, skillCategoriesData, educationData };

export const portfolioData = {
  profile: profileData,
  projects: projectsData,
  skillCategories: skillCategoriesData,
  education: educationData,
};
