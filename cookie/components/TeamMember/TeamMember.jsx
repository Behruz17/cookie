import React from 'react'
import './TeamMember.css'

export default function TeamMember({img, name, job}) {
  return (
    <div className='team-member'>
        <img src={img} alt="ava" />
        <p className='name'>{name}</p>
        <p className="job">{job}</p>
    </div>
  )
}
