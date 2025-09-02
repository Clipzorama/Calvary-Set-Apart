




export const FAQ = () => {
  const faqs = [
    { num: 1, q: "What are service times?", a: "Our Sunday School starts at 10:30 AM, followed by the Worship Service at 12:00 PM. We also have prayer meetings on Monday at 8:00 PM in person and Tuesday at 8:00 PM via Zoom. Join us for Bible study on Thursdays at 8:00 PM on Zoom." },
    { num: 2, q: "What are your beliefs?", a: "We believe in the Holy Trinity: God the Father, Jesus Christ the Son, and the Holy Spirit. Our faith is rooted in the teachings of the Bible, emphasizing grace, forgiveness, and the hope of eternal life. We strive to live according to God's Word and share the Gospel with others." },
    { num: 3, q: "How do I become a member?", a: "To become a member, you must profess your faith in Jesus Christ and undergo baptism. Acceptance of our church covenant and teachings is also required. We offer a New Member Orientation to help you understand our faith and practices." },
    { num: 4, q: "What does your outreach include?", a: "Our outreach ministry includes a Shelter Program that serves those in need within our community. We also organize special events like the National Day of Prayer and youth activities such as choir and praise dance. We believe in serving others as a reflection of Christ's love." },
    { num: 5, q: "How can I get involved?", a: "You can get involved by attending our services, joining a ministry, or participating in community events. We encourage everyone to find their place within our church family. Reach out to us for more information on how you can contribute." },
  ];

  return (
    <section id="faq" className="py-16 md:py-24 lg:py-[7.5rem]">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-12 2xl:px-[1rem]">
        <h2 className="text-center font-quint text-3xl md:text-4xl xl:text-5xl font-semibold tracking-normal leading-tight">
          FAQS
        </h2>
        <p className="mx-auto mt-3 max-w-3xl text-center font-poppins text-sm sm:text-base text-foreground/80">
          Find answers to common questions about our services, beliefs, and how to become a member.
        </p>

        <div className="mt-10 grid gap-5 md:gap-7 lg:grid-cols-2">
          {faqs.map(({ num, q, a }) => (
            <article
              key={num}
              className="relative rounded-2xl border bg-background/90 backdrop-blur p-6 md:p-8 shadow-sm transition hover:shadow-lg"
            >
              {/* left accent */}
              <span className="absolute inset-y-0 left-0 w-1 rounded-l-2xl bg-primary/70" aria-hidden />

              {/* number badge */}
              <span className="absolute right-4 top-4 inline-flex h-7 w-7 items-center justify-center rounded-full border text-xs font-bold font-poppins">
                {num}
              </span>

              <h3 className="pr-10 font-poppins text-lg md:text-xl font-semibold">
                {q}
              </h3>
              <p className="mt-3 font-poppins text-sm leading-6 text-foreground/90">
                {a}
              </p>

              {/* subtle underline on hover */}
              <div className="mt-5 h-px w-full scale-x-0 bg-foreground/20 transition group-hover:scale-x-100" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
