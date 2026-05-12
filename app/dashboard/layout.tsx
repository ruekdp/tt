import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <aside className="w-64 bg-slate-900 min-h-screen">
        <nav className="p-4">
          <ul className="space-y-2">
            <li><a href="/dashboard" className="text-white hover:text-blue-400">Dashboard</a></li>
            <li><a href="/search" className="text-white hover:text-blue-400">Search</a></li>
            <li><a href="/analytics" className="text-white hover:text-blue-400">Analytics</a></li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1">{children}</main>
    </div>
  );
}
