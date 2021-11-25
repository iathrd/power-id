import { ICON } from "@configs/index";
import { Formik, Form } from "formik";
import Typography from "@components/core/Typography";
import { Box } from "@mui/material";
import { SearchInput, Action, Filter, SearchButton } from "./styled";

type SearchFieldProps = {
  handleSubmit: () => void;
};

const SearchField: React.FC<SearchFieldProps> = ({ handleSubmit }) => {
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
            <Box position="relative" width="100%">
              <SearchInput
                id="search"
                name="search"
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="Search for any skill"
                value={values.search}
              />
              <Action>
                <div>
                  <img alt="search icon" src={ICON.SEARCH} />
                </div>
                <Filter>
                  <div>
                    <Typography newcolor="lightGrey" variant="body2">
                      Kategori
                    </Typography>
                  </div>
                  <div>
                    <SearchButton
                      color="primary"
                      label="Search"
                      onSubmit={() => handleSubmit}
                      type="submit"
                      variant="contained"
                    />
                  </div>
                </Filter>
              </Action>
            </Box>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SearchField;
