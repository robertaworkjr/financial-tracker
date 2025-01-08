import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from 'next/link'

export default function LearnMore() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Learn More About FinTrack</h1>
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Comprehensive Financial Tracking</CardTitle>
          </CardHeader>
          <CardContent>
            <p>FinTrack provides a complete view of your financial life. Track income, expenses, investments, and more in one place.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Smart Budgeting Tools</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Create and manage budgets effortlessly. Our AI-powered system learns from your spending habits to suggest realistic budgets.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Goal Setting and Tracking</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Set financial goals and track your progress. Whether it's saving for a vacation or paying off debt, FinTrack helps you stay on target.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Secure and Private</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Your financial data is encrypted with bank-level security. We never sell your personal information.</p>
          </CardContent>
        </Card>
      </div>
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to take control of your finances?</h2>
        <Button asChild size="lg">
          <Link href="/get-started">Get Started Now</Link>
        </Button>
      </div>
    </div>
  )
}

