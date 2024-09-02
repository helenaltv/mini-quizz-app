import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome to the Quiz App</h1>
      <nav>
        <ul>
          <li>
            <Link href="/admin">
              <a>Admin Page</a>{" "}
              {/* Detta är felaktigt i Next.js version 13 och senare */}
            </Link>
          </li>
          <li>
            <Link href="/quiz">
              <a>Take the Quiz</a>{" "}
              {/* Detta är felaktigt i Next.js version 13 och senare */}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
