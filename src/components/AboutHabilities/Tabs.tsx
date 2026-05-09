import { motion } from "framer-motion";
import { FunctionComponent } from "react";
import { useLanguage } from "../../contexts/LanguageContext";

interface TabsProps {
  active: number;
  onChange: (index: number) => void;
}

const Tabs: FunctionComponent<TabsProps> = ({ active, onChange }) => {
  const { t } = useLanguage();
  const tabs = [
    { id: 1, name: t.about.tabs.about, anchor: "sobre" },
    { id: 2, name: t.about.tabs.skills, anchor: "habilidades" },
  ];

  return (
    <div className="w-11/12 2xl:w-full flex items-center justify-between bg-mainGreen p-3 border-neoBrutalism rounded-xl relative">
      {tabs.map((tab) => {
        const isActive = active === tab.id;
        return (
          <button
            key={tab.id}
            id={tab.anchor}
            onClick={() => onChange(tab.id)}
            className="relative w-1/2 text-xl font-semibold p-3 rounded-xl z-10 transition-colors"
          >
            {isActive && (
              <motion.span
                layoutId="active-tab"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                className="absolute inset-0 bg-white border-neoBrutalism rounded-xl shadow-neoBrutalism -z-10"
              />
            )}
            {tab.name}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
