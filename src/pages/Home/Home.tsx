import { SearchField } from "@components/SearchField/SearchField";

const Home: React.FC = () => {
  const handleSubmit = (): void => {
    const test = "test";
    test + "test";
  };

  return (
    <main className="main-content">
      <SearchField handleSubmit={handleSubmit} />
    </main>
  );
};

export default Home;
