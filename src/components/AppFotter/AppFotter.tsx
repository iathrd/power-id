import { IMG } from "@configs/index";
import { styled, useTheme, Typography } from "@mui/material";

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
      <div>
        <img
          alt="Logo"
          src={theme.palette.mode === "light" ? IMG.LOGO_WHITE : IMG.LOGO_DARK}
        />
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod
          ipsum et dui rhoncus auctor.
        </p>
      </div>
      <hr />
      <Typography>as</Typography>
      <div>
        <h5>2021 Pewworld. All right reserved</h5>
        <div>
          <h5>Telepon : +6281923920</h5>
          <h5>Email : power.id@gmail.com</h5>
        </div>
      </div>
    </Footer>
  );
};
