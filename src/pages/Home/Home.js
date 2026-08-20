import "./Home.css";

export default function Home() {
    return `
        <main class="home-page">

            <!-- HERO -->
            <section class="home-hero">
                <p class="home-eyebrow">TOURNAMENT MANAGEMENT PLATFORM</p>

                <h1>GAMEGROUND</h1>

                <p class="home-tagline">
                    ONE PLATFORM. EVERY GAME. EVERY TOURNAMENT.
                </p>
            </section>

            <!-- MAIN ACTIONS -->
            <section class="home-actions">

                <button
                    class="home-card home-card-primary"
                    id="create-tournament-button"
                    type="button"
                >
                    <span class="home-card-label">START</span>

                    <span class="home-card-title">
                        Create Tournament
                    </span>

                    <span class="home-card-description">
                        Build a tournament, configure its rules,
                        generate the schedule and manage everything
                        from one place.
                    </span>

                    <span class="home-card-arrow">→</span>
                </button>


                <button
                    class="home-card home-card-disabled"
                    id="continue-tournament-button"
                    type="button"
                    disabled
                >
                    <span class="home-card-label">CONTINUE</span>

                    <span class="home-card-title">
                        Continue Tournament
                    </span>

                    <span class="home-card-description">
                        No saved tournament is available yet.
                    </span>

                    <span class="home-card-status">
                        NO ACTIVE TOURNAMENT
                    </span>
                </button>

            </section>

            <!-- PROGRESS -->
            <section class="home-progress">
                <div class="home-progress-header">
                    <span>TOURNAMENT PROGRESS</span>
                    <span>0%</span>
                </div>

                <div class="home-progress-track">
                    <div class="home-progress-bar"></div>
                </div>

                <p>
                    Create a tournament to begin.
                </p>
            </section>

            <!-- FOOTER -->
            <footer class="home-footer">
                <strong>GAMEGROUND</strong>

                <span>
                    ONE PLATFORM. EVERY GAME. EVERY TOURNAMENT.
                </span>
            </footer>

        </main>
    `;
}