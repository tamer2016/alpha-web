import { motion } from "framer-motion";
import { Send } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto glass-card rounded-2xl p-8 md:p-12"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">تواصل معنا</h2>
            <p className="text-gray-600">نحن هنا لمساعدتك في تطوير مشروعك</p>
          </div>
          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="الاسم"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="البريد الإلكتروني"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              />
            </div>
            <div>
              <textarea
                placeholder="رسالتك"
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-accent text-white py-4 rounded-lg font-medium hover-scale inline-flex items-center justify-center gap-2"
            >
              إرسال
              <Send className="w-5 h-5" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};