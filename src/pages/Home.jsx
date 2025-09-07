
import { HeroPage } from "@/homeparts/Hero"
import { Glance } from "@/homeparts/Glance"
import { Pillars } from "@/homeparts/Pillars"
import { FAQ } from "@/homeparts/FAQ"
import { Member } from "@/homeparts/Member"
import { Contact } from "@/homeparts/Contact"



function Home() {
    return (
        <>
            <HeroPage />
            <Glance />
            <Pillars />
            <FAQ />
            <Member />
            <Contact />
        </>
    )

}

export default Home;