import React from "react";
import Button from "@/components/ui/button";
import { Star } from "lucide-react";
type classumbers = {
  id: number;
  number: number;
};
const classumbers = [
  { id: 1, number: 1 },
  { id: 2, number: 2 },
  { id: 3, number: 3 },
  { id: 4, number: 4 },
  { id: 5, number: 5 },
];
function StarClass() {
  return (
    <div className="flex flex-wrap gap-2">
      {classumbers.map((cat) => (
        <Button
          key={cat.id}
          color="gray"
          border="none"
          className="
            flex items-center gap-2
            px-3 py-2
            text-sm
            min-w-16
          "
        >
          <Star size={14} className="fill-secondary stroke-secondary" />
          {cat.number.toLocaleString("fa-IR")}
        </Button>
      ))}
    </div>
  );
}

export default StarClass;
