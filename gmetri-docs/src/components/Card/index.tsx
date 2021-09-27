/**
 * @format
 */
import React from 'react';
import './index.css'

interface Props {
  heading: string;
  desc: string;
  link?: string;
  badge?: string;
  onClick?: (e: any) => void;
}

export default function Card({ heading, desc, badge, link, onClick = () => {}}: Props) {
  return (
    <a href={link ? link : 'javascript:void(0)'} onClick={onClick} className='tutorial_card'>
      <div className={`tutorial_card__wrapper ${badge ? 'tutorial_card__wrapper_active' : ''}`}>
        {
          badge && <div className='tutorial_card__badge'>{badge}</div>
        }
        <div className="tutorial_card__heading">{heading}</div>
      </div>
      <div className="tutorial_card__desc">{desc}</div>
    </a>
  );
}