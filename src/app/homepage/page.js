import Image from "next/image"
import Logo from "../../../public/Logo.png"

export default function Home() {
    return (
        <>
            {/* full screen */}
            <div className="bg-white h-full w-full flex flex-auto">
                {/* Side navbar */}
                <div className="bg-black h-full w-1/6">
                    <div className="flex-col">
                        {/* <div className="py-2">
                            <Image
                                src={user}
                            />
                        </div> */}

                        <div className="text-center py-2 flex flex-auto">
                            <div className="pl-8 pr-6">
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
                        <div className="text-center pt-6 pb-2" >
                            <button>
                                Employees
                            </button>
                        </div>
                        <div className="text-center py-2">
                            <button>
                                Leave Requests
                            </button>
                        </div>
                    </div>
                </div>
                {/* Main content page */}
                <div className="text-black w-4/6 pl-28">
                    <table class="table-auto">
                        <thead >
                            <tr>
                                <th className="border-4 border-indigo-500 px-12">Name</th>
                                <th className="border-4 border-indigo-500 px-12">Email</th>
                                <th className="border-4 border-indigo-500 px-12">Phone Number</th>
                                <th className="border-4 border-indigo-500 px-12">Password</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border-2 border-slate-400">Mahendra Singh Dhoni</td>
                                <td className="border-2 border-slate-400">msd@gmail.com</td>
                                <td className="border-2 border-slate-400">7777777777</td>
                                <td className="border-2 border-slate-400">2011</td>
                            </tr>
                            <tr>
                                <td className="border-2 border-slate-400">Suresh Raina</td>
                                <td className="border-2 border-slate-400">suresh@gmail.com</td>
                                <td className="border-2 border-slate-400">9876543231</td>
                                <td className="border-2 border-slate-400">2014</td>
                            </tr>
                            <tr>
                                <td className="border-2 border-slate-400">Virat Kohli</td>
                                <td className="border-2 border-slate-400">virat@gmail.com</td>
                                <td className="border-2 border-slate-400">8888888888</td>
                                <td className="border-2 border-slate-400">2016</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}