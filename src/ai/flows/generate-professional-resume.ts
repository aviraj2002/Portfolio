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
  prompt: `Generate a professional resume based on the provided information.

Use a clean, standard, single-column format that is easy for Applicant Tracking Systems (ATS) to parse.

Structure the resume with the following sections:
- Contact Information
- Summary
- Experience
- Skills
- Education
- Projects

Present experience in reverse chronological order. Start each bullet point in the experience section with a strong action verb.

================================
Contact Information:
- Name: {{{name}}}
- Email: {{{email}}}
- Phone: {{{phone}}}
- LinkedIn: {{{linkedin}}}
- GitHub: {{{github}}}

Summary:
A passionate Full Stack Developer with hands-on experience in creating dynamic and responsive web applications. Eager to leverage skills in both frontend and backend technologies to contribute to innovative projects and grow within a collaborative team environment.

Experience:
{{#each experience}}
- Company: {{{company}}}
  Title: {{{title}}}
  Years: {{{years}}}
  - {{{description}}}
{{/each}}

Skills:
{{#each skills}}
- {{{this}}}
{{/each}}

Education:
{{#each education}}
- Institution: {{{institution}}}
  Degree: {{{degree}}}
  Years: {{{years}}}
{{/each}}

Projects:
{{#each projects}}
- Name: {{{name}}}
  Description: {{{description}}}
  Link: {{{link}}}
{{/each}}
================================
`,
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
