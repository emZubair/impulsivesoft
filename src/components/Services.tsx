
import { Check } from 'lucide-react';

const services = [
  {
    title: "Mobile Automation",
    description: "Streamline your mobile testing processes with our comprehensive automation solutions.",
    features: [
      "Appium-based automation frameworks",
      "Cross-platform testing solutions",
      "CI/CD integration for mobile testing",
      "Performance and usability testing"
    ],
    color: "from-blue-500 to-indigo-600"
  },
  {
    title: "Web Automation",
    description: "Enhance efficiency and reduce manual effort with our expert web automation services.",
    features: [
      "Selenium-based test automation",
      "Automated regression testing",
      "Performance monitoring automation",
      "Custom automation frameworks"
    ],
    color: "from-teal-400 to-cyan-500"
  },
  {
    title: "Web Development",
    description: "Create powerful, scalable web applications with our Django and React development expertise.",
    features: [
      "Django REST framework backend",
      "React frontend development",
      "API development & integration",
      "Responsive UI/UX implementation"
    ],
    color: "from-purple-500 to-fuchsia-500"
  },
  {
    title: "Large model testing & training",
    description: "Optimize and validate your machine learning and AI models with our specialized testing and training services.",
    features: [
      "LLM model validation and testing",
      "Custom training data preparation",
      "Performance optimization techniques",
      "Integration with existing systems"
    ],
    color: "from-amber-500 to-orange-600"
  }
];

const Services = () => {
  return (
    <section id="services" className="section bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle mx-auto">
            We provide specialized automation and web development services to help businesses streamline operations and build powerful digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2"
            >
              <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-brand-blue mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2 text-emerald-500 flex-shrink-0 mt-1">
                        <Check size={16} />
                      </span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
