import Avatar from "@components/core/Avatar";
import Button from "@components/core/Button";
import Flex from "@components/core/Flex";
import Typography from "@components/core/Typography";
import MapPin from "@components/icon/MapPin";
import SwipeableViews from "react-swipeable-views";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import { Skill } from "@pages/Home/styled";
import { BlueBack, Content, Experient, UserInfo, Tabs } from "./styled";

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
        <Box sx={{ p: 3 }}>
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
            Item One
          </TabPanel>
          <TabPanel dir={theme.direction} index={1} value={value}>
            Item Two
          </TabPanel>
        </SwipeableViews>
      </Box>
    </Experient>
  );
}

const Profile: React.FC = () => {
  const data = [
    "Phyton",
    "Laravel",
    "Golang",
    "JavaScript",
    "PHP",
    "HTML",
    "C++",
    "Kotlin",
    "Swift",
  ];

  const renderProfile = (): JSX.Element => {
    return (
      <UserInfo>
        <div className="avatar">
          <Avatar
            alt="user"
            size="large"
            src="https://source.unsplash.com/random"
          />
        </div>
        <div className="textContent">
          <Typography newcolor="primary" variant="h6">
            Louis Tomlinson
          </Typography>
          <Typography newcolor="primary" variant="subtitle1">
            Web Developer
          </Typography>
          <Flex className="location" component="div" justifyContent="start">
            <MapPin />
            <Typography newcolor="lightGrey" variant="subtitle1">
              Purwokerto, Jawa Tengah
            </Typography>
          </Flex>
          <Typography newcolor="lightGrey" variant="subtitle1">
            Freelancer
          </Typography>
          <div className="description">
            <Typography newcolor="lightGrey" variant="subtitle1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum erat orci, mollis nec gravida sed, ornare quis urna.
              Curabitur eu lacus fringilla, vestibulum risus at.
            </Typography>
          </div>
          <Button
            fullWidth
            label="Hire"
            size="medium"
            type="submit"
            variant="contained"
          />
          <div className="skill">
            <Typography newcolor="primary" variant="h6">
              Skill
            </Typography>
            <Flex
              alignItems="stretch"
              flexWrap="wrap"
              justifyContent="start"
              marginTop="20px"
              rowGap="20px"
            >
              {data.map((item, idx) => (
                <Skill component="div" key={idx}>
                  <Typography newcolor="secondary" variant="subtitle2">
                    {item}
                  </Typography>
                </Skill>
              ))}
            </Flex>
          </div>
        </div>
      </UserInfo>
    );
  };

  return (
    <>
      <BlueBack />
      <Content>
        {renderProfile()}
        <Flex alignItems="start" flex="1">
          <Porto />
        </Flex>
      </Content>
    </>
  );
};

export default Profile;
