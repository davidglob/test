import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/system";
import { red, blue, yellow } from "@mui/material/colors";

const CustomAccordion = ({ children, variant, title }) => {
  const CustomAccordion = styled(Accordion)(({ theme }) => {
    let color = blue[50];

    if (variant === "warning") {
      color = yellow[50];
    } else if (variant === "danger") {
      color = red[50];
    }

    return {
      backgroundColor: color,
      border: `0.5px solid black`,
      "&:focus": {
        backgroundColor: color,
      },
    };
  });

  return (
    <CustomAccordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </CustomAccordion>
  );
};

export default CustomAccordion;
