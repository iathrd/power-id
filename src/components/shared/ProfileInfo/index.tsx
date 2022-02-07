import Avatar from "@components/core/Avatar";
import Button from "@components/core/Button";
import MapPin from "@components/icon/MapPin";
import Flex from "@components/core/Flex";
import Typography from "@components/core/Typography";
import { UserInfo } from "./styled";
import { Skill } from "@pages/Home/styled";

type ProfileInfoProps = {
  isUser?: boolean;
};

const ProfileInfo: React.FC<ProfileInfoProps> = ({ isUser }) => {
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
        {!isUser ? (
          <>
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
          </>
        ) : (
          <div className="userBtn">
            <Button
              fullWidth
              label="Simpan"
              size="medium"
              type="submit"
              variant="contained"
            />
            <Flex marginTop="15px">
              <Button
                fullWidth
                label="Batal"
                size="medium"
                type="submit"
                variant="outlined"
              />
            </Flex>
          </div>
        )}
      </div>
    </UserInfo>
  );
};

export default ProfileInfo;
