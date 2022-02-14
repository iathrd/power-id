import Typography from "@components/core/Typography";
import InputField from "@components/core/InputField";
import { ProfileForm } from "./styled";
import { Form, Formik } from "formik";
import { useHistory } from "react-router-dom";

const PersonalFrom: React.FC = () => {
  const history = useHistory();

  const renderField = (
    label: string,
    name: string,
    placeholder: string,
    type = "text"
  ): JSX.Element => {
    return (
      <InputField
        label={label}
        name={name}
        placeholder={placeholder}
        type={type}
      />
    );
  };

  return (
    <ProfileForm>
      <div className="head">
        <Typography fontWeight="600" newcolor="primary" variant="h6">
          Data diri
        </Typography>
      </div>
      <div className="form">
        <Formik
          initialValues={{ fullName: "" }}
          onSubmit={() => {
            history.push("/profile");
          }}
        >
          {() => (
            <Form>
              {renderField("Nama lengkap", "fullName", "Masukan nama lengkap")}
              {renderField("Job desk", "fullName", "Masukan job desk")}
              {renderField("Domisili", "fullName", "Masukan domisili")}
              {renderField("Tempat kerja", "fullName", "Masukan tempat kerja")}
              {renderField(
                "Deskripsi singkat",
                "fullName",
                "Tuliskan deskripsi singkat"
              )}
            </Form>
          )}
        </Formik>
      </div>
    </ProfileForm>
  );
};

export default PersonalFrom;
