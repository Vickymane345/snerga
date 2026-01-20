import TutorialClient from "./TutorialClient";

export default async function TutorialPage() {
  // Mock static user data
  const userData = {
    id: "1",
    email: "user@example.com",
    fullName: "Test User",
    avatarUrl: "",
  };

  return <TutorialClient user={userData} />;
}
