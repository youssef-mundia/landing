"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { Input, Textarea } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { validateEmail } from "@/lib/utils";
import type { ContactFormData } from "@/types";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    details: "hello@techcorp.com",
    description: "Send us an email anytime"
  },
  {
    icon: Phone,
    title: "Call Us",
    details: "+1 (555) 123-4567",
    description: "Mon-Fri from 8am to 6pm"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: "123 Tech Street, Innovation District",
    description: "San Francisco, CA 94105"
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: "Monday - Friday: 8:00 AM - 6:00 PM",
    description: "Weekend support available"
  }
];

export default function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", company: "", message: "" });
    }, 3000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your business? Let&apos;s discuss how we can help you 
            achieve your goals with our innovative technology solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <h3 className="text-2xl font-bold text-gray-900">Send us a message</h3>
                <p className="text-gray-600">
                  Fill out the form below and we&apos;ll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      Message Sent Successfully!
                    </h4>
                    <p className="text-gray-600">
                      Thank you for contacting us. We&apos;ll get back to you soon.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Input
                        label="Full Name *"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        error={errors.name}
                        placeholder="John Doe"
                      />
                      <Input
                        label="Email Address *"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        error={errors.email}
                        placeholder="john@company.com"
                      />
                    </div>
                    
                    <Input
                      label="Company (Optional)"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Your Company Name"
                    />
                    
                    <Textarea
                      label="Message *"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      error={errors.message}
                      placeholder="Tell us about your project and how we can help..."
                      rows={5}
                    />
                    
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {contactInfo.map((item) => (
                <motion.div key={item.title} variants={itemVariants}>
                  <Card className="hover:shadow-md transition-shadow duration-200">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                          <item.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">
                            {item.title}
                          </h4>
                          <p className="text-gray-900 font-medium mb-1">
                            {item.details}
                          </p>
                          <p className="text-gray-600 text-sm">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {/* Map placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="p-0">
                  <div className="h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-2" />
                      <p className="text-gray-700 font-medium">Our Location</p>
                      <p className="text-gray-500 text-sm">Interactive map coming soon</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have transformed their businesses with our solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                Schedule Free Consultation
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
                Download Our Brochure
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}