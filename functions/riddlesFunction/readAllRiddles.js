export async function readAllRiddles() {
    try {
        const riddles = await fetch('http://localhost:3000/riddles').then((res) => res.json());
        console.log(riddles);
    }catch(err){
        console.log("Error: ", err.message);
    }
}