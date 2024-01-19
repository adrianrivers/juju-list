import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <header className="w-full">
        <nav className="mx-auto mb-6 flex max-w-screen-lg justify-between py-6">
          <div>
            <h1 className="text-3xl font-bold">Juju List</h1>
          </div>

          <div>
            <UserButton afterSignOutUrl="/" />
          </div>
        </nav>
      </header>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex"></div>
      </main>
    </>
  )
}
