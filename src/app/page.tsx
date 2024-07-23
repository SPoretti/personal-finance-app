import PieCard from "./components/pieCard";
import BalanceCard from "./components/balanceCard";
import WideCard from "./components/wideCard";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-800 w-3/4">
      <div className="w-full h-1/2 flex flex-row">
        <div className="w-1/2 h-full p-5">
          <div className="w-full h-full rounded-xl">
            <BalanceCard />
          </div>
        </div>
        <div className="w-1/2 h-full p-5">
          <div className="w-full h-full rounded-xl ">
            <PieCard />
          </div>
        </div>
      </div>
      <div className="w-full h-1/2 flex flex-row p-5">
        <div className="w-full h-full rounded-xl border-gray-800 border-solid border-4">
          <WideCard />
        </div>
      </div>
    </div>
  );
}
