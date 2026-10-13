import { Link } from "react-router-dom";
import teamData from "../data/teamData.json";

// Team Member Type
interface TeamMember {
    id: number;
    name: string;
    role: string;
    image: string;
    facebook: string;
    instagram: string;
    twitter: string;
    linkedin: string;
}

// Dynamic image import (typed)
const images = import.meta.glob("../assets/images/team/**/*", {
    eager: true,
    import: "default",
}) as Record<string, string>;

const TeamSec2: React.FC = () => {
    const teamList = teamData as TeamMember[];

    return (
        <div className="testimonial-main team-sec-deta row">
            {teamList.map((member) => {
                const imgSrc =
                    images[`../assets/images/team/${member.image}`] || "";

                return (
                    <div
                        key={member.id}
                        className="col-xl-3 col-lg-4 col-md-6 col-sm-6"
                    >
                        <div className="team-card zoom_in">
                            <div className="team-image">
                                <img src={imgSrc} alt={member.name} />
                            </div>

                            <div className="team-content">
                                <div className="team-item-socials">
                                    <span className="socials-trigger-wrapper">
                                        <i className="ri-share-line"></i>
                                    </span>

                                    <div className="social-team">
                                        <div className="social-icon">
                                            <a
                                                href={member.facebook}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="link"
                                            >
                                                <i className="ri-facebook-fill"></i>
                                            </a>

                                            <a
                                                href={member.instagram}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="link"
                                            >
                                                <i className="ri-instagram-line"></i>
                                            </a>

                                            <a
                                                href={member.twitter}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="link"
                                            >
                                                <i className="ri-twitter-x-fill"></i>
                                            </a>

                                            <a
                                                href={member.linkedin}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="link"
                                            >
                                                <i className="ri-linkedin-fill"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <Link to="/SingleTeam" className="name">
                                    {member.name}
                                </Link>
                                <span>{member.role}</span>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default TeamSec2;
