import Typography from "@components/core/Typography";
// import Flex from "@components/core/Flex";
// import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import { IMG } from "@configs/index";
import { Footer } from "./styled";

const AppFotter: React.FC = () => {
  const theme = useTheme();
  return (
    <Footer>
      {/* <Box marginBottom="1.875rem"> */}
      <div className="logo">
        <img
          alt="Logo"
          src={theme.palette.mode === "light" ? IMG.LOGO_WHITE : IMG.LOGO_DARK}
        />
      </div>

      <div className="description">
        <Typography newcolor="secondary" variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod
          ipsum et dui rhoncus auctor.
        </Typography>
      </div>
      <hr />
      {/* <Flex justifyContent="normal" marginTop="1.875rem">
        <Typography newcolor="secondary" variant="body1">
          2021 Pewworld. All right reserved
        </Typography>
        <Flex flex="1" justifyContent="flex-end">
          <Typography newcolor="secondary" variant="body1">
            Telepon : +6281923920
          </Typography>
          <Box marginLeft="4.938rem">
            <Typography newcolor="secondary" variant="body1">
              Email : power.id@gmail.com
            </Typography>
          </Box>
        </Flex>
      </Flex> */}
    </Footer>
  );
};

export default AppFotter;
