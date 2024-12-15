import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/10 to-transparent" />
      <div 
        className="absolute inset-0 opacity-10" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2000')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary animate-fade-in">
            Elevating Your Business to Digital Excellence
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            We Create Digital Solutions
            <br />
            <span className="text-primary">For Your Growth</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Delivering cutting-edge web development and e-commerce solutions
          </p>
        </motion.div>
      </div>
    </section>
  );
};