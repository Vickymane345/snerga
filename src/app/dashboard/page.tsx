import DashboardClient from "./DashboardClient";

export default async function DashboardPage() {
  // Mock static user data
  const userData = {
    id: "1",
    email: "user@example.com",
    fullName: "Test User",
    company: "Test Company",
    phone: "+1234567890",
    avatarUrl: "",
    role: "user",
    createdAt: new Date().toISOString(),
  };

  return <DashboardClient user={userData} />;
}
