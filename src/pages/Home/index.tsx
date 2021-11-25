import Flex from "@components/core/Flex";
import HeaderContent from "@components/shared/HeaderContent";
import SearchField from "@components/shared/SearchField";
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
          <Flex />
        </CardWrapper>
      </ContentWrapper>
    </>
  );
};

export default Home;
