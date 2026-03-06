import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FriedOnionProducts from "@/components/FriedOnionProducts";
import OtherProducts from "@/components/OtherProducts";
import AboutSection from "@/components/AboutSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import LatestBlogs from "@/components/LatestBlogs";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FriedOnionProducts />
      <OtherProducts />
      <AboutSection />
      <WhyChooseUs />
      <LatestBlogs />
      <Testimonials />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
