import { useState } from "react";
import { Header } from "../components/Header";
import { SearchBar } from "../components/SearchBar";

export function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  function handleSearch(query: string) {
    setSearchQuery(query);
    console.log("Searching for:", query);
  }
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
      {/* Search Bar */}
      <div className="px-4 py-6 max-w-4xl mx-auto w-full">
        <SearchBar
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search recipes, cuisines, ingredients..."
        />
      </div>

      {/* Search Query */}
      {searchQuery && (
        <div className="px-4 py-2 text-center">
          <p>
            Showing results for: <strong>{searchQuery}</strong>
          </p>
        </div>
      )}
    </main>
  );
}
