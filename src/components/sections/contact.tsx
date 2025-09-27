import { profileData } from '@/lib/data';
import { Github, Linkedin, Mail, Phone, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: profileData.email,
    href: `mailto:${profileData.email}`,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: profileData.phone,
    href: `tel:${profileData.phone}`,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'aviraj2002',
    href: profileData.linkedin,
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'aviraj2002',
    href: profileData.github,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="w-full py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary">Get in Touch</h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            I'm open to discussing new projects and opportunities. Feel free to reach out.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {contactMethods.map((method) => (
            <div key={method.label} className="flex flex-col items-center text-center">
              <a href={method.href} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="w-16 h-16 rounded-full bg-background hover:bg-accent/10">
                  <method.icon className="w-8 h-8 text-primary" />
                </Button>
              </a>
              <h3 className="mt-4 text-lg font-semibold">{method.label}</h3>
              <a href={method.href} target="_blank" rel="noopener noreferrer" className="mt-1 text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
                {method.value}
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
