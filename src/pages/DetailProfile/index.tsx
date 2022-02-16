import ExperienceForm from "@components/form/ExperienceForm";
import PersonalFrom from "@components/form/PersonalForm";
import SkillForm from "@components/form/SkillForm";
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
          <SkillForm />
          <ExperienceForm />
        </ProfileForm>
      </Content>
    </>
  );
};

export default DetailProfile;
