import { IMG } from "@configs/index";
import { styled, Box } from "@mui/material";
import Typography from "@components/Typography";

const BannerImage = styled("img")`
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
const Content = styled(Box)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "light"
      ? "rgba(94, 80, 161, 0.7)"
      : "rgba(64,41,171, 0.7)",
  width: "100%",
  position: "absolute",
  height: "100%",
}));

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
