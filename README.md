# 6037-group

## Pomoland Deploy Notes

- `npm start`: runs the local Pomoland app on one port and serves both the static site and `/api/*`.
- `npm test`: runs the focused Node test suite used by GitHub Actions.
- GitHub Pages deploys the static site from the repository root.
- To connect the public Pages site to a hosted AI backend, set the repository variable `POMOLAND_API_BASE_URL`.
- The deployed workflow writes `runtime-config.js` from that variable before publishing.
