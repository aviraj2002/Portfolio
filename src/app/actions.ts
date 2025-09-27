'use server';

import {
  generateProfessionalResume,
  type GenerateProfessionalResumeInput,
} from '@/ai/flows/generate-professional-resume';
import {
  profileData,
  experienceData,
  educationData,
  projectsData,
  skillsData,
} from '@/lib/data';

export async function handleGenerateResume() {
  try {
    const allSkills = Object.values(skillsData).flat();

    const resumeInput: GenerateProfessionalResumeInput = {
      name: profileData.name,
      email: profileData.email,
      phone: profileData.phone,
      linkedin: profileData.linkedin,
      github: profileData.github,
      experience: experienceData.map(exp => ({
        company: exp.company,
        title: exp.title,
        years: exp.years,
        description: exp.description,
      })),
      skills: allSkills,
      education: educationData.map(edu => ({
        institution: edu.institution,
        degree: edu.degree,
        years: edu.years,
      })),
      projects: projectsData.map(proj => ({
        name: proj.name,
        description: proj.description,
        link: proj.link,
      })),
    };

    const result = await generateProfessionalResume(resumeInput);
    return { success: true, resumeText: result.resumeText };
  } catch (error) {
    console.error('Error generating resume:', error);
    return { success: false, error: 'Failed to generate resume.' };
  }
}
