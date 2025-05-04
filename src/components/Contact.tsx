
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle mx-auto">
            Ready to transform your digital presence? Contact us today to discuss your project.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-blue/40 focus:border-brand-blue"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-blue/40 focus:border-brand-blue"
                    placeholder="Your email"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-blue/40 focus:border-brand-blue"
                  placeholder="Subject"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-blue/40 focus:border-brand-blue"
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <Button type="submit" className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white py-3">
                Send Message
              </Button>
            </form>
          </div>
          
          <div className="lg:w-1/2 bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-brand-blue mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-brand-blue/10 p-3 rounded-full mr-4">
                  <Mail className="w-6 h-6 text-brand-blue" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900">Email</h4>
                  <p className="text-gray-600">impulsivesoft@gmail.com</p>
                  <p className="text-gray-600">info@impulsivesoft.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-brand-blue/10 p-3 rounded-full mr-4">
                  <Phone className="w-6 h-6 text-brand-blue" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900">Phone</h4>
                  <p className="text-gray-600">+92 (42) 36435497</p>
                  <p className="text-gray-600">+92 (333) 6208720</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-brand-blue/10 p-3 rounded-full mr-4">
                  <MapPin className="w-6 h-6 text-brand-blue" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900">Location</h4>
                  <p className="text-gray-600">123 Tech Boulevard,</p>
                  <p className="text-gray-600">Silicon Valley, CA 94123</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h4 className="text-lg font-medium text-gray-900 mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {['linkedin', 'twitter', 'github'].map((platform) => (
                  <a 
                    key={platform}
                    href={`#${platform}`} 
                    className="bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-shadow"
                  >
                    <img 
                      src={`https://cdn.simpleicons.org/${platform}/0A2540`} 
                      alt={platform} 
                      className="w-6 h-6"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
