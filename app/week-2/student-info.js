import Link from 'next/link';

export default function StudentInfo() {
  return (
    <article className="p-1rem rounded-xs shadow-md">
      <p className="font-bold">J.R. Muri</p>
      <Link href="https://github.com/JulesRuby/cprg306-assignments">Checkout my github!</Link>
    </article>
  );
}