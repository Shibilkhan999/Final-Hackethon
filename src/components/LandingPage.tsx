import { useState } from 'react';
import { Logo } from './Logo';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Upload, Sparkles, Clock, Shield, FileText, MessageSquare, Globe } from 'lucide-react';

interface LandingPageProps {
  onGetStarted: () => void;
}

export function LandingPage({ onGetStarted }: LandingPageProps) {
  const [language, setLanguage] = useState<'en' | 'ur'>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ur' : 'en');
  };

  const content = {
    en: {
      nav: { login: 'Login', lang: 'اردو' },
      hero: {
        title: 'HealthMate',
        subtitle: 'Sehat ka Smart Dost',
        tagline: 'Upload medical reports, get AI summaries in English & Roman Urdu',
        cta1: 'Get Started',
        cta2: 'How it Works'
      },
      features: [
        {
          icon: Upload,
          title: 'Upload Reports',
          desc: 'Securely upload lab reports, prescriptions, and medical documents'
        },
        {
          icon: Sparkles,
          title: 'AI Summaries',
          desc: 'Get instant Gemini-powered insights in both English and Roman Urdu'
        },
        {
          icon: Clock,
          title: 'Health Timeline',
          desc: 'Track your vitals and health history over time with beautiful charts'
        }
      ],
      security: {
        title: 'Your Privacy, Protected',
        items: ['End-to-end encryption', 'JWT authentication', 'HIPAA-compliant storage', 'Signed URLs']
      }
    },
    ur: {
      nav: { login: 'Login karein', lang: 'EN' },
      hero: {
        title: 'HealthMate',
        subtitle: 'Sehat ka Smart Dost',
        tagline: 'Reports bhejo, AI se seedhi samajh lo — English & Roman Urdu',
        cta1: 'Shuru karein',
        cta2: 'Kaise kaam karta hai'
      },
      features: [
        {
          icon: Upload,
          title: 'Reports Upload karo',
          desc: 'Lab reports, prescriptions, aur medical documents securely upload karein'
        },
        {
          icon: Sparkles,
          title: 'AI Summary milegi',
          desc: 'Gemini AI se turant insights paayein English aur Roman Urdu mein'
        },
        {
          icon: Clock,
          title: 'Health Timeline',
          desc: 'Apne vitals aur health history ko track karein beautiful charts ke saath'
        }
      ],
      security: {
        title: 'Aapki Privacy, Mehfooz',
        items: ['End-to-end encryption', 'JWT authentication', 'HIPAA-compliant storage', 'Signed URLs']
      }
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-50 via-background to-mint-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/20 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Logo variant="gradient" size="sm" />
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleLanguage}
                className="gap-2 rounded-full hover-lift"
              >
                <Globe className="w-4 h-4" />
                {t.nav.lang}
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={onGetStarted}
                className="rounded-full hover-lift border-primary/20"
              >
                {t.nav.login}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="space-y-8 animate-slide-up">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 rounded-full border border-accent/20">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse-glow" />
                <span className="text-sm font-medium text-accent">AI-Powered Health Assistant</span>
              </div>

              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-extrabold text-primary leading-tight">
                  {t.hero.title}
                </h1>
                <p className="text-2xl text-accent font-semibold">
                  {t.hero.subtitle}
                </p>
                <p className="text-xl text-muted-foreground max-w-lg text-balance">
                  {t.hero.tagline}
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  onClick={onGetStarted}
                  className="rounded-full px-8 h-14 text-lg hover-lift shadow-lg bg-primary hover:bg-primary/90"
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                  {t.hero.cta1}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 h-14 text-lg hover-lift border-2"
                >
                  {t.hero.cta2}
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Shield className="w-4 h-4 text-accent" />
                  <span>HIPAA Compliant</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Sparkles className="w-4 h-4 text-accent" />
                  <span>Gemini AI Powered</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Globe className="w-4 h-4 text-accent" />
                  <span>Bilingual Support</span>
                </div>
              </div>
            </div>

            {/* Right: Illustration */}
            <div className="relative animate-float">
              <Card className="glass shadow-2xl border-2 border-white/40 hover-scale transition-all duration-500" style={{ borderRadius: '24px' }}>
                <CardContent className="p-8">
                  <div className="space-y-6">
                    {/* Mock Report Preview */}
                    <div className="bg-white rounded-xl p-6 shadow-md">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-xl">
                          <FileText className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1 space-y-2">
                          <div className="h-4 bg-muted rounded w-3/4 animate-shimmer" />
                          <div className="h-3 bg-muted rounded w-1/2 animate-shimmer" style={{ animationDelay: '100ms' }} />
                        </div>
                      </div>
                    </div>

                    {/* Mock AI Response */}
                    <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-xl p-6 border border-accent/20">
                      <div className="flex items-start gap-3 mb-4">
                        <div className="bg-accent p-2 rounded-lg">
                          <MessageSquare className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-primary mb-1">AI Summary</p>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            Your blood test shows all parameters within normal range. Continue maintaining a healthy lifestyle...
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <div className="px-3 py-1 bg-white rounded-full text-xs font-medium">English</div>
                        <div className="px-3 py-1 bg-white/50 rounded-full text-xs">Roman Urdu</div>
                      </div>
                    </div>

                    {/* Floating elements */}
                    <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/20 rounded-full blur-xl animate-pulse-glow" />
                    <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/20 rounded-full blur-xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold text-primary mb-4">
              {language === 'en' ? 'How It Works' : 'Kaise Kaam Karta Hai'}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {language === 'en' 
                ? 'Three simple steps to understand your health reports'
                : 'Teen aasan steps mein apni health reports samjhein'}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {t.features.map((feature, idx) => (
              <Card
                key={idx}
                className="glass hover-lift transition-all duration-300 border-2 border-white/40 group"
                style={{ 
                  borderRadius: '20px',
                  animationDelay: `${idx * 100}ms`
                }}
              >
                <CardContent className="p-8 text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="glass border-2 border-white/40 shadow-2xl hover-scale transition-all duration-500" style={{ borderRadius: '24px' }}>
            <CardContent className="p-12 text-center space-y-6">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 mb-4">
                <Shield className="w-10 h-10 text-accent" />
              </div>
              <h2 className="text-3xl font-bold text-primary">{t.security.title}</h2>
              <div className="grid sm:grid-cols-2 gap-4 pt-6">
                {t.security.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm"
                  >
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="text-sm font-medium text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground pt-4 max-w-2xl mx-auto">
                {language === 'en'
                  ? 'Your medical data is encrypted and stored securely. We never share your information without your explicit consent.'
                  : 'Aapka medical data encrypted aur secure hai. Hum aapki ijazat ke bina kabhi share nahi karte.'}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold text-primary">
            {language === 'en' 
              ? 'Ready to understand your health better?' 
              : 'Apni sehat ko behtar samajhne ke liye tayyar hain?'}
          </h2>
          <p className="text-xl text-muted-foreground">
            {language === 'en'
              ? 'Join thousands of users managing their health with AI'
              : 'Hazaron users ke saath AI se apni sehat manage karein'}
          </p>
          <Button
            size="lg"
            onClick={onGetStarted}
            className="rounded-full px-12 h-16 text-lg hover-lift shadow-xl bg-gradient-to-r from-primary to-accent hover:opacity-90"
          >
            <Sparkles className="w-6 h-6 mr-2" />
            {t.hero.cta1}
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-12 px-4 sm:px-6 lg:px-8 bg-white/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <Logo variant="flat" size="sm" />
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Contact</a>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 HealthMate. Made with 💚 for better health.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
