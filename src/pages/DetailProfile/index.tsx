import ExperienceForm from "@components/form/ExperienceForm";
import PersonalFrom from "@components/form/PersonalForm";
import PortofolioForm from "@components/form/PortofolioForm";
import SkillForm from "@components/form/SkillForm";
import ProfileInfo from "@components/shared/ProfileInfo";
import { BlueBack, Content } from "@components/styled/styled";
import { ProfileForm } from "./styled";

const DetailProfile: React.FC = () => {
  return (
    <>
      <BlueBack />
      <Content>
        <div>
          <ProfileInfo isUser />
        </div>
        <ProfileForm>
          <PersonalFrom />
          <SkillForm />
          <ExperienceForm />
          <PortofolioForm />
        </ProfileForm>
      </Content>
    </>
  );
};

export default DetailProfile;
