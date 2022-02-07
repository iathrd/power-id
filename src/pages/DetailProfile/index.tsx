import ProfileInfo from "@components/shared/ProfileInfo";
import { BlueBack, Content } from "@components/styled/styled";

const DetailProfile: React.FC = () => {
  return (
    <>
      <BlueBack />
      <Content>
        <ProfileInfo />
      </Content>
      <h1>Detail Profile</h1>
    </>
  );
};

export default DetailProfile;
