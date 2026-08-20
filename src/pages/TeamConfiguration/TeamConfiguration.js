import "./TeamConfiguration.css";

export default function TeamConfiguration() {
    return `
        <main class="team-configuration-page">

            <section class="team-configuration-header">
                <p class="create-eyebrow">TOURNAMENT CREATION</p>

                <h1>Team Configuration</h1>

                <p class="create-description">
                    Add the teams that will participate in your tournament.
                </p>
            </section>

            <section class="team-count-section">

                <div class="team-count-header">

                    <div>
                        <h2>Number of Teams</h2>
                        <p>Minimum 2 teams</p>
                    </div>

                    <div class="team-count-controls">

                        <button
                            type="button"
                            class="team-count-button"
                            id="decrease-team-button"
                        >
                            −
                        </button>

                        <span
                            class="team-count-display"
                            id="team-count-display"
                        >
                            2
                        </span>

                        <button
                            type="button"
                            class="team-count-button"
                            id="increase-team-button"
                        >
                            +
                        </button>

                    </div>

                </div>

            </section>

            <section class="team-list-section">

                <div class="team-list-header">

                    <div>
                        <h2>Teams</h2>
                        <p>Enter a unique name for every team.</p>
                    </div>

                    <button
                        type="button"
                        class="add-team-button"
                        id="add-team-button"
                    >
                        + Add Team
                    </button>

                </div>

                <div
                    class="team-fields"
                    id="team-fields"
                ></div>

                <p
                    class="team-validation-message"
                    id="team-validation-message"
                    aria-live="polite"
                ></p>

            </section>

            <section class="create-navigation">

                <button
                    type="button"
                    class="create-back-button"
                    id="team-configuration-back-button"
                >
                    Back
                </button>

                <button
                    type="button"
                    class="create-continue-button"
                    id="team-configuration-continue-button"
                >
                    Continue →
                </button>

            </section>

        </main>
    `;
}
