import { About } from "@/widgets/about/ui/About";
import { Contact } from "@/widgets/contact/ui/Contact";
import { Expertise } from "@/widgets/expertise/ui/Expertise";
import { Hero } from "@/widgets/hero/ui/Hero";
import { Leadership } from "@/widgets/leadership/ui/Leadership";
import { Process } from "@/widgets/process/ui/Process";
import { Projects } from "@/widgets/projects/ui/Projects";
import { Stack } from "@/widgets/stack/ui/Stack";

export function HomePage() {
  return (
    <>
      <Hero />
      <Expertise />
      <Projects />
      <Process />
      <Leadership />
      <Stack />
      <About />
      <Contact />
    </>
  );
}
