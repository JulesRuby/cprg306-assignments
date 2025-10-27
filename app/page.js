// "use client";

import Link from "next/link";
import getAllRoutes from "@/lib/routes";

export default function Home() {
  const routes = getAllRoutes();

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
          {routes.map((route) => (
            <li key={route.path}>
              <Link href={route} className="">
                {`${route.replace("-", " ").replace(/^\/w/, "W")} - Assignment Page`}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
