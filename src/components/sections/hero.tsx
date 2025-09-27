import Link from 'next/link';
import { profileData } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { ChevronDown, MoveRight } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Hero() {
  const profileImage = PlaceHolderImages.find(p => p.id === 'profile-picture');

  return (
    <section id="home" className="relative w-full h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      <div 
        aria-hidden="true" 
        className="absolute inset-0 z-0 bg-gradient-to-br from-[#1b1a2e] via-[#131224] to-[#0b0a1a]"
      ></div>
       <div 
        aria-hidden="true"
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 via-transparent to-primary/5 opacity-50"
      ></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col justify-center space-y-6 items-center">
          {profileImage && (
            <div className="mb-4">
              <Image
                src={profileImage.imageUrl}
                alt={profileImage.description}
                width={150}
                height={150}
                className="rounded-full border-4 border-primary/50 object-cover shadow-lg"
                data-ai-hint={profileImage.imageHint}
                priority
              />
            </div>
          )}
          <div className="space-y-4">
            <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl xl:text-8xl/none font-headline">
              <span className="text-primary">{profileData.profession.split(' ')[0]} {profileData.profession.split(' ')[1]}</span>
              <span className="text-foreground"> {profileData.profession.split(' ').slice(2).join(' ')}</span>
            </h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl mx-auto">
              AI Automation & Workflows Expert. <br/> {profileData.bio}
            </p>
          </div>
          <div className="flex flex-col gap-4 min-[400px]:flex-row justify-center">
            <Button asChild size="lg">
                <Link href="#contact">Get In Touch</Link>
            </Button>
            <Button asChild variant="link" size="lg" className="text-foreground">
                <Link href="#projects">
                    View My Work <MoveRight className="ml-2 h-5 w-5" />
                </Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <Link href="#experience">
          <ChevronDown className="h-8 w-8 text-foreground animate-bounce" />
        </Link>
      </div>
    </section>
  );
}
