import { Funnel_Sans } from "next/font/google";
import Navbar from "../_components/Navbar";

const funnel = Funnel_Sans({
  variable: "--font-funnel",
  weight: "400",
});

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main
        className={`${funnel.className} flex justify-center items-center w-full p-6 lg:p-10`}
      >
        {children}
      </main>
      <footer></footer>
    </>
  );
};

export default MainLayout;
