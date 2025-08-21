import Link from 'next/link';
import { Github, Twitter, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  return (
    <footer id="contact" className="bg-background border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-lg font-semibold text-foreground">Algorithm Aliens</h3>
            <p className="mt-2 text-sm text-foreground/60">Decoding the Future.</p>
          </div>
          <div className="md:justify-self-center">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground/80">Navigate</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="#home" className="text-sm text-foreground/60 hover:text-foreground">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-sm text-foreground/60 hover:text-foreground">
                  About
                </Link>
              </li>
              <li>
                <Link href="#resources" className="text-sm text-foreground/60 hover:text-foreground">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="#help" className="text-sm text-foreground/60 hover:text-foreground">
                  Help
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:justify-self-end">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground/80">Connect</h3>
            <div className="mt-4 flex justify-center md:justify-start space-x-2">
              <Button asChild variant="ghost" size="icon" className="text-foreground/60 hover:bg-foreground hover:text-background">
                <Link href="#" aria-label="Github">
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="ghost" size="icon" className="text-foreground/60 hover:bg-foreground hover:text-background">
                <Link href="#" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="ghost" size="icon" className="text-foreground/60 hover:bg-foreground hover:text-background">
                <Link href="#" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border/50 text-center text-sm text-foreground/50">
          <p>&copy; {new Date().getFullYear()} Algorithm Aliens. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
