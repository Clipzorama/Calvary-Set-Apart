import pastor from "@/assets/pastor.webp";

export const Leader = () => {
  return (
    <section id="leadership" className="pb-16 md:pb-24 lg:py-[10rem]">
        <div className="mx-auto w-full max-w-6xl px-4">
            <div className="flex flex-col-reverse lg:flex-row lg:items-start lg:gap-20">
                {/* IMAGE */}
                <div className="w-1/2 self-center md:block">
                    <div className="relative w-full max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl h-[200px] sm:h-[300px] md:h-[350px] xl:h-[400px] aspect-[4/5] rounded-xl bg-muted/60 shadow-sm overflow-hidden">
                    <img
                        src={pastor}
                        alt="Leadership"
                        className="absolute inset-0 h-full w-full object-cover object-top"
                    />
                    </div>
                </div>

                {/* TEXT */}
                <div className="w-full lg:w-1/2">
                    <span className="font-poppins text-xs tracking-wide uppercase text-foreground/60">
                        Leadership
                    </span>

                    <h2 className="mt-8 font-quint text-3xl md:text-4xl xl:text-5xl font-semibold tracking-normal leading-tight text-center">
                    Pastor Orlando Mcdonald
                    </h2>

                    <p className="mt-8 max-w-xl font-poppins text-sm sm:text-base text-foreground/80 text-justify">
                        Our church&apos;s journey began at Calvary Church of God Incorporated in
                        Brooklyn, NY. In 2016, Pastor Orlando McDonald and his family moved to
                        Connecticut, where our church community was established about eight years ago.
                    </p>

                    <div className="mt-12 flex flex-col sm:flex-row sm:gap-8">
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
