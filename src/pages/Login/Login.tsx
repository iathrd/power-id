import styles from "./styles.module.css";
import { Banner } from "../../components/Banner/Banner";
import { Form, Formik } from "formik";
import { InputField } from "../../components/InputField/InputField";
import { Button } from "../../components/Button/Button";

export const Login: React.FC = () => {
  const renderLoginForm = (): JSX.Element => {
    return (
      <Formik
        initialValues={{ username: "" }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {() => (
          <Form>
            <InputField
              name="email"
              placeholder="Masukan alamat email"
              label="Email"
            />
            <InputField
              name="password"
              placeholder="Masukan kata sandi"
              label="Kata Sandi"
            />
            <div>
              <h6>Lupa kata sandi?</h6>
            </div>
            <Button
              label="Masuk"
              variant="medium"
              color="yellow"
              fullWidth={true}
            />
            <div className={styles.haveAccount}>
              <h6>Anda belum punya akun ? </h6>
              <h6>Daftar disini</h6>
            </div>
          </Form>
        )}
      </Formik>
    );
  };

  return (
    <div className={styles.parent}>
      <Banner />
      <div className={styles.loginForm}>
        <h3>Halo, Pewpeople</h3>
        <h5>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod
          ipsum et dui rhoncus auctor.
        </h5>
        {renderLoginForm()}
      </div>
    </div>
  );
};
