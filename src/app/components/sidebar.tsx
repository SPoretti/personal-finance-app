import Link from "next/link";

export default function sidebar() {
  return (
    <nav className="w-1/4 min-h-screen bg-slate-800 flex flex-col justify-between">
      <div>
        <div className="text-slate-200 w-full flex items-center justify-center my-10">
          <h1 className="text-3xl">Personal Finance App</h1>
        </div>
        <div className="w-full flex flex-col items-center">
          <Link href="/" className="sidebar-list-item">
            Home
          </Link>
          <Link href="/expenses" className="sidebar-list-item">
            Expenses
          </Link>
          <Link href="/income" className="sidebar-list-item">
            Income
          </Link>
          <Link href="/news" className="sidebar-list-item">
            News
          </Link>
          <Link href="/settings" className="sidebar-list-item">
            Settings
          </Link>
        </div>
      </div>
      <div className="w-full flex justify-center bg-gradient-to-b from-slate-800 to-slate-700">
        <Link href="/credits" className="text-slate-300 mb-5">
          Credits
        </Link>
      </div>
    </nav>
  );
}
