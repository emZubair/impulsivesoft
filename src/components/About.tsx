
const stats = [
  { number: "5+", label: "Years Experience" },
  { number: "100+", label: "Projects Completed" },
  { number: "25+", label: "Tech Experts" },
  { number: "95%", label: "Client Satisfaction" }
];

const About = () => {
  return (
    <section id="about" className="section bg-gray-50">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
            <h2 className="section-title">Who We Are</h2>
            <p className="text-gray-600 mb-6">
              Founded with a passion for technology excellence, our team of experienced IT professionals delivers cutting-edge solutions through leading freelance platforms. We combine technical expertise with a deep understanding of business challenges to help our clients succeed.
            </p>
            <p className="text-gray-600 mb-8">
              Our values of transparency, quality, and client satisfaction drive everything we do. We work as an extension of your team, providing valuable expertise while maintaining the flexibility and cost-effectiveness of the freelance model.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-brand-blue">{stat.number}</div>
                  <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" 
                    alt="Software developer working on code" 
                    className="w-full h-auto"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" 
                    alt="Programming code on computer screen" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" 
                    alt="Professional developer at desk" 
                    className="w-full h-auto"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" 
                    alt="Team of Pakistani engineers in a meeting" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
