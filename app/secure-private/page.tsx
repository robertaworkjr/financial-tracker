import Link from 'next/link';

export default function SecurePrivate() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-4">Secure & Private</h1>
            <p className="mb-8">Your financial data is encrypted and protected with bank-level security.</p>
            <Link href="/" className="text-blue-500 underline">Home</Link>
        </div>
    );
}
