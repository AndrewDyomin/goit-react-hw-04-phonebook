import { ContactCard, DelBtn } from "./baseItem.styled";

export const BaseItem = ({ item, onDelete }) => {
    return (
        <ContactCard>
            <p>{item.name}: {item.number}</p>
            <DelBtn>
                <button onClick={() => onDelete(item.id)}>Delete</button>
            </DelBtn>
        </ContactCard>
    );
};