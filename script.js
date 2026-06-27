const url = "https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/40381/hscard";

const options = {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        "x-rapidapi-host": "cricbuzz-cricket.p.rapidapi.com",
        "x-rapidapi-key": "YOUR_NEW_API_KEY"
    }
};

async function loadScore() {
    try {
        const response = await fetch(url, options);
        const result = await response.json();

        console.log(result);

        document.getElementById("liveScore").innerHTML =
            "<pre>" + JSON.stringify(result, null, 2) + "</pre>";

    } catch (error) {
        console.error(error);
        document.getElementById("liveScore").innerHTML =
            "Failed to load score.";
    }
}

loadScore();
