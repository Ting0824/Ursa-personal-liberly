import { useEffect, useRef, useState } from "react";

const steps = [
  { id: 1, img: "/images/home/step1.svg", text: "註冊帳號" },
  { id: 2, img: "/images/home/step2.svg", text: "新增書籍" },
  { id: 3, img: "/images/home/step3.svg", text: "整理分類" },
  { id: 4, img: "/images/home/step4.svg", text: "開始使用" },
];

const Step = ({ img, text, offset, index }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // 當元素進入視窗，顯示元素
          observer.unobserve(el); // 停止觀察
        }
      },
      { threshold: 0.5 } // 進入視窗 50% 顯示時觸發
    );

    if (el) observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`shrink-0 w-40 sm:w-48 md:w-1/6 flex flex-col items-center opacity-0 transition-all duration-700 transform ${
        isVisible
          ? `opacity-100 translate-y-${offset}`
          : "opacity-0 translate-y-10"
      }`}
      style={{
        transition: "transform 0.5s ease-out, opacity 0.5s ease-out",
        transform: isVisible ? `translateY(0)` : `translateY(10px)`,
      }}
    >
      <img src={img} alt={text} className="w-32 h-32 object-contain" />
      <p className="text-center mt-2 text-sm font-semibold whitespace-nowrap">
        {text}
      </p>
    </div>
  );
};

const HowToUseSection = () => {
  return (
    <section className="py-16 bg-cardBackground">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">如何使用網站</h2>

        {/* 讓每一張圖片進場時不出現滾動條，且支援逐張顯示 */}
        <div className="overflow-hidden">
          <div className="flex gap-6 flex-wrap justify-center">
            {steps.map((step, index) => (
              <Step
                key={step.id}
                img={step.img}
                text={step.text}
                offset={index * 10} // 設定每張圖片進場時的偏移量
                index={index} // 傳遞每張圖片的索引
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToUseSection;
