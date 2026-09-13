# Godzilla Sunday

Godzilla Sunday is a small movie-night app for watching our way through the Godzilla films one Sunday at a time. The wheel picks the next movie, we decide whether to add it to the watched log, and the movie is removed from the pool once we have watched it.

![Godzilla](https://i.pinimg.com/originals/84/9d/02/849d02234c926810d4ae9ec8d40a04fa.gif)

The goal is to make it all the way through the full list without having to decide what to watch every week.

## Features

- A slowly turning wheel for choosing a movie at random
- The complete 40-title catalog from the supplied IMDb list
- A result popup with the poster, release information, runtime, confetti, and Add or Cancel choices
- A watched log with the watch date and movie details
- Automatic removal from the movie pool after a movie is added to the watchlist
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
