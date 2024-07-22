import PieCard from "./components/pieCard";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-emerald-100 via-slate-200 to-sky-200 w-3/4">
      <div className="w-full h-1/2 flex flex-row">
        <div className="w-1/2 h-full p-5">
          <div className="w-full h-full rounded-xl">
            <h1>Home</h1>
          </div>
        </div>
        <div className="w-1/2 h-full p-5">
          <div className="w-full h-full rounded-xl ">
            <PieCard />
          </div>
        </div>
      </div>
      <div className="w-full h-1/2 flex flex-row p-5">
        <div className="w-full h-full rounded-xl border-slate-800 border-solid border-4">
          <h1>Home</h1>
        </div>
      </div>
    </div>
  );
}
