export default function RoadmapSection({ roadmap = [] }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <h2 className="text-xl font-semibold mb-6">6-Month Roadmap</h2>

      <div className="space-y-6">
        {roadmap.length > 0 ? (
          roadmap.map((item, index) => (
            <div key={index} className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold">
                Month {item?.month ?? index + 1}
              </h3>

              <p className="text-gray-600">
                Topics: {Array.isArray(item?.topics)
                  ? item.topics.join(", ")
                  : "No topics provided"}
              </p>

              <p className="text-gray-600">
                Projects: {Array.isArray(item?.projects)
                  ? item.projects.join(", ")
                  : "No projects provided"}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-400">Roadmap not available</p>
        )}
      </div>
    </div>
  );
}
