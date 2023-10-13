import { BaseItem } from "components/baseItem/baseItem";
import { List } from "./itemList.styled";

export const ItemList = ({ actual, onDelete }) => {
    return (
        <List>
            {actual.map(item => (
                <li key={item.id}>
                    <BaseItem item={item} onDelete={onDelete}/>
                </li>
            ))}
        </List>
    );
};