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
    name: "Travel light",
    logo: "https://travel-light.co/assets/img/img/logo.png",
  },
  {
    name: "Al Hajri",
    logo: "https://fast-fix.co/assets/img/logo/logo.png",
  },
  {
    name: "D Fruit",
    logo: "https://meyzah.com/wp-content/uploads/2023/03/dfruit.png",
  },
  {
    name: "M2M Company",
    logo: "https://www.uno.com.my/img/portfolio/webapplication/m2m-thumb.webp",
  },
   {
    name: "ZUS Coffe",
    logo: "https://imagint.co/wp-content/uploads/2023/03/portfolio_zus-768x820.png",
  },
  {
    name: "Law Firm elraif",
    logo: "https://elraif.com/images/logo.png",
  },
  {
    name: "Law Firm MG",
    logo: "https://assets.wuiltweb.com/239846/%D9%84%D9%88%D8%AC%D9%88-%D9%83%D8%A8%D9%8A%D9%8A%D9%8A%D9%8A%D9%8A%D9%8A%D8%B1.png",
  },
  {
    name: "Turky Care",
    logo: "https://turkey-care.com/wp-content/themes/planet/img/logo.png",
  },
  {
    name: "Car Rent",
    logo: "https://www.uno.com.my/img/portfolio/webapplication/sewadeecar-thumb.webp",
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
