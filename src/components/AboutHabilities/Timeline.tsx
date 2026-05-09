import { motion } from "framer-motion";
import { FunctionComponent } from "react";
import { useLanguage } from "../../contexts/LanguageContext";

const Timeline: FunctionComponent = () => {
  const { t } = useLanguage();
  const events = t.about.timeline.events;

  return (
    <div className="lg:w-1/2 w-full flex flex-col gap-y-8">
      <h1 className="font-semibold text-2xl">{t.about.timeline.title}</h1>
      <div className="flex relative">
        <motion.span
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:block absolute left-0 top-0 w-1 h-72 bg-black origin-top"
        />
        <div className="space-y-8 lg:pl-1">
          {events.map((event, idx) => (
            <motion.div
              key={event.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.5,
                delay: 0.2 + idx * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex items-center"
            >
              <span className="hidden lg:block border-l-[4rem] h-1 border-black" />
              <div className="flex items-center justify-between lg:gap-x-10 gap-x-5 w-full">
                <motion.div
                  whileHover={{ y: -3, rotate: -2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}
                  className="flex items-center justify-center h-16 w-32 bg-white border-neoBrutalism shadow-neoBrutalism rounded-md cursor-default"
                >
                  <h1 className="text-3xl font-bold">{event.year}</h1>
                </motion.div>
                <div className="flex-1">
                  <h1 className="lg:text-lg font-semibold">{event.title}</h1>
                  <p className="lg:text-sm text-xs">{event.text}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
