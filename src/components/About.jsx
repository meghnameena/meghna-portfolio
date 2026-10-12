import React from 'react';
import { motion } from 'framer-motion';
import { Download, Award, Briefcase, GraduationCap, Code2, CheckCircle2 } from 'lucide-react';
import ai from '../assets/ai.png';

const About = () => {
  const highlights = [
  "Responsive frontend development",
  "PHP & CodeIgniter web applications",
  "RESTful API development & integration",
  "CRUD operations & database management",
  "React, JavaScript & AngularJS",
  "Authentication, validation & backend logic",
];

  return (
    <section id="about" className="py-20 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-500 font-semibold tracking-wider text-sm uppercase px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20"
          >
            About Me
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white mt-4 tracking-tight"
          >
            Crafting Digital <span className="text-blue-500">Experiences</span> With Passion
          </motion.h2>
          <div className="w-20 h-1.5 bg-blue-500 mx-auto mt-4 rounded-full shadow-[0_0_12px_#3b82f6]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Image Card with Glass Accent */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Glow Halo */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl opacity-30 blur-xl" />

              <div className="relative rounded-3xl overflow-hidden glass-card p-3 border border-blue-500/30">
                <img
                  src={ai}
                  alt="Meghna meena"
                  className="w-full h-auto rounded-2xl object-cover"
                  onError={(e) => { e.target.src = '/assets/profile.png'; }}
                />

                {/* Floating Experience Badge Overlay */}
                <div className="absolute bottom-6 right-6 p-4 rounded-2xl border border-slate-200 dark:border-blue-400/40 shadow-2xl flex items-center space-x-3 bg-white/95 dark:bg-slate-900/90 backdrop-blur-md">
                  <div className="p-3 bg-blue-600 rounded-xl text-white shadow-[0_0_15px_rgba(37,99,235,0.6)]">
                    <Award className="w-6 h-6" />
                  </div>
                  {/* <div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white">1+ Years</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 font-medium">Professional Experience</p>
                  </div> */}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Biography Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col space-y-6"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              Full Stack Web Developer Based in India
            </h3>

            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              Hello! I'm <strong className="text-blue-500">Meghna Meena</strong>,a Full Stack
                  Web Developer experienced in building and maintaining
                  responsive web applications using PHP, CodeIgniter,
                  JavaScript, AngularJS, React, and MySQL. I work on
                  frontend interfaces, backend logic, RESTful APIs,
                  authentication, validation, and database integration.
            </p>

            <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            I'm passionate about building clean, efficient, and
          scalable web applications while continuously learning
          modern technologies and improving my development skills...
            </p>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-center space-x-2.5">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{item}</span>
                </div>
              ))}
            </div>

            {/* Quick Education & Experience Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="glass-card p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex items-start space-x-3">
                <div className="p-2.5 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-lg shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Bachelor Of Computer Science</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400">University Of Kota, Kota (UOK) · 2021-2023</p>
                </div>

                   <div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Master's Of Computer Science</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Rajasthan Technical University, Kota (RTU) · 2023-2025</p>
                </div>
              </div>

              <div className="glass-card p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex items-start space-x-3">
                <div className="p-2.5 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-lg shrink-0">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Full Stack Developer</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Saglus Info pvt.ltd• 2025 - Present</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <a
                href="/Meghna_resume.pdf"
                download="Meghna_resume.pdf"
                className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all duration-300 hover:scale-105"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Curriculum Vitae
              </a>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
