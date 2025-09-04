




export const FAQ = () => {

  const faqs = [
    { num: 1, q: "What are service times?", a: "Our Sunday School starts at 10:30 AM, followed by the Worship Service at 12:00 PM. We also have prayer meetings on Monday at 8:00 PM in person and Tuesday at 8:00 PM via Zoom. Join us for Bible study on Thursdays at 8:00 PM on Zoom." },
    { num: 2, q: "What are your beliefs?", a: "We believe in the Holy Trinity: God the Father, Jesus Christ the Son, and the Holy Spirit. Our faith is rooted in the teachings of the Bible, emphasizing grace, forgiveness, and the hope of eternal life. We strive to live according to God's Word and share the Gospel with others." },
    { num: 3, q: "How do I become a member?", a: "To become a member, you must profess your faith in Jesus Christ and undergo baptism. Acceptance of our church covenant and teachings is also required. We offer a New Member Orientation to help you understand our faith and practices." },
    { num: 4, q: "What does your outreach include?", a: "Our outreach ministry includes a Shelter Program that serves those in need within our community. We also organize special events like the National Day of Prayer and youth activities such as choir and praise dance. We believe in serving others as a reflection of Christ's love." },
    { num: 5, q: "How can I get involved?", a: "You can get involved by attending our services, joining a ministry, or participating in community events. We encourage everyone to find their place within our church family. Reach out to us for more information on how you can contribute." },
    { num: 6, q: "What are the rights of church members?", a: "Every member of Calvary Set Apart Deliverance Ministry has the right to vote in church elections and on questions presented to the congregation, provided they are present. Members are also eligible for church offices, may participate in ordinances, and are encouraged to take part in the ministry and fellowship of the church."},

  ];

  return (
    <section id="faq" className="py-16 md:py-24 lg:py-30">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-16 md:px-20 lg:px-12 2xl:px-[1rem]">
        <h2 className="text-center font-quint text-3xl md:text-4xl xl:text-5xl font-semibold tracking-normal leading-tight">
          FAQS
        </h2>
        <p className="mx-auto mt-3 max-w-3xl text-center font-poppins text-sm sm:text-base text-foreground/80">
          Find answers to common questions about our services, beliefs, and how to become a member.
        </p>

        {/* FAQ container */}
        <div className="mt-10 grid gap-5 md:gap-7 lg:grid-cols-2 mb-20">
          {faqs.map(({ num, q, a }) => (
            <article
              key={num}
              className="relative rounded-2xl border-t border-r border-b border-l-4 border-l-button bg-background/90 backdrop-blur p-6 md:p-8 transition-all duration-300 hover:shadow-lg">
              {/* number on the top right */}
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
              <div className="mt-5 h-px w-full scale-x-0 bg-foreground/20" />
            </article>
          ))}
        </div>
        <div className="flex flex-col items-center gap-4">
            <h1 className="font-poppins font-bold text-xl md:text-2xl">Still have Questions?</h1>
            <p className="font-poppins text-center text-sm md:text-md leading-6 text-foreground/90">Concerning our ministry, faith, or upcoming events, we're here to help guide you. Don't hesitate to get in touch.</p>
            <a href="#contact" className="mt-4 px-4 py-2 bg-button font-poppins text-white border-none rounded-md text-sm md:text-md hover:bg-buttonh transition-colors duration-300 cursor-pointer">
                Contact
            </a>
        </div>
        
      </div>
    </section>
  );
};
