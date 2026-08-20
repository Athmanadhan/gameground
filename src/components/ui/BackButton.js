export function createBackButton(label = "Back") {
    const button = document.createElement("button");

    button.type = "button";
    button.className = "global-back-button";

    button.innerHTML = `
        <span class="back-icon" aria-hidden="true">←</span>
        <span>${label}</span>
    `;

    button.addEventListener("click", () => {
        if (window.history.length > 1) {
            window.history.back();
        } else {
            window.location.href = "/";
        }
    });

    return button;
}