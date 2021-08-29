import styles from "./styles.module.css";
import { Banner } from "../../components/Banner/Banner";
import { Form, Formik } from "formik";
import { InputField } from "../../components/InputField/InputField";

export const Login: React.FC = () => {
  return (
    <div className={styles.parent}>
      <Banner />
      <div className={styles.loginForm}>
        <h3>Halo, Pewpeople</h3>
        <h5>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod
          ipsum et dui rhoncus auctor.
        </h5>
        <Formik
          initialValues={{ username: "" }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {() => (
            <Form>
              <InputField
                name="username"
                placeholder="Username"
                label="Username"
              />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
