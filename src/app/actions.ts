'use server';

import { resumeTextData } from '@/lib/data';

export async function handleGenerateResume() {
  try {
    // Directly return the static resume text
    return { success: true, resumeText: resumeTextData };
  } catch (error) {
    console.error('Error getting resume text:', error);
    return { success: false, error: 'Failed to load resume.' };
  }
}
