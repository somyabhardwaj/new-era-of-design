export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="space-y-4 text-center">
        <div className="h-4 w-48 bg-gray-300 animate-pulse rounded"></div>
        <div className="h-4 w-32 bg-gray-300 animate-pulse rounded mx-auto"></div>
      </div>
    </div>
  )
}
