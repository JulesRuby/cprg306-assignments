// okay, let's see about using this to dynamically produce my main nav
import fs from "fs";
import path from "path";

function getRoutes(dir, basePath = "", depth = 0) {
  // console.log(`Scanning directory: ${dir} with basePath: ${basePath}`);
  const routes = [];
  let items;

  // eh this will work for now to limit depth
  if (depth > 2) return routes;

  try {
    items = fs.readdirSync(dir);
    // console.log(items);
  } catch (error) {
    console.error(`Error reading directory ${dir}:`, error);
    return routes;
  }

  items.forEach((item) => {
    const fullPath = path.join(dir, item);
    // console.log(fullPath);
    let stat;
    try {
      stat = fs.statSync(fullPath);
      // console.log(stat);
    } catch (error) {
      console.error(`Error getting stats for ${fullPath}:`, error);
      return;
    }

    // console.log(stat.isDirectory());
    if (!stat.isDirectory()) return;

    // Check dir for page.js to consider it a route
    const hasPageJS = fs.existsSync(path.join(fullPath, "page.js"));
    // console.log({ hasPageJS });

    if (hasPageJS) {
      const routePath = `${basePath}/${item}`;

      // I will try adding objects with data for more utility maybe?
      routes.push({
        path: routePath,
        name: item,
        depth: depth,
        isWeek: item.startsWith("week-"),
      });

      // routes.push(`${basePath}/${item}`);
    }

    // console.log({ routes });

    // console.log({ routes });

    // Recurse to check for subdirectories
    // NOTE: I might not actually want this? Not sure yet. It could be problematic, but I wrote it just to have it in case I wanted it.
    // const nestedRoutes = getRoutes(fullPath, `${basePath}/${item}`);
    const nestedRoutes = getRoutes(fullPath, `${basePath}/${item}`, depth + 1);

    // console.log({ nestedRoutes });

    if (nestedRoutes?.length > 0) {
      routes.push(...nestedRoutes);
    }
  });

  return routes;
}

// console.log("ROUTES:\n\n", routes);
// _should_ return an array of all my routes which I can map to nav links... I hope. Have not tested yet.
// function getAllRoutes() {
//   const appDirectory = path.join(process.cwd(), "app");
//   const allRoutes = getRoutes(appDirectory);

//   return allRoutes;
// }

function getAllRoutes(options = {}) {
  const { includeNested = false, maxDepth = 0 } = options;

  const appDirectory = path.join(process.cwd(), "app");
  const allRoutes = getRoutes(appDirectory);

  let filteredRoutes = allRoutes;

  if (!includeNested) {
    filteredRoutes = allRoutes.filter((route) => route.depth <= maxDepth);
  }

  // Sort routes
  const sortedRoutes = filteredRoutes.sort((a, b) => {
    const aIsWeek = a.isWeek;
    const bIsWeek = b.isWeek;

    // Both are weeks so sort numerically
    if (aIsWeek && bIsWeek) {
      const aNum = parseInt(a.name.replace("week-", ""));
      const bNum = parseInt(b.name.replace("week-", ""));
      return aNum - bNum;
    }

    // Weeks come before non-weeks
    if (aIsWeek && !bIsWeek) return -1;
    if (!aIsWeek && bIsWeek) return 1;

    // Both are non-weeks so sort alphabetically
    return a.name.localeCompare(b.name);
  });

  // console.log(sortedRoutes)

  return sortedRoutes.map((route) => route.path);
}

export default getAllRoutes;
