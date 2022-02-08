import ProfileInfo from "@components/shared/ProfileInfo";
import { BlueBack, Content } from "@components/styled/styled";
import { ProfileForm } from "./styled";

const DetailProfile: React.FC = () => {
  return (
    <>
      <BlueBack />
      <Content>
        <ProfileInfo isUser />
        <ProfileForm>
          <h1>PPPP</h1>
        </ProfileForm>
      </Content>
      <h1>Detail Profile</h1>
    </>
  );
};

export default DetailProfile;
