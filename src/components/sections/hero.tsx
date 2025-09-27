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
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center py-20 md:py-32 bg-background overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
      >
        <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
      </div>
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="flex flex-col justify-center space-y-6 text-center lg:text-left">
            <div className="space-y-4">
              <p className="text-lg md:text-xl text-primary font-semibold">
                Hello, I'm
              </p>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline text-foreground">
                {profileData.name}
              </h1>
              <p className="text-2xl md:text-3xl text-accent font-bold tracking-wide">
                {profileData.profession}
              </p>
              <p className="max-w-[600px] text-muted-foreground md:text-lg mx-auto lg:mx-0">
                {profileData.bio}
              </p>
            </div>
            <div className="flex flex-col gap-4 min-[400px]:flex-row justify-center lg:justify-start">
              <ResumeButton />
              <div className="flex justify-center lg:justify-start gap-3">
                <Link href={profileData.linkedin} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link href={profileData.github} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg">
                    <Github className="h-5 w-5" />
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
                priority
                className="rounded-full object-cover aspect-square border-4 border-primary/50 shadow-2xl"
                data-ai-hint={profileImage.imageHint}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}