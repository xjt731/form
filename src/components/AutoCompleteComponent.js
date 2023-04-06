import { AutoComplete } from 'antd';
import { useState } from 'react';

export default function AutoCompleteComponent(){
   
  const [options, setOptions] = useState([]);
  
  const mockVal = (str, repeat = 1) => ({
    value: str.repeat(repeat),
  });

  const getPanelValue = (searchText) =>
    !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)];
  
  
    return (
        <AutoComplete
              options={options}
              style={{
                width: 200,
              }}
              onSearch={(text) => setOptions(getPanelValue(text))}
              placeholder="input here"
            />
    )
}
