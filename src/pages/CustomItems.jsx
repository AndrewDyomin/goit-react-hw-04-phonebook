import { useState, useEffect } from "react";
import { nanoid } from 'nanoid';
import { AddCustomItem } from "components/newCustomItem/NewCustomItem";
import { CustomItemList } from "components/customItemList/CustomItemList";

const CustomItems = () => {
  
  const [items, setItems] = useState(() => {
    const savedItems = localStorage.getItem("customItems") ?? [];
    if (savedItems.length !== 0) {
      const parsedItems = JSON.parse(savedItems);
      return(parsedItems);
    } else if (savedItems.length === 0) {
      return ([]);
    };
  });

    const actualItems = items;
    
    useEffect(() => {
        localStorage.setItem("customItems", JSON.stringify(items));
    }, [items]);

    const createCustomItems = (values) => {
        const targetBaseItems = items
          .map((count) => count.name.toLowerCase())
          .includes(values.name.toLowerCase());
      
          if (targetBaseItems) {
            alert(`${values.name} is already in base items list`);
          } else {
            values.id = nanoid();
            delete values.initialFields;
            setItems(prevState => [...prevState, values]);
          };  
      };

      const handleDelete = (baseItemId) => {
        setItems(prevState => prevState.filter(item => item.id !== baseItemId));
        };
        

return (
    <div>
        <h1>Your custom items</h1>
        <AddCustomItem create={createCustomItems} />
        <CustomItemList actual={actualItems} onDelete={handleDelete} setItems={setItems} />
    </div>
);
};

export default CustomItems;