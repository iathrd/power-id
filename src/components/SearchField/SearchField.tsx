import styles from "./styles.module.css";
import { ICON } from "@configs/index";
import { Formik, Form } from "formik";
import { Button } from "@components/Button/Button";
import Typography from "@components/Typography/Typography";
import { styled } from "@mui/material";

type SearchFieldProps = {
  handleSubmit: () => void;
};

const SearchInput = styled("input")(({ theme }) => ({
  width: "100%",
  backgroundColor: theme.palette.background.paper,
  borderRadius: "8px",
  height: "70px",
  outline: "none",
  paddingLeft: "20px",
  color: theme.palette.fontColor.primary,
  boxShadow:
    theme.palette.mode === "light"
      ? "0px 1px 20px rgba(197, 197, 197, 0.25)"
      : "none",
  border: theme.palette.mode === "dark" ? "1px solid #30363d" : "none",
  "&::placeholder": {
    fontFamily: "Open Sans !important",
    color: "#9EA0A5 !important",
    fontSize: "14px !important",
  },
}));

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
              <SearchInput
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
                    <Typography newColor="lightGrey" variant="body2">
                      Kategori
                    </Typography>
                  </div>
                  <div>
                    <Button
                      color="primary"
                      label="Search"
                      onSubmit={() => handleSubmit}
                      type="submit"
                      variant="contained"
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
