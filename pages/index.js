// importing components
import Link from "next/link";

// Home component
export default function Home() {
  return (
    <div className="homepage p-5">
      <div className="homepage__header text-2xl font-bold mb-10">
        KTS Yearbook
      </div>

      <div className="homepage__yearbook">
        <Link href="/yearbook">
          <button>Check it out!</button>
        </Link>
      </div>
    </div>
  );
}
