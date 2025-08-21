'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  
  // Array of background images from your directory
  const backgroundImages = [
    '/31d7166c-1fc4-4b4b-a621-2b7212735a30.JPG',
    '/3d17c7b6-cc10-4abc-b21d-19db7e84acb2.JPG',
    '/811349c5-dc0a-4744-8576-6a13654d2f79.JPG',
    '/d22439f3-3927-4728-a464-7eaadafdeb91.JPG',
    '/fd9523cc-fea1-4af9-9da4-3e4d3e2db97d.JPG',
  ];

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  // Auto-advance reviews carousel every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReviewIndex((prevIndex) => 
        (prevIndex + 1) % 4
      );
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-18 h-18 flex items-center justify-center overflow-hidden">
                <Image
                  src="/companyLogo.png"
                  alt="LALOS Logo"
                  width={250}
                  height={250}
                  className="object-contain"
                />
              </div>
              
            </div>
            
            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-white hover:text-yellow-500 transition-colors">Services</a>
              <a href="#projects" className="text-white hover:text-yellow-500 transition-colors">Projects</a>
              <a href="#reviews" className="text-white hover:text-yellow-500 transition-colors">Reviews</a>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLScKgzbd_C7YW4CJMdJM_rl4Uio7lFrMqCry1t_51a9efidHjA/viewform?usp=header" target="_blank" rel="noopener noreferrer" className="bg-[#1c0100] hover:bg-[#BFA575] text-white px-6 py-2 rounded-lg transition-colors inline-block text-center" style={{ fontFamily: 'Inter, sans-serif' }}>
                Get Quote
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image Carousel */}
        <div className="absolute inset-0 w-full h-full">
          {backgroundImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              } `}
            >
              <Image
                src={image}
                alt={`Background image ${index + 1}`}
                fill
                className="object-cover "
                priority={index === 0}
              />
              {/* Dark overlay for better text readability */}
              <div className="absolute inset-0 bg-black/70"></div>
            </div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white">
          {/* Company Logo */}
          <div className="mb-2">
            <div className="w-76 h-76 flex items-center justify-center mx-auto mb-2 overflow-hidden">
              <Image
                src="/companyLogo.png"
                alt="LALOS Logo"
                width={300}
                height={250}
                className="object-contain"
              />
            </div>
            <div className="text-[#BFA575] text-sm font-semibold tracking-wider">
              PREMIUM CARPENTRY EXCELLENCE
            </div>
          </div>
          
          {/* Company Name */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium mb-2 tracking-tight" style={{ fontFamily: 'Restora Medium, serif' }}>
            LALOS
          </h1>
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium text-[#BFA575] mb-8 tracking-tight" style={{ fontFamily: 'Restora Medium, serif' }}>
            CARPENTRY
          </h2>
          
          {/* Company Description */}
          <div className="max-w-2xl mx-auto mb-12">
            <p className="text-xl text-gray-200 mb-2">
              Where traditional craftsmanship meets modern innovation.
            </p>
            <p className="text-xl text-[#BFA575]">
              Creating woodwork that inspires and endures.
            </p>
          </div>
          
          {/* Call to Action Button */}
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScKgzbd_C7YW4CJMdJM_rl4Uio7lFrMqCry1t_51a9efidHjA/viewform?usp=header" target="_blank" rel="noopener noreferrer" className="bg-[#1c0100] hover:bg-[#BFA575] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center mx-auto space-x-2" style={{ fontFamily: 'Inter, sans-serif' }}>
            <span>Start Your Project</span>
            <span>→</span>
          </a>
        </div>

        {/* Carousel Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex
                  ? 'bg-yellow-500 scale-125'
                  : 'bg-gray-400 hover:bg-gray-300'
              }`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => setCurrentImageIndex((prev) => 
            prev === 0 ? backgroundImages.length - 1 : prev - 1
          )}
          className="absolute left-8 top-1/2 transform -translate-y-1/2 z-20 bg-gray-700 hover:bg-gray-600 text-white p-3 rounded-full transition-all duration-300"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={() => setCurrentImageIndex((prev) => 
            (prev + 1) % backgroundImages.length
          )}
          className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 bg-gray-700 hover:bg-gray-600 text-white p-3 rounded-full transition-all duration-300"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-medium text-gray-800 mb-6" style={{ fontFamily: 'Restora Medium, serif' }}>
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              From concept to completion, we transform spaces with precision craftsmanship and innovative design solutions.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Custom Furniture */}
            <div className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 hover:from-gray-100 hover:to-gray-50 transition-all duration-500 border border-gray-200 hover:border-[#BFA575] shadow-lg hover:shadow-xl">
              <div className="flex items-start space-x-6">
                <div className="bg-[#BFA575] w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🪑</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">Custom Furniture</h3>
                  <p className="text-gray-600 leading-relaxed mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Handcrafted pieces designed to your exact specifications. From dining tables to bedroom sets, 
                    each piece is crafted with premium materials and attention to detail.
                  </p>
                  <ul className="text-gray-500 space-y-2">
                    <li>• Bespoke design consultation</li>
                    <li>• Premium wood selection</li>
                    <li>• Lifetime craftsmanship guarantee</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Home Renovations */}
            <div className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 hover:from-gray-100 hover:to-gray-50 transition-all duration-500 border border-gray-200 hover:border-[#BFA575] shadow-lg hover:shadow-xl">
              <div className="flex items-start space-x-6">
                <div className="bg-[#BFA575] w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🏠</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">Home Renovations</h3>
                  <p className="text-gray-600 leading-relaxed mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Complete home transformations that breathe new life into your space. From kitchens to bathrooms, 
                    we handle every aspect of your renovation project.
                  </p>
                  <ul className="text-gray-500 space-y-2">
                    <li>• Full project management</li>
                    <li>• Quality materials & finishes</li>
                    <li>• On-time completion guarantee</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Kitchen & Bathroom */}
            <div className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 hover:from-gray-100 hover:to-gray-50 transition-all duration-500 border border-gray-200 hover:border-[#BFA575] shadow-lg hover:shadow-xl">
              <div className="flex items-start space-x-6">
                <div className="bg-[#BFA575] w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🍳</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">Kitchen & Bathroom</h3>
                  <p className="text-gray-600 leading-relaxed mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Specialized expertise in kitchen and bathroom design. We create functional, beautiful spaces 
                    that enhance your daily living experience.
                  </p>
                  <ul className="text-gray-500 space-y-2">
                    <li>• Custom cabinetry design</li>
                    <li>• Premium hardware selection</li>
                    <li>• Smart storage solutions</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Commercial Projects */}
            <div className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 hover:from-gray-100 hover:to-gray-50 transition-all duration-500 border border-gray-200 hover:border-[#BFA575] shadow-lg hover:shadow-xl">
              <div className="flex items-start space-x-6">
                <div className="bg-[#BFA575] w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🏢</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">Commercial Projects</h3>
                  <p className="text-gray-600 leading-relaxed mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Professional woodworking solutions for businesses. From retail displays to office furniture, 
                    we deliver commercial-grade quality on time and within budget.
                  </p>
                  <ul className="text-gray-500 space-y-2">
                    <li>• Commercial-grade materials</li>
                    <li>• Project timeline management</li>
                    <li>• Bulk production capabilities</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          
        </div>
      </section>

      {/* Projects Portfolio Section */}
      <section id="projects" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-medium text-gray-800 mb-6" style={{ fontFamily: 'Restora Medium, serif' }}>
              Our Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              Discover our portfolio of exceptional craftsmanship and innovative design solutions.
            </p>
          </div>

          {/* Projects Carousel */}
          <div className="relative">
            <div className="flex space-x-6 overflow-x-auto pb-8 scrollbar-hide">
              {/* Project Card 1 */}
              <div className="flex-shrink-0 w-80 group">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src="/31d7166c-1fc4-4b4b-a621-2b7212735a30.JPG"
                      alt="Custom Kitchen Renovation"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
                    <div className="absolute top-4 right-4 bg-[#BFA575] text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Corridor
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Modern Kitchen Renovation</h3>
                    <p className="text-gray-600 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>Complete kitchen transformation with custom cabinetry and premium finishes.</p>
                    <div className="flex items-center justify-between">
                      <span className="text-[#BFA575] font-semibold">Completed 2025</span>
                      <button className="text-[#BFA575] hover:text-[#A89065] font-semibold transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
                        View Details →
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Card 2 */}
              <div className="flex-shrink-0 w-80 group">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src="/3d17c7b6-cc10-4abc-b21d-19db7e84acb2.JPG"
                      alt="Custom Bathroom Design"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
                    <div className="absolute top-4 right-4 bg-[#BFA575] text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Kitchen
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Luxury Bathroom Suite</h3>
                    <p className="text-gray-600 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>Elegant bathroom design with custom vanities and premium fixtures.</p>
                    <div className="flex items-center justify-between">
                      <span className="text-[#BFA575] font-semibold">Completed 2025</span>
                      <button className="text-[#BFA575] hover:text-[#A89065] font-semibold transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
                        View Details →
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Card 3 */}
              <div className="flex-shrink-0 w-80 group">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src="/811349c5-dc0a-4744-8576-6a13654d2f79.JPG"
                      alt="Custom Furniture Piece"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
                    <div className="absolute top-4 right-4 bg-[#BFA575] text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Bathroom
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Handcrafted Dining Table</h3>
                    <p className="text-gray-600 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>Custom solid wood dining table with traditional joinery techniques.</p>
                    <div className="flex items-center justify-between">
                      <span className="text-[#BFA575] font-semibold">Completed 2025</span>
                      <button className="text-[#BFA575] hover:text-[#A89065] font-semibold transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
                        View Details →
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Card 4 */}
              <div className="flex-shrink-0 w-80 group">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src="/d22439f3-3927-4728-a464-7eaadafdeb91.JPG"
                      alt="Home Renovation"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
                    <div className="absolute top-4 right-4 bg-[#BFA575] text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Renovation
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Complete Home Makeover</h3>
                    <p className="text-gray-600 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>Full home renovation including kitchen, living areas, and bedrooms.</p>
                    <div className="flex items-center justify-between">
                      <span className="text-[#BFA575] font-semibold">Completed 2025</span>
                      <button className="text-[#BFA575] hover:text-[#A89065] font-semibold transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
                        View Details →
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Card 5 */}
              <div className="flex-shrink-0 w-80 group">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src="/fd9523cc-fea1-4af9-9da4-3e4d3e2db97d.JPG"
                      alt="Commercial Project"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
                    <div className="absolute top-4 right-4 bg-[#BFA575] text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Cieling
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Office Furniture Collection</h3>
                    <p className="text-gray-600 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>Modern office furniture designed for productivity and style.</p>
                    <div className="flex items-center justify-between">
                      <span className="text-[#BFA575] font-semibold">Completed 2025</span>
                      <button className="text-[#BFA575] hover:text-[#A89065] font-semibold transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
                        View Details →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Carousel Navigation */}
            <div className="flex justify-center mt-8 space-x-3">
              <button className="w-3 h-3 rounded-full bg-gray-300 hover:bg-[#BFA575] transition-colors"></button>
              <button className="w-3 h-3 rounded-full bg-[#BFA575]"></button>
              <button className="w-3 h-3 rounded-full bg-gray-300 hover:bg-[#BFA575] transition-colors"></button>
              <button className="w-3 h-3 rounded-full bg-gray-300 hover:bg-[#BFA575] transition-colors"></button>
              <button className="w-3 h-3 rounded-full bg-gray-300 hover:bg-[#BFA575] transition-colors"></button>
            </div>
          </div>

          
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-medium text-gray-800 mb-6" style={{ fontFamily: 'Restora Medium, serif' }}>
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              Don't just take our word for it - hear from our satisfied clients about their experience.
            </p>
          </div>

          {/* Reviews Carousel */}
          <div className="relative">
            <div className="relative h-96">
              {/* Review 1 */}
              <div className={`absolute inset-0 transition-opacity duration-1000 ${
                currentReviewIndex === 0 ? 'opacity-100' : 'opacity-0'
              }`}>
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12 shadow-xl border border-gray-100 h-full flex flex-col justify-center">
                  <div className="text-center">
                    <div className="flex justify-center mb-6">
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-8 h-8 text-[#BFA575]" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <blockquote className="text-2xl text-gray-700 leading-relaxed mb-8 italic">
                      "LALOS transformed our kitchen beyond our expectations. The attention to detail and craftsmanship is outstanding. 
                      They delivered exactly what we envisioned and more. Highly recommend!"
                    </blockquote>
                    <div className="flex items-center justify-center space-x-4">
                      <div className="w-16 h-16 bg-[#BFA575] rounded-full flex items-center justify-center text-white text-xl font-bold">
                        SM
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800">Sarah Mitchell</h4>
                        <p className="text-gray-600">Kitchen Renovation Client</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Review 2 */}
              <div className={`absolute inset-0 transition-opacity duration-1000 ${
                currentReviewIndex === 1 ? 'opacity-100' : 'opacity-0'
              }`}>
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12 shadow-xl border border-gray-100 h-full flex flex-col justify-center">
                  <div className="text-center">
                    <div className="flex justify-center mb-6">
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-8 h-8 text-[#BFA575]" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <blockquote className="text-2xl text-gray-700 leading-relaxed mb-8 italic">
                      "The custom furniture they created for our living room is absolutely beautiful. The quality and finish are exceptional. 
                      LALOS truly understands how to bring vision to life."
                    </blockquote>
                    <div className="flex items-center justify-center space-x-4">
                      <div className="w-16 h-16 bg-[#BFA575] rounded-full flex items-center justify-center text-white text-xl font-bold">
                        MJ
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800">Michael Johnson</h4>
                        <p className="text-gray-600">Custom Furniture Client</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Review 3 */}
              <div className={`absolute inset-0 transition-opacity duration-1000 ${
                currentReviewIndex === 2 ? 'opacity-100' : 'opacity-0'
              }`}>
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12 shadow-xl border border-gray-100 h-full flex flex-col justify-center">
                  <div className="text-center">
                    <div className="flex justify-center mb-6">
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-8 h-8 text-[#BFA575]" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <blockquote className="text-2xl text-gray-700 leading-relaxed mb-8 italic">
                      "Professional, reliable, and incredibly skilled. Our bathroom renovation was completed on time and exceeded our expectations. 
                      The team at LALOS is simply the best in the business."
                    </blockquote>
                    <div className="flex items-center justify-center space-x-4">
                      <div className="w-16 h-16 bg-[#BFA575] rounded-full flex items-center justify-center text-white text-xl font-bold">
                        AL
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800">Amanda Lee</h4>
                        <p className="text-gray-600">Bathroom Renovation Client</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Review 4 */}
              <div className={`absolute inset-0 transition-opacity duration-1000 ${
                currentReviewIndex === 3 ? 'opacity-100' : 'opacity-0'
              }`}>
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12 shadow-xl border border-gray-100 h-full flex flex-col justify-center">
                  <div className="text-center">
                    <div className="flex justify-center mb-6">
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-8 h-8 text-[#BFA575]" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <blockquote className="text-2xl text-gray-700 leading-relaxed mb-8 italic">
                      "Working with LALOS on our commercial office project was a pleasure. They delivered high-quality furniture on schedule 
                      and within budget. Their attention to detail is remarkable."
                    </blockquote>
                    <div className="flex items-center justify-center space-x-4">
                      <div className="w-16 h-16 bg-[#BFA575] rounded-full flex items-center justify-center text-white text-xl font-bold">
                        RD
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800">Robert Davis</h4>
                        <p className="text-gray-600">Commercial Project Manager</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Carousel Navigation Dots */}
            <div className="flex justify-center mt-8 space-x-3">
              {[0, 1, 2, 3].map((index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReviewIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentReviewIndex
                      ? 'bg-[#BFA575] scale-125'
                      : 'bg-gray-300 hover:bg-[#BFA575]'
                  }`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() => setCurrentReviewIndex((prev) => 
                prev === 0 ? 3 : prev - 1
              )}
              className="absolute left-8 top-1/2 transform -translate-y-1/2 z-20 bg-white hover:bg-gray-50 text-gray-600 hover:text-[#BFA575] p-3 rounded-full shadow-lg transition-all duration-300 border border-gray-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={() => setCurrentReviewIndex((prev) => 
                (prev + 1) % 4
              )}
              className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 bg-white hover:bg-gray-50 text-gray-600 hover:text-[#BFA575] p-3 rounded-full shadow-lg transition-all duration-300 border border-gray-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Image */}
            <div className="relative group">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src="/pic1.JPG"
                  alt="LALOS Team at Work"
                  width={600}
                  height={600}
                  className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>
              
              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#BFA575] mb-1">15+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>

            {/* Right Column - Company Information */}
            <div className="space-y-8">
              {/* Section Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-[#BFA575]/10 text-[#BFA575] rounded-full text-sm font-semibold">
                <span className="w-2 h-2 bg-[#BFA575] rounded-full mr-2"></span>
                About LALOS
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl lg:text-6xl font-medium text-gray-800 leading-tight" style={{ fontFamily: 'Restora Medium, serif' }}>
                Crafting Excellence
                <span className="block text-[#BFA575]">Since 2009</span>
              </h1>

              {/* Subheading */}
              <h2 className="text-2xl lg:text-3xl font-semibold text-gray-700 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                Where traditional woodworking meets innovative design solutions
              </h2>

              {/* Description */}
              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  At LALOS, we believe that exceptional craftsmanship is the foundation of every great project. 
                  Our journey began with a simple passion for woodworking and has evolved into a comprehensive 
                  service that transforms spaces and exceeds expectations.
                </p>
                
                <p className="text-lg text-gray-600 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  We combine time-honored techniques with cutting-edge technology to deliver projects that 
                  not only meet your needs but inspire admiration. Every piece we create tells a story of 
                  dedication, precision, and unwavering commitment to quality.
                </p>

                <p className="text-lg text-gray-600 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  From custom furniture that becomes family heirlooms to complete home transformations that 
                  redefine living spaces, our team of skilled artisans brings your vision to life with 
                  unmatched attention to detail and professional excellence.
                </p>
              </div>

              {/* Key Features */}
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-[#BFA575] rounded-full"></div>
                  <span className="text-gray-700 font-medium">Premium Materials</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-[#BFA575] rounded-full"></div>
                  <span className="text-gray-700 font-medium">Expert Craftsmanship</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-[#BFA575] rounded-full"></div>
                  <span className="text-gray-700 font-medium">Timely Delivery</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-[#BFA575] rounded-full"></div>
                  <span className="text-gray-700 font-medium">Lifetime Support</span>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-6">
                <button className="bg-[#BFA575] hover:bg-[#A89065] text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Learn More About Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Banner */}
      <section className="py-10 bg-gradient-to-r from-[#BFA575] to-[#A89065] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-4 border border-white/30">
              <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
              Trusted & Established
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-medium text-white mb-4 leading-tight" style={{ fontFamily: 'Restora Medium, serif' }}>
              <span className="block">25+ Years of</span>
                  <span className="block">Excellence</span>
            </h2>
            
            <p className="text-lg lg:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
              Building trust through exceptional craftsmanship and unwavering commitment to quality since 1999
            </p>
            
            <div className="flex flex-wrap justify-center items-center gap-6 text-white/90">
              <div className="text-center">
                <div className="text-2xl font-bold mb-1">500+</div>
                <div className="text-sm">Projects Completed</div>
              </div>
              <div className="w-px h-8 bg-white/30"></div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-1">100%</div>
                <div className="text-sm">Client Satisfaction</div>
              </div>
              <div className="w-px h-8 bg-white/30"></div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-1">25+</div>
                <div className="text-sm">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-24 h-24 bg-white/10 rounded-full -translate-x-12 -translate-y-12"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full translate-x-16 translate-y-16"></div>
      </section>

      {/* Get Estimate Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23BFA575' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left Column - Contact Information */}
            <div className="space-y-10">
              <div className="relative">
                <div className="inline-flex items-center px-4 py-2 bg-[#BFA575]/10 text-[#BFA575] rounded-full text-sm font-semibold mb-6">
                  <span className="w-2 h-2 bg-[#BFA575] rounded-full mr-2 animate-pulse"></span>
                  Contact Information
                </div>
                <h3 className="text-4xl font-bold text-gray-800 mb-4">Let's Start Your Project</h3>
                <p className="text-xl text-gray-600 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>Ready to transform your space? Get in touch for a free consultation and personalized estimate.</p>
              </div>
              
              <div className="space-y-8">
                <div className="group p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#BFA575]/30">
                  <div className="flex items-center space-x-5">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#BFA575] to-[#A89065] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-gray-800 mb-1">Phone</div>
                      <div className="text-[#BFA575] font-medium text-lg">(954) 812-3724</div>
                    </div>
                  </div>
                </div>
                
                <div className="group p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#BFA575]/30">
                  <div className="flex items-center space-x-5">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#BFA575] to-[#A89065] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-gray-800 mb-1">Email</div>
                      <div className="text-[#BFA575] font-medium text-lg">laloscarpentry@yahoo.com</div>
                    </div>
                  </div>
                </div>
                
                <div className="group p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#BFA575]/30">
                  <div className="flex items-center space-x-5">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#BFA575] to-[#A89065] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-gray-800 mb-1">Service Area</div>
                      <div className="text-[#BFA575] font-medium text-lg">South Florida</div>
                    </div>
                  </div>
                </div>
                
                <div className="group p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#BFA575]/30">
                  <div className="flex items-center space-x-5">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#BFA575] to-[#A89065] rounded-2xl rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-gray-800 mb-1">Business Hours</div>
                      <div className="text-[#BFA575] font-medium text-lg">Mon-Fri: 8AM-6PM, Sat: 9AM-4PM</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - CTA */}
            <div className="text-center lg:text-left relative">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-white/50">
                <div className="inline-flex items-center px-4 py-2 bg-[#BFA575]/10 text-[#BFA575] rounded-full text-sm font-semibold mb-6">
                  <span className="w-2 h-2 bg-[#BFA575] rounded-full mr-2"></span>
                  Free Estimate
                </div>
                
                <h1 className="text-5xl lg:text-6xl font-medium text-gray-800 mb-6 leading-tight" style={{ fontFamily: 'Restora Medium, serif' }}>
                  Ready to Transform
                  <span className="block text-[#BFA575]">Your Space?</span>
                </h1>
                
                <h2 className="text-2xl lg:text-3xl font-semibold text-gray-600 mb-10 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Get your free estimate today and start your journey to the perfect space
                </h2>
                
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScKgzbd_C7YW4CJMdJM_rl4Uio7lFrMqCry1t_51a9efidHjA/viewform?usp=header" target="_blank" rel="noopener noreferrer" className="group bg-gradient-to-r from-[#BFA575] to-[#A89065] hover:from-[#A89065] hover:to-[#BFA575] text-white font-bold py-6 px-12 rounded-2xl text-2xl transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-3xl relative overflow-hidden inline-block" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <span className="relative z-10">Get Free Estimate</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1c0100] text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 flex items-center justify-center overflow-hidden">
                  <Image
                    src="/companyLogo.png"
                    alt="LALOS Logo"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <div>
                  <div className="font-bold text-xl">LALOS</div>
                  <div className="text-sm text-[#BFA575]">CARPENTRY</div>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6 max-w-md" style={{ fontFamily: 'Inter, sans-serif' }}>
                Crafting excellence in woodworking for over 25 years. We transform spaces with precision craftsmanship and innovative design solutions.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-[#BFA575] rounded-full flex items-center justify-center hover:bg-[#A89065] transition-colors">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-[#BFA575] rounded-full flex items-center justify-center hover:bg-[#A89065] transition-colors">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-[#BFA575] rounded-full flex items-center justify-center hover:bg-[#A89065] transition-colors">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6" style={{ fontFamily: 'Restora Medium, serif' }}>Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="#services" className="text-gray-300 hover:text-[#BFA575] transition-colors">Services</a></li>
                <li><a href="#projects" className="text-gray-300 hover:text-[#BFA575] transition-colors">Projects</a></li>
                <li><a href="#about" className="text-gray-300 hover:text-[#BFA575] transition-colors">About</a></li>
                <li><a href="#reviews" className="text-gray-300 hover:text-[#BFA575] transition-colors">Reviews</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-[#BFA575] transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-6" style={{ fontFamily: 'Restora Medium, serif' }}>Contact Info</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-[#BFA575]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>(555) 123-4567</span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-[#BFA575]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>info@lalos.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-[#BFA575]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Greater Metro Area</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2024 LALOS CARPENTRY. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm text-gray-400">
                <a href="#" className="hover:text-[#BFA575] transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-[#BFA575] transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-[#BFA575] transition-colors">Sitemap</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
