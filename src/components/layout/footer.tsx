import Link from 'next/link';
import { Instagram, Mail, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  return (
    <footer id="contact" className="bg-secondary border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-left">
          <div>
            <h3 className="text-lg font-semibold text-foreground">Algorithm Aliens</h3>
            <p className="mt-2 text-sm text-muted-foreground">Empower Your Future Through Learning.</p>
          </div>
          <div className="md:justify-self-center">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Navigate</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/#home" className="text-sm text-muted-foreground hover:text-foreground">
                  Home
                </Link>
              </li>
               <li>
                <Link href="/#how-to-apply" className="text-sm text-muted-foreground hover:text-foreground">
                  How to Apply
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-sm text-muted-foreground hover:text-foreground">
                  About
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-sm text-muted-foreground hover:text-foreground">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/#help" className="text-sm text-muted-foreground hover:text-foreground">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:justify-self-center">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Office</h3>
            <p className="mt-2 text-sm text-muted-foreground">
                Lb Nagar<br />
                Hyderabad City, Telangana, 500001
            </p>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mt-4">Phone</h3>
            <p className="mt-2 text-sm text-muted-foreground">
                9063674418
            </p>
          </div>
          <div className="md:justify-self-end">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Connect</h3>
            <div className="mt-4 flex justify-start space-x-2">
              <Button asChild variant="ghost" size="icon" className="text-muted-foreground hover:bg-accent hover:text-accent-foreground">
                <Link href="mailto:support@algorithmaliens.com" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="ghost" size="icon" className="text-muted-foreground hover:bg-accent hover:text-accent-foreground">
                <Link href="https://www.instagram.com/algorithmaliens/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="ghost" size="icon" className="text-muted-foreground hover:bg-accent hover:text-accent-foreground">
                <Link href="#" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Algorithm Aliens. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
