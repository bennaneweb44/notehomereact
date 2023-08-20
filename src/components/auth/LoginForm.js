import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons'

// packages
import { useEffect, useId } from "react";
import { Field, Form, Formik } from "formik";
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";

// components
import home from '../../images/home.jpg';
import { signInUser } from '../../services/bw/auth';
import { useSelector, useDispatch } from 'react-redux';
import { setIsLoading, setIsNotLoading } from '../../store/slices/loadingSlice';

const LoginForm = () => {
    const id = useId();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.loading.value);

    useEffect(() => {
        const loggedInUser = localStorage.getItem("token");
        if (loggedInUser) {
            navigate("/");
        }
    }, [navigate]);

    const contactFormSchema = Yup.object().shape({
		username: Yup.string().required(),
        password: Yup.string().required(),
	});

    const handleSubmitForm = async (values) => {
        dispatch(setIsLoading());

        await signInUser({
            username: values.username,
            password: values.password
        });

        if (localStorage.getItem('token')) {
			navigate("/");
		} else {
            //TODO: mesage d erreur de connexion ici
            console.error('oups...')
        }

        dispatch(setIsNotLoading());
	}

    return (
        <section className="vh-100" >
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

                                        <div className="d-flex align-items-center mb-3 pb-1" style={{color: "#E19180", fontSize: "1.8em"}}>
                                            <FontAwesomeIcon icon={faPen} style={{ marginRight: "0.2em" }} />
                                            <span className="h1 fw-bold mb-0">Notehome</span>
                                        </div>
                                        <h5 className="fw-normal mb-3 pb-3" style={{letterSpacing: "1px"}}>Se connecter pour ouvrir une session</h5>

                                        <Formik
                                            initialValues={{
                                                username: '',
                                                password: '',
                                                remember: false
                                            }}
                                            onSubmit={ handleSubmitForm }
                                            validationSchema={ contactFormSchema }
                                        >
                                            {
                                                ({ errors, touched, values }) => (
                                                    <Form>
                                                        <div className="form-outline mb-4">
                                                            <Field
                                                                type='text'
                                                                id={`${id}-username`}
                                                                style={{borderColor: errors.username && touched.username ? "darkred" : "#ccc"}}
                                                                name='username'
                                                                placeholder='Utilisateur'
                                                                className="form-control form-control-lg" />
                                                        </div>
                                                        <div className="form-outline mb-4">
                                                            <Field
                                                                type='password'
                                                                id={`${id}-password`}
                                                                style={{borderColor: errors.password && touched.password ? "darkred" : "#ccc"}}
                                                                name='password'
                                                                autoComplete='false'
                                                                placeholder='Mot de passe'
                                                                className="form-control form-control-lg" />
                                                        </div>

                                                        <div className="pt-1 mb-4">
                                                            <button
                                                                type="submit"
                                                                disabled={errors.username || errors.password || '' === values.username || '' === values.password || loading}
                                                                className="btn btn-dark btn-lg btn-block"
                                                                style={{ backgroundColor: "#E19180", width: "100%" }}
                                                            >{loading ? 'Patientez ...' : 'Connexion'}</button>
                                                        </div>
                                                    </Form>
                                                )
                                            }
                                        </Formik>

                                        <a className="small text-muted" href="#!">Mot de passe oublié ?</a>
                                        <p className="mb-5 pb-lg-2" style={{color: "#393f81"}} >Pase encore de compte ? <a href="https://aziz-bennane.fr/#contact" target="_blank" rel="noreferrer"
                                            style={{color: "#393f81"}} >Me contacter</a>
                                        </p>
                                        <a href="#!" className="small text-muted">Conditions d'utilisation.</a>
                                        
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