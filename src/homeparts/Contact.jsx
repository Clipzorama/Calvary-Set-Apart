import { Mail } from "lucide-react"


export const Contact = () => {
    return (
        <section id="faq" className="py-16 md:py-24 lg:py-[7.5rem]">
            <div className="mx-auto w-full max-w-6xl px-6 md:px-12 2xl:px-[1rem] flex flex-col items-center">
                <h2 className="text-center font-quint text-3xl md:text-4xl xl:text-5xl font-semibold tracking-normal leading-tight">
                    Contact Us
                </h2>
                <p className="mx-auto mt-3 max-w-3xl text-center font-poppins text-sm sm:text-base text-foreground/80 mb-14">
                    From learning more about our mission to finding out how you can get involved, our doors are open and our hearts are ready to connect with you.
                </p>

                <button className="rounded-2xl bg-button px-5 py-4 flex gap-2 text-background cursor-pointer hover:bg-buttonh transition-colors duration-300">
                    <Mail /> Get In Touch
                </button>
            </div>
        </section>
    )
        
     
}