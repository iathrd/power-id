import Flex from "@components/core/Flex";
import Typography from "@components/core/Typography";
import { CardWrapper, Image } from "./styled";

export const Card: React.FC = () => {
  return (
    <Flex position="relative">
      {[...Array(3)].map((_, idx: number) => (
        <CardWrapper key={idx}>
          <div>
            <Image
              alt={"image" + idx}
              src="https://source.unsplash.com/random"
            />
          </div>
          <div>
            <Typography newcolor="primary" variant="h4">
              Harry Styles
            </Typography>
            <Typography newcolor="lightGrey" variant="body1">
              Web Developer
            </Typography>
          </div>
          <div>
            <Typography newcolor="grey" variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              euismod ipsum et dui rhoncus auctor.
            </Typography>
          </div>
        </CardWrapper>
      ))}
    </Flex>
  );
};
