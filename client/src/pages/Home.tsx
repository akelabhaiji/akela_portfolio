import { useState } from 'react';
import { Mail, ExternalLink, Github, Linkedin, Twitter, Instagram, Facebook, Menu, X } from 'lucide-react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setFormSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  const portfolioProjects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Modern e-commerce website with advanced filtering and checkout system',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663453925840/9cFUfapdMRdMRUu6KApEoU/portfolio-project-1-MuMCmvgaMDaZRRCohcqRoE.webp',
      link: '#'
    },
    {
      id: 2,
      title: 'Mobile App Design',
      description: 'Sleek mobile application interface with intuitive user experience',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663453925840/9cFUfapdMRdMRUu6KApEoU/portfolio-project-2-MSbM4g7uApn3nccmKY4Dey.webp',
      link: '#'
    },
    {
      id: 3,
      title: 'Dashboard System',
      description: 'Comprehensive analytics dashboard with real-time data visualization',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663453925840/9cFUfapdMRdMRUu6KApEoU/portfolio-project-3-WT56e7gXT7WMMbaMzVS9ex.webp',
      link: '#'
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      feedback: 'Akela delivered an exceptional website that exceeded all our expectations. Highly professional and creative!',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah'
    },
    {
      id: 2,
      name: 'Michael Chen',
      feedback: 'Outstanding design work with attention to detail. The website has significantly improved our online presence.',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael'
    },
    {
      id: 3,
      name: 'Emma Davis',
      feedback: 'Working with Akela was a pleasure. The design is modern, responsive, and user-friendly. Highly recommended!',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-cyan-500/20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold neon-text">AKELA</div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#portfolio" className="hover:text-cyan-400 transition-colors">Portfolio</a>
            <a href="#testimonials" className="hover:text-cyan-400 transition-colors">Testimonials</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
            <a href="#contact" className="cyber-button">Get In Touch</a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-cyan-400"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-background border-t border-cyan-500/20 p-4 space-y-4">
            <a href="#about" className="block hover:text-cyan-400 transition-colors">About</a>
            <a href="#portfolio" className="block hover:text-cyan-400 transition-colors">Portfolio</a>
            <a href="#testimonials" className="block hover:text-cyan-400 transition-colors">Testimonials</a>
            <a href="#contact" className="block hover:text-cyan-400 transition-colors">Contact</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
        style={{
          backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663453925840/9cFUfapdMRdMRUu6KApEoU/hero-cyberpunk-bg-LN7WBC8Hi5b4FZwX8DAj6a.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-background/40 backdrop-blur-sm"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="float-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 neon-text">
              AKELA BHAI
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-cyan-300">
              I am a Web Designer
            </p>
            <p className="text-lg md:text-xl mb-12 text-gray-300 max-w-2xl mx-auto">
              Crafting stunning digital experiences with cutting-edge design and modern web technologies
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#portfolio" className="cyber-button">
                View Portfolio
              </a>
              <a href="#contact" className="cyber-button-magenta cyber-button">
                Contact Me
              </a>
            </div>
          </div>
        </div>
        
        {/* Animated Grid Background */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-72 h-72 bg-magenta-500 rounded-full mix-blend-screen filter blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center neon-text">ABOUT ME</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-magenta-500 rounded-lg blur-lg opacity-50"></div>
                <img 
                  src="https://i.ibb.co/8LQ4sqxD/image.jpg" 
                  alt="Akela Bhai" 
                  className="relative w-80 h-80 rounded-lg object-cover border-2 border-cyan-500/50"
                />
              </div>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I am Akela Bhai, a professional web designer who builds modern and high-converting websites. With a passion for creating beautiful digital experiences, I combine cutting-edge design principles with functional user interfaces.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                My expertise spans across UI/UX design, web development, and digital strategy. I specialize in creating cyberpunk and futuristic designs that stand out in the digital landscape.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="cyber-card">
                  <div className="text-3xl font-bold neon-text">50+</div>
                  <p className="text-sm text-gray-400">Projects Completed</p>
                </div>
                <div className="cyber-card">
                  <div className="text-3xl font-bold neon-text-magenta">5+</div>
                  <p className="text-sm text-gray-400">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gradient-to-b from-background to-background/50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center neon-text">PORTFOLIO</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {portfolioProjects.map((project, index) => (
              <div 
                key={project.id}
                className="cyber-card group cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <a href={project.link} className="cyber-button text-sm">
                      View Project
                    </a>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-2 neon-text">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center neon-text">TESTIMONIALS</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="cyber-card">
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full border-2 border-cyan-500/50"
                  />
                  <div>
                    <h4 className="font-bold text-cyan-400">{testimonial.name}</h4>
                  </div>
                </div>
                <p className="text-gray-300 italic">"{testimonial.feedback}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-background/50 to-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center neon-text">GET IN TOUCH</h2>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="cyber-card">
                <div className="flex items-center gap-4 mb-2">
                  <Mail className="text-cyan-400" size={24} />
                  <h3 className="text-xl font-bold">Email</h3>
                </div>
                <a href="mailto:contact@akelabhai.com" className="text-cyan-300 hover:text-cyan-200 transition-colors">
                  contact@akelabhai.com
                </a>
              </div>
              
              {/* Social Links */}
              <div className="cyber-card">
                <h3 className="text-xl font-bold mb-4 neon-text">Follow Me</h3>
                <div className="grid grid-cols-2 gap-4">
                  <a 
                    href="https://instagram.com/akelajiofficial" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
                  >
                    <Instagram size={20} /> Instagram
                  </a>
                  <a 
                    href="https://facebook.com/akelajiofficial" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
                  >
                    <Facebook size={20} /> Facebook
                  </a>
                  <a 
                    href="https://linkedin.com/in/akelajiofficial" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
                  >
                    <Linkedin size={20} /> LinkedIn
                  </a>
                  <a 
                    href="https://x.com/akelajiofficial" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
                  >
                    <Twitter size={20} /> Twitter
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <form onSubmit={handleFormSubmit} className="cyber-card space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2 text-cyan-300">Name</label>
                <input 
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                  className="w-full bg-background border border-cyan-500/30 rounded px-4 py-2 text-foreground focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-2 text-cyan-300">Email</label>
                <input 
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                  className="w-full bg-background border border-cyan-500/30 rounded px-4 py-2 text-foreground focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-2 text-cyan-300">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleFormChange}
                  required
                  rows={4}
                  className="w-full bg-background border border-cyan-500/30 rounded px-4 py-2 text-foreground focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>
              
              <button type="submit" className="w-full cyber-button">
                Send Message
              </button>
              
              {formSubmitted && (
                <div className="text-center text-cyan-400 text-sm font-semibold">
                  ✓ Message sent successfully!
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-cyan-500/20 py-8 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            Design by <span className="neon-text">akelabhai.com</span>
          </p>
          <p className="text-sm text-gray-500 mt-2">
            © 2024 Akela Bhai. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
