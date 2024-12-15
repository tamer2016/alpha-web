import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";

const companies = [
  {
    name: "TechCorp",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=200&fit=crop",
  },
  {
    name: "Digital Solutions",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=200&fit=crop",
  },
  {
    name: "WebMasters",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=200&fit=crop",
  },
  {
    name: "Cloud Systems",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=200&fit=crop",
  },
];

export const Testimonials = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-secondary to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Companies We've Worked With</h2>
          <p className="text-gray-600">
            Trusted by leading companies worldwide
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {companies.map((company, index) => (
                <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                  <div className="p-4">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="aspect-square relative rounded-xl overflow-hidden glass-card p-4"
                    >
                      <img
                        src={company.logo}
                        alt={`${company.name} logo`}
                        className="w-full h-full object-contain"
                      />
                    </motion.div>
                    <p className="text-center mt-2 font-medium text-gray-700">
                      {company.name}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};