import { useRef, useState } from 'react';
import Modal from 'react-modal';
import { HexColorPicker } from "react-colorful";
import DATA_CATEGORIES from '../../data/categories';

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
    // Ref
    const nomCategorie = useRef('');
    const disabledCategorie = useRef('');

    const [color, setColor] = useState("#aabbcc");
    const [disabled, setDisabled] = useState(currentCategory.id > 0 ? currentCategory.disabled: false)

    const openModal = (category = {}) => {
        setIsOpen(true);
        setCurrentCategory(category);
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    const afterOpenModal = () => {
        // references are now sync'd and can be accessed.
        if (currentCategory.id > 0) {
            setColor(currentCategory.couleur);
        } else {
            setDisabled(false);
        }
    }

    const handleChangeChecked = () => {
        setDisabled(disabledCategorie.current.checked)
    }

    const validateCategory = (e) => {
        e.preventDefault();

        if (!nomCategorie.current.value) {
            alert('Le nom de la catégorie est obligatoire.');
        } else {
            let updatedCategory = {
                id: currentCategory.id,
                nom: nomCategorie.current.value,
                couleur: color,
                disabled: disabled
            }
            const copyCategories = [...categories];
            if (undefined === currentCategory.id) {
                // Add
                updatedCategory.id = new Date();
                copyCategories.push(updatedCategory)
            } else {
                // update
                let foundIndex = categories.findIndex(x => x.id === updatedCategory.id);
                copyCategories[foundIndex] = updatedCategory;
            }
            setCategories(copyCategories)
            setIsOpen(false);
        }
    }

    const removeCategory = (e) => {
        e.preventDefault();

        const copyCategories = [...categories];
        let foundIndex = categories.findIndex(x => x.id === currentCategory.id);
        copyCategories.splice(foundIndex, 1)
        setCategories(copyCategories)
        setIsOpen(false);
    }

    return (
        <>
            <section className="vh-50" >
                <div className="container py-5 h-100">
                    <div className="list-group">
                        <div className='text-right'>
                            <button className='col-1 btn btn-primary mb-3' style={{ float: 'right' }} onClick={( openModal )}>Ajout</button>
                        </div>
                        {categories.map((category, index) => (
                            <button 
                                key={index}
                                className={`list-group-item list-group-item-action ${category.disabled ? "bg-disabled" : ""}`}
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
                    <h5 className="mb-4">{currentCategory.id > 0 ? 'Modification' : 'Ajout'}</h5>
                    <input ref={nomCategorie} style={{ width: '100%' }} defaultValue={currentCategory.nom} />
                    <HexColorPicker style={{ width: '100%' }} className='mt-2' color={color} onChange={ setColor } />
                    <label className='mt-2 mb-2 h-10 w-100' style={{ color: 'transparent', backgroundColor: color }}>.</label>

                    <label className="switch">
                        <input ref={disabledCategorie} type="checkbox" onChange={ handleChangeChecked } defaultChecked={currentCategory.id > 0 ? currentCategory.disabled : false} />
                        <span className="slider round"></span>
                    </label>
                    <span>Désactivé</span>

                    <button className='btn w-100 btn-primary mt-2' onClick={( validateCategory )}>Valider</button>
                    {currentCategory.id > 0 &&
                        <button className='btn w-100 btn-danger mt-2' onClick={( removeCategory )}>Supprimer</button>
                    }
                </Modal>
            </section>
        </>
    );
}

export default Categories;