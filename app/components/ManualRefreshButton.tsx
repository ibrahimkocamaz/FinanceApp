"use client";

import { useRouter } from "next/navigation";
import { ArrowPathIcon } from "@heroicons/react/24/outline";

export default function ManualRefreshButton() {
  const router = useRouter();

  const handleRefresh = () => {
    // Manually refresh the current page
    router.refresh();
  };

  return (
    <button
      onClick={handleRefresh}
      className="ml-2 inline-flex items-center gap-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      aria-label="Refresh"
    >
      <ArrowPathIcon className="h-4 w-4" />
      <span>Refresh</span>
    </button>
  );
}
