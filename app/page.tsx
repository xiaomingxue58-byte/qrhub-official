"use client"

import { LanguageProvider } from '@/lib/language-context'
import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/hero-section'
import { FeaturesSection } from '@/components/features-section'
import { ProcessSection } from '@/components/process-section'
import { WhyUsSection } from '@/components/why-us-section'
import { FaqSection } from '@/components/faq-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <FeaturesSection />
          <ProcessSection />
          <WhyUsSection />
          <FaqSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}
