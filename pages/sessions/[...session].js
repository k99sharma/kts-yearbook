// pages/sessions/[department]/[year]

// importing libraries
import fs from "fs";
import path from "path";

// importing components
import Link from "next/link";
import Card from "@/components/Card/Card";

// importing hooks
import { useRouter } from "next/router";

// static paths
export async function getStaticPaths() {
  const departments = ["CS", "CSE"]; // departments
  const years = ["2019", "2020", "2021"]; // year

  // all possible paths
  const paths = departments.flatMap((department) => {
    return years.map((year) => {
      return { params: { session: [department, year] } };
    });
  });

  return { paths, fallback: true };
}

// static props
export async function getStaticProps({ params }) {
  try {
    // session details
    const [department, year] = params.session;

    const dirPath = path.join(
      process.cwd(),
      "data",
      department,
      `${department}${year}`
    );

    // checking if directory exists
    const stats = fs.statSync(dirPath);
    if (!stats.isDirectory()) {
      throw new Error("Not a directory");
    }

    const dir = fs.readdirSync(dirPath); // reading dir data

    // in case directory is empty
    if (dir.length === 0) {
      return {
        props: {
          students: null,
        },
      };
    }

    // iterating over students data
    const students = dir.map((student) => {
      const filePath = path.join(dirPath, student);
      const fileData = fs.readFileSync(filePath, "utf-8");
      return JSON.parse(fileData);
    });

    return {
      props: {
        students: students,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      props: {
        students: null,
      },
    };
  }
}

// book component
export default function Book({ students }) {
  const router = useRouter();
  const { session } = router.query;

  // fallback
  if (router.isFallback) {
    return <div>Loading ...</div>;
  }

  const department = session[0]; // department
  const year = session[1]; // year

  return (
    <div className="book p-5">
      <div className="book__back mb-5">
        <Link href="/yearbook">
          <button className="text-blue-600">back</button>
        </Link>
      </div>

      <div className="book__header font-bold text-2xl mb-5">
        {`${department} ${year}`}
      </div>

      <div className="book__cards">
        {students !== null ? (
          students.map((student) => {
            return <Card key={student.rollNumber} student={student} />;
          })
        ) : (
          <div className="books__cards__nocard">No data.</div>
        )}
      </div>
    </div>
  );
}
