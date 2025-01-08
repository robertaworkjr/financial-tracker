import Link from 'next/link';

export default function EasyTracking() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-4">Easy Tracking</h1>
            <p className="mb-8">Effortlessly log your income and expenses with our intuitive interface.</p>
            <Link href="/" className="text-blue-500 underline">Home</Link>
        </div>
    );
}
