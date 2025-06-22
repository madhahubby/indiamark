import Link from 'next/link';
import { Zap, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  const navLinks = [
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/case-studies', label: 'Case Studies' },
    { href: '/contact', label: 'Contact' },
  ];

  const socialLinks = [
    { icon: <Twitter className="h-5 w-5" />, href: '#' },
    { icon: <Linkedin className="h-5 w-5" />, href: '#' },
    { icon: <Instagram className="h-5 w-5" />, href: '#' },
  ];

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Zap className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold font-headline">IndiaMark Digital</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Creative Strategies, Measurable Results.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>123 Digital Avenue,</li>
              <li>Tech City, 54321</li>
              <li className="pt-2">
                <a href="mailto:contact@indiamark.dev" className="hover:text-primary transition-colors">contact@indiamark.dev</a>
              </li>
              <li>
                <a href="tel:+1234567890" className="hover:text-primary transition-colors">+1 (234) 567-890</a>
              </li>
            </ul>
          </div>
          <div>
             <h3 className="font-semibold mb-4">Follow Us</h3>
             <div className="flex space-x-4">
               {socialLinks.map((social, index) => (
                 <a key={index} href={social.href} className="text-muted-foreground hover:text-primary transition-colors">
                   {social.icon}
                 </a>
               ))}
             </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} IndiaMark Digital. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
