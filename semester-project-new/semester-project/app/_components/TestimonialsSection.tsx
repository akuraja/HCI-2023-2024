import Badges from "@/components/Badge";
import Button from "@/components/Button";
import TestimonialCard, { TestimonialCardProps } from "./TestimonialCard";

import testimonial1 from "@/images/bus.png";
import testimonial2 from "@/public/testimonials/hal-gatewood-tZc3vjPCk-Q-unsplash.jpg";
import testimonial3 from "@/public/testimonials/slidebean-TY3pj5q72tw-unsplash.jpg";
import testimonial4 from "@/public/testimonials/kelly-sikkema-sX_OIy4_HF8-unsplash.jpg";

const testimonials: TestimonialCardProps[] = [
  {
    image: testimonial1,
    title: "Odaberi destinaciju",
    body: "Svoju destinaciju možeš upisati ručno ili ju pak potražiti među ponuđenim lokacijama.",
    badge: <Badges.design />,
  },
];

const TestimonialsSection = () => (
  <section className="container flex flex-col items-center justify-center gap-5 lg:gap-20 h-screen">
    <div className="text-center mb-2"> {/* Dodali smo margin-bottom */}
      <h1 className="hidden sm:block font-roboto-condensed text-3xl font-extrabold">
        Lak pronalazak tražene destinacije
      </h1>
    </div>
    <div className="flex flex-col items-center gap-5">
      {testimonials.map((testimonial) => (
        <TestimonialCard key={testimonial.title} {...testimonial} />
      ))}
    </div>
  </section>
);



export default TestimonialsSection;
