import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-center text-foreground overflow-hidden"
    >
      <div
        className="absolute top-0 left-0 w-full h-full parallax-bg"
        style={{ backgroundImage: "url('/1920x1080.jpg')" }}
        data-ai-hint="abstract monochrome"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black/70"></div>
      </div>
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-40 md:pt-24">
        <div
          className="animate-fade-in-up"
          style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
        >
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 [text-wrap:balance] text-white">
            Empower Your Future Through Learning
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-white/80 mb-8">
            Discover cutting-edge courses, certifications, and internship opportunities to
            accelerate your career growth.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <Button
              asChild
              size="lg"
              className="font-semibold rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Link href="/resources">Explore Resources</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="font-semibold rounded-full bg-transparent text-white border-white hover:bg-white hover:text-black"
            >
              <Link href="#about">About Us</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="font-semibold rounded-full bg-transparent text-white border-white hover:bg-white hover:text-black"
            >
              <Link href="https://forms.gle/1aeeAnHfuCPa2fqP7" target="_blank">
                Request Services
              </Link>
            </Button>
          </div>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left animate-fade-in-up"
          style={{ animationDelay: '0.4s', animationFillMode: 'both' }}
        >
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
            <h3 className="flex items-center gap-3 text-xl font-semibold mb-3 text-white">
              <Image src="/company.svg" alt="Our Company" width={24} height={24} className="text-white" />
              Our Company
            </h3>
            <p className="text-white/80">
              Since 2025, we've transformed education, serving thousands with quality resources and
              career opportunities.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
            <h3 className="flex items-center gap-3 text-xl font-semibold mb-3 text-white">
              <Image src="/agenda.svg" alt="Our Agenda" width={24} height={24} className="text-white" />
              Our Agenda
            </h3>
            <p className="text-white/80">
              We provide accessible education, industry-relevant certifications, and real-world
              internships to build a supportive learning community.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
            <h3 className="flex items-center gap-3 text-xl font-semibold mb-3 text-white">
              <Image src="/projects.svg" alt="Our Projects" width={24} height={24} className="text-white" />
              Our Projects
            </h3>
            <p className="text-white/80">
              Engage with our innovative working projects. You can buy pre-designed projects or collaborate on new designs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
