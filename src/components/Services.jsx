import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layers, Smartphone, Palette, Cpu, Zap, ArrowRight } from 'lucide-react';



const Services = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const offsetPosition = elementRect - bodyRect - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const servicesList = [
   {
  icon: Code,
  title: 'Frontend Development',
  description:
    'Building responsive and interactive user interfaces using HTML, CSS, JavaScript, React.js, AngularJS, and Bootstrap.',
},

{
  icon: Layers,
  title: 'Backend Development',
  description:
    'Developing secure, scalable server-side applications and business logic using PHP, CodeIgniter, Node.js, and Express.js.',
},

{
  icon: Smartphone,
  title: 'Database Design & Management',
  description:
    'Designing efficient database structures, managing application data, and implementing CRUD operations using MySQL and MongoDB.',
},

{
  icon: Palette,
  title: 'REST API Development & Integration',
  description:
    'Developing and integrating RESTful APIs with proper request handling, authentication, validation, and frontend-backend communication.',
},

{
  icon: Cpu,
  title: 'Responsive Web Development',
  description:
    'Creating mobile-friendly, cross-device web experiences with consistent layouts, usability, and performance.',
},

{
  icon: Zap,
  title: 'Full Stack Web Application Development',
  description:
    'Building end-to-end web applications by connecting modern frontend interfaces, backend services, APIs, and databases.',
},
  ];

  return (
    <section id="services" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-600 dark:text-blue-400 font-semibold tracking-wider text-sm uppercase px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20"
          >
            What I Offer
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-slate-50 mt-4 tracking-tight"
          >
            Specialized <span className="text-blue-600 dark:text-blue-400">Services</span>
          </motion.h2>
          <p className="text-slate-600 dark:text-slate-300 mt-3 text-base font-normal">
            Delivering high-quality web solutions tailored to meet modern enterprise and user demands.
          </p>
          <div className="w-20 h-1.5 bg-blue-500 mx-auto mt-4 rounded-full shadow-[0_0_12px_#3b82f6]" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => {
            const IconComp = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -8 }}
                className="glass-card rounded-2xl p-8 border border-slate-200 dark:border-blue-900/40 hover:border-blue-500/60 shadow-xl flex flex-col justify-between group transition-all duration-300"
              >
                <div>
                  {/* Service Icon Badge */}
                  <div className="w-14 h-14 rounded-2xl bg-blue-500/10 dark:bg-blue-600/15 border border-blue-500/20 dark:border-blue-500/30 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(37,99,235,0.6)] transition-all duration-300 mb-6">
                    <IconComp className="w-7 h-7" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>
                </div>

                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToContact();
                  }}
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold text-sm group-hover:translate-x-1.5 transition-transform cursor-pointer"
                >
                  <span>Inquire for Project</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </a>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;