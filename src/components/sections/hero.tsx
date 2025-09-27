import Image from 'next/image';
import Link from 'next/link';
import { profileData } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Github, Linkedin } from 'lucide-react';
import ResumeButton from '@/components/resume-button';

export default function Hero() {
  const profileImage = {
      "id": "profile-picture",
      "description": "A professional headshot of Abhishek Kumar Barnwal.",
      "imageUrl": "https://images.unsplash.com/photo-1758975655553-dc9f0eab001f?q=80&w=1084&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "imageHint": "profile picture"
    };

  return (
    <section id="home" className="w-full min-h-screen flex items-center justify-center py-12 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline text-primary">
                {profileData.name}
              </h1>
              <p className="text-xl md:text-2xl text-accent font-medium">
                {profileData.profession}
              </p>
              <p className="max-w-[600px] text-muted-foreground md:text-xl mx-auto lg:mx-0">
                {profileData.bio}
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center lg:justify-start">
              <ResumeButton />
              <div className="flex justify-center lg:justify-start gap-2">
                <Link href={profileData.linkedin} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon">
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link href={profileData.github} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon">
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            {profileImage && (
              <Image
                src={profileImage.imageUrl}
                alt={profileImage.description}
                width={500}
                height={500}
                className="rounded-full object-cover aspect-square border-4 border-primary shadow-2xl"
                data-ai-hint={profileImage.imageHint}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
