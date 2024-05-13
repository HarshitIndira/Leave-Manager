"use client"
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/Logo.png";
import { FiUser } from "react-icons/fi";
import { MdOutlineLocalPostOffice } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";
import { useState, useEffect } from "react";
import axios from 'axios';

// import useRouter from "next/navigation";

export default function AdminDashboard() {
  // const router = useRouter();
  const handlelogout = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("/api/users/logout", {
        email,
        password,
      });
      if (response.status === 200) {
        router.push("/"); // Redirect to dashboard or any protected route
      }
    } catch (error) {
      setError(error.response.data.message);
    } finally {
      setLoading(false); // Set loading back to false after authentication process completes
    }
  };

  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('/api/users/getdata');
        console.log("Back to admin frontend code")
        console.log(response);
        if (response!=0) {
          const data = await response.json();
          setUsers(data);
        } else {
          console.error('Failed to fetch users');
        }
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      {/* full screen */}
      <div className="bg-white h-full w-full flex flex-auto">
        {/* Side navbar */}
        <div className="bg-black h-full w-1/6 flex flex-col justify-between">
          <div className="flex flex-col">
            <div className="text-center py-2 flex">
              <div className="pl-2 pr-4">
                <Image src={Logo} width={50} height={50} alt="This is logo image" />
              </div>
              <div>Welcome, Admin</div>
            </div>
            <div className="pt-6 pb-2 px-8">
              <Link href="/admindashboard">
                <button className=" w-full text-left transition-colors duration-300 hover:text-blue-600 flex">
                  <FiUser className="mr-2 mt-1" />
                  Employees
                </button>
              </Link>
            </div>
            <div className="py-2 px-8">
              <Link href="/leaverequests">
                <button className=" w-full text-left transition-colors duration-300 hover:text-blue-600 flex">
                  <MdOutlineLocalPostOffice className="mt-1 mr-2" />
                  Leave Requests
                </button>
              </Link>
            </div>
          </div>
          <div className="py-6 px-8">
            <Link href="/api/users/logout/route.js">
              <button onClick={handlelogout} className=" w-full text-left transition-colors duration-300 hover:text-blue-600 flex">
                <IoLogOutOutline className="mt-1 mr-2" />
                Logout
              </button>
            </Link>
          </div>
        </div>

        {/* Main content page */}
        <div className="text-black w-5/6  ml-64 pt-24">
          <table
            className="table-auto border-collapse border border-black"
            id="employeeData"
          >
            <thead className="bg-slate-200">
              <tr>
                <th className="border border-black px-4 py-2">Name</th>
                <th className="border border-black px-4 py-2">Email</th>
                <th className="border border-black px-4 py-2">Phone Number</th>
                <th className="border border-black px-4 py-2">Password</th>
                <th className="border border-black px-4 py-2">Edit</th>
                <th className="border border-black px-4 py-2">Delete</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td className="border border-black px-4 py-2 text-center">{user.name}</td>
                  <td className="border border-black px-4 py-2 text-center">{user.email}</td>
                  <td className="border border-black px-4 py-2 text-center">{user.mobile}</td>
                  <td className="border border-black px-4 py-2 text-center">{user.password}</td>
                  <td className="border border-black px-4 py-2 text-center">
                    <button>
                      <FaRegEdit />
                    </button>
                  </td>
                  <td className="border border-black px-4 py-2 text-center">
                    <button>
                      <MdDeleteOutline />
                    </button>
                  </td>
                  {/* Render more table cells for other user properties */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
