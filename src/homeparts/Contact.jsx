import { useState, useEffect } from "react";
import { Mail, X, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useToast } from "@/hook/useT";
import { cn } from "@/lib/utilities";

export const Contact = () => {

    const { toast } = useToast();
    const [isOpen, setIsOpen] = useState(false);
    const [inSubmission, setSubmission] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmission(true);
        const form = e.target;

        emailjs
        .sendForm("service_mjxpi2l", "template_o3jnohn", form, "cUOI3JuKmxe5PWMEV")
        .then(() => {
            toast({
            title: "Message sent successfully ✅",
            description: "We will get back to you soon!",
            });
            form.reset();
            setSubmission(false);
            setIsOpen(false);
        })
        .catch((error) => {
            toast({
            title: "Error sending message",
            description: "Please try again later.",
            variant: "destructive",
            });
            setSubmission(false);
            console.error(error);
        });
    };

    // Scroll lock while modal is open
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

  return (
    <section id="contact" className="py-16 md:py-24 lg:py-[7.5rem] bg-background2">
        <div className="mx-auto w-full max-w-6xl px-6 md:px-12 2xl:px-[1rem] flex flex-col items-center">
            <h2 className="text-center font-quint text-3xl md:text-4xl xl:text-5xl font-semibold tracking-normal leading-tight">
                Contact Us
            </h2>
            <p className="mx-auto mt-3 max-w-3xl text-center font-poppins text-sm sm:text-base text-foreground/80 mb-14">
                From learning more about our mission to finding out how you can get involved, our doors are
                open and our hearts are ready to connect with you.
            </p>

            <button
            onClick={() => setIsOpen(true)}
            className="rounded-2xl bg-button px-5 py-4 flex gap-2 text-background cursor-pointer hover:bg-buttonh transition-colors duration-300">
                <Mail /> Get In Touch
            </button>
        </div>

        {/* Contact Section Appears */}
        <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-title"
            // Close on outside click (only when clicking the backdrop)
            onMouseDown={(e) => {
                if (e.target === e.currentTarget) setIsOpen(false);}}
            className={cn(
            "fixed inset-0 z-[100] flex items-center justify-center",
            "bg-black/70 backdrop-blur-sm",
            "transition-opacity duration-200 ease-out",
            !isOpen && "opacity-0 pointer-events-none"
            )}>

            <div
                className={cn(
                    "relative w-[95%] sm:max-w-[600px] max-h-[90vh] overflow-y-auto",
                    "bg-background border border-primary rounded-2xl shadow-xl p-6",
                    "transition-all duration-200 ease-out",
                    isOpen ? "opacity-100 translate-y-0 scale-100"
                        : "opacity-0 -translate-y-2 scale-95"
                )}onMouseDown={(e) => e.stopPropagation()} >
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-4 right-4 text-primary hover:text-primary/70"
                    aria-label="Close">
                    <X size={24} className="cursor-pointer" />
                </button>

                <form onSubmit={handleSubmit}>
                    <h2 id="contact-title" className="text-xl md:text-3xl text-header mb-4 font-extrabold text-center">
                        Share Your Heart With Us ❤️
                    </h2>
                    <p className="text-foreground opacity-80 text-center text-md md:text-lg mb-8">
                        We'd love to hear from you! Whether you have a prayer request, a question about our
                        ministry, or simply want to share your story, our hearts are open and ready to connect.
                    </p>

                    {/* Inputs */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                        <div>
                            <label htmlFor="name" className="text-sm font-bold text-primary mb-2 block">
                            Full Name
                            </label>
                            <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Your Name..."
                            required
                            className="w-full px-3 py-2 md:px-6 md:py-4 bg-background/70 border border-primary rounded-xl text-primary placeholder:text-primary/70"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="text-sm font-bold text-primary mb-2 block">
                            Email
                            </label>
                            <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="you@email.com"
                            required
                            className="w-full px-3 py-2 md:px-6 md:py-4 bg-background/70 border border-primary rounded-xl text-primary placeholder:text-primary/70"/>
                        </div>
                    </div>

                    <div className="mb-8">
                        <label htmlFor="subject" className="text-sm font-bold text-primary mb-2 block">
                            Subject
                        </label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            placeholder="Subject"
                            required
                            className="w-full px-3 py-2 md:px-6 md:py-4 bg-background/70 border border-primary rounded-xl text-primary placeholder:text-primary/70"/>
                    </div>

                    <div className="mb-8">
                        <label htmlFor="message" className="text-sm font-bold text-primary mb-2 block">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Your Message..."
                            required
                            className="w-full px-3 py-2 md:px-6 md:py-4 bg-background/70 border border-primary rounded-xl text-primary placeholder:text-primary/70"/>
                    </div>

                    <button
                        type="submit"
                        disabled={inSubmission}
                        className="bg-button px-3 py-4 md:px-4 md:py-6 w-[80%] md:w-[60%] text-background flex items-center justify-center gap-2 cursor-pointer mx-auto rounded-2xl hover:bg-buttonh hover:text-background transition-colors duration-300 font-bold text-lg">
                        {inSubmission ? "Sending..." : "Send Message"}
                        <Send size={16} />
                    </button>
                </form>
            </div>
        </div>
    </section>
  );
};
