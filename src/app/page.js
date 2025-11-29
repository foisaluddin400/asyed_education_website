import Enroll from "@/components/HomePage/Enroll";
import Hero from "@/components/HomePage/Hero";
import HomePage from "@/components/HomePage/HomePage";
import OurServices from "@/components/HomePage/OurServices";
import PremiumLearning from "@/components/HomePage/PremiumLearning";
import ScheduleFree from "@/components/HomePage/ScheduleFree";
import Test from "@/components/HomePage/Test";
import Testimonials from "@/components/HomePage/Testimonials";
import VideoSection from "@/components/HomePage/VideoSection";


export default function Home() {
  return (
    <div className="">
      <Hero></Hero>
      <OurServices></OurServices>
      <PremiumLearning></PremiumLearning>
      <Testimonials></Testimonials>
      <VideoSection></VideoSection>
      <ScheduleFree></ScheduleFree>
      <Enroll></Enroll>
     
    </div>
  );
}
