import { styled, Box } from "@mui/material";
import Typography from "@components/core/Typography";

const Wrapper = styled(Box)(({ theme }) => ({
  background: theme.palette.primary.main,
  paddingInline: "9.375rem",
  paddingBlock: "16px",
  [theme.breakpoints.down("md")]: {
    paddingInline: "2.25rem",
  },
}));

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
