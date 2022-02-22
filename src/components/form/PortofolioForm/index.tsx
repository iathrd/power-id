import InputField from "@components/core/InputField";
import FormContainer from "@components/shared/FormContainer";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import Button from "@components/core/Button";
import Typography from "@components/core/Typography";
import { Formik, Form } from "formik";
import { RadioLabel, PortofolioField } from "./styled";
import { useHistory } from "react-router-dom";
import Cloud from "@components/icon/Cloud";
import { FormLabel } from "@components/styled/styled";

const PortofolioForm = () => {
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

  const renderRadio = () => {
    return (
      <FormControl>
        <FormLabel> Type portofolio </FormLabel>
        <RadioGroup
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          row
        >
          <RadioLabel
            control={<Radio size="small" />}
            label="Aplikasi mobile"
            value="female"
          />
          <RadioLabel
            control={<Radio size="small" />}
            label="Aplikasi web"
            value="male"
          />
        </RadioGroup>
      </FormControl>
    );
  };

  const renderPortofolioField = () => {
    return (
      <div>
        <FormLabel>Upload gambar</FormLabel>
        <PortofolioField>
          <Cloud />
          <Typography newcolor="primary" variant="subtitle1">
            Drag & Drop untuk Upload Gambar Aplikasi Mobile
          </Typography>
          <Typography newcolor="primary" variant="subtitle2">
            Atau cari untuk mengupload file dari direktorimu.
          </Typography>
        </PortofolioField>
      </div>
    );
  };

  return (
    <FormContainer title="Portofolio">
      <Formik
        initialValues={{ name: "" }}
        onSubmit={() => {
          history.push("/profile");
        }}
      >
        {() => (
          <Form>
            {renderField("Nama aplikasi", "name", "Masukan nama aplikasi")}
            {renderField("Link repository", "name", "Masukan link repository")}
            {renderRadio()}
            {renderPortofolioField()}
            <hr />
            <Button
              color="secondary"
              fullWidth
              label="Tambah portofolio"
              size="medium"
              variant="outlined"
            />
          </Form>
        )}
      </Formik>
    </FormContainer>
  );
};

export default PortofolioForm;
