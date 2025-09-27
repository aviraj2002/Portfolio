'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating a professional resume from user profile information.
 *
 * The flow uses a prompt to instruct the LLM to format the given profile information into a resume.
 * It includes the main function `generateProfessionalResume` along with its input and output types.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

// Define the input schema for the resume generation flow
const GenerateProfessionalResumeInputSchema = z.object({
  name: z.string().describe('The full name of the person.'),
  email: z.string().email().describe('The email address of the person.'),
  phone: z.string().describe('The phone number of the person.'),
  linkedin: z.string().url().describe('The LinkedIn profile URL.'),
  github: z.string().url().describe('The GitHub profile URL.'),
  experience: z.array(
    z.object({
      company: z.string().describe('The name of the company.'),
      title: z.string().describe('The job title.'),
      years: z.string().describe('The years of employment.'),
      description: z.string().describe('The job description.'),
    })
  ).describe('A list of professional experiences.'),
  skills: z.array(z.string()).describe('A list of skills.'),
  education: z.array(
    z.object({
      institution: z.string().describe('The name of the institution.'),
      degree: z.string().describe('The degree obtained.'),
      years: z.string().describe('The years of attendance.'),
    })
  ).describe('A list of educational experiences.'),
  projects: z.array(
    z.object({
      name: z.string().describe('The name of the project.'),
      description: z.string().describe('A brief description of the project.'),
      link: z.string().url().describe('The link to the project.'),
    })
  ).describe('A list of personal projects.'),
}).describe('All information needed to generate a resume.');

export type GenerateProfessionalResumeInput = z.infer<
  typeof GenerateProfessionalResumeInputSchema
>;

// Define the output schema for the resume generation flow
const GenerateProfessionalResumeOutputSchema = z.object({
  resumeText: z.string().describe('The generated resume text.'),
});

export type GenerateProfessionalResumeOutput = z.infer<
  typeof GenerateProfessionalResumeOutputSchema
>;

// Define the main function that calls the resume generation flow
export async function generateProfessionalResume(
  input: GenerateProfessionalResumeInput
): Promise<GenerateProfessionalResumeOutput> {
  return generateProfessionalResumeFlow(input);
}

// Define the prompt for the resume generation
const resumePrompt = ai.definePrompt({
  name: 'resumePrompt',
  input: {schema: GenerateProfessionalResumeInputSchema},
  output: {schema: GenerateProfessionalResumeOutputSchema},
  prompt: `Given the following information, please generate a professional-looking resume.  Format the resume with clear sections for contact information, experience, skills, education, and projects.  Use bullet points to highlight key accomplishments and responsibilities in the experience section. Make sure the contact info is at the top, and present the experience in reverse chronological order.\n\nContact Information:\nName: {{{name}}}\nEmail: {{{email}}}\nPhone: {{{phone}}}\nLinkedIn: {{{linkedin}}}\nGitHub: {{{github}}}\n\nExperience:\n{{#each experience}}\n  Company: {{{company}}}\n  Title: {{{title}}}\n  Years: {{{years}}}\n  Description: {{{description}}}\n{{/each}}\n\nSkills:\n{{#each skills}}\n  - {{{this}}}\n{{/each}}\n\nEducation:\n{{#each education}}\n  Institution: {{{institution}}}\n  Degree: {{{degree}}}\n  Years: {{{years}}}\n{{/each}}\n\nProjects:\n{{#each projects}}\n  Name: {{{name}}}\n  Description: {{{description}}}\n  Link: {{{link}}}\n{{/each}}`,
});

// Define the Genkit flow for generating the resume
const generateProfessionalResumeFlow = ai.defineFlow(
  {
    name: 'generateProfessionalResumeFlow',
    inputSchema: GenerateProfessionalResumeInputSchema,
    outputSchema: GenerateProfessionalResumeOutputSchema,
  },
  async input => {
    const {output} = await resumePrompt(input);
    return output!;
  }
);
