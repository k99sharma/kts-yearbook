// importing components
import Link from "next/link";

// banner component
export default function Banner() {
  return (
    <div className="banner">
      <Link href="/">
        <button className="banner__button font-bold">KTS Yearbook</button>
      </Link>
    </div>
  );
}
