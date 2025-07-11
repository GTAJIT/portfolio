import Approach from "@/components/Approach";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { FloatingNav } from "@/components/ui/Floating-Nav";
import { navItems } from "@/data";
// import { Suspense } from "react";
// import Loading from "./loading";

export default function Home() {
  return (
    <main className="relative bg-black-100 text-white flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        {/* <Suspense fallback={<Loading/>}>  */}
        <FloatingNav navItems={navItems}/>
        <Hero/>
        <Grid/>
        <Projects/>
        <Clients />
        <Experience />
        <Approach />
        <Footer />
        {/* </Suspense> */}
      </div>
    </main>
  );
}
