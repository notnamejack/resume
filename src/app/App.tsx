import { MotionConfig } from "motion/react";
import { DocumentMeta } from "@/app/document-meta";
import { HomePage } from "@/pages/home/ui/HomePage";
import { ActiveSectionProvider } from "@/shared/lib/active-section";
import { PreferencesProvider } from "@/shared/preferences/preferences";
import { ScrollProgress } from "@/shared/ui/ScrollProgress/ScrollProgress";
import { SkipLink } from "@/shared/ui/SkipLink/SkipLink";
import { Footer } from "@/widgets/footer/ui/Footer";
import { Header } from "@/widgets/header/ui/Header";
import { SectionRail } from "@/widgets/rail/ui/SectionRail";

export function App() {
  return (
    <PreferencesProvider>
      <DocumentMeta />
      <MotionConfig reducedMotion="user">
        <ActiveSectionProvider>
          <SkipLink />
          <ScrollProgress />
          <Header />
          <SectionRail />
          <main id="main" tabIndex={-1}>
            <HomePage />
          </main>
          <Footer />
        </ActiveSectionProvider>
      </MotionConfig>
    </PreferencesProvider>
  );
}
