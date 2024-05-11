// import pool from '../../../../dbconfig/dbconfig';
// import bcrypt from 'bcrypt';

// export default async function handler(req, res) {
//   console.log("backend called")
//   if (req.method === 'POST') {
//     handlePost(req, res);
//   } else {
//     res.status(405).end();
//   }
// }

// async function handlePost(req, res) {
//   console.log(req.body);
//   const { name, mobile, email, password } = req.body;
  
//   try {
    
//     const hashedPassword = await bcrypt.hash(password, 10);

    
//     const sql = 'INSERT INTO users (name, mobile, email, password) VALUES (?, ?, ?, ?)';
//     await pool.query(sql, [name, mobile, email, hashedPassword]);

//     res.status(200).json({ message: 'User registered successfully' });
//   } catch (error) {
//     console.error('Error inserting user:', error);
   
//     res.status(500).json({ message: 'Internal server error' });
//   }
// }


// import pool from '../../../../dbconfig/dbconfig'
// import { hash } from "bcrypt";
// export async function POST(request) {
//   try {

//     const requestBody = await request.json();

//     const { name, mobile, email, password } = requestBody;
//     console.log(name);

//     const [existingUser] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
//     if (existingUser.length > 0) {
//         pool.release();
//         return new Response(JSON.stringify({ message: 'Email already exists' }), {
//             status: 400,
//         });
//     }

//     const hashedPassword = await hash(password, 10); 

    
//     const result = await pool.query(
//       "INSERT INTO users (name, phone, email, password) VALUES (?, ?, ?, ?)",
//       [name, mobile, email, hashedPassword]
//     );

   

//     pool.release();

//     return new Response(
//       JSON.stringify({ message: "User created successfully", data: result }),
//       {
//         status: 201,
//       }
//     );
//   } catch (error) {
//     console.error("Error creating user:", error);
//     if(error.message)
//     return new Response(JSON.stringify({ message: "Failed to create user" }), {
//       status: 500,
//     });
//   }
// }

import pool from '../../../../dbconfig/dbconfig'
import { hash } from "bcrypt";

export async function POST(request) {
  try {
    const requestBody = await request.json();
    const { name, mobile, email, password } = requestBody;

    const [existingUser] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
    if (existingUser.length > 0) {
        console.log("Email already exists")
    }

    const hashedPassword = await hash(password, 10); 

    const result = await pool.query(
      "INSERT INTO users (name, phone, email, password) VALUES (?, ?, ?, ?)",
      [name, mobile, email, hashedPassword]
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
