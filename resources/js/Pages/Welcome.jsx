import { Link, Head } from "@inertiajs/react";
import { FaHeart } from "react-icons/fa";

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Task Management" />
            <div className="min-h-screen flex flex-col justify-between bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
                <header className="bg-white dark:bg-gray-800 shadow">
                    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                        <h1 className="text-3xl font-bold text-indigo-600">
                            TaskMaster
                        </h1>
                        <nav className="flex space-x-4">
                            {auth.user ? (
                                <Link
                                    href={route("dashboard")}
                                    className="text-indigo-600 hover:text-indigo-800"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={route("login")}
                                        className="text-indigo-600 hover:text-indigo-800"
                                    >
                                        Log in
                                    </Link>
                                    <Link
                                        href={route("register")}
                                        className="text-indigo-600 hover:text-indigo-800"
                                    >
                                        Register
                                    </Link>
                                </>
                            )}
                        </nav>
                    </div>
                </header>

                <main className="mt-6 text-center">
                    <h2 className="text-4xl font-bold text-gray-800 dark:text-white">
                        Manage Your Tasks Efficiently
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                        Keep track of your tasks, set deadlines, and boost your
                        productivity with TaskMaster.
                    </p>
                    <div className="mt-8 space-x-4">
                        <Link
                            href={route("register")}
                            className="inline-block rounded-lg bg-indigo-500 px-5 py-3 text-white font-semibold hover:bg-indigo-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
                        >
                            Get Started
                        </Link>
                        <Link
                            href={route("login")}
                            className="inline-block rounded-lg bg-gray-200 px-5 py-3 text-gray-800 font-semibold hover:bg-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
                        >
                            Log In
                        </Link>
                    </div>
                </main>

                <footer className="bg-white dark:bg-gray-800 shadow">
                    <div className="container mx-auto px-4 py-4 text-center flex justify-center items-center">
                        <p className="text-gray-600 dark:text-gray-400 flex items-center space-x-2">
                            <span>Created with</span>
                            <FaHeart className="text-red-500" />
                            <span>by Teguh Bagas M</span>
                        </p>
                    </div>
                </footer>
            </div>
        </>
    );
}

// Tailwind CSS classes for buttons
const btnPrimary =
    "inline-block px-6 py-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md text-lg";
const btnSecondary =
    "inline-block px-6 py-3 text-indigo-600 bg-white hover:bg-gray-100 rounded-md text-lg";
