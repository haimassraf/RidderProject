import { getAllPlayers } from "./getAllPlayers.js";

export async function viewLeaderBoard() {
   const allPlayers = await getAllPlayers();

   allPlayers.sort((a, b) => {
      const aScore = a.highScore;
      const bScore = b.highScore;

      const aValid = aScore !== undefined && aScore !== null;
      const bValid = bScore !== undefined && bScore !== null;

      if (!aValid && !bValid) return 0;
      if (!aValid) return 1;
      if (!bValid) return -1;
      return aScore - bScore;
   });

   console.log("\t=== Leader Board ===");
   for (let i = 0; i < allPlayers.length; i++) {
      const currentPlayer = allPlayers[i];
      const score = currentPlayer.highScore !== undefined && currentPlayer.highScore !== null
         ? `with ${currentPlayer.highScore} seconds`
         : "NOT PLAYED";
      console.log(`${i + 1}. Player '${currentPlayer.name}' ${score}`);
   }
}
