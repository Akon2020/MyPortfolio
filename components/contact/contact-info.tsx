"use client";

import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Calendar,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "akonkwaushindi@gmail.com",
    href: "mailto:akonkwaushindi@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bukavu, DRC",
    href: null,
  },
  {
    icon: Calendar,
    label: "Schedule a Meeting",
    value: "Book a time slot",
    href: "https://calendly.com/isaacakonkwa",
  },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/Akon2020", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/akonizk",
    label: "LinkedIn",
  },
  { icon: Twitter, href: "https://twitter.com/akon1703", label: "Twitter" },
  {
    icon: Instagram,
    href: "https://instagram.com/akonizk",
    label: "Instagram",
  },
  {
    icon: Facebook,
    href: "https://facebook.com/Akonkwa.Ushindi",
    label: "Facebook",
  },
  { icon: Mail, href: "mailto:akonkwaushindi@gmail.com", label: "Email" },
];

export function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <div>
        <h2 className="text-2xl font-bold mb-6">
          Or reach me <span className="gradient-text">directly</span>
        </h2>
        <div className="space-y-4">
          {contactMethods.map((method) => (
            <div
              key={method.label}
              className="bg-card border border-border rounded-xl p-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <method.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground mb-1">
                    {method.label}
                  </p>
                  {method.href ? (
                    <a
                      href={method.href}
                      target={
                        method.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        method.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="font-medium hover:text-primary transition-colors"
                    >
                      {method.value}
                    </a>
                  ) : (
                    <p className="font-medium">{method.value}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Connect on social media</h3>
        <div className="flex gap-4">
          {socialLinks.map((social) => (
            <Button
              key={social.label}
              asChild
              variant="outline"
              size="icon"
              className="w-12 h-12 bg-transparent"
            >
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            </Button>
          ))}
        </div>
      </div>

      <div className="bg-card border border-border rounded-xl p-6">
        <h3 className="text-lg font-semibold mb-3">Response Time</h3>
        <p className="text-muted-foreground text-sm leading-relaxed text-pretty">
          I typically respond to messages within 24-48 hours. For urgent
          matters, please mention it in your subject line.
        </p>
      </div>

      <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-xl p-6">
        <h3 className="text-lg font-semibold mb-3">Open to Opportunities</h3>
        <p className="text-muted-foreground text-sm leading-relaxed text-pretty">
          I'm currently open to freelance projects, collaborations, and
          full-time opportunities. Let's build something amazing together!
        </p>
      </div>
    </motion.div>
  );
}
