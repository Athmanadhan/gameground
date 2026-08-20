import "./CreateTournament.css";
import { sports } from "../../data/sports.js";

export default function CreateTournament() {
    const categories = [
        {
            id: "outdoor",
            title: "Outdoor Sports",
        },
        {
            id: "indoor",
            title: "Indoor Sports",
        },
        {
            id: "board",
            title: "Board Games",
        },
    ];

    const renderSports = (category) => {
        return sports
            .filter((sport) => sport.category === category)
            .map(
                (sport) => `
                    <button
                        type="button"
                        class="sport-card"
                        data-sport-id="${sport.id}"
                    >
                        <span class="sport-icon">
                            ${sport.icon}
                        </span>

                        <span class="sport-name">
                            ${sport.name}
                        </span>
                    </button>
                `
            )
            .join("");
    };

    return `
        <main class="create-tournament-page">

            <section class="create-tournament-header">

                <p class="create-eyebrow">
                    TOURNAMENT CREATION
                </p>

                <h1>Select Sport</h1>

                <p class="create-description">
                    Choose the sport or game for your tournament.
                </p>

            </section>


            <section class="sports-selection">

                ${categories
                    .map(
                        (category) => `
                            <section class="sport-category">

                                <div class="sport-category-header">
                                    <h2>
                                        ${category.title}
                                    </h2>
                                </div>

                                <div class="sport-grid">
                                    ${renderSports(category.id)}
                                </div>

                            </section>
                        `
                    )
                    .join("")}

            </section>


            <section class="create-navigation">

                <button
                    type="button"
                    class="create-back-button"
                    id="create-back-button"
                >
                    Back
                </button>

                <button
                    type="button"
                    class="create-continue-button"
                    id="sport-continue-button"
                    disabled
                >
                    Continue
                    <span>→</span>
                </button>

            </section>

        </main>
    `;
}

