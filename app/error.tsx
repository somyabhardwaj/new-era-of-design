'use client'

import { useEffect } from 'react'

type ErrorProps = {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="text-4xl font-bold mb-4">
        Something went wrong
      </h1>

      <p className="text-gray-600 mb-6 max-w-md">
        We're sorry for the inconvenience. Please try again or contact us if the problem persists.
      </p>

      <div className="flex gap-4">
        <button
          onClick={() => reset()}
          className="rounded-lg bg-black px-6 py-2 text-white hover:opacity-80 transition"
        >
          Try Again
        </button>

        <a
          href="/"
          className="rounded-lg border px-6 py-2 hover:bg-gray-100 transition"
        >
          Go Home
        </a>
      </div>
    </div>
  )
}
