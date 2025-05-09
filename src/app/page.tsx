import Image from "next/image";
import Link from "next/link";
import { db } from "@/lib/prisma";
import VersionFilter from "@/components/VersionFilter";

export default async function Home({
  searchParams,
}: {
  searchParams: { version?: string };
}) {
  // Get version from URL query parameters
  const selectedVersion = searchParams.version || null;

  // Get all unique versions ordered by newest first
  const versionsResult = await db.appUpdate.findMany({
    select: { version: true },
    distinct: ["version"],
    orderBy: { timestamp: "desc" },
  });
  const versions = versionsResult.map((v) => v.version);

  // Build filter condition
  const whereClause = selectedVersion
    ? { version: selectedVersion }
    : undefined;

  // Fetch statistics data with filtering
  const totalUpdates = await db.appUpdate.count({
    where: whereClause,
  });

  const latestUpdates = await db.appUpdate.findMany({
    where: whereClause,
    orderBy: {
      timestamp: "desc",
    },
    take: 5, // Get only latest 5 updates for the dashboard
  });

  // Get statistics by platform with version filtering
  const platformStats = await db.appUpdate.groupBy({
    by: ["platform"],
    where: selectedVersion ? { version: selectedVersion } : undefined,
    _count: {
      platform: true,
    },
    orderBy: {
      _count: {
        platform: "desc",
      },
    },
  });

  // Format platform stats for easier rendering
  const formattedPlatformStats = platformStats.map((stat) => ({
    platform: stat.platform,
    count: stat._count.platform,
  }));

  return (
    <main className="flex min-h-screen flex-col items-center p-6">
      <div className="fixed top-0 left-0 z-[-1] h-[180px] w-full bg-gradient-to-br from-[#f7d9a3] to-[#f7d9a3] opacity-30 blur-[100px]" />

      {/* Dashboard Header */}
      <div className="mb-8 w-full max-w-7xl">
        <div className="flex flex-col space-y-2 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              App Update Tracker Dashboard
            </h1>
            <p className="mt-2 text-gray-600">
              Monitor and track all your application updates in one place
            </p>
            {selectedVersion && (
              <div className="mt-2 flex items-center">
                <span className="rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                  Viewing Version: {selectedVersion}
                </span>
              </div>
            )}
          </div>
          <VersionFilter currentVersion={selectedVersion} versions={versions} />
        </div>
      </div>

      {/* Stats Overview Cards */}
      <div className="mb-8 grid w-full max-w-7xl grid-cols-1 gap-6 md:grid-cols-3">
        <div className="rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">
                {selectedVersion
                  ? `Updates for v${selectedVersion}`
                  : "Total Updates"}
              </p>
              <p className="text-2xl font-bold text-gray-800">{totalUpdates}</p>
            </div>
            <div className="rounded-full bg-blue-100 p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Last Update</p>
              <p className="text-2xl font-bold text-gray-800">
                {latestUpdates.length > 0
                  ? new Date(latestUpdates[0].timestamp).toLocaleDateString()
                  : "No updates"}
              </p>
            </div>
            <div className="rounded-full bg-green-100 p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">
                Unique Platforms
              </p>
              <p className="text-2xl font-bold text-gray-800">
                {formattedPlatformStats.length}
              </p>
            </div>
            <div className="rounded-full bg-purple-100 p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-purple-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Main Dashboard Content */}
      <div className="grid w-full max-w-7xl grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Recent Updates */}
        <div className="col-span-2 rounded-lg bg-white p-6 shadow-md">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-medium text-gray-800">
              {selectedVersion
                ? `Recent Updates for v${selectedVersion}`
                : "Recent Updates"}
            </h2>
            <Link
              href={`/app-update${
                selectedVersion ? `?version=${selectedVersion}` : ""
              }`}
              className="text-sm font-medium text-blue-500 hover:text-blue-700"
            >
              View All
            </Link>
          </div>

          {latestUpdates.length === 0 ? (
            <p className="mt-4 text-gray-500">
              No recent updates found
              {selectedVersion ? ` for version ${selectedVersion}` : ""}.
            </p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                      Event
                    </th>
                    <th className="py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                      Version
                    </th>
                    <th className="py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                      Platform
                    </th>
                    <th className="py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {latestUpdates.map((update) => (
                    <tr key={update.id} className="hover:bg-gray-50">
                      <td className="py-3">
                        <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                          {update.event}
                        </span>
                      </td>
                      <td className="py-3 text-sm text-gray-500">
                        {update.version}
                      </td>
                      <td className="py-3 text-sm text-gray-500">
                        {update.platform}
                      </td>
                      <td className="py-3 text-sm text-gray-500">
                        {new Date(update.timestamp).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Platform Distribution */}
        <div className="rounded-lg bg-white p-6 shadow-md">
          <h2 className="mb-4 text-lg font-medium text-gray-800">
            {selectedVersion
              ? `Platform Distribution for v${selectedVersion}`
              : "Platform Distribution"}
          </h2>

          {formattedPlatformStats.length === 0 ? (
            <p className="mt-4 text-gray-500">
              No platform data available
              {selectedVersion ? ` for version ${selectedVersion}` : ""}.
            </p>
          ) : (
            <div className="space-y-4">
              {formattedPlatformStats.map((stat, index) => (
                <div key={stat.platform} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-600">
                      {stat.platform}
                    </span>
                    <span className="text-sm font-medium text-gray-900">
                      {stat.count}
                    </span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
                    <div
                      className={`h-full rounded-full ${
                        index % 3 === 0
                          ? "bg-blue-500"
                          : index % 3 === 1
                          ? "bg-green-500"
                          : "bg-purple-500"
                      }`}
                      style={{ width: `${(stat.count / totalUpdates) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-8 flex w-full max-w-7xl justify-end space-x-4">
        <Link
          href={`/app-update${
            selectedVersion ? `?version=${selectedVersion}` : ""
          }`}
          className="rounded bg-blue-500 px-4 py-2 font-medium text-white shadow transition-colors hover:bg-blue-600"
        >
          View All Updates
        </Link>
      </div>
    </main>
  );
}
