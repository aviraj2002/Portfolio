import { profileData } from '@/lib/data';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import ContactForm from '../contact-form';

const contactDetails = [
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
    icon: MapPin,
    label: 'Location',
    value: profileData.location,
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(profileData.location)}`,
  },
];

const socialLinks = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: profileData.linkedin,
  },
  {
    icon: Github,
    label: 'GitHub',
    href: profileData.github,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold font-headline text-primary">Send Me a Message</h3>
            <ContactForm />
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold font-headline text-primary mb-6">Get in Touch</h3>
              <ul className="space-y-4">
                {contactDetails.map((item) => (
                  <li key={item.label} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                       <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">{item.label}</span>
                      <a href={item.href} target="_blank" rel="noopener noreferrer" className="block text-foreground hover:text-primary transition-colors">
                        {item.value}
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
             <div>
              <h3 className="text-3xl font-bold font-headline text-primary mb-6">Follow Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                   <Link key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                      <link.icon className="w-6 h-6 text-primary" />
                  </Link>
                ))}
              </div>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm">
                <h3 className="text-2xl font-bold font-headline text-primary mb-4">Let's Collaborate</h3>
                <p className="text-muted-foreground">
                    I'm always looking for new challenges and opportunities to collaborate on exciting projects. Whether you have an idea for a web app or need a skilled Full Stack Developer, I'm ready to connect and build something great together. Feel free to reach out.
                </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
