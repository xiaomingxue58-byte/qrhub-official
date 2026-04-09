"use client"

import { UserPlus, FileText, Settings, CheckCircle2 } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'

export function ProcessSection() {
  const { t } = useLanguage()

  const steps = [
    {
      icon: UserPlus,
      step: 'STEP 1',
      title: t.process.step1.title,
      description: t.process.step1.desc,
    },
    {
      icon: FileText,
      step: 'STEP 2',
      title: t.process.step2.title,
      description: t.process.step2.desc,
    },
    {
      icon: Settings,
      step: 'STEP 3',
      title: t.process.step3.title,
      description: t.process.step3.desc,
    },
  ]

  const progressSteps = [
    t.process.step1.title,
    t.process.step2.title,
    t.process.step3.title,
  ]

  return (
    <section id="process" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left - Progress Card */}
          <div className="order-2 lg:order-1">
            <div className="bg-background rounded-2xl border border-border p-6 md:p-8 shadow-sm">
              {/* Progress header */}
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">{t.process.progress}</span>
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                </div>
              </div>
              
              {/* Progress percentage */}
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-4">75%</div>
              
              {/* Progress bar */}
              <div className="h-2 bg-muted rounded-full mb-2 overflow-hidden">
                <div className="h-full w-3/4 bg-primary rounded-full" />
              </div>
              
              {/* Real-time update indicator */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-sm text-muted-foreground">{t.process.realTimeUpdate}</span>
              </div>

              {/* Steps list */}
              <div className="space-y-4">
                {progressSteps.map((step, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                      index < 2 ? 'bg-primary' : 'bg-muted'
                    }`}>
                      {index < 2 ? (
                        <CheckCircle2 className="w-4 h-4 text-primary-foreground" />
                      ) : (
                        <span className="text-xs text-muted-foreground font-medium">{index + 1}</span>
                      )}
                    </div>
                    <span className={`text-sm ${index < 2 ? 'text-foreground' : 'text-muted-foreground'}`}>
                      {step}
                    </span>
                  </div>
                ))}
              </div>

              {/* Estimated completion */}
              <div className="mt-6 pt-6 border-t border-border flex items-center justify-between">
                <span className="text-sm text-muted-foreground">{t.process.estimatedCompletion}</span>
                <span className="text-lg font-bold text-primary">24h</span>
              </div>
            </div>
          </div>

          {/* Right - Steps */}
          <div className="order-1 lg:order-2">
            {/* Header */}
            <div className="mb-8">
              <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                {t.process.badge}
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-foreground mb-4 text-balance">
                {t.process.title}
              </h2>
              <p className="text-muted-foreground text-base md:text-lg">
                {t.process.subtitle}
              </p>
            </div>

            {/* Steps */}
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-4">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <step.icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-primary">{step.step}</span>
                      <span className="text-base font-semibold text-foreground">{step.title}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
