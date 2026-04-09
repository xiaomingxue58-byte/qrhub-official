"use client"

import { useState } from 'react'
import { ChevronDown, MessageCircle, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/lib/language-context'

export function FaqSection() {
  const { t } = useLanguage()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: t.faq.q1.question,
      answer: t.faq.q1.answer,
    },
    {
      question: t.faq.q2.question,
      answer: t.faq.q2.answer,
    },
    {
      question: t.faq.q3.question,
      answer: t.faq.q3.answer,
    },
    {
      question: t.faq.q4.question,
      answer: t.faq.q4.answer,
    },
  ]

  return (
    <section id="faq" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left - Header and Contact */}
          <div>
            {/* Badge */}
            <span className="inline-flex items-center gap-2 border border-primary text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              <MessageCircle className="w-4 h-4" />
              {t.faq.badge}
            </span>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-foreground mb-4 text-balance">
              {t.faq.title}
            </h2>
            <p className="text-muted-foreground text-base md:text-lg mb-8">
              {t.faq.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 mb-8">
              <Button className="gap-2 rounded-full">
                <MessageCircle className="w-4 h-4" />
                {t.faq.contact}
              </Button>
              <Button variant="outline" className="gap-2 rounded-full border-border">
                <FileText className="w-4 h-4" />
                {t.faq.docs}
              </Button>
            </div>

            {/* Support Hours Card */}
            <div className="bg-background rounded-xl border border-border p-5">
              <h3 className="font-semibold text-foreground mb-4">{t.faq.supportHours}</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{t.faq.weekdays}</span>
                  <span className="text-sm font-medium text-foreground">09:00 - 17:00 WIB</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{t.faq.weekends}</span>
                  <span className="text-sm font-medium text-foreground">{t.faq.closed}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right - FAQ Accordion */}
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-background rounded-xl border border-border overflow-hidden"
              >
                <button
                  className="w-full flex items-center gap-4 p-5 text-left"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  {/* Number */}
                  <span className="w-7 h-7 rounded-full bg-muted flex items-center justify-center flex-shrink-0 text-sm font-medium text-muted-foreground">
                    {index + 1}
                  </span>
                  
                  {/* Question */}
                  <span className="flex-1 font-medium text-foreground">
                    {faq.question}
                  </span>
                  
                  {/* Chevron */}
                  <ChevronDown 
                    className={`w-5 h-5 text-muted-foreground transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                
                {/* Answer */}
                {openIndex === index && (
                  <div className="px-5 pb-5 pt-0">
                    <div className="pl-11 text-sm text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
