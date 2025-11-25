import AuthSection from "./AuthSection";
import LoginSection from "./LoginSection";
export default function Page() {
  return (
    <main>
      <header className="my-4">
        <h1 className="text-2xl">Oh baby, we're doing some funny auth stuff</h1>
        <p>
          I'm the <span className="text-kinetic">firestarter</span>
        </p>
      </header>

      <AuthSection />
      {/* <LoginSection /> */}
    </main>
  );
}
