"use client"

import { MessageCircle, Zap, Code2, CheckCircle2 } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'

export function FeaturesSection() {
  const { t } = useLanguage()

  const features = [
    {
      icon: MessageCircle,
      iconBg: 'bg-blue-50',
      iconColor: 'text-blue-500',
      gradientFrom: 'from-blue-100/80',
      gradientTo: 'to-purple-100/40',
      title: t.features.social.title,
      desc: t.features.social.desc,
      items: [t.features.social.item1, t.features.social.item2, t.features.social.item3],
    },
    {
      icon: Zap,
      iconBg: 'bg-emerald-50',
      iconColor: 'text-emerald-500',
      gradientFrom: 'from-emerald-100/80',
      gradientTo: 'to-teal-100/40',
      title: t.features.guide.title,
      desc: t.features.guide.desc,
      items: [t.features.guide.item1, t.features.guide.item2, t.features.guide.item3],
    },
    {
      icon: Code2,
      iconBg: 'bg-purple-50',
      iconColor: 'text-purple-500',
      gradientFrom: 'from-purple-100/80',
      gradientTo: 'to-pink-100/40',
      title: t.features.api.title,
      desc: t.features.api.desc,
      items: [t.features.api.item1, t.features.api.item2, t.features.api.item3],
    },
  ]

  return (
    <section id="features" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            {t.features.badge}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-foreground mb-4 text-balance">
            {t.features.title}
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            {t.features.subtitle}
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative bg-background rounded-2xl border border-border p-6 md:p-8 overflow-hidden group hover:shadow-lg transition-shadow"
            >
              {/* Gradient background */}
              <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl ${feature.gradientFrom} ${feature.gradientTo} rounded-bl-[100px] opacity-70`} />
              
              <div className="relative">
                {/* Icon */}
                <div className={`w-12 h-12 ${feature.iconBg} rounded-xl flex items-center justify-center mb-6`}>
                  <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
                </div>

                {/* Content */}
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-6">
                  {feature.desc}
                </p>

                {/* Items */}
                <ul className="space-y-3">
                  {feature.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-sm text-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
