import { ArrowDown } from "lucide-react"

export const HeroPage = () => {


    return (
        <section id="hero" className="flex flex-col items-center justify-center px-4 relative min-h-screen">
            <div className=" max-w-4xl mx-auto text-center z-10 relative">
                <h1 className="text-4xl md:text-5xl font-bold tracking-wide mb-5">
                    <span className="font-quint text-primary opacity-0 animate-fade-in-delay-1 leading-normal">Welcome To Calvary Set Apart Deliverance Ministry</span>
                </h1>
                <p className="text-sm font-poppins text-pretty opacity-0 px-6 md:text-lg md:px-10 max-2-2xl mx-auto animate-fade-in-delay-2 mb-4">
                    Empowering you to eat with purpose, live with intention, and heal naturally because your body deserves what nature provides.
                </p>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span>Scroll Down</span>
                <ArrowDown className="h-5 w-5 text-button" />

            </div>
        </section>
    )
}