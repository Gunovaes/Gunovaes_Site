import Avatar from "../img/fotoprofile.jpg"
import SocialNetworks from "./SocialNetworks"
import InformationContainer from "./InformationContainer"

import "../styles/components/sidebar.sass"

const Sidebar = () => {
    return (
        <aside id="sidebar">
            <img src={Avatar} alt="Gustavo Novaes"/>
            <p className='title'>Dev. front-end / Suporte Técnico</p>
            <SocialNetworks/>
            <InformationContainer/>
            <br/>
            <a href='https://drive.google.com/file/d/1Y898DSWtajK-sUVK-ivUFH2ssekGws2B/view?usp=drive_link' target="blank" className='btn'>
                Download Currículo (.pdf)    
            </a> 
        </aside>
    ) 
}

export default Sidebar
