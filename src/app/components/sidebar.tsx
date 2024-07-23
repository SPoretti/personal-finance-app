import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faMoneyBillWave,
  faChartLine,
  faCog,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {
  return (
    <nav className="w-1/4 min-h-screen bg-gray-900 flex flex-col justify-between">
      <div>
        <div className="text-gray-200 w-full flex items-center justify-center my-10">
          <h1 className="text-3xl">Personal Finance App</h1>
        </div>
        <div className="w-full flex flex-col items-center">
          <Link href="/" className="sidebar-list-item">
            <FontAwesomeIcon icon={faHome} className="mr-3 h-8" />
            Home
          </Link>
          <Link href="/expenses" className="sidebar-list-item">
            <FontAwesomeIcon icon={faMoneyBillWave} className="mr-3 h-8" />
            Expenses
          </Link>
          <Link href="/income" className="sidebar-list-item">
            <FontAwesomeIcon icon={faChartLine} className="mr-3 h-8" />
            Income
          </Link>
          <Link href="/settings" className="sidebar-list-item">
            <FontAwesomeIcon icon={faCog} className="mr-3 h-8" />
            Settings
          </Link>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <Link href="/credits" className="text-gray-300 mb-5 flex items-center">
          <FontAwesomeIcon icon={faInfoCircle} className="mr-2 h-full" />
          Credits
        </Link>
      </div>
    </nav>
  );
}
