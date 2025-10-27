// okay, let's see about using this to dynamically produce my main nav
import fs from "fs";
import path from "path";

function getRoutes(dir, basePath = "") {
  console.log(`Scanning directory: ${dir} with basePath: ${basePath}`);
  const routes = [];
  let items;

  try {
    items = fs.readdirSync(dir);
    console.log(items);
  } catch (error) {
    console.error(`Error reading directory ${dir}:`, error);
    return routes;
  }

  items.forEach((item) => {
    const fullPath = path.join(dir, item);
    let stat;
    try {
      stat = fs.statSync(fullPath);
    } catch (error) {
      console.error(`Error getting stats for ${fullPath}:`, error);
      return;
    }

    console.log(stat.isDirectory());
    if (!stat.isDirectory()) return;

    // Check dir for page.js to consider it a route
    const hasPageJS = fs.existsSync(path.join(fullPath, "page.js"));
    console.log({ hasPageJS });

    if (hasPageJS) {
      routes.push(`${basePath}/${item}`);
    }

    console.log({ routes });

    // Recurse to check for subdirectories
    // NOTE: I might not actually want this? Not sure yet. It could be problematic, but I wrote it just to have it in case I wanted it.
    const nestedRoutes = getRoutes(fullPath, `${basePath}/${item}`);

    if (nestedRoutes?.length > 0) {
      routes.push(...nestedRoutes);
    }
  });
  return routes;
}

// _should_ return an array of all my routes which I can map to nav links... I hope. Have not tested yet.
function getAllRoutes() {
  const appDirectory = path.join(process.cwd(), "app");
  const allRoutes = getRoutes(appDirectory);

  return allRoutes;
}

export default getAllRoutes;
