import CoverWrapHero from "../_components/CoverWrapHero";
import TerminalHero from "../_components/TerminalHero";

const Home = () => {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="flex justify-center items-center flex-col gap-y-6">
        <CoverWrapHero />
        <TerminalHero />
      </div>
    </div>
  );
};

export default Home;
