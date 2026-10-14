# PeakVista

PeakVista is a responsive, multi-page static website about mountain exploration, alpine geology, and wilderness trail tracking. It is built with semantic HTML5, CSS3 custom properties, and vanilla JavaScript. The layout is designed to work from desktop screens down to 320px-wide phones.

## Live Demo

Coming soon. Deploy with GitHub Pages (Settings → Pages) and replace this line with your URL.

---

## Features

### Pages
* **Home (`index.html`)**: A hero image slider that cross-fades between images, a statistics counter grid, and calls to action.
* **About (`about.html`)**: The project's mission, an image stack that can be swiped on touch screens, and value sections.
* **Trails (`trails.html`)**: A searchable list of hiking trails that can be filtered by difficulty (Easy, Moderate, Hard).
* **Mountain Profiles (`mountain.html`)**: Geological details, elevation data, and accordion panels for individual peaks.
* **Gallery (`gallery.html`)**: A responsive CSS grid of landscape photos. Images animate into view as you scroll.
* **Contact (`contact.html`)**: Contact information and a feedback form for trail logs.

### Technical Highlights
* **Responsive layout**: Media queries prevent content from clipping on small screens, including 320px devices such as the iPhone SE.
* **Scroll animations**: The gallery uses the browser's IntersectionObserver API to animate images into view when they enter the viewport.
* **Design tokens**: Colors are set in one `:root` block in `style.css`, so you can change the theme in one place.

---

## Tech Stack
* **Markup**: HTML5
* **Styling**: CSS3 (custom properties, CSS Grid, Flexbox)
* **Scripting**: Vanilla JavaScript (ES6+, IntersectionObserver, DOM manipulation)

---

## Running Locally

You need [Git](https://git-scm.com/) to clone the repository. No other dependencies are required.

1. **Clone the repository**
```bash
   git clone https://github.com/ireyefojuayo01/PeakVista.git
   cd PeakVista
```

2. **Check the project structure**
```text
   PeakVista/
   ├── index.html
   ├── about.html
   ├── trails.html
   ├── mountain.html
   ├── gallery.html
   ├── contact.html
   ├── style.css
   ├── script.js
   ├── IMAGES/
   │   ├── logo.png            
   │   ├── mountain 1.png
   │   ├── mountain 2.png
   │   └── ...
   └── LICENSE
```

3. **Open the site**
   * **Option A**: Double-click `index.html` to open it in your browser.
   * **Option B (recommended)**: Install the **Live Server** extension in VS Code, then right-click `index.html` and choose **Open with Live Server**. The page reloads automatically when you save changes.

---

## Changing the Theme Colors

The colors are set in design tokens inside the `:root` block of `style.css`. Change the hex values there to update the whole site:

```css
:root {
    --clr-primary: #2e7d32;           /* Alpine green accent */
    --clr-secondary: #1fc3f7;         /* Sky blue accent */
    --heading-text: #263238;          /* Heading text */
    --bg-color: #f8fafc;              /* Page background */
    --card-accent: #8d6e63;           /* Card border accent */
    --card-section-surface: #e5e7eb;  /* Borders and meta elements */
    --navigation: #1b4332;            /* Navigation panels */
    --cta-btn: #f4a261;               /* Call-to-action buttons */
}
```

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
