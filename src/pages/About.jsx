import React from 'react';
import { Users, Heart, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-[#F6F4EE]">
      {/* Hero Section */}
      <section className="relative bg-[#ECE6D6] py-28 overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 rounded-full bg-[#C6A15B]/15 translate-x-1/2 -translate-y-1/3 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#1F4235] mb-5">Who We Are</p>
          <h1 className="text-6xl md:text-7xl font-black text-[#16231D] mb-6" style={{fontFamily:'Playfair Display, serif'}}>
            Our Story
          </h1>
          <p className="text-lg text-[#4B534E] max-w-xl font-light leading-relaxed">
            Three minds, one standard: quality that speaks for itself
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg viewBox="0 0 1440 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 36C360 12 720 0 1080 12C1260 18 1380 36 1440 36V36H0Z" fill="#F6F4EE"/>
          </svg>
        </div>
      </section>

      {/* The Meaning Behind "Premium" */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="bg-white rounded-3xl p-12 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#ECE6D6] rounded-full flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-[#1F4235]" />
              </div>
              <h2 className="text-3xl font-bold text-black" style={{fontFamily:'Playfair Display, serif'}}>The Meaning Behind "Premium"</h2>
            </div>
<p className="text-lg text-gray-700 leading-relaxed mb-6">
  Toronto Premium isn't just a name—it's a standard. It represents the shared commitment of a small, dedicated team focused on doing things right, every time.
</p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Built from the ground up in Toronto, our team brings together diverse perspectives, skills, and creative visions. Every decision—from sourcing to shipping—is held to one bar: is this good enough to put our name on it.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              It's not about the label—it's about the <span className="font-bold text-[#1F4235]">depth of craftsmanship</span>, the <span className="font-bold text-[#1F4235]">clarity of design</span>, and the <span className="font-bold text-[#1F4235]">consistency of quality</span> when talented minds work in harmony.
            </p>
          </div>
        </div>
      </section>

{/* How We Operate */}
      <section className="py-24 bg-[#ECE6D6]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#1F4235] mb-3">Behind the Scenes</p>
            <h2 className="text-5xl font-black text-[#16231D]" style={{fontFamily:'Playfair Display, serif'}}>How We Operate</h2>
            <p className="text-[#4B534E] mt-3 font-light">The disciplines that shape every product decision</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Infrastructure', desc: 'A resilient, cloud-native foundation built to scale without compromise.' },
              { title: 'Operations', desc: 'Careful, consistent delivery from sourcing through to your doorstep.' },
              { title: 'Architecture', desc: 'Thoughtful systems design so quality holds up as we grow.' }
            ].map((pillar) => (
              <div key={pillar.title} className="text-center">
                <div className="w-32 h-32 bg-white rounded-full mx-auto mb-4 flex items-center justify-center shadow-sm">
                  <span className="text-3xl font-black text-[#1F4235]">{pillar.title[0]}</span>
                </div>
                <h3 className="text-2xl font-bold text-black mb-1" style={{fontFamily:'Playfair Display, serif'}}>{pillar.title}</h3>
                <p className="text-[#4B534E] text-sm max-w-xs mx-auto mt-2">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#1F4235] mb-3">What We Stand For</p>
            <h2 className="text-5xl font-black text-[#16231D]" style={{fontFamily:'Playfair Display, serif'}}>Our Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Heart, title: 'Passion for Fashion', description: 'Every piece is carefully selected with love and attention to detail.' },
              { icon: Users, title: 'Collaborative Spirit', description: 'We believe great things happen when diverse minds work together.' },
              { icon: Sparkles, title: 'Quality First', description: 'Premium materials and craftsmanship in every product we offer.' }
            ].map((value) => (
              <div key={value.title} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-[#ECE6D6] rounded-full flex items-center justify-center mb-4">
                  <value.icon className="w-7 h-7 text-[#1F4235]" />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-28 bg-[#16231D] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-white" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-white" />
        </div>
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#C6A15B] mb-6">Our Mission</p>
          <h2 className="text-5xl font-black mb-8" style={{fontFamily:'Playfair Display, serif'}}>Our Mission</h2>
          <p className="text-[#A0A0A0] leading-relaxed font-light max-w-2xl mx-auto text-lg">
            To make premium quality effortless to find and easy to trust.
            We're not just selling products—we're curating a standard that celebrates individuality,
            craftsmanship, and the intersection where quality meets everyday life.
          </p>
        </div>
      </section>
    </div>
  );
}