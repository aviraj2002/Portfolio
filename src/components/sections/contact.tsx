import { profileData } from '@/lib/data';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    href: `mailto:${profileData.email}`,
    tooltip: profileData.email,
  },
  {
    icon: Phone,
    label: 'Phone',
    href: `tel:${profileData.phone}`,
    tooltip: profileData.phone,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: profileData.linkedin,
    tooltip: 'Connect on LinkedIn',
  },
  {
    icon: Github,
    label: 'GitHub',
    href: profileData.github,
    tooltip: 'View on GitHub',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="w-full py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary">Let's Collaborate</h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            I'm always looking for new challenges and opportunities to collaborate on exciting projects. Whether you have an idea for a web app or need a skilled Full Stack Developer, I'm ready to connect and build something great together. Feel free to reach out.
          </p>
        </div>

        <div className="mt-12 flex justify-center gap-8">
          <TooltipProvider>
            {contactMethods.map((method) => (
              <Tooltip key={method.label}>
                <TooltipTrigger asChild>
                  <Link href={method.href} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon" className="w-16 h-16 rounded-full bg-background hover:bg-primary/10 transition-transform transform hover:scale-110">
                      <method.icon className="w-8 h-8 text-primary" />
                    </Button>
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{method.tooltip}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
        </div>
      </div>
    </section>
  );
}
