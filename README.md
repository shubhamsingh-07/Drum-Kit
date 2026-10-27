# Drum Kit

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A small browser-based drum kit built with **HTML, CSS, and vanilla JavaScript**. Play drum sounds by clicking the on-screen buttons or pressing the corresponding keys on your keyboard.

## Features

- **Seven drum controls** mapped to the keys `w`, `a`, `s`, `d`, `j`, `k`, and `l`.
- **Keyboard interaction** using the browser's `keydown` event.
- **Mouse interaction** through clickable drum buttons.
- **Audio playback** using the browser's built-in `Audio` API and local MP3 files.
- **Pressed-state animation** that briefly changes the button's appearance after activation.
- **No build step or package installation** is required.

## Tech Stack

- **HTML5** — page structure and drum controls.
- **CSS3** — styling, instrument images, and pressed-state feedback.
- **Vanilla JavaScript** — keyboard events, click handlers, and audio playback.
- **Browser Audio API** — plays the local MP3 sound files.

## Try It Locally

### Option 1: Open the HTML file

1. Clone or download this repository.
2. Open the project folder.
3. Open `index.html` in a modern browser.

### Option 2: Use VS Code Live Server

1. Clone the repository and open the folder in VS Code.
2. Install the **Live Server** extension if you do not already have it.
3. Right-click `index.html` and choose **Open with Live Server**.

Keep the `sounds/` and `images/` folders in their existing locations; the app references those files using relative paths.

## Keyboard Controls

| Key | Sound played |
| --- | --- |
| `w` | Tom 1 |
| `a` | Tom 2 |
| `s` | Tom 3 |
| `d` | Tom 4 |
| `j` | Snare |
| `k` | Kick bass |
| `l` | Crash |

You can also click any of the seven on-screen drum buttons. Each supported activation plays a sound and applies a short visual pressed effect.

## Project Structure

```text
Drum-Kit/
├── index.html       # Page structure and drum buttons
├── index.js         # Keyboard/click handling, sound playback, animations
├── styles.css       # Layout and button styling
├── images/          # Instrument images used as button backgrounds
└── sounds/          # MP3 files used for the drum sounds
```

## How It Works

1. JavaScript selects the drum buttons from the DOM.
2. Click listeners read the clicked button's letter; a keyboard listener reads the pressed key.
3. The `makeSound()` function maps supported letters to local MP3 files and plays the corresponding sound.
4. The `buttonAnimation()` function adds the `pressed` CSS class, then removes it after 500 milliseconds.

## Possible Improvements

- Ignore unsupported keys before running sound or animation logic.
- Keep each button's instrument image aligned with the sound it triggers.
- Add accessibility labels and clearer focus styles for keyboard and assistive-technology users.
- Add a visible volume control and a way to mute the sounds.

## License

**MIT License** — see the [`LICENSE`](LICENSE) file for the full terms.

The repository includes instrument images and MP3 audio files whose original sources are not identified in the project files. Verify the source and licensing terms for these assets before redistributing them; the MIT license should not be assumed to override separate third-party rights. The Arvo font is loaded from Google Fonts and may be subject to its own terms.

## Author

**Shubham Singh** · [GitHub Profile](https://github.com/shubhamsingh-07)
