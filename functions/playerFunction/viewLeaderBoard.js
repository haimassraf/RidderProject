import { getAllPlayers } from "./getAllPlayers.js";

export async function viewLeaderBoard() {
   const allPlayers = await getAllPlayers();

   allPlayers.sort((a, b) => {
      if (a.highScore === undefined) return 1;
      if (b.highScore === undefined) return -1;
      return b.highScore - a.highScore;
   });

   console.log("\t=== Leader Board ===");
   for (let i = 0; i < allPlayers.length; i++) {
      const currentPlayer = allPlayers[i];
      const score = currentPlayer.highScore ? `with ${currentPlayer.highScore} seconds` : "NOT PLAYED";
      console.log(`${i + 1}. Player '${currentPlayer.name}' ${score}`);
   }
}
