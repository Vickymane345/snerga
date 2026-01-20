import { 
  Briefcase, 
  MapPin, 
  Clock, 
  DollarSign,
  Plus,
  MoreVertical,
  ChevronRight,
  TrendingUp,
  Building2
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const jobs = [
  { id: 1, role: "HR Manager", company: "FinTech Solutions", location: "Lagos, Nigeria", salary: "₦600k - ₦800k", type: "Full-time", status: "Active" },
  { id: 2, role: "Actuarial Analyst", company: "Global Insurance", location: "Remote", salary: "₦400k - ₦550k", type: "Contract", status: "Active" },
  { id: 3, role: "Learning & Development Lead", company: "Retail Dynamics", location: "Abuja, Nigeria", salary: "₦500k - ₦700k", type: "Full-time", status: "Closed" },
  { id: 4, role: "Operations Specialist", company: "Logistics Hub", location: "Lagos, Nigeria", salary: "₦350k - ₦450k", type: "Full-time", status: "Active" },
];

export default function JobsManagement() {
  return (
    <div className="space-y-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-black text-white mb-2">Job Opportunities</h1>
          <p className="text-[#94a3b8] font-medium">Post and manage job vacancies for your users.</p>
        </div>
        <Button className="bg-[#4ade80] hover:bg-[#22c55e] text-[#0a1628] font-bold rounded-xl px-8 py-6">
          <Plus className="w-5 h-5 mr-2" />
          Post New Job
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 space-y-6">
          <Card className="bg-white/5 border-white/5 p-8 rounded-[32px]">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-black text-white">Active Postings</h2>
              <p className="text-[#4ade80] font-bold text-sm bg-[#4ade80]/10 px-4 py-1 rounded-full">3 Live Now</p>
            </div>

            <div className="space-y-4">
              {jobs.map((job) => (
                <div key={job.id} className="flex items-center justify-between p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-all group border border-transparent hover:border-white/5 cursor-pointer">
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-[#4ade80]/10 flex items-center justify-center">
                      <Briefcase className="w-7 h-7 text-[#4ade80]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white group-hover:text-[#4ade80] transition-colors text-lg">{job.role}</h4>
                      <div className="flex items-center gap-4 mt-1">
                        <div className="flex items-center gap-1.5 text-xs text-zinc-500 font-medium">
                          <Building2 className="w-3.5 h-3.5" />
                          {job.company}
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-zinc-500 font-medium">
                          <MapPin className="w-3.5 h-3.5" />
                          {job.location}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-8">
                    <div className="text-right hidden md:block">
                      <p className="text-sm font-black text-white">{job.salary}</p>
                      <p className="text-[10px] text-zinc-500 font-black uppercase tracking-widest">{job.type}</p>
                    </div>
                    <div className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${
                      job.status === 'Active' ? 'bg-[#4ade80]/10 text-[#4ade80]' : 'bg-red-400/10 text-red-400'
                    }`}>
                      {job.status}
                    </div>
                    <button className="p-2 text-zinc-500 hover:text-white transition-colors">
                      <MoreVertical className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="lg:col-span-4 space-y-6">
          <Card className="bg-[#4ade80] p-8 rounded-[32px] text-[#0a1628] relative overflow-hidden group">
            <TrendingUp className="absolute top-0 right-0 w-32 h-32 opacity-10 -translate-y-4 translate-x-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-black mb-4">Engagement</h3>
            <div className="space-y-6">
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-1">Total Applications</p>
                <p className="text-4xl font-black">1,248</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <p className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-1">Shortlisted</p>
                  <p className="text-xl font-black">156</p>
                </div>
                <div className="flex-1 border-l border-[#0a1628]/10 pl-4">
                  <p className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-1">Interviews</p>
                  <p className="text-xl font-black">42</p>
                </div>
              </div>
              <Button className="w-full bg-[#0a1628] text-white hover:bg-[#111d32] font-bold rounded-xl py-6">
                Generate Report
                <ChevronRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </Card>

          <Card className="bg-white/5 border-white/5 p-8 rounded-[32px]">
            <h3 className="text-xl font-bold text-white mb-6">Popular Categories</h3>
            <div className="space-y-4">
              {[
                { name: "Human Resources", count: 420 },
                { name: "Actuarial Science", count: 285 },
                { name: "Project Management", count: 194 },
                { name: "Business Strategy", count: 142 },
              ].map((cat, i) => (
                <div key={i} className="flex items-center justify-between group cursor-pointer">
                  <p className="text-zinc-400 font-medium group-hover:text-[#4ade80] transition-colors">{cat.name}</p>
                  <span className="text-zinc-600 font-bold text-sm">{cat.count}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
