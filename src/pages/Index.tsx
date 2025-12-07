import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Partners from "@/components/Partners";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://westfreight.com/#business",
        "name": "West Freight Shipping",
        "image": "https://westfreight.com/logo.png",
        "description": "Premier freight shipping and logistics company in Dubai, UAE offering air freight, ocean freight, road transportation, warehousing, and customs clearance services.",
        "url": "https://westfreight.com",
        "telephone": "+971543703221",
        "email": "info@westfreight.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Al Quasis 1",
          "addressLocality": "Dubai",
          "postalCode": "77660",
          "addressCountry": "AE"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "25.28489",
          "longitude": "55.37095"
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "18:00"
        },
        "priceRange": "$$",
        "areaServed": ["Dubai", "UAE", "Middle East", "Global"]
      },
      {
        "@type": "Organization",
        "@id": "https://westfreight.com/#organization",
        "name": "West Freight Shipping",
        "url": "https://westfreight.com",
        "logo": "https://westfreight.com/logo.png",
        "sameAs": [
          "https://www.facebook.com/westfreight",
          "https://www.linkedin.com/company/westfreight",
          "https://twitter.com/westfreight"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+971543703221",
          "contactType": "customer service",
          "availableLanguage": ["English", "Arabic"]
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What freight services does West Freight offer in Dubai?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "West Freight offers comprehensive logistics services including air freight, ocean freight, road transportation, warehousing, customs clearance, and supply chain management throughout Dubai, UAE, and internationally."
            }
          },
          {
            "@type": "Question",
            "name": "Where is West Freight Shipping located?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "West Freight Shipping is located in Al Quasis 1, Dubai, UAE (P.O Box 77660). We serve clients across Dubai, the UAE, and worldwide."
            }
          },
          {
            "@type": "Question",
            "name": "What are West Freight's business hours?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our office hours are Monday to Friday, 9:00 AM to 6:00 PM (GST). However, our logistics operations run 24/7 to ensure timely deliveries."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>West Freight Shipping | Freight & Logistics Company in Dubai, UAE</title>
        <meta name="description" content="Premier freight shipping company in Dubai. Air freight, ocean freight, road transport, warehousing & customs clearance. Get a free quote: +971 543703221" />
        <meta name="keywords" content="freight shipping Dubai, logistics company UAE, air freight Dubai, ocean freight UAE, road freight Middle East, customs clearance Dubai, warehousing services UAE, supply chain Dubai, cargo shipping Al Quasis, international shipping Dubai, freight forwarding UAE, logistics solutions Middle East, cargo transport Dubai, shipping company UAE, freight services Dubai" />
        <link rel="canonical" href="https://westfreight.com" />
        
        {/* Open Graph */}
        <meta property="og:title" content="West Freight Shipping | Dubai's Trusted Logistics Partner" />
        <meta property="og:description" content="Premier freight and logistics services in Dubai. Air, ocean, road freight with 24/7 support. Get your free quote today!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://westfreight.com" />
        <meta property="og:locale" content="en_AE" />
        <meta property="og:site_name" content="West Freight Shipping" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="West Freight Shipping | Freight Company Dubai" />
        <meta name="twitter:description" content="Premier freight shipping & logistics in Dubai, UAE. Air, ocean, road freight. 24/7 support." />
        
        {/* Geo tags */}
        <meta name="geo.region" content="AE-DU" />
        <meta name="geo.placename" content="Dubai" />
        <meta name="geo.position" content="25.28489;55.37095" />
        <meta name="ICBM" content="25.28489, 55.37095" />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="author" content="West Freight Shipping" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        
        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <main className="overflow-x-hidden">
        <Header />
        <Hero />
        <Stats />
        <About />
        <Services />
        <WhyUs />
        <Partners />
        <Testimonials />
        <FAQ />
        <Blog />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Index;
