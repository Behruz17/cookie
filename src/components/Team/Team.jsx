import React from 'react'
import './Team.css'
import team1 from '../../assets/team1.png'
import team2 from '../../assets/team2.png'
import team3 from '../../assets/team3.png'
import team4 from '../../assets/team4.png'
import TeamMember from '../TeamMember/TeamMember'

export default function Team() {
  return (
    <div className='team-container' id='team'>
    <h2 className='team-title'>Team</h2>
    <p className='team-desc'>Our team has been working on Cookie products since the beginning. And we strive to develop and increase the audience of TON and our project.</p>
    <div className="members">
        <TeamMember img={team1} name='Stefan' job='Founder' />
        <TeamMember img={team2} name='Artem' job='FullStack Web and MiniApp Developer' />
        <TeamMember img={team3} name='Shon Ness' job='Python Back-end and TON Developer' />
        <TeamMember img={team4} name='Mary' job='Artist and designer' />
    </div>
    <a href="https://t.me/cookiestokens">
    <button className='telegram-button'>Our Telegram</button>
    </a>
    </div>
  )
}
