import Enroll from "@/components/HomePage/Enroll";
import Hero from "@/components/HomePage/Hero";
import HomePage from "@/components/HomePage/HomePage";
import HowItWorks from "@/components/HomePage/HowItWorks";
import OurServices from "@/components/HomePage/OurServices";
import PremiumLearning from "@/components/HomePage/PremiumLearning";
import PricingSection from "@/components/HomePage/PricingSection";
import ProgressReporting from "@/components/HomePage/ProgressReporting";
import ScheduleFree from "@/components/HomePage/ScheduleFree";
import Test from "@/components/HomePage/Test";
import Testimonials from "@/components/HomePage/Testimonials";
import VideoSection from "@/components/HomePage/VideoSection";
import WhyChooseUs from "@/components/HomePage/WhyChooseUs";


export default function Home() {
  return (
    <div className="">
      <Hero></Hero>
      <HowItWorks/>
      <ProgressReporting/>
      <PricingSection/>
      <WhyChooseUs/>
      {/* <OurServices></OurServices>
      <PremiumLearning></PremiumLearning> */}
      <Testimonials></Testimonials>
      {/* <VideoSection></VideoSection>
      <ScheduleFree></ScheduleFree> */}
      {/* <Enroll></Enroll> */}
     
    </div>
  );
}
