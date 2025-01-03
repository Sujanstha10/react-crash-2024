import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
const JobList = ({ job }) => {
  const [showFullJobDescription, setShowFullJobDescription] = useState(false);
  let description = job.description;
  if (!showFullJobDescription) {
    description = description.substring(0, 100) + "...";
  }
  return (
    <>
      <div className="bg-white rounded-xl shadow-md relative">
        <div className="p-4">
          <div className="mb-6">
            <div className="text-gray-600 my-2">{job.type}</div>
            <h3 className="text-xl font-bold">{job.title}</h3>
          </div>

          <div className="mb-2">
            {description}
            <button
              className="text-indigo-500  -mt-10"
              onClick={() =>
                setShowFullJobDescription((currrentState) => !currrentState)
              }
            >
              {showFullJobDescription ? "..Less" : "More"}
            </button>
          </div>

          <h3 className="text-indigo-500 mb-2">{job.salary} / Year</h3>

          <div className="border border-gray-100 mb-5"></div>

          <div className="flex flex-col lg:flex-row justify-between mb-4">
            <div className="text-red-600 mb-3">
              <FaLocationDot className="inline mr-1 mb-1 text-lg" />
              {job.location}
            </div>
            <Link
              to={`/job/${job.id}`}
              className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobList;
