import Link from 'next/link';

export default function SmartInsights() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-4">Smart Insights</h1>
            <p className="mb-8">Get personalized financial insights and recommendations based on your spending habits.</p>
            <Link href="/" className="text-blue-500 underline">Home</Link>
        </div>
    );
}
