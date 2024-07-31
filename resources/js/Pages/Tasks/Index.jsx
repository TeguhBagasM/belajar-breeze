import Paginator from "@/Components/Tasks/Paginator";
import TaskLists from "@/Components/Tasks/TaskLists";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Index({ auth, tasks }) {
    console.log("Auth:", auth);
    console.log("Tasks:", tasks);

    // Check if tasks is defined and has the expected structure
    const taskData = tasks ? tasks.data : [];
    const taskMeta = tasks ? tasks.meta : {};

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex items-center justify-between">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Task Lists
                    </h2>
                </div>
            }
        >
            <div className="min-h-screen bg-slate-50">
                <Head title="Task Lists" />

                <div className="flex justify-center flex-wrap items-stretch gap-4 p-4">
                    <TaskLists tasks={taskData} />
                </div>
                <div className="flex justify-center items-center mt-4">
                    <Paginator meta={taskMeta} />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
