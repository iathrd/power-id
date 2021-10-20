import Flex from "@components/Wrapper/Flex";
import Typography from "@components/Typography/Typography";
import { styled, Box } from "@mui/material";

const CardWrapper = styled(Box)(
  ({ theme }) => `
 width: 339px;
  height: 437px;
  background-color: ${theme.palette.background.paper};
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  ${
    theme.palette.mode === "dark"
      ? `border:1px solid #30363d; `
      : `box-shadow: 0px 8px 16px rgba(197, 197, 197, 0.25);`
  } 
  margin-right: 28px;
  padding: 26px 36px;

`
);

const Image = styled("img")`
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 50%;
`;

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
