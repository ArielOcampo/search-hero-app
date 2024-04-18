import React, { useState } from "react";
import { cn } from "../../utils/cn";
import { AnimatePresence, motion } from "framer-motion";

// import groot from "../../assets/";
import "../../App.css";

export const CardsWithHoverEffect = ({
  characters,
  searchTerm,
  className,
}: {
  characters: {
    name: string;
    thumbnail: { path: string; extension: string };
  }[];
  searchTerm: string;
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  if (searchTerm === "" || characters.length === 0) {
    return null;
  }
  return (
    <>
      {characters.length > 0 && (
        <div
          className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10")}
        >
          {characters.map((item, idx) => (
            <div
              key={idx}
              className="relative group block p-2 h-full w-full"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <AnimatePresence>
                {hoveredIndex === idx && (
                  <motion.span
                    className="absolute inset-0 h-full w-full bg-red-800 dark:bg-slate-800/[0.8] block rounded-3xl"
                    layoutId="hoverBackground"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { duration: 0.15 },
                    }}
                    exit={{
                      opacity: 0,
                      transition: { duration: 0.15, delay: 0.2 },
                    }}
                  />
                )}
              </AnimatePresence>
              <Card className="flex items-center justify-center">
                <CardTitle className="relative z-10 text-sm md:text-sm h-16 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
                  {item.name}
                </CardTitle>
                <img
                  src={`${item.thumbnail?.path}.${item.thumbnail?.extension}`}
                  style={{
                    width: "250px",
                    height: "250px",
                  }}
                  alt={item.name}
                />
              </Card>
            </div>
          ))}
        </div>
      )}

      {/* {characters.length === 0 && searchTerm !== "" && (
        <div className={cn("py-10 flex justify-end items-center")}>
          <p className="text-neutral-500 max-w-lg mx-auto my-2 text-xl text-center relative z-10">
            "Looks like Loki's been up to mischief again! Couldn't find the hero
            you're looking for. Keep searching!"
          </p>
          <img
            src={groot}
            alt="Groot triste"
            className="groot-image z-50 w-2/5"
          />
        </div>
      )} */}
    </>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-slate-700 border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
