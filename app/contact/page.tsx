import { ContactForm } from "@/components/contact/contact-form";
import { ContactInfo } from "@/components/contact/contact-info";

export const metadata = {
  title: "Contact | Isaac Akonkwa",
  description:
    "Get in touch with me for collaborations, projects, or just to say hello.",
};

export default function ContactPage() {
  return (
    <div className="pt-16">
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Let's <span className="gradient-text">Connect</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed text-balance">
              Whether you have a project in mind, want to collaborate or just
              want to say hello, I'd love to hear from you. Fill out the form
              below or reach out directly.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>
    </div>
  );
}
