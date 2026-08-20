import "./styles.css";
import { showToast } from "./components/ui/Toast.js";

import Home from "./pages/Home/Home.js";
import CreateTournament from "./pages/CreateTournament/CreateTournament.js";
import TournamentName from "./pages/TournamentName/TournamentName.js";
import TeamConfiguration from "./pages/TeamConfiguration/TeamConfiguration.js";
import TournamentDetails from "./pages/TournamentDetails/TournamentDetails.js";

const app = document.querySelector("#app");


// ==================================================
// GLOBAL APPLICATION SHELL
// ==================================================

app.innerHTML = `
    <div class="app-shell">

        <header class="global-header">

            <button
                class="brand"
                id="home-button"
                type="button"
                aria-label="GameGround home"
            >
                <span class="brand-name">GAMEGROUND</span>
            </button>

            <button
                class="menu-button"
                type="button"
                aria-label="Open menu"
                aria-expanded="false"
                aria-controls="global-menu"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            <nav
                id="global-menu"
                class="global-menu"
                aria-hidden="true"
            >

                <button
                    type="button"
                    class="menu-item"
                    data-page="create"
                >
                    Create Tournament
                </button>

                <button
                    type="button"
                    class="menu-item"
                >
                    Continue Tournament
                </button>

                <button
                    type="button"
                    class="menu-item"
                >
                    Schedule
                </button>

                <button
                    type="button"
                    class="menu-item"
                >
                    Points Table
                </button>

                <button
                    type="button"
                    class="menu-item"
                >
                    Matches
                </button>

                <button
                    type="button"
                    class="menu-item"
                >
                    Player Entry
                </button>

                <button
                    type="button"
                    class="menu-item"
                >
                    Player Analysis
                </button>

                <button
                    type="button"
                    class="menu-item"
                >
                    Playoffs
                </button>

                <button
                    type="button"
                    class="menu-item"
                >
                    PDF Maker
                </button>

            </nav>

        </header>

        <div id="page-root"></div>

    </div>
`;


// ==================================================
// GLOBAL ELEMENTS
// ==================================================

const pageRoot = document.querySelector("#page-root");
const menuButton = document.querySelector(".menu-button");
const globalMenu = document.querySelector("#global-menu");
const homeButton = document.querySelector("#home-button");


// ==================================================
// MENU
// ==================================================

function closeMenu() {

    menuButton.setAttribute(
        "aria-expanded",
        "false"
    );

    globalMenu.setAttribute(
        "aria-hidden",
        "true"
    );

    globalMenu.classList.remove("is-open");
    menuButton.classList.remove("is-active");
}


function openMenu() {

    menuButton.setAttribute(
        "aria-expanded",
        "true"
    );

    globalMenu.setAttribute(
        "aria-hidden",
        "false"
    );

    globalMenu.classList.add("is-open");
    menuButton.classList.add("is-active");
}


menuButton.addEventListener("click", () => {

    const isOpen =
        menuButton.getAttribute("aria-expanded") === "true";

    if (isOpen) {
        closeMenu();
    } else {
        openMenu();
    }

});


// ==================================================
// PAGE RENDERING
// ==================================================

function showHome() {

    pageRoot.innerHTML = Home();

    closeMenu();

    setupHomeActions();
}


function showCreateTournament() {

    pageRoot.innerHTML = CreateTournament();

    closeMenu();

    setupCreateTournament();
}


function showTournamentName() {

    pageRoot.innerHTML = TournamentName();

    closeMenu();

    setupTournamentName();
}


function showTeamConfiguration() {

    pageRoot.innerHTML = TeamConfiguration();

    closeMenu();

    setupTeamConfiguration();
}


function showTournamentDetails() {

    pageRoot.innerHTML = TournamentDetails();

    closeMenu();

    setupTournamentDetails();
}


// ==================================================
// HOME
// ==================================================

function setupHomeActions() {

    const createButton =
        document.querySelector(
            "#create-tournament-button"
        );

    if (createButton) {

        createButton.addEventListener(
            "click",
            () => {
                showCreateTournament();
            }
        );

    }

}


// ==================================================
// CREATE TOURNAMENT — SELECT SPORT
// ==================================================

function setupCreateTournament() {

    const backButton =
        document.querySelector(
            "#create-back-button"
        );

    const sportCards =
        document.querySelectorAll(
            ".sport-card"
        );

    const continueButton =
        document.querySelector(
            "#sport-continue-button"
        );


    // ----------------------------------------------
    // BACK
    // ----------------------------------------------

    if (backButton) {

        backButton.addEventListener(
            "click",
            () => {
                showHome();
            }
        );

    }


    // ----------------------------------------------
    // SPORT SELECTION
    // ----------------------------------------------

    let selectedSport =
        localStorage.getItem(
            "gameground_selected_sport"
        ) || null;


    sportCards.forEach((card) => {

        card.addEventListener(
            "click",
            () => {

                sportCards.forEach((item) => {

                    item.classList.remove(
                        "is-selected"
                    );

                });

                card.classList.add(
                    "is-selected"
                );

                selectedSport =
                    card.dataset.sportId;

                localStorage.setItem(
                    "gameground_selected_sport",
                    selectedSport
                );

                if (continueButton) {

                    continueButton.disabled =
                        false;

                }

            }
        );

    });


    // ----------------------------------------------
    // RESTORE SPORT
    // ----------------------------------------------

    if (selectedSport) {

        const selectedCard =
            document.querySelector(
                `[data-sport-id="${selectedSport}"]`
            );

        if (selectedCard) {

            selectedCard.classList.add(
                "is-selected"
            );

            if (continueButton) {

                continueButton.disabled =
                    false;

            }

        }

    }


    // ----------------------------------------------
    // CONTINUE
    // ----------------------------------------------

    if (continueButton) {

        continueButton.addEventListener(
            "click",
            () => {

                if (!selectedSport) {
                    return;
                }

                localStorage.setItem(
                    "gameground_selected_sport",
                    selectedSport
                );

                showTournamentName();

            }
        );

    }

}


// ==================================================
// TOURNAMENT NAME
// ==================================================

function setupTournamentName() {

    const input =
        document.querySelector(
            "#tournament-name-input"
        );

    const error =
        document.querySelector(
            "#tournament-name-error"
        );

    const backButton =
        document.querySelector(
            "#tournament-name-back-button"
        );

    const continueButton =
        document.querySelector(
            "#tournament-name-continue-button"
        );


    // ----------------------------------------------
    // BACK
    // ----------------------------------------------

    if (backButton) {

        backButton.addEventListener(
            "click",
            () => {
                showCreateTournament();
            }
        );

    }


    // ----------------------------------------------
    // CONTINUE
    // ----------------------------------------------

    if (continueButton) {

        continueButton.addEventListener(
            "click",
            () => {

                if (!input) {
                    return;
                }

                const name =
                    input.value.trim();


                if (!name) {

                    if (error) {

                        error.textContent =
                            "Please enter a tournament name.";

                    }

                    input.focus();

                    return;
                }


                localStorage.setItem(
                    "gameground_tournament_name",
                    name
                );


                if (error) {
                    error.textContent = "";
                }


                showToast(
                    "Tournament name saved",
                    "success"
                );


                showTeamConfiguration();

            }
        );

    }


    // ----------------------------------------------
    // CLEAR ERROR
    // ----------------------------------------------

    if (input) {

        input.addEventListener(
            "input",
            () => {

                if (
                    error &&
                    input.value.trim()
                ) {

                    error.textContent = "";

                }

            }
        );

    }

}


// ==================================================
// TEAM CONFIGURATION
// ==================================================

function setupTeamConfiguration() {

    const fields =
        document.querySelector(
            "#team-fields"
        );

    const countDisplay =
        document.querySelector(
            "#team-count-display"
        );

    const increaseButton =
        document.querySelector(
            "#increase-team-button"
        );

    const decreaseButton =
        document.querySelector(
            "#decrease-team-button"
        );

    const addTeamButton =
        document.querySelector(
            "#add-team-button"
        );

    const validationMessage =
        document.querySelector(
            "#team-validation-message"
        );

    const backButton =
        document.querySelector(
            "#team-configuration-back-button"
        );

    const continueButton =
        document.querySelector(
            "#team-configuration-continue-button"
        );


    if (!fields) {
        return;
    }


    // ----------------------------------------------
    // LOAD SAVED TEAMS
    // ----------------------------------------------

    let teams = [];

    try {

        teams =
            JSON.parse(
                localStorage.getItem(
                    "gameground_team_names"
                ) || "[]"
            );

    } catch {

        teams = [];

    }


    if (!Array.isArray(teams) || teams.length < 2) {

        teams = [
            "Team 1",
            "Team 2"
        ];

    } else {

        teams = [...teams];

    }


    // ----------------------------------------------
    // RENDER TEAMS
    // ----------------------------------------------

    function renderTeams() {

        countDisplay.textContent =
            teams.length;


        fields.innerHTML =
            teams
                .map(
                    (team, index) => `

                        <div class="team-field">

                            <span class="team-number">
                                ${index + 1}
                            </span>

                            <input
                                type="text"
                                class="team-name-input"
                                data-team-index="${index}"
                                value="${escapeHtml(team)}"
                                placeholder="Enter team name"
                                maxlength="60"
                            />

                            <button
                                type="button"
                                class="remove-team-button"
                                data-remove-index="${index}"
                                aria-label="Remove team ${index + 1}"
                            >
                                ×
                            </button>

                        </div>

                    `
                )
                .join("");


        attachInputEvents();
        attachRemoveEvents();

        updateRemoveButtons();

    }


    // ----------------------------------------------
    // ESCAPE HTML
    // ----------------------------------------------

    function escapeHtml(value) {

        return String(value)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");

    }


    // ----------------------------------------------
    // INPUT EVENTS
    // ----------------------------------------------

    function attachInputEvents() {

        const inputs =
            fields.querySelectorAll(
                ".team-name-input"
            );


        inputs.forEach((input) => {

            input.addEventListener(
                "input",
                () => {

                    const index =
                        Number(
                            input.dataset.teamIndex
                        );

                    teams[index] =
                        input.value;

                    validationMessage.textContent =
                        "";

                }
            );

        });

    }


    // ----------------------------------------------
    // REMOVE EVENTS
    // ----------------------------------------------

    function attachRemoveEvents() {

        const buttons =
            fields.querySelectorAll(
                ".remove-team-button"
            );


        buttons.forEach((button) => {

            button.addEventListener(
                "click",
                () => {

                    const index =
                        Number(
                            button.dataset.removeIndex
                        );


                    if (teams.length <= 2) {

                        validationMessage.textContent =
                            "Minimum 2 teams are required.";

                        return;

                    }


                    teams.splice(
                        index,
                        1
                    );


                    validationMessage.textContent =
                        "";

                    renderTeams();

                }
            );

        });

    }


    // ----------------------------------------------
    // REMOVE BUTTON STATE
    // ----------------------------------------------

    function updateRemoveButtons() {

        const buttons =
            fields.querySelectorAll(
                ".remove-team-button"
            );


        buttons.forEach((button) => {

            button.disabled =
                teams.length <= 2;

        });

    }


    // ----------------------------------------------
    // INCREASE
    // ----------------------------------------------

    if (increaseButton) {

        increaseButton.addEventListener(
            "click",
            () => {

                teams.push(
                    `Team ${teams.length + 1}`
                );

                validationMessage.textContent =
                    "";

                renderTeams();

            }
        );

    }


    // ----------------------------------------------
    // DECREASE
    // ----------------------------------------------

    if (decreaseButton) {

        decreaseButton.addEventListener(
            "click",
            () => {

                if (teams.length <= 2) {

                    validationMessage.textContent =
                        "Minimum 2 teams are required.";

                    return;

                }


                teams.pop();

                validationMessage.textContent =
                    "";

                renderTeams();

            }
        );

    }


    // ----------------------------------------------
    // ADD TEAM
    // ----------------------------------------------

    if (addTeamButton) {

        addTeamButton.addEventListener(
            "click",
            () => {

                teams.push(
                    `Team ${teams.length + 1}`
                );

                validationMessage.textContent =
                    "";

                renderTeams();


                const inputs =
                    fields.querySelectorAll(
                        ".team-name-input"
                    );


                const lastInput =
                    inputs[inputs.length - 1];


                if (lastInput) {

                    lastInput.focus();

                }

            }
        );

    }


    // ----------------------------------------------
    // BACK
    // ----------------------------------------------

    if (backButton) {

        backButton.addEventListener(
            "click",
            () => {

                showTournamentName();

            }
        );

    }


    // ----------------------------------------------
    // CONTINUE
    // ----------------------------------------------

    if (continueButton) {

        continueButton.addEventListener(
            "click",
            () => {

                const names =
                    teams.map(
                        (team) =>
                            team.trim()
                    );


                // Empty names

                if (
                    names.some(
                        (name) => !name
                    )
                ) {

                    validationMessage.textContent =
                        "Every team must have a name.";

                    return;

                }


                // Duplicate names

                const normalized =
                    names.map(
                        (name) =>
                            name.toLowerCase()
                    );


                if (
                    new Set(normalized).size !==
                    normalized.length
                ) {

                    validationMessage.textContent =
                        "Team names must be unique.";

                    return;

                }


                // SAVE

                localStorage.setItem(
                    "gameground_team_names",
                    JSON.stringify(names)
                );


                validationMessage.textContent =
                    "";


                showToast(
                    "Team configuration saved",
                    "success"
                );


                showTournamentDetails();

            }
        );

    }


    // ----------------------------------------------
    // INITIAL RENDER
    // ----------------------------------------------

    renderTeams();

}


// ==================================================
// TOURNAMENT DETAILS
// ==================================================

function setupTournamentDetails() {

    const placesContainer =
        document.querySelector(
            "#places-container"
        );

    const addPlaceButton =
        document.querySelector(
            "#add-place-button"
        );

    const validationMessage =
        document.querySelector(
            "#place-validation-message"
        );

    const decreaseGroundButton =
        document.querySelector(
            "#decrease-ground-matches"
        );

    const increaseGroundButton =
        document.querySelector(
            "#increase-ground-matches"
        );

    const groundMatchCount =
        document.querySelector(
            "#ground-match-count"
        );

    const backButton =
        document.querySelector(
            "#tournament-details-back-button"
        );

    const skipButton =
        document.querySelector(
            "#tournament-details-skip-button"
        );

    const continueButton =
        document.querySelector(
            "#tournament-details-continue-button"
        );


    if (!placesContainer) {
        return;
    }


    // ----------------------------------------------
    // LOAD SAVED PLACES
    // ----------------------------------------------

    let places = [];

    try {

        places =
            JSON.parse(
                localStorage.getItem(
                    "gameground_places"
                ) || "[]"
            );

    } catch {

        places = [];

    }


    if (!Array.isArray(places)) {
        places = [];
    }


    // ----------------------------------------------
    // LOAD SCHEDULING
    // ----------------------------------------------

    let scheduling =
        localStorage.getItem(
            "gameground_location_scheduling"
        ) || "random";


    // ----------------------------------------------
    // LOAD MATCHES PER GROUND
    // ----------------------------------------------

    let matchesPerGround =
        Number(
            localStorage.getItem(
                "gameground_matches_per_ground"
            ) || "1"
        );


    if (
        !Number.isFinite(matchesPerGround) ||
        matchesPerGround < 1
    ) {

        matchesPerGround = 1;

    }


    // ----------------------------------------------
    // RENDER PLACES
    // ----------------------------------------------

    function renderPlaces() {

        placesContainer.innerHTML =
            places
                .map(
                    (place, index) => `

                        <div class="place-row">

                            <span class="place-number">
                                ${index + 1}
                            </span>

                            <input
                                type="text"
                                class="place-input"
                                data-place-index="${index}"
                                value="${escapeHtml(place)}"
                                placeholder="Enter place / ground name"
                                maxlength="100"
                            />

                            <button
                                type="button"
                                class="remove-place-button"
                                data-remove-index="${index}"
                                aria-label="Remove place ${index + 1}"
                            >
                                ×
                            </button>

                        </div>

                    `
                )
                .join("");


        attachPlaceEvents();

    }


    // ----------------------------------------------
    // ESCAPE HTML
    // ----------------------------------------------

    function escapeHtml(value) {

        return String(value)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");

    }


    // ----------------------------------------------
    // PLACE EVENTS
    // ----------------------------------------------

    function attachPlaceEvents() {

        const inputs =
            placesContainer.querySelectorAll(
                ".place-input"
            );


        inputs.forEach((input) => {

            input.addEventListener(
                "input",
                () => {

                    const index =
                        Number(
                            input.dataset.placeIndex
                        );

                    places[index] =
                        input.value;

                    validationMessage.textContent =
                        "";

                }
            );

        });


        const removeButtons =
            placesContainer.querySelectorAll(
                ".remove-place-button"
            );


        removeButtons.forEach((button) => {

            button.addEventListener(
                "click",
                () => {

                    const index =
                        Number(
                            button.dataset.removeIndex
                        );


                    places.splice(
                        index,
                        1
                    );


                    validationMessage.textContent =
                        "";

                    renderPlaces();

                }
            );

        });

    }


    // ----------------------------------------------
    // ADD PLACE
    // ----------------------------------------------

    if (addPlaceButton) {

        addPlaceButton.addEventListener(
            "click",
            () => {

                places.push(
                    `Place ${places.length + 1}`
                );

                validationMessage.textContent =
                    "";

                renderPlaces();


                const inputs =
                    placesContainer.querySelectorAll(
                        ".place-input"
                    );


                const lastInput =
                    inputs[inputs.length - 1];


                if (lastInput) {
                    lastInput.focus();
                }

            }
        );

    }


    // ----------------------------------------------
    // MATCHES PER GROUND
    // ----------------------------------------------

    function updateGroundCount() {

        groundMatchCount.textContent =
            matchesPerGround;

    }


    if (increaseGroundButton) {

        increaseGroundButton.addEventListener(
            "click",
            () => {

                matchesPerGround += 1;

                updateGroundCount();

            }
        );

    }


    if (decreaseGroundButton) {

        decreaseGroundButton.addEventListener(
            "click",
            () => {

                if (matchesPerGround <= 1) {
                    return;
                }

                matchesPerGround -= 1;

                updateGroundCount();

            }
        );

    }


    // ----------------------------------------------
    // SCHEDULING OPTIONS
    // ----------------------------------------------

    const schedulingInputs =
        document.querySelectorAll(
            'input[name="location-scheduling"]'
        );


    schedulingInputs.forEach((input) => {

        if (input.value === scheduling) {

            input.checked = true;

        }


        input.addEventListener(
            "change",
            () => {

                if (input.checked) {

                    scheduling =
                        input.value;

                }

            }
        );

    });


    // ----------------------------------------------
    // VALIDATE PLACES
    // ----------------------------------------------

    function validatePlaces() {

        const cleaned =
            places.map(
                (place) =>
                    String(place).trim()
            );


        // No place

        if (cleaned.length === 0) {

            validationMessage.textContent =
                "Add at least one conducting place.";

            return null;

        }


        // Empty place

        if (
            cleaned.some(
                (place) => !place
            )
        ) {

            validationMessage.textContent =
                "Every place must have a name.";

            return null;

        }


        // Duplicate place

        const normalized =
            cleaned.map(
                (place) =>
                    place.toLowerCase()
            );


        if (
            new Set(normalized).size !==
            normalized.length
        ) {

            validationMessage.textContent =
                "Place names must be unique.";

            return null;

        }


        return cleaned;

    }


    // ----------------------------------------------
    // SAVE
    // ----------------------------------------------

    function saveTournamentDetails() {

        const cleanedPlaces =
            validatePlaces();


        if (!cleanedPlaces) {
            return false;
        }


        localStorage.setItem(
            "gameground_places",
            JSON.stringify(
                cleanedPlaces
            )
        );


        localStorage.setItem(
            "gameground_location_scheduling",
            scheduling
        );


        localStorage.setItem(
            "gameground_matches_per_ground",
            String(
                matchesPerGround
            )
        );


        validationMessage.textContent =
            "";


        return true;

    }


    // ----------------------------------------------
    // BACK
    // ----------------------------------------------

    if (backButton) {

        backButton.addEventListener(
            "click",
            () => {

                showTeamConfiguration();

            }
        );

    }


    // ----------------------------------------------
    // SKIP
    // ----------------------------------------------

    if (skipButton) {

        skipButton.addEventListener(
            "click",
            () => {

                localStorage.setItem(
                    "gameground_tournament_details_skipped",
                    "true"
                );


                showToast(
                    "Tournament details skipped",
                    "success"
                );


                console.log(
                    "Tournament details skipped"
                );

            }
        );

    }


    // ----------------------------------------------
    // SAVE & CONTINUE
    // ----------------------------------------------

    if (continueButton) {

        continueButton.addEventListener(
            "click",
            () => {

                const saved =
                    saveTournamentDetails();


                if (!saved) {
                    return;
                }


                localStorage.setItem(
                    "gameground_tournament_details_skipped",
                    "false"
                );


                showToast(
                    "Tournament details saved",
                    "success"
                );


                console.log(
                    "Tournament details saved"
                );


                // NEXT PHASE WILL CONTINUE HERE

            }
        );

    }


    // ----------------------------------------------
    // INITIAL UI
    // ----------------------------------------------

    updateGroundCount();

    renderPlaces();

}


// ==================================================
// MENU ITEMS
// ==================================================

const menuItems =
    document.querySelectorAll(
        ".menu-item"
    );


menuItems.forEach((item) => {

    item.addEventListener(
        "click",
        () => {

            const page =
                item.dataset.page;


            if (page === "create") {

                showCreateTournament();

                return;

            }


            closeMenu();

        }
    );

});


// ==================================================
// HOME BUTTON
// ==================================================

homeButton.addEventListener(
    "click",
    () => {

        showHome();

    }
);


// ==================================================
// START APPLICATION
// ==================================================

showHome();


setTimeout(
    () => {

        showToast(
            "GAMEGROUND is ready",
            "success"
        );

    },
    500
);