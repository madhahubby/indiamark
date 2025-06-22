import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Lightbulb, Target } from 'lucide-react';
import Image from 'next/image';

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'Priya Sharma',
      role: 'Founder & CEO',
      avatarUrl: 'https://placehold.co/200x200.png',
      imageHint: 'woman professional',
    },
    {
      name: 'Rohan Mehta',
      role: 'Head of SEO',
      avatarUrl: 'https://placehold.co/200x200.png',
      imageHint: 'man professional',
    },
    {
      name: 'Aisha Khan',
      role: 'Content Strategy Lead',
      avatarUrl: 'https://placehold.co/200x200.png',
      imageHint: 'woman smiling',
    },
    {
      name: 'Vikram Singh',
      role: 'Social Media Guru',
      avatarUrl: 'https://placehold.co/200x200.png',
      imageHint: 'man glasses',
    },
  ];

  const values = [
    {
      icon: <Lightbulb className="w-10 h-10 text-accent" />,
      title: 'Innovation',
      description: 'We constantly explore new technologies and strategies to stay ahead of the curve.',
    },
    {
      icon: <Target className="w-10 h-10 text-accent" />,
      title: 'Results-Driven',
      description: 'Our primary focus is on delivering measurable results that impact your bottom line.',
    },
    {
      icon: <Heart className="w-10 h-10 text-accent" />,
      title: 'Partnership',
      description: 'We believe in building long-term relationships and working as an extension of your team.',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-tertiary/20 to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold font-headline tracking-tight text-primary">About IndiaMark Digital</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
            We are a passionate team of digital marketers dedicated to helping businesses thrive in the online world.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                Founded in 2020, IndiaMark Digital was born from a desire to provide transparent, effective, and creative digital marketing solutions. We saw a gap in the market for an agency that not only delivers results but also educates and empowers its clients.
              </p>
              <p className="text-muted-foreground">
                From our humble beginnings, we've grown into a full-service agency serving clients across various industries. Our journey is fueled by a passion for technology and a commitment to our clients' success.
              </p>
            </div>
            <div>
              <Image 
                src="https://placehold.co/800x600.png" 
                alt="Our team at work" 
                width={800} 
                height={600} 
                className="rounded-lg shadow-xl"
                data-ai-hint="team collaboration"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-center">Our Core Values</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-8 text-center bg-background border-2 border-transparent hover:border-accent transition-colors duration-300">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold font-headline text-primary mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-center">Meet Our Team</h2>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
                <CardHeader className="p-0">
                  <Avatar className="w-full h-48 rounded-none">
                    <AvatarImage src={member.avatarUrl} alt={member.name} className="object-cover" data-ai-hint={member.imageHint}/>
                    <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                </CardHeader>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-primary">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
