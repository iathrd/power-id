import Typography from "@components/core/Typography";
import { Wrapper } from "./styled";

const HeaderContent: React.FC = () => {
  return (
    <Wrapper>
      <Typography newcolor="secondary" variant="h6">
        Top Jobs
      </Typography>
    </Wrapper>
  );
};

export default HeaderContent;
