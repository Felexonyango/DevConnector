import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook,faTelegram,faTwitter,faLinkedin} from "@fortawesome/free-brands-svg-icons";
const Contact = () => {
    return (
      <div>

     <ul>
               <a href="https://web.facebook.com/felix.onyango.3150">
  <FontAwesomeIcon icon={faFacebook} size="2x"className="conta" />
</a>
<a href="https://twitter.com/onyangofelex/" >
  <FontAwesomeIcon icon={faTwitter} size="2x" className="conta" />
</a>
<a href="https://www.telegram.com/Felex" >
  <FontAwesomeIcon icon={faTelegram} size="2x" className="conta"/>
</a>
<a href="https://www.linkedin.com/in/felex-onyango-912359201/">
  <FontAwesomeIcon icon={faLinkedin} size="2x" className="conta" />
</a>
</ul>

        </div>
    )
}

export default Contact