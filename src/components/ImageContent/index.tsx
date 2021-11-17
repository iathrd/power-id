import Box from "@mui/material/Box";
import { BoxProps } from "@mui/material";
import { Image, ChildBox, GreyBox } from "./styled";

type ImageContentProps = BoxProps & {
  isChild?: boolean;
  content?: "left" | "right";
  image?: string;
};

const ImageContent: React.FC<ImageContentProps> = ({
  isChild,
  content = "left",
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

export default ImageContent;
