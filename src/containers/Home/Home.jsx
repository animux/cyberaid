import Button from '../../components/Button/Button';
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShield, faLock, faUserLock, faDesktop, faMessage, faVideo, faUserGroup } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
    return (
        <div className="home">
            <section className="parent-content">
                <div className="content">
                    <div>
                        <h1 className="display-4">Get Help. Get Better</h1>
                        <h1 className="display-6">No matter what's troubling you, get the support you need, right now, right here</h1>
                        <Button color="rgba(217,3,11, 0.8)" text="Book an appointment"></Button>
                    </div>
                </div>
            </section>
            
            <section className='safety'>
                <div className="container text-center">
                    <div className="row">
                        <div className="col-md-3">
                            <FontAwesomeIcon icon={faShield} size='4x' />
                            <h4>Private & Confidential</h4>
                        </div>
                        <div className="col-md-3">
                            <FontAwesomeIcon icon={faLock} size='4x' />
                            <h4>Anonymous Discussions</h4>
                        </div>
                        <div className="col-md-3">
                            <FontAwesomeIcon icon={faUserLock} size='4x' />
                            <h4>24X7 round the clock support</h4>
                        </div>
                        <div className="col-md-3">
                            <FontAwesomeIcon icon={faDesktop} size='4x' />
                            <h4>Conducted 25 lakhs+ sessions</h4>
                        </div>
                    </div>

                </div>
            </section>

            <section className="help">
                <h1>Three steps CYBERAID can help you</h1>
                <div className="container">
                    <div className="row">
                        <div className="help-card col-md-4">1</div>
                        <div className="help-card col-md-4">2</div>
                        <div className="help-card col-md-4">3</div>
                    </div>

                    <div className="session">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="row">
                                    <div className="col-md-2">
                                        <FontAwesomeIcon icon={faMessage} size="3x" />
                                    </div>
                                    <div className="col-md-10">
                                        <h5>Online Chat Sessions</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4"></div>
                            <div className="col-md-4"></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home;