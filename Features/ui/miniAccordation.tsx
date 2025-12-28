"use client";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Circle } from "lucide-react";

type AccordionItem = {
  question: string;
  answer: string;
};

interface AccordionListProps {
  items: AccordionItem[];
}

export default function MiniAccordionList({ items }: AccordionListProps) {
  return (
    <div className="w-full space-y-4">
      {items.map((item, i) => (
        <div
          key={i}
          className="rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-textOnText bg-textOnText backdrop-blur-sm overflow-hidden"
        >
          <Accordion
            elevation={0}
            disableGutters
            className="bg-transparent! shadow-none! border-none!"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="text-shadow-textOnText" />}
              aria-controls={`panel-${i}`}
              id={`panel-${i}`}
              className="min-h-16"
            >
              <Typography
                component="span"
                className="flex items-center gap-3 font-bold text-sm sm:text-base"
              >
                <Circle
                  color="#e9b872"
                  strokeWidth={3}
                  size={12}
                  className="bg-secondary rounded-full shrink-0"
                />
                {item.question}
              </Typography>
            </AccordionSummary>

            <AccordionDetails className="bg-textOnText">
              <Typography className="text-sm sm:text-base leading-relaxed text-gray-700">
                {item.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      ))}
    </div>
  );
}
