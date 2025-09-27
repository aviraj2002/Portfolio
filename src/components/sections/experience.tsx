import { experienceData } from '@/lib/data';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Building } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="w-full py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl font-headline text-primary">
          Work Experience
        </h2>
        <div className="relative mt-12">
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-border" aria-hidden="true"></div>
          {experienceData.map((item, index) => (
            <div key={index} className="relative mb-12">
              <div className="flex items-center justify-center">
                <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground">
                  <Building className="w-6 h-6" />
                </div>
              </div>
              <Card className={`w-full max-w-md mx-auto mt-4 shadow-lg ${index % 2 === 0 ? 'sm:mr-auto sm:ml-0' : 'sm:ml-auto sm:mr-0'}`}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl font-headline">{item.title}</CardTitle>
                      <CardDescription className="text-accent font-semibold">{item.company}</CardDescription>
                    </div>
                    <div className="text-sm text-muted-foreground whitespace-nowrap">{item.years}</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
