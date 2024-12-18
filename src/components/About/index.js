import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import {useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';
import { MapContainer, Marker, Popup } from 'react-leaflet';

const About = () => {    
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {        
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)        
        return () => {
                    clearTimeout(timeoutId)
                }
    }, [])
    
    return (   
        <>    
    <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters   
              letterClass={letterClass}          
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
                </h1>
                <p>
                My passion is to create and design things, so it comes with web development for me to learn from challenges everyday and learn new things. Also, I like to organize and get things in order and I am looking forward to working with a company where I can apply my skills, experience and contribute to the company's success. Lastly, I'm quite confident and I will try my best, every day. 
                </p>
        </div>
        <div className="info-map">
            <p></p>
        </div>
        {/* <div className='map-wrap'>
            <MapContainer center={[]} zoom={13}>
                    <TitleLayer url="https://{s}.title.openstreetmap.org/{z}/{x}{y}.png"/>
                    <Marker position={[]}>
                        <Popup>Location where i</Popup>
                    </Marker>

            </MapContainer>
        </div> */}
        <div className='text-zone'>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    {/* <div className='face1'>
                        <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                    </div> */}
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color="#EDF81D" />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D" />
                    </div>
                </div>
            </div>
        </div>
        <Loader type="pacman" />
        </> 
    )
}

export default About