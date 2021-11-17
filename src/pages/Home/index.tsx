import { SearchField } from "@components/SearchField/SearchField";
import { ContentWrapper } from "./styled";

const Home: React.FC = () => {
  const handleSubmit = (): void => {
    const test = "test";
    test + "test";
  };

  return (
    <ContentWrapper>
      <SearchField handleSubmit={handleSubmit} />
    </ContentWrapper>
  );
};

export default Home;
