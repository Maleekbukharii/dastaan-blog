import React from 'react'
import Layout from '@/components/layout'
import { SigninForm } from '@/components/forms/signinforms'
const LoginPage = () => {
  return (
    <Layout>
      <div className='flex justify-center'>
              <SigninForm></SigninForm>
      </div>
    </Layout>
  )
}

export default LoginPage
