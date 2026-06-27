const url = "https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/40381/hscard";

const options = {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        "x-rapidapi-host": "cricbuzz-cricket.p.rapidapi.com",
        "x-rapidapi-key": "c61def0a40msh359226a0537c402p13f402jsn2b2815a36304"
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
