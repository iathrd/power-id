import InputField from "@components/core/InputField";
import FormContainer from "@components/shared/FormContainer";
import Button from "@components/core/Button";
import { Form, Formik } from "formik";
import { useHistory } from "react-router-dom";
import { TwoInput } from "./styled";

const ExperienceForm: React.FC = () => {
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
    <FormContainer title="Pengalaman kerja">
      <Formik
        initialValues={{ role: "" }}
        onSubmit={() => {
          history.push("/profile");
        }}
      >
        {() => (
          <Form>
            {renderField("Posisi", "role", "Web developer")}
            <TwoInput>
              <div>
                {renderField("Nama perusahaan", "role", "PT Harus bisa")}
              </div>
              <div>{renderField("Bulan/tahun", "role", "Januari 2018")}</div>
            </TwoInput>
            {renderField(
              "Deskripsi singkat",
              "role",
              "Deskripsikan pekerjaan anda"
            )}
            <hr />
            <Button
              color="secondary"
              fullWidth
              label="Tambah pengalaman kerja"
              size="medium"
              variant="outlined"
            />
          </Form>
        )}
      </Formik>
    </FormContainer>
  );
};

export default ExperienceForm;
