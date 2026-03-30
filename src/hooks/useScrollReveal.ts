import { useEffect } from "react";

export default function useScrollReveal(): void {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            // delay progressivo (efeito cascata)
            setTimeout(() => {
              entry.target.classList.add("show");
            }, index * 80);

            observerInstance.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}