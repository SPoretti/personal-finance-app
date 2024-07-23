import PieCard from "./components/pieCard";
import BalanceCard from "./components/balanceCard";
import WideCard from "./components/wideCard";
import "@fontsource/inter/400.css"; // Import Inter font regular weight
import "@fontsource/inter/700.css"; // Import Inter font bold weight

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col dark:bg-gray-900 w-3/4 ml-auto">
      <div className="w-full h-1/2 flex flex-row">
        <div className="w-1/2 h-full p-5">
          <div className="w-full h-full">
            <BalanceCard />
          </div>
        </div>
        <div className="w-1/2 h-full p-5">
          <div className="w-full h-full">
            <PieCard />
          </div>
        </div>
      </div>
      <div className="w-full h-1/2 flex flex-row p-5">
        <div className="w-full h-full">
          <WideCard />
        </div>
      </div>
    </div>
  );
}
