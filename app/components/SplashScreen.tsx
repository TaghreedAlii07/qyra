"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function SplashScreen() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setHidden(true);
    }, 2600);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className={`splash-screen ${hidden ? "splash-hide" : ""}`}>
      <div className="splash-bg-grid" />

      <div className="splash-content">
        <Image
          src="/images/logo-dark.png"
          alt="QYRA Technologies"
          width={360}
          height={130}
          priority
          className="splash-logo"
        />

        <p className="splash-tagline">SMART SOLUTIONS. REAL IMPACT.</p>

        <div className="splash-loader">
          <span />
        </div>

        <p className="splash-loading">LOADING...</p>
      </div>
    </div>
  );
}