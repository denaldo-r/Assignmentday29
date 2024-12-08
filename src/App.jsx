import React from "react";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import ClientsSection from "./components/ClientsSection";
import FeaturesSection from "./components/FeaturesSection";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

const App = () => {
  const navLinks = [
    "Home",
    "Service",
    "Feature",
    "Product",
    "Testimonial",
    "FAQ",
  ];
  const features = [
    {
      icon: "👥",
      title: "Membership Organisations",
      description:
        "Our membership management software provides full automation of membership renewals and payments.",
    },
    {
      icon: "🏢",
      title: "National Associations",
      description:
        "Our membership management software provides full automation of membership renewals and payments.",
    },
    {
      icon: "👨‍👩‍👧‍👦",
      title: "Clubs and Groups",
      description:
        "Our membership management software provides full automation of membership renewals and payments.",
    },
  ];
  const clients = [
    "/path/to/client1.png",
    "/path/to/client2.png",
    "/path/to/client3.png",
    "/path/to/client4.png",
  ];

  const cards = [
    {
      image: "path-to-image-1.jpg",
      title: "Creating Streamlined Safeguarding Processes with OneRen",
      description: "Learn about OneRen's approach to safeguarding processes.",
      linkText: "Readmore",
    },
    {
      image: "path-to-image-2.jpg",
      title: "What are your safeguarding responsibilities?",
      description:
        "Understand how to manage your safeguarding responsibilities.",
      linkText: "Readmore",
    },
    {
      image: "path-to-image-3.jpg",
      title: "Revamping the Membership Model with Triathlon Australia",
      description: "Explore how Triathlon Australia revamped its model.",
      linkText: "Readmore",
    },
  ];

  const footerLinks = [
    {
      title: "Company",
      items: ["About us", "Blog", "Contact us", "Pricing", "Testimonials"],
    },
    {
      title: "Support",
      items: [
        "Help center",
        "Terms of service",
        "Legal",
        "Privacy policy",
        "Status",
      ],
    },
    {
      title: "Stay up to date",
      items: ["Your email address"],
    },
  ];

  return (
    <div>
      <Navigation navLinks={navLinks} loginText="Login" signUpText="Sign up" />
      <HeroSection
        title="Lessons and insights"
        subtitle="Where to grow your business as a photographer: site or social media?"
        buttonText="Register"
        illustration="/path/to/illustration.png"
      />
      <ClientsSection clients={clients} />
      <FeaturesSection features={features} />
      <Blog cards={cards} />
      <Footer links={footerLinks} />
    </div>
  );
};

export default App;
