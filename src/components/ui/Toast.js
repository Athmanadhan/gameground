export function showToast(message, type = "info", duration = 3000) {
    let container = document.querySelector(".toast-container");

    if (!container) {
        container = document.createElement("div");
        container.className = "toast-container";
        document.body.appendChild(container);
    }

    const toast = document.createElement("div");
    toast.className = `toast toast-${type}`;

    toast.innerHTML = `
        <span class="toast-message">${message}</span>
        <button class="toast-close" aria-label="Close notification">
            ×
        </button>
    `;

    container.appendChild(toast);

    requestAnimationFrame(() => {
        toast.classList.add("toast-visible");
    });

    const removeToast = () => {
        toast.classList.remove("toast-visible");

        setTimeout(() => {
            toast.remove();

            if (container.children.length === 0) {
                container.remove();
            }
        }, 250);
    };

    toast
        .querySelector(".toast-close")
        .addEventListener("click", removeToast);

    setTimeout(removeToast, duration);
}