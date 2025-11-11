"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import TagAbout from '@/components/sections/about/TagAbout';
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Award, Calendar, CheckCircle, DollarSign, HelpCircle, MessageCircle, Package, Phone, Settings, Star, TrendingUp, Wrench } from 'lucide-react';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
      contentWidth="large"
      sizing="small"
      background="animatedGrid"
      cardStyle="layered-gradient"
      primaryButtonStyle="flat"
      secondaryButtonStyle="glass"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Home", id: "hero" },
            { name: "Products", id: "products" },
            { name: "About", id: "about" },
            { name: "Services", id: "features" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Parts4Laser"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardScroll
          title="Professional Laser Parts & Repair Services"
          description="Your trusted source for cosmetic laser parts, accessories, and expert repair services. Quality solutions for top laser brands."
          tag="Parts4Laser"
          tagIcon={Wrench}
          buttons={[
            { text: "Shop Parts", href: "products" },
            { text: "Contact Us", href: "contact" }
          ]}
          imageSrc="https://pixabay.com/get/g412212769c4c818023ec7272d7a03363db222e4dae9d555916dfa6c82f84b179bbb6b88b3fbb16c82f65e279d3c558b87f5074b7d3fa07813abba4e538545540_1280.jpg"
          imageAlt="Professional laser equipment and parts"
        />
      </div>

      <div id="about" data-section="about">
        <TagAbout
          tag="About Us"
          description="At Parts4Laser, we specialize in providing high-quality cosmetic laser parts, accessories, and professional repair services. We are your trusted partner for maintaining and extending the life of your laser equipment with genuine parts and expert technical support."
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardSeven
          title="Our Professional Services"
          description="Comprehensive solutions for all your laser equipment needs"
          tag="Services"
          tagIcon={Settings}
          textboxLayout="default"
          animationType="slide-up"
          features={[
            {
              id: 1,
              title: "Expert Repair Services",
              description: "Professional repair services for all major laser brands including Alma, Candela, Cutera, Cynosure, and more. Our certified technicians ensure your equipment runs at peak performance.",
              imageSrc: "https://pixabay.com/get/gbadceac88232ad7638228a5c6b9ec387e237d76b14871f275dec19a328327bef4c6144d27de64e9a82f6c3f50e71f0a5fc37f4702f337023db7f1beecbd152f8_1280.jpg",
              imageAlt: "Laser equipment repair service"
            },
            {
              id: 2,
              title: "Genuine Parts & Accessories",
              description: "Wide selection of genuine hand pieces, consumables, and replacement parts for cosmetic laser machines. We stock parts for top brands to keep your equipment operational.",
              imageSrc: "https://pixabay.com/get/gfce959f08620e8923164c4b3c6a0bc2becffa4557d320f030960764512664b56fec206f6153e64e7c9a73322b6f1cf81735f2c6b321254b83bf718e847537b32_1280.jpg",
              imageAlt: "Laser machine parts and components"
            },
            {
              id: 3,
              title: "Technical Support",
              description: "Dedicated technical support team available to help with installation, troubleshooting, and maintenance. Get expert guidance for all your laser equipment needs.",
              imageSrc: "https://pixabay.com/get/gd6b4b1496b3e0d854a6348a5831c525b97a6221a078909c4b940042d1842f872d7b567f5484f74c96b02f4cbde85c7ced7d66ad75a050f55b384b27c6dfb852c_1280.jpg",
              imageAlt: "Technical support and customer service"
            }
          ]}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardTwo
          title="Featured Laser Parts"
          description="High-quality replacement parts and accessories for cosmetic laser equipment"
          tag="Products"
          tagIcon={Package}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="scale-rotate"
          products={[
            {
              id: "1",
              brand: "Alma",
              name: "Hand Piece Assembly",
              price: "$1,250.00",
              rating: 5,
              reviewCount: "45",
              imageSrc: "https://pixabay.com/get/g243f926463f222e86c99bfa6f399d1b62d081bbd0c5a9a11b036f5c6315c106a153c43724e743bee5c98a7f8810ed91ef5eba4db1e5bfdb3892c75d4cd75285c_1280.jpg",
              imageAlt: "Alma laser handpiece"
            },
            {
              id: "2",
              brand: "Candela",
              name: "Laser Hand Piece",
              price: "$1,450.00",
              rating: 5,
              reviewCount: "38",
              imageSrc: "https://pixabay.com/get/ge44d511d4ab3f9709bac331d472ce5ae9636cac2efe4394d0a32c47328416338dfc7098044787a09d58275e81e3fc5d50acfb87428c4d071ab550015d99a1182_1280.jpg",
              imageAlt: "Candela laser handpiece"
            },
            {
              id: "3",
              brand: "Cutera",
              name: "Replacement Hand Piece",
              price: "$1,350.00",
              rating: 5,
              reviewCount: "52",
              imageSrc: "https://pixabay.com/get/g1a5a9050fdf39496862ca163fd656169407155f228731143c29010283b5f0de090a06771e4551ca9cfd998efe0fae159698337b33c8ba32d7f6f7b205a75dead_1280.jpg",
              imageAlt: "Cutera laser handpiece"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardOne
          title="Service Packages"
          description="Choose the right service level for your laser equipment needs"
          tag="Pricing"
          tagIcon={DollarSign}
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "basic",
              badge: "Basic Service",
              badgeIcon: Wrench,
              price: "Starting at $200",
              subtitle: "Essential repair and maintenance",
              features: [
                "Basic diagnostic evaluation",
                "Standard repair services",
                "30-day warranty on parts",
                "Email support"
              ]
            },
            {
              id: "premium",
              badge: "Premium Service",
              badgeIcon: Star,
              price: "Starting at $350",
              subtitle: "Comprehensive service package",
              features: [
                "Full diagnostic evaluation",
                "Priority repair services",
                "90-day warranty on parts",
                "Phone and email support",
                "Preventive maintenance"
              ]
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardOne
          title="Trusted by Professionals"
          description="Industry-leading service and support statistics"
          tag="Stats"
          tagIcon={TrendingUp}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="blur-reveal"
          metrics={[
            {
              id: "1",
              value: "15+",
              title: "Years",
              description: "Years of experience in laser equipment service",
              icon: Calendar
            },
            {
              id: "2",
              value: "5000+",
              title: "Repairs",
              description: "Successful laser equipment repairs completed",
              icon: CheckCircle
            },
            {
              id: "3",
              value: "98%",
              title: "Success Rate",
              description: "Customer satisfaction with our repair services",
              icon: Award
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Customers Say"
          description="Real feedback from professionals who trust Parts4Laser"
          tag="Reviews"
          tagIcon={MessageCircle}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="opacity"
          testimonials={[
            {
              id: "1",
              name: "Dr. Sarah Johnson",
              role: "Medical Director",
              company: "Aesthetic Wellness Center",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g286fe413cb8b3f8ba41ab039d4947f26b2977fcbc711b79a6caba6018788c2750425f2d2b09b8de652a4df1f88f82baee5ea24df8ce4e49bfd9ec07b1c6ec2d9_1280.jpg",
              imageAlt: "Dr. Sarah Johnson"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Practice Owner",
              company: "Elite Laser Clinic",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g37d7ca51b5eb5fa759888a2bfec20ace6109addea8884f9c63d41b692b23d25eae29d5d9ca1b55f0194f0ff0fec13b9bb77cafb782e2f61b5a53ce7f90c9d811_1280.jpg",
              imageAlt: "Michael Chen"
            },
            {
              id: "3",
              name: "Dr. Emily Rodriguez",
              role: "Clinical Manager",
              company: "Advanced Dermatology",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g4dbb71aa3a0ad776053414a542c892d6bf2a570181a069f3c500950756cc62959a98d904299c162264081330808b88a71f6d305ba226a5b8b77a9c6a3b38f7d6_1280.jpg",
              imageAlt: "Dr. Emily Rodriguez"
            },
            {
              id: "4",
              name: "David Kim",
              role: "Technical Director",
              company: "Modern Med Spa",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g3f141e284c3b7918f08b92285b2158ad6c3f9143f5da16b7c2b2cc9309b3fcb98b40dd781cf0d0818a76385123734abaa0259b9e409c0de4288f84014e2b2f55_1280.jpg",
              imageAlt: "David Kim"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Common questions about our laser parts and repair services"
          tag="Support"
          tagIcon={HelpCircle}
          textboxLayout="default"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "What laser brands do you service?",
              content: "We service all major cosmetic laser brands including Alma, Candela, Cutera, Cynosure, Deka, Lumenis, INMODE, Palomar, and many others. Contact us for specific brand inquiries."
            },
            {
              id: "2",
              title: "Do you offer warranty on replacement parts?",
              content: "Yes, we provide warranty coverage on all genuine replacement parts. Standard warranty is 30-90 days depending on the part and service package selected."
            },
            {
              id: "3",
              title: "How long does repair service typically take?",
              content: "Standard repair turnaround is 5-10 business days. Rush service is available for urgent repairs with 2-3 business day turnaround."
            },
            {
              id: "4",
              title: "Do you provide technical support for installation?",
              content: "Yes, we offer comprehensive technical support including installation guidance, troubleshooting, and ongoing maintenance support via phone and email."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Contact"
          title="Get Expert Support Today"
          description="Need laser parts or repair services? Contact our technical team for professional assistance and quotes."
          tagIcon={Phone}
          inputPlaceholder="Enter your email"
          buttonText="Get Quote"
          termsText="By submitting you agree to receive communications about laser parts and services."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="Parts4Laser"
          copyrightText="© 2025 Parts4Laser. All rights reserved."
          columns={[
            {
              title: "Products",
              items: [
                { label: "Hand Pieces", href: "products" },
                { label: "Laser Parts", href: "products" },
                { label: "Accessories", href: "products" }
              ]
            },
            {
              title: "Services",
              items: [
                { label: "Repair Services", href: "features" },
                { label: "Technical Support", href: "contact" },
                { label: "Track Your Order", href: "https://parts4laser.com/track" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "Contact Us", href: "contact" },
                { label: "Shipping Info", href: "https://parts4laser.com/shipping" },
                { label: "Returns Policy", href: "https://parts4laser.com/returns" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}