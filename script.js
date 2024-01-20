const targetNumber = Math.floor(Math.random() * 20) + 1
let attempts = 0;

function startGuessingGame() {
    while(true) {
        let userGuess = parseInt(prompt("გამოიცანით რიცხვი (1-დან 20-დმე)"))

        if (!isNaN(userGuess) && userGuess >= 1 && userGuess <= 20 ) {
            attempts++

            if (userGuess === targetNumber) {
                document.write(`<p>გილოცავთ, თქვენ ჩაწერილი რიცხვი ${targetNumber}, არის სწორი. თქვენ ამისთვის დაგჭირდათ ${attempts} მცდელობა.</p>`);
                break;
            }   else {
                let minishneba = 
                 userGuess < targetNumber 
                ? "უფრო დიდი რიცხვი სცადე" 
                : "უფრო პატარა რიცხვი სცადე" 
                alert (`${minishneba}`);
            }

        } else {
            alert ("გთხოვთ შეიყვანოთ რიცხვი 1-დან 20-მდე")
        }
    }
}

startGuessingGame()