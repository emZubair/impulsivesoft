const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-blue-600 text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="mb-4 flex items-center">
              <img 
                src="/public/lovable-uploads/58d6c922-5722-4888-9306-bb4ee9ef8869.png" 
                alt="ImpulsiveSoft Logo" 
                className="h-10 mr-3 bg-white rounded-full p-1" 
              />
              <span className="text-2xl font-bold font-display">ImpulsiveSoft</span>
            </div>
            <p className="text-blue-100 mb-6 max-w-md">
              Delivering exceptional IT engineering services through leading freelance platforms. We help businesses transform their digital presence with cutting-edge technology.
            </p>
            <p className="text-blue-200 text-sm font-display">
              © {currentYear} ImpulsiveSoft. All rights reserved.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold font-display mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-blue-100 hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="#about" className="text-blue-100 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#testimonials" className="text-blue-100 hover:text-white transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#contact" className="text-blue-100 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold font-display mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors">Software Development</a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors">Cloud Engineering</a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors">IT Consulting</a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors">Digital Transformation</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
