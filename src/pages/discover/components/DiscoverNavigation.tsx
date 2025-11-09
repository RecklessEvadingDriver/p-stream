import { useTranslation } from "react-i18next";

interface DiscoverNavigationProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export function DiscoverNavigation({
  selectedCategory,
  onCategoryChange,
}: DiscoverNavigationProps) {
  const { t } = useTranslation();

  return (
    <div className="pb-4 w-full max-w-screen-xl mx-auto">
      <div className="relative flex justify-center">
        <div className="flex space-x-4">
          {["movies", "tvshows", "editorpicks"].map((category) => (
            <button
              key={category}
              type="button"
              className={`text-xl md:text-2xl font-bold px-4 py-2 bg-transparent text-center rounded-full cursor-pointer flex items-center transition-all duration-300 ${
                selectedCategory === category
                  ? "transform scale-105 text-type-link shadow-glow-sm"
                  : "text-type-secondary hover:text-type-dimmed hover:scale-102"
              }`}
              onClick={() => onCategoryChange(category)}
            >
              {t(`discover.tabs.${category}`)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
