import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Take Control of Your Finances
        </h1>
        <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
          FinTrack helps you manage your money effortlessly. Track expenses, set budgets, and achieve your financial goals.
        </p>
        <div className="space-x-4">
          <Button size="lg" asChild>
            <Link href="/get-started">Get Started</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/learn-more">Learn More</Link>
          </Button>
        </div>
      </section>

      <section className="mt-24">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Choose FinTrack?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Easy Tracking", description: "Effortlessly log your income and expenses with our intuitive interface." },
            { title: "Smart Insights", description: "Get personalized financial insights and recommendations based on your spending habits." },
            { title: "Secure & Private", description: "Your financial data is encrypted and protected with bank-level security." }
          ].map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-24 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Start?</h2>
        <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
          Join thousands of users who have already taken control of their finances with FinTrack.
        </p>
        <Button size="lg" asChild>
          <Link href="/signup">Sign Up Now</Link>
        </Button>
      </section>
    </div>
  )
}

