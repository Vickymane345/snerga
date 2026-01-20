import { DashboardSidebar } from "@/components/dashboard/Sidebar";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-[#0a1628] text-white selection:bg-[#4ade80]/30">
      <DashboardSidebar />
      
      <main className="flex-1 lg:ml-[280px] p-4 lg:p-8 pb-24 lg:pb-8 min-w-0 bg-[#0a1628]">
        {children}
      </main>
    </div>
  );
}
