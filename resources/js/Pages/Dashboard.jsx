import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { FaChartLine, FaUser, FaTasks, FaCog } from "react-icons/fa";

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex items-center justify-between">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Dashboard
                    </h2>
                    <div className="flex items-center space-x-4">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
                            <FaCog className="inline-block mr-2" />
                            Settings
                        </button>
                    </div>
                </div>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Card 1 */}
                        <div className="bg-white shadow-md rounded-lg p-6">
                            <div className="flex items-center">
                                <FaChartLine className="text-blue-500 text-3xl" />
                                <div className="ml-4">
                                    <h3 className="text-lg font-semibold text-gray-900">
                                        Performance
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        Track your performance over time.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white shadow-md rounded-lg p-6">
                            <div className="flex items-center">
                                <FaUser className="text-green-500 text-3xl" />
                                <div className="ml-4">
                                    <h3 className="text-lg font-semibold text-gray-900">
                                        User Statistics
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        Monitor user activity and engagement.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white shadow-md rounded-lg p-6">
                            <div className="flex items-center">
                                <FaTasks className="text-orange-500 text-3xl" />
                                <div className="ml-4">
                                    <h3 className="text-lg font-semibold text-gray-900">
                                        Task Overview
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        Manage and review tasks efficiently.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white shadow-sm rounded-lg mt-8 p-6">
                        <h3 className="text-lg font-semibold text-gray-900">
                            Welcome, {auth.user.name}!
                        </h3>
                        <p className="mt-2 text-gray-600">
                            You're logged in and ready to go. Check out the
                            statistics and tools available on your dashboard.
                        </p>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
