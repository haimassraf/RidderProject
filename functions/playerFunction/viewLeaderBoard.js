import { getAllPlayers } from "./getAllPlayers.js";

export async function viewLeaderBoard() {
   const allPlayers = await getAllPlayers();
   allPlayers.sort((a, b) => a.highScore - b.highScore);
   console.log("\t=== Leader Board ===");
   for(let i = 0; i < allPlayers.length; i ++){
      const currentPlayer = allPlayers[i];
      console.log(`${i + 1}. Player '${currentPlayer.name}' with ${currentPlayer.highScore || "NOT PLAY"} secound`)
   }
}