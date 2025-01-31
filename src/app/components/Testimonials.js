import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const testimonials = [
  {
    name: "John Doe",
    position: "Customer",
    text: "The service was impeccable. Highly professional and respectful. Would definitely recommend.",
    image: "/images/testimonial1.jpg",
  },
  {
    name: "Jane Smith",
    position: "Client",
    text: "The hearse was elegant and the staff was extremely supportive. Made a difficult time easier.",
    image: "/images/testimonial2.jpg",
  },
  {
    name: "Michael Brown",
    position: "Customer",
    text: "Excellent and dignified transportation. Thank you for your compassionate service.",
    image: "/images/testimonial3.jpg",
  },
];

export default function Testimonial() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800">What Our Clients Say</h2>
        <p className="text-gray-600 mt-2">Honest reviews from our valued clients</p>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        navigation
        className="max-w-2xl mx-auto mt-8"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white p-6 shadow-lg rounded-lg text-center">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 mx-auto rounded-full mb-4"
              />
              <p className="text-gray-700 italic">"{testimonial.text}"</p>
              <h3 className="mt-4 font-semibold text-lg">{testimonial.name}</h3>
              <p className="text-sm text-gray-500">{testimonial.position}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
