import { Icons } from "@/components/icons";
import Spline from '@splinetool/react-spline/next';

export const ExpenseTracker = () => {
  return (
    <section className="flex flex-col xl:flex-row items-center justify-between gap-y-12 xl:gap-y-0 py-12">
      <div className="space-y-8 max-w-lg xl:w-1/2">
        <div className="flex flex-col gap-y-4">
          <h3 className="text-3xl font-[900] tracking-tight">
            Digital insurance solutions that protect you!
          </h3>
          <p className="text-muted-foreground">
            Bedouin brings innovative insurance solutions to the market to combat financial losses due to cancellations 
            and loss events. 
          </p>
        </div>
        <div className="space-y-8">
          <div className="flex flex-row gap-x-4 relative">
            <div className="bg-brown rounded-md absolute h-12 w-12 grid place-items-center">
              <img src="cpu.png" alt="Descriptive Alt Text" className="w-8 h-auto" />
            </div>
            <div className="flex flex-col gap-y-2 pl-16">
              <p className="text-lg">Embedded to meet your needs</p>
              <p className="text-muted-foreground">
                Seamless insurance onboarding and protection. Give your business the differentiating edge by providing your users 
                with the best financial protection!
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-x-4 relative">
            <div className="bg-brown absolute rounded-md h-12 w-12 grid place-items-center">
              <img src="happyemoji.png" alt="Descriptive Alt Text" className="w-8 h-auto" />
            </div>
            <div className="flex flex-col gap-y-2 pl-16">
              <p className="text-lg">Fantastic Service</p>
              <p className="text-muted-foreground">
                Dedicated team committed to providing you with a truly fantastic and personalized experience from start to finish.
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-x-4 relative">
            <div className="bg-brown absolute rounded-md h-12 w-12 grid place-items-center">
              <img src="add-square.png" alt="Descriptive Alt Text" className="w-8 h-auto" />
            </div>
            <div className="flex flex-col gap-y-2 pl-16">
              <p className="text-lg">Ancillary Benefits</p>
              <p className="text-muted-foreground">
                Unlock access to a catalog of insurance products from our carrier partners!
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