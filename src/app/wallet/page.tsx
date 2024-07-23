import WideCard from "../components/wideCard";
import Movements from "../components/movements";

export default function Wallet() {
  return (
    <div className="flex flex-col w-3/4 ml-auto dark:bg-gray-900 overflow-y-auto">
      <div className="w-full h-64">
        <div className="w-full h-full flex flex-col items-center justify-center dark:bg-gradient-to-r dark:from-gray-900 dark:to-gray-700 p-6 shadow-lg">
          <h1 className="text-4xl font-extrabold dark:text-gray-100 mb-4">
            Wallet
          </h1>
          <h2 className="text-lg font-medium dark:text-gray-300 text-center max-w-lg">
            All transactions and balances throughout time are available on this
            page. Explore your financial history with ease and gain valuable
            insights.
          </h2>
        </div>
      </div>
      <div className="w-full h-96 p-4">
        <WideCard />
      </div>
      <div className="w-full h-screen p-4">
        <Movements />
      </div>
    </div>
  );
}
