import { useState } from 'react';
import { Check, MessageCircle } from 'lucide-react';

const pricingData = {
  wordpress: {
    title: "WordPress Website Plans",
    plans: [
      {
        name: "Basic WordPress Starter",
        features: [
          "3–5 Pages",
          "Premium Theme Setup",
          "Basic Customization",
          "Mobile Responsive",
          "Contact Form",
          "Basic Security Setup",
          "1 Year Hosting + Domain + SSL",
          "Business Email(s)",
          "Basic SEO",
          "Graphic Designing Included (Logo/Banners)",
          "Support Included",
        ],
        delivery: "3–5 Days",
      },
      {
        name: "Standard WordPress Pro",
        features: [
          "Everything in Basic, PLUS:",
          "6–10 Pages",
          "Custom Design Sections",
          "Speed Optimization",
          "On-Page SEO",
          "Premium Plugins Setup",
          "Blog Setup",
          "1 Year Hosting + Domain + SSL",
          "Multiple Business Emails",
          "Branding Graphics (Banners + Social Media Cover)",
          "Support Included",
        ],
        delivery: "7–10 Days",
        popular: true,
      },
      {
        name: "Premium WordPress Ultimate",
        features: [
          "Everything in Standard, PLUS:",
          "Unlimited Pages",
          "Fully Custom UI/UX",
          "Advanced Integrations",
          "Security Hardening",
          "Performance Optimization (90+ Score)",
          "Full SEO Setup",
          "1 Year Hosting + Domain + SSL + CDN",
          "Unlimited Business Emails",
          "Complete Branding Kit Included",
          "Support Included",
        ],
        delivery: "10–15 Days",
      },
    ],
  },

  ecommerce: {
    title: "E-Commerce Website Plans",
    plans: [
      {
        name: "Basic E-Com Lite",
        features: [
          "Up to 20 Products",
          "WooCommerce / Shopify Setup",
          "Payment Gateway Integration",
          "Checkout + Invoice Email Setup",
          "Basic SEO",
          "1 Year Hosting + Domain + SSL",
          "Business Emails",
          "E-Commerce Branding Graphics Included",
          "Support Included",
        ],
        delivery: "5–7 Days",
      },
      {
        name: "Standard E-Com Growth",
        features: [
          "Everything in Basic, PLUS:",
          "Up to 100 Products",
          "Custom Shop Layout",
          "Coupons & Shipping Rules",
          "Enhanced On-Page SEO",
          "Analytics & Tracking Integration",
          "1 Year Hosting + Domain + SSL",
          "Multiple Business Emails",
          "Branding Graphics Included (Banners/Covers)",
          "Support Included",
        ],
        delivery: "10–14 Days",
        popular: true,
      },
      {
        name: "Premium E-Com Enterprise",
        features: [
          "Everything in Standard, PLUS:",
          "Unlimited Products",
          "Premium Custom UI/UX",
          "Filters, Variations, Advanced Catalog",
          "Multi-Vendor System (Optional)",
          "Inventory Automation Tools",
          "Full SEO + Speed Optimization",
          "1 Year Hosting + Domain + SSL + CDN",
          "Unlimited Business Emails",
          "Full Branding Graphics (Ads + Website + Social Kit)",
          "Support Included",
        ],
        delivery: "15–25 Days",
      },
    ],
  },

  custom: {
    title: "Custom-Coded Website Plans",
    plans: [
      {
        name: "Basic Dev Starter",
        features: [
          "1–3 Pages",
          "Static or Simple Dynamic",
          "API Integration",
          "Responsive UI",
          "Basic SEO",
          "1 Year Hosting + Domain + SSL",
          "Business Emails",
          "Logo + Basic Graphics Included",
          "Support Included",
        ],
        delivery: "5–7 Days",
      },
      {
        name: "Standard Full Stack Web App",
        features: [
          "Everything in Basic, PLUS:",
          "5–10 Pages",
          "Custom Backend + Database",
          "User Authentication + Dashboard",
          "Admin Panel",
          "On-Page SEO",
          "1 Year Hosting + Domain + SSL",
          "Multiple Business Emails",
          "Branding Graphics Included",
          "Support Included",
        ],
        delivery: "10–20 Days",
        popular: true,
      },
      {
        name: "Premium Advanced Application",
        features: [
          "Everything in Standard, PLUS:",
          "Fully Custom Full-Stack Web App",
          "Real-Time Features / AI Features",
          "Payment Integrations",
          "Cloud Deployment",
          "Advanced Security Hardening",
          "Full SEO Setup",
          "1 Year Hosting + Domain + SSL + CDN",
          "Unlimited Business Emails",
          "Complete Branding Package",
          "Support Included",
        ],
        delivery: "30–45 Days",
      },
    ],
  },

  seo: {
    title: "SEO & Digital Marketing Plans",
    plans: [
      {
        name: "Basic SEO Launch",
        features: [
          "SEO Audit",
          "On-Page SEO",
          "Basic Technical Fixes",
          "Basic Backlinks",
          "Graphics Included (Posts/Covers)",
          "Business Email",
          "Monthly Report",
          "Support Included",
        ],
        delivery: "Monthly",
      },
      {
        name: "Standard SEO + Growth Marketing",
        features: [
          "Everything in Basic, PLUS:",
          "Keyword Optimization",
          "On-Page + Off-Page SEO",
          "Social Media Handling",
          "More Backlinks",
          "Graphics Included (Covers + Banners + Ads)",
          "Business Emails",
          "Monthly Reporting",
          "Support Included",
        ],
        delivery: "Monthly",
        popular: true,
      },
      {
        name: "Premium SEO + Full Digital Marketing",
        features: [
          "Everything in Standard, PLUS:",
          "Complete SEO (On-page, Off-page, Technical)",
          "Social Media Management",
          "Paid Ads Setup (Google/Meta)",
          "Competitor Analysis",
          "High-Authority Backlink Strategy",
          "Full Branding Graphics Included",
          "Multiple Business Emails",
          "Weekly Reporting + Strategy Sessions",
          "Support Included",
        ],
        delivery: "Monthly",
      },
    ],
  },
};

const Pricing = () => {
  const [activeCategory, setActiveCategory] = useState('wordpress');

  const categories = [
    { key: 'wordpress', label: 'WordPress' },
    { key: 'ecommerce', label: 'E-Commerce' },
    { key: 'custom', label: 'Custom Code' },
    { key: 'seo', label: 'SEO & Marketing' },
  ];

  const handleWhatsAppClick = (planName, categoryName) => {
    const message = `Hi! I'm interested in the "${planName}" plan under ${categoryName}. I want to select this plan.`;
    const whatsappUrl = `https://wa.me/923245403464?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="c-space my-20" id="pricing">
      <div className="w-full max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="head-text mb-4">Service Pricing</h2>
          <p className="text-white_800 text-lg max-w-2xl mx-auto">
            Choose the perfect plan for your project. All plans include professional service and quality delivery.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveCategory(category.key)}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeCategory === category.key
                  ? 'bg-white text-black'
                  : 'bg-black_200 text-white_800 hover:bg-logo_300'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="mb-8">
          <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-2">
            {pricingData[activeCategory].title}
          </h3>
          {pricingData[activeCategory].subtitle && (
            <p className="text-white_800 text-center text-lg">
              {pricingData[activeCategory].subtitle}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pricingData[activeCategory].plans.map((plan, index) => (
            <div
              key={index}
              className={`relative grid-container transition-all hover:scale-105 ${
                plan.popular ? 'ring-2 ring-white' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white text-black px-4 py-1 rounded-full text-sm font-bold">
                  POPULAR
                </div>
              )}

              <div className="flex-1">
                <h4 className="grid-headtext text-xl sm:text-2xl mb-4">{plan.name}</h4>

                <div className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="mt-1">
                        <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                      </div>
                      <span className="grid-subtext text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-gray-700">
                  <div className="flex items-center justify-between">
                    <span className="text-white_800 text-sm">Delivery:</span>
                    <span className="text-white font-semibold">{plan.delivery}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleWhatsAppClick(plan.name, pricingData[activeCategory].title)}
                className="btn w-full mt-4 bg-white text-black font-semibold hover:bg-gray-200 flex items-center justify-center gap-2"
              >
                <MessageCircle size={18} />
                Select This Plan
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-white_800 text-lg mb-4">
            Need a custom solution? Let's discuss your project requirements.
          </p>
          <a
            href="https://wa.me/923245403464"
            target="_blank"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-all"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
