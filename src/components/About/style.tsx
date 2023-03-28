import { styled } from "@/styles/stitches.config";

export const AboutMe = styled("section", {
  backgroundColor: "$grey4",
  padding: "4rem 0 0 0",
});

export const AboutDiv = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
  padding: "3rem 0",
  gap: "3rem",

  "@mobile": {
    display: "block",
  },
});

export const AboutImage = styled("img", {
  width: "25%",
  height: "25%",
  borderRadius: "50%",

  "@mobile": {
    display: "block",
    width: "50%",
    height: "50%",
    justifyContent: "center",
    margin: "0 auto 2rem auto",
  },
});
