// // pages/api/folders.js

// import fs from "fs";
// import path from "path";

// export default function handler(req, res) {
//   // Path to the "all" folder
//   const folderPath = path.join(process.cwd(), "public", "images", "all");
//   console.log(folderPath);

//   try {
//     // Read the contents of the "all" folder
//     const folders = fs
//       .readdirSync(folderPath, { withFileTypes: true })
//       .filter((dirent) => dirent.isDirectory())
//       .map((dirent) => dirent.name);

//     // Send the folder names as the API response
//     res.status(200).json({ folders });
//   } catch (error) {
//     console.error("Error reading folder contents:", error);
//     res.status(500).json({ error: "Failed to read folder contents" });
//   }
// }

// pages/api/folders.js
"use client";
import fs from "fs";
import path from "path";

export default function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
    return;
  }

  // Path to the "all" folder
  const folderPath = path.join(process.cwd(), "public", "image", "posts");
  console.log("HELOO");
  console.log(folderPath);
  // try {
  //   // Read the contents of the "all" folder
  //   const folders = fs
  //     .readdirSync(folderPath, { withFileTypes: true })
  //     .filter((dirent) => dirent.isDirectory())
  //     .map((dirent) => dirent.name);

  //   // Send the folder names as the API response
  //   res.status(200).json({ folders });
  // } catch (error) {
  //   console.error("Error reading folder contents:", error);
  //   res.status(500).json({ error: "Failed to read folder contents" });
  // }
}
