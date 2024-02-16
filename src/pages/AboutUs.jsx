import AboutUsCard from '../component/AboutUsCard'
import { GitHubLogoIcon } from '@radix-ui/react-icons'
import React from 'react'

const AboutUs = () => {
  return (<div>
     <p className='text-lg'>
     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque voluptatibus, animi ea odio cupiditate eligendi, incidunt repellat laudantium magni quasi voluptatem eaque officia explicabo eveniet hic, vitae quo provident molestias.
     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque voluptatibus, animi ea odio cupiditate eligendi, incidunt repellat laudantium magni quasi voluptatem eaque officia explicabo eveniet hic, vitae quo provident molestias.
     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque voluptatibus, animi ea odio cupiditate eligendi, incidunt repellat laudantium magni quasi voluptatem eaque officia explicabo eveniet hic, vitae quo provident molestias.
     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque voluptatibus, animi ea odio cupiditate eligendi, incidunt repellat laudantium magni quasi voluptatem eaque officia explicabo eveniet hic, vitae quo provident molestias.
     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque voluptatibus, animi ea odio cupiditate eligendi, incidunt repellat laudantium magni quasi voluptatem eaque officia explicabo eveniet hic, vitae quo provident molestias.
     </p>
<div className='flex justify-between' >
    <AboutUsCard Ldin='https://github.com/Pankajis1' Insta='https://github.com/Pankajis1' Img="https://avatars.githubusercontent.com/u/102279990?v=4" name="Pankaj Kumar" Giturl="https://github.com/Pankajis1"/>
    <AboutUsCard Ldin='https://github.com/NeerajNightCoder' Insta='https://github.com/NeerajNightCoder' Img="https://avatars.githubusercontent.com/u/147649027?v=4" name="Kumar Neeraj" Giturl='https://github.com/NeerajNightCoder'/>
    <AboutUsCard Ldin='https://github.com/rishu-raj007' Insta='https://github.com/rishu-raj007' Img="https://avatars.githubusercontent.com/u/154724023?v=4" name="Rishu" Giturl='https://github.com/rishu-raj007'/>
</div>


  </div>
   
  )
}

export default AboutUs