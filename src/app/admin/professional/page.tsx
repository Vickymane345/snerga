"use client";

import { 
  Plus, 
  Trash2, 
  Save, 
  HelpCircle,
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function ProfessionalUpload() {
  const [questions, setQuestions] = useState([
    { id: 1, text: "", options: ["", "", "", ""], correct: 0 }
  ]);

  const addQuestion = () => {
    setQuestions([...questions, { id: Date.now(), text: "", options: ["", "", "", ""], correct: 0 }]);
  };

  const removeQuestion = (id: number) => {
    if (questions.length > 1) {
      setQuestions(questions.filter(q => q.id !== id));
    }
  };

  return (
    <div className="space-y-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-black text-white mb-2">Professional Questions</h1>
          <p className="text-[#94a3b8] font-medium">Upload and manage assessment questions for the Professional path.</p>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline" className="border-white/10 text-white hover:bg-white/5 rounded-xl px-6 py-6 font-bold">
            Discard Changes
          </Button>
          <Button className="bg-[#4ade80] hover:bg-[#22c55e] text-[#0a1628] font-bold rounded-xl px-8 py-6 shadow-xl shadow-[#4ade80]/20">
            <Save className="w-5 h-5 mr-2" />
            Publish Questions
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 space-y-6">
          {questions.map((q, index) => (
            <Card key={q.id} className="bg-white/5 border-white/5 p-8 rounded-[32px] group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-[#4ade80] opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#4ade80]/10 text-[#4ade80] flex items-center justify-center font-black">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-white">Question {index + 1}</h3>
                </div>
                <button 
                  onClick={() => removeQuestion(q.id)}
                  className="p-2 text-zinc-500 hover:text-red-400 transition-colors"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-6">
                <div className="space-y-3">
                  <label className="text-zinc-500 text-[10px] font-black uppercase tracking-widest px-1">Question Text</label>
                  <textarea 
                    placeholder="Enter the professional assessment question..."
                    className="w-full bg-white/5 border-none rounded-2xl p-6 text-white placeholder:text-zinc-600 focus:ring-1 focus:ring-[#4ade80]/30 min-h-[120px] resize-none"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[0, 1, 2, 3].map((optIndex) => (
                    <div key={optIndex} className="space-y-3">
                      <div className="flex items-center justify-between px-1">
                        <label className="text-zinc-500 text-[10px] font-black uppercase tracking-widest">Option {String.fromCharCode(65 + optIndex)}</label>
                        <button className="flex items-center gap-2 text-[10px] font-bold text-zinc-500 hover:text-[#4ade80] transition-colors">
                          <CheckCircle2 className="w-3 h-3" />
                          Set Correct
                        </button>
                      </div>
                      <input 
                        type="text" 
                        placeholder={`Option ${String.fromCharCode(65 + optIndex)} content...`}
                        className="w-full bg-white/5 border-none rounded-xl px-6 py-4 text-white placeholder:text-zinc-600 focus:ring-1 focus:ring-[#4ade80]/30"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}

          <button 
            onClick={addQuestion}
            className="w-full py-8 border-2 border-dashed border-white/10 rounded-[32px] flex flex-col items-center justify-center gap-4 text-zinc-500 hover:border-[#4ade80]/50 hover:text-[#4ade80] transition-all group"
          >
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#4ade80]/10 transition-colors">
              <Plus className="w-6 h-6" />
            </div>
            <span className="font-bold uppercase tracking-widest text-sm">Add Another Question</span>
          </button>
        </div>

        <div className="lg:col-span-4 space-y-6">
          <Card className="bg-[#4ade80] p-8 rounded-[32px] text-[#0a1628]">
            <h3 className="text-2xl font-black mb-4">Quick Guidelines</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <HelpCircle className="w-5 h-5 flex-shrink-0 mt-1" />
                <p className="font-bold text-sm">Always provide four options for multiple-choice questions.</p>
              </li>
              <li className="flex items-start gap-3">
                <HelpCircle className="w-5 h-5 flex-shrink-0 mt-1" />
                <p className="font-bold text-sm">Ensure only one option is marked as the correct answer.</p>
              </li>
              <li className="flex items-start gap-3">
                <HelpCircle className="w-5 h-5 flex-shrink-0 mt-1" />
                <p className="font-bold text-sm">Questions should be clear and directly related to the Professional path.</p>
              </li>
            </ul>
          </Card>

          <Card className="bg-white/5 border-white/5 p-8 rounded-[32px]">
            <h3 className="text-xl font-bold text-white mb-6">Test Settings</h3>
            <div className="space-y-6">
              <div className="space-y-3">
                <label className="text-zinc-500 text-[10px] font-black uppercase tracking-widest px-1">Test Category</label>
                <select className="w-full bg-white/5 border-none rounded-xl px-6 py-4 text-white focus:ring-1 focus:ring-[#4ade80]/30 appearance-none">
                  <option className="bg-[#0a1628]">HR Management</option>
                  <option className="bg-[#0a1628]">Project Management</option>
                  <option className="bg-[#0a1628]">Business Ethics</option>
                </select>
              </div>
              <div className="space-y-3">
                <label className="text-zinc-500 text-[10px] font-black uppercase tracking-widest px-1">Time Limit (Mins)</label>
                <input 
                  type="number" 
                  defaultValue={30}
                  className="w-full bg-white/5 border-none rounded-xl px-6 py-4 text-white focus:ring-1 focus:ring-[#4ade80]/30"
                />
              </div>
              <div className="flex items-center gap-3 p-4 bg-blue-500/10 rounded-2xl border border-blue-500/20">
                <AlertCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <p className="text-xs font-bold text-blue-400">Published questions will be immediately available to all Professional path users.</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
