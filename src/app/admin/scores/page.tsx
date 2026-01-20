import { 
  Trophy, 
  Search, 
  ChevronDown, 
  Filter,
  Download,
  CheckCircle2,
  XCircle
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const scores = [
  { id: 1, name: "Adeola Thompson", test: "HR Strategy Fundamentals", score: "92%", date: "Oct 24, 2023", path: "Professional" },
  { id: 2, name: "Joshua Ashiru", test: "Social Insurance II", score: "78%", date: "Oct 25, 2023", path: "Academic" },
  { id: 3, name: "Sarah Alabi", test: "Business Ethics", score: "85%", date: "Nov 01, 2023", path: "Professional" },
  { id: 4, name: "Michael Chen", test: "Actuarial Modelling", score: "45%", date: "Nov 05, 2023", path: "Academic" },
  { id: 5, name: "Chidi Okoro", test: "Talent Acquisition", score: "96%", date: "Nov 12, 2023", path: "Professional" },
];

export default function ScoresManagement() {
  return (
    <div className="space-y-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-black text-white mb-2">User Performance</h1>
          <p className="text-[#94a3b8] font-medium">Track and analyze assessment scores across all paths.</p>
        </div>
        <Button className="bg-[#4ade80] hover:bg-[#22c55e] text-[#0a1628] font-bold rounded-xl px-8 py-6">
          <Download className="w-5 h-5 mr-2" />
          Export All Results
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: "Avg. Professional Score", value: "84%", color: "text-blue-400" },
          { label: "Avg. Academic Score", value: "68%", color: "text-purple-400" },
          { label: "Total Submissions", value: "1,452", color: "text-[#4ade80]" },
        ].map((stat, i) => (
          <Card key={i} className="bg-white/5 border-white/5 p-6 rounded-2xl">
            <p className="text-zinc-500 text-[10px] font-black uppercase tracking-widest mb-2">{stat.label}</p>
            <h3 className={`text-3xl font-black ${stat.color}`}>{stat.value}</h3>
          </Card>
        ))}
      </div>

      <Card className="bg-white/5 border-white/5 p-8 rounded-[32px]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
            <input 
              type="text" 
              placeholder="Search by student or test name..." 
              className="w-full pl-12 pr-4 py-4 bg-white/5 border-none rounded-2xl text-white placeholder:text-zinc-500 focus:ring-1 focus:ring-[#4ade80]/50"
            />
          </div>
          <div className="flex items-center gap-4 w-full md:w-auto">
            <Button variant="outline" className="border-white/10 text-[#94a3b8] hover:text-white rounded-xl py-6 px-6">
              <Filter className="w-5 h-5 mr-2" />
              All Paths
              <ChevronDown className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-white/5 text-zinc-500 text-[10px] font-black uppercase tracking-widest">
                <th className="px-6 py-4">Student</th>
                <th className="px-6 py-4">Assessment Name</th>
                <th className="px-6 py-4">Path</th>
                <th className="px-6 py-4">Date Submitted</th>
                <th className="px-6 py-4">Score</th>
                <th className="px-6 py-4 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {scores.map((item) => (
                <tr key={item.id} className="group hover:bg-white/5 transition-colors cursor-pointer">
                  <td className="px-6 py-6 font-bold text-white text-lg">{item.name}</td>
                  <td className="px-6 py-6 text-zinc-400 font-medium">{item.test}</td>
                  <td className="px-6 py-6">
                    <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${
                      item.path === 'Professional' ? 'bg-blue-400/10 text-blue-400' : 'bg-purple-400/10 text-purple-400'
                    }`}>
                      {item.path}
                    </span>
                  </td>
                  <td className="px-6 py-6 text-zinc-500 text-sm font-medium">{item.date}</td>
                  <td className="px-6 py-6">
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-2 w-24 bg-white/5 rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full ${parseInt(item.score) >= 70 ? 'bg-[#4ade80]' : parseInt(item.score) >= 50 ? 'bg-yellow-400' : 'bg-red-400'}`}
                          style={{ width: item.score }}
                        />
                      </div>
                      <span className="font-black text-white">{item.score}</span>
                    </div>
                  </td>
                  <td className="px-6 py-6 text-right">
                    {parseInt(item.score) >= 50 ? (
                      <div className="inline-flex items-center gap-2 text-[#4ade80] font-bold text-xs bg-[#4ade80]/10 px-3 py-1 rounded-full">
                        <CheckCircle2 className="w-3 h-3" />
                        PASSED
                      </div>
                    ) : (
                      <div className="inline-flex items-center gap-2 text-red-400 font-bold text-xs bg-red-400/10 px-3 py-1 rounded-full">
                        <XCircle className="w-3 h-3" />
                        FAILED
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
