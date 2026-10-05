# Architecture

## Goal

The project uses a small monorepo to separate presentation, HTTP/API concerns, documentation and automated tests while keeping local development simple.

```text
accessibility-audit/
├── client/                  # Browser application
│   └── src/
├── server/                  # HTTP API
│   ├── src/
│   └── test/
├── docs/                    # Audit + architecture documentation
├── tests/                   # Cross-project test notes
├── screenshots/             # Human-collected audit evidence
└── README.md
```

## Boundaries

### Client

Responsible for:
- UI rendering
- keyboard interaction
- semantic HTML
- accessible form controls
- displaying API responses
- user-facing validation

The client must not contain database or persistence logic.

### Server

Responsible for:
- HTTP endpoints
- request validation
- service-level business rules
- persistence boundary

The server exposes JSON APIs and does not own browser presentation.

### Docs

Contains the audit evidence model, architecture decisions and setup instructions. Documentation is treated as a first-class project deliverable.

### Tests

Tests verify contracts and accessibility-related structural expectations. Browser-level accessibility testing can be added later with Playwright + axe.

## First vertical feature slice

The first end-to-end slice is **Submit Service Request**:

```text
User
  │
  ▼
React form
  │ POST /api/requests
  ▼
Express route
  │ validate payload
  ▼
Request model (in-memory for demo)
  │
  ▼
JSON response
  │
  ▼
Accessible status message + request list
```

## API contract

### `GET /api/health`

Returns:

```json
{ "status": "ok", "service": "request-api" }
```

### `GET /api/requests`

Returns the current in-memory requests.

### `POST /api/requests`

Body:

```json
{
  "name": "Example User",
  "email": "user@example.com",
  "service": "Document certificate",
  "description": "Request details"
}
```

Response: HTTP `201`

```json
{
  "request": {
    "id": "REQ-ABC123",
    "status": "Submitted"
  }
}
```

## Local development

```bash
npm install
npm run dev
```

Client and server are independently runnable:

```bash
npm run dev --workspace client
npm run dev --workspace server
```

## Future production boundary

For production, replace the in-memory array with a repository/data-access layer:

```text
server/
├── routes/
├── services/
├── repositories/
└── models/
```

This keeps HTTP concerns separate from persistence and makes the first feature easier to test.
