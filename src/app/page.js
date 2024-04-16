"use client";

import Game from "@/components/Game/Game";
import Header from "@/components/Header/Header";

export default function Home() {
  return (
    <main>
      <div className="wrapper">
        <Header />

        <div className="game-wrapper">
          <Game />
        </div>
      </div>
    </main>
  );
}
