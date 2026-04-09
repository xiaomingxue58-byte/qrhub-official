"use client"

import { ArrowRight, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/lib/language-context'
import Image from 'next/image'

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="pt-20 md:pt-24 pb-8 md:pb-16 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-5 md:gap-6 pt-4 md:pt-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold text-foreground leading-[1.15] tracking-tight text-balance">
              {t.hero.title}
            </h1>
            
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl text-pretty">
              {t.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button size="lg" className="gap-2 h-12 px-6 rounded-full text-[15px] font-medium">
                {t.cta.social}
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-6 rounded-full text-[15px] font-medium border-border">
                {t.cta.start}
              </Button>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 md:gap-12 pt-6 md:pt-8">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-primary">{t.stats.conversion}</div>
                <div className="text-sm text-muted-foreground mt-0.5">{t.stats.conversionLabel}</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-primary">{t.stats.compliance}</div>
                <div className="text-sm text-muted-foreground mt-0.5">{t.stats.complianceLabel}</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-primary">{t.stats.steps}</div>
                <div className="text-sm text-muted-foreground mt-0.5">{t.stats.stepsLabel}</div>
              </div>
            </div>
          </div>

          {/* Right Content - Illustration */}
          <div className="relative flex justify-center lg:justify-end mt-4 lg:mt-0">
            <div className="relative w-full max-w-lg">
              {/* Main illustration */}
              <div className="relative">
                <Image
                  src="/images/hero-illustration.jpg"
                  alt="QRHub illustration"
                  width={600}
                  height={500}
                  className="w-full h-auto object-contain rounded-2xl"
                  priority
                />
              </div>

              {/* Quick Setup Badge */}
              <div className="absolute top-4 right-1/4 bg-background rounded-xl px-4 py-2.5 shadow-lg border border-border flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center">
                  <Check className="w-3.5 h-3.5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-sm text-foreground">{t.hero.quickSetup}</div>
                  <div className="text-xs text-muted-foreground">{t.hero.stepsOnly}</div>
                </div>
              </div>

              {/* QRIS Ready Badge */}
              <div className="absolute bottom-1/4 right-0 bg-background rounded-xl px-4 py-2.5 shadow-lg border border-border flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-primary">
                    <rect x="3" y="3" width="7" height="7" rx="1" fill="currentColor"/>
                    <rect x="14" y="3" width="7" height="7" rx="1" fill="currentColor"/>
                    <rect x="3" y="14" width="7" height="7" rx="1" fill="currentColor"/>
                    <rect x="14" y="14" width="3" height="3" rx="0.5" fill="currentColor"/>
                    <rect x="18" y="18" width="3" height="3" rx="0.5" fill="currentColor"/>
                  </svg>
                </div>
                <span className="font-semibold text-sm text-foreground">{t.hero.qrisReady}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
