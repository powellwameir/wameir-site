// Minimal static server for the Wameir site.
// Railway sets process.env.PORT; we listen on it and serve /public.
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve everything in /public as static files (index.html is the site).
app.use(
  express.static(path.join(__dirname, "public"), {
    extensions: ["html"],
    maxAge: "1h",
  })
);

// Single-page site: send index.html for anything not found.
app.get("*", (_req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Wameir site running on port ${PORT}`);
});
