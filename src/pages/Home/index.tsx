import Flex from "@components/core/Flex";
import HeaderContent from "@components/shared/HeaderContent";
import SearchField from "@components/shared/SearchField";
import Avatar from "@components/core/Avatar";
import { ContentWrapper, CardWrapper } from "./styled";

const Home: React.FC = () => {
  const handleSubmit = (): void => {
    const test = "test";
    test + "test";
  };

  return (
    <>
      <HeaderContent />
      <ContentWrapper>
        <SearchField handleSubmit={handleSubmit} />
        <CardWrapper>
          <Flex>
            <Avatar />
          </Flex>
        </CardWrapper>
      </ContentWrapper>
    </>
  );
};

export default Home;
