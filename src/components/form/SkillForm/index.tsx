import InputField from "@components/core/InputField";
import FormContainer from "@components/shared/FormContainer";
import Button from "@components/core/Button";
import Chip from "@mui/material/Chip";
import { useState } from "react";
import { Form, Formik } from "formik";
import { useHistory } from "react-router-dom";
import { SkillWrapper } from "./styled";
import Flex from "@components/core/Flex";

interface ChipData {
  key: number;
  label: string;
}

const SkillForm: React.FC = () => {
  const history = useHistory();

  const [chipData, setChipData] = useState<readonly ChipData[]>([
    { key: 0, label: "Angular" },
    { key: 1, label: "jQuery" },
    { key: 2, label: "Polymer" },
    { key: 3, label: "React" },
    { key: 4, label: "Vue.js" },
    { key: 5, label: "React" },
    { key: 6, label: "Vue.js" },
  ]);

  const handleDelete = (chipToDelete: ChipData) => () => {
    setChipData((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete.key)
    );
  };

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
    <FormContainer title="Skill">
      <Formik
        initialValues={{ skill: "" }}
        onSubmit={() => {
          history.push("/profile");
        }}
      >
        {() => (
          <Form>
            <Flex flexWrap="wrap" gap="10px">
              {chipData.map((data) => {
                return (
                  <Chip
                    color="primary"
                    key={data.key}
                    label={data.label}
                    onDelete={handleDelete(data)}
                  />
                );
              })}
            </Flex>
            <SkillWrapper>
              <div>{renderField("", "skill", "Java")}</div>
              <Button
                color="secondary"
                label="Simpan"
                size="small"
                variant="contained"
              />
            </SkillWrapper>
          </Form>
        )}
      </Formik>
    </FormContainer>
  );
};

export default SkillForm;
