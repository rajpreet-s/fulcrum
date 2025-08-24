import Sidebar from "@/components/app/Sidebar";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1">
        <header className="flex justify-end p-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gray-200 rounded-full" />
            <p>User Name</p>
          </div>
        </header>
        {children}
      </main>
    </div>
  );
}