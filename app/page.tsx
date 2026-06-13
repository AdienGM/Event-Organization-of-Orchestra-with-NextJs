"use client";

import { useState } from "react";
import { Header } from "@/app/components/layout/Header";
import { Footer } from "@/app/components/layout/Footer";
import { Hero } from "@/app/components/sections/Hero";
import { SeasonGrid } from "@/app/components/sections/SeasonGrid";
import { PatronBand } from "@/app/components/sections/PatronBand";
import { ConcertDetail } from "@/app/components/sections/ConcertDetail";
import { TicketModal } from "@/app/components/modals/TicketModal";
import { concerts } from "@/app/data/concerts";
import type { Concert } from "@/app/data/concerts";

export default function Home() {
  const [view, setView] = useState<"home" | "concert">("home");
  const [concert, setConcert] = useState<Concert | null>(null);
  const [modal, setModal] = useState<Concert | null>(null);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "auto" });

  const openConcert = (c: Concert) => {
    setConcert(c);
    setView("concert");
    requestAnimationFrame(scrollToTop);
  };

  const goHome = () => {
    setView("home");
    requestAnimationFrame(scrollToTop);
  };

  const scrollToSeason = () => {
    const el = document.getElementById("season");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <Header onHome={goHome} onTickets={() => openConcert(concerts[0])} />

      {view === "home" ? (
        <>
          <Hero onExplore={scrollToSeason} onSubscribe={() => openConcert(concerts[0])} />
          <div id="season">
            <SeasonGrid concerts={concerts} onOpen={openConcert} />
          </div>
          <PatronBand onBecome={() => openConcert(concerts[3])} />
          <Footer />
        </>
      ) : (
        <>
          <ConcertDetail
            concert={concert!}
            onBack={goHome}
            onReserve={setModal}
          />
          <Footer />
        </>
      )}

      <TicketModal concert={modal} onClose={() => setModal(null)} />
    </>
  );
}
