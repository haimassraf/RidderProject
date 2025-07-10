import { getAllPlayers } from "./getAllPlayers.js";
import { getPlayerByName } from "./getPlayerById.js";
import { updateHighScore } from "./updateHighScore.js";

export async function viewLeaderBoard() {
   const play = await getPlayerByName('haim')
   console.log(play);
   
   
}