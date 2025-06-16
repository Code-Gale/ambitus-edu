import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

const ScrollToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Button
      onClick={scrollToTop}
      size="icon"
      aria-label="Scroll to top"
      className={cn(
        "fixed bottom-6 right-6 z-50 bg-gold-500 text-forest-900 shadow-lg hover:bg-gold-600 transition-opacity",
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      <ArrowUp className="w-6 h-6" />
    </Button>
  );
};

export default ScrollToTop; 