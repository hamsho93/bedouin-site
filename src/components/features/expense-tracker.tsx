import { Icons } from "@/components/icons";
import Spline from '@splinetool/react-spline/next';

export const ExpenseTracker = () => {
  return (
    <section className="flex flex-col xl:flex-row items-center justify-between gap-y-12 xl:gap-y-0 py-12">
      <div className="space-y-8 max-w-lg xl:w-1/2">
        <div className="flex flex-col gap-y-4">
          <h3 className="text-3xl font-[900] tracking-tight">
            Fraud Reviews Automated 
          </h3>
          <p className="text-muted-foreground">
          Lloyd AI is the industry-leading Autonomous Fraud Agent that handles all manual applicant reviews at application stage for lenders. 
          </p>
        </div>
        <div className="space-y-8">
          <div className="flex flex-row gap-x-4 relative">
            <div className="bg-purple rounded-md absolute h-12 w-12 grid place-items-center">
              <img src="cpu.png" alt="Descriptive Alt Text" className="w-8 h-auto" />
            </div>
            <div className="flex flex-col gap-y-2 pl-16">
              <p className="text-lg">Do more with less headcount</p>
              <p className="text-muted-foreground">
              Risk and operations teams are under immense pressure with shrinking budgets, hiring freezes, and scarce engineering resources. 
              Our AI Risk Agents enhance team efficiency without the need for additional budget or staff, allowing you to scale quickly as your needs change.              </p>
            </div>
          </div>
          <div className="flex flex-row gap-x-4 relative">
            <div className="bg-purple absolute rounded-md h-12 w-12 grid place-items-center">
              <img src="happyemoji.png" alt="Descriptive Alt Text" className="w-8 h-auto" />
            </div>
            <div className="flex flex-col gap-y-2 pl-16">
              <p className="text-lg">Eliminate tedious review tasks</p>
              <p className="text-muted-foreground">
              In todays competitive market, speed is crucial. Our Fraud AI Agents streamline information across all your systems, 
              allowing your team to focus on strategic customer approvals rather than mundane tasks, accelerating your response times and boosting efficiency.              </p>
            </div>
          </div>
          <div className="flex flex-row gap-x-4 relative">
            <div className="bg-purple absolute rounded-md h-12 w-12 grid place-items-center">
              <img src="add-square.png" alt="Descriptive Alt Text" className="w-8 h-auto" />
            </div>
            <div className="flex flex-col gap-y-2 pl-16">
              <p className="text-lg">Reduce avoidable fraud losses</p>
              <p className="text-muted-foreground">
              In a landscape of shrinking margins and economic uncertainty, fraud and credit losses are unsustainable. Our advanced AI and 
              machine learning technology detect fraud and credit risks that human reviewers might miss, safeguarding your business against these hidden threats.              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center items-center w-full xl:w-1/2">
        <img src="lloyd_network.png" alt="Descriptive Alt Text" className="w-full h-auto" />
      </div>
    </section>
  );
};