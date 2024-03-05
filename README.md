# fillout-take-home

## About

Fillout take-home assignment.

Handles queries for saved responses at the following endpoints:
`/{formId}/filteredResponses`

Handles existing query parameters for Fillout api. Additionally, handles `filters` query parameter. For example:
`/{formId}/filteredResponses?limit=10&sort=asc&filters=[{"id":"bE2Bo4cGUv49cjnqZ4UnkW","condition":"equals","value":"Johnny"},{"id":"dSRAe3hygqVwTpPK69p5td","condition":"greater_than","value":"2024-01-01T00:00:00.000Z"}]`

Update the `env` file to set `FILLOUT_API_URL`, `FILLOUT_API_KEY`, and `FILLOUT_DEMO_FORM_ID`.

## Available Scripts

### `npm run dev`

Run the server in development mode.

### `npm run build`

Build the project for production.

### `npm start`

Run the production build (Must be built first).

### `npm start -- --env="name of env file" (default is production).`

Run production build with a different env file.

