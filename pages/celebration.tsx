import { stat } from "fs";
import Link from "next/link";
import { useRouter } from "next/router";
import { celebrationRouteQuery } from "../src/types";

function Celebration() {

  const router = useRouter();
  const { points } = router.query;

  celebrationRouteQuery.parse(points)

  return (
    <div>
        <h1>You earned {String(points)} points.</h1>
        <Link href="/trivia">back</Link>
    </div>
  );
}

export default Celebration;