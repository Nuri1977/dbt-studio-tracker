"use client";

import React, { useEffect, useState } from "react";

// Helper function to compare semantic versions
const compareVersions = (v1: string, v2: string): number => {
  const v1Parts = v1.split(".").map(Number);
  const v2Parts = v2.split(".").map(Number);

  for (let i = 0; i < Math.max(v1Parts.length, v2Parts.length); i++) {
    const v1Part = i < v1Parts.length ? v1Parts[i] : 0;
    const v2Part = i < v2Parts.length ? v2Parts[i] : 0;

    if (v1Part > v2Part) return 1;
    if (v1Part < v2Part) return -1;
  }

  return 0;
};

const VersionFilter = ({
  currentVersion,
  versions,
}: {
  currentVersion: string | null;
  versions: string[];
}) => {
  // State to store sorted versions
  const [sortedVersions, setSortedVersions] = useState<string[]>([]);
  const [latestVersion, setLatestVersion] = useState<string | null>(null);
  // State to track the currently selected version in the UI
  const [selectedVersion, setSelectedVersion] = useState<string | null>(
    currentVersion
  );

  // Sort and cache versions on component mount
  useEffect(() => {
    // Sort versions semantically (e.g., 3.0.0 > 1.1.2)
    const sorted = [...versions].sort((a, b) => compareVersions(b, a));
    setSortedVersions(sorted);

    // Set the latest version
    if (sorted.length > 0) {
      setLatestVersion(sorted[0]);

      // Store in localStorage for caching
      localStorage.setItem("latestAppVersion", sorted[0]);
    }
  }, [versions]);

  // Sync the selected version with currentVersion when it changes
  useEffect(() => {
    setSelectedVersion(currentVersion);
  }, [currentVersion]);

  const handleVersionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newVersion = e.target.value === "all" ? null : e.target.value;
    setSelectedVersion(newVersion);

    // Update URL with selected version
    const url = new URL(window.location.href);
    if (newVersion === null) {
      url.searchParams.delete("version");
    } else {
      url.searchParams.set("version", newVersion);
    }
    window.location.href = url.toString();
  };

  return (
    <div className="flex items-center space-x-2">
      <label
        htmlFor="version-select"
        className="text-sm font-medium text-gray-700"
      >
        Filter by Version:
      </label>
      <div className="relative">
        <select
          id="version-select"
          className="rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          value={selectedVersion || "all"}
          onChange={handleVersionChange}
        >
          <option value="all">All Versions</option>
          {sortedVersions.map((version) => (
            <option key={version} value={version}>
              {version} {version === latestVersion ? "(Latest)" : ""}
            </option>
          ))}
        </select>
      </div>
      {selectedVersion && (
        <button
          onClick={() => {
            setSelectedVersion(null);
            const url = new URL(window.location.href);
            url.searchParams.delete("version");
            window.location.href = url.toString();
          }}
          className="ml-2 rounded-full bg-gray-100 p-1 text-xs text-gray-500 hover:bg-gray-200"
          title="Clear filter"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-4 w-4"
          >
            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default VersionFilter;
