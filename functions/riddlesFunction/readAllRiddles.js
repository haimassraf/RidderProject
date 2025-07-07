export async function readAllRiddles() {
    try {
        const response = await fetch('http://localhost:3000/riddles');
        const riddles = await response.json();
        console.log(riddles);
    }catch(err){
        console.log("Error: ", err.message);
        
    }
}