import Typography from "@components/core/Typography";
import { ProfileForm } from "./styled";

type FormContainerProps = {
  title: string;
};

const FormContainer: React.FC<FormContainerProps> = ({ children, title }) => {
  return (
    <ProfileForm>
      <div className="head">
        <Typography fontWeight="600" newcolor="primary" variant="h6">
          {title}
        </Typography>
      </div>
      <div className="form">{children}</div>
    </ProfileForm>
  );
};

export default FormContainer;
