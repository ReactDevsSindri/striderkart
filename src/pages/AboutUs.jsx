import AboutUsCard from '../component/AboutUsCard'
import { GitHubLogoIcon } from '@radix-ui/react-icons'
import React from 'react'

const AboutUs = () => {
  return (<div className='dark:bg-slate-800'>
     <p className='text-lg'>
     Welcome to StriderKart!

At StriderKart, we believe that shoes are not just an accessory; they are a statement of style, comfort, and individuality. Our journey began with a simple mission: to provide footwear that not only looks good but feels great too.

Established 2024, we have been committed to offering high-quality shoes crafted with precision and passion. From timeless classics to trendy must-haves, our collection caters to every taste and occasion.

Our Philosophy

At the heart of StriderKart lies a dedication to craftsmanship and quality. We meticulously source the finest materials and work with skilled artisans to ensure that each pair of shoes meets our rigorous standards. Comfort, durability, and style are the pillars upon which we build every design.

Our Collection

Explore our diverse range of footwear, curated to suit every lifestyle and preference. Whether you're looking for sophisticated dress shoes for formal occasions, casual sneakers for everyday wear, or cozy slippers for lounging at home, we have something for everyone. With a keen eye for detail and a commitment to innovation, we continually update our collection to reflect the latest trends and technologies in the industry.

Our Commitment

Customer satisfaction is our top priority at StriderKart. We strive to provide an exceptional shopping experience, from seamless online browsing to prompt delivery and hassle-free returns. Our knowledgeable team is always available to assist you with any queries or concerns, ensuring that you find the perfect pair of shoes to elevate your style.

Join Our Community

Become a part of the StriderKart community and stay updated on the latest news, promotions, and style tips. Follow us on social media and subscribe to our newsletter to receive exclusive offers and insights into upcoming releases.

Thank You

Thank you for choosing StriderKart. We appreciate your support and look forward to helping you step out in style, one pair of shoes at a time.

Elevate your footwear game with StriderKart. Shop now! </p>
<div className='flex justify-between mt-8' >
    <AboutUsCard Ldin='https://github.com/Pankajis1' Insta='https://github.com/Pankajis1' Img="https://avatars.githubusercontent.com/u/102279990?v=4" name="Pankaj Kumar" Giturl="https://github.com/Pankajis1"/>
    <AboutUsCard Ldin='https://github.com/NeerajNightCoder' Insta='https://github.com/NeerajNightCoder' Img="https://avatars.githubusercontent.com/u/147649027?v=4" name="Kumar Neeraj" Giturl='https://github.com/NeerajNightCoder'/>
    <AboutUsCard Ldin='https://github.com/rishu-raj007' Insta='https://github.com/rishu-raj007' Img="https://avatars.githubusercontent.com/u/154724023?v=4" name="Rishu" Giturl='https://github.com/rishu-raj007'/>
</div>


  </div>
   
  )
}

export default AboutUs