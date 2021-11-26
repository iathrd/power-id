import Typography from "@components/core/Typography";
import Box from "@mui/material/Box";
import { BannerImage, Content } from "./styled";
import { IMG } from "@configs/index";

const Banner: React.FC = () => {
  return (
    <Box height="51.375rem" position="relative" width="50.625rem">
      <BannerImage alt="banner" src={IMG.BANNER} />
      <Content>
        <Box margin="44px">
          <img alt="logo" height="24" src={IMG.LOGO_WHITE} width="86" />
        </Box>
        <Box marginLeft="10%" marginTop="129px" width="75%">
          <Typography newcolor="secondary" variant="h1">
            Temukan developer berbakat & terbaik di berbagai bidang keahlian
          </Typography>
        </Box>
      </Content>
    </Box>
  );
};

export default Banner;
