import { useEffect, useState } from "react";
import { nanoid } from 'nanoid';
import { Filter } from '../components/filter/Filter';

const BaseItems = () => {

    const [baseItems, setBaseItems] = useState(() => {
        const savedBaseItems = localStorage.getItem("baseItems") ?? [];
        if (savedBaseItems.length !== 0) {
          const parsedBaseItems = JSON.parse(savedBaseItems);
          return(parsedBaseItems);
        } else if (savedBaseItems.length === 0) {
          return ([]);
        };
    });
    const [filters, setFilter] = useState('');

    useEffect(() => {
        localStorage.setItem("baseItems", JSON.stringify(baseItems));
    }, [baseItems]);

    const createBaseItems = (values) => {
        const targetBaseItems = baseItems
          .map((count) => count.name.toLowerCase())
          .includes(values.name.toLowerCase());
      
          if (targetBaseItems) {
            alert(`${values.name} is already in base items list`);
          } else {
            values.id = nanoid();
            setBaseItems(prevState => [...prevState, values]);
          };  
      };

    const changeFilter = searchValue => {
        setFilter(searchValue.target.value);
    }
      
    const handleDelete = (baseItemId) => {
        setBaseItems(prevState => prevState.filter(item => item.id !== baseItemId));
        };
          
    const actualBaseItems = baseItems.filter(item => item.name.toLowerCase().includes(filters.toLowerCase()));

return (
    <>
        <Filter onFilter={changeFilter} initValue={filters}/>
    </>
);
};

export default BaseItems;