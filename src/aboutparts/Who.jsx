
import national from "@/assets/national.webp"


export const Who = () => {
    return (
        <section id="who" className="w-full px-4 relative py-16 md:pt-20 md:pb-20 lg:pt-30 lg:pb-30 bg-background2">
            <div className="mx-auto w-full max-w-6xl px-6 md:px-12 2xl:px-[1rem]">
                <div className="flex flex-col md:flex-row md:items-start gap-10 md:gap-16">
                    {/* Left Side */}
                    <div className="w-full md:w-1/2">
                        <h2 className="font-quint text-3xl md:text-4xl xl:text-5xl font-bold tracking-normal leading-tight">
                            Who We Are
                        </h2>

                        <p className="mt-4 max-w-xl font-poppins text-sm sm:text-base text-foreground/80">
                            We are a Bible-believing church family dedicated to prayer, worship, and
                            serving our neighbors. Together, we grow as disciples of Jesus and strive
                            to make a positive impact in our community.
                        </p>
                        <div className="mt-4 h-[5px] w-full bg-button rounded"></div>


                        <ul className="mt-6 space-y-4">
                        {[
                            "✝ We believe in the power of prayer to transform lives and bring healing.",
                            "✝ We are a Christ-centered family where everyone is welcome and valued.",
                            "✝ We encourage every believer to grow deeper in their relationship with Christ.",
                        ].map((text, i) => (
                            <li key={i} className="font-poppins text-sm sm:text-base text-foreground/80">
                            {text}
                            </li>
                        ))}
                        </ul>
                    </div>

                    {/* Image */}
                    <div className="w-full md:w-1/2">
                        <img
                        src={national}
                        alt="Who we are"
                        className="w-full h-auto rounded-lg object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}