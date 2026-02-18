import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>

      <h2 className="text-2xl font-semibold mb-4">
        Page Not Found
      </h2>

      <p className="text-gray-600 mb-6 max-w-md">
        The page you're looking for doesn’t exist or has been moved.
      </p>

      <Link
        href="/"
        className="rounded-lg bg-black px-6 py-2 text-white hover:opacity-80 transition"
      >
        Back to Home
      </Link>
    </div>
  )
}
