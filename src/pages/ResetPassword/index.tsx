import Typhography from "@components/core/Typography";
import Banner from "@components/shared/Banner";
import InputField from "@components/core/InputField";
import Button from "@components/core/Button";
import { FormWrapper } from "./styled";
import { Formik, Form } from "formik";
import { useHistory } from "react-router-dom";
import { validate } from "./validate";

const ResetPassword: React.FC = () => {
  const history = useHistory();

  const handleSubmit = (): void => {
    history.push("/change-password");
  };

  return (
    <div className="parent">
      <Banner />
      <FormWrapper>
        <Typhography newcolor="primary" variant="h3">
          Reset password
        </Typhography>
        <div id="description">
          <Typhography newcolor="grey" variant="body1">
            Enter your user accounts verified email address and we will send you
            a password reset link.
          </Typhography>
        </div>
        <Formik
          initialValues={{ email: "" }}
          onSubmit={handleSubmit}
          validate={validate}
        >
          {({ handleSubmit, dirty, isValid }) => (
            <Form>
              <InputField
                label="Email"
                name="email"
                placeholder="Masukan alamat email"
                type="email"
              />
              <div id="button">
                <Button
                  color="secondary"
                  disabled={!dirty || !isValid}
                  fullWidth
                  label="Send password reset email"
                  onClick={() => handleSubmit()}
                  size="medium"
                  type="submit"
                />
              </div>
            </Form>
          )}
        </Formik>
      </FormWrapper>
    </div>
  );
};

export default ResetPassword;
