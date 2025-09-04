import { useState } from "react";
import { Mail, X, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useToast } from '@/hook/useT';



export const Contact = () => {

    const {toast} = useToast();
    const [isOpen, setIsOpen] = useState(false);
    const [inSubmission, setSubmission] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();

        setSubmission(true);

        const form = e.target;

        emailjs.sendForm(
            'service_mjxpi2l',
            'template_o3jnohn',
            form,
            'cUOI3JuKmxe5PWMEV'
        ).then(() => {
            toast({
                title: 'Message sent successfully ✅',
                description: 'We will get back to you soon!',
            });
            form.reset();
            setSubmission(false);
            setIsOpen(false);
        }).catch((error) => {
            toast({
                title: 'Error sending message',
                description: 'Please try again later.',
                variant: 'destructive'
            });
            setSubmission(false);
            console.error(error);
        });
    }


    return (
        <section id="faq" className="py-16 md:py-24 lg:py-[7.5rem]">
            <div className="mx-auto w-full max-w-6xl px-6 md:px-12 2xl:px-[1rem] flex flex-col items-center">
                <h2 className="text-center font-quint text-3xl md:text-4xl xl:text-5xl font-semibold tracking-normal leading-tight">
                    Contact Us
                </h2>
                <p className="mx-auto mt-3 max-w-3xl text-center font-poppins text-sm sm:text-base text-foreground/80 mb-14">
                    From learning more about our mission to finding out how you can get involved, our doors are open and our hearts are ready to connect with you.
                </p>

                <button onClick={() => setIsOpen(true)} className="rounded-2xl bg-button px-5 py-4 flex gap-2 text-background cursor-pointer hover:bg-buttonh transition-colors duration-300">
                    <Mail /> Get In Touch
                </button>
            </div>

            {/* Overlay + Modal */}
            {isOpen && (
                <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-100">
                    <div className="relative bg-background border border-primary rounded-2xl p-7 w-[95%] sm:w-[600px] shadow-xl">
                        <button
                        onClick={() => setIsOpen(false)}
                        className="absolute top-4 right-4 text-primary hover:text-primary/70">
                        <X size={24} />
                        </button>

                        <form onSubmit={handleSubmit}>
                            <h2 className="text-3xl text-header mb-4 font-extrabold text-center">
                                Start A Conversation
                            </h2>
                            <p className="text-foreground opacity-80 text-center text-lg mb-8">
                                Fill out the form below and I'll get back to you soon!
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
                                        placeholder="Your Name..."
                                        required
                                        className="w-full px-6 py-4 bg-background/70 border border-primary rounded-xl text-primary placeholder:text-primary/70"/>
                                </div>
                                <div>
                                    <label htmlFor="email" className="text-sm font-bold text-primary mb-2 block">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="your@email.com"
                                        required
                                        className="w-full px-6 py-4 bg-background/70 border border-primary rounded-xl text-primary placeholder:text-primary/70"/>
                                </div>
                            </div>

                            <div className="mb-8">
                                <label htmlFor="subject" className="text-sm font-bold text-primary mb-2 block">
                                    Subject
                                </label>
                                <input
                                type="text"
                                id="subject"
                                placeholder="Subject"
                                required
                                className="w-full px-6 py-4 bg-background/70 border border-primary rounded-xl text-primary placeholder:text-primary/70"/>
                            </div>

                            <div className="mb-8">
                                <label htmlFor="message" className="text-sm font-bold text-primary mb-2 block">
                                    Message
                                </label>
                                <textarea id="message" placeholder="Your Message..." required className="w-full px-6 py-4 bg-background/70 border border-primary rounded-xl text-primary placeholder:text-primary/70"/>
                            </div>

                            <button
                                type="submit"
                                disabled={inSubmission}
                                className="bg-button px-4 py-6 w-[80%] md:w-[60%] flex items-center justify-center gap-2 cursor-pointer mx-auto rounded-2xl hover:bg-buttonh hover:text-background transition-colors duration-300 font-bold text-lg"
                            >
                                {inSubmission ? "Sending..." : "Send Message"}
                                <Send size={16} />
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </section>
    )
        
     
}