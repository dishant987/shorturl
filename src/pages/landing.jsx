"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { BarChart3, Globe, Lock, Zap, CheckCircle2, TrendingUp } from "lucide-react"

const LandingPage = () => {
  const [longUrl, setLongUrl] = useState("")
  const navigate = useNavigate()

  const handleShorten = (e) => {
    e.preventDefault()
    if (longUrl) navigate(`/auth?createNew=${longUrl}`)
  }

  return (
    <div className="relative">
      <section className="relative px-4 sm:px-6 lg:px-8 pt-20 pb-24 md:pt-32 md:pb-32">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-primary/10 blur-3xl rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <Zap className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Lightning Fast URL Shortening</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-balance">The only URL Shortener</span>
            <br />
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-300% animate-gradient">
              you&apos;ll ever need
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto text-balance">
            Create short, memorable links with powerful analytics and custom branding. Track clicks, analyze traffic,
            and grow your audience.
          </p>

          <form onSubmit={handleShorten} className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto mb-8">
            <Input
              type="url"
              placeholder="Enter your long URL here..."
              value={longUrl}
              onChange={(e) => setLongUrl(e.target.value)}
              className="h-14 flex-1 text-base bg-card/50 backdrop-blur-sm border-border/95 focus:border-primary"
            />
            <Button
              type="submit"
              size="lg"
              className="h-14 px-8 bg-primary hover:bg-primary/90  shadow-lg shadow-primary/25 font-semibold"
            >
              Shorten URL
            </Button>
          </form>

          <p className="text-sm text-muted-foreground">No credit card required • Free forever • 100% secure</p>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Powerful features for modern teams</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to manage, track, and optimize your links
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="group relative p-6 md:p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Advanced Analytics</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Get detailed insights about your audience with real-time click tracking and geographic data.
                </p>
              </div>
            </div>

            <div className="group relative p-6 md:p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Custom Domains</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Use your own branded domain to create professional, trustworthy short links.
                </p>
              </div>
            </div>

            <div className="group relative p-6 md:p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Lock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Secure & Reliable</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Enterprise-grade security with 99.9% uptime guarantee and SSL encryption.
                </p>
              </div>
            </div>

            <div className="group relative p-6 md:p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Easy to Use</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Simple, intuitive interface that anyone can use. No technical knowledge required.
                </p>
              </div>
            </div>

            <div className="group relative p-6 md:p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Performance Tracking</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Monitor link performance with detailed metrics on clicks, locations, and devices.
                </p>
              </div>
            </div>

            <div className="group relative p-6 md:p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Instant link generation with global CDN for the fastest redirect speeds worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Frequently asked questions</h2>
            <p className="text-lg text-muted-foreground">Everything you need to know about Trimrr</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem
              value="item-1"
              className="border border-border/50 rounded-xl px-6 bg-card/30 backdrop-blur-sm data-[state=open]:border-primary/50"
            >
              <AccordionTrigger className="hover:no-underline py-5 text-left">
                <span className="font-semibold">How does the Trimrr URL shortener work?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                When you enter a long URL, our system generates a shorter version of that URL. This shortened URL
                redirects to the original long URL when accessed. All redirects are tracked and analyzed in real-time.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="border border-border/50 rounded-xl px-6 bg-card/30 backdrop-blur-sm data-[state=open]:border-primary/50"
            >
              <AccordionTrigger className="hover:no-underline py-5 text-left">
                <span className="font-semibold">Do I need an account to use the app?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                Yes. Creating an account allows you to manage your URLs, view analytics, and customize your short URLs.
                Sign up is free and takes less than 30 seconds.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="border border-border/50 rounded-xl px-6 bg-card/30 backdrop-blur-sm data-[state=open]:border-primary/50"
            >
              <AccordionTrigger className="hover:no-underline py-5 text-left">
                <span className="font-semibold">What analytics are available for my shortened URLs?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                You can view the number of clicks, geolocation data of the clicks, and device types (mobile/desktop) for
                each of your shortened URLs. All data is updated in real-time.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-4"
              className="border border-border/50 rounded-xl px-6 bg-card/30 backdrop-blur-sm data-[state=open]:border-primary/50"
            >
              <AccordionTrigger className="hover:no-underline py-5 text-left">
                <span className="font-semibold">Is there a limit to how many links I can create?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                Free accounts can create unlimited short links. Premium plans offer additional features like custom
                domains, detailed analytics, and priority support.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 py-20 ">
        <div className="max-w-4xl mx-auto">
          <div className="relative p-8 md:p-12 lg:p-16 rounded-3xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent border border-primary/20 overflow-hidden">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
            <div className="relative text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Ready to get started?</h2>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of users who trust Trimrr for their link management needs.
              </p>
              <Button
                size="lg"
                onClick={() => navigate("/auth")}
                className="h-14 px-8 bg-primary hover:bg-primary/90  shadow-xl shadow-primary/25 text-base font-semibold"
              >
                Start Shortening for Free
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LandingPage
