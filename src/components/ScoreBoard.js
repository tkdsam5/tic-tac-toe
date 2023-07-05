import React from 'react'

import "./ScoreBoard.css"

export const ScoreBoard = ({scores, xPlaying}) => {
    const { xScore, oScore} = scores;
  return (
    <div className="scoreboard">
        <span className={`scores x-score ${!xPlaying && "inactive"}`}>X - {xScore}</span>
        <span className={`scores o-score ${xPlaying && "inactive"}`}>O - {oScore}</span>
    </div>
  )
}
