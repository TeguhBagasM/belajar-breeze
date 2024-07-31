import React from "react";

const TaskItems = ({ data }) => {
    return (
        <div className="card w-full lg:w-96 bg-white shadow-lg transform hover:-translate-y-2 transition-transform duration-300 ease-in-out rounded-lg overflow-hidden">
            <div className="card-body p-6">
                <h3 className="text-xl font-semibold mb-2">{data.title}</h3>
                <p className="text-gray-700 mb-4">{data.description}</p>
                <div className="flex justify-between items-center">
                    <div className="badge bg-blue-500 text-white px-2 py-1 rounded">
                        {data.status}
                    </div>
                    <div className="text-gray-500 text-sm">{data.due_date}</div>
                </div>
            </div>
        </div>
    );
};

export default TaskItems;
