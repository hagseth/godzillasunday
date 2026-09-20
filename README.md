# Godzilla Sunday

Godzilla Sunday is a movie-night companion for watching our way through the Godzilla films, one Sunday at a time. Movies are organized by continuity/era with a short viewing-order note for each, so you can browse and pick with intent, or spin the wheel and let it choose for you. Either way, once a movie is logged it comes off the board and moves into the watched log — where the poster, release date, and runtime are all one click away.

![Godzilla](https://i.pinimg.com/originals/84/9d/02/849d02234c926810d4ae9ec8d40a04fa.gif)

The goal is to make it all the way through the full catalog without having to decide what to watch every week — while still keeping the freedom to watch things in the right order when it matters.

## Features

- **Movie pool grouped by continuity/era** (Showa, Heisei, Millennium, MonsterVerse, standalone films, and more), each with a short note on whether release order matters and an era image
- **The complete catalog**, expanded past the original Godzilla films to include connected kaiju movies from the wider continuity
- **A slowly turning wheel** for choosing a movie at random when you don't want to pick
- **Manual "Add to watched"** buttons in the pool for logging a movie directly, without spinning
- **A result popup** after each spin with the poster, release info, runtime, confetti, and Add or Cancel choices
- **A watched log** showing the watch date and movie details for everything logged so far
- **Click any watched movie** to reopen its poster/details popup, correct its logged watch date, or remove it from the watchlist entirely
- **Live progress counters** for how many movies are watched and how many are left
- Automatic removal from the movie pool once a movie is logged as watched
- A reset button for starting the full run again
- Browser storage so the watched log stays saved on the same device
- A `log.txt` download for keeping a separate copy of the history
- Local poster images in `posters/`, so the published site needs no API key or live poster service

## Run it locally

Start a small local web server from the project folder:

```powershell
cd "C:\Users\alexa\Documents\GitHub\Godzilla sunday"
python -m http.server 8000
```

Then open http://localhost:8000/ in your browser.

## Publish with GitHub Pages

Push the repository to GitHub, then open **Settings > Pages** and choose **Deploy from a branch**, using the `main` branch and the `/ (root)` folder. GitHub will provide a public URL that can be opened from a phone or anywhere else.

The watched log is stored in each browser's local storage, so a phone and computer will have separate logs. Use the `Download log.txt` button if you want a portable backup.
