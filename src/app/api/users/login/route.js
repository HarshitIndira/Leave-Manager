// pages/api/users/login.js

import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import pool from "../../../../dbconfig/dbconfig";
import { serialize } from "cookie";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    try {
      const [user] = await pool.query("SELECT * FROM users WHERE email = ?", [
        email,
      ]);
      if (user.length === 0) {
        return res.status(401).json({ message: "User not found" });
      }

      const isPasswordValid = await compare(password, user[0].password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: "Incorrect password" });
      }

      // User authenticated, generate JWT token
      const token = sign({ userId: user[0].id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });

      // Set up session cookie
      res.setHeader(
        "Set-Cookie",
        serialize("token", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "strict",
          maxAge: 3600, // 1 hour expiration
          path: "/", // Cookie accessible from all routes
        })
      );

      res.status(200).json({ message: "Login successful" });
    } catch (error) {
      console.error("Error logging in:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
