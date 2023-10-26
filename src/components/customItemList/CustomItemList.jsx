import { useState } from "react";
import { ItemOptionsModal } from "components/itemOptionsModal/ItemOptionsModal";


export const CustomItemList = ({ actual, onDelete, setItems }) => {

const [modalIsOpen, setIsOpen] = useState(false);

const [newPropertyName, setNewPropertyName] = useState('');
const [newPropertyValue, setNewPropertyValue] = useState('');
const [activeItem, setActiveItem] = useState({});


function openModal(item) {
    setActiveItem(item)
    setIsOpen(true);
}

function closeModal() {
    setIsOpen(false);
}

const itemDetails = (item) => {
    const keys = Object.keys(item).filter((value) => value !== "id");
    return ( <ul>
    {keys.map(k => (
        <li key={k}>
            <p>{k}: {item[k]}</p>
        </li>
    ))}
    </ul>
    )
}

    return (
        <ul>
            {actual.map(item => (
                <li key={item.id}>
                    <div>
                        {itemDetails(item)}
                        <ItemOptionsModal 
                        item={activeItem} 
                        modalIsOpen={modalIsOpen}  
                        closeModal={closeModal}
                        newPropertyName={newPropertyName}
                        setNewPropertyName={setNewPropertyName}
                        newPropertyValue={newPropertyValue}
                        setNewPropertyValue={setNewPropertyValue}
                        setItems={setItems} />
                        <div>
                            <button onClick={() => openModal(item)}>Open Modal</button>
                            <button onClick={() => onDelete(item.id)}>Delete</button>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
};