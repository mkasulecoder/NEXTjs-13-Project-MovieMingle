import Link from "next/link";
import About from "./about/page";
import AllMovies from "../../components/movie/page";

export default function Home() {
  return (
    <main className='green'>
      <AllMovies />
    </main>
  );
}
