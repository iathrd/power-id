import styles from "./styles.module.css";
import { ICON } from "@configs/index";
import { Formik, Form } from "formik";
import { Button } from "@components/Button/Button";

type SearchFieldProps = {
  handleSubmit: () => void;
};

export const SearchField: React.FC<SearchFieldProps> = ({ handleSubmit }) => {
  return (
    <div>
      <Formik
        initialValues={{ search: "" }}
        onSubmit={() => {
          handleSubmit;
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <Form>
            <div className={styles.searchWrapper}>
              <input
                id="search"
                name="search"
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="Search for any skill"
                value={values.search}
              />
              <div className={styles.action}>
                <div>
                  <img alt="search icon" src={ICON.SEARCH} />
                </div>
                <div className={styles.filter}>
                  <div>
                    <h4>Kategori</h4>
                  </div>
                  <div>
                    <Button
                      color="primary"
                      label="Search"
                      onSubmit={() => handleSubmit}
                      type="submit"
                      variant="small"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
