import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary animate-fade-in">
            نرتقي بأعمالك نحو المستقبل الرقمي
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            نطور حلول رقمية متكاملة
            <br />
            <span className="text-primary">لنمو أعمالك</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            نقدم خدمات تطوير المواقع والمتاجر الإلكترونية بأحدث التقنيات
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 text-lg font-medium text-white bg-accent rounded-lg hover-scale"
            >
              ابدأ مشروعك
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};