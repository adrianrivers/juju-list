import { SignIn as ClerkSignIn } from '@clerk/nextjs'

export default function SignIn() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <ClerkSignIn />
    </div>
  )
}
