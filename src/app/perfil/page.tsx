import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavBar active="perfil" />
      <h2>Perfil</h2>
    </main>
  );
}
