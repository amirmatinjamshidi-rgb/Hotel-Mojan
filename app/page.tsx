import WhyCard from "@/components/ui/WhyCard";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import BenefitCard from "@/components/ui/benefitCard";
import Accordions from "@/components/ui/accordation";
import CommentCard from "@/components/ui/commentCard";
import CancelReserve from "@/components/ui/cancelReserve";
function page() {
  return (
    <div>
      <Navbar />{" "}
      <div className="grid grid-cols-3 m-20">
        <Accordions />
        <WhyCard />
        <BenefitCard />
        <CommentCard />
        <CancelReserve />
      </div>
      <Footer />
    </div>
  );
}

export default page;
