export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://convertix-opal.vercel.app/#website",
        "url": "https://convertix-opal.vercel.app/",
        "name": "Convertix",
        "alternateName": [
          "CONVERTIX",
          "Convertix Studio",
          "Convertix Web Design",
          "Convertix Digital Studio",
          "Convertix by Selenix Technology"
        ],
        "description":
          "Convertix is a luxury digital design and web engineering studio crafting bespoke, high-converting websites and booking engines for service businesses.",
        "publisher": {
          "@id": "https://convertix-opal.vercel.app/#organization"
        },
        "inLanguage": "en-US",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://convertix-opal.vercel.app/?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://convertix-opal.vercel.app/#organization",
        "name": "Convertix",
        "legalName": "Selenix Technology",
        "url": "https://convertix-opal.vercel.app/",
        "logo": "https://convertix-opal.vercel.app/icon.png",
        "image": "https://convertix-opal.vercel.app/og-image.jpg",
        "description":
          "Boutique digital design & software engineering studio specializing in bespoke, sub-second Next.js websites, WhatsApp lead capture systems, and booking funnels for service companies.",
        "telephone": "+919078019472",
        "priceRange": "$$",
        "currenciesAccepted": "INR, USD, EUR, GBP",
        "paymentAccepted": "Bank Transfer, Credit Card, UPI, Stripe",
        "areaServed": [
          "India",
          "United States",
          "United Kingdom",
          "United Arab Emirates",
          "Global"
        ],
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "IN"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-9078019472",
          "contactType": "customer service",
          "availableLanguage": ["English", "Hindi"],
          "contactOption": "TollFree"
        },
        "sameAs": [
          "https://github.com/aariya11/CONVERTIX-rrefined-",
          "https://wa.me/919078019472"
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Convertix Web Design & Engineering Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Bespoke Editorial Web Design",
                "description":
                  "Handcrafted luxury editorial UI/UX design, custom layouts, bespoke typography, and high-converting service inquiry architecture."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Service Booking & Retention Engines",
                "description":
                  "Interactive service menus, real-time appointment schedulers, WhatsApp booking flows, and automated CRM lead capture."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Next.js 16 Web Engineering & Speed Optimization",
                "description":
                  "Sub-second page delivery, 100/100 Google Core Web Vitals, zero template bloat, and enterprise SEO schema infrastructure."
              }
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://convertix-opal.vercel.app/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is Convertix and what services does the studio provide?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Convertix is a luxury digital design and web engineering studio operated by Selenix Technology. We specialize in designing and developing bespoke, high-converting websites, interactive booking engines, 1-tap WhatsApp consultation desks, and sub-second performance platforms for service businesses."
            }
          },
          {
            "@type": "Question",
            "name": "Why should service companies choose Convertix over generic templates or WordPress?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Generic WordPress templates and drag-and-drop page builders take 4 to 6 seconds to load and look identical to competitors, losing over 50% of mobile ad traffic. Convertix hand-codes every website from scratch in modern Next.js 16 and Tailwind CSS, delivering instant 0.5-second page loads, luxury editorial design, and 3.4x higher visitor-to-lead conversion rates."
            }
          },
          {
            "@type": "Question",
            "name": "How does Convertix help service businesses capture more client inquiries?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Convertix replaces friction-heavy traditional contact forms with high-intent editorial storytelling, strategic visual hierarchy, interactive pricing calculators, direct 1-tap WhatsApp strategy desks, and real-time CRM webhooks that route inquiries to your phone within 15 seconds."
            }
          },
          {
            "@type": "Question",
            "name": "What technology stack does Convertix use for client websites?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Every Convertix website is engineered using Next.js 16, React 19, Tailwind CSS, TypeScript, Framer Motion, and cloud edge infrastructure to guarantee 100/100 Google Core Web Vitals and zero security vulnerabilities."
            }
          },
          {
            "@type": "Question",
            "name": "Do clients get full ownership of the website source code?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes. Clients retain 100% full ownership of their custom source code, design assets, and database schemas with zero recurring page-builder licensing fees or vendor lock-in."
            }
          },
          {
            "@type": "Question",
            "name": "How can I start a project or contact Convertix?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "You can request a proposal directly on our website, call our Lead Web Architect at +91 9078 019 472, or start a WhatsApp chat at https://wa.me/919078019472 for an instant consultation."
            }
          }
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
