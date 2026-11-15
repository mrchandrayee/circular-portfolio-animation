# Circular Portfolio Animation

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/circular-portfolio-animation/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

A runnable recreation of the uploaded 20-second, 540 × 960, 30fps screen recording.

## What appears in the source video
- Heading: **Circular Portfolio Animation**
- Lavender background and a white circular portfolio/book.
- Cover: green `NM` circle, **Nilesh M**, **Frontend Engineer**, and **Tap to open**.
- About Me: “I build clean, highly interactive, and circular digital experiences using modern web technologies.”
- Skills: React, Three.js, UI/UX, CSS3.
- Projects: Eco-Dashboard (Data visualization UI) and GreenStore (E-commerce platform).
- Experience, Let's Talk, Email Me, and Thank You states.
- CSS editor visibly shows `.scene` with `width: 100vw`, `height: 100vh`, flex centering and `perspective: 2000px`; `.book` uses `position: relative`, `width: var(--radius)`, `height: calc(var(--radius) * 2)`, `transform-style: preserve-3d`, `transform: rotateX(10deg) rotateY(-5deg)`, and `transition: transform 0.1s linear`.

## Run
Extract the ZIP and open `index.html` in a modern browser. No dependencies or build step required.

## Controls
- Click/tap the cover to open or close.
- Use ‹ and › to move between the three content spreads.
- Keyboard: Left/Right arrows to turn pages; Escape to close.

## Source fidelity
The `.scene` and `.book` declarations listed above are transcribed from readable editor text in the recording. The original video does not show all HTML/CSS/JavaScript source. Page markup, circular page geometry, page-turn mechanism, navigation, responsive behavior, and content layout are reconstructed to match the demonstrated states. This is not a byte-for-byte copy of the original project.

## 👨‍💻 Author

**mrchandrayee** · [GitHub](https://github.com/mrchandrayee)

## 📄 License

[MIT License](./LICENSE)
