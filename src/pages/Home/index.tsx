import Flex from "@components/core/Flex";
import HeaderContent from "@components/shared/HeaderContent";
import SearchField from "@components/shared/SearchField";
import Avatar from "@components/core/Avatar";
import Typography from "@components/core/Typography";
import Box from "@mui/material/Box";
import Pagination from "@mui/material/Pagination";
import MapPin from "@components/icon/MapPin";
import ArrowBack from "@components/icon/ArrowBack";
import ArrowForward from "@components/icon/ArrowForward";
import {
  ContentWrapper,
  CardWrapper,
  Skill,
  Button,
  ItemWrapper,
} from "./styled";
import { PaginationItem } from "@mui/material";

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
                  <MapPin />
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
        <Flex marginTop="50px">
          <Pagination
            color="primary"
            count={100}
            renderItem={(item) => (
              <PaginationItem
                components={{ previous: ArrowBack, next: ArrowForward }}
                {...item}
              />
            )}
            shape="rounded"
            size="large"
            variant="text"
          />
        </Flex>
      </ContentWrapper>
    </>
  );
};

export default Home;
