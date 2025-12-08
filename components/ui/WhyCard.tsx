import React from "react";
import { MapPin } from "lucide-react";

function WhyCard() {
  return (
    <div>
      <div className="shadow hover:shadow-gray-500 transition-all ease-out duration-300 border-gray-500 rounded-xl w-[648px] h-28 flex items-center gap-4 p-4">
        <div className="bg-secondary rounded-2xl w-12 h-12 flex items-center justify-center gap-3">
          <MapPin className="w-12 h-12 " />
        </div>

        <div>
          <h1 className="font-bold">چشم‌انداز مستقیم به دریا</h1>
          <p className="text-shadow-textSecondary">
            فقط چند قدم تا ساحل! هر صبح با صدای موج‌ها و منظره طلوع آفتاب بیدار
            شوید.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhyCard;
