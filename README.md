# Scirocco Menu

[![License: GPL-3.0](https://img.shields.io/badge/License-GPL--3.0-orange.svg)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=nextdotjs)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

Applicazione web responsive per la visualizzazione del menu digitale di **Scirocco 2025**, con contenuti strutturati in JSON e layout ottimizzato per mobile, tablet e desktop.

## Panoramica

Il progetto nasce per presentare il menu in modo chiaro, veloce e coerente con l'identità visiva del locale.  
L'intero contenuto è separato dalla UI, così da poter aggiornare piatti, prezzi e immagini senza intervenire sulla logica dell'applicazione.

## Funzionalità

- Layout responsive per tutte le dimensioni schermo.
- Menu organizzato per categorie.
- Card piatto con immagine, nome, sottotitolo e prezzo.
- Dati gestiti da file JSON.
- Struttura pronta per estensioni future, come ricerca, filtri e toggle lingua.
- Design coerente con il branding Scirocco.

## Stack tecnico

- Next.js
- TypeScript
- Tailwind CSS
- React
- JSON per la configurazione dei contenuti

## Struttura del progetto

```bash
app/
components/
data/
public/
types/
```

- `app/`: layout e pagine.
- `components/`: componenti riutilizzabili dell'interfaccia.
- `data/menu.json`: sorgente dati del menu.
- `public/images/`: immagini dei piatti e del logo.
- `types/`: definizioni TypeScript condivise.

## Requisiti

- Node.js 18 o superiore
- Bun oppure npm
- Git

## Installazione

```bash
git clone https://github.com/fabrix-87/scirocco_menu.git
cd scirocco_menu
bun install
```

Con npm:

```bash
npm install
```

## Avvio in locale

```bash
bun dev
```

Oppure:

```bash
npm run dev
```

Apri il browser su:

```bash
http://localhost:3000
```

## Configurazione contenuti

I dati del menu sono definiti in:

```bash
data/menu.json
```

Ogni item può includere:

- `name`: nome in italiano.
- `nameEn`: nome in inglese.
- `price`: prezzo.
- `image`: percorso dell'immagine.
- `description`: descrizione opzionale.

Le immagini vanno inserite in:

```bash
public/images/
```

e richiamate nel JSON tramite path assoluto, ad esempio:

```json
{
  "id": "p1",
  "name": "Panino con Carne di Cavallo",
  "nameEn": "Horse meat sandwich",
  "price": 7,
  "image": "/images/panino-cavallo.jpg"
}
```

## Build produzione

```bash
bun build
bun start
```

Oppure:

```bash
npm run build
npm run start
```

## Deploy

L'applicazione è compatibile con i principali provider per app Next.js, tra cui:

- Vercel
- Netlify
- Docker-based hosting

## Licenza

Questo progetto è distribuito sotto licenza [GNU General Public License v3.0](LICENSE).

In breve: puoi usare, modificare e redistribuire il codice, ma le opere derivate devono rimanere sotto la stessa licenza GPL-3.0.

## Crediti

Progetto sviluppato per **Scirocco 2025**.