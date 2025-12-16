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

export default function AccordionList({ items }: AccordionListProps) {
  return (
    <div className="w-[1320px] space-y-4">
      {items.map((item, i) => (
        <div
          key={i}
          className="rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200"
        >
          <Accordion
            elevation={0}
            variant="outlined"
            className="shadow-none! border-none!"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel-${i}`}
              id={`panel-${i}`}
            >
              <Typography component="span" className="flex items-center gap-5">
                <Circle
                  color="#e9b872"
                  size={15}
                  strokeWidth={3}
                  className="bg-secondary rounded-full"
                />
                {item.question}
              </Typography>
            </AccordionSummary>

            <AccordionDetails>
              <Typography>{item.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      ))}
    </div>
  );
}
