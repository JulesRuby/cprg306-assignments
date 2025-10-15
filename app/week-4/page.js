import NewItem from "./new-item";
import { createPageMetadata } from "../../lib/metadata.js";

// using next's generateMetadata function to create dynamic metadata for the page
export async function generateMetadata() {
  return createPageMetadata({
    title: "Interactive Counter",
    description:
      "Playing around with state to make an interactive stateful presentational component.",
  });
}

function Page() {
  return (
    <main className="justify-content-center mx-auto flex h-screen max-w-2/3 flex-col items-center justify-items-center p-4">
      <header className="column mb-3 flex h-24 text-center text-2xl font-bold">
        <h1 className="m-auto text-xl">{`<NewItem>`} component (Part 1)</h1>
      </header>

      <NewItem />
    </main>
  );
}

export default Page;
