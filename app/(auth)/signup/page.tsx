import React from 'react'
import Layout from '@/components/layout'
import { SignupForm } from '@/components/forms/signupforms'
const signUp = () => {
  return (
    <Layout>
        <div className='flex justify-center'>
        <SignupForm></SignupForm>   
        </div>
    </Layout>
  )
}

export default signUp
