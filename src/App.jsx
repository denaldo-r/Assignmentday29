import React from "react";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import ClientsSection from "./components/ClientsSection";
import FeaturesSection from "./components/FeaturesSection";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

import Illustration from "./assets/illustration.png";

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
    "Assignmentday29/src/assets/client1.png",
    "Assignmentday29/src/assets/client2.png",
    "Assignmentday29/src/assets/client3.png",
    "Assignmentday29/src/assets/client4.png",
  ];

  const cards = [
    {
      image: "Assignmentday29/src/assets/blog1.png",
      title: "Creating Streamlined Safeguarding Processes with OneRen",
      description: "Learn about OneRen's approach to safeguarding processes.",
      linkText: "Readmore",
    },
    {
      image: "Assignmentday29/src/assets/blog2.png",
      title: "What are your safeguarding responsibilities?",
      description:
        "Understand how to manage your safeguarding responsibilities.",
      linkText: "Readmore",
    },
    {
      image: "Assignmentday29/src/assets/blog3.png",
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
      items: [""],
    },
  ];

  return (
    <div>
      <Navigation navLinks={navLinks} loginText="Login" signUpText="Sign up" />
      <HeroSection
        title="Lessons and insights"
        subtitle="Where to grow your business as a photographer: site or social media?"
        buttonText="Register"
        illustration={Illustration}
      />
      <ClientsSection clients={clients} />
      <FeaturesSection features={features} />
      <Blog cards={cards} />
      <Footer links={footerLinks} />
    </div>
  );
};

export default App;
