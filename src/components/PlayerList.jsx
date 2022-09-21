import Avatar from "./Avatar";
import AddPlayerButton from "./AddPlayerButton";
import { useState } from "react";

const initialPlayers = [
  {
    isLead: false,
  },
  {
    isLead: true,
  },
  {
    isLead: false,
  }
]

function PlayerList() {
  const [players, setPlayers] = useState(initialPlayers)
  
  console.log(players)

  function makeLeader(clickedIndex) {
    setPlayers(players.map((player, index) => {
      return {
        ...player,
        isLead: clickedIndex === index
      }
    }))
  }

  return (
    <div style={{
      width: "80%",
      display: "flex",
    }}>
      {
        players.map((player, index) => {
          return (
            <Avatar
              key={index}
              isLead={player.isLead}
              onBecomeLead={() => makeLeader(index)}
            />
          )
        })
      }
      <AddPlayerButton />
    </div>
  )
}

export default PlayerList
