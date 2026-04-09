“使用客户端”

import { LanguageProvider } from '@/lib/language-context'     
import { Navbar } from '@/components/navbar'     
import { HeroSection } from '@/components/hero-section'     
import { FeaturesSection } from '@/components/features-section'     
import { ProcessSection } from '@/components/process-section'     
import { WhyUsSection } from '@/components/why-us-section'     
import { FaqSection } from '@/components/faq-section'     
import { Footer } from '@/components/footer'     

export default function Home ( ) {    
  返回（ 
    <语言提供商>
      < div className = " min-h-screen bg-background " > 
        <导航栏/> 
        <主界面>
          <英雄章节/> 
          <功能部分/> 
          <流程部分/> 
          <关于我们部分/> 
          <常见问题解答部分/> 
        </ main >
        <页脚/> 
      </div>​​
    </ LanguageProvider >
  ）
}
