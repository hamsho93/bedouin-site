import { Icons } from "@/components/icons";
import Spline from '@splinetool/react-spline/next';

export const ExpenseTracker = () => {
  return (
    <section className="flex flex-col xl:flex-row items-center justify-between gap-y-12 xl:gap-y-0 py-12">
      <div className="space-y-8 max-w-lg xl:w-1/2">
        <div className="flex flex-col gap-y-4">
          <h3 className="text-3xl font-[900] tracking-tight text-[#333333]">
            Our Solutions
          </h3>
          <p className="text-[#333333]">
            Explore PillHub's solutions to optimize your pharmacy. 
          </p>
        </div>
        <div className="space-y-8">
          <div className="flex flex-row gap-x-4 relative">
            <div className="bg-[#289c8e] rounded-md absolute h-12 w-12 grid place-items-center">
              <img src="cpu.png" alt="Descriptive Alt Text" className="w-8 h-auto" />
            </div>
            <div className="flex flex-col gap-y-2 pl-16">
              <p className="text-lg text-[#333333]">24/7 without the need to stay open 24/7.</p>
              <p className="text-[#333333]">
                Your patients can get their prescriptions filled 24/7 without the need to stay open 24/7. Pillhub will handle the rest.
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-x-4 relative">
            <div className="bg-[#289c8e] absolute rounded-md h-12 w-12 grid place-items-center">
              <img src="happyemoji.png" alt="Descriptive Alt Text" className="w-8 h-auto" />
            </div>
            <div className="flex flex-col gap-y-2 pl-16">
              <p className="text-lg text-[#333333]">Blank</p>
              <p className="text-[#333333]">
                Blank
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-x-4 relative">
            <div className="bg-[#289c8e] absolute rounded-md h-12 w-12 grid place-items-center">
              <img src="add-square.png" alt="Descriptive Alt Text" className="w-8 h-auto" />
            </div>
            <div className="flex flex-col gap-y-2 pl-16">
              <p className="text-lg text-[#333333]">Blank</p>
              <p className="text-[#333333]">
                Blank
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center items-center w-full xl:w-1/2">
        <img src="bedouin-network.png" alt="Descriptive Alt Text" className="w-full h-auto" />
      </div>
    </section>
  );
};