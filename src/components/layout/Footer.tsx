"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Instagram } from "lucide-react";

const navigation = {
  services: [
    { name: "Cloud Solutions", href: "#" },
    { name: "Cybersecurity", href: "#" },
    { name: "Mobile Development", href: "#" },
    { name: "Data Analytics", href: "#" },
    { name: "AI Solutions", href: "#" },
    { name: "Process Automation", href: "#" },
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Our Team", href: "#team" },
    { name: "Careers", href: "#" },
    { name: "News & Blog", href: "#" },
    { name: "Case Studies", href: "#" },
    { name: "Partners", href: "#" },
  ],
  resources: [
    { name: "Documentation", href: "#" },
    { name: "Help Center", href: "#" },
    { name: "API Reference", href: "#" },
    { name: "System Status", href: "#" },
    { name: "Release Notes", href: "#" },
    { name: "Community", href: "#" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
    { name: "GDPR Compliance", href: "#" },
    { name: "Security", href: "#" },
    { name: "Accessibility", href: "#" },
  ],
};

const socialLinks = [
  { name: "LinkedIn", href: "#", icon: Linkedin },
  { name: "Twitter", href: "#", icon: Twitter },
  { name: "GitHub", href: "#", icon: Github },
  { name: "Instagram", href: "#", icon: Instagram },
];

export default function Footer() {
  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600"></div>
                <span className="text-xl font-bold">TechCorp</span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Transforming businesses through innovative technology solutions. 
                We help companies achieve their digital transformation goals with 
                cutting-edge tools and expert guidance.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="h-4 w-4 text-blue-400" />
                  <span className="text-sm">hello@techcorp.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="h-4 w-4 text-blue-400" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="h-4 w-4 text-blue-400" />
                  <span className="text-sm">San Francisco, CA</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Services */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-white font-semibold mb-4">Services</h3>
                <ul className="space-y-2">
                  {navigation.services.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Company */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-white font-semibold mb-4">Company</h3>
                <ul className="space-y-2">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <button
                        onClick={() => scrollToSection(item.href)}
                        className="text-gray-300 hover:text-white transition-colors duration-200 text-sm text-left"
                      >
                        {item.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Resources */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="text-white font-semibold mb-4">Resources</h3>
                <ul className="space-y-2">
                  {navigation.resources.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Legal */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className="text-white font-semibold mb-4">Legal</h3>
                <ul className="space-y-2">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8 mt-12"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="mb-4 lg:mb-0">
              <h3 className="text-white font-semibold mb-2">Stay Updated</h3>
              <p className="text-gray-300 text-sm">
                Get the latest news and updates from TechCorp directly to your inbox.
              </p>
            </div>
            <div className="flex w-full lg:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 lg:w-64 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
              />
              <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-r-lg transition-colors duration-200 font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8 mt-8"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="text-gray-300 text-sm mb-4 lg:mb-0">
              © 2024 TechCorp. All rights reserved.
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="w-8 h-8 rounded-full bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-colors duration-200 group"
                  aria-label={item.name}
                >
                  <item.icon className="h-4 w-4 text-gray-400 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}