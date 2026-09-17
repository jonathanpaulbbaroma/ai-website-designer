import { Head } from "@inertiajs/react";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

export default function AppLayout({ children, title }) {
  return (
    <>
      <Head title={title} />

      <div className="min-h-screen bg-gray-50">
        <Sidebar />

        <div className="lg:pl-64">
          <TopBar />

          <main className="p-4 lg:p-6">{children}</main>
        </div>
      </div>
    </>
  );
}
