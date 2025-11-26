// "use client";
import { useMemo } from "react";

import Link from "next/link";
import getAllRoutes from "@/lib/routes";

export default function Home() {
  // const routes = getAllRoutes();

  const routes = getAllRoutes({ includeNested: false, maxDepth: 0 });
  // swap any of the routes not beginning with /week- to the end end of the array
  // const sortedRoutes = [...routes].sort((a, b) => {
  //   const aIsWeek = a.startsWith("/week-");
  //   const bIsWeek = b.startsWith("/week-");
  //   if (aIsWeek && !bIsWeek) return -1;
  //   if (!aIsWeek && bIsWeek) return 1;
  //   return 0;
  // });

  const sortMattedRoutes = useMemo(
    () =>
      routes.map((route) => ({
        path: route,
        displayName: route
          .replace(/^\//, "")
          .replace(/-/g, " ")
          .split("/")
          .map((part) =>
            part
              .split(" ")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" "),
          )
          .join("/"),
      })),
    [routes],
  );

  return (
    <header>
      <h1 className="text-bold text-xl">
        CPRG 306: Web Development 2 - Assignments
      </h1>
      <nav className="nav-shudder">
        <ul className="nav-list">
          {sortMattedRoutes.map((route, idx) => (
            <li key={`${route.path} - ${idx}`}>
              <Link href={route.path} className="capitalize">
                {`${route.displayName} - Assignment Page`}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
