"use client";

import { motion } from "framer-motion";
import { Target, Eye, Award, Users, Globe } from "lucide-react";
import type { CompanyStats } from "@/types";

const stats: CompanyStats[] = [
  {
    label: "Projects Completed",
    value: "500+",
    description: "Successful implementations"
  },
  {
    label: "Happy Clients",
    value: "98%",
    description: "Client satisfaction rate"
  },
  {
    label: "Team Members",
    value: "150+",
    description: "Expert professionals"
  },
  {
    label: "Countries Served",
    value: "25+",
    description: "Global presence"
  }
];

const values = [
  {
    icon: Target,
    title: "Innovation First",
    description: "We stay ahead of technological trends to deliver cutting-edge solutions that give our clients a competitive advantage."
  },
  {
    icon: Users,
    title: "Client-Centric",
    description: "Every solution is tailored to meet specific client needs, ensuring maximum value and successful outcomes."
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We maintain the highest standards in everything we do, from code quality to customer service."
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "Our solutions help businesses worldwide transform and succeed in the digital economy."
  }
];

export default function AboutSection() {
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
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About TechCorp
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a leading technology company dedicated to transforming businesses 
            through innovative digital solutions and strategic partnerships.
          </p>
        </motion.div>

        {/* Mission and Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3 mb-4">
              <Target className="h-8 w-8 text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed">
              To empower businesses with innovative technology solutions that drive growth, 
              efficiency, and competitive advantage. We believe in creating lasting partnerships 
              that help our clients succeed in an ever-evolving digital landscape.
            </p>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100">
              <p className="text-gray-700 font-medium">
                &quot;Technology is best when it brings people together and solves real business challenges.&quot;
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3 mb-4">
              <Eye className="h-8 w-8 text-purple-600" />
              <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed">
              To be the global leader in digital transformation, recognized for our expertise, 
              innovation, and commitment to client success. We envision a future where 
              technology seamlessly enhances every aspect of business operations.
            </p>
            
            {/* Abstract illustration */}
            <div className="relative">
              <div className="w-full h-48 bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl flex items-center justify-center overflow-hidden">
                <div className="grid grid-cols-3 gap-4 opacity-30">
                  {[...Array(9)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg"
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 mb-4">
                <div className="text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-blue-100 text-sm">
                  {stat.description}
                </div>
              </div>
              <h4 className="font-semibold text-gray-900">{stat.label}</h4>
            </motion.div>
          ))}
        </motion.div>

        {/* Values */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Core Values</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and define who we are as a company.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={itemVariants}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}