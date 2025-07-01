"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap, Shield, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-16 h-16 bg-purple-200 rounded-full opacity-20"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/4 w-24 h-24 bg-gradient-to-br from-blue-200 to-purple-200 rounded-lg opacity-10 rotate-45"
          animate={{
            rotate: [45, 90, 45],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-sm border border-gray-200 mb-6">
              <Sparkles className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-gray-700">
                Innovative Tech Solutions
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Transform Your Business with{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Modern Technology
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              We deliver cutting-edge technology solutions that drive innovation, enhance productivity, 
              and accelerate your digital transformation journey.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("#contact")}
              className="group"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("#services")}
            >
              Explore Services
            </Button>
          </motion.div>

          {/* Feature highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center space-x-2 text-gray-600">
              <Zap className="h-5 w-5 text-blue-600" />
              <span className="font-medium">Lightning Fast</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-600">
              <Shield className="h-5 w-5 text-blue-600" />
              <span className="font-medium">Enterprise Security</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-600">
              <Sparkles className="h-5 w-5 text-blue-600" />
              <span className="font-medium">AI-Powered</span>
            </div>
          </motion.div>
        </div>

        {/* Abstract illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 flex justify-center"
        >
          <div className="relative w-96 h-64">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-3xl opacity-20 transform rotate-3"></div>
            <div className="absolute inset-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl opacity-30 transform -rotate-2"></div>
            <div className="absolute inset-4 bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl opacity-40 transform rotate-1"></div>
            <div className="absolute inset-6 bg-white rounded-2xl shadow-xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl mx-auto mb-3 flex items-center justify-center">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <div className="text-sm font-medium text-gray-700">Innovation Hub</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}