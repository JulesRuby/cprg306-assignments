// "use client";

import Link from "next/link";
import getAllRoutes from "@/lib/routes";

export default function Home() {
  const routes = getAllRoutes();
  // swap any of the routes not beginning with /week- to the end end of the array
  const sortedRoutes = [...routes].sort((a, b) => {
    const aIsWeek = a.startsWith("/week-");
    const bIsWeek = b.startsWith("/week-");
    if (aIsWeek && !bIsWeek) return -1;
    if (!aIsWeek && bIsWeek) return 1;
    return 0;
  });

  return (
    <header>
      <h1 className="text-bold text-xl">
        CPRG 306: Web Development 2 - Assignments
      </h1>
      <nav className="nav-shudder">
        <ul className="nav-list">
          {/* <li>
            <Link href="/week-2" className="">
              Week 2 - Assignment Page
            </Link>
          </li>
          <li>
            <Link href="/week-3" className="">
              Week 3 - Assignment Page
            </Link>
          </li>
          <li>
            <Link href="/week-4" className="">
              Week 4 - Assignment Page
            </Link>
          </li>
          <li>
            <Link href="/week-5" className="">
              Week 5 - Assignment Page
            </Link>
          </li>
          <li>
            <Link href="/week-6" className="">
              Week 6 - Assignment Page
            </Link>
          </li>
          <li>
            <Link href="/week-7" className="">
              Week 7 - Assignment Page
            </Link>
          </li> */}
          {sortedRoutes.map((route, idx) => (
            <li key={`${route.path} - ${idx}`}>
              <Link href={route} className="capitalize">
                {`${route.replace("-", " ").replace(/^\//, "")} - Assignment Page`}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
