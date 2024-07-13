import React from 'react'
import Layout from '@/components/layout'
import Image from 'next/image'

const Page = () => {
  return (
    <Layout>
      <h1 className='flex justify-center font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black my-5'>
        Contact Us
      </h1>
      <div className='mx-4 my-4 flex flex-col md:flex-row items-center'>
        <Image src="/phonee.png" alt="phone logo" width={348} height={348} className='h-20 w-20'/>
        <h2 className='mt-4 md:mt-0 md:ml-8 text-2xl font-semibold'>0300-0000000</h2>
      </div>
      <div className='mx-4 my-4 flex flex-col md:flex-row items-center'>
        <Image src="/email.png" alt="email logo" width={980} height={984} className='h-20 w-20'/>
        <h2 className='mt-4 md:mt-0 md:ml-8 text-2xl font-semibold text-blue-500'>
          <u>dastaan@gmail.com</u>
        </h2>
      </div>
    </Layout>
  )
}

export default Page
