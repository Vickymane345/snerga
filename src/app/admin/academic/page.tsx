"use client";

import { 
  Upload, 
  FileText, 
  Search, 
  MoreVertical, 
  Trash2,
  Download,
  Eye,
  Plus
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const pastQuestions = [
  { id: 1, title: "Life Contingency - 2022 Exam", category: "BSc Actuarial Science", year: "2022", uploads: 124, type: "PDF" },
  { id: 2, title: "Advanced Social Insurance - 2023", category: "MSc Actuarial Science", year: "2023", uploads: 89, type: "PDF" },
  { id: 3, title: "Financial Mathematics II", category: "BSc Actuarial Science", year: "2021", uploads: 256, type: "DOCX" },
  { id: 4, title: "Actuarial Modelling - Past Paper", category: "Professional Path", year: "2022", uploads: 45, type: "PDF" },
];

export default function AcademicUpload() {
  return (
    <div className="space-y-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-black text-white mb-2">Academic Past Questions</h1>
          <p className="text-[#94a3b8] font-medium">Upload and manage past exam questions for Academic paths.</p>
        </div>
        <Button className="bg-[#4ade80] hover:bg-[#22c55e] text-[#0a1628] font-bold rounded-xl px-8 py-6">
          <Plus className="w-5 h-5 mr-2" />
          Upload New Document
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-4 space-y-6">
          <Card className="bg-white/5 border-white/5 p-8 rounded-[32px] border-dashed border-2 hover:border-[#4ade80]/30 transition-all cursor-pointer group">
            <div className="flex flex-col items-center justify-center py-10 text-center">
              <div className="w-20 h-20 rounded-3xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-[#4ade80]/10 transition-colors">
                <Upload className="w-10 h-10 text-zinc-500 group-hover:text-[#4ade80]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Drag & Drop Files</h3>
              <p className="text-zinc-500 text-sm mb-6">Support PDF, DOCX, and JPG up to 10MB</p>
              <Button variant="outline" className="border-white/10 text-white hover:bg-white/5 rounded-xl px-6">
                Browse Files
              </Button>
            </div>
          </Card>

          <Card className="bg-white/5 border-white/5 p-8 rounded-[32px]">
            <h3 className="text-xl font-bold text-white mb-6">Quick Categorization</h3>
            <div className="space-y-6">
              <div className="space-y-3">
                <label className="text-zinc-500 text-[10px] font-black uppercase tracking-widest px-1">Academic Level</label>
                <select className="w-full bg-white/5 border-none rounded-xl px-6 py-4 text-white focus:ring-1 focus:ring-[#4ade80]/30 appearance-none">
                  <option className="bg-[#0a1628]">BSc Actuarial Science</option>
                  <option className="bg-[#0a1628]">MSc Actuarial Science</option>
                  <option className="bg-[#0a1628]">Post Graduate Diploma</option>
                </select>
              </div>
              <div className="space-y-3">
                <label className="text-zinc-500 text-[10px] font-black uppercase tracking-widest px-1">Academic Year</label>
                <input 
                  type="text" 
                  placeholder="e.g. 2023/2024"
                  className="w-full bg-white/5 border-none rounded-xl px-6 py-4 text-white focus:ring-1 focus:ring-[#4ade80]/30"
                />
              </div>
            </div>
          </Card>
        </div>

        <div className="lg:col-span-8 space-y-6">
          <Card className="bg-white/5 border-white/5 p-8 rounded-[32px]">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-black text-white">Recent Uploads</h2>
              <div className="relative w-64">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                <input 
                  type="text" 
                  placeholder="Search documents..." 
                  className="w-full pl-10 pr-4 py-2 bg-white/5 border-none rounded-xl text-sm text-white focus:ring-1 focus:ring-[#4ade80]/30"
                />
              </div>
            </div>

            <div className="space-y-4">
              {pastQuestions.map((doc) => (
                <div key={doc.id} className="flex items-center justify-between p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-all group border border-transparent hover:border-white/5">
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-[#4ade80]/10 flex items-center justify-center">
                      <FileText className="w-7 h-7 text-[#4ade80]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white group-hover:text-[#4ade80] transition-colors">{doc.title}</h4>
                      <p className="text-xs text-zinc-500 font-medium uppercase tracking-widest mt-1">{doc.category} • {doc.year}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right mr-6">
                      <p className="text-sm font-bold text-white">{doc.uploads}</p>
                      <p className="text-[10px] text-zinc-500 font-black uppercase tracking-widest">Downloads</p>
                    </div>
                    <button className="p-2 text-zinc-500 hover:text-white transition-colors">
                      <Eye className="w-5 h-5" />
                    </button>
                    <button className="p-2 text-zinc-500 hover:text-[#4ade80] transition-colors">
                      <Download className="w-5 h-5" />
                    </button>
                    <button className="p-2 text-zinc-500 hover:text-red-400 transition-colors">
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-6 border-t border-white/5 flex items-center justify-center">
              <button className="text-zinc-500 font-bold text-sm hover:text-white transition-colors">View All Documents</button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
