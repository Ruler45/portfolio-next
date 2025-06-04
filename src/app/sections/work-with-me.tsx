import { ContactForm } from "@/components/ui/contact-form";

export function WorkWithMe() {
  return (
    <section className="w-[90vw] mx-auto py-16">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Work With Me</h2>
        <p className="text-muted-foreground text-center mb-8">
          Interested in working together? Fill out the form below and I&apos;ll
          get back to you as soon as possible.
        </p>
        <div className="bg-card border rounded-lg p-6">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
