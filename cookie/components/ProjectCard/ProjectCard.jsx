import React from 'react'
import './ProjectCard.css'

export default function ProjectCard({icon, title, about, imgWidth, imgHeight, top, link}) {
  return (
    <a href={link} className='card-link'>
         <div className='project-card'>
         <img src={icon} className='project-img' alt="card" style={{ width: `${imgWidth}em`, height: `${imgHeight}em`,top: `${top}em` }} />
         <p className="project-name">{title}</p>
         {about.split('\n').map((line, index) => (
          <p className='project-about' key={index}>{line}</p>
        ))}
    </div>
    </a>
  )
}
