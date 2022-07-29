// Styles:
import "./Testimonials.css";
// Images:
import ClientPicture1 from "../../assets/images/avatar1.jpg";
import ClientPicture2 from "../../assets/images/avatar2.jpg";
import ClientPicture3 from "../../assets/images/avatar3.jpg";
import ClientPicture4 from "../../assets/images/avatar4.jpg";
// Swiper core and required modules:
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Swiper styles:
import "swiper/css";
import "swiper/css/pagination";

const testimonialItems = [
  {
    id: 1,
    photo: ClientPicture1,
    name: "Person Name",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id aut iure maiores deserunt, iusto odit molestias aliquam quod quisquam voluptatibus culpa pariatur animi porro iste? Aperiam ad ut dolores sunt!",
  },
  {
    id: 2,
    photo: ClientPicture2,
    name: "Person Name",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id aut iure maiores deserunt, iusto odit molestias aliquam quod quisquam voluptatibus culpa pariatur animi porro iste? Aperiam ad ut dolores sunt!",
  },
  {
    id: 3,
    photo: ClientPicture3,
    name: "Person Name",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id aut iure maiores deserunt, iusto odit molestias aliquam quod quisquam voluptatibus culpa pariatur animi porro iste? Aperiam ad ut dolores sunt!",
  },
  {
    id: 4,
    photo: ClientPicture4,
    name: "Person Name",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id aut iure maiores deserunt, iusto odit molestias aliquam quod quisquam voluptatibus culpa pariatur animi porro iste? Aperiam ad ut dolores sunt!",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Reviews from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {testimonialItems.map((item) => (
          <SwiperSlide className="testimonials__item" key={item.id}>
            <div className="testimonials__item--client-photo">
              <img src={item.photo} alt={item.name} />
            </div>
            <h5 className="testimonials__item--client-name">{item.name}</h5>
            <small className="testimonials__item--review">{item.review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
