import { Link } from "react-router-dom";
import teamData from "../data/teamData.json";

// Type of each team member (based on your JSON)
interface TeamMember {
    id: number;
    name: string;
    role: string;
    image: string;
    facebook: string;
    twitter: string;
    instagram: string;
    linkedin: string;
}

// Props type
interface TeamProps {
    limit?: number;
}

// Force Vite glob imports to be typed as strings
const teamImages = import.meta.glob("../assets/images/team/**/*", {
    eager: true,
    import: "default",
}) as Record<string, string>;

const Team: React.FC<TeamProps> = ({ limit }) => {
    const filteredTeam: TeamMember[] = limit
        ? (teamData as TeamMember[]).slice(0, limit)
        : (teamData as TeamMember[]);

    return (
        <>
            {filteredTeam.map((member) => {
                const imgSrc =
                    teamImages[`../assets/images/team/${member.image}`] ?? "";

                return (
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6" key={member.id} >
                        <div className="team-data zoom_in">
                            <div className="image-team-data">
                                <img src={imgSrc} alt={member.name} />
                            </div>

                            <div className="box-content">
                                <Link to="/SingleTeam" className="data-team">
                                    {member.name}
                                </Link>
                                <p className="box-text">{member.role}</p>

                                <div className="th-social">
                                    <a href={member.facebook} target="_blank">
                                        <i className="ri-facebook-fill"></i>
                                    </a>
                                    <a href={member.twitter} target="_blank">
                                        <i className="ri-twitter-x-fill"></i>
                                    </a>
                                    <a href={member.instagram} target="_blank">
                                        <i className="ri-instagram-line"></i>
                                    </a>
                                    <a href={member.linkedin} target="_blank">
                                        <i className="ri-linkedin-fill"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default Team;
