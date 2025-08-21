import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center text-foreground overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-full parallax-bg"
        style={{ backgroundImage: "url('https://placehold.co/1920x1080.png')" }}
        data-ai-hint="abstract monochrome"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black/60"></div>
      </div>
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 animate-fade-in-up [text-wrap:balance]"
          style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
        >
          Decoding the Future
        </h1>
        <p
          className="max-w-3xl mx-auto text-lg md:text-xl text-foreground/80 mb-10 animate-fade-in-up"
          style={{ animationDelay: '0.4s', animationFillMode: 'both' }}
        >
          We are Algorithm Aliens, pioneering the next generation of intelligent solutions. We transform complex problems into elegant, efficient algorithms.
        </p>
        <div className="animate-fade-in-up" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
          <Button
            asChild
            size="lg"
            className="text-lg px-8 h-14 rounded-full font-semibold bg-accent text-accent-foreground transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-accent/20 hover:bg-background hover:text-foreground"
          >
            <Link href="#about">Explore Our World</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
