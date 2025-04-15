"use client";

import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle2,
  Zap,
  Star,
  Lock,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="fixed w-full bg-background/80 backdrop-blur-md z-50 border-b">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Sparkles className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">EasyForms</span>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost">Documentation</Button>
            <Button variant="ghost">Pricing</Button>
            <Link href="/sign-in">
              <Button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:opacity-90 transition-opacity">
                Get Started
              </Button>
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="py-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-background to-secondary/20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto text-center"
        >
          <div className="inline-block mb-4 px-4 py-1.5 bg-primary/10 rounded-full text-sm font-medium">
            ✨ Launching Soon: AI Form Generation
          </div>
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-8 bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 text-transparent bg-clip-text py-3">
            Forms That Convert,
            <br />
            By Design
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Create stunning forms that capture leads, engage users, and drive
            results. No coding required. Powered by modern design and AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="group bg-gradient-to-r from-blue-600 to-cyan-500 hover:opacity-90 transition-opacity"
            >
              Start Building Free
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition" />
            </Button>
            <Button size="lg" variant="outline" className="border-2">
              View Templates
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              Everything you need to create
              <span className="font-bold tracking-tight bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 text-transparent bg-clip-text py-3">
                {" "}
                amazing forms
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powerful features that make form building a breeze
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="h-6 w-6 text-blue-600" />,
                title: "Lightning Fast",
                description:
                  "Build and deploy forms in minutes with our intuitive drag-and-drop builder.",
              },
              {
                icon: <Star className="h-6 w-6 text-cyan-500" />,
                title: "AI-Powered",
                description:
                  "Let AI generate the perfect form based on your requirements.",
              },
              {
                icon: <Lock className="h-6 w-6 text-purple-600" />,
                title: "Enterprise Security",
                description:
                  "Bank-grade security with end-to-end encryption and GDPR compliance.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-xl border bg-card/50 hover:bg-card/80 transition-colors"
              >
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 font-bold tracking-tight bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 text-transparent bg-clip-text">
              Development Roadmap
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our journey to building the best form builder platform
            </p>
          </motion.div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                status: "Released",
                title: "Core Features",
                items: [
                  "Drag & Drop Builder",
                  "Custom Themes",
                  "Form Analytics",
                ],
              },
              {
                status: "In Progress",
                title: "AI Integration",
                items: [
                  "AI Form Generation",
                  "Smart Validation",
                  "Response Analysis",
                ],
              },
              {
                status: "Coming Soon",
                title: "Advanced Features",
                items: [
                  "Multi-step Forms",
                  "Payment Integration",
                  "Custom Workflows",
                ],
              },
              {
                status: "Planned",
                title: "Enterprise Tools",
                items: [
                  "Team Collaboration",
                  "Advanced Security",
                  "Custom APIs",
                ],
              },
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative p-6 rounded-xl border bg-card/50"
              >
                <div
                  className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 
                  ${
                    phase.status === "Released"
                      ? "bg-green-500/10 text-green-500"
                      : phase.status === "In Progress"
                      ? "bg-blue-500/10 text-blue-500"
                      : phase.status === "Coming Soon"
                      ? "bg-yellow-500/10 text-yellow-500"
                      : "bg-purple-500/10 text-purple-500"
                  }`}
                >
                  {phase.status}
                </div>
                <h3 className="text-xl font-semibold mb-4">{phase.title}</h3>
                <ul className="space-y-2">
                  {phase.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-center text-muted-foreground"
                    >
                      <CheckCircle2 className="h-4 w-4 mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-cyan-500">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to revolutionize your forms?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses creating better form experiences.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="bg-white text-blue-600 hover:bg-white/90"
          >
            Get Started Now
          </Button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Templates
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Guides
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Terms
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Security
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t text-center text-muted-foreground">
            <p>&copy; 2024 FormCraft. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
