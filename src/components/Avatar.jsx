import {useState} from "react";

function Avatar() {
  const possibleColors = ["black", "red", "green", "blue", "yellow", "hotpink"]

  const [isLead, setLead] = useState(false)
  const [color, setColor] = useState(possibleColors[0])

  function toggleColor() {
    setColor(possibleColors[(possibleColors.indexOf(color) + 1) % possibleColors.length])
  }

  function toggleLead() {
    setLead(!isLead)
  }

  return (
    <>
      <button onClick={toggleColor}>
        {isLead ? <PartyLeadIcon color={color} /> : <PartyMemberIcon color={color} />}
      </button>
      <button onClick={toggleLead}>Make Partylead</button>
    </>
)
}

function PartyLeadIcon({color = "currentColor"}) {
  return (
    <svg style={{
      height: "24px",
      width: "24px",
    }} viewBox="0 0 24 24">
      <path fill={color} d="M15,14C12.33,14 7,15.33 7,18V20H23V18C23,15.33 17.67,14 15,14M15,12A4,4 0 0,0 19,8A4,4 0 0,0 15,4A4,4 0 0,0 11,8A4,4 0 0,0 15,12M5,13.28L7.45,14.77L6.8,11.96L9,10.08L6.11,9.83L5,7.19L3.87,9.83L1,10.08L3.18,11.96L2.5,14.77L5,13.28Z" />
    </svg>
  )
}

function PartyMemberIcon({color = "currentColor"}) {
  return (
    <svg style={{
      height: "24px",
      width: "24px",
    }} viewBox="0 0 24 24">
      <path fill={color} d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />
    </svg>
  )
}

export default Avatar
