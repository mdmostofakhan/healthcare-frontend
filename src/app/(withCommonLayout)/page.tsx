import HereSection from "@/components/ui/HomePage/HereSection/HereSection";
import Specialties from "@/components/ui/HomePage/Specialties/Specialties";
import TopRatedDoctors from "@/components/ui/HomePage/TopRatedDoctors/TopRatedDoctors";
import WhyUs from "@/components/ui/HomePage/whyUs/whyUs";
import WorkSection from "@/components/ui/HomePage/whyUs/WorkSection/WorkSection";

 
 const Homepage = () => {
  return (
    <>
     <HereSection /> 
     <Specialties />
     <TopRatedDoctors />
     <WhyUs />
     <WorkSection></WorkSection>
    </>
  );
 };
 
 export default Homepage;