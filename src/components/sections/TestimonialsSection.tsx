"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import type { Testimonial } from "@/types";

const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    content: "TechCorp transformed our entire infrastructure within 6 months. Their cloud migration expertise and attention to detail exceeded our expectations. Our system performance improved by 300% and costs reduced by 40%.",
    author: "Michael Chen",
    position: "CTO",
    company: "InnovateTech Solutions",
    rating: 5
  },
  {
    id: "testimonial-2",
    content: "The cybersecurity solution implemented by TechCorp gave us peace of mind. Their proactive monitoring and rapid response capabilities have protected us from multiple threats. Highly recommended for enterprise security.",
    author: "Sarah Martinez",
    position: "CISO",
    company: "SecureBank Corp",
    rating: 5
  },
  {
    id: "testimonial-3",
    content: "Working with TechCorp on our mobile app was a game-changer. They delivered a beautiful, performant application that our users love. The project was completed on time and within budget.",
    author: "David Kim",
    position: "Product Manager",
    company: "MobileFirst Inc",
    rating: 5
  },
  {
    id: "testimonial-4",
    content: "TechCorp&apos;s AI solutions revolutionized our data processing capabilities. We can now analyze customer behavior patterns in real-time, leading to a 25% increase in conversion rates.",
    author: "Emily Rodriguez",
    position: "Head of Analytics",
    company: "DataDriven LLC",
    rating: 5
  },
  {
    id: "testimonial-5",
    content: "The automation tools provided by TechCorp eliminated 60% of our manual processes. Our team can now focus on strategic initiatives while the system handles routine tasks efficiently.",
    author: "James Wilson",
    position: "Operations Director",
    company: "Efficient Systems",
    rating: 5
  }
];

const companyLogos = [
  { name: "InnovateTech", color: "from-blue-500 to-purple-600" },
  { name: "SecureBank", color: "from-green-500 to-blue-600" },
  { name: "MobileFirst", color: "from-purple-500 to-pink-600" },
  { name: "DataDriven", color: "from-yellow-500 to-orange-600" },
  { name: "Efficient", color: "from-red-500 to-pink-600" },
  { name: "GlobalTech", color: "from-indigo-500 to-purple-600" },
  { name: "NextGen", color: "from-teal-500 to-blue-600" },
  { name: "SmartSys", color: "from-orange-500 to-red-600" }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don&apos;t just take our word for it - hear from the companies we&apos;ve helped 
            transform their operations and achieve their goals.
          </p>
        </motion.div>

        {/* Main Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8 lg:p-12">
              <div className="text-center">
                <Quote className="h-12 w-12 text-blue-600 mx-auto mb-6" />
                
                <motion.div
                  key={currentTestimonial.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <blockquote className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8">
                    &quot;{currentTestimonial.content}&quot;
                  </blockquote>
                  
                  <div className="flex items-center justify-center mb-4">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <div className="text-center">
                    <p className="font-semibold text-gray-900 text-lg">
                      {currentTestimonial.author}
                    </p>
                    <p className="text-blue-600 font-medium">
                      {currentTestimonial.position}
                    </p>
                    <p className="text-gray-600">
                      {currentTestimonial.company}
                    </p>
                  </div>
                </motion.div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full p-0"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                    index === currentIndex ? "bg-blue-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
            
            <Button
              variant="outline"
              size="sm"
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full p-0"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </motion.div>

        {/* Company Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-8">
            Trusted by Leading Companies
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {companyLogos.map((logo, index) => (
              <motion.div
                key={logo.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-center"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${logo.color} flex items-center justify-center shadow-sm hover:shadow-md transition-shadow duration-200`}>
                  <span className="text-white font-bold text-xs text-center leading-tight">
                    {logo.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">4.9/5</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}