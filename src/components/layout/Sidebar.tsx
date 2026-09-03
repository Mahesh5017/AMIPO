import Link from "next/link";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: "⌂" },
  { name: "Analyze", href: "/analyze", icon: "◈" },
  { name: "History", href: "/history", icon: "◷" },
  { name: "Reports", href: "/reports", icon: "▤" },
];

const bottomNavigation = [
  { name: "Settings", href: "/settings", icon: "⚙" },
  { name: "Help", href: "/help", icon: "?" },
];

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 flex h-screen w-64 flex-col border-r border-[#303030] bg-[#171717] text-[#f5f5f5]">
      <div className="flex h-20 items-center border-b border-[#303030] px-6">
        <div>
          <h1 className="text-2xl font-bold tracking-wide">AMIPO</h1>
          <p className="text-xs text-[#737373]">Identity Protection</p>
        </div>
      </div>

      <nav className="flex-1 px-4 py-6">
        <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-[#737373]">
          Workspace
        </p>

        <div className="space-y-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm text-[#a3a3a3] transition hover:bg-[#1f1f1f] hover:text-white"
            >
              <span className="flex h-5 w-5 items-center justify-center">
                {item.icon}
              </span>
              {item.name}
            </Link>
          ))}
        </div>
      </nav>

      <div className="border-t border-[#303030] px-4 py-4">
        <div className="space-y-1">
          {bottomNavigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm text-[#a3a3a3] transition hover:bg-[#1f1f1f] hover:text-white"
            >
              <span className="flex h-5 w-5 items-center justify-center">
                {item.icon}
              </span>
              {item.name}
            </Link>
          ))}
        </div>

        <div className="mt-4 rounded-lg border border-[#303030] bg-[#181818] p-3">
          <p className="text-sm font-medium">Privacy Mode</p>
          <p className="mt-1 text-xs text-[#737373]">
            Protection enabled
          </p>
        </div>
      </div>
    </aside>
  );
}
