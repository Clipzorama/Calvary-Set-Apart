import React from "react";
import { ChevronLeft, ChevronRight, FileDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/** DATA (I–VIII) */
const sections = [
    {
    title: "Membership",
    body: (
        <div className="space-y-3 font-poppins text-foreground/90 text-sm md:text-base leading-relaxed">
            <p>
                To become a member, one must declare and accept Jesus Christ as the Son of God, be
                baptized, and receive the hands of fellowship—promising to live for the Lord and accept
                Jesus Christ as head of his or her life.
            </p>
            <p>
                Members may visit and fellowship with another church if their beliefs are one and the same.
            </p>
        </div>
    ),
    },
    {
    title: "Statement of Faith",
    body: (
        <ul className="list-disc pl-5 space-y-2 font-poppins text-foreground/90 text-sm md:text-base">
            <li>God the Father—creator and ruler of all; source of goodness, truth, and love.</li>
            <li>Jesus Christ—the Son, God manifest in the flesh, redeemer and Lord, head of the church.</li>
            <li>The Holy Spirit—ever-present for guidance, comfort, and strength.</li>
            <li>Speaking in tongues—to edify, prophesy, and teach God's way.</li>
            <li>Forgiveness of sins by grace upon confession in repentance, baptism, and faith.</li>
            <li>The church—fellowship of believers for worship, ministry, proclamation.</li>
            <li>God's kingdom—sovereign rule; brotherhood of man; triumph of righteousness; resurrection & life everlasting.</li>
        </ul>
    ),
    },
    {
    title: "Reception",
    body: (
        <div className="space-y-3 font-poppins text-foreground/90 text-sm md:text-base">
            <p>A person is considered a member upon approval of the church membership. Ways to join:</p>
            <ol className="list-[lower-alpha] pl-6 space-y-2">
                <li>
                <span className="font-semibold">By profession of faith</span> — publicly confessing
                    faith in Jesus Christ, evidencing a regenerate heart, and adopting the church covenant and practices.
                </li>
                <li>
                <span className="font-semibold">By baptism</span> — upon profession of faith in a church of like faith and order.
                </li>
                <li>
                <span className="font-semibold">By letter</span> — transfer from a church of like faith and order.
                </li>
            </ol>
        </div>
    ),
    },

    {
    title: "New Member Orientation",
    body: (
        <p className="font-poppins text-foreground/90 text-sm md:text-base leading-relaxed">
            New members are expected to participate in the orientation program as developed by the church.
        </p>
    ),
    },

    {
    title: "Members Rights",
    body: (
        <ul className="list-disc pl-5 space-y-2 font-poppins text-foreground/90 text-sm md:text-base">
            <li>Members may vote when present at elections and on church questions (no proxy voting).</li>
            <li>Members are eligible for consideration for elective office.</li>
            <li>Members may participate in the ordinances administered by the church.</li>
        </ul>
    ),
    },

    {
    title: "Termination of Membership",
    body: (
        <ol className="list-decimal pl-5 space-y-2 font-poppins text-foreground/90 text-sm md:text-base">
            <li>Death</li>
            <li>Transfer by letter to another church</li>
            <li>Joined another church and requested acknowledgement</li>
            <li>Exclusion by action of this church</li>
        </ol>
    ),
    },

    {
    title: "Church Staff & Officers",
    body: (
        <ol className="list-decimal pl-5 space-y-1 font-poppins text-foreground/90 text-sm md:text-base">
            <li>Pastor / President</li>
            <li>Elder / Vice President</li>
            <li>Deacon & Deaconess</li>
            <li>Evangelist</li>
            <li>Church Secretary</li>
            <li>Treasurer</li>
        </ol>
    ),
    },

    {
    title: "Meetings & Programs",
    body: (
        <div className="space-y-4 font-poppins text-foreground/90 text-sm md:text-base">
            <div>
                <p className="font-semibold mb-1">Regular Meetings</p>
                <div className="grid sm:grid-cols-2 gap-2">
                    <div className="rounded-xl border p-3">
                        <p className="font-semibold">Sunday</p>
                        <p>10:00-11:30 AM — Sunday School</p>
                        <p>11:30 AM-2:30 PM — Worship Service</p>
                    </div>
                    <div className="rounded-xl border p-3">
                        <p className="font-semibold">Monday</p>
                        <p>7:30 PM — Prayer</p>
                    </div>
                    <div className="rounded-xl border p-3">
                        <p className="font-semibold">Thursday</p>
                        <p>8:00 PM — Bible Study</p>
                    </div>
                    <div className="rounded-xl border p-3">
                        <p className="font-semibold">Saturday</p>
                        <p>7:00 AM — Morning Prayer</p>
                    </div>
                </div>
            </div>
            <div>
                <p className="font-semibold">Special Services & Business</p>
                <ul className="list-disc pl-5 space-y-1">
                <li>Special services will be announced the Sunday prior.</li>
                <li>Quarterly business meeting on the fourth Sunday evening of the month.</li>
                <li><span className="font-semibold">Quorum:</span> those who attend the regular business meeting.</li>
                </ul>
            </div>
            <div>
                <p className="font-semibold">Program Organizations</p>
                <p>All programs are under church control and led by official members who regularly attend.</p>
            </div>
        </div>
    ),
    },
];

const roman = ["I","II","III","IV","V","VI","VII","VIII"];

export const GetInvolved = () => {
    const [idx, setIdx] = React.useState(0);
    const [dir, setDir] = React.useState(1); // 1 next, -1 prev
    const total = sections.length;

    const next = () => {
        if (idx < total - 1) { setDir(1); setIdx(idx + 1); }
    };
    const prev = () => {
        if (idx > 0) { setDir(-1); setIdx(idx - 1); }
    };

    // keyboard arrows
    React.useEffect(() => {
        const onKey = (e) => {
            if (e.key === "ArrowRight") next();
            if (e.key === "ArrowLeft") prev();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [idx]);

    const swipeThreshold = 8000;
    const swipePower = (offset, velocity) => Math.abs(offset) * velocity;

    return (
        <section id="involved" className="w-full px-4 relative min-h-screen bg-background pt-30 pb-14 flex flex-col items-center">
            {/* Hero */}
            <div className="max-w-5xl w-full text-center mb-8">
                <h1 className="font-quint font-semibold text-3xl md:text-4xl xl:text-5xl tracking-normal leading-tight text-primary opacity-0 animate-fade-in-delay-1">
                    Church Constitution
                </h1>
                <p className="mt-2 font-poppins text-sm md:text-base text-foreground/80 opacity-0 animate-fade-in-delay-2">
                    Calvary Set Apart Deliverance Ministry
                </p>
            </div>

            <div className="relative w-full max-w-4xl">
                {/* Left Arrow */}
                <button
                    onClick={prev}
                    aria-label="Previous"
                    disabled={idx === 0}
                    className={`absolute -left-3 md:-left-6 top-1/2 -translate-y-1/2 z-10 rounded-full border bg-background/90 p-2 shadow hover:shadow-md transition ${
                    idx === 0 ? "opacity-30 cursor-not-allowed" : "opacity-100 cursor-pointer"
                    }`}>

                    <ChevronLeft className="h-6 w-6 text-primary" />
                    
                </button>

                {/* Right Arrow */}
                <button
                    onClick={next}
                    aria-label="Next"
                    disabled={idx === total - 1}
                    className={`absolute -right-3 md:-right-6 top-1/2 -translate-y-1/2 z-10 rounded-full border bg-background/90 p-2 shadow hover:shadow-md transition ${
                    idx === total - 1 ? "opacity-30 cursor-not-allowed" : "opacity-100 cursor-pointer"
                    }`}>

                    <ChevronRight className="h-6 w-6 text-primary" />
                    
                </button>

                {/* Numeral Header */}
                <div className="flex items-center justify-center mb-3 gap-3 opacity-0 animate-fade-in-delay-3">
                    <span className="inline-flex items-center gap-2 font-poppins text-xs md:text-sm tracking-widest uppercase text-foreground/70">
                        <span className="font-semibold">Section</span>
                        <span className="px-2 py-0.5 rounded-lg border bg-background text-foreground">
                            {roman[idx]}
                        </span>
                        <span className="text-foreground/60">/ {roman[total - 1]}</span>
                    </span>
                </div>

                {/* Content Container */}
                <div className="relative overflow-hidden h-[58vh] md:h-[56vh] lg:h-[52vh] max-h-[700px] opacity-0 animate-fade-in-delay-4">
                    <AnimatePresence initial={false} custom={dir} mode="wait">
                        <motion.article
                            key={idx}
                            custom={dir}
                            initial={{ x: dir === 1 ? 60 : -60, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: dir === 1 ? -60 : 60, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 320, damping: 28 }}
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={0.8}
                            onDragEnd={(_, info) => {
                            const swipe = swipePower(info.offset.x, info.velocity.x);
                            if (swipe < -swipeThreshold) next();
                            else if (swipe > swipeThreshold) prev();
                            }}
                            className="absolute inset-0 rounded-2xl border bg-background shadow-xl p-6 md:p-8 flex flex-col"
                        >
                            <header className="mb-3">
                                <h2 className="font-quint text-xl md:text-2xl font-bold tracking-tight text-primary">
                                    {sections[idx].title}
                                </h2>
                            </header>

                            {/* Content of Constitution*/}
                            <motion.div
                            key={`content-${idx}`}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, ease: "easeOut", delay: 0.05 }}
                            className="flex-1 overflow-y-auto pr-1"
                            >
                            {sections[idx].body}
                            </motion.div>

                            {/* Progress Bar*/}
                            <div className="mt-6">
                                <div className="h-1.5 w-full bg-foreground/10 rounded-full overflow-hidden">
                                    <motion.div
                                    className="h-full bg-button"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${((idx + 1) / total) * 100}%` }}
                                    transition={{ duration: 0.25 }}
                                    />
                                </div>
                                <p className="mt-2 font-poppins text-[11px] text-foreground/70 text-right">
                                    {idx + 1} of {total}
                                </p>
                            </div>
                        </motion.article>
                    </AnimatePresence>
                </div>
            </div>

            {/* Actions */}
            <div className="mt-8 flex items-center gap-3">
                <a
                    href="/constitution.pdf"
                    download
                    className="inline-flex opacity-0 animate-fade-in-delay-4 items-center gap-2 rounded-2xl bg-button hover:bg-buttonh text-background px-4 py-2 font-poppins text-sm md:text-base transition-colors"
                >
                    <FileDown className="h-4 w-4" />
                    Download Constitution (PDF)
                </a>
            </div>
        </section>
    );
};

export default GetInvolved;
