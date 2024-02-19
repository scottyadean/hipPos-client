

import {useState} from 'react'
import { AutoComplete } from 'antd';
import { useSelector } from 'react-redux';

export default function ItemKeyWordSearch() {

    const items = useSelector((state) => state.items);
    const [value, setValue] = useState('');
    const data = items.rows.map((r)=> { return { value: r.name, id: r._id} });
    
    const [options, setOptions] = useState(data);
    const [anotherOptions, setAnotherOptions] = useState([]);
    const searchValue = (term) => !term ? [] : [...data.filter(d=>d.value.toLowerCase().includes(term.toLowerCase()))];
    
        const onSelect = (data, obj) => {
            console.log('onSelect', data, obj);
        };
        
        const onChange = (data) => {
            setValue(data);
        };

    return (
    <div>ItemKeyWordSearch


<AutoComplete
        options={options}
        style={{
          width: 200,
        }}
        onSelect={onSelect}
        onSearch={(text) => setOptions(searchValue(text))}
        placeholder="input here"
      />

<AutoComplete
        value={value}
        options={anotherOptions}
        style={{
          width: 200,
        }}
        onSelect={onSelect}
        onSearch={(text) => setAnotherOptions(getPanelValue(text))}
        onChange={onChange}
        placeholder="control mode"
      />

    </div>
  )
}
