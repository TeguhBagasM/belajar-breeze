import { Link, Head } from "@inertiajs/react";

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Welcome" />
            <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
                <div className="relative min-h-screen flex flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white">
                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                        <header className="grid grid-cols-2 items-center gap-2 py-10 lg:grid-cols-3">
                            <div className="flex lg:justify-center lg:col-start-2">
                                <h1 className="text-4xl font-bold text-[#FF2D20]">
                                    Sistem Pembelajaran Online
                                </h1>
                            </div>
                            <nav className="-mx-3 flex flex-1 justify-end">
                                {auth.user ? (
                                    <Link
                                        href={route("dashboard")}
                                        className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                    >
                                        Dashboard
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            href={route("login")}
                                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                        >
                                            Log in
                                        </Link>
                                        <Link
                                            href={route("register")}
                                            className="ml-4 rounded-md px-3 py-2 text-white bg-[#FF2D20] ring-1 ring-transparent transition hover:bg-[#FF4D40] focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                        >
                                            Register
                                        </Link>
                                    </>
                                )}
                            </nav>
                        </header>

                        <main className="mt-6">
                            <div className="text-center">
                                <h2 className="text-2xl font-bold mb-4">
                                    Selamat Datang di Sistem Pembelajaran Online
                                </h2>
                                <p className="text-lg mb-6">
                                    Belajar lebih mudah dan efisien dengan
                                    berbagai fitur yang kami tawarkan.
                                </p>
                                {/* <Link
                                    href={route('courses')}
                                    className="inline-block rounded-md px-5 py-3 text-white bg-[#FF2D20] ring-1 ring-transparent transition hover:bg-[#FF4D40] focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                >
                                    Jelajahi Kursus
                                </Link> */}
                            </div>

                            <div className="mt-10 grid gap-8 lg:grid-cols-3 lg:gap-12">
                                <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-zinc-900">
                                    <h3 className="text-xl font-semibold mb-4">
                                        Kursus Terbaru
                                    </h3>
                                    <p className="mb-4">
                                        Temukan berbagai kursus terbaru yang
                                        dapat membantu Anda meningkatkan
                                        keterampilan.
                                    </p>
                                    {/* <Link href={route('courses.latest')} className="text-[#FF2D20] hover:underline">
                                        Lihat Kursus Terbaru
                                    </Link> */}
                                </div>
                                <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-zinc-900">
                                    <h3 className="text-xl font-semibold mb-4">
                                        Testimoni
                                    </h3>
                                    <p className="mb-4">
                                        Dengarkan apa yang dikatakan pengguna
                                        kami tentang pengalaman mereka belajar
                                        dengan kami.
                                    </p>
                                    {/* <Link href={route('testimonials')} className="text-[#FF2D20] hover:underline">
                                        Baca Testimoni
                                    </Link> */}
                                </div>
                                <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-zinc-900">
                                    <h3 className="text-xl font-semibold mb-4">
                                        Fitur Unggulan
                                    </h3>
                                    <p className="mb-4">
                                        Kami menawarkan berbagai fitur unggulan
                                        untuk membantu Anda belajar dengan lebih
                                        efektif.
                                    </p>
                                    {/* <Link href={route('features')} className="text-[#FF2D20] hover:underline">
                                        Jelajahi Fitur
                                    </Link> */}
                                </div>
                            </div>
                        </main>

                        <footer className="mt-12 text-center text-sm">
                            <p>
                                &copy; 2024 Sistem Pembelajaran Online. Semua
                                hak dilindungi.
                            </p>
                        </footer>
                    </div>
                </div>
            </div>
        </>
    );
}
