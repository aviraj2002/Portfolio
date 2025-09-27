import { experienceData } from '@/lib/data';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Building } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="w-full py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary">
            Work Experience
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            My professional journey so far.
          </p>
        </div>
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-border" aria-hidden="true"></div>
          {experienceData.map((item, index) => (
            <div key={index} className={`relative mb-12 flex items-center w-full ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
              <div className="w-1/2">
                <Card className={`shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card border-border/50 ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl font-headline">{item.title}</CardTitle>
                        <CardDescription className="text-primary/80 font-semibold pt-1">{item.company}</CardDescription>
                      </div>
                      <div className="text-sm text-muted-foreground whitespace-nowrap pl-4">{item.years}</div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 z-10 flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground">
                <Building className="w-6 h-6" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
