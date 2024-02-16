import { GitHubLogoIcon } from '@radix-ui/react-icons'
import React from 'react'

const AboutUsCard = (props) => {
  return (
    <div className='flex flex-col items-center'>
    
    <img className='rounded-full size-32 ' src={props.Img}alt='Pankaj'/>
    <h2 className='text-2xl ' >{props.name}</h2>
    <div className='flex' >
    <a className='mx-2' href={props.Giturl} target='_blank' ><GitHubLogoIcon className='size-9' /></a>
    <a className='mx-2' href={props.Ldin} target='_blank' ><GitHubLogoIcon className='size-9' /></a>
    <a className='mx-2' href={props.Insta} target='_blank' ><GitHubLogoIcon className='size-9' /></a> 
    </div>
    </div>
  )
}

export default AboutUsCard