// importing components
import Link from "next/link";

// available sessions
const sessions = [
  {
    year: "2019",
  },
  {
    year: "2020",
  },
];

// session component
export default function Session({ department }) {
  return (
    <div className="session">
      <div className="session__header font-bold text-2xl my-5">Sessions</div>

      <div className="session__blocks flex">
        {sessions.map((session) => {
          return (
            <div
              key={session.year}
              className={`session__blocks__${session.year} p-3 bg-green-200 mx-2`}
            >
              <Link href={`sessions/${department}/${session.year}`}>
                <button>{session.year}</button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
