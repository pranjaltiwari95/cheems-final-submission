'use client';

import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useState } from 'react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We’ll respond soon, from the heart of IIT Jodhpur!');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="bg-[#FFEDE2] min-h-screen font-sans">
      {/* Hero Section */}
      <div className="relative bg-[#FFE1D6] pt-32 pb-20 mt-28 px-6 sm:px-12 lg:pt-40 lg:pb-28 lg:px-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[#3A1F4B] opacity-90"></div>
        </div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl drop-shadow-lg">
            Reach Out to Cheems
          </h1>
          <p className="mt-6 text-xl text-[#FFE1D6] max-w-3xl mx-auto font-serif">
            Questions about adoption, pet care, or partnerships? We’re here from IIT Jodhpur.
          </p>
        </div>
      </div>

      {/* Contact Content */}
      <div className="py-24 px-6 sm:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8 bg-white p-8 rounded-2xl shadow-xl border-t-4 border-[#FF7E67]">
            <h2 className="text-3xl font-extrabold text-[#3A1F4B] font-serif">
              Get In Touch
            </h2>
            <p className="text-lg text-[#4A355A] italic">
              Our Cheems team is ready to help with pet adoption, care, or any inquiries.
            </p>

            <div className="space-y-6">
              <div className="flex items-start group hover:scale-105 transition-transform duration-300">
                <div className="flex-shrink-0 bg-[#FFE1D6] p-3 rounded-full shadow-md">
                  <MapPin className="h-6 w-6 text-[#FF7E67]" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-[#3A1F4B]">Our Location</h3>
                  <p className="mt-1 text-[#4A355A]">
                    IIT Jodhpur<br />
                    Karwar, Jodhpur, Rajasthan 342030
                  </p>
                </div>
              </div>

              <div className="flex items-start group hover:scale-105 transition-transform duration-300">
                <a href="tel:+18699558779" className="flex-shrink-0 bg-[#FFECE8] p-3 rounded-full shadow-md">
                  <Phone className="h-6 w-6 text-[#FF8D7E]" />
                </a>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-[#3A1F4B]">Phone</h3>
                  <p className="mt-1 text-[#4A355A]">
                    Main: +91 8699558779 <br />
                    Adoption: +91 9316803676
                  </p>
                </div>
              </div>

              <div className="flex items-start group hover:scale-105 transition-transform duration-300">
                <a href="mailto:b22cs095@iitj.ac.in" className="flex-shrink-0 bg-[#FFE9F3] p-3 rounded-full shadow-md">
                  <Mail className="h-6 w-6 text-[#FF9AB5]" />
                </a>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-[#3A1F4B]">Email</h3>
                  <p className="mt-1 text-[#4A355A]">
                  b22cs095@iitj.ac.in<br />
                  b22cs074@iitj.ac.in
                  </p>
                </div>
              </div>

              <div className="flex items-start group hover:scale-105 transition-transform duration-300">
                <div className="flex-shrink-0 bg-[#FBE7F2] p-3 rounded-full shadow-md">
                  <Clock className="h-6 w-6 text-[#9E6BFF]" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-[#3A1F4B]">Hours</h3>
                  <p className="mt-1 text-[#4A355A]">
                    Monday - Friday: 8am - 5pm<br />
                    Saturday - Sunday: 9am - 2pm<br />
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-[#FF7E67] transform hover:-translate-y-2 transition-transform duration-300">
            <h2 className="text-2xl font-bold text-[#3A1F4B] mb-6 font-serif">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#4A355A]">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#FF7E67] focus:border-[#FF7E67] text-[#4A355A] bg-[#FFEDE2]"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#4A355A]">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#FF7E67] focus:border-[#FF7E67] text-[#4A355A] bg-[#FFEDE2]"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-[#4A355A]">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#FF7E67] focus:border-[#FF7E67] text-[#4A355A] bg-[#FFEDE2]"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#4A355A]">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#FF7E67] focus:border-[#FF7E67] text-[#4A355A] bg-[#FFEDE2]"
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-[#FF7E67] hover:bg-[#FF6C85] transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="pb-24 px-6 sm:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border-t-4 border-[#FF7E67]">
          <iframe
            title="Our Location is IIT Jodhpur"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.525733488751!2d73.10904353857043!3d26.471012407348386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418c5ea672337b%3A0xb6c9a5a9b08db22e!2sIndian%20Institute%20of%20Technology%20(IIT)%2C%20Jodhpur!5e0!3m2!1sen!2sin!4v1763037206861!5m2!1sen!2sin" 
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="rounded-b-2xl"
          ></iframe>
        </div>
      </div>
    </div>
  );
}