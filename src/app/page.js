"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', background: '#f9fafb' }}>
      <header style={{ background: 'white', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', padding: '1rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Image
              src="/logo.png"
              alt="Lalos Carpentry Logo"
              width={60}
              height={60}
              style={{ borderRadius: '8px' }}
            />
            <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#3D2412' }}>
              Lalos Carpentry
            </h1>
          </div>
          <nav>
            <a href="#contact" style={{ 
              background: '#3D2412', 
              color: 'white', 
              padding: '0.75rem 1.5rem', 
              borderRadius: '50px',
              fontWeight: '600',
              transition: 'all 0.3s'
            }}>
              Get Quote
            </a>
          </nav>
        </div>
      </header>

      <section style={{ 
        position: 'relative', 
        height: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("/work1.JPG")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div style={{ textAlign: 'center', color: 'white', maxWidth: '800px', padding: '0 1rem' }}>
          <div style={{ marginBottom: '2rem' }}>
            <Image
              src="/logo.png"
              alt="Lalos Carpentry Logo"
              width={200}
              height={200}
              style={{ borderRadius: '16px', border: '4px solid #BFA575' }}
            />
          </div>
          
          <p style={{ color: '#BFA575', fontSize: '1.125rem', fontWeight: '600', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>
            Premium Carpentry Excellence
          </p>
          
          <h1 style={{ fontSize: '4rem', fontWeight: 'normal', lineHeight: '1', marginBottom: '1.5rem' }}>
            <div>LALOS</div>
            <div style={{ color: '#BFA575' }}>CARPENTRY</div>
          </h1>
          
          <p style={{ fontSize: '1.5rem', fontWeight: '300', marginBottom: '2rem', lineHeight: '1.5' }}>
            Where traditional craftsmanship meets modern innovation.
            <br />
            <span style={{ color: '#BFA575' }}>Creating woodwork that inspires and endures.</span>
          </p>
          
          <a href="#contact" style={{
            display: 'inline-block',
            background: '#3D2412',
            color: 'white',
            padding: '1.25rem 2.5rem',
            borderRadius: '50px',
            fontWeight: 'bold',
            fontSize: '1.125rem',
            textDecoration: 'none',
            transition: 'all 0.3s',
            boxShadow: '0 10px 25px rgba(0,0,0,0.3)'
          }}>
            Start Your Project →
          </a>
        </div>
      </section>

      <section id="contact" style={{ padding: '4rem 1rem', background: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '3rem', fontWeight: 'normal', color: '#3D2412', marginBottom: '1rem' }}>
            Start Your Custom Project
          </h2>
          <p style={{ fontSize: '1.25rem', color: '#666', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
            Ready to transform your vision into beautiful woodwork? Let&apos;s discuss your project.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
            <div style={{ textAlign: 'left' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Phone</h3>
              <a href="tel:9548123724" style={{ fontSize: '1.25rem', color: '#BFA575', fontWeight: '500' }}>
                (954) 812-3724
              </a>
              <p style={{ color: '#666', marginTop: '0.5rem' }}>Available Monday - Saturday, 8AM - 6PM</p>
            </div>
            
            <div style={{ textAlign: 'left' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Email</h3>
              <a href="mailto:miguela.restrepo@outlook.com" style={{ fontSize: '1.25rem', color: '#BFA575', fontWeight: '500' }}>
                miguela.restrepo@outlook.com
              </a>
              <p style={{ color: '#666', marginTop: '0.5rem' }}>We respond within 24 hours</p>
            </div>
          </div>
          
          <div style={{ 
            background: 'linear-gradient(135deg, #f9fafb 0%, #FFF8F0 100%)', 
            borderRadius: '24px', 
            padding: '2.5rem', 
            boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
            border: '1px solid rgba(191, 165, 117, 0.2)'
          }}>
            <h3 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Get Your Free Consultation</h3>
            <p style={{ fontSize: '1.125rem', color: '#666', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
              Fill out our detailed project form to get a personalized quote and consultation for your carpentry needs.
            </p>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLScKgzbd_C7YW4CJMdJM_rl4Uio7lFrMqCry1t_51a9efidHjA/viewform?usp=header" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                background: '#3D2412',
                color: 'white',
                fontWeight: 'bold',
                padding: '1.25rem 2rem',
                borderRadius: '12px',
                textDecoration: 'none',
                fontSize: '1.125rem',
                transition: 'all 0.3s',
                boxShadow: '0 4px 15px rgba(61, 36, 18, 0.3)'
              }}
            >
              Fill Out Project Form →
            </a>
          </div>
        </div>
      </section>

      <footer style={{ background: '#1f2937', color: 'white', padding: '2rem 1rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <Image
              src="/logo.png"
              alt="Lalos Carpentry Logo"
              width={48}
              height={48}
              style={{ borderRadius: '12px' }}
            />
            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#BFA575' }}>
                Lalos Carpentry
              </h3>
              <p style={{ color: '#9CA3AF', fontSize: '0.875rem' }}>
                Family Craftsmanship Since 2000
              </p>
            </div>
          </div>
          <p style={{ color: '#9CA3AF' }}>
            © {new Date().getFullYear()} Lalos Carpentry. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
