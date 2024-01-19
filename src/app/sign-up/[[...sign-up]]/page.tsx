import { SignUp as ClerkSignUp } from '@clerk/nextjs'

export default function SignUp() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <ClerkSignUp />
    </div>
  )
}
