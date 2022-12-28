import Link from 'next/link'

export default function Nabvar() {
  return (
    <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="flex h-16 items-center justify-between">
        <div className="flex items-center">
          <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4">
              <Link href="/" className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white">
                Exit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
