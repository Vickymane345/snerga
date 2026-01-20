import { 
  Search, 
  MoreVertical, 
  Mail, 
  Phone, 
  Calendar,
  Filter
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const users = [
  { id: 1, name: "Adeola Thompson", email: "adeola@example.com", phone: "+234 801 234 5678", role: "Professional", joined: "Oct 12, 2023", status: "Active" },
  { id: 2, name: "Joshua Ashiru", email: "joshua@example.com", phone: "+234 802 345 6789", role: "Academic", joined: "Oct 15, 2023", status: "Active" },
  { id: 3, name: "Sarah Alabi", email: "sarah@example.com", phone: "+234 803 456 7890", role: "Professional", joined: "Nov 02, 2023", status: "Inactive" },
  { id: 4, name: "Michael Chen", email: "michael@example.com", phone: "+234 804 567 8901", role: "Academic", joined: "Nov 10, 2023", status: "Active" },
  { id: 5, name: "Chidi Okoro", email: "chidi@example.com", phone: "+234 805 678 9012", role: "Professional", joined: "Dec 01, 2023", status: "Active" },
];

export default function UsersManagement() {
  return (
    <div className="space-y-6 lg:space-y-10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-4xl font-black text-white mb-2">User Directory</h1>
          <p className="text-sm lg:text-base text-[#94a3b8] font-medium">Manage and monitor all platform users.</p>
        </div>
        <Button className="w-full sm:w-auto bg-[#4ade80] hover:bg-[#22c55e] text-[#0a1628] font-bold rounded-xl px-6 lg:px-8 py-4 lg:py-6 text-sm lg:text-base">
          Add New User
        </Button>
      </div>

      <Card className="bg-white/5 border-white/5 p-4 lg:p-8 rounded-2xl lg:rounded-[32px]">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 lg:gap-6 mb-6 lg:mb-8">
          <div className="relative w-full lg:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 lg:w-5 lg:h-5 text-zinc-400" />
            <input 
              type="text" 
              placeholder="Search users..." 
              className="w-full pl-10 lg:pl-12 pr-4 py-3 lg:py-4 bg-white/5 border-none rounded-xl lg:rounded-2xl text-white placeholder:text-zinc-500 focus:ring-1 focus:ring-[#4ade80]/50 text-sm lg:text-base"
            />
          </div>
          <div className="flex items-center gap-2 lg:gap-4">
            <Button variant="outline" className="flex-1 lg:flex-none border-white/10 text-[#94a3b8] hover:text-white rounded-lg lg:rounded-xl py-4 lg:py-6 px-4 lg:px-6 text-xs lg:text-sm">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline" className="flex-1 lg:flex-none border-white/10 text-[#94a3b8] hover:text-white rounded-lg lg:rounded-xl py-4 lg:py-6 px-4 lg:px-6 text-xs lg:text-sm">
              Export
            </Button>
          </div>
        </div>

        <div className="overflow-x-auto -mx-4 lg:mx-0">
          <div className="inline-block min-w-full align-middle px-4 lg:px-0">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/5 text-zinc-500 text-[9px] lg:text-[10px] font-black uppercase tracking-widest">
                  <th className="px-4 lg:px-6 py-4">User</th>
                  <th className="px-4 lg:px-6 py-4 hidden sm:table-cell">Contact Info</th>
                  <th className="px-4 lg:px-6 py-4">Role / Path</th>
                  <th className="px-4 lg:px-6 py-4 hidden md:table-cell">Joined Date</th>
                  <th className="px-4 lg:px-6 py-4">Status</th>
                  <th className="px-4 lg:px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {users.map((user) => (
                  <tr key={user.id} className="group hover:bg-white/5 transition-colors cursor-pointer">
                    <td className="px-4 lg:px-6 py-4 lg:py-6">
                      <div className="flex items-center gap-3 lg:gap-4">
                        <Avatar className="w-8 h-8 lg:w-12 lg:h-12 border-2 border-transparent group-hover:border-[#4ade80] transition-colors">
                          <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.name}`} />
                          <AvatarFallback className="text-[10px] lg:text-sm">{user.name[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <span className="font-bold text-white text-sm lg:text-lg block">{user.name}</span>
                          <span className="text-[10px] text-zinc-500 sm:hidden">{user.email}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 lg:px-6 py-4 lg:py-6 hidden sm:table-cell">
                      <div className="space-y-0.5 lg:space-y-1">
                        <div className="flex items-center gap-2 text-zinc-400 text-[10px] lg:text-sm">
                          <Mail className="w-3 h-3" />
                          {user.email}
                        </div>
                        <div className="flex items-center gap-2 text-zinc-400 text-[10px] lg:text-sm">
                          <Phone className="w-3 h-3" />
                          {user.phone}
                        </div>
                      </div>
                    </td>
                    <td className="px-4 lg:px-6 py-4 lg:py-6">
                      <span className={`px-2 lg:px-4 py-1 rounded-full text-[9px] lg:text-xs font-bold ${
                        user.role === 'Professional' ? 'bg-blue-400/10 text-blue-400' : 'bg-purple-400/10 text-purple-400'
                      }`}>
                        {user.role}
                      </span>
                    </td>
                    <td className="px-4 lg:px-6 py-4 lg:py-6 hidden md:table-cell">
                      <div className="flex items-center gap-2 text-zinc-400 text-[10px] lg:text-sm">
                        <Calendar className="w-3 h-3" />
                        {user.joined}
                      </div>
                    </td>
                    <td className="px-4 lg:px-6 py-4 lg:py-6">
                      <div className="flex items-center gap-1.5 lg:gap-2">
                        <div className={`w-1.5 lg:w-2 h-1.5 lg:h-2 rounded-full ${user.status === 'Active' ? 'bg-[#4ade80] shadow-[0_0_8px_rgba(74,222,128,0.5)]' : 'bg-zinc-500'}`} />
                        <span className={`text-[10px] lg:text-sm font-bold ${user.status === 'Active' ? 'text-[#4ade80]' : 'text-zinc-500'}`}>{user.status}</span>
                      </div>
                    </td>
                    <td className="px-4 lg:px-6 py-4 lg:py-6 text-right">
                      <button className="p-1.5 lg:p-2 text-zinc-500 hover:text-white transition-colors">
                        <MoreVertical className="w-4 h-4 lg:w-6 lg:h-6" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 lg:mt-10">
          <p className="text-zinc-500 text-[10px] lg:text-sm font-medium">Showing <span className="text-white">5</span> of <span className="text-white">1,284</span> users</p>
          <div className="flex items-center gap-1.5 lg:gap-2">
            <Button variant="outline" className="border-white/10 text-[#94a3b8] hover:text-white h-8 lg:h-10 px-3 lg:px-4 rounded-lg text-xs lg:text-sm">Prev</Button>
            <div className="flex items-center gap-1">
              {[1, 2, 3, "...", 12].map((p, i) => (
                <button key={i} className={`w-8 lg:w-10 h-8 lg:h-10 rounded-lg text-xs lg:text-sm font-bold transition-all ${p === 1 ? 'bg-[#4ade80] text-[#0a1628]' : 'text-zinc-500 hover:bg-white/5'}`}>
                  {p}
                </button>
              ))}
            </div>
            <Button variant="outline" className="border-white/10 text-[#94a3b8] hover:text-white h-8 lg:h-10 px-3 lg:px-4 rounded-lg text-xs lg:text-sm">Next</Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
