const searchBox = document.getElementById("searchBox");
const categoryFilter = document.getElementById("categoryFilter");
const riskFilter = document.getElementById("riskFilter");
const sortSelect = document.getElementById("sortSelect");
const scamList = document.getElementById("scamList");
const scamDetails = document.getElementById("scamDetails");

function updateScams() {
    // Filter
    let filteredScams = scams.filter(s => {
        const searchMatch = s.name.toLowerCase().includes(searchBox.value.toLowerCase());
        const categoryMatch = categoryFilter.value === "All" || s.category === categoryFilter.value;
        const riskMatch = riskFilter.value === "All" || s.riskLevel === riskFilter.value;
        return searchMatch && categoryMatch && riskMatch;
    });

    // Sort
    const sortedScams = sortScams(filteredScams);

    // Render
    renderScams(sortedScams);
}

function sortScams(list) {
    const sortBy = sortSelect.value;
    let sorted = [...list];
    const riskOrder = { High: 1, Medium: 2, Low: 3 };

    switch(sortBy) {
        case "name-asc":
            sorted.sort((a,b) => a.name.localeCompare(b.name));
            break;
        case "name-desc":
            sorted.sort((a,b) => b.name.localeCompare(a.name));
            break;
        case "risk-high-low":
            sorted.sort((a,b) => riskOrder[a.riskLevel] - riskOrder[b.riskLevel]);
            break;
        case "risk-low-high":
            sorted.sort((a,b) => riskOrder[b.riskLevel] - riskOrder[a.riskLevel]);
            break;
    }
    return sorted;
}

function renderScams(list) {
    scamList.innerHTML = "";

    if (list.length === 0) {
        scamList.innerHTML = "<p>No scams found.</p>";
        return;
    }

    list.forEach(scam => {
        const div = document.createElement("div");
        div.className = "scam-card";

        // Background ONLY for scam list card
        div.style.backgroundImage = `url(${scam.bgImage})`;

        div.innerHTML = `
            <div class="scam-title">${scam.name}</div>
        `;

        div.onclick = () => showDetails(scam);
        scamList.appendChild(div);
    });
}


function showDetails(s) {
    scamDetails.innerHTML = `
        <h2>${s.name}</h2>
        <p><strong>Category:</strong> ${s.category}</p>
        <p><strong>Risk:</strong> ${s.riskLevel}</p>
        <p><strong>Details: </srtong>${s.details}</p>
        <p><strong>What to do:</strong> ${s.reportSteps}</p>
        <p><strong>Helpline:</strong> ${s.helpline}</p>
    `;
}

// Event listeners
searchBox.addEventListener("input", updateScams);
categoryFilter.addEventListener("change", updateScams);
riskFilter.addEventListener("change", updateScams);
sortSelect.addEventListener("change", updateScams);

// Initial render
updateScams();
