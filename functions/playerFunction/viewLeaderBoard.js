import { getAllPlayers } from "./getAllPlayers.js";

export async function viewLeaderBoard() {
   try {
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

      const tableData = allPlayers.map((player) => ({
         Name: player.name,
         Score: player.highScore !== undefined && player.highScore !== null
            ? `${player.highScore} seconds`
            : 'NOT PLAYED'
      }));

      console.log("\n=== Leader Board ===");
      console.table(tableData);
   } catch (err) {
      console.log("Error to view leader board: ", err.message);
   }
}
