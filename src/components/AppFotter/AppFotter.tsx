import { IMG } from "@configs/index";
import { styled, useTheme, Box } from "@mui/material";
import Typography from "@components/Typography/Typography";
import Flex from "@components/Wrapper/Flex";

const Footer = styled("footer")(
  ({ theme }) => `
 height: 25.063rem;
  width: 100%;
  background-color:${
    theme.palette.mode === "light"
      ? theme.palette.primary.main
      : theme.palette.background.paper
  };
  padding: 4.375rem 9.375rem 2.625rem 9.375rem;
  /* position: absolute; */
  bottom: 0;

`
);

export const AppFotter: React.FC = () => {
  const theme = useTheme();
  return (
    <Footer>
      <Box marginBottom="1.875rem">
        <img
          alt="Logo"
          height="50"
          src={theme.palette.mode === "light" ? IMG.LOGO_WHITE : IMG.LOGO_DARK}
          width="178"
        />
      </Box>
      <Box marginBottom="4.188rem" width="23.813rem">
        <Typography newColor="secondary" variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod
          ipsum et dui rhoncus auctor.
        </Typography>
      </Box>
      <hr />
      <Flex justifyContent="normal" marginTop="1.875rem">
        <Typography newColor="secondary" variant="body1">
          2021 Pewworld. All right reserved
        </Typography>
        <Flex flex="1" justifyContent="flex-end">
          <Typography newColor="secondary" variant="body1">
            Telepon : +6281923920
          </Typography>
          <Box marginLeft="4.938rem">
            <Typography newColor="secondary" variant="body1">
              Email : power.id@gmail.com
            </Typography>
          </Box>
        </Flex>
      </Flex>
    </Footer>
  );
};
