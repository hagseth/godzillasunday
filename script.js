const movieCatalog = [
  { title: 'Godzilla (1954)', releaseDate: '1954', runtime: '1h 36m', accent: '#d9572b' },
  { title: 'Godzilla Raids Again', releaseDate: '1955', runtime: '1h 18m', accent: '#d4b83f' },
  { title: 'King Kong vs. Godzilla', releaseDate: '1963', runtime: '1h 31m', accent: '#557a3e' },
  { title: 'Mothra vs. Godzilla', releaseDate: '1964', runtime: '1h 29m', accent: '#277a78' },
  { title: 'Ghidorah, the Three-Headed Monster', releaseDate: '1964', runtime: '1h 25m', accent: '#a8c957' },
  { title: 'Invasion of Astro-Monster', releaseDate: '1965', runtime: '1h 33m', accent: '#b38d35' },
  { title: 'Ebirah, Horror of the Deep', releaseDate: '1966', runtime: '1h 23m', accent: '#d1662c' },
  { title: 'Son of Godzilla', releaseDate: '1967', runtime: '1h 24m', accent: '#496b4b' },
  { title: 'Destroy All Monsters', releaseDate: '1968', runtime: '1h 28m', accent: '#c4d65a' },
  { title: 'All Monsters Attack', releaseDate: '1969', runtime: '1h 10m', accent: '#8f2d24' },
  { title: 'Godzilla vs. Hedorah', releaseDate: '1971', runtime: '1h 25m', accent: '#277a78' },
  { title: 'Godzilla vs. Gigan', releaseDate: '1972', runtime: '1h 29m', accent: '#d9572b' },
  { title: 'Godzilla vs. Megalon', releaseDate: '1973', runtime: '1h 18m', accent: '#a8c957' },
  { title: 'Godzilla vs. Mechagodzilla', releaseDate: '1974', runtime: '1h 24m', accent: '#d4b83f' },
  { title: 'Terror of Mechagodzilla', releaseDate: '1975', runtime: '1h 19m', accent: '#8f2d24' },
  { title: 'Godzilla 1985', releaseDate: '1985', runtime: '1h 27m', accent: '#d1662c' },
  { title: 'Godzilla vs. Biollante', releaseDate: '1989', runtime: '1h 44m', accent: '#496b4b' },
  { title: 'Godzilla vs. King Ghidorah', releaseDate: '1991', runtime: '1h 40m', accent: '#c4d65a' },
  { title: 'Godzilla and Mothra: The Battle for Earth', releaseDate: '1992', runtime: '1h 40m', accent: '#277a78' },
  { title: 'Godzilla vs. Mechagodzilla II', releaseDate: '1993', runtime: '1h 45m', accent: '#b38d35' },
  { title: 'Godzilla vs. SpaceGodzilla', releaseDate: '1994', runtime: '1h 46m', accent: '#557a3e' },
  { title: 'Godzilla vs. Destoroyah', releaseDate: '1995', runtime: '1h 43m', accent: '#d9572b' },
  { title: 'Godzilla (1998)', releaseDate: '1998', runtime: '2h 19m', accent: '#8f2d24' },
  { title: 'Godzilla 2000', releaseDate: '1999', runtime: '1h 39m', accent: '#a8c957' },
  { title: 'Godzilla vs. Megaguirus', releaseDate: '2000', runtime: '1h 45m', accent: '#d4b83f' },
  { title: 'Godzilla, Mothra and King Ghidorah: Giant Monsters All-Out Attack', releaseDate: '2001', runtime: '1h 45m', accent: '#d1662c' },
  { title: 'Godzilla Against Mechagodzilla', releaseDate: '2002', runtime: '1h 28m', accent: '#496b4b' },
  { title: 'Godzilla: Tokyo S.O.S.', releaseDate: '2003', runtime: '1h 31m', accent: '#277a78' },
  { title: 'Godzilla: Final Wars', releaseDate: '2004', runtime: '2h 5m', accent: '#c4d65a' },
  { title: 'Godzilla (2014)', releaseDate: '2014', runtime: '2h 3m', accent: '#557a3e' },
  { title: 'Shin Godzilla', releaseDate: '2016', runtime: '2h', accent: '#8f2d24' },
  { title: 'Godzilla: Planet of the Monsters', releaseDate: '2017', runtime: '1h 29m', accent: '#b38d35' },
  { title: 'Godzilla: City on the Edge of Battle', releaseDate: '2018', runtime: '1h 41m', accent: '#277a78' },
  { title: 'Godzilla: The Planet Eater', releaseDate: '2018', runtime: '1h 31m', accent: '#a8c957' },
  { title: 'Godzilla: King of the Monsters', releaseDate: '2019', runtime: '2h 12m', accent: '#d9572b' },
  { title: 'Godzilla vs. Kong', releaseDate: '2021', runtime: '1h 53m', accent: '#d4b83f' },
  { title: 'Godzilla Minus One', releaseDate: '2023', runtime: '2h 4m', accent: '#496b4b' },
  { title: 'Godzilla X Kong: The New Empire', releaseDate: '2024', runtime: '1h 55m', accent: '#c4d65a' },
  { title: 'Godzilla Minus Zero', releaseDate: '2026-11-06', runtime: '2h 15m', accent: '#d1662c' },
  { title: 'Rodan', releaseDate: '1956', runtime: '1h 22m', accent: '#557a3e' },
  { title: 'Varan', releaseDate: '1958', runtime: '1h 27m', accent: '#277a78' },
  { title: 'Mothra', releaseDate: '1961', runtime: '1h 41m', accent: '#a8c957' },
  { title: 'Atragon', releaseDate: '1963', runtime: '1h 37m', accent: '#b38d35' },
  { title: 'Frankenstein vs. Baragon', releaseDate: '1965', runtime: '1h 33m', accent: '#8f2d24' },
  { title: 'The War of the Gargantuas', releaseDate: '1966', runtime: '1h 28m', accent: '#d1662c' },
  { title: 'King Kong Escapes', releaseDate: '1967', runtime: '1h 44m', accent: '#496b4b' },
  { title: 'Space Amoeba', releaseDate: '1970', runtime: '1h 35m', accent: '#c4d65a' },
  { title: 'Godzilla x Kong: Supernova', releaseDate: '2027-03-26', runtime: 'Not announced', accent: '#d9572b' }
];

const movies = movieCatalog.map((movie) => movie.title);
const continuityByTitle = {
  'Godzilla (1954)': 'Showa era',
  'Godzilla Raids Again': 'Showa era',
  'King Kong vs. Godzilla': 'Showa era',
  'Mothra vs. Godzilla': 'Showa era',
  'Ghidorah, the Three-Headed Monster': 'Showa era',
  'Invasion of Astro-Monster': 'Showa era',
  'Ebirah, Horror of the Deep': 'Showa era',
  'Son of Godzilla': 'Showa era',
  'Destroy All Monsters': 'Showa era',
  'All Monsters Attack': 'Showa era',
  'Godzilla vs. Hedorah': 'Showa era',
  'Godzilla vs. Gigan': 'Showa era',
  'Godzilla vs. Megalon': 'Showa era',
  'Godzilla vs. Mechagodzilla': 'Showa era',
  'Terror of Mechagodzilla': 'Showa era',
  'Godzilla 1985': 'Heisei era',
  'Godzilla vs. Biollante': 'Heisei era',
  'Godzilla vs. King Ghidorah': 'Heisei era',
  'Godzilla and Mothra: The Battle for Earth': 'Heisei era',
  'Godzilla vs. Mechagodzilla II': 'Heisei era',
  'Godzilla vs. SpaceGodzilla': 'Heisei era',
  'Godzilla vs. Destoroyah': 'Heisei era',
  'Godzilla 2000': 'Millennium era',
  'Godzilla vs. Megaguirus': 'Millennium era',
  'Godzilla, Mothra and King Ghidorah: Giant Monsters All-Out Attack': 'Millennium era',
  'Godzilla: Final Wars': 'Millennium era',
  'Godzilla Against Mechagodzilla': 'Millennium era: Kiryu series',
  'Godzilla: Tokyo S.O.S.': 'Millennium era: Kiryu series',
  'Godzilla (1998)': 'Standalone films',
  'Shin Godzilla': 'Standalone films',
  'Godzilla: Planet of the Monsters': 'Standalone films: anime trilogy',
  'Godzilla: City on the Edge of Battle': 'Standalone films: anime trilogy',
  'Godzilla: The Planet Eater': 'Standalone films: anime trilogy',
  'Godzilla Minus One': 'Standalone films: Minus continuity',
  'Godzilla Minus Zero': 'Standalone films: Minus continuity',
  'Godzilla (2014)': 'MonsterVerse',
  'Godzilla: King of the Monsters': 'MonsterVerse',
  'Godzilla vs. Kong': 'MonsterVerse',
  'Godzilla X Kong: The New Empire': 'MonsterVerse'
  , 'Godzilla x Kong: Supernova': 'MonsterVerse',
  'Rodan': 'Showa era',
  'Varan': 'Showa era',
  'Mothra': 'Showa era',
  'Atragon': 'Showa era',
  'Frankenstein vs. Baragon': 'Showa era',
  'The War of the Gargantuas': 'Showa era',
  'King Kong Escapes': 'Showa era',
  'Space Amoeba': 'Showa era'
};
const continuityOrder = [
  'Showa era',
  'Heisei era',
  'Millennium era',
  'Millennium era: Kiryu series',
  'Standalone films',
  'Standalone films: anime trilogy',
  'Standalone films: Minus continuity',
  'MonsterVerse'
];
const continuityDescriptions = {
  'Showa era': 'Watch in release order. Destroy All Monsters is canonically last, but release order works well.',
  'Heisei era': 'Watch in release order. This is the most connected main storyline.',
  'Millennium era': 'Mostly standalone films; release order is an easy way through them.',
  'Millennium era: Kiryu series': 'Watch in order: Against Mechagodzilla, then Tokyo S.O.S.',
  'Standalone films': 'Each film stands on its own and can be watched in any order.',
  'Standalone films: anime trilogy': 'Watch in release order: Planet of the Monsters, City on the Edge of Battle, then The Planet Eater.',
  'Standalone films: Minus continuity': 'Watch in release order: Minus One, then Minus Zero.',
  MonsterVerse: 'Watch in release order; these films share one continuing timeline.'
};
const continuityImages = {
  'Showa era': 'Godzilla%20eras/Godzilla%20showa%20era.png',
  'Heisei era': 'Godzilla%20eras/hesei%20era.png',
  'Millennium era': 'Godzilla%20eras/Godzilla%20millennium%20era.png',
  'Millennium era: Kiryu series': 'Godzilla%20eras/Godzilla%20Kiryu.jpg',
  'Standalone films': 'Godzilla%20eras/Godzilla%20standalone%20films.jpg',
  'Standalone films: anime trilogy': 'Godzilla%20eras/Godzilla%20anime%20trilogy.jpg',
  'Standalone films: Minus continuity': 'Godzilla%20eras/Godzilla%20minus%20continuity.jpg',
  MonsterVerse: 'Godzilla%20eras/Godzilla%20monsterverse.png'
};
const movieLookup = Object.fromEntries(
  movieCatalog.map((movie, index) => [movie.title, {
    ...movie,
    continuity: continuityByTitle[movie.title] || 'Continuity not classified',
    poster: movie.generatedPoster ? createPoster(movie.title, movie.accent) : `posters/${String(index + 1).padStart(2, '0')}.jpg`,
    fallbackPoster: createPoster(movie.title, movie.accent)
  }])
);

const STORAGE_KEY = 'godzilla-sunday-watch-log';
const wheel = document.getElementById('wheel');
const wheelRotator = document.getElementById('wheel-rotator');
const wheelLabels = document.getElementById('wheel-labels');
const statusLine = document.getElementById('status-line');
const watchedCount = document.getElementById('watched-count');
const remainingCount = document.getElementById('remaining-count');
const availableList = document.getElementById('available-list');
const watchedList = document.getElementById('watched-list');
const spinBtn = document.getElementById('spin-btn');
const resetBtn = document.getElementById('reset-btn');
const downloadLogBtn = document.getElementById('download-log-btn');
const resultModal = document.getElementById('result-modal');
const resultPoster = document.getElementById('result-poster');
const resultTitle = document.getElementById('result-title');
const resultDetails = document.getElementById('result-details');
const resultCancelBtn = document.getElementById('result-cancel-btn');
const resultAddBtn = document.getElementById('result-add-btn');
const resultRemoveBtn = document.getElementById('result-remove-btn');
const resultWatchedEdit = document.getElementById('result-watched-edit');
const resultWatchedDateInput = document.getElementById('result-watched-date');
const confettiContainer = document.getElementById('confetti-container');

let watched = loadWatched();
let pendingResult = null;
let previewedTitle = null;
let currentRotation = 0;
let spinning = false;
const posterCache = new Map();
let spinAudioContext = null;
let spinAudioNodes = null;
let clickNoiseBuffer = null;
const SPIN_DURATION_MS = 10000;
const MIN_SPINS = 12;
const SPIN_EASING = [0.12, 0.82, 0.2, 1];

function splitTitleIntoLines(title) {
  const words = title.split(' ');
  const lines = [];
  let currentLine = '';

  for (const word of words) {
    const candidate = currentLine ? `${currentLine} ${word}` : word;

    if (candidate.length <= 17) {
      currentLine = candidate;
    } else {
      if (currentLine) {
        lines.push(currentLine);
      }
      currentLine = word;
    }
  }

  if (currentLine) {
    lines.push(currentLine);
  }

  return lines.slice(0, 3);
}

function createPoster(title, accent) {
  const lines = splitTitleIntoLines(title.toUpperCase());
  const lineMarkup = lines
    .map(
      (line, index) => `
        <tspan x="250" dy="${index === 0 ? 0 : 50}">${line}</tspan>
      `
    )
    .join('');

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="500" height="750" viewBox="0 0 500 750">
      <defs>
        <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stop-color="${accent}" />
          <stop offset="100%" stop-color="#0f172a" />
        </linearGradient>
      </defs>
      <rect width="500" height="750" fill="url(#g)" rx="24" />
      <circle cx="250" cy="180" r="120" fill="rgba(15,23,42,0.25)" />
      <path d="M135 287 L250 120 L365 287 L315 287 L315 430 L185 430 L185 287 Z" fill="rgba(248,250,252,0.18)"/>
      <path d="M205 202 L250 155 L295 202 L295 426 L205 426 Z" fill="rgba(248,250,252,0.18)"/>
      <rect x="40" y="500" width="420" height="170" rx="18" fill="rgba(2,6,23,0.35)" />
      <text x="250" y="560" text-anchor="middle" fill="#f8fafc" font-size="34" font-weight="700" font-family="Segoe UI, Arial, sans-serif">
        ${lineMarkup}
      </text>
      <text x="250" y="670" text-anchor="middle" fill="rgba(255,255,255,0.8)" font-size="24" letter-spacing="10" font-family="Segoe UI, Arial, sans-serif">GODZILLA</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function loadWatched() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    if (!Array.isArray(saved)) {
      return [];
    }

    return saved.map((entry) => {
      const normalizedTitle = entry.title || 'Unknown movie';
      const movie = movieLookup[normalizedTitle] || {
        title: normalizedTitle,
        releaseDate: 'Unknown release',
        runtime: 'Runtime unknown',
        accent: '#f97316',
        poster: createPoster(normalizedTitle, '#f97316'),
        fallbackPoster: createPoster(normalizedTitle, '#f97316')
      };

      return {
        title: normalizedTitle,
        watchedAt: entry.watchedAt || new Date().toISOString(),
        releaseDate: entry.releaseDate || movie.releaseDate || 'Unknown release',
        runtime: entry.runtime || movie.runtime || 'Runtime unknown',
        poster: movie.poster || entry.poster
      };
    });
  } catch (error) {
    console.warn('Unable to load watched movies:', error);
    return [];
  }
}

function saveWatched() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(watched));
}

function createLogText() {
  const entries = [...watched]
    .sort((a, b) => new Date(a.watchedAt) - new Date(b.watchedAt))
    .map((entry) => `${entry.watchedAt} | ${entry.title} | Released: ${entry.releaseDate} | Runtime: ${entry.runtime}`);

  return ['Godzilla Sunday Watch Log', '==========================', '', ...entries, ''].join('\n');
}

function downloadLog() {
  const blob = new Blob([createLogText()], { type: 'text/plain;charset=utf-8' });
  const downloadUrl = URL.createObjectURL(blob);
  const link = document.createElement('a');

  link.href = downloadUrl;
  link.download = 'log.txt';
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(downloadUrl);
}

async function resolveMoviePoster(title) {
  if (posterCache.has(title)) {
    return posterCache.get(title);
  }

  const poster = movieLookup[title]?.poster || movieLookup[title]?.fallbackPoster || createPoster(title, movieLookup[title]?.accent || '#f97316');
  posterCache.set(title, poster);
  return poster;
}

function getAvailableMovies() {
  return movies.filter((movie) => !watched.some((entry) => entry.title === movie));
}

function formatDate(dateString) {
  return new Date(dateString).toLocaleString([], {
    dateStyle: 'medium'
  });
}

function formatReleaseDate(dateString) {
  if (!dateString || dateString === 'Unknown release') {
    return 'Unknown release';
  }

  if (/^\d{4}$/.test(dateString)) {
    return dateString;
  }

  return new Date(`${dateString}T00:00:00`).toLocaleDateString([], {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
}

function formatMovieDetails(entry) {
  return `Released ${formatReleaseDate(entry.releaseDate)} | ${entry.runtime}`;
}

function toDateInputValue(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function getReleaseSortValue(dateString) {
  const normalizedDate = /^\d{4}$/.test(dateString) ? `${dateString}-01-01` : dateString;
  return new Date(`${normalizedDate}T00:00:00`).getTime();
}

function getWheelLabel(title) {
  const specialLabels = {
    'Godzilla (1954)': 'Godzilla',
    'Godzilla (1998)': 'Godzilla 1998',
    'Godzilla (2014)': 'Godzilla 2014'
  };

  if (specialLabels[title]) {
    return specialLabels[title];
  }

  const yearMatch = title.match(/\((\d{4})\)$/);
  if (yearMatch) {
    return yearMatch[1];
  }

  const compactLabels = {
    'Godzilla Raids Again': 'Raids Again',
    'King Kong vs. Godzilla': 'Kong vs. Godzilla',
    'Mothra vs. Godzilla': 'Mothra',
    'Ghidorah, the Three-Headed Monster': 'Ghidorah',
    'Invasion of Astro-Monster': 'Astro-Monster',
    'Ebirah, Horror of the Deep': 'Ebirah',
    'Son of Godzilla': 'Son of G',
    'Destroy All Monsters': 'Destroy All',
    'All Monsters Attack': 'All Monsters',
    'Terror of Mechagodzilla': 'Terror Mecha',
    'Godzilla 1985': 'Godzilla 1985',
    'Godzilla 2000': 'Godzilla 2000',
    'Godzilla and Mothra: The Battle for Earth': 'Mothra Battle',
    'Godzilla, Mothra and King Ghidorah: Giant Monsters All-Out Attack': 'G.M.K.',
    'Godzilla Against Mechagodzilla': 'Against Mecha',
    'Godzilla vs. Mechagodzilla II': 'Mecha II',
    'Godzilla vs. SpaceGodzilla': 'vs. Space G',
    'Godzilla vs. Destoroyah': 'vs. Destoroyah',
    'Godzilla vs. Megaguirus': 'vs. Megaguirus',
    'Godzilla vs. Biollante': 'vs. Biollante',
    'Godzilla vs. King Ghidorah': 'vs. Ghidorah',
    'Godzilla vs. Mechagodzilla': 'vs. Mecha',
    'Godzilla vs. Hedorah': 'vs. Hedorah',
    'Godzilla vs. Gigan': 'vs. Gigan',
    'Godzilla vs. Megalon': 'vs. Megalon',
    'Godzilla vs. Kong': 'vs. Kong',
    'Godzilla X Kong: The New Empire': 'X Kong',
    'Godzilla Minus One': 'Minus One',
    'Godzilla Minus Zero': 'Minus Zero',
    'Godzilla: Tokyo S.O.S.': 'Tokyo S.O.S.',
    'Godzilla: Final Wars': 'Final Wars',
    'Godzilla: Planet of the Monsters': 'Planet Monsters',
    'Godzilla: City on the Edge of Battle': 'City Edge',
    'Godzilla: The Planet Eater': 'Planet Eater',
    'Godzilla: King of the Monsters': 'King Monsters'
  };

  return compactLabels[title] || title.replace(/^Godzilla\s+/, '').slice(0, 14);
}

function launchConfetti() {
  const colors = ['#d4e157', '#e4572e', '#6ea89b', '#f3f8e9', '#d4b83f'];
  const fragment = document.createDocumentFragment();

  for (let index = 0; index < 72; index += 1) {
    const piece = document.createElement('span');
    piece.className = 'confetti-piece';
    piece.style.setProperty('--x', `${Math.round(Math.random() * 120 - 60)}vw`);
    piece.style.setProperty('--delay', `${(Math.random() * 0.35).toFixed(2)}s`);
    piece.style.setProperty('--duration', `${(Math.random() * 1.4 + 2.4).toFixed(2)}s`);
    piece.style.setProperty('--rotate', `${Math.round(Math.random() * 900 - 450)}deg`);
    piece.style.setProperty('--color', colors[index % colors.length]);
    fragment.appendChild(piece);
  }

  confettiContainer.replaceChildren(fragment);
  window.setTimeout(() => confettiContainer.replaceChildren(), 4200);
}

function showResultModal(movieTitle, poster) {
  if (!resultModal || !resultPoster || !resultTitle || !resultDetails) {
    statusLine.textContent = `${movieTitle} was selected. Refresh to choose whether to add it.`;
    return;
  }

  const movie = movieLookup[movieTitle];
  pendingResult = {
    title: movieTitle,
    watchedAt: new Date().toISOString(),
    releaseDate: movie.releaseDate,
    runtime: movie.runtime,
    poster
  };

  resultPoster.src = poster;
  resultPoster.alt = `${movieTitle} poster`;
  resultTitle.textContent = movieTitle;
  resultDetails.textContent = formatMovieDetails(pendingResult);
  resultModal.classList.remove('preview-mode');
  resultAddBtn.hidden = false;
  resultModal.hidden = false;
  if (resultAddBtn) {
    resultAddBtn.focus();
  }
  launchConfetti();
}

function hideResultModal() {
  resultModal.hidden = true;
  resultModal.classList.remove('preview-mode');
  resultAddBtn.hidden = false;
  resultRemoveBtn.hidden = true;
  resultWatchedEdit.hidden = true;
  resultCancelBtn.textContent = 'Cancel';
  previewedTitle = null;
}

function showMoviePreview(title) {
  const entry = watched.find((movie) => movie.title === title);

  if (!entry) {
    return;
  }

  pendingResult = null;
  previewedTitle = title;
  resultPoster.src = entry.poster;
  resultPoster.alt = `${entry.title} poster`;
  resultTitle.textContent = entry.title;
  resultDetails.textContent = formatMovieDetails(entry);
  resultWatchedDateInput.value = toDateInputValue(entry.watchedAt);
  resultWatchedEdit.hidden = false;
  resultModal.classList.add('preview-mode');
  resultAddBtn.hidden = true;
  resultRemoveBtn.hidden = false;
  resultCancelBtn.textContent = 'Close';
  resultModal.hidden = false;
  resultCancelBtn.focus();
}

function updatePreviewedWatchedDate() {
  if (!previewedTitle || !resultWatchedDateInput.value) {
    return;
  }

  const entry = watched.find((movie) => movie.title === previewedTitle);

  if (!entry) {
    return;
  }

  const updatedDate = new Date(entry.watchedAt);
  const [year, month, day] = resultWatchedDateInput.value.split('-').map(Number);
  updatedDate.setFullYear(year, month - 1, day);
  entry.watchedAt = updatedDate.toISOString();
  saveWatched();
  statusLine.textContent = `${entry.title}'s watched date was updated.`;
  renderAll();
}

function removePreviewedMovie() {
  if (!previewedTitle) {
    return;
  }

  const removedTitle = previewedTitle;
  watched = watched.filter((entry) => entry.title !== removedTitle);
  saveWatched();
  statusLine.textContent = `${removedTitle} was removed from the watchlist.`;
  hideResultModal();
  renderAll();
}

function addPendingResult() {
  if (!pendingResult) {
    return;
  }

  watched.push(pendingResult);
  saveWatched();
  statusLine.textContent = `${pendingResult.title} was added to the watchlist.`;
  pendingResult = null;
  hideResultModal();
  renderAll();
}

function cancelPendingResult() {
  if (!pendingResult) {
    hideResultModal();
    return;
  }

  statusLine.textContent = `${pendingResult.title} stayed in the movie pool.`;
  pendingResult = null;
  hideResultModal();
}

async function addMovieToWatchlist(title, button) {
  if (watched.some((entry) => entry.title === title)) {
    return;
  }

  button.disabled = true;
  const movie = movieLookup[title];
  const poster = await resolveMoviePoster(title);

  watched.push({
    title,
    watchedAt: new Date().toISOString(),
    releaseDate: movie.releaseDate,
    runtime: movie.runtime,
    poster
  });

  saveWatched();
  statusLine.textContent = `${title} was added to the watchlist.`;
  renderAll();
}

function renderAvailableList() {
  const available = getAvailableMovies();

  if (!available.length) {
    availableList.innerHTML = '<li class="empty-state">All movies have been watched. Reset the log to start a fresh Sunday run.</li>';
    return;
  }

  const groupedMovies = available.reduce((groups, title) => {
    const continuity = movieLookup[title].continuity;
    groups[continuity] ||= [];
    groups[continuity].push(title);
    return groups;
  }, {});

  Object.values(groupedMovies).forEach((titles) => {
    titles.sort((firstTitle, secondTitle) => {
      const releaseDifference = getReleaseSortValue(movieLookup[firstTitle].releaseDate) - getReleaseSortValue(movieLookup[secondTitle].releaseDate);
      return releaseDifference || firstTitle.localeCompare(secondTitle);
    });
  });

  availableList.innerHTML = continuityOrder
    .filter((continuity) => groupedMovies[continuity]?.length)
    .map((continuity) => `
      <li class="continuity-group">
        <h3>${continuity}</h3>
        <img class="continuity-image" src="${continuityImages[continuity]}" alt="${continuity}" />
        <p class="continuity-description">${continuityDescriptions[continuity]}</p>
        <ul class="continuity-movies">
          ${groupedMovies[continuity]
            .map((movie) => `
              <li class="movie-pool-item">
                <div class="movie-pool-copy">
                  <span>${movie}</span>
                  <small>Released ${formatReleaseDate(movieLookup[movie].releaseDate)}</small>
                </div>
                <button class="small-btn manual-watch-btn" type="button" data-title="${movie}">Add to watched</button>
              </li>
            `)
            .join('')}
        </ul>
      </li>
    `)
    .join('');
}

function renderHistoryList() {
  if (!watched.length) {
    watchedList.innerHTML = '<li class="empty-state">No movies logged yet — the wheel is ready for the first Sunday pick.</li>';
    return;
  }

  const sorted = [...watched].sort((a, b) => new Date(b.watchedAt) - new Date(a.watchedAt));

  watchedList.innerHTML = sorted
    .map(
      (entry) => `
        <li class="history-item" data-title="${entry.title}">
          <img class="history-poster" src="${entry.poster}" alt="${entry.title} poster" />
          <div class="history-copy">
            <div class="history-title">${entry.title}</div>
            <div class="history-date">Watched: ${formatDate(entry.watchedAt)}</div>
            <div class="history-details">${formatMovieDetails(entry)}</div>
          </div>
        </li>
      `
    )
    .join('');
}

function renderWheel() {
  const available = getAvailableMovies();

  if (!available.length) {
    wheel.style.background = 'conic-gradient(#1f2937 0deg 360deg)';
    wheelLabels.innerHTML = '<div class="wheel-label" style="left:50%;top:50%;transform:translate(-50%, -50%);font-size: 1rem;">All watched</div>';
    return;
  }

  const colors = ['#d9572b', '#d4b83f', '#557a3e', '#a8c957', '#8f2d24', '#277a78', '#c4d65a', '#d1662c', '#496b4b', '#b38d35'];
  const segmentAngle = 360 / available.length;

  const gradient = available
    .map((_, index) => {
      const start = index * segmentAngle;
      const end = (index + 1) * segmentAngle;
      return `${colors[index % colors.length]} ${start}deg ${end}deg`;
    })
    .join(', ');

  wheel.style.background = `conic-gradient(${gradient})`;
  wheelLabels.innerHTML = '';

  available.forEach((movie, index) => {
    const label = document.createElement('div');
    const angle = (index + 0.5) * segmentAngle;
    const textFlip = angle > 90 && angle < 270 ? 180 : 0;
    label.className = 'wheel-label';
    label.textContent = movie;
    label.title = movie;
    label.setAttribute('aria-label', movie);
    label.style.transform = `translate(-50%, -50%) rotate(${angle}deg) translateY(-190px) rotate(${90 + textFlip}deg)`;
    wheelLabels.appendChild(label);
  });
}

function renderAll() {
  watchedCount.textContent = watched.length;
  remainingCount.textContent = getAvailableMovies().length;
  renderWheel();
  renderAvailableList();
  renderHistoryList();
}

function unlockAudioContext() {
  const AudioCtor = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtor) {
    return;
  }

  if (!spinAudioContext) {
    spinAudioContext = new AudioCtor();
  }

  if (spinAudioContext.state === 'suspended') {
    spinAudioContext.resume();
  }
}

function startSpinSound(totalRotationDeg, segmentAngleDeg) {
  unlockAudioContext();
  if (!spinAudioContext) {
    return;
  }

  const now = spinAudioContext.currentTime;
  const durationSeconds = SPIN_DURATION_MS / 1000;

  const rumble = spinAudioContext.createOscillator();
  const rumbleGain = spinAudioContext.createGain();
  rumble.type = 'sine';
  rumble.frequency.setValueAtTime(70, now);
  rumble.frequency.exponentialRampToValueAtTime(36, now + durationSeconds);
  rumbleGain.gain.setValueAtTime(0.0001, now);
  rumbleGain.gain.exponentialRampToValueAtTime(0.05, now + 0.3);
  rumbleGain.gain.exponentialRampToValueAtTime(0.028, now + durationSeconds - 0.4);
  rumbleGain.gain.exponentialRampToValueAtTime(0.0001, now + durationSeconds);
  rumble.connect(rumbleGain);
  rumbleGain.connect(spinAudioContext.destination);
  rumble.start(now);
  rumble.stop(now + durationSeconds + 0.05);

  const tickOffsets = buildSpinTickSchedule(totalRotationDeg, segmentAngleDeg);
  tickOffsets.forEach((offset) => scheduleWheelTick(now + offset));

  spinAudioNodes = { rumble, rumbleGain };
}

function stopSpinSound() {
  if (!spinAudioNodes || !spinAudioContext) {
    return;
  }

  const { rumble, rumbleGain } = spinAudioNodes;
  const now = spinAudioContext.currentTime;

  rumbleGain.gain.cancelScheduledValues(now);
  rumbleGain.gain.setValueAtTime(rumbleGain.gain.value || 0.0001, now);
  rumbleGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.18);
  rumble.stop(now + 0.2);

  spinAudioNodes = null;
}

// Samples the wheel's CSS cubic-bezier(0.12, 0.82, 0.2, 1) so tick timing matches what's on screen.
function sampleSpinEasing(timeFraction) {
  const [x1, y1, x2, y2] = SPIN_EASING;
  const cx = 3 * x1;
  const bx = 3 * (x2 - x1) - cx;
  const ax = 1 - cx - bx;
  const cy = 3 * y1;
  const by = 3 * (y2 - y1) - cy;
  const ay = 1 - cy - by;

  const sampleCurveX = (t) => ((ax * t + bx) * t + cx) * t;
  const sampleCurveY = (t) => ((ay * t + by) * t + cy) * t;
  const sampleCurveDerivativeX = (t) => (3 * ax * t + 2 * bx) * t + cx;

  let t2 = timeFraction;
  for (let i = 0; i < 8; i += 1) {
    const currentX = sampleCurveX(t2) - timeFraction;
    if (Math.abs(currentX) < 1e-6) {
      break;
    }
    const derivative = sampleCurveDerivativeX(t2);
    if (Math.abs(derivative) < 1e-6) {
      break;
    }
    t2 -= currentX / derivative;
  }

  return sampleCurveY(t2);
}

function invertSpinEasing(targetProgress) {
  let low = 0;
  let high = 1;

  for (let i = 0; i < 24; i += 1) {
    const mid = (low + high) / 2;
    if (sampleSpinEasing(mid) < targetProgress) {
      low = mid;
    } else {
      high = mid;
    }
  }

  return (low + high) / 2;
}

function buildSpinTickSchedule(totalRotationDeg, segmentAngleDeg) {
  if (!totalRotationDeg || !segmentAngleDeg) {
    return [];
  }

  const totalSegmentCrossings = Math.floor(totalRotationDeg / segmentAngleDeg);
  const minGapSeconds = 0.045;
  const scheduled = [];
  let lastTime = -Infinity;

  for (let crossing = 1; crossing <= totalSegmentCrossings; crossing += 1) {
    const targetProgress = (crossing * segmentAngleDeg) / totalRotationDeg;
    if (targetProgress >= 1) {
      break;
    }

    const time = invertSpinEasing(targetProgress) * (SPIN_DURATION_MS / 1000);
    if (time - lastTime >= minGapSeconds) {
      scheduled.push(time);
      lastTime = time;
    }
  }

  return scheduled;
}

function getClickNoiseBuffer() {
  if (clickNoiseBuffer) {
    return clickNoiseBuffer;
  }

  const durationSeconds = 0.08;
  const sampleRate = spinAudioContext.sampleRate;
  const length = Math.floor(sampleRate * durationSeconds);
  const buffer = spinAudioContext.createBuffer(1, length, sampleRate);
  const data = buffer.getChannelData(0);

  for (let i = 0; i < length; i += 1) {
    data[i] = Math.random() * 2 - 1;
  }

  clickNoiseBuffer = buffer;
  return clickNoiseBuffer;
}

function scheduleWheelTick(time) {
  const source = spinAudioContext.createBufferSource();
  source.buffer = getClickNoiseBuffer();

  const filter = spinAudioContext.createBiquadFilter();
  filter.type = 'bandpass';
  filter.frequency.setValueAtTime(1500 + Math.random() * 500, time);
  filter.Q.value = 5;

  const gain = spinAudioContext.createGain();
  const peak = 0.2 + Math.random() * 0.08;
  gain.gain.setValueAtTime(0.0001, time);
  gain.gain.exponentialRampToValueAtTime(peak, time + 0.004);
  gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.05);

  source.connect(filter);
  filter.connect(gain);
  gain.connect(spinAudioContext.destination);
  source.start(time);
  source.stop(time + 0.07);
}

function getWheelRotation() {
  const transform = window.getComputedStyle(wheelRotator).transform;

  if (!transform || transform === 'none') {
    return currentRotation;
  }

  const matrix = new DOMMatrix(transform);
  return (Math.atan2(matrix.b, matrix.a) * 180) / Math.PI;
}

function spinWheel() {
  if (spinning) {
    return;
  }

  const available = getAvailableMovies();

  if (!available.length) {
    statusLine.textContent = 'Every Godzilla movie has been watched. Reset the log to start over.';
    return;
  }

  unlockAudioContext();
  currentRotation = getWheelRotation();
  spinning = true;
  wheelRotator.classList.add('is-spinning');
  wheelRotator.style.setProperty('--idle-start', `${currentRotation}deg`);
  wheelRotator.style.transition = 'none';
  wheelRotator.style.transform = `rotate(${currentRotation}deg)`;
  wheelRotator.offsetWidth;
  spinBtn.disabled = true;
  statusLine.textContent = 'Spinning...';

  const selectedIndex = Math.floor(Math.random() * available.length);
  const selectedMovie = available[selectedIndex];
  const segmentAngle = 360 / available.length;
  const segmentCenter = (selectedIndex + 0.5) * segmentAngle;
  const extraTurns = MIN_SPINS + Math.floor(Math.random() * 4);
  const pointerOffset = 360 - ((segmentCenter + 90) % 360);
  const nextRotation = currentRotation + extraTurns * 360 + pointerOffset;

  startSpinSound(nextRotation - currentRotation, segmentAngle);

  wheelRotator.style.transition = `transform ${SPIN_DURATION_MS}ms cubic-bezier(0.12, 0.82, 0.2, 1)`;
  wheelRotator.style.transform = `rotate(${nextRotation}deg)`;

  setTimeout(async () => {
    const poster = await resolveMoviePoster(selectedMovie);

    currentRotation = nextRotation % 360;
    wheelRotator.style.setProperty('--idle-start', `${currentRotation}deg`);
    wheelRotator.style.transform = '';
    wheelRotator.style.transition = '';
    wheelRotator.classList.remove('is-spinning');
    spinning = false;
    spinBtn.disabled = false;
    stopSpinSound();
    statusLine.textContent = `${selectedMovie} is tonight's pick!`;
    showResultModal(selectedMovie, poster);
  }, SPIN_DURATION_MS);
}

resetBtn.addEventListener('click', () => {
  const shouldReset = window.confirm('Reset the watch log and put every movie back into the pool?');

  if (!shouldReset) {
    return;
  }

  watched = [];
  saveWatched();
  currentRotation = 0;
  wheelRotator.style.setProperty('--idle-start', '0deg');
  wheelRotator.style.transform = 'rotate(0deg)';
  wheelRotator.style.transition = '';
  statusLine.textContent = 'The pool has been reset. Ready for a new Sunday.';
  renderAll();
});

downloadLogBtn.addEventListener('click', downloadLog);
availableList.addEventListener('click', (event) => {
  const button = event.target.closest('.manual-watch-btn');

  if (button) {
    addMovieToWatchlist(button.dataset.title, button);
  }
});
watchedList.addEventListener('click', (event) => {
  const item = event.target.closest('.history-item');

  if (item) {
    showMoviePreview(item.dataset.title);
  }
});
resultCancelBtn?.addEventListener('click', cancelPendingResult);
resultAddBtn?.addEventListener('click', addPendingResult);
resultRemoveBtn?.addEventListener('click', removePreviewedMovie);
resultWatchedDateInput?.addEventListener('change', updatePreviewedWatchedDate);
window.addEventListener('pointerdown', unlockAudioContext, { once: true });
spinBtn.addEventListener('click', spinWheel);

renderAll();
