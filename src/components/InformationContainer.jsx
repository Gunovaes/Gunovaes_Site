import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai"

import "../styles/components/informationcontainer.sass"

const InformationContainer = () => {
  return (
    <section id='information'>
        <div className='info-card'>
            <AiFillPhone id="phone-icon"/>
            <div>
                <a href="https://api.whatsapp.com/send?phone=5511996175768" target="blank">
                    <h3>Telefone</h3>
                    <p>(11) 99617-5768</p>
                </a>
            </div>
        </div>
        <div className='info-card'>
            <AiOutlineMail id="email-icon"/>
            <div>
                <a href="mailto:gunovaes16@gmail.com" target="blank">
                    <h3>E-mail</h3>
                    <p>gunovaes16@gmail.com</p>
                </a>
            </div>
        </div>
        <div className='info-card'>
            <AiFillEnvironment id="pin-icon"/>
            <div>
                <a href="https://www.google.com/maps/search/?api=1&query=Rua Reinaldo Porchat Francisco Morato" target="blank">
                    <h3>Localização</h3>
                    <p>Francisco Morato - SP</p>
                </a>
            </div>
        </div>
    </section>
  )
}

export default InformationContainer


