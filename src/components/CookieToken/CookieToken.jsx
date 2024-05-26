import React from 'react'
import './CookieToken.css'
import stats from '../../assets/stats.png'

export default function CookieToken() {
  return (
    <div className='cookie-token' id='cookie'>
      <h3 className='cookie-title'>CookieToken</h3>
      <div className="stats-section">
        <div className="stats">
          <img src={stats} alt="stats" className='stats-img' />
          <ul className='stat-list'>
            <li className='stat-list-item'><div style={{ background: '#05D0C4' }} className="round"></div>Fairlaunch (35%)</li>
            <li className='stat-list-item'><div style={{ background: '#FFDF8B' }} className="round"></div>DEXs listing (22.05%)</li>
            <li className='stat-list-item'><div style={{ background: '#AF7EFF' }} className="round"></div>Airdrop (10%)</li>
            <li className='stat-list-item'><div style={{ background: '#F382D4' }} className="round"></div>Team (22.95%)</li>
            <li className='stat-list-item'><div style={{ background: '#FFDF8C' }} className="round"></div>Reserve (10%)</li>
          </ul>
        </div>
        <p className="stats-text"> Tokens allocated to the team will also be spent on development and promotion. And the tokens allocated to Reserve will either be burned or added to the liquidity.</p>
        </div>
    </div>
  )
}
