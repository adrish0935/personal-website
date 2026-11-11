import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Academics from "@/components/Academics";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 transition-colors duration-200">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Academics />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
