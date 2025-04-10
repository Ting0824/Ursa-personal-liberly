import { useEffect, useRef, useState } from "react";

const steps = [
  { id: 1, img: "/images/home/step1.svg", text: "註冊帳號" },
  { id: 2, img: "/images/home/step2.svg", text: "新增書籍" },
  { id: 3, img: "/images/home/step3.svg", text: "整理分類" },
  { id: 4, img: "/images/home/step4.svg", text: "開始使用" },
];

const HowToUseSection = () => {
  const containerRef = useRef(null);
  const [visibleSteps, setVisibleSteps] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const top = containerRef.current?.getBoundingClientRect().top;
      const trigger = window.innerHeight * 0.9;

      if (top < trigger && visibleSteps.length === 0) {
        // 進場時依序顯示每張
        steps.forEach((_, index) => {
          setTimeout(() => {
            setVisibleSteps((prev) => [...prev, index]);
          }, index * 500); // 每 500ms 一張
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [visibleSteps]);

  return (
    <section className="py-16 " ref={containerRef}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">如何使用網站</h2>

        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-6 w-max md:w-full justify-center">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`shrink-0 w-40 sm:w-48 md:w-1/6 flex flex-col items-center transition-all duration-1000 ease-in-out transform ${
                  visibleSteps.includes(index)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <img
                  src={step.img}
                  alt={step.text}
                  className="w-28 h-28 object-contain"
                />
                <p className="text-center mt-2 text-sm font-semibold whitespace-nowrap">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToUseSection;
