import React from "react";

export default function DashboardPage() {
  return (
    <div className="px-4 py-8">
      <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="h-40 rounded-lg bg-gray-100 dark:bg-neutral-800" />
        <div className="h-40 rounded-lg bg-gray-100 dark:bg-neutral-800" />
      </div>
    </div>
  );
}
