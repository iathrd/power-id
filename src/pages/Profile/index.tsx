import Flex from "@components/core/Flex";
import Typography from "@components/core/Typography";
import SwipeableViews from "react-swipeable-views";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import ProfileInfo from "@components/shared/ProfileInfo";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import { Content, BlueBack } from "@components/styled/styled";
import { Experient, Tabs, Portofolio, Experients } from "./styled";

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      aria-labelledby={`full-width-tab-${index}`}
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      role="tabpanel"
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3, paddingLeft: 0 }}>
          <Typography newcolor="primary" variant="h6">
            {children}
          </Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

function Porto() {
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  const renderPortofolio = () => {
    return (
      <Portofolio>
        {[...Array(6)].map((_, idx) => (
          <div key={idx}>
            <img alt="porto" src="https://source.unsplash.com/random" />
            <Typography newcolor="primary" variant="subtitle1">
              Remainder app
            </Typography>
          </div>
        ))}
      </Portofolio>
    );
  };

  const renderExperient = () => {
    return (
      <Experients>
        {[...Array(2)].map((_, idx) => (
          <div key={idx}>
            <img alt="expset" src="https://source.unsplash.com/random" />
            <div>
              <Typography fontSize="20px" fontWeight="bold" newcolor="primary">
                Engineer
              </Typography>
              <Typography newcolor="grey" variant="body1">
                Tokopedia
              </Typography>
              <Flex justifyContent="start">
                <Typography newcolor="lightGrey" variant="body2">
                  July 2019 - January 2020
                </Typography>
                <Typography newcolor="lightGrey" variant="body2">
                  6 months
                </Typography>
              </Flex>
              <Typography newcolor="primary" variant="subtitle1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum erat orci, mollis nec gravida sed, ornare quis urna.
                Curabitur eu lacus fringilla, vestibulum risus at.
              </Typography>
            </div>
          </div>
        ))}
      </Experients>
    );
  };

  return (
    <Experient>
      <Box sx={{ bgcolor: "background.paper", width: "100%" }}>
        <Box>
          <Tabs
            aria-label="full width tabs example"
            indicatorColor="primary"
            onChange={handleChange}
            textColor="inherit"
            value={value}
          >
            <Tab label="Portofolio" {...a11yProps(0)} />
            <Tab label="Pengalaman kerja" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel dir={theme.direction} index={0} value={value}>
            {renderPortofolio()}
          </TabPanel>
          <TabPanel dir={theme.direction} index={1} value={value}>
            {renderExperient()}
          </TabPanel>
        </SwipeableViews>
      </Box>
    </Experient>
  );
}

const Profile: React.FC = () => {
  return (
    <>
      <BlueBack />
      <Content>
        <ProfileInfo />
        <Flex alignItems="start" flex="1">
          <Porto />
        </Flex>
      </Content>
    </>
  );
};

export default Profile;
