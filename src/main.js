import "./styles.css";
import { showToast } from "./components/ui/Toast.js";
import Home from "./pages/Home/Home.js";

const app = document.querySelector("#app");

app.innerHTML = `
    <div class="app-shell">

        <header class="global-header">

            <a class="brand" href="/" aria-label="GameGround home">
                <span class="brand-name">GAMEGROUND</span>
            </a>

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
                <button type="button" class="menu-item">
                    Create Tournament
                </button>

                <button type="button" class="menu-item">
                    Continue Tournament
                </button>

                <button type="button" class="menu-item">
                    Schedule
                </button>

                <button type="button" class="menu-item">
                    Points Table
                </button>

                <button type="button" class="menu-item">
                    Matches
                </button>

                <button type="button" class="menu-item">
                    Player Entry
                </button>

                <button type="button" class="menu-item">
                    Player Analysis
                </button>

                <button type="button" class="menu-item">
                    Playoffs
                </button>

                <button type="button" class="menu-item">
                    PDF Maker
                </button>
            </nav>

        </header>

        <div id="page-root"></div>

    </div>
`;

const pageRoot = document.querySelector("#page-root");

pageRoot.innerHTML = Home();

const menuButton = document.querySelector(".menu-button");
const globalMenu = document.querySelector("#global-menu");

menuButton.addEventListener("click", () => {
    const isOpen =
        menuButton.getAttribute("aria-expanded") === "true";

    menuButton.setAttribute(
        "aria-expanded",
        String(!isOpen)
    );

    globalMenu.setAttribute(
        "aria-hidden",
        String(isOpen)
    );

    globalMenu.classList.toggle(
        "is-open",
        !isOpen
    );

    menuButton.classList.toggle(
        "is-active",
        !isOpen
    );
});

const menuItems = document.querySelectorAll(".menu-item");

menuItems.forEach((item) => {
    item.addEventListener("click", () => {
        globalMenu.classList.remove("is-open");
        menuButton.classList.remove("is-active");

        menuButton.setAttribute(
            "aria-expanded",
            "false"
        );

        globalMenu.setAttribute(
            "aria-hidden",
            "true"
        );
    });
});

setTimeout(() => {
    showToast("GAMEGROUND is ready", "success");
}, 500);