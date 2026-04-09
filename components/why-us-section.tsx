"use client"

import { Users, CheckCircle, Zap, Code2, Shield } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'

export function WhyUsSection() {
  const { t } = useLanguage()

  const reasons = [
    {
      icon: Users,
      text: t.whyUs.reason1,
    },
    {
      icon: CheckCircle,
      text: t.whyUs.reason2,
    },
    {
      icon: Zap,
      text: t.whyUs.reason3,
    },
    {
      icon: Code2,
      text: t.whyUs.reason4,
    },
  ]

  // Chart data for visualization
  const chartBars = [40, 55, 45, 65, 50, 75, 60, 85]

  return (
    <section id="why-us" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            {/* Header */}
            <div className="mb-8">
              <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                {t.whyUs.badge}
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-foreground mb-4 text-balance">
                {t.whyUs.title}
              </h2>
              <p className="text-muted-foreground text-base md:text-lg">
                {t.whyUs.subtitle}
              </p>
            </div>

            {/* Reasons Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className="bg-background rounded-xl p-4 border border-border hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <reason.icon className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-sm font-medium text-foreground">
                      {reason.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Dashboard Card */}
          <div className="flex justify-center lg:justify-end">
            <div className="bg-background rounded-2xl border border-border p-6 shadow-lg w-full max-w-md">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-6">
                <span className="font-semibold text-foreground">{t.whyUs.dashboard}</span>
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-muted/50 rounded-xl p-4">
                  <div className="text-2xl md:text-3xl font-bold text-emerald-500 mb-1">98%</div>
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Shield className="w-4 h-4" />
                    <span>{t.whyUs.pciDss}</span>
                  </div>
                </div>
                <div className="bg-muted/50 rounded-xl p-4">
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-1">24/7</div>
                  <div className="text-sm text-muted-foreground">{t.whyUs.allDay}</div>
                </div>
              </div>

              {/* Chart */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-muted-foreground">{t.whyUs.transactionVolume}</span>
                  <span className="text-sm font-medium text-emerald-500">+25%</span>
                </div>
                <div className="flex items-end justify-between gap-2 h-24">
                  {chartBars.map((height, index) => (
                    <div
                      key={index}
                      className="flex-1 bg-primary/80 rounded-t-sm transition-all hover:bg-primary"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
