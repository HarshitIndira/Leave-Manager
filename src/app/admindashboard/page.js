import Link from 'next/link';
import Image from "next/image"
import Logo from "../../../public/Logo.png"
import { FiUser } from "react-icons/fi";
import { MdOutlineLocalPostOffice } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";

export default function Home() {


    return (
        <>
            {/* full screen */}
            <div className="bg-white h-full w-full flex flex-auto">
                {/* Side navbar */}
                <div className="bg-black h-full w-1/6 flex flex-col justify-between">
                    <div className="flex flex-col">
                        <div className="text-center py-2 flex">
                            <div className="pl-2 pr-4">
                                <Image
                                    src={Logo}
                                    width={50}
                                    height={50}
                                />
                            </div>
                            <div>
                                Welcome, Admin
                            </div>
                        </div>
                        <div className="pt-6 pb-2 px-8">
                            <Link href="/admindashboard">
                                <button className="block w-full text-left transition-colors duration-300 hover:text-blue-600 flex">
                                    <FiUser className="mr-2 mt-1" />Employees
                                </button>
                            </Link>

                        </div>
                        <div className="py-2 px-8">
                            <Link href="leaverequests">
                                <button className="block w-full text-left transition-colors duration-300 hover:text-blue-600 flex">
                                    <MdOutlineLocalPostOffice className="mt-1 mr-2" />Leave Requests
                                </button>
                            </Link>

                        </div>
                    </div>
                    <div className="py-6 px-8">
                        <Link href="/">
                            <button className="block w-full text-left transition-colors duration-300 hover:text-blue-600 flex">
                                <IoLogOutOutline className="mt-1 mr-2" />Logout
                            </button>
                        </Link>

                    </div>
                </div>

                {/* Main content page */}
                <div className="text-black w-5/6  ml-64 pt-24">
                    <table className="table-auto border-collapse border border-black" id="employeeData">
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
                            <tr>
                                <td className="border border-black px-4 py-2 text-center">Mahendra Singh Dhoni</td>
                                <td className="border border-black px-4 py-2 text-center">msd@gmail.com</td>
                                <td className="border border-black px-4 py-2 text-center">7777777777</td>
                                <td className="border border-black px-4 py-2 text-center">2011</td>
                                <td className="border border-black px-4 py-2 text-center"><button><FaRegEdit /></button></td>
                                <td className="border border-black px-4 py-2 text-center"><button><MdDeleteOutline /></button></td>
                            </tr>
                            <tr>
                                <td className="border border-black px-4 py-2 text-center">Suresh Raina</td>
                                <td className="border border-black px-4 py-2 text-center">suresh@gmail.com</td>
                                <td className="border border-black px-4 py-2 text-center">9876543231</td>
                                <td className="border border-black px-4 py-2 text-center">2014</td>
                                <td className="border border-black px-4 py-2 text-center"><button><FaRegEdit /></button></td>
                                <td className="border border-black px-4 py-2 text-center"><button><MdDeleteOutline /></button></td>
                            </tr>
                            <tr>
                                <td className="border border-black px-4 py-2 text-center">Virat Kohli</td>
                                <td className="border border-black px-4 py-2 text-center">virat@gmail.com</td>
                                <td className="border border-black px-4 py-2 text-center">8888888888</td>
                                <td className="border border-black px-4 py-2 text-center">2016</td>
                                <td className="border border-black px-4 py-2 text-center"><button><FaRegEdit /></button></td>
                                <td className="border border-black px-4 py-2 text-center"><button><MdDeleteOutline /></button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}