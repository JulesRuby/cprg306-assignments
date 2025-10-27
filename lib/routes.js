// okay, let's see about using this to dynamically produce my main nav
import fs from "fs";
import path from "path";

function getRoutes(dir, basePath = "") {
  const routes = [];
  const items = fs.readdirSync(dir);

  items.forEach((item) => {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (!stat.isDirectory()) return;

    // Check dir for page.js to consider it a route
    const hasPageJS = fs.existsSync(path.join(fullPath, "page.js"));

    if (hasPageJS) {
      routes.push(`${basePath}/${item}`);
    }

    // Recurse to check for subdirectories
    // NOTE: I might not actually want this? Not sure yet. It could be problematic, but I wrote it just to have it in case I wanted it.
    routes.push(...getRoutes(fullPath, `${basePath}/${item}`));
  });
}

// _should_ return an array of all my routes which I can map to nav links... I hope. Have not tested yet.
function getAllRoutes() {
  const appDirectory = path.join(process.cwd(), "app");
  return getRoutes(appDirectory);
}

export default getAllRoutes;
