"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  // Hero image slider with modern construction imagery
  const heroImages = [
    "/work1.JPG",
    "/work2.JPG",
    "/work3.JPG",
    "/picture9.JPG"
  ];
  const [heroIndex, setHeroIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const nextHero = () => setHeroIndex((i) => (i + 1) % heroImages.length);
  const prevHero = () => setHeroIndex((i) => (i - 1 + heroImages.length) % heroImages.length);

  // Auto-advance hero slider
  useEffect(() => {
    const timer = setInterval(nextHero, 6000);
    return () => clearInterval(timer);
  }, [nextHero]);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Testimonials with professional titles
  const testimonials = [
    {
      name: "Maria Rodriguez",
      title: "Homeowner",
      company: "Coral Gables Residence",
      text: "Lalos Carpentry transformed our home with beautiful custom cabinets and built-ins. Their family's dedication to quality and traditional craftsmanship is unmatched in South Florida.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "James Thompson",
      title: "Property Manager",
      company: "Miami Beach Properties",
      text: "We've worked with Lalos for over 10 years on multiple commercial projects. Their expertise in custom millwork and attention to detail keeps us coming back.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Sofia Martinez",
      title: "Interior Designer",
      company: "Elegance Interiors",
      text: "Lalos Carpentry brings our design visions to life with exceptional woodwork. Their family's 25+ years of experience shows in every project they complete.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    }
  ];
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const nextTestimonial = () => setTestimonialIndex((i) => (i + 1) % testimonials.length);
  const prevTestimonial = () => setTestimonialIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      {/* Ultra-Modern Navigation Bar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl shadow-2xl border-b border-zinc-200/50 dark:border-zinc-700/50' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-4">
              <Image
                src="/logo.png"
                alt="Lalos Carpentry Logo"
                width={60}
                height={60}
                className="rounded-lg shadow-lg"
              />
         
            </div>
            <div className="hidden lg:flex items-center space-x-8">
              <a href="#services" className="text-[#bfa575] dark:text-zinc-300 hover:text-white dark:hover:text-[#BFA575] font-medium tracking-wide transition-colors duration-300">
                Services
              </a>
              <a href="#projects" className="text-[#bfa575] dark:text-zinc-300 hover:text-white  font-medium tracking-wide transition-colors duration-300">
                Projects
              </a>
              <a href="#testimonials" className="text-[#bfa575] dark:text-zinc-300 hover:text-white dark:hover:text-[#BFA575] font-medium tracking-wide transition-colors duration-300">
                Reviews
              </a>
              <a href="#contact" className="bg-[#3D2412] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#BFA575] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Get Quote
              </a>
            </div>
            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-zinc-700 dark:text-zinc-300 p-2 relative z-50"
              >
                <svg 
                  className={`w-6 h-6 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
          
          {/* Mobile Menu */}
          <div className={`lg:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl border-b border-zinc-200/50 dark:border-zinc-700/50 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'}`}>
            <div className="px-6 py-8 space-y-6">
              <a 
                href="#services" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-zinc-700 dark:text-zinc-300 hover:text-[#BFA575] font-medium text-lg transition-colors duration-300"
              >
                Services
              </a>
              <a 
                href="#projects" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-zinc-700 dark:text-zinc-300 hover:text-[#BFA575] font-medium text-lg transition-colors duration-300"
              >
                Projects
              </a>
              <a 
                href="#testimonials" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-zinc-700 dark:text-zinc-300 hover:text-[#BFA575] font-medium text-lg transition-colors duration-300"
              >
                Reviews
              </a>
              <a 
                href="#contact" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block bg-[#3D2412] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#BFA575] transition-all duration-300 text-center"
              >
                Get Quote
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Full-Screen Modern Design */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-zinc-900/90 z-10"></div>
        <Image
          src={heroImages[heroIndex]}
          alt="Modern construction project"
          fill
          style={{ objectFit: "cover" }}
          className="transition-all duration-[2000ms] ease-in-out scale-105"
          priority
        />
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6">
          <div className="max-w-5xl mx-auto space-y-12 animate-fade-in-up">
            {/* Large centered logo */}
            <div className="flex justify-center mb-8">
              <Image
                src="/logo.png"
                alt="Lalos Carpentry Logo"
                width={200}
                height={200}
                className="rounded-2xl shadow-2xl border-4 border-[#BFA575]"
              />
            </div>
            
            <div className="space-y-6">
              <p className="text-[#BFA575] font-semibold text-lg tracking-[0.2em] uppercase">
                Premium Carpentry Excellence
              </p>
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-normal text-white leading-none" style={{fontFamily: 'Tavern Alt Fill S, serif'}}>
                <span className="block">LALOS</span>
                <span className="block text-[#BFA575]">
                  CARPENTRY
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-zinc-200 font-light max-w-3xl mx-auto leading-relaxed">
                Where traditional craftsmanship meets modern innovation. 
                <span className="block mt-2 text-[#BFA575]">
                  Creating woodwork that inspires and endures.
                </span>
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              <a href="#contact" className="group relative overflow-hidden bg-[#3D2412] text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-[#BFA575] transition-all duration-500 shadow-2xl transform hover:-translate-y-1">
                <span className="relative z-10 flex items-center">
                  Start Your Project
                  <svg className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </span>
              </a>
              {/* <a href="#projects" className="group bg-white/10 backdrop-blur-lg text-white px-10 py-5 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40">
                <span className="flex items-center">
                  View Portfolio
                  <svg className="w-5 h-5 ml-2 group-hover:rotate-45 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </span>
              </a> */}
            </div>
          </div>
          
          {/* Side Navigation Arrows */}
          <button onClick={prevHero} className="absolute left-8 top-1/2 transform -translate-y-1/2 z-30 group bg-white/20 hover:bg-white/30 backdrop-blur-lg text-white p-4 rounded-full transition-all duration-300 border border-white/30 hover:border-white/50 hover:scale-110">
            <svg className="w-6 h-6 group-hover:-translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"></path>
            </svg>
          </button>
          
          <button onClick={nextHero} className="absolute right-8 top-1/2 transform -translate-y-1/2 z-30 group bg-white/20 hover:bg-white/30 backdrop-blur-lg text-white p-4 rounded-full transition-all duration-300 border border-white/30 hover:border-white/50 hover:scale-110">
            <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
            </svg>
          </button>
          
          {/* Bottom Dot Indicators */}
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex items-center space-x-2">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setHeroIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === heroIndex 
                    ? 'bg-yellow-400 w-8' 
                    : 'bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Modern Services Section */}
      <section id="services" className="py-32 px-6 bg-white dark:bg-zinc-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-200 to-transparent"></div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-[#3D2412] dark:text-[#BFA575] font-semibold text-lg tracking-[0.2em] uppercase mb-4">
              Our Expertise
            </p>
            <h2 className="text-5xl sm:text-6xl font-normal text-zinc-900 dark:text-white mb-8 leading-tight" style={{fontFamily: 'Tavern Alt Fill S, serif'}}>
              Premium
              <span className="block text-[#BFA575]">
                Carpentry Services
              </span>
            </h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              From custom furniture to architectural millwork, we deliver 
              craftsmanship excellence that stands the test of time.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Residential Service */}
            <div className="group relative bg-zinc-50 dark:bg-zinc-800 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-700 hover:-translate-y-2">
              <div className="absolute inset-0 bg-[#BFA575]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-10">
                <div className="w-20 h-20 bg-[#3D2412] rounded-2xl flex items-center justify-center mb-8 shadow-xl group-hover:scale-110 transition-transform duration-500">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">
                  Custom Furniture
                </h3>
                <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8">
                  Handcrafted furniture pieces, built-in cabinetry, and custom storage solutions 
                  designed with precision and crafted with premium materials.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-zinc-700 dark:text-zinc-300">
                    <div className="w-2 h-2 bg-[#3D2412] rounded-full mr-3"></div>
                    Bespoke Furniture Design
                  </div>
                  <div className="flex items-center text-zinc-700 dark:text-zinc-300">
                    <div className="w-2 h-2 bg-[#3D2412] rounded-full mr-3"></div>
                    Built-in Cabinetry & Storage
                  </div>
                  <div className="flex items-center text-zinc-700 dark:text-zinc-300">
                    <div className="w-2 h-2 bg-[#3D2412] rounded-full mr-3"></div>
                    Premium Wood Finishing
                  </div>
                </div>
              </div>
            </div>

            {/* Commercial Service */}
            <div className="group relative bg-zinc-50 dark:bg-zinc-800 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-700 hover:-translate-y-2">
              <div className="absolute inset-0 bg-[#BFA575]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-10">
                <div className="w-20 h-20 bg-[#BFA575] rounded-2xl flex items-center justify-center mb-8 shadow-xl group-hover:scale-110 transition-transform duration-500">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">
                  Architectural Millwork
                </h3>
                <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8">
                  Detailed trim work, crown molding, and custom architectural elements 
                  that add character and sophistication to any space.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-zinc-700 dark:text-zinc-300">
                    <div className="w-2 h-2 bg-amber-700 rounded-full mr-3"></div>
                    Custom Trim & Molding
                  </div>
                  <div className="flex items-center text-zinc-700 dark:text-zinc-300">
                    <div className="w-2 h-2 bg-amber-700 rounded-full mr-3"></div>
                    Wainscoting & Paneling
                  </div>
                  <div className="flex items-center text-zinc-700 dark:text-zinc-300">
                    <div className="w-2 h-2 bg-amber-700 rounded-full mr-3"></div>
                    Architectural Details
                  </div>
                </div>
              </div>
            </div>

            {/* Infrastructure Service */}
            <div className="group relative bg-zinc-50 dark:bg-zinc-800 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-700 hover:-translate-y-2">
              <div className="absolute inset-0 bg-[#3D2412]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-10">
                <div className="w-20 h-20 bg-[#3D2412] rounded-2xl flex items-center justify-center mb-8 shadow-xl group-hover:scale-110 transition-transform duration-500">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13 21v-7.5l4.5 2.5-.8 1.15L17 19h4v-2l-1.15-.85L19 14.5v-9L12 2 5 5.5v9l-.85 1.65L3 17v2h4l.3-1.85L7.5 16l4.5-2.5V21h1z"/>
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">
                  Restoration & Repair
                </h3>
                <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8">
                  Expert restoration of antique furniture and woodwork, repairs, 
                  and refinishing services that bring new life to cherished pieces.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-zinc-700 dark:text-zinc-300">
                    <div className="w-2 h-2 bg-[#BFA575] rounded-full mr-3"></div>
                    Antique Furniture Restoration
                  </div>
                  <div className="flex items-center text-zinc-700 dark:text-zinc-300">
                    <div className="w-2 h-2 bg-[#BFA575] rounded-full mr-3"></div>
                    Wood Refinishing & Repair
                  </div>
                  <div className="flex items-center text-zinc-700 dark:text-zinc-300">
                    <div className="w-2 h-2 bg-[#BFA575] rounded-full mr-3"></div>
                    Structural Wood Repairs
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-32 px-6 bg-zinc-100 dark:bg-zinc-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50/30 to-yellow-50/30 dark:from-amber-950/10 dark:to-yellow-950/10"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="space-y-8">
              <div>
                <p className="text-amber-700 dark:text-amber-400 font-semibold text-lg tracking-[0.2em] uppercase mb-4">
                  Our Mission
                </p>
                <h2 className="text-5xl sm:text-6xl font-normal text-zinc-900 dark:text-white mb-8 leading-tight" style={{fontFamily: 'Tavern Alt Fill S, serif'}}>
                  Crafting
                  <span className="block bg-gradient-to-r bg-[#BFA575] bg-clip-text text-transparent">
                    Tomorrow's Legacy
                  </span>
                </h2>
              </div>
              
              <div className="space-y-6 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                <p>
                  Lalos Carpentry is a proud family-owned business that has been serving South Florida's residential 
                  and commercial properties for over 25 years. We believe that every piece of wood tells a story, 
                  and our mission is to craft furniture and woodwork that becomes tomorrow's heirlooms.
                </p>
                <p>
                  Our family's deep roots in traditional carpentry, combined with modern innovation, allow us to 
                  deliver exceptional craftsmanship across Miami-Dade, Broward, and Palm Beach counties. We are 
                  committed to sustainable woodworking practices and uncompromising quality in every project.
                </p>
                <p>
                  From father to son, we've built lasting relationships with homeowners, designers, and 
                  commercial property owners throughout South Florida. Our family tradition of excellence continues 
                  as we pass down time-honored techniques and craftsmanship values that make every project a masterpiece.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-8 pt-6">
                <div className="text-center">
                  <div className="text-4xl font-black bg-gradient-to-r text-black bg-clip-text mb-2">
                    100%
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-400 font-medium">Family Owned</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-[#3D2412] mb-2">
                    500+
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-400 font-medium">Projects Completed</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-[#BFA575] mb-2">
                    25+
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-400 font-medium">Years Excellence</p>
                </div>
              </div>
            </div>
            
            {/* Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src="/work4.JPG"
                  alt="Modern architectural design representing our mission"
                  width={600}
                  height={700}
                  className="w-full h-[700px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/20 to-transparent"></div>
              </div>
              
              {/* Floating Card */}
              <div className="absolute -bottom-16 -left-8 bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-2xl border border-zinc-200 dark:border-zinc-700 max-w-sm">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-[#3D2412] rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A2.99 2.99 0 0017.1 7H16c-.8 0-1.54.37-2 1l-3 4v6h2v7h6v-1zM12.5 11.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.17 11 10s.67 1.5 1.5 1.5zM5.5 6c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm1.5 1h-2C4.01 7 3 8.01 3 9v6h1.5v7h3v-7H9V9c0-.99-.99-2-2-2z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-900 dark:text-white">Trusted Partners</h4>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">Recurring Clients</p>
                  </div>
                </div>
                <p className="text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed">
                  Known for our exceptional work quality, our clients return to us for additional projects and recommend us to their network.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-32 px-6 bg-white dark:bg-zinc-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-200 to-transparent"></div>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="lg:order-1 relative">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src="/work5.JPG"
                  alt="Construction team with years of experience"
                  width={600}
                  height={700}
                  className="w-full h-[700px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/20 to-transparent"></div>
              </div>
              
              {/* Floating Experience Badge */}
              <div className="absolute -top-8 -right-8 bg-gradient-to-br bg-[#000000] p-8 rounded-2xl shadow-2xl text-white max-w-xs">
                <div className="text-center">
                  <div className="text-5xl font-bold text-[#bfa575] mb-2">25+</div>
                  <p className="text-amber-100 font-semibold uppercase tracking-wider text-sm">
                    Years Serving South Florida
                  </p>
                </div>
              </div>
            </div>
            
            {/* Text Content */}
            <div className="lg:order-2 space-y-8">
              <div>
                <p className="text-amber-700 dark:text-amber-400 font-semibold text-lg tracking-[0.2em] uppercase mb-4">
                  Our Experience
                </p>
                <h2 className="text-5xl sm:text-6xl font-normal text-zinc-900 dark:text-white mb-8 leading-tight" style={{fontFamily: 'Tavern Alt Fill S, serif'}}>
                  Family Operated
                  <span className="block text-[#BFA575]">
                    Striving for Excellence
                  </span>
                </h2>
              </div>
              
              <div className="space-y-6 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                <p>
                  For over 25 years, our family-operated carpentry business has been the trusted choice for 
                  residential and commercial properties throughout South Florida. We strive to be the best at what we do, 
                  combining traditional craftsmanship with modern precision in every project.
                </p>
                <p>
                  Our family's commitment to excellence drives us to continuously improve our craft and exceed 
                  client expectations. From Miami to Fort Lauderdale and West Palm Beach, we've built a reputation 
                  on quality, reliability, and the personal attention that only a family business can provide.
                </p>
                <p>
                  From custom kitchen cabinets in Coral Gables to commercial millwork in downtown Miami, 
                  our experienced team brings decades of collective expertise to every project. We believe in doing 
                  things right the first time and delivering woodwork that stands the test of time.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-8 pt-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-[#3D2412] rounded-full"></div>
                    <span className="font-semibold text-zinc-900 dark:text-white">Family Owned & Operated</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-[#3D2412] rounded-full"></div>
                    <span className="font-semibold text-zinc-900 dark:text-white">Licensed & Insured</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-[#3D2412] rounded-full"></div>
                    <span className="font-semibold text-zinc-900 dark:text-white">Master Craftsman</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-[#BFA575] rounded-full"></div>
                    <span className="font-semibold text-zinc-900 dark:text-white">South Florida Experts</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-[#BFA575] rounded-full"></div>
                    <span className="font-semibold text-zinc-900 dark:text-white">Lifetime Guarantee</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-[#BFA575] rounded-full"></div>
                    <span className="font-semibold text-zinc-900 dark:text-white">25+ Years Experience</span>
                  </div>
                </div>
              </div>
              
              <div className="pt-8">
                <a href="#contact" className="inline-flex items-center bg-gradient-to-r bg-[#3D2412] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#BFA575] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Learn More About Our Work
                  <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ultra-Modern Testimonials Section */}
      <section id="testimonials" className="py-32 px-6 bg-zinc-100 dark:bg-zinc-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 to-yellow-50/50 dark:from-amber-950/20 dark:to-yellow-950/20"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <p className="text-[#3D2412] dark:text-[#BFA575] font-semibold text-lg tracking-[0.2em] uppercase mb-4">
              Client Success Stories
            </p>
            <h2 className="text-5xl sm:text-6xl font-normal text-[#3D2412] dark:text-white mb-8 leading-tight" style={{fontFamily: 'Tavern Alt Fill S, serif'}}>
              Trusted by
              <span className="block text-[#BFA575]">
                Discerning Clients
              </span>
            </h2>
          </div>
          
          <div className="relative">
            <div className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl rounded-[2rem] shadow-2xl border border-white/20 dark:border-zinc-700/20 overflow-hidden">
              <div className="p-16">
                <div className="text-center max-w-4xl mx-auto">
                  <div className="mb-8">
                    <div className="w-16 h-16 bg-[#3D2412] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                      </svg>
                    </div>
                  </div>
                  
                  <p className="text-2xl sm:text-3xl lg:text-4xl text-zinc-700 dark:text-zinc-200 font-light leading-relaxed mb-8 italic">
                    "{testimonials[testimonialIndex].text}"
                  </p>
                  <div className="space-y-2">
                    <h4 className="text-2xl font-bold text-[#3D2412]">
                      {testimonials[testimonialIndex].name}
                    </h4>
                    <p className="text-lg text-zinc-600 dark:text-zinc-400 font-medium">
                      {testimonials[testimonialIndex].title}
                    </p>
                    <p className="text-[#BFA575] font-semibold">
                      {testimonials[testimonialIndex].company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center items-center mt-12 space-x-6">
              <button 
                onClick={prevTestimonial} 
                className="group bg-white dark:bg-zinc-800 hover:bg-amber-50 dark:hover:bg-zinc-700 p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-zinc-200 dark:border-zinc-600"
              >
                <svg className="w-6 h-6 text-zinc-600 dark:text-zinc-400 group-hover:text-amber-700 group-hover:-translate-x-1 transition-all duration-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
              </button>
              
              <div className="flex space-x-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setTestimonialIndex(index)}
                    className={`transition-all duration-300 ${
                      index === testimonialIndex 
                        ? 'w-12 h-3 bg-gradient-to-r from-amber-600 to-yellow-600 rounded-full' 
                        : 'w-3 h-3 bg-zinc-300 dark:bg-zinc-600 rounded-full hover:bg-amber-300 dark:hover:bg-amber-700'
                    }`}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextTestimonial} 
                className="group bg-white dark:bg-zinc-800 hover:bg-amber-50 dark:hover:bg-zinc-700 p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-zinc-200 dark:border-zinc-600"
              >
                <svg className="w-6 h-6 text-zinc-600 dark:text-zinc-400 group-hover:text-amber-700 group-hover:translate-x-1 transition-all duration-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Contact Section */}
      <section id="contact" className="py-32 px-6 bg-white dark:bg-zinc-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-200 to-transparent"></div>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-[#BFA575] font-semibold text-lg tracking-[0.2em] uppercase mb-4">
              Let's Create Together
            </p>
            <h2 className="text-5xl sm:text-6xl font-normal text-zinc-900 dark:text-white mb-8 leading-tight" style={{fontFamily: 'Tavern Alt Fill S, serif'}}>
              Start Your
              <span className="block bg-gradient-to-r text-[#BFA575] bg-clip-text ">
                Custom Project
              </span>
            </h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your vision into beautiful woodwork? Let's discuss your project and create something extraordinary together.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-12">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-[#3D2412] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3">Phone</h3>
                  <a href="tel:1234567890" className="text-xl text-amber-700 hover:text-amber-800 dark:text-amber-400 dark:hover:text-amber-300 transition-colors font-medium">
                    (954) 812-3724
                  </a>
                  <p className="text-zinc-600 dark:text-zinc-400 mt-2">Available Monday - Saturday, 8AM - 6PM</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-[#3D2412] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3">Email</h3>
                  <a href="mailto:info@buildright.com" className="text-xl text-amber-700 hover:text-amber-800 dark:text-amber-400 dark:hover:text-amber-300 transition-colors font-medium">
                    miguela.restrepo@outlook.com
                  </a>
                  <p className="text-zinc-600 dark:text-zinc-400 mt-2">We respond within 24 hours</p>
                </div>
              </div>
            </div>
            
            {/* Google Form Button */}
            <div className="mt-16">
              <div className="bg-gradient-to-br from-zinc-50 to-amber-50/30 dark:from-zinc-800 dark:to-amber-950/20 rounded-3xl p-10 shadow-2xl border border-zinc-200/50 dark:border-zinc-700/50 text-center">
                <h3 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">Get Your Free Consultation</h3>
                <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl mx-auto">
                  Fill out our detailed project form to get a personalized quote and consultation for your carpentry needs.
                </p>
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLScKgzbd_C7YW4CJMdJM_rl4Uio7lFrMqCry1t_51a9efidHjA/viewform?usp=header" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-[#3D2412] text-white font-bold py-5 px-8 rounded-xl hover:bg-[#BFA575] transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 text-lg"
                >
                  Fill Out Project Form
                  <svg className="w-6 h-6 ml-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ultra-Modern Footer */}
      <footer className="bg-zinc-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[#3D2412]/20"></div>
        <div className="relative z-10">
          <div className="max-w-6xl mx-auto px-6 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
              <div className="lg:col-span-2">
                <div className="flex items-center space-x-4 mb-6">
                  <Image
                    src="/logo.png"
                    alt="Lalos Carpentry Logo"
                    width={64}
                    height={64}
                    className="rounded-2xl shadow-xl"
                  />
                  <div>
                    <h3 className="text-3xl font-bold text-[#BFA575]">
                      Lalos Carpentry
                    </h3>
                    <p className="text-zinc-400 font-medium tracking-wider uppercase text-sm">
                      Family Craftsmanship Since 2000
                    </p>
                  </div>
                </div>
                <p className="text-lg text-zinc-300 leading-relaxed mb-8 max-w-2xl">
                  We transform architectural visions into extraordinary realities through 
                  innovative construction solutions, uncompromising quality, and dedicated craftsmanship.
                </p>
                <div className="flex space-x-6">
                  <a href="#" className="w-12 h-12 bg-zinc-800 hover:bg-amber-600 rounded-full flex items-center justify-center transition-colors duration-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-12 h-12 bg-zinc-800 hover:bg-amber-600 rounded-full flex items-center justify-center transition-colors duration-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-12 h-12 bg-zinc-800 hover:bg-amber-600 rounded-full flex items-center justify-center transition-colors duration-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.404-5.957 1.404-5.957s-.358-.72-.358-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                    </svg>
                  </a>
                </div>
              </div>
              
              <div>
                <h4 className="text-xl font-bold text-white mb-6">Quick Links</h4>
                <div className="space-y-3">
                  <a href="#services" className="block text-zinc-400 hover:text-amber-400 transition-colors duration-300">Our Services</a>
                  <a href="#projects" className="block text-zinc-400 hover:text-amber-400 transition-colors duration-300">Recent Projects</a>
                  <a href="#testimonials" className="block text-zinc-400 hover:text-amber-400 transition-colors duration-300">Client Reviews</a>
                  <a href="#contact" className="block text-zinc-400 hover:text-amber-400 transition-colors duration-300">Contact Us</a>
                  <a href="#" className="block text-zinc-400 hover:text-amber-400 transition-colors duration-300">Careers</a>
                </div>
              </div>
            </div>
            
            <div className="border-t border-zinc-800 pt-8">
              <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
                <p className="text-zinc-400 text-center lg:text-left">
                  &copy; {new Date().getFullYear()} BuildRight Construction. All rights reserved.
                </p>
                <div className="flex space-x-8 text-sm">
                  <a href="#" className="text-zinc-400 hover:text-amber-400 transition-colors duration-300">Privacy Policy</a>
                  <a href="#" className="text-zinc-400 hover:text-amber-400 transition-colors duration-300">Terms of Service</a>
                  <a href="#" className="text-zinc-400 hover:text-amber-400 transition-colors duration-300">License & Insurance</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}