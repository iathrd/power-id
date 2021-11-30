import Button from "@components/core/Button";
import Flex from "@components/core/Flex";
import Switch from "@mui/material/Switch";
import Box from "@mui/material/Box";
import Avatar from "@components/core/Avatar";
import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { IMG, ICON } from "@configs/index";
import { useTheme } from "@mui/material/styles";
import { ColorModeContext } from "@utils/context";
import { Nav } from "./styled";

type NavbarProps = {
  transparent?: boolean;
};

type stateType = {
  isLogin?: boolean | undefined;
};

const AppHeader: React.FC<NavbarProps> = () => {
  const { state = {} } = useLocation<stateType>();
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  const { isLogin } = state;

  return (
    <Nav component="nav">
      <img
        alt="logo"
        height="35"
        src={theme.palette.mode === "light" ? IMG.LOGO : IMG.LOGO_DARK}
        width="127"
      />
      <Flex>
        <Switch
          checked={theme.palette.mode === "dark"}
          onClick={colorMode.toggleColorMode}
        />
        {!isLogin ? (
          <Flex>
            <Box sx={{ marginRight: "1rem" }}>
              <Link className="text-link" to="/signin">
                <Button
                  color="primary"
                  label="Masuk"
                  size="small"
                  variant="outlined"
                />
              </Link>
            </Box>
            <Box>
              <Link className="text-link" to="/signup">
                <Button color="primary" label="Daftar" size="small" />
              </Link>
            </Box>
          </Flex>
        ) : (
          <Flex alignItems="center">
            <Box>
              <img alt="bell icon" src={ICON.BELL} />
            </Box>
            <Box sx={{ marginLeft: "40px" }}>
              <img alt="mail icon" src={ICON.MAIL} />
            </Box>
            <Box marginLeft="50px">
              <Avatar
                alt="avatar"
                size="verysmall"
                src="https://source.unsplash.com/random"
              />
            </Box>
          </Flex>
        )}
      </Flex>
    </Nav>
  );
};

export default AppHeader;
