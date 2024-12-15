import { Globe, ShoppingCart, Server } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Globe,
    title: "تطوير المواقع",
    description: "تصميم وتطوير مواقع احترافية تناسب احتياجات عملك",
  },
  {
    icon: ShoppingCart,
    title: "المتاجر الإلكترونية",
    description: "إنشاء متاجر إلكترونية متكاملة مع أنظمة الدفع والشحن",
  },
  {
    icon: Server,
    title: "الخدمات الإلكترونية",
    description: "حلول تقنية متكاملة لتحسين كفاءة عملك",
  },
];

export const Services = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            خدماتنا
          </motion.h2>
          <p className="text-gray-600">نقدم حلولاً متكاملة لتطوير أعمالك</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass-card p-8 rounded-2xl hover-scale"
            >
              <service.icon className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};