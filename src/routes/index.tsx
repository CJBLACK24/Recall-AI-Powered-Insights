import { Link, createFileRoute } from '@tanstack/react-router'
import {
  ArrowRight,
  BookOpen,
  Braces,
  Check,
  Database,
  Globe,
  Layers,
  Lock,
  Sparkles,
} from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Navbar } from '@/components/web/navbar'

export const Route = createFileRoute('/')({
  component: LandingPage,
  head: () => ({
    meta: [
      { title: 'Recall - AI Powered Insights' },
      {
        name: 'description',
        content:
          'Your smart notebook for the web. Save links, get AI-powered summaries, and organize your insights automatically.',
      },
    ],
  }),
})

const features = [
  {
    title: 'Import URLs',
    description: 'Save articles and documents from anywhere on the web.',
    icon: Globe,
    href: '/dashboard/import',
  },
  {
    title: 'AI Summaries',
    description: 'Get instant, key-point summaries of your saved content.',
    icon: Sparkles,
    href: '/dashboard/items',
  },
  {
    title: 'Organize & Review',
    description: 'Automatically categorized insights for easy retrieval.',
    icon: BookOpen,
    href: '/dashboard/discover',
  },
]

function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center overflow-hidden px-4 py-20 text-center md:py-32">
        {/* Gradient background blobs */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="animate-blob absolute -left-40 -top-40 h-80 w-80 rounded-full bg-primary/30 opacity-70 blur-3xl" />
          <div className="animate-blob animation-delay-2000 absolute -right-40 top-20 h-80 w-80 rounded-full bg-purple-500/30 opacity-70 blur-3xl" />
          <div className="animate-blob animation-delay-4000 absolute -bottom-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-pink-500/30 opacity-70 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-3xl space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-primary" />
            AI-Powered Insights
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl">
            Your Smart Notebook for the{' '}
            <span className="text-primary">Web</span>
          </h1>
          <p className="text-xl leading-relaxed text-muted-foreground">
            Recall acts like a smart notebook. Save links to articles or
            documents, and let our AI pull out the key points and organize them
            for you.
          </p>
          <div className="flex items-center justify-center gap-4 pt-4">
            <Link
              to="/signup"
              className={buttonVariants({
                size: 'lg',
                className:
                  'group relative overflow-hidden rounded-full px-8 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25',
              })}
            >
              <span className="relative z-10 flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
        </div>

        {/* App Preview Mockup */}
        <div className="relative z-10 mt-16 w-full max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="relative mx-auto overflow-hidden rounded-xl border bg-card/50 p-1 shadow-2xl backdrop-blur-sm">
            <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-purple-500/10" />
            <div className="relative rounded-lg border bg-background p-4">
              {/* Fake browser chrome */}
              <div className="mb-4 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-500/80" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <div className="h-3 w-3 rounded-full bg-green-500/80" />
                </div>
                <div className="ml-4 flex-1 rounded-md bg-muted/50 px-3 py-1 text-xs text-muted-foreground">
                  recall-app.com/dashboard
                </div>
              </div>
              {/* Fake app content */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="h-6 w-32 rounded bg-muted/70" />
                  <div className="h-8 w-24 rounded-full bg-primary/20" />
                </div>
                <div className="grid gap-3 md:grid-cols-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="rounded-lg border bg-card p-3 transition-all hover:border-primary/30"
                    >
                      <div className="mb-2 flex items-center gap-2">
                        <div className="h-4 w-4 rounded bg-primary/30" />
                        <div className="h-3 w-24 rounded bg-muted" />
                      </div>
                      <div className="space-y-1.5">
                        <div className="h-2 w-full rounded bg-muted/50" />
                        <div className="h-2 w-3/4 rounded bg-muted/50" />
                      </div>
                      <div className="mt-3 flex gap-1.5">
                        <div className="h-5 w-12 rounded-full bg-primary/10" />
                        <div className="h-5 w-14 rounded-full bg-purple-500/10" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Glow effect under mockup */}
          <div className="absolute -bottom-10 left-1/2 h-40 w-3/4 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
        </div>
      </section>

      {/* Features Section */}
      <section className="relative px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border bg-muted/50 px-4 py-1.5 text-sm text-muted-foreground">
              <Globe className="h-4 w-4 text-primary" />
              Core Features
            </div>
            <h2 className="mb-3 text-3xl font-bold tracking-tight md:text-4xl">
              Smart Features for Smart Readers
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Everything you need to capture and digest information efficiently.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card
                key={feature.title}
                className="group relative flex flex-col overflow-hidden border-transparent bg-card/50 shadow-md backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gradient border effect */}
                <div className="absolute inset-0 rounded-xl bg-linear-to-br from-primary/20 via-transparent to-purple-500/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute inset-px rounded-xl bg-card" />
                <CardHeader className="relative">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-primary/20 to-purple-500/20 text-primary transition-transform duration-300 group-hover:scale-110">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative flex-1" />
                <CardFooter className="relative">
                  <Link
                    to={feature.href}
                    className={buttonVariants({
                      variant: 'outline',
                      className: 'w-full rounded-full',
                    })}
                  >
                    Try it now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section (Removed or Simplified? Keeping as 'Powered By' maybe, or removing as user wants 'Recall' based content. Detailed tech stack might be distracting on a product landing page, but this was a tutorial project. I will hide it or replace it with something more generic if user wants a real product feel. I'll just remove the section to align with 'Real World IT Industry Standard' product page which hides internals.) */}

      {/* CTA Section */}
      <section className="relative overflow-hidden px-4 py-24">
        {/* Background decoration */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Start Organizing Your Web Today
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Join thousands of users who are already using Recall to declutter
            their reading list and retain more information.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/signup"
              className={buttonVariants({
                size: 'lg',
                className:
                  'group rounded-full px-8 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25',
              })}
            >
              Create Free Account
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/login"
              className={buttonVariants({
                variant: 'outline',
                size: 'lg',
                className:
                  'rounded-full px-8 transition-all duration-300 hover:scale-105',
              })}
            >
              Sign In
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">Recall</span>
              <span>
                © {new Date().getFullYear()} AI Powered Insights. All rights
                reserved.
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
