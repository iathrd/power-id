import Box from "@mui/material/Box";
import { styled, BoxProps } from "@mui/material";

type ImageContentProps = BoxProps & {
  isChild?: boolean;
  content?: "left" | "right";
  image?: string;
};

const GreyBox = styled(Box)(
  ({ theme }) => `
height: 100%;
position: absolute;
width: 100%;
transform: rotate(-15.79deg);
background-color: ${theme.palette.content.main};
`
);

const ChildBox = styled((props: ImageContentProps) => <Box {...props} />)(
  ({ theme, content = "right" }) => `
width: 100%;
height: 100%;
position: absolute;
background-color: ${theme.palette.content.main};
transform: ${content === "right" ? "rotate(12.57deg)" : "rotate(-12.92deg)"};
`
);

const Image = styled("img")`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ImageContent: React.FC<ImageContentProps> = ({
  isChild,
  content,
  image,
}) => {
  if (!isChild) {
    return (
      <Box height="31.25rem" position="relative" width="31.25rem">
        <GreyBox />
        <Image alt="banner" src={image} />
      </Box>
    );
  } else {
    return (
      <Box height="24.375rem" position="relative" width="31rem">
        <ChildBox content={content} />
        <Image alt="child" src={image} />
      </Box>
    );
  }
};
