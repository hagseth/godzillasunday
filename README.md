# Godzilla Sunday

A small browser app to randomly pick a Godzilla movie every Sunday.

## Features

- spinning wheel for random movie selection
- complete 40-title catalog from the supplied IMDb list
- automatic removal from the available pool after each watch
- watch history with date and time for each movie
- release year/date and runtime shown for watched movies
- reset button to restore the full movie list
- local browser storage so the log stays saved on the same device
- download button to export every spin as `log.txt`

## Run it locally

1. Open the folder in a browser or serve it from a local web server.
2. Visit: http://localhost:8000/

If you need to start the server manually:

```bash
cd "C:\Users\alexa\Documents\GitHub\Godzilla sunday"
python -m http.server 8000
```

Then open http://localhost:8000/
