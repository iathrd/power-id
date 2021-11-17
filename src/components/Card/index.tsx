import Flex from "@components/Wrapper/Flex";
import Typography from "@components/Typography/Typography";
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
            <Typography newColor="primary" variant="h4">
              Harry Styles
            </Typography>
            <Typography newColor="lightGrey" variant="body1">
              Web Developer
            </Typography>
          </div>
          <div>
            <Typography newColor="grey" variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              euismod ipsum et dui rhoncus auctor.
            </Typography>
          </div>
        </CardWrapper>
      ))}
    </Flex>
  );
};
