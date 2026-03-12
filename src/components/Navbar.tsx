import { Link, useLocation } from "react-router-dom";
import { Linkedin, Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/src/lib/utils";
import { LanguageSwitcher } from "@/src/components/LanguageSwitcher";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold tracking-tighter text-white hover:text-primary transition-colors">
              APURVA
            </Link>
          </div>
          <div className="hidden lg:block">
            <div className="ml-10 flex items-center space-x-6">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    location.pathname === link.path ? "text-primary" : "text-gray-300"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="https://www.linkedin.com/in/apurvarai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:apurvarai3031@gmail.com?subject=Booking%20a%20Consultation"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2"
              >
                Book a Call
              </a>
              <div className="ml-2 flex items-center h-9">
                <LanguageSwitcher id="google_translate_element" />
              </div>
            </div>
          </div>
          <div className="-mr-2 flex lg:hidden items-center gap-4">
            <div className="flex items-center">
              <LanguageSwitcher id="google_translate_element_mobile" />
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-background border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-3 py-2 rounded-md text-base font-medium",
                  location.pathname === link.path ? "text-primary bg-white/5" : "text-gray-300 hover:text-white hover:bg-white/5"
                )}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://www.linkedin.com/in/apurvarai"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/5"
            >
              <Linkedin className="w-5 h-5 mr-2" /> LinkedIn
            </a>
            <a
              href="mailto:apurvarai3031@gmail.com?subject=Booking%20a%20Consultation"
              className="block px-3 py-2 mt-4 text-center rounded-md text-base font-medium bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Book a Call
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
