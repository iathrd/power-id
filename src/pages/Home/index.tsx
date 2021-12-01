import Flex from "@components/core/Flex";
import HeaderContent from "@components/shared/HeaderContent";
import SearchField from "@components/shared/SearchField";
import Avatar from "@components/core/Avatar";
import Typography from "@components/core/Typography";
import Box from "@mui/material/Box";
import {
  ContentWrapper,
  CardWrapper,
  Skill,
  Button,
  ItemWrapper,
} from "./styled";
import { ICON } from "@configs/index";

const Home: React.FC = () => {
  const handleSubmit = (): void => {
    const test = "test";
    test + "test";
  };

  const renderCard = (): JSX.Element => {
    return (
      <CardWrapper>
        {[...Array(4)].map((_, idx) => (
          <ItemWrapper key={idx} last={idx === 3}>
            <Box component="div" marginRight="31px">
              <Avatar
                alt="user"
                size="medium"
                src="https://source.unsplash.com/random"
              />
            </Box>
            <Flex
              alignItems="flex-start"
              flex="1"
              flexDirection="column"
              justifyContent="flex-start"
            >
              <Typography newcolor="primary" variant="h6">
                Louis Tomlinson
              </Typography>
              <Typography newcolor="lightGrey" variant="subtitle1">
                Web developer
              </Typography>
              <Flex alignItems="center">
                <Box component="div" marginRight="11px" marginTop="3px">
                  <img alt="Pin" src={ICON.PIN} />
                </Box>
                <Typography newcolor="lightGrey" variant="subtitle1">
                  Bandung
                </Typography>
              </Flex>
              <Flex marginTop="17px">
                <Skill>
                  <Typography newcolor="secondary" variant="subtitle2">
                    PHP
                  </Typography>
                </Skill>
                <Skill>
                  <Typography newcolor="secondary" variant="subtitle2">
                    Javascript
                  </Typography>
                </Skill>
                <Skill>
                  <Typography newcolor="secondary" variant="subtitle2">
                    HTML
                  </Typography>
                </Skill>
              </Flex>
            </Flex>
            <Box component="div">
              <Button color="primary" label="Lihat Profile" />
            </Box>
          </ItemWrapper>
        ))}
      </CardWrapper>
    );
  };

  return (
    <>
      <HeaderContent />
      <ContentWrapper>
        <SearchField handleSubmit={handleSubmit} />
        {renderCard()}
      </ContentWrapper>
    </>
  );
};

export default Home;
