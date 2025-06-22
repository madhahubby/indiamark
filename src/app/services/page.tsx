import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, LineChart, Megaphone, Search, Users } from 'lucide-react';

const servicesData = [
  {
    icon: <Search className="w-12 h-12 text-primary" />,
    title: "Search Engine Optimization (SEO)",
    description: "Our SEO strategies are designed to increase your website's visibility on search engines, driving organic traffic and quality leads. We focus on on-page, off-page, and technical SEO to achieve sustainable rankings.",
    features: ["Keyword Research & Strategy", "Technical SEO Audit", "Content Optimization", "Link Building", "Local SEO"],
  },
  {
    icon: <Megaphone className="w-12 h-12 text-primary" />,
    title: "Content Marketing",
    description: "We create compelling and valuable content that resonates with your target audience. From blog posts to whitepapers, our content builds brand authority, engages users, and drives conversions.",
    features: ["Content Strategy & Planning", "Blog & Article Writing", "eBook & Whitepaper Creation", "Infographics & Visuals", "Content Distribution"],
  },
  {
    icon: <Users className="w-12 h-12 text-primary" />,
    title: "Social Media Management",
    description: "Build a thriving online community and connect with your customers on a personal level. We manage your social media presence across platforms, creating engaging content and running targeted campaigns.",
    features: ["Platform-specific Strategy", "Content Creation & Curation", "Community Management", "Paid Social Advertising", "Performance Analytics"],
  },
  {
    icon: <LineChart className="w-12 h-12 text-primary" />,
    title: "Analytics & Reporting",
    description: "Understand your performance and make data-driven decisions. We set up advanced tracking and provide clear, actionable reports that highlight key metrics and opportunities for growth.",
    features: ["Google Analytics & Tag Manager Setup", "Custom Dashboards", "Conversion Rate Optimization (CRO)", "ROI Tracking", "Competitor Analysis"],
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-secondary/20 to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold font-headline tracking-tight text-primary">Our Services</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
            A complete suite of digital marketing solutions to elevate your brand and accelerate your growth.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {servicesData.map((service, index) => (
              <Card key={index} className="flex flex-col p-8 bg-card border-2 border-transparent hover:border-primary transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader className="flex flex-row items-center gap-4 p-0">
                  {service.icon}
                  <CardTitle className="text-2xl font-bold font-headline">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0 mt-6 flex-grow">
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <h4 className="font-semibold mb-4">Key Features:</h4>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-accent mr-2 flex-shrink-0" />
                        <span className="text-foreground/90">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
