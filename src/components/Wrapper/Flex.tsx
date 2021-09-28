import { Box, styled, BoxProps } from "@mui/material";

type FlexBoxProps = BoxProps;

const Wrapper = styled(Box)``;

const Flex: React.FC<FlexBoxProps> = ({
  children,
  justifyContent = "center",
  alignItems = "center",
  flexDirection = "row",
  ...props
}) => {
  return (
    <Wrapper
      alignItems={alignItems}
      display="flex"
      flexDirection={flexDirection}
      justifyContent={justifyContent}
      {...props}
    >
      {children}
    </Wrapper>
  );
};

export default Flex;
