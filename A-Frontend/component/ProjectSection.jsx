export default function ProjectSection({ projects = [] }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <h2 className="text-xl font-semibold mb-6">Suggested Projects</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.length > 0 ? (
          projects.map((project, index) => (
            <div key={index} className="bg-gray-100 rounded-xl p-4">
              <h3 className="font-semibold">
                {project?.name || "Project"}
              </h3>

              <p className="text-sm text-gray-600">
                Difficulty: {project?.difficulty || "Not specified"}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-400">No projects available</p>
        )}
      </div>
    </div>
  );
}
