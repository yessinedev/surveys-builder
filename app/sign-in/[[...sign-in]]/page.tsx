import { SignIn } from '@clerk/nextjs'
import React from 'react'

const SignInPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <SignIn  signUpFallbackRedirectUrl ={process.env.NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL} />
    </div>
  )
}

export default SignInPage