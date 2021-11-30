import Avatars from "@mui/material/Avatar";
import { styled } from "@mui/material/styles";

type Size = "verysmall" | "small" | "medium" | "large" | "verylarge";

const Avatar = styled(Avatars, {
  shouldForwardProp: (prop) => prop !== "size",
})<{ size?: Size }>(({ size = "medium" }) => ({
  color: "white",
  ...(size === "verysmall" && {
    width: "32px",
    height: "32px",
    objectFit: "cover",
  }),
  ...(size === "small" && {
    width: "40px",
    height: "40px",
  }),
  ...(size === "medium" && {
    width: "100px",
    height: "100px",
  }),
  ...(size === "large" && {
    width: "150px",
    height: "150px",
  }),
}));

export default Avatar;
