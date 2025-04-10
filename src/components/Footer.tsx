import { Typography } from "@mui/material";

// Footer component
export function Footer() {
  return (
    <footer className="w-full bg-gray-800 text-white py-6 mt-10">
      <div className="max-w-4xl mx-auto flex flex-col items-center space-y-2">
        <Typography variant="body2" align="center">
          © {new Date().getFullYear()} FlavorExchange. All rights reserved.
        </Typography>
        <Typography variant="body2" align="center">
          Made by by Glen Alloy Perera
        </Typography>
      </div>
    </footer>
  );
}
