import { Header } from "../components/Header";

export function Home() {
  return (
    <main className="w-full flex flex-col">
      <Header
        title={
          <p>
            Taste the World with
            <br /> FlavorExchange!
          </p>
        }
        type="home"
      />
    </main>
  );
}
