const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

// Serve static files from "public" folder
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  const name = req.query.name;

  if (!name) {
    // No name submitted yet, serve the form
    res.sendFile(path.join(__dirname, "public", "index.html"));
  } else {
    // Name submitted, respond with personalized welcome page
    res.send(`
      <html>
        <head>
          <title>DevOps Workspace</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              background: linear-gradient(#e0e0e0, #cfcfcf);
              text-align: center;
              padding-top: 100px;
            }
            h1 { color: #333; }
            .btn {
              font-size: 18px;
              padding: 10px 20px;
              border: none;
              border-radius: 5px;
              cursor: pointer;
              margin: 5px;
            }
            .yes { background-color: #28a745; color: white; }
            .no { background-color: #dc3545; color: white; }
          </style>
        </head>
        <body>
          <h1>Welcome to the ${name} DevOps WorkSpace</h1>
          <button class="btn yes">Yes</button>
          <button class="btn no">No</button>
        </body>
      </html>
    `);
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
