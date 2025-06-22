import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight, BarChart, Users, Zap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const caseStudies = [
  {
    title: 'Boosting E-commerce Sales for a Fashion Brand',
    client: 'Fashion Forward Co.',
    category: 'E-commerce',
    imageUrl: 'https://placehold.co/800x600.png',
    imageHint: 'fashion online store',
    summary: 'A comprehensive SEO and social media strategy led to a 120% increase in online sales and doubled user engagement within six months.',
    results: [
      { icon: <ArrowUpRight className="w-5 h-5 text-accent" />, text: '120% Increase in Sales' },
      { icon: <Users className="w-5 h-5 text-accent" />, text: '2x Social Engagement' },
      { icon: <Zap className="w-5 h-5 text-accent" />, text: '50% Reduction in CPA' },
    ],
  },
  {
    title: 'Driving Organic Growth for a B2B SaaS Platform',
    client: 'Tech Innovators Inc.',
    category: 'SaaS',
    imageUrl: 'https://placehold.co/800x600.png',
    imageHint: 'saas dashboard',
    summary: 'Through targeted content marketing and technical SEO, we achieved a 75% increase in organic traffic and a 40% growth in qualified leads.',
    results: [
      { icon: <BarChart className="w-5 h-5 text-accent" />, text: '75% Increase in Organic Traffic' },
      { icon: <Users className="w-5 h-5 text-accent" />, text: '40% More Qualified Leads' },
      { icon: <Zap className="w-5 h-5 text-accent" />, text: 'Top 3 Ranking for 20+ Keywords' },
    ],
  },
  {
    title: 'Local SEO Domination for a Restaurant Chain',
    client: 'Gourmet Bites',
    category: 'Local Business',
    imageUrl: 'https://placehold.co/800x600.png',
    imageHint: 'restaurant interior',
    summary: 'Optimized Google My Business listings and localized content resulted in a 200% increase in foot traffic from online searches.',
    results: [
      { icon: <ArrowUpRight className="w-5 h-5 text-accent" />, text: '200% Increase in Foot Traffic' },
      { icon: <Users className="w-5 h-5 text-accent" />, text: 'Rank #1 on Google Maps' },
      { icon: <Zap className="w-5 h-5 text-accent" />, text: '30% Increase in Bookings' },
    ],
  },
  {
    title: 'Establishing Brand Authority in FinTech',
    client: 'Finance Secure',
    category: 'FinTech',
    imageUrl: 'https://placehold.co/800x600.png',
    imageHint: 'financial chart',
    summary: 'A thought leadership content strategy, including whitepapers and webinars, positioned Finance Secure as an industry leader, growing their MQLs by 60%.',
    results: [
      { icon: <BarChart className="w-5 h-5 text-accent" />, text: 'Established Thought Leadership' },
      { icon: <Users className="w-5 h-5 text-accent" />, text: '60% More Marketing Qualified Leads' },
      { icon: <Zap className="w-5 h-5 text-accent" />, text: 'Featured in Forbes & TechCrunch' },
    ],
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

export default function CaseStudiesPage() {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/10 to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold font-headline tracking-tight text-primary">Our Success Stories</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
            We deliver results that matter. Explore our work to see how we help clients achieve their goals.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="flex flex-col bg-card overflow-hidden group">
                <CardHeader className="p-0">
                  <Image
                    src={study.imageUrl}
                    alt={study.title}
                    width={800}
                    height={600}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={study.imageHint}
                  />
                </CardHeader>
                <CardContent className="p-6 flex-grow flex flex-col">
                    <Badge variant="secondary" className="self-start mb-2">{study.category}</Badge>
                    <h3 className="text-xl font-bold font-headline mb-2">{study.title}</h3>
                    <p className="text-muted-foreground flex-grow">{study.summary}</p>
                    <div className="mt-4">
                        <h4 className="font-semibold mb-2">Key Results:</h4>
                        <ul className="space-y-2">
                            {study.results.map((result, i) => (
                                <li key={i} className="flex items-center text-sm text-foreground/90">
                                    {result.icon}
                                    <span className="ml-2">{result.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

       {/* Testimonials Section */}
      <section id="testimonials" className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-center">What Our Clients Say</h2>
          <div className="mt-12 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 bg-background">
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
