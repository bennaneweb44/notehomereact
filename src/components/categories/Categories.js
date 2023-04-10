import { useRef, useState } from 'react';
import DATA_CATEGORIES from '../../data/categories'
import Modal from 'react-modal';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

const Categories = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [currentCategory, setCurrentCategory] = useState({});
    const [categories, setCategories] = useState(DATA_CATEGORIES);
    const [couleurs, setCouleurs] = useState([
        "#F5846C",
        "#B7DC88",
        "#63B4F4",
        "#CA87E7",
        "#FE82A6",
        "#FFDC59"
    ]);
    const nomCategorie = useRef('');
    const couleurCategorie = useRef('');

    const openModal = (category) => {
        setIsOpen(true);
        setCurrentCategory(category);
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    const afterOpenModal = () => {
        // references are now sync'd and can be accessed.
    }

    const validateColor = () => {
        if (couleurCategorie.current.value) {
            setIsOpen(false);
            //TODO: new data by Ref
        }
    }

    return (
        <>
            <section className="vh-50" >
                <div className="container py-5 h-100">
                    <div className="list-group">
                        {categories.map((category, index) => (
                            <button 
                                key={index}
                                className={`list-group-item list-group-item-action ${category.disabled ? "disabled" : ""}`}
                                style={{ backgroundColor: category.couleur }}
                                onClick={() => openModal(category)}
                                >
                                    {category.nom}
                            </button>
                        ))}
                    </div>
                </div>
                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <h5 className="mb-4">Modification</h5>
                    <input ref={nomCategorie} style={{ width: '100%' }} defaultValue={currentCategory.nom} />
                    <select ref={couleurCategorie} defaultValue={currentCategory.couleur} className='form-control w-100 mt-2 mb-2' name="couleurs" id="couleurs-select">
                        <option value="">------------------- Couleur -----------------</option>
                        {couleurs.map((couleur, index) => (
                            <option key={index} value={couleur}>{couleur}</option>
                        ))}
                    </select>
                    <label className='mt-2 mb-2 h-10 w-100' style={{ color: 'transparent', backgroundColor: currentCategory.couleur ? currentCategory.couleur : couleurCategorie.current.value }}>.</label>
                    <button className='btn w-100 btn-primary mt-2' onClick={() => validateColor()}>Valider</button>
                </Modal>
            </section>
        </>
    );
}

export default Categories;