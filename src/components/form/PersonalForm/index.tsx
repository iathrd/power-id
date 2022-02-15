import InputField from "@components/core/InputField";
import FormContainer from "@components/shared/FormContainer";
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
    <FormContainer title="Data diri">
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
    </FormContainer>
  );
};

export default PersonalFrom;
