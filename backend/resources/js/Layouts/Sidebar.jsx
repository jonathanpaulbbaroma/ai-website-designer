import { Link, usePage } from "@inertiajs/react";

const navigation = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Projects", href: "/projects" },
  { name: "Design", href: "/design" },
  { name: "References", href: "/references" },
  { name: "Knowledge", href: "/knowledge" },
  { name: "Figma", href: "/figma" },
];

export default function Sidebar() {
  const { url } = usePage();

  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 border-r border-gray-200 bg-white lg:flex lg:flex-col">
      <div className="flex h-16 items-center border-b border-gray-200 px-6">
        <Link href="/" className="text-lg font-semibold text-gray-900">
          AI Design Director
        </Link>
      </div>

      <nav className="flex-1 space-y-1 p-4">
        {navigation.map((item) => {
          const active = url.startsWith(item.href);

          return (
            <Link
              key={item.name}
              href={item.href}
              className={[
                "block rounded-lg px-3 py-2 text-sm font-medium transition",
                active
                  ? "bg-gray-900 text-white"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900",
              ].join(" ")}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-gray-200 p-4">
        <Link
          href="/settings"
          className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900"
        >
          Settings
        </Link>
      </div>
    </aside>
  );
}
