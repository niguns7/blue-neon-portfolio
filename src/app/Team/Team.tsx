import Image from "next/image";
import bgImg from "./../../assets/team-bg.jpg";
import photo1 from "./../../assets/team-1.jpg";
import photo2 from "./../../assets/team-2.jpg";
import photo3 from "./../../assets/team-3.jpg";
import photo4 from "./../../assets/team-4.jpg";
import { FaFacebookF , FaInstagram , FaYoutube} from "react-icons/fa";

interface TeamMember {
  id: number;
  name: string;
  designation: string;
  facebook: string;
  instagram: string;
  photo: StaticImageData;
}

const teamData: TeamMember[] = [
  {
    id: 1,
    name: "lorem ipsum",
    designation: "videographer",
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    photo: photo1,
  },
  {
    id: 2,
    name: "lorem ipsum",
    designation: "videographer",
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    photo: photo2,
  },
  {
    id: 3,
    name: "lorem ipsum",
    designation: "videographer",
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    photo: photo3,
  },
  {
    id: 4,
    name: "lorem ipsum",
    designation: "videographer",
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    photo: photo4,
  },
];

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => {
  return (
    <div className="relative group">
      {/* Member Image */}
      <div className="relative overflow-hidden h-[390px] w-[290px]">
        <Image
          src={member.photo}
          alt={member.name}
          layout="fill"
          objectFit="cover"
          className="transition duration-500 ease-in-out transform group-hover:scale-105"
        />
        {/* Background Image on Hover */}
        {/* <div
        className="absolute bottom-0 left-0 right-0 h-1/4 bg-no-repeat bg-cover opacity-0 group-hover:opacity-80 transition-opacity duration-500 ease-in-out"
      ></div> */}
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out flex flex-col items-center gap-1">
        <h4 className="text-xl font-semibold text-white">{member.name}</h4>
        <p className="text-md text-gray-300">{member.designation}</p>
        <div className="flex justify-center mt-2">
          <a href={member.facebook} className="text-white mx-2">
            <i> <FaFacebookF size={20} color="white"/></i>
          </a>
          <a href={member.instagram} className="text-white mx-2">
          <i> <FaInstagram size={20} color="white"/></i>
          </a>
          <a href={member.instagram} className="text-white mx-2">
          <i> <FaYoutube size={20} color="white"/></i>
          </a>
        </div>
      </div>
    </div>
  );
};

const Team = () => {
  return (
    <div className="relative h-screen w-full">

      <div className="absolute inset-0 z-0 h-full w-full">
        <Image
          src={bgImg}
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>

      <div className=" flex flex-col items-center justify-start  h-full w-full">
        <div className="absolute z-10 p-4 w-4/5 mt-16 mb-28">

          <div className="flex flex-col gap-1 w-1/3">
            <div className="flex flex-col">
              <label className="text-md font-semibold text-white mb-4 font-play">
                NICE TO MEET
              </label>
              <h1 className="text-4xl font-bold text-white mb-4 font-sans">
                OUR TEAM
              </h1>
              <span className="border border-b-4 rounded-md border-secondary w-1/4 mt-2 mb-5 "></span>
            </div>
          </div>

          <div className="flex mt-5">
            {teamData?.map((item, index) => {
              const marginTop =
                index === 1
                  ? "-60px"
                  : index === 2
                  ? "-120px"
                  : index === 3
                  ? "-180px"
                  : "0px";
              return (
                <div key={item.id} style={{ marginTop }}>
                  <TeamMemberCard member={item} />
                </div>
              );
            })}
          </div>

          <div className="flex justify-end mt-5">
            <button className="primary-btn inline-block font-bold text-white uppercase tracking-widest relative z-10 px-8 py-3 transition-all duration-700">
              meet our team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
