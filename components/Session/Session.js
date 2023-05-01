// importing components
import Link from "next/link";

// available sessions
import { sessions } from "@/utils";

// session component
export default function Session({ department }) {
  return (
    <div className="session">
      <div className="session__header font-bold text-2xl my-5">Sessions</div>

      <div className="session__blocks flex">
        {sessions.map((session) => {
          return (
            <div
              key={session}
              className={`session__blocks__${session} p-3 bg-green-200 mx-2`}
            >
              <Link href={`sessions/${department}/${session}`}>
                <button>{session}</button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
