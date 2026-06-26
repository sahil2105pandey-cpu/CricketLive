document.addEventListener("DOMContentLoaded", function () {

    const matches = [
        {
            team1: "India",
            team2: "Australia",
            score: "185/4 (18.2)"
        },
        {
            team1: "England",
            team2: "Pakistan",
            score: "120/2 (12.4)"
        },
        {
            team1: "South Africa",
            team2: "New Zealand",
            score: "210/6 (20)"
        }
    ];

    let output = "";

    matches.forEach(function(match) {
        output += `
        <div class="match">
            <h3>${match.team1} vs ${match.team2}</h3>
            <p>${match.score}</p>
        </div>
        `;
    });

    const matchesDiv = document.getElementById("matches");

    if (matchesDiv) {
        matchesDiv.innerHTML = output;
    }

});