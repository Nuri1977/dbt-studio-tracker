import React from "react";
import { db } from "@/lib/prisma";
import Link from "next/link";
import { Suspense } from "react";
import VersionFilter from "@/components/VersionFilter";

export default async function AppUpdatePage({
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

  // Fetch app updates with filtering
  const appUpdates = await db.appUpdate.findMany({
    where: selectedVersion ? { version: selectedVersion } : undefined,
    orderBy: {
      timestamp: "desc",
    },
  });

  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <div className="fixed top-0 left-0 z-[-1] h-[180px] w-full bg-gradient-to-br from-[#f7d9a3] to-[#f7d9a3] opacity-30 blur-[100px]" />

      <div className="w-full max-w-6xl">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex flex-col space-y-2">
            <h1 className="text-3xl font-bold">App Updates</h1>
            {selectedVersion && (
              <div className="flex items-center">
                <span className="rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                  Viewing Version: {selectedVersion}
                </span>
              </div>
            )}
          </div>
          <div className="flex items-center space-x-4">
            <VersionFilter
              currentVersion={selectedVersion}
              versions={versions}
            />
            <Link
              href={`/${selectedVersion ? `?version=${selectedVersion}` : ""}`}
              className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            >
              Back to Home
            </Link>
          </div>
        </div>

        {appUpdates.length === 0 ? (
          <div className="rounded-lg bg-white p-6 shadow-md">
            <p className="text-gray-500">
              No app updates found
              {selectedVersion ? ` for version ${selectedVersion}` : ""}.
            </p>
          </div>
        ) : (
          <div className="overflow-hidden rounded-lg bg-white shadow-md">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                  >
                    Event
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                  >
                    Version
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                  >
                    Platform
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                  >
                    Architecture
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                  >
                    Client ID
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                  >
                    Timestamp
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                  >
                    Hostname
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {appUpdates.map((update) => (
                  <tr key={update.id}>
                    <td className="whitespace-nowrap px-6 py-4">
                      <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                        {update.event}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                      {update.version}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                      {update.platform}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                      {update.arch}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                      <span title={update.clientId}>
                        {update.clientId.substring(0, 8)}...
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                      {new Date(update.timestamp).toLocaleString()}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                      {update.hostname || "N/A"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </main>
  );
}
