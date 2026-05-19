# 6037-group

## Pomoland Deploy Notes

- `npm start`: runs the local Pomoland app on one port and serves both the static site and `/api/*`.
- `npm test`: runs the focused Node test suite used by GitHub Actions.
- GitHub Pages deploys the static site from the repository root.
- To connect the public Pages site to a hosted AI backend, set the repository variable `POMOLAND_API_BASE_URL`.
- The deployed workflow writes `runtime-config.js` from that variable before publishing.

## Cloud Save (UID + Password)

This repo supports a lightweight cloud-save system using SQLite:

- Register: `POST /api/auth/register` with `{ uid: "12345678", password: "****" }`
- Login: `POST /api/auth/login` with `{ uid, password }`
- Load state: `GET /api/state` (Authorization: Bearer TOKEN)
- Save state: `POST /api/state` with `{ state: {...} }` (Authorization: Bearer TOKEN)

### Render note (important)

If you want save data to survive deploys/restarts on Render, attach a **Persistent Disk**
and set `SQLITE_PATH` to a path on that disk (e.g. `/var/data/pomoland.db`).
