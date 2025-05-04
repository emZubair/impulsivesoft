
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-tight text-blue-600 animate-fade-in">
              Innovative IT Solutions for The Digital Era
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
              ImpulsiveSoft delivers high-quality IT engineering solutions through leading freelance platforms, helping businesses transform their digital presence with cutting-edge technology.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Explore Services
              </Button>
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                Learn More
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 animate-fade-in-up">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg blur opacity-20"></div>
              <div className="relative bg-white p-5 rounded-lg shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="IT Professional working" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
