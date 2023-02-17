import layer7 from "../assets/images/layer7.png";
import unifox from "../assets/images/unifox.png";
import teamlog from "../assets/images/teamlog.png";
import nefus from "../assets/images/nefus.png";
import emotion from "../assets/images/emotion.png";
import ClubData from "~~/interfaces/club.interface";

const clubData: ClubData = {
  layer7: {
    name: "Layer7",
    description:
      "Layer7은 선린인터넷고등학교가 서울시 최초 IT 특성화고등학교로 지정된 2001년부터 학교와 함께해왔습니다. 보안에 관심 있는 학생들이 모여 동아리를 만들고, 해킹이라는 흔치 않은 분야에서 서로가 서로를 도우며 보안을 공부해왔습니다. 체계적인 커리큘럼과 동아리 부원들의 열정, 책임감은 22년이라는 역사를 뒷받침해왔습니다.",
    curriculum: "해킹",
    image: layer7,
    site: "https://layer7.kr",
    facebook: "https://www.facebook.com/letsgolayer7/",
  },
  unifox: {
    name: "Unifox",
    description: "asdf",
    curriculum: "asdf",
    image: unifox,
    site: "https://unifox.kr",
    facebook: "https://www.facebook.com/UnifoxToTheWorld",
  },
  teamlog: {
    name: "Teamlog",
    description: "asdf",
    curriculum: "asdf",
    image: teamlog,
    site: "https://teamlog.kr",
    facebook: "https://www.facebook.com/sunrintog",
  },
  nefus: {
    name: "Nefus",
    description: "asdf",
    curriculum: "asdf",
    image: nefus,
    site: "https://nefus.kr",
    facebook: "https://www.facebook.com/sunrinefus",
  },
  emotion: {
    name: "Emotion",
    description: "asdf",
    curriculum: "asdf",
    image: emotion,
    site: "https://ernotion.kr",
    facebook: "https://www.facebook.com/sunrinemotion",
  },
};

export default clubData;
