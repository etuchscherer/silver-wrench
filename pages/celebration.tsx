import Link from "next/link"
import { useRouter } from "next/router"

function Celebration() {

  const router = useRouter();
  const { points } = router.query;

  return (
    <div>
        <h1>You earned {String(points)} points.</h1>
        <Link href="/trivia">back</Link>
    </div>
  );
}

export default Celebration;