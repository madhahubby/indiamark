import { Mail, Phone, MapPin } from 'lucide-react';
import { ContactForm } from '@/components/contact-form';

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-accent/10 to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold font-headline tracking-tight text-primary">Get In Touch</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
            We'd love to hear from you! Whether you have a question about our services or want to start a project, our team is ready to answer all your questions.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold font-headline mb-4">Contact Information</h2>
              <p className="text-muted-foreground mb-8">
                Reach out to us through any of the following methods. We look forward to connecting with you.
              </p>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-lg">Email</h3>
                    <p className="text-muted-foreground">General Inquiries</p>
                    <a href="mailto:contact@indiamark.dev" className="text-accent hover:underline">contact@indiamark.dev</a>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-lg">Phone</h3>
                    <p className="text-muted-foreground">Mon-Fri, 9am-5pm</p>
                    <a href="tel:+1234567890" className="text-accent hover:underline">+1 (234) 567-890</a>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-lg">Office</h3>
                    <p className="text-muted-foreground">123 Digital Avenue</p>
                    <p className="text-muted-foreground">Tech City, 54321</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
