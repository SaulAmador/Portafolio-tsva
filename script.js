// Matrix rain background
function initMatrix() {
    const container = document.querySelector(".jp-matrix");
    if (!container) return;
    const chars = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789";
    const total = 800;
    for (let i = 0; i < total; i++) {
        const span = document.createElement("span");
        span.textContent = chars[Math.floor(Math.random() * chars.length)];
        container.appendChild(span);
    }
}

function scrollToSection() {
    const aboutSection = document.querySelector("#sobre-mi");
    aboutSection.scrollIntoView({
        behavior: "smooth"
    });
}

initMatrix();
