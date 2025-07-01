"use client";

import { motion } from "framer-motion";
import { 
  Cloud, 
  Shield, 
  Smartphone, 
  Database, 
  Brain, 
  Zap,
  ArrowRight
} from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import type { Service } from "@/types";

const services: Service[] = [
  {
    id: "cloud-solutions",
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services to modernize your operations with AWS, Azure, and Google Cloud platforms.",
    icon: "cloud"
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    description: "Comprehensive security solutions including threat detection, vulnerability assessment, and compliance management.",
    icon: "shield"
  },
  {
    id: "mobile-development",
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications for iOS and Android with cutting-edge user experiences.",
    icon: "smartphone"
  },
  {
    id: "data-analytics",
    title: "Data Analytics",
    description: "Advanced data processing, machine learning, and business intelligence solutions to drive informed decisions.",
    icon: "database"
  },
  {
    id: "ai-solutions",
    title: "AI Solutions",
    description: "Artificial intelligence and machine learning implementations to automate processes and enhance efficiency.",
    icon: "brain"
  },
  {
    id: "automation",
    title: "Process Automation",
    description: "Streamline workflows and reduce manual tasks with intelligent automation and robotic process automation.",
    icon: "zap"
  }
];

const iconMap = {
  cloud: Cloud,
  shield: Shield,
  smartphone: Smartphone,
  database: Database,
  brain: Brain,
  zap: Zap
};

export default function ServicesSection() {
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
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive technology solutions tailored to meet your business needs 
            and drive digital transformation across all aspects of your organization.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                <Card className="h-full group cursor-pointer hover:shadow-lg">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {service.title}
                    </h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="group/btn p-0 h-auto font-medium text-blue-600 hover:text-blue-700"
                    >
                      Learn More
                      <ArrowRight className="ml-1 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Let&apos;s discuss how our technology solutions can help you achieve your goals 
              and stay ahead of the competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Schedule Consultation
              </Button>
              <Button variant="outline" size="lg">
                View Case Studies
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}