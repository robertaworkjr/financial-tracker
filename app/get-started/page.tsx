import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function GetStarted() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Get Started with FinTrack</h1>
      <div className="max-w-3xl mx-auto">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Step 1: Create Your Account</CardTitle>
            <CardDescription>Sign up for a free FinTrack account to start managing your finances.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild size="lg" className="w-full">
              <Link href="/signup">Create Account</Link>
            </Button>
          </CardContent>
        </Card>
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Step 2: Connect Your Accounts</CardTitle>
            <CardDescription>Securely link your bank accounts to automatically import transactions.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">After signing up, you'll be guided through the process of connecting your accounts.</p>
          </CardContent>
        </Card>
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Step 3: Set Your Financial Goals</CardTitle>
            <CardDescription>Define your savings targets and budgeting objectives.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Use our goal-setting wizard to establish your financial priorities and track your progress.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Step 4: Start Tracking</CardTitle>
            <CardDescription>Begin monitoring your income, expenses, and overall financial health.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Explore your personalized dashboard and start making informed financial decisions.</p>
            <Button asChild variant="outline" size="lg" className="w-full">
              <Link href="/dashboard">View Demo Dashboard</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

