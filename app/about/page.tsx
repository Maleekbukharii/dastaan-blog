import Navbar from '@/components/Navbar';
import React from 'react';
import Image from 'next/image';

const Page = () => {
  return (
    <div className='bg-white'>
      <Navbar />
      <h1 className='flex justify-center font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black my-5'>
        About Us
      </h1>
      <div className='flex justify-center my-4'>
        <Image src="/capture.png" alt="dastan logo" width={455} height={233} className="h-30 w-60" />
      </div>
      <p className='text-black mx-4 sm:mx-12 md:mx-24 lg:mx-44 flex justify-center my-10 text-sm sm:text-base md:text-lg lg:text-xl'>
        Welcome to Dastaan, your go-to source for insightful articles and up-to-date news. Our dedicated team of writers and journalists is committed to delivering engaging and thought-provoking content that resonates with the modern reader. We specialize in crafting stories that matter, blending serious subject matter with a unique and captivating tone.
        <br /><br />
        At Dastaan, we believe in the power of storytelling to inform, inspire, and provoke meaningful discussions. We shine a light on the socio-political issues of Pakistan that often go unnoticed by mainstream media. Our mission is to be the voice of the people, providing a platform for alternative perspectives and innovative ideas. We aim to create a space where diverse voices can be heard and important topics can be explored in depth.
        <br /><br />
        Our content covers a wide array of topics, from politics and society to culture and technology. We delve into the heart of each story, providing comprehensive analysis and thoughtful commentary. Whether it's an in-depth investigative piece or a timely news update, we ensure that our articles are well-researched and meticulously crafted to offer our readers a rich and engaging experience.
        <br /><br />
        At Dastaan, we are more than just a news outlet; we are a community of passionate individuals who care about the world around us. We encourage our readers to engage with our content, share their thoughts, and join us in meaningful conversations. We believe that through dialogue and understanding, we can contribute to a more informed and connected society.
        <br /><br />
        Join us as we explore the stories that shape our world, offering a fresh and dynamic approach to news and storytelling. Together, let's uncover the truths that matter and give a voice to those who need to be heard.
      </p>
      
      <footer className='bg-gray-900 py-6 mt-12'>
        <div className='text-center text-white'>
          <p>&copy; 2023 Dastaan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Page;
