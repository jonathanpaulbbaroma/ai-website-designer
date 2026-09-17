import { router, usePage } from "@inertiajs/react";

export default function TopBar() {
  const { auth } = usePage().props;

  const user = auth?.user;

  const logout = () => {
    router.post("/logout");
  };

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-gray-200 bg-white px-4 lg:px-6">
      <div>
        <h1 className="text-lg font-semibold text-gray-900">
          AI Website Design Director
        </h1>
      </div>

      <div className="flex items-center gap-4">
        <button
          type="button"
          className="rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50"
        >
          Notifications
        </button>

        <div className="flex items-center gap-3">
          <div className="hidden text-right sm:block">
            <p className="text-sm font-medium text-gray-900">{user?.name}</p>

            <p className="text-xs text-gray-500">{user?.email}</p>
          </div>

          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-900 text-sm font-medium text-white">
            {user?.name?.charAt(0).toUpperCase() || "U"}
          </div>

          <button
            type="button"
            onClick={logout}
            className="rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}
