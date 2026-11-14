# What is Web Development?

**Web development** is the process of building and maintaining websites and web applications that run in a browser.

## Client vs Server

Every web app is split into two halves:

- **Frontend (Client-side):** What users see and interact with directly in their browser.
- **Backend (Server-side):** The behind-the-scenes logic, database storage and authentication.

## The Core Building Blocks

### Frontend

- **HTML:** Defines the layout and structure (headings, text, forms).
- **CSS:** Handles visual styling (colours, fonts, responsive layouts).
- **JavaScript:** Adds interactivity (animations, button clicks, dynamic content).

### Backend

- **Server:** A remote machine listening for incoming requests.
- **Application Logic:** Code (Node.js/Express.js, Python, etc.) that processes requests and executes business rules.
- **Database:** Stores persistent data (MongoDB, MySQL, PostgreSQL).
- **API:** The communication layer that lets the frontend securely talk to the backend.

## How a Web App Works

```text
Browser (Client)          Backend Server                 Database
      |                         |                            |
      |--- HTTP Request ------->|                            |
      |    (e.g. GET /posts)    |                            |
      |                         |--- Fetch Data ------------>|
      |                         |<-- Return Data ------------|
      |<-- HTTP Response -------|                            |
      |    (JSON/HTML)          |                            |
      |                                                      |
[Render Interface]
```

- **User Action:** You open a URL, click a button or submit a form.
- **Request:** The browser sends an HTTP request across the internet to the server.
- **Processing:** The server validates the request and reads from or writes to the database.
- **Response:** The server returns data (usually JSON or HTML) with a status code (`200 OK`).
- **Render:** The browser parses the response and updates what you see on screen.
