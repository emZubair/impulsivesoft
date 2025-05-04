
import { Check } from 'lucide-react';

const services = [
  {
    title: "Software Development",
    description: "Custom software solutions tailored to your business needs, from web applications to enterprise systems.",
    features: [
      "Full-stack development",
      "API development & integration",
      "Legacy system modernization",
      "Scalable architecture design"
    ],
    color: "from-blue-500 to-indigo-600"
  },
  {
    title: "Cloud Engineering",
    description: "Leverage the power of cloud computing with our expert cloud engineering and migration services.",
    features: [
      "Cloud architecture design",
      "Migration strategy & execution",
      "DevOps implementation",
      "Serverless application development"
    ],
    color: "from-teal-400 to-cyan-500"
  },
  {
    title: "IT Consulting",
    description: "Strategic technology consulting to help your business navigate digital transformation.",
    features: [
      "Technology roadmap planning",
      "Digital transformation strategy",
      "IT infrastructure assessment",
      "Security & compliance audits"
    ],
    color: "from-purple-500 to-fuchsia-500"
  }
];

const Services = () => {
  return (
    <section id="services" className="section bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle mx-auto">
            We provide comprehensive IT engineering services to help businesses thrive in the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
