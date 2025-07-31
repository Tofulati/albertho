document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll("nav li a");
    const el = document.getElementById("typewriter-text");

    const lines = [
        "Hello, I'm Albert Ho.",
        "Welcome to my page!",
        "Scroll down to see more."
    ];
    let line = 0;
    let i = 0;

    function type() {
        if (!el) return;
        el.innerHTML = lines
            .map((l, idx) => {
                if (idx < line) return l;
                if (idx === line) return l.slice(0, i) + '<span class="type-cursor">|</span>';
                return "";
            })
            .join("<br>");
        if (i < lines[line].length) {
            i++;
            setTimeout(type, 60);
        } else if (line < lines.length - 1) {
            line++;
            i = 0;
            setTimeout(type, 400);
        } else {
            el.innerHTML = lines
                .map((l, idx) => idx < line ? l : (idx === line ? l : ""))
                .join("<br>") + '<span class="type-cursor">|</span>';
        }
    }
    type();

    const style = document.createElement('style');
    style.innerHTML = `
    .type-cursor {
        display: inline-block;
        animation: blink 1s steps(1) infinite;
        color: #111;
    }
    @keyframes blink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0; }
    }`;
    document.head.appendChild(style);

    function activateNav() {
        let scrollPos = window.scrollY || window.pageYOffset;
        let offset = 120;

        sections.forEach(section => {
            const top = section.offsetTop - offset;
            const bottom = top + section.offsetHeight;
            const id = section.getAttribute("id");
            if (scrollPos >= top && scrollPos < bottom) {
                navLinks.forEach(link => {
                    link.classList.toggle("active", link.getAttribute("href") === "#" + id);
                });
            }
        });
    }

    window.addEventListener("scroll", activateNav);
    activateNav();
});

document.querySelectorAll('.apple-card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('flipped');
  });
});