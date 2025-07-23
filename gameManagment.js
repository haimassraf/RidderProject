import { chooseAndGetRiddlesByLevel } from "./functions/riddlesFunction/chooseAndGetRiddlesByLevel.js";
import { Player } from './models/player.js';
import { getToken } from './functions/auth/authToken.js';
import jwt from 'jsonwebtoken';
import { getPlayerById } from './functions/playerFunction/getPlayerById.js';


export async function startGame(guest = false) {
    try {
        let currentPlayer;
        if (!guest) {
            const token = getToken();
            const payload = jwt.decode(token);
            if (!payload || !payload.id) {
                console.log("Token is missing ID");
                return null;
            }
            currentPlayer = await getPlayerById(payload.id);
            console.log(`Welcome Back '${currentPlayer.name}'\nYour current high score is: '${currentPlayer.highScore || 'Not Play'}'`)
        } else {
            currentPlayer = new Player(0, 'Guest')
        }
        const allRiddles = await chooseAndGetRiddlesByLevel();
        if (allRiddles.length > 0) {
            for (const riddle of allRiddles) {
                await riddle.ask();
                currentPlayer.RecordTime(riddle.start, riddle.end);
            }
            if (!guest) await currentPlayer.HighScoreRendel();
            currentPlayer.ShowStatus();
        }
        else {
            console.log("Problem with get riddles")
        }
        console.log("Have a Nice Day.")
    } catch (err) {
        console.log("Error: ", err.message)
    }
}
