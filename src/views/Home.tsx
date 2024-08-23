import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <div className="bg-[url('./bg.jpg')] h-screen bg-no-repeat bg-cover flex flex-col p-2">
      <NavBar />
      <button>book now</button>
    </div>
  );
}
