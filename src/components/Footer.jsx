import { FaEnvelope, FaLinkedin } from "react-icons/fa"
import team from "../assets/entarewebimages/team.jpg"
import logo2 from '../assets/entarewebimages/logo2.png'

function Footer() {
    return (
        <div>
            <div className="team_section">
                <div className='team'>
                    <h1>Meet the Team</h1>
                    <img src={team}></img>
                    <p>Sovereign Nature Identifier is a unique identifier that can be connected to any piece of nature. Its main purpose is to bridge identified nature with the digital world. Connected to the digital infrastructure objects of nature can get new properties, functions, and representations, all thanks to one simple identifier.</p>
                </div>

                <div className='Footer'>
                    <div className='Footer_content'>
                        <img src={logo2}></img>
                        <h3>All rights Reserved</h3>
                        <div class='socials'>
                            <FaLinkedin className='linkedin' />
                            <FaEnvelope className='linkedin' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer