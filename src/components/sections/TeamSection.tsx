"use client";

import { motion } from "framer-motion";
import { Linkedin, Twitter, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import type { TeamMember } from "@/types";

const teamMembers: TeamMember[] = [
  {
    id: "sarah-chen",
    name: "Sarah Chen",
    title: "Chief Executive Officer",
    bio: "Visionary leader with 15+ years in technology and business strategy. Passionate about driving innovation and digital transformation.",
    initials: "SC",
    socialLinks: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    id: "marcus-rodriguez",
    name: "Marcus Rodriguez",
    title: "Chief Technology Officer",
    bio: "Expert in cloud architecture and AI solutions. Leads our technical vision and drives breakthrough innovations.",
    initials: "MR",
    socialLinks: {
      linkedin: "#",
      github: "#"
    }
  },
  {
    id: "jennifer-kim",
    name: "Jennifer Kim",
    title: "VP of Engineering",
    bio: "Software engineering leader with expertise in scalable systems and team management. Champions engineering excellence.",
    initials: "JK",
    socialLinks: {
      linkedin: "#",
      github: "#"
    }
  },
  {
    id: "david-thompson",
    name: "David Thompson",
    title: "Head of Design",
    bio: "Creative director focused on user experience and design systems. Believes in the power of human-centered design.",
    initials: "DT",
    socialLinks: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    id: "priya-patel",
    name: "Priya Patel",
    title: "VP of Operations",
    bio: "Operations expert who ensures seamless project delivery and client satisfaction. Drives operational excellence.",
    initials: "PP",
    socialLinks: {
      linkedin: "#"
    }
  },
  {
    id: "alex-johnson",
    name: "Alex Johnson",
    title: "Head of Security",
    bio: "Cybersecurity specialist with deep expertise in threat detection and compliance. Protects our clients&apos; digital assets.",
    initials: "AJ",
    socialLinks: {
      linkedin: "#",
      twitter: "#"
    }
  }
];

const avatarColors = [
  "from-blue-500 to-purple-600",
  "from-green-500 to-blue-600",
  "from-purple-500 to-pink-600",
  "from-yellow-500 to-orange-600",
  "from-red-500 to-pink-600",
  "from-indigo-500 to-purple-600"
];

export default function TeamSection() {
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
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Leadership Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our diverse team of experts brings together decades of experience in technology, 
            design, and business strategy to deliver exceptional results.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <Card className="h-full group cursor-pointer hover:shadow-lg">
                <CardContent className="p-6 text-center">
                  {/* Avatar */}
                  <div className="relative mb-4">
                    <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${avatarColors[index]} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200`}>
                      <span className="text-2xl font-bold text-white">
                        {member.initials}
                      </span>
                    </div>
                    {/* Decorative ring */}
                    <div className="absolute inset-0 w-20 h-20 rounded-full border-2 border-gray-200 mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200 animate-pulse"></div>
                  </div>

                  {/* Info */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-3">
                    {member.title}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {member.bio}
                  </p>

                  {/* Social Links */}
                  <div className="flex items-center justify-center space-x-3">
                    {member.socialLinks?.linkedin && (
                      <a
                        href={member.socialLinks.linkedin}
                        className="w-8 h-8 rounded-full bg-gray-100 hover:bg-blue-100 flex items-center justify-center transition-colors duration-200 group/social"
                        aria-label={`${member.name} LinkedIn`}
                      >
                        <Linkedin className="h-4 w-4 text-gray-600 group-hover/social:text-blue-600" />
                      </a>
                    )}
                    {member.socialLinks?.twitter && (
                      <a
                        href={member.socialLinks.twitter}
                        className="w-8 h-8 rounded-full bg-gray-100 hover:bg-blue-100 flex items-center justify-center transition-colors duration-200 group/social"
                        aria-label={`${member.name} Twitter`}
                      >
                        <Twitter className="h-4 w-4 text-gray-600 group-hover/social:text-blue-600" />
                      </a>
                    )}
                    {member.socialLinks?.github && (
                      <a
                        href={member.socialLinks.github}
                        className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-200 group/social"
                        aria-label={`${member.name} GitHub`}
                      >
                        <Github className="h-4 w-4 text-gray-600 group-hover/social:text-gray-800" />
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Join our team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Join Our Growing Team
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We&apos;re always looking for talented individuals who share our passion for 
              innovation and excellence. Explore opportunities to grow your career with us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200">
                View Open Positions
              </button>
              <button className="inline-flex items-center justify-center px-6 py-3 border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-200">
                Learn About Our Culture
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}