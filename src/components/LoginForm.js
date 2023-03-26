import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons'
import home from '../images/home.jpg';

function LoginForm() {
  return (
    <section className="vh-100" style={{backgroundColor: '#DC649E'}}>
        <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col col-xl-10">
                    <div className="card" style={{borderRadius: '1rem'}}>
                        <div className="row g-0">
                            <div className="col-md-6 col-lg-5 d-none d-md-block">
                                <img src={home} alt="login form" className="img-fluid" style={{borderRadius: '1rem 0 0 1rem'}} />
                            </div>
                            <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                <div className="card-body p-4 p-lg-5 text-black">
                                    <form>
                                        <div className="d-flex align-items-center mb-3 pb-1" style={{color: "#DC649E", fontSize: "1.8em"}}>
                                            <FontAwesomeIcon icon={faPen} style={{ marginRight: "0.2em" }} />
                                            <span className="h1 fw-bold mb-0">Notehome</span>
                                        </div>
                                        <h5 className="fw-normal mb-3 pb-3" style={{letterSpacing: "1px"}}>Se connecter pour ouvrir une session</h5>
                                        <div className="form-outline mb-4">
                                            <input type="email" id="form2Example17" className="form-control form-control-lg" placeholder='Adresse email' />
                                        </div>
                                        <div className="form-outline mb-4">
                                            <input type="password" id="form2Example27" autoComplete='false' className="form-control form-control-lg" placeholder='Mot de passe' />
                                        </div>
                                        <div className="pt-1 mb-4">
                                            <button className="btn btn-dark btn-lg btn-block" type="button" style={{ backgroundColor: "#DC649E", width: "100%" }} >Connexion</button>
                                        </div>
                                        <a className="small text-muted" href="#!">Mot de passe oublié ?</a>
                                        <p className="mb-5 pb-lg-2" style={{color: "#393f81"}} >Pase encore de compte ? <a href="https://bennaneweb.fr/#contact" target="_blank" rel="noreferrer"
                                            style={{color: "#393f81"}} >Me contacter</a>
                                        </p>
                                        <a href="#!" className="small text-muted">Conditions d'utilisation.</a>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default LoginForm;