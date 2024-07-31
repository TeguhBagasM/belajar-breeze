import { Link, Head } from "@inertiajs/react";

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Task Management App" />
            <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50 min-h-screen flex flex-col items-center justify-center">
                <div className="relative w-full max-w-4xl px-6 lg:px-8">
                    <header className="flex justify-between items-center py-10">
                        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
                            Task Management App
                        </h1>
                        <nav className="space-x-4">
                            {auth.user ? (
                                <Link
                                    href={route("dashboard")}
                                    className="rounded-md px-3 py-2 text-gray-800 ring-1 ring-transparent transition hover:text-gray-600 focus:outline-none focus-visible:ring-red-500 dark:text-white dark:hover:text-gray-300 dark:focus-visible:ring-white"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={route("login")}
                                        className="rounded-md px-3 py-2 text-gray-800 ring-1 ring-transparent transition hover:text-gray-600 focus:outline-none focus-visible:ring-red-500 dark:text-white dark:hover:text-gray-300 dark:focus-visible:ring-white"
                                    >
                                        Log in
                                    </Link>
                                    <Link
                                        href={route("register")}
                                        className="rounded-md px-3 py-2 text-gray-800 ring-1 ring-transparent transition hover:text-gray-600 focus:outline-none focus-visible:ring-red-500 dark:text-white dark:hover:text-gray-300 dark:focus-visible:ring-white"
                                    >
                                        Register
                                    </Link>
                                </>
                            )}
                        </nav>
                    </header>

                    <main className="mt-6 text-center">
                        <h2 className="text-4xl font-bold text-gray-800 dark:text-white">
                            Manage Your Tasks Efficiently
                        </h2>
                        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                            Stay organized and increase your productivity with
                            our task management app. Create, update, and track
                            your tasks easily.
                        </p>
                        <div className="mt-8 space-x-4">
                            <Link
                                href={route("register")}
                                className="inline-block rounded-lg bg-red-500 px-5 py-3 text-white font-semibold hover:bg-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
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
                </div>
            </div>
        </>
    );
}
