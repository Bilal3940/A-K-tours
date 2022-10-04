import Form from 'react-bootstrap/Form';
// import {CgDetailsMore} from 'react-icons/cg';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import emailjs from '@emailjs/browser/'
import "./index.scss"
function Contact(){
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('gmail', 'template_y3kp91z', Form.current, 'Oa-UQcNhbqZSwxga6')
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }
  return(<>
  <div className='title-contact'>
        <h2>Contact Us</h2>
        <div className='underline'></div>
      </div>
      <div className="contact-page">
        <div className="review-contact">
          <p className='contact-tag' >
          Providing you with the best and easiest access to fulfill all your travel needs. You only need one click and let us handle the rest, worry-free
          </p>
          <div className="contact-form">
            <Form ref={Form} onSubmit={sendEmail}>
              <ul>
                <div className="input-field">
                <li className="half">
                    
                  <input placeholder='Name'  type="text" name="name" required />
 
                </li>
                <li className="half">
                   
                  <input
                  autoComplete='off'
                    placeholder='Email'
                    type="email"
                    name="email"
                    required
                  /> 
                </li>
                <li>
                   
                  <input
                  autoComplete='off'
                   placeholder='Subject'
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  
                  <textarea
                    autoComplete='off'
                    placeholder='Message'
                    rows="4"
                    name="message"
                    required
                  ></textarea>
                </li>
                </div>
                <li>
                  <button type="submit" className="flat-button">SEND</button>
                </li>

              </ul>
            </Form>
          </div>
        <div className="map-wrap">
          <MapContainer center={[33.7390023417459, 72.79684375768554]} zoom={15}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[33.7390023417459, 72.79684375768554]}>
              <Popup>Our Office is here, come over for a cup of coffee :)</Popup>
            </Marker>
          </MapContainer>
        </div>
        </div>
      </div>
      
  
  </>)
}
export default Contact;