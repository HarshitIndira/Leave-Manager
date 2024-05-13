import pool from '../../../../dbconfig/dbconfig'
import { hash } from "bcrypt";

export async function POST(request) {
  try {
    const requestBody = await request.json();
    const { name, mobile, email, password } = requestBody;

    const [existingUser] = await pool.query('SELECT * FROM admin WHERE email = ?', [email]);
    if (existingUser.length > 0) {
        console.log("Email already exists")
    }

    const hashedPassword = await hash(password, 10); 

    const result = await pool.query(
      "INSERT INTO admin (name, email, password) VALUES (?, ?, ?)",
      [name, email, hashedPassword]
    );

    return new Response(
      JSON.stringify({ message: "User created successfully", data: result }),
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error("Error creating user:", error);
    return new Response(JSON.stringify({ message: "Failed to create user"}), {
      status: 500,
    });
  }
}
