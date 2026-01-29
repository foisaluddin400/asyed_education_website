"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function AppartmentBooking() {
  useEffect(() => {
    const tryOpenLogin = () => {
      if (window.TutorBirdWidget) {
        window.TutorBirdWidget.open("login");
      } else {
        setTimeout(tryOpenLogin, 300);
      }
    };

    tryOpenLogin();
  }, []);

  return (
    <>
      <div className="h-[20vh] flex flex-col justify-center items-center">
        <div>
          <Script
            src="https://app.tutorbird.com/Widget/v4/Widget.ashx?settings=eyJTY2hvb2xJRCI6InNjaF9wTFpKUCIsIldlYnNpdGVJRCI6Indic181WnRKNyIsIldlYnNpdGVCbG9ja0lEIjoid2JiX21seEZKUyJ9"
            strategy="afterInteractive"
          />
        </div>
      </div>
    </>
  );
}
