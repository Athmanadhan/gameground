import "./TournamentDetails.css";

export default function TournamentDetails() {
    return `
        <main class="tournament-details-page">

            <section class="tournament-details-header">

                <p class="create-eyebrow">
                    TOURNAMENT CREATION
                </p>

                <h1>Tournament Details</h1>

                <p class="create-description">
                    Add the places and ground settings for your tournament.
                </p>

            </section>


            <section class="tournament-details-card">

                <div class="details-section-header">
                    <div>
                        <h2>Conducting Place</h2>

                        <p>
                            Add the locations where your tournament will be conducted.
                        </p>
                    </div>

                    <button
                        type="button"
                        class="add-place-button"
                        id="add-place-button"
                    >
                        + Add Place
                    </button>
                </div>


                <div
                    id="places-container"
                    class="places-container"
                ></div>


                <p
                    id="place-validation-message"
                    class="place-validation-message"
                    aria-live="polite"
                ></p>

            </section>


            <section class="tournament-details-card">

                <div class="details-section-header">
                    <div>
                        <h2>Location Scheduling</h2>

                        <p>
                            Choose how matches should be assigned to places.
                        </p>
                    </div>
                </div>


                <div class="scheduling-options">

                    <label class="scheduling-option">

                        <input
                            type="radio"
                            name="location-scheduling"
                            value="random"
                            checked
                        />

                        <span>
                            <strong>Random</strong>
                            <small>
                                Automatically distribute matches between available places.
                            </small>
                        </span>

                    </label>


                    <label class="scheduling-option">

                        <input
                            type="radio"
                            name="location-scheduling"
                            value="custom"
                        />

                        <span>
                            <strong>Custom</strong>
                            <small>
                                Choose the place for each match manually later.
                            </small>
                        </span>

                    </label>

                </div>

            </section>


            <section class="tournament-details-card">

                <div class="details-section-header">

                    <div>
                        <h2>Matches Per Ground</h2>

                        <p>
                            Maximum matches that can be assigned to one place.
                        </p>
                    </div>

                </div>


                <div class="matches-per-ground">

                    <button
                        type="button"
                        class="ground-count-button"
                        id="decrease-ground-matches"
                    >
                        −
                    </button>

                    <span
                        id="ground-match-count"
                        class="ground-match-count"
                    >
                        1
                    </span>

                    <button
                        type="button"
                        class="ground-count-button"
                        id="increase-ground-matches"
                    >
                        +
                    </button>

                </div>

            </section>


            <section class="create-navigation">

                <button
                    type="button"
                    class="create-back-button"
                    id="tournament-details-back-button"
                >
                    Back
                </button>


                <div class="details-navigation-right">

                    <button
                        type="button"
                        class="details-skip-button"
                        id="tournament-details-skip-button"
                    >
                        Skip
                    </button>

                    <button
                        type="button"
                        class="create-continue-button"
                        id="tournament-details-continue-button"
                    >
                        Save & Continue →
                    </button>

                </div>

            </section>

        </main>
    `;
}
