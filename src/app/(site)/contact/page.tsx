import { ContactForm } from "@/components/contact/ContactForm";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/shared/PageHero";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-text-primary flex flex-col">
      <PageHero
        image="/contact.png"
        imageAlt="Burgers being served in black boxes"
        eyebrow="Contact"
        title="Get in Touch"
      />
      <div className="page-x flex-1 flex items-center justify-center py-35">
        <ContactForm />
      </div>
      <Footer />
    </main>
  );
}
