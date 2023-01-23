import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/sponsored.png"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Kodego </Typography>
        <Typography color={medium}>Kodego Bootcamp</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
      Join our Full-Stack Web Development Bootcamp para matuto ng programming in as fast as 12 weeks! 😎 Take the classes online, part-time or full-time + Learn First, Pay When Hired pa! 🤑 Deadline for applications is on January 23 already so APPLY NOW! 
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
