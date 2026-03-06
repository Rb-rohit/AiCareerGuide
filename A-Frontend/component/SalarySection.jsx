export default function SalarySection({
  salary = { india: "N/A", global: "N/A" }
}) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Salary Insights</h2>

      <div className="grid md:grid-cols-2 gap-6">

        <div className="bg-gray-100 rounded-xl p-4 text-center">
          <p className="text-gray-500">India</p>
          <p className="text-xl font-bold">
            {salary?.india || "Not Available"}
          </p>
        </div>

        <div className="bg-gray-100 rounded-xl p-4 text-center">
          <p className="text-gray-500">Global</p>
          <p className="text-xl font-bold">
            {salary?.global || "Not Available"}
          </p>
        </div>

      </div>
    </div>
  );
}
