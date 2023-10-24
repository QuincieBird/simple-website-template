// Save the game state
function saveGame() {
    try {
        // Create a gameData object to store player and character data
        const gameData = {
            playerData,
            character,
        };

        // Serialize the gameData to a JSON string
        const gameDataString = JSON.stringify(gameData);

        // Save the gameData string to localStorage
        localStorage.setItem("gameData", gameDataString);
        console.log("Game saved successfully.");
    } catch (error) {
        console.error("Failed to save the game:", error);
    }
}

// Load the game state
function loadGame() {
    try {
        // Get the gameData string from localStorage
        const gameDataString = localStorage.getItem("gameData");

        if (gameDataString) {
            // Parse the gameData string to a JavaScript object
            const gameData = JSON.parse(gameDataString);

            // Update playerData and character with the loaded data
            playerData = gameData.playerData;
            character = gameData.character;

            console.log("Game loaded successfully.");
        } else {
            console.log("No saved game data found.");
        }
    } catch (error) {
        console.error("Failed to load the game:", error);
    }
}
