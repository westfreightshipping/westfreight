import { motion, AnimatePresence } from "framer-motion";
import { Calendar, ArrowRight, Clock, X, User } from "lucide-react";
import { useState } from "react";

// Featured blog posts with large card design
const featuredPosts = [
  {
    id: 1,
    title: "Special service for our customers",
    description: "Customized freight solutions tailored to meet your unique business requirements with dedicated support",
    bgImage: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?auto=format&fit=crop&q=80&w=1200", // Ship
    hasOverlay: true
  },
  {
    id: 2,
    title: "Logistic for different ways in USA",
    description: "Comprehensive freight solutions across America with reliable delivery networks and real-time tracking",
    bgImage: "https://images.unsplash.com/photo-1605745341112-85968b19335b?auto=format&fit=crop&q=80&w=1200", // Ship at sunset
    hasOverlay: true
  },
  {
    id: 3,
    title: "Offers for our the best customers around the world",
    description: "Exclusive rates and premium services for our valued international shipping partners across 15+ countries",
    bgImage: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?auto=format&fit=crop&q=80&w=1200", // Airplane
    hasOverlay: true
  }
];

// Regular blog posts
const blogPosts = [
  {
    id: 4,
    title: "5 Tips for Efficient International Shipping in 2025",
    excerpt: "Discover how to optimize your global supply chain and reduce shipping costs with these expert strategies for international freight.",
    fullContent: "In 2025, efficiency is paramount. To optimize your global supply chain, focus on digitizing documentation, consolidating shipments to maximize container space, and leveraging AI for route planning. Building strong relationships with local carriers can also navigate regional disruptions more effectively. Modern tracking systems provide real-time visibility, while automated customs clearance reduces delays. Consider multi-modal transportation options to balance cost and speed, and always maintain buffer inventory to handle unexpected disruptions.",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=800",
    date: "Dec 5, 2024",
    readTime: "5 min read",
    category: "Shipping Tips",
    author: "Sarah Jenkins"
  },
  {
    id: 5,
    title: "Understanding UAE Customs Regulations",
    excerpt: "A comprehensive guide to navigating customs clearance in the UAE, including documentation requirements and common pitfalls.",
    fullContent: "Navigating UAE customs requires precision. Key documents include the Commercial Invoice, Certificate of Origin, and Packing List. Be aware of restricted items and ensure HS codes are accurate to avoid costly delays. Recent updates to the digital clearing system have streamlined the process, but compliance remains strict. The UAE has specific regulations for different free zones, each with unique requirements. Understanding the difference between standard customs clearance and free zone procedures is crucial for efficient operations.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800",
    date: "Dec 1, 2024",
    readTime: "8 min read",
    category: "Customs",
    author: "Ahmed Al-Fayed"
  },
  {
    id: 6,
    title: "The Rise of Sustainable Logistics",
    excerpt: "How green initiatives are transforming the freight industry in Dubai and across the region, and what it means for your business.",
    fullContent: "Sustainability is no longer optional. From electric last-mile delivery vans in Dubai to solar-powered warehousing, the region is shifting green. Businesses adopting these practices not only reduce their carbon footprint but also gain a competitive edge with eco-conscious consumers and partners. The UAE's commitment to carbon neutrality by 2050 is driving innovation in logistics. Electric trucks, biofuel-powered ships, and carbon offset programs are becoming standard practices.",
    image: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&q=80&w=800",
    date: "Nov 28, 2024",
    readTime: "6 min read",
    category: "Industry News",
    author: "Maria Gonzalez"
  },
  {
    id: 7,
    title: "Air vs Ocean Freight: Choosing the Right Option",
    excerpt: "Compare costs, transit times, and environmental impact to make the best decision for your cargo transportation needs.",
    fullContent: "The choice between air and ocean depends on your priority: speed or cost. Air freight is best for high-value, time-sensitive goods but comes at a premium. Ocean freight offers significant cost savings for bulk items but requires longer lead times. We analyze the break-even points for both modes in the current market. Consider factors like insurance costs, packaging requirements, and the nature of your goods. Perishables and pharmaceuticals often require air freight, while manufactured goods and raw materials are suitable for ocean transport.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
    date: "Nov 20, 2024",
    readTime: "7 min read",
    category: "Guides",
    author: "David Chen"
  },
];

const Blog = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  return (
    <section id="blog" className="py-16 md:py-24 bg-background relative">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-accent font-semibold uppercase tracking-wider text-sm">
            News & Insights
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-2 mb-4 text-balance">
            How we can help & Serve
          </h2>
        </motion.div>

        {/* Featured Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {featuredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src={post.bgImage} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Dark overlay for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-8 md:p-8">
                <h3 className="text-white text-2xl md:text-3xl font-bold mb-3 leading-tight">
                  {post.title}
                </h3>
                <p className="text-white/90 text-sm md:text-base mb-6 leading-relaxed">
                  {post.description}
                </p>

                {/* Discover Button */}
                <button className="group/btn flex items-center gap-2 text-white font-medium text-base hover:gap-4 transition-all duration-300">
                  <span>Discover</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Blog Posts Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Latest from Our Blog
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Stay updated with industry trends, shipping tips, and company news.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {blogPosts.map((post, index) => (
              <motion.article
                layoutId={`card-${post.id}`}
                key={post.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedId(post.id)}
                className="bg-card rounded-xl overflow-hidden shadow-card border border-border hover:border-accent/30 transition-colors cursor-pointer group flex flex-col h-full"
              >
                {/* Image Container */}
                <div className="h-48 relative overflow-hidden">
                  <motion.img
                    layoutId={`image-${post.id}`}
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <motion.span 
                      layoutId={`category-${post.id}`}
                      className="bg-accent/90 backdrop-blur-sm text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full shadow-sm"
                    >
                      {post.category}
                    </motion.span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>

                  <motion.h3 
                    layoutId={`title-${post.id}`}
                    className="font-bold text-foreground mb-2 line-clamp-2 group-hover:text-accent transition-colors"
                  >
                    {post.title}
                  </motion.h3>
                  
                  <p className="text-sm text-muted-foreground line-clamp-3 mb-4 flex-grow">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center text-accent font-medium text-sm mt-auto group-hover:gap-2 transition-all">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Expanded Card Overlay */}
      <AnimatePresence>
        {selectedId && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            />
            
            {/* Expanded Card */}
            {blogPosts.map((post) => (
              post.id === selectedId && (
                <motion.div
                  layoutId={`card-${post.id}`}
                  key={post.id}
                  className="w-full max-w-2xl bg-card rounded-2xl shadow-2xl overflow-hidden relative z-10 max-h-[90vh] flex flex-col border border-border"
                >
                  <button
                    onClick={(e) => { e.stopPropagation(); setSelectedId(null); }}
                    className="absolute top-4 right-4 z-20 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <div className="h-64 relative shrink-0">
                    <motion.img
                      layoutId={`image-${post.id}`}
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <motion.span 
                        layoutId={`category-${post.id}`}
                        className="bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full shadow-lg"
                      >
                        {post.category}
                      </motion.span>
                    </div>
                  </div>

                  <div className="p-6 md:p-8 overflow-y-auto">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <User className="w-4 h-4" />
                        {post.author}
                      </span>
                    </div>

                    <motion.h3 
                      layoutId={`title-${post.id}`}
                      className="text-2xl md:text-3xl font-bold text-foreground mb-4"
                    >
                      {post.title}
                    </motion.h3>

                    <div className="prose prose-sm md:prose-base dark:prose-invert text-muted-foreground">
                      <p className="mb-4 font-medium text-foreground">{post.excerpt}</p>
                      <p>{post.fullContent}</p>
                    </div>
                    
                    <button 
                      onClick={() => setSelectedId(null)}
                      className="mt-8 px-6 py-2 bg-accent text-accent-foreground rounded-md font-medium hover:bg-accent/90 transition-colors w-fit"
                    >
                      Close Article
                    </button>
                  </div>
                </motion.div>
              )
            ))}
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Blog;
