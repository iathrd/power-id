import Avatar from "@components/core/Avatar";
import Button from "@components/core/Button";
import Flex from "@components/core/Flex";
import Typography from "@components/core/Typography";
import MapPin from "@components/icon/MapPin";
import { Skill } from "@pages/Home/styled";
import { BlueBack, Content, UserInfo } from "./styled";

const Profile: React.FC = () => {
  const data = [
    "Phyton",
    "Laravel",
    "Golang",
    "JavaScript",
    "PHP",
    "HTML",
    "C++",
    "Kotlin",
    "Swift",
  ];

  const renderProfile = (): JSX.Element => {
    return (
      <UserInfo>
        <div className="avatar">
          <Avatar
            alt="user"
            size="large"
            src="https://source.unsplash.com/random"
          />
        </div>
        <div className="textContent">
          <Typography newcolor="primary" variant="h6">
            Louis Tomlinson
          </Typography>
          <Typography newcolor="primary" variant="subtitle1">
            Web Developer
          </Typography>
          <Flex className="location" component="div" justifyContent="start">
            <MapPin />
            <Typography newcolor="lightGrey" variant="subtitle1">
              Purwokerto, Jawa Tengah
            </Typography>
          </Flex>
          <Typography newcolor="lightGrey" variant="subtitle1">
            Freelancer
          </Typography>
          <div className="description">
            <Typography newcolor="lightGrey" variant="subtitle1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum erat orci, mollis nec gravida sed, ornare quis urna.
              Curabitur eu lacus fringilla, vestibulum risus at.
            </Typography>
          </div>
          <Button
            fullWidth
            label="Hire"
            size="medium"
            type="submit"
            variant="contained"
          />
          <div className="skill">
            <Typography newcolor="primary" variant="h6">
              Skill
            </Typography>
            <Flex
              alignItems="stretch"
              flexWrap="wrap"
              justifyContent="start"
              marginTop="20px"
              rowGap="20px"
            >
              {data.map((item, idx) => (
                <Skill component="div" key={idx}>
                  <Typography newcolor="secondary" variant="subtitle2">
                    {item}
                  </Typography>
                </Skill>
              ))}
            </Flex>
          </div>
        </div>
      </UserInfo>
    );
  };

  return (
    <>
      <BlueBack />
      <Content>{renderProfile()}</Content>
    </>
  );
};

export default Profile;