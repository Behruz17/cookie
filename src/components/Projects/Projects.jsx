import React from 'react'
import './Projects.css'
import ProjectCard from '../ProjectCard/ProjectCard'
import icon1 from '../../assets/project-icon1.svg'
import icon2 from '../../assets/project-icon2.svg'
import icon3 from '../../assets/project-icon3.svg'

export default function Projects() {
  return (
    <div className='projects-container' id='projects'>
        <h3 className='projects-title'>Projects</h3>
          <div className="projects">
            <ProjectCard link='https://dedust.io/swap/TON/COOKIE?amount=10000000000' top={-3} icon={icon1} imgWidth={7.5} imgHeight={7.18} title='Cookie TON' about={`-Supply: 5000000\n-Liquidity on Dedust is blocked until May 2024\n-2M+ locked on Ton Raffles`}  />
            <ProjectCard link='https://t.me/Cookiebitten_bot?start=r_6329807391' top={-4} icon={icon2} imgWidth={11.75} imgHeight={10.68}  title='CookieBitten' about={` Bite a cookie, invite friends and complete tasks. And get some of the Airdrop. CookieBitten will help you figure out Web3. Bite the cookies and grow with us.`}  />
            <ProjectCard link='https://getgems.io/cookiepass' top={-4} icon={icon3} imgWidth={8.18} imgHeight={9} title='NFT' about={` By purchasing an NFT collection, you get a pass to a private chat. With the help of the bot, you can check the availability of your NFT.`}  />
            </div>  
    </div>
  )
}
