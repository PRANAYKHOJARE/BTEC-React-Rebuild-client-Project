import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground">
            Have a project in mind? Let's discuss how we can help
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="p-8 shadow-card animate-fade-in-up transition-all duration-500 hover:shadow-hover hover:scale-[1.02]">
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>

            <form
              onSubmit={async (e) => {
                e.preventDefault();

                const form = e.currentTarget as HTMLFormElement; // ✔ Correct TS casting

                const data = new FormData(form);

                const res = await fetch("https://formspree.io/f/mzzaoaak", {
                  method: "POST",
                  body: data,
                  headers: { Accept: "application/json" },
                });

                if (res.ok) {
                  toast.success(
                    "Thank you! Your message has been sent successfully."
                  );
                  form.reset(); // ✔ Works now
                } else {
                  toast.error("Something went wrong. Please try again!");
                }
              }}
              className="space-y-4"
            >
              {/* Hidden fields */}
              <input
                type="hidden"
                name="_subject"
                value="New Contact Form Submission - BTEC"
              />
              <input
                type="hidden"
                name="_autoresponse"
                value="Thank you for contacting BTEC Service. We'll reach out soon."
              />

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Name *
                </label>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="text-base"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Email *
                </label>
                <Input
                  type="email"
                  name="email"
                  placeholder="your.email@example.com"
                  className="text-base"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Phone
                </label>
                <Input
                  type="tel"
                  name="phone"
                  placeholder="+91 1234567890"
                  className="text-base"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Message *
                </label>
                <Textarea
                  name="message"
                  placeholder="Tell us about your project requirements..."
                  className="text-base min-h-[150px]"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full gradient-hero text-white font-semibold py-6 text-lg hover:opacity-90 transition-opacity"
              >
                <Send className="mr-2" />
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div
            className="space-y-8 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Reach out to us for any inquiries about our services. Our team
                is ready to assist you with professional solutions.
              </p>
            </div>

            <div className="space-y-6">
              <div className="group flex items-start space-x-4 p-4 rounded-lg bg-muted/50 hover:bg-primary/10 transition-all duration-300 hover:scale-105 hover:-translate-x-2">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:rotate-12">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">
                    Phone
                  </h4>
                  <p className="text-muted-foreground">+91 7875323613</p>
                  <p className="text-muted-foreground">+91 9359484792</p>
                </div>
              </div>

              <div className="group flex items-start space-x-4 p-4 rounded-lg bg-muted/50 hover:bg-primary/10 transition-all duration-300 hover:scale-105 hover:-translate-x-2">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:rotate-12">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">
                    Email
                  </h4>
                  <p className="text-muted-foreground">
                    btecservice3613@gmail.com
                  </p>
                  <p className="text-muted-foreground">
                    support@btecservice.com
                  </p>
                </div>
              </div>

              <div className="group flex items-start space-x-4 p-4 rounded-lg bg-muted/50 hover:bg-primary/10 transition-all duration-300 hover:scale-105 hover:-translate-x-2">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:rotate-12">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">
                    Address
                  </h4>
                  <p className="text-muted-foreground">
                    BTEC Service.
                    <br />
                    Ramtekdi,Hadapsur,Pune 411013
                  </p>
                </div>
              </div>
            </div>

            <Card className="p-6 bg-primary/5 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105">
              <h4 className="font-bold text-lg mb-2">Business Hours</h4>
              <p className="text-muted-foreground">
                Monday - Saturday: 9:00 AM - 6:00 PM
              </p>
              <p className="text-muted-foreground">Sunday: Closed</p>
              <p className="text-sm text-primary mt-2 font-semibold">
                24/7 Emergency Support Available
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
