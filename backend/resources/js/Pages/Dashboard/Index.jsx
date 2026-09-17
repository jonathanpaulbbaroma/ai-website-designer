import AppLayout from "../../Layouts/AppLayout";

export default function Index() {
  return (
    <AppLayout title="Dashboard">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Dashboard</h2>

        <p className="mt-2 text-gray-600">
          Welcome to your AI Website Design Director.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-gray-200 bg-white p-5">
            <p className="text-sm text-gray-500">Projects</p>
            <p className="mt-2 text-3xl font-bold text-gray-900">0</p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-5">
            <p className="text-sm text-gray-500">In Design</p>
            <p className="mt-2 text-3xl font-bold text-gray-900">0</p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-5">
            <p className="text-sm text-gray-500">Awaiting Approval</p>
            <p className="mt-2 text-3xl font-bold text-gray-900">0</p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-5">
            <p className="text-sm text-gray-500">Completed</p>
            <p className="mt-2 text-3xl font-bold text-gray-900">0</p>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
