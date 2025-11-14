// for metadata for page title and description
import VaporButton from "@/components/common/VaporButton.js";
import { createPageMetadata } from "../../lib/metadata.js";

// using next's generateMetadata function to create dynamic metadata for the page
export async function generateMetadata() {
  return createPageMetadata({
    title: "Component Test Page",
    description:
      "Just throwing this in here so I can muck about with components I am abstracting out of the weekly assignments.",
  });
}

function Page() {
  return (
    <main className="mx-auto max-w-xl p-4">
      <header className="mb-3 text-2xl font-bold">
        <h1 className="text-xl">
          Welcome to Spaghetti city, <em>bitch!</em>
          <p>
            I should probably write a script to iterate through my components
            folder and create sections for each one automatically.
          </p>
        </h1>
      </header>

      <section>
        <header>
          <h2>VaporButton</h2>
        </header>

        <div className="w-100">
          <VaporButton onClick={() => console.log("CLICK!")}></VaporButton>
        </div>
      </section>
    </main>
  );
}

export default Page;
