import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 p-4">
      <nav className="flex flex-col gap-4">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/deals">Deals</Link>
        <Link href="/reports">Reports</Link>
        <Link href="/settings">Settings</Link>
      </nav>
    </aside>
  );
}