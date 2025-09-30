import { Cover } from "@/components/ui/cover";

const CoverWrapHero = () => {
  return (
    <div>
      <div>
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center relative z-20 lg:py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
          Thy software I wrought
          <br /> right <Cover>swiftly</Cover>
        </h1>
      </div>
    </div>
  );
};

export default CoverWrapHero;
