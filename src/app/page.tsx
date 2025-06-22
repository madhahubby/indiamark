import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Code, Megaphone, Search, ThumbsUp } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const services = [
    {
      icon: <Search className="w-12 h-12 text-primary" />,
      title: 'SEO Optimization',
      description: 'Boost your visibility and rank higher on search engines to attract organic traffic.',
    },
    {
      icon: <Megaphone className="w-12 h-12 text-primary" />,
      title: 'Content Marketing',
      description: 'Engage your audience with valuable content that builds authority and drives conversions.',
    },
    {
      icon: <ThumbsUp className="w-12 h-12 text-primary" />,
      title: 'Social Media',
      description: 'Connect with your customers and build a strong online community around your brand.',
    },
    {
      icon: <Code className="w-12 h-12 text-primary" />,
      title: 'Website Development',
      description: 'Get a stunning, high-performance website that looks great on all devices.',
    },
  ];

  const caseStudies = [
    {
      client: 'Tech Innovators Inc.',
      result: '50% increase in organic traffic in 3 months.',
      imageUrl: 'https://placehold.co/600x400.png',
      imageHint: 'business analytics',
    },
    {
      client: 'Fashion Forward Co.',
      result: 'Doubled social media engagement and conversions.',
      imageUrl: 'https://placehold.co/600x400.png',
      imageHint: 'fashion online',
    },
  ];

  const testimonials = [
    {
      name: 'John Doe',
      role: 'CEO, Tech Innovators',
      avatar: 'https://placehold.co/100x100.png',
      avatarHint: 'man portrait',
      quote: 'IndiaMark Digital transformed our online presence. Their expertise in SEO and content is unmatched. We\'ve seen a significant ROI since partnering with them.',
    },
    {
      name: 'Jane Smith',
      role: 'Marketing Director, Fashion Forward',
      avatar: 'https://placehold.co/100x100.png',
      avatarHint: 'woman portrait',
      quote: 'The team at IndiaMark is not only professional but also incredibly creative. They understood our brand voice perfectly and delivered outstanding results.',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative text-center py-24 md:py-32 lg:py-48 bg-gradient-to-br from-background to-tertiary/20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold font-headline tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            Elevate Your Brand with IndiaMark Digital
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
            Creative Strategies, Measurable Results. We help you navigate the digital landscape and achieve your business goals.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/services">Explore Our Services</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Get a Free Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-center">Our Core Services</h2>
          <p className="mt-4 max-w-2xl mx-auto text-center text-muted-foreground">
            We offer a comprehensive suite of digital marketing services to grow your business.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center p-6 border-2 border-transparent hover:border-primary transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader className="flex items-center justify-center">
                  {service.icon}
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl font-bold font-headline">{service.title}</h3>
                  <p className="mt-2 text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-center">Success Stories</h2>
          <p className="mt-4 max-w-2xl mx-auto text-center text-muted-foreground">
            See how we've helped businesses like yours achieve remarkable results.
          </p>
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="overflow-hidden flex flex-col md:flex-row group">
                <div className="md:w-1/2">
                   <Image src={study.imageUrl} alt={study.client} width={600} height={400} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" data-ai-hint={study.imageHint} />
                </div>
                <div className="p-6 flex flex-col justify-center md:w-1/2">
                  <h3 className="text-2xl font-bold font-headline text-primary">{study.client}</h3>
                  <p className="mt-2 text-lg text-foreground">{study.result}</p>
                   <Button asChild variant="link" className="p-0 mt-4 self-start">
                      <Link href="/case-studies">View Case Study &rarr;</Link>
                   </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-center">What Our Clients Say</h2>
          <div className="mt-12 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 bg-card">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar} data-ai-hint={testimonial.avatarHint} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="ml-4">
                      <p className="font-bold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <blockquote className="italic text-foreground/90">"{testimonial.quote}"</blockquote>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
