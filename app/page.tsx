

import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/data";
import Experience from "@/components/Experience";

import Education from "@/components/Approach";
import Footer from "@/components/Footer";


export default function Home() {
  

  return (
    <main className="overflow-clip relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Experience />
        <Education />
        <Footer />
        
      </div>
    </main>
  );
}
