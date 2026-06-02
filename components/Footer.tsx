import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin, Globe, Mail } from "lucide-react";

const footerLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Tech Stack", href: "#tech-stack" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Mail, href: "mailto:shivashah5152@gmail.com", label: "Email" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/shiva5152/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/shiva5152", label: "GitHub" },
  { icon: Globe, href: "https://www.shivashah.in/", label: "Website" },
];

export default function Footer() {
  return (
    <footer className="bg-[#07050F] border-t border-[#1E1535] py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <Image
              src="/code_shila_logo_full.png"
              alt="CodeShila Technologies"
              width={150}
              height={44}
              className="h-10 w-auto mb-4 mix-blend-screen"
            />
            <p className="text-[#9CA3AF] text-sm leading-relaxed max-w-xs">
              Custom software, web apps, mobile apps &amp; AI solutions — built to scale
              with your business.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-white font-semibold text-sm mb-4">Quick Links</p>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#9CA3AF] hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <p className="text-white font-semibold text-sm mb-4">Connect</p>
            <div className="flex flex-col gap-3 mb-5">
              <a
                href="mailto:shivashah5152@gmail.com"
                className="text-[#9CA3AF] hover:text-white text-sm transition-colors"
              >
                shivashah5152@gmail.com
              </a>
              <a
                href="https://www.shivashah.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9CA3AF] hover:text-white text-sm transition-colors"
              >
                shivashah.in
              </a>
            </div>
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-[#0F0A1D] border border-[#1E1535] flex items-center justify-center text-[#9CA3AF] hover:text-white hover:border-[#7C3AED]/50 transition-all duration-200"
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#1E1535] pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-[#9CA3AF] text-xs">
            © {new Date().getFullYear()} CodeShila Technologies. All rights reserved.
          </p>
          <p className="text-[#9CA3AF] text-xs">
            Built by{" "}
            <a
              href="https://www.shivashah.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#7C3AED] hover:underline"
            >
              Shiva Shah
            </a>{" "}
            · Solutions That Scale
          </p>
        </div>
      </div>
    </footer>
  );
}

