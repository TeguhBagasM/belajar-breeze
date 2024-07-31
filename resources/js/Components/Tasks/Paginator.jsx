import { Link } from "@inertiajs/react";

const Paginator = ({ meta }) => {
    console.log("Paginator Meta:", meta);

    const prev = meta.links ? meta.links[0]?.url : null;
    const next = meta.links ? meta.links[meta.links.length - 1]?.url : null;
    const current = meta.current_page || 1;

    return (
        <div className="flex justify-center gap-2 mt-4">
            {prev && (
                <Link href={prev} className="btn btn-outline">
                    «
                </Link>
            )}
            <span className="btn btn-disabled">{current}</span>
            {next && (
                <Link href={next} className="btn btn-outline">
                    »
                </Link>
            )}
        </div>
    );
};

export default Paginator;
