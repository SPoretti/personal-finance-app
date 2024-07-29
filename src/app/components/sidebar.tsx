"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faMoneyBillWave,
  faCog,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Sidebar() {
  return (
    <nav
      className="w-1/4 min-h-full  
                bg-gradient-to-b dark:from-slate-900 dark:to-slate-950 
                from-cyan-300 to-cyan-500 
                flex flex-col justify-between p-6 fixed top-0 left-0"
    >
      <div>
        <div className="dark:text-slate-100 w-full flex items-center justify-center mb-8">
          <h1 className="text-4xl font-bold">Personal Finance App</h1>
        </div>
        <div className="w-full flex flex-col items-center">
          <Link href="/" className="sidebar-list-item">
            <FontAwesomeIcon icon={faHome} className="mr-3 h-4" />
            <span>Home</span>
          </Link>
          <Link href="/wallet" className="sidebar-list-item">
            <FontAwesomeIcon icon={faMoneyBillWave} className="mr-3 h-4" />
            <span>Wallet</span>
          </Link>
          <Link href="/settings" className="sidebar-list-item">
            <FontAwesomeIcon icon={faCog} className="mr-3 h-4" />
            <span>Settings</span>
          </Link>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <Link
          href="/credits"
          className="dark:text-slate-400 mb-5 flex items-center dark:hover:text-slate-100 transition-colors"
        >
          <FontAwesomeIcon icon={faInfoCircle} className="mr-2 h-6" />
          <span>Credits</span>
        </Link>
      </div>
    </nav>
  );
}
