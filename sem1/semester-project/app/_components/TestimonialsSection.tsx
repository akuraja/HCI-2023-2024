import Badges from "@/components/Badge";
import Button from "@/components/Button";
import TestimonialCard, { TestimonialCardProps } from "./TestimonialCard";

import testimonial1 from "@/images/maps.png";
import testimonial2 from "@/images/index.jpg";
import testimonial3 from "@/images/park-suma-marjan-croatia_l.jpeg";

// TestimonialsSection component

const testimonials: TestimonialCardProps[] = [
  {
    image: testimonial1,
    title: "Odaberi destinaciju",
    body: "Svoju destinaciju možeš upisati ručno ili ju pak potražiti među ponuđenim lokacijama.",
    badge: <Badges.design />,
    link: "/usluge/destination1", // Add link for the first card
  },
  {
    image: testimonial2,
    title: "Atrakcije",
    body: "Tekst za drugi testimonial.",
    badge: <Badges.design />,
    link: "/usluge/destination2", // Add link for the second card
  },
  {
    image: testimonial3,
    title: "Aktivnosti",
    body: "Tekst za treći testimonial.",
    badge: <Badges.design />,
    link: "/usluge/destination3", // Add link for the third card
  },
];

// TestimonialsSection.jsx

const TestimonialsSection = () => (
  <section className="flex overflow-x-auto p-4">
    {testimonials.map((testimonial, index) => (
      <TestimonialCard key={index} {...testimonial} />
    ))}
  </section>
);




export default TestimonialsSection;
