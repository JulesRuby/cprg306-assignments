"use client";
import { useUser } from "../contexts/UserContext";
// import { AppButton } from "../components/Button";
function LoginSection() {
  const { toggleUserLogin } = useUser();
  return (
    <section>
      <header>
        <h2>Log Herbert in our out</h2>
        <p>Using context to avoid props drilling</p>
        {/* <AppButton text="Log In" onClick={toggleUserLogin} /> */}
        <button onClick={ toggleUserLogin }>Login</button>
      </header>
    </section>
  );
}

export default LoginSection;
