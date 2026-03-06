export default function CareerSummary({
  careerPath = "Career Recommendation",
  matchScore = 0
}) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 flex justify-between items-center">
      
      <div>
        <h1 className="text-2xl font-bold">
          {careerPath || "Career Recommendation"}
        </h1>
        <p className="text-gray-500">Recommended Career Path</p>
      </div>

      <div className="text-center">
        <p className="text-sm text-gray-500">Match Score</p>
        <p className="text-3xl font-bold text-green-600">
          {Number(matchScore) || 0}%
        </p>
      </div>

    </div>
  );
}
