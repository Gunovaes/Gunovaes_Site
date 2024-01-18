import { FaLinkedin, FaGithub, FaInstagram} from "react-icons/fa"

import "../styles/components/socialnetworks.sass"

const socialNetworks = [
    {name: "linkedin", icon: <FaLinkedin/>, href: "https://www.linkedin.com/in/gustavo-novaes-0074a0203/"},
    {name: "github", icon: <FaGithub/>, href: "https://github.com/Gunovaes"},
    {name: "instagram", icon: <FaInstagram/>, href: "https://www.instagram.com/gunovaes/"} 
]

const SocialNetworks = () => {
  return (
    <section id="social-networks">
        {socialNetworks.map((network) => (
            <a href={network.href} target="blank" className="social-btn" id={network.name} key={network.name}>
                {network.icon}
            </a>
        ))}
    </section>
  )
}

export default SocialNetworks
