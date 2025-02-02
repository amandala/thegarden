# Welcome to Amanda's Garden

This is a silly little project to track the progress of my seedlings journey from Planting Tray to Tower Garden.

## How it works

DB Tables

- Plants
- Locations
- Events (WIP)

Plants are created in the Postgress DB and include their planting date and the ID of their initial location.

The client fetches the plants, joining their location data, and generates a Garden with 1 Planting Tray, 1 Tower Garden, and 1 Graveyard by calculating the current status of the Garden by applying events to the Plants.

Events are stored in the client (working on moving them to DB) and are of one of the following types:

- Sprout Event: When a seed has sprouted
- Failure Event: When a seed failed to sprout within it's given germination timeframe
- Transplant Event: When a seedling is moved from the Planting Tray to the Tower Garden

NOTE: The Plant records in the database only know about their initial inception (location, planted date). All the manipulations to the plant data fetched from the DB are done in the client at this time.

Features in Consideration:

- Events in DB
- Seed Event to record datePlanted and Planting Tray Location on a Plant
- Ability to calculate the state of the Garden on any date
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
