export default function SkillGapSection({
  skillsHave = [],
  skillsMissing = []
}) {
  return (
    <div className="grid md:grid-cols-2 gap-6">

      <div className="bg-white rounded-2xl shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Skills You Have</h2>

        <ul className="space-y-2">
          {skillsHave.length > 0 ? (
            skillsHave.map((skill, index) => (
              <li
                key={index}
                className="bg-green-100 text-green-700 px-3 py-2 rounded-lg"
              >
                {skill}
              </li>
            ))
          ) : (
            <p className="text-gray-400">No skills data</p>
          )}
        </ul>
      </div>

      <div className="bg-white rounded-2xl shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Skills To Learn</h2>

        <ul className="space-y-2">
          {skillsMissing.length > 0 ? (
            skillsMissing.map((skill, index) => (
              <li
                key={index}
                className="bg-red-100 text-red-700 px-3 py-2 rounded-lg"
              >
                {skill}
              </li>
            ))
          ) : (
            <p className="text-gray-400">No missing skills</p>
          )}
        </ul>
      </div>

    </div>
  );
}
