import PersonalFrom from "@components/form/PersonalForm";
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
          <PersonalFrom />
        </ProfileForm>
      </Content>
      <h1>Detail Profile</h1>
    </>
  );
};

export default DetailProfile;
