'use client';

import { useState } from 'react';
import { Download, Loader2, FileText } from 'lucide-react';
import { handleGenerateResume } from '@/app/actions';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { ScrollArea } from './ui/scroll-area';

export default function ResumeButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [resumeText, setResumeText] = useState('');
  const { toast } = useToast();

  const onGenerateClick = async () => {
    setIsLoading(true);
    try {
      const result = await handleGenerateResume();
      if (result.success && result.resumeText) {
        setResumeText(result.resumeText);
        setIsOpen(true);
      } else {
        toast({
          variant: 'destructive',
          title: 'Error',
          description: result.error || 'An unknown error occurred.',
        });
      }
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Failed to connect to the resume generation service.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownload = () => {
    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Abhishek_Kumar_Barnwal_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <Button onClick={onGenerateClick} disabled={isLoading} size="lg" className="w-full sm:w-auto">
        {isLoading ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <FileText className="mr-2 h-4 w-4" />
        )}
        Generate AI Resume
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-3xl h-[90vh]">
          <DialogHeader>
            <DialogTitle>Generated Resume</DialogTitle>
            <DialogDescription>
              Here is your AI-generated professional resume. You can copy the text or download it as a file.
            </DialogDescription>
          </DialogHeader>
          <ScrollArea className="flex-grow border rounded-md p-4 bg-secondary/50 h-[calc(90vh-180px)]">
            <pre className="whitespace-pre-wrap font-sans text-sm">{resumeText}</pre>
          </ScrollArea>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsOpen(false)}>
              Close
            </Button>
            <Button onClick={handleDownload}>
              <Download className="mr-2 h-4 w-4" />
              Download .txt
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
