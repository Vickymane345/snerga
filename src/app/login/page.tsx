"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Lock, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        
        // Mock login delay
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Static redirect logic
        if (email === "admin@synergasia.com") {
            router.push("/admin");
        } else {
            router.push("/dashboard");
        }
    };

    return (
        <div className="min-h-screen bg-[#0a1628] flex flex-col items-center justify-center px-6 relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#4ade80]/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#4ade80]/10 rounded-full blur-[120px]" />
            </div>

            <Link href="/" className="mb-12 relative z-10 flex items-center gap-3">
                <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/WhatsApp-Image-2025-12-15-at-23.43.04_ad35597b-1765842404829.jpg?width=8000&height=8000&resize=contain"
                    alt="SYNERGASIA Logo"
                    width={40}
                    height={40}
                    className="rounded-lg"
                />
                <span className="text-white font-bold text-2xl tracking-tight">SYNERGASIA</span>
            </Link>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-md relative z-10"
            >
                <Card className="bg-[#111d32] border-[#1e3a5f] shadow-2xl">
                    <CardHeader className="space-y-1 pt-8">
                        <CardTitle className="text-3xl font-bold text-white text-center" style={{ fontFamily: "'DM Serif Display', serif" }}>
                            Welcome back
                        </CardTitle>
                        <CardDescription className="text-[#94a3b8] text-center text-base">
                            Enter your credentials to access your dashboard
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="p-8">
                        <form onSubmit={handleLogin} className="space-y-5">
                            <div className="space-y-2">
                                <div className="relative">
                                    <Mail className="absolute left-3 top-3 h-5 w-5 text-[#94a3b8]" />
                                    <Input
                                        name="email"
                                        type="email"
                                        placeholder="Email Address"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        className="pl-10 bg-[#0a1628] border-[#1e3a5f] text-white focus:border-[#4ade80] py-6"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="relative">
                                    <Lock className="absolute left-3 top-3 h-5 w-5 text-[#94a3b8]" />
                                    <Input
                                        name="password"
                                        type="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        className="pl-10 bg-[#0a1628] border-[#1e3a5f] text-white focus:border-[#4ade80] py-6"
                                    />
                                </div>
                            </div>

                            <Button
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-[#4ade80] hover:bg-[#22c55e] text-[#0a1628] font-bold py-6 text-lg transition-all duration-300"
                            >
                                {isLoading ? (
                                    <>
                                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                        Logging in...
                                    </>
                                ) : (
                                    <>
                                        Log In
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </>
                                )}
                            </Button>
                        </form>

                        <div className="mt-8 text-center">
                            <p className="text-[#94a3b8]">
                                Don&apos;t have an account?{" "}
                                <Link href="/signup" className="text-[#4ade80] hover:text-[#22c55e] font-medium transition-colors">
                                    Sign up
                                </Link>
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </motion.div>
        </div>
    );
}
