import pastor from "@/assets/pastor.webp";

export const Leader = () => {
  return (
    
    <section id="about" className="pt-30 pb-30 bg-background">
        <div className="flex flex-col items-center gap-5 border-b-primary">
            <h1 className="text-primary font-quint font-bold text-3xl md:text-5xl opacity-0 animate-fade-in-delay-1">About Our Church</h1>
            <p className="font-poppins text-center text-md opacity-0 animate-fade-in-delay-2">Join us as we share our journey of faith, community, and service in Christ.</p>
        </div>
        <div className="mt-4 h-[1px] w-full bg-primary rounded opacity-0 animate-fade-in-delay-2"></div>

        <div className="mx-auto w-full max-w-6xl px-4 mt-16">
            <div className="flex flex-col-reverse lg:flex-row lg:items-start lg:gap-20">
                {/* IMAGE */}
                <div className="lg:w-1/2 self-center md:block">
                    <div className="relative opacity-0 animate-fade-in-delay-3 w-full h-[350px] md:h-[350px] lg:h-[440px] aspect-[4/5] rounded-xl bg-muted/60 shadow-sm overflow-hidden">
                    <img
                        src={pastor}
                        alt="Leadership"
                        className="absolute inset-0 h-full w-full object-cover object-top"
                    />
                    </div>
                </div>

                {/* TEXT */}
                <div className="w-full lg:w-1/2">
                    <span className="font-poppins text-xs tracking-wide uppercase text-foreground/60 opacity-0 animate-fade-in-delay-4">
                        Leadership
                    </span>

                    <h2 className="mt-8 font-quint text-3xl md:text-4xl xl:text-5xl font-semibold tracking-normal leading-tight text-center opacity-0 animate-fade-in-delay-4">
                    Pastor Orlando Mcdonald
                    </h2>

                    <p className="mt-4 max-w-xl mx-auto font-poppins text-sm sm:text-base text-foreground/80 text-center opacity-0 animate-fade-in-delay-4">
                        Our church&apos;s journey began at Calvary Church of God Incorporated in
                        Brooklyn, NY. In 2016, Pastor Orlando McDonald and his family moved to
                        Connecticut, where our church community was established about eight years ago.
                    </p>

                    <div className="mt-12 flex flex-col sm:flex-row sm:gap-8 opacity-0 animate-fade-in-delay-5 px-5 md:px-15 lg:px-0">
                        <div className="sm:w-1/2">
                            <h3 className="font-poppins text-lg font-semibold">Our Father</h3>
                            <p className="mt-2 font-poppins text-sm sm:text-base text-foreground/80 text-justify">
                                Father McDonald has faithfully served since 2017, leading our
                                ministry in Waterbury.
                            </p>
                        </div>

                        <div className="sm:w-1/2 mt-8 sm:mt-0">
                            <h3 className="font-poppins text-lg font-semibold">Our Journey</h3>
                            <p className="mt-2 font-poppins text-sm sm:text-base text-foreground/80 mb-8 text-justify">
                                He dedicated 15 years to evangelism in Brooklyn, sharing the Gospel with
                                many.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};
