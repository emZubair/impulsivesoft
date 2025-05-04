
const testimonials = [
  {
    quote: "Their mobile automation framework reduced our testing time by 70% and significantly improved our app quality. The team's expertise in Appium was exactly what we needed.",
    author: "Abel de Silva",
    title: "Manager, CiNKO",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&auto=format&fit=crop&q=60"
  },
  {
    quote: "The web automation solution they built transformed our QA process. Our regression testing is now fully automated, saving us countless hours and improving release confidence.",
    author: "Justin",
    title: "Digital Certificates",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=120&h=120&auto=format&fit=crop&q=60"
  },
  {
    quote: "Their Django and React development expertise helped us launch our platform in record time. The responsive UI and robust API architecture exceeded our expectations.",
    author: "Nora",
    title: "Product Owner, Tribes",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&h=120&auto=format&fit=crop&q=60"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section bg-brand-blue text-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-4 md:mb-6">Client Testimonials</h2>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-10 md:mb-14">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <div className="mb-6">
                <svg className="w-8 h-8 text-brand-teal" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-lg text-blue-50 mb-4">{testimonial.quote}</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-white">{testimonial.author}</h4>
                  <p className="text-blue-200 text-sm">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
