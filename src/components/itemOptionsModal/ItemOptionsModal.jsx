import Modal from 'react-modal';

export const ItemOptionsModal = ({ item, modalIsOpen, closeModal, newPropertyName, setNewPropertyName, newPropertyValue, setNewPropertyValue, setItems }) => {

    const keys = Object.keys(item).filter((value) => value !== "id");

    const handleSubmit = (evt, id) => {
        evt.preventDefault();
        console.log(id);
        const form = evt.currentTarget;
        const baseItem = form.elements.baseItem.value;
        const propertyName = form.elements.propertyName.value;
        const propertyValue = form.elements.propertyValue.value;
        console.log(baseItem);
        console.log(propertyName);
        console.log(propertyValue);
        setItems(prevState => prevState.map((item) => item.id === id ? { ...item, [baseItem]: `${propertyValue}${propertyName}` } : item))
      };

      const getBaseItem = () => {
        const savedBaseItems = JSON.parse(localStorage.getItem("baseItems"));
        return(
            <select defaultValue={'value1'} name="baseItem">
                {savedBaseItems.map(item => (
                    <option value={item.name} key={item.id} onChange={e => setNewPropertyName(item.units)}>{item.name}</option>
                ))}
            </select>
        );
      }

    return (
        <>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                ariaHideApp={false}
                contentLabel="Example Modal"
                >
                <button onClick={closeModal}>close</button>
                <div>
                    <ul>{keys.map(k => (
                        <li key={k}>
                            <p>{k}: {item[k]}</p>
                        </li>
                        ))}
                    </ul>
                </div>
                <form onSubmit={evt => handleSubmit(evt, item.id)}>
                    {getBaseItem()}
                    <input 
                    value={newPropertyName}
                    onChange={e => setNewPropertyName(e.target.value)}
                    name="propertyName"/>
                    <input 
                    value={newPropertyValue}
                    onChange={e => setNewPropertyValue(e.target.value)}
                    name="propertyValue"/>
                    <button type="submit">add property</button>
                </form>
            </Modal>
        </>
    )
};