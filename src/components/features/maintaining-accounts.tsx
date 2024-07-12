export const MaintainingAccounts = () => {
  return (
    <section className="flex flex-col items-center py-12">
      <h2 className="text-4xl font-bold text-center mb-8 animate-fade-in">
        New products coming soon to the traveling healthcare industry!
      </h2>
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 xl:grid-cols-2 gap-12 animate-fade-in-up">
        {/* Before contract start date */}
        <div className="space-y-4 p-6 border rounded-lg shadow-md transform transition-transform hover:scale-105 hover:shadow-lg">
          <div className="flex items-center justify-center bg-brown text-white px-6 py-2 rounded-full">
            Before contract start date
          </div>
          <h3 className="text-2xl font-semibold text-brown">
            Protect your health, wealth and sanity before your first day.
          </h3>
          <p className="text-muted-foreground">
            As traveling healthcare workers navigate the unpredictable landscapes of the profession, Bedouin emerges as their unwavering support, emphasizing the need to safeguard health, wealth, and sanity from day one. With a tailored approach, it provides comprehensive healthcare coverage, financial security, and a reassuring buffer against the challenges of their nomadic careers. In choosing Bedouin, you can embark on your healthcare journey with confidence, knowing that your well-being is prioritized at every step.
          </p>
        </div>

        {/* After contract start date */}
        <div className="space-y-4 p-6 border rounded-lg shadow-md transform transition-transform hover:scale-105 hover:shadow-lg">
          <div className="flex items-center justify-center bg-brown text-white px-6 py-2 rounded-full">
            After contract start date
          </div>
          <h3 className="text-2xl font-semibold text-brown">
            Coverage after you start so you can focus more on your patients and career.
          </h3>
          <p className="text-muted-foreground">
            We're committed to empowering traveling healthcare professionals like you to prioritize what truly matters – your patients and your career. We understand that your dedication deserves unwavering support, which is why our insurance solutions go beyond the initial phase, ensuring that your health, financial stability, and peace of mind remain protected throughout your journey. Let us handle the uncertainties so you can immerse yourself fully in your vital role without distractions or worries.
          </p>
        </div>
      </div>
    </section>
  );
};