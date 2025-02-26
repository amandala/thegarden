# Welcome to Amanda's Garden

This is a silly little project to track the progress of my seedlings journey from Planting Tray to Tower Garden to me and my Chicken's bellies.

## How it works

DB Tables

- Seeds
- Plants
- Locations
- Events 

Seeds represent a package of seeds. Each plant has a reference to a seed.

Locations represent a place where a plant can live. A plant can be moved between locations throughout its lifecycle via events.

Current Locations:

- Planting Tray (4x4 grid)
- Tower Garden (4x5 tower "grid")
- Graveyard

Plants include their planting date, the id of the seed, and the id of their initial location.

The client fetches the plants, joining their location and seed data, and generates a Garden with 1 Planting Tray, 1 Tower Garden, and 1 Graveyard calculating the current status of the Garden by applying events to the Plants.

Events are stored in the client (working on moving them to DB) and are of one of the following types:

- Plant Event: When a seed has been planted
- Sprout Event: When a seed has sprouted
- Failure Event: When a seed failed to sprout within it's given germination timeframe
- Transplant Event: When a seedling is moved from the Planting Tray to the Tower Garden

Features in Consideration:

- CLI for adding new Plant to DB
- CLI for adding new events to DB

## Local Development

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
