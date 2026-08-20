import "./TournamentName.css";

export default function TournamentName() {
    const savedName =
        localStorage.getItem("gameground_tournament_name") || "";

    return `
        <main class="tournament-name-page">

            <section class="tournament-name-header">

                <p class="create-eyebrow">
                    TOURNAMENT CREATION
                </p>

                <h1>Tournament Name</h1>

                <p class="create-description">
                    Give your tournament a name to continue.
                </p>

            </section>

            <section class="tournament-name-form">

                <label for="tournament-name-input">
                    Tournament Name
                </label>

                <input
                    id="tournament-name-input"
                    type="text"
                    placeholder="Enter tournament name"
                    value="${savedName}"
                    maxlength="100"
                    autocomplete="off"
                />

                <p
                    id="tournament-name-error"
                    class="tournament-name-error"
                    aria-live="polite"
                ></p>

            </section>

            <section class="create-navigation">

                <button
                    type="button"
                    class="create-back-button"
                    id="tournament-name-back-button"
                >
                    Back
                </button>

                <button
                    type="button"
                    class="create-continue-button"
                    id="tournament-name-continue-button"
                >
                    Continue <span>→</span>
                </button>

            </section>

        </main>
    `;
}