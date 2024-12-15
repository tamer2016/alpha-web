import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Testimonials />
    </div>
  );
};

export default Index;