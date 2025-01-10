"use client"; 
import { useState } from "react"; 

export default function Home() {   
  const data = [     
    [6, 1],     
    [4, 3],     
    [5, 1],     
    [3, 4],     
    [1, 1],     
    [3, 4],     
    [1, 2],   
  ];    

  const [copyData, setCopyData] = useState([...data]);   
  const [inputValue, setInputValue] = useState("");    

  const sorting_asc = () => {     
    const sortedData = [...copyData].sort((a, b) => {       
      const sumA = a[0] + a[1];       
      const sumB = b[0] + b[1];       
      if (sumA === sumB) {         
        return a[0] - b[0];       
      }       
      return sumA - sumB;     
    });     
    setCopyData(sortedData);   
  };   

  const sorting_desc = () => {     
    const sortedData = [...copyData].sort((a, b) => {       
      const sumA = a[0] + a[1];       
      const sumB = b[0] + b[1];       
      if (sumA === sumB) {         
        return b[0] - a[0];       
      }       
      return sumB - sumA;     
    });     
    setCopyData(sortedData);   
  };    

  const reverse = () => {     
    const sortedData = [...copyData].reverse();     
    setCopyData(sortedData);   
  };   

  const RemoveDuplicate = () => {     
    const zzz = [];        

    const sortedData = [...copyData].sort((a, b) => {       
      if (a[0] > a[1]) {         
        const temp = a[0];         
        a[0] = a[1];         
        a[1] = temp;       
      }       
      if (b[0] > b[1]) {         
        const temp = b[0];         
        b[0] = b[1];         
        b[1] = temp;       
      }          

      const sumA = a[0] + a[1];       
      const sumB = b[0] + b[1];       
      if (sumA === sumB) {         
        return b[0] - a[0];       
      }       
      return sumB - sumA;     
    });        

    const seen = new Set<string>();        

    for (let i = 0; i < sortedData.length; i++) {       
      const pairString = JSON.stringify(sortedData[i]);              
      if (!seen.has(pairString)) {         
        seen.add(pairString);         
        zzz.push(sortedData[i]);       
      }     
    }        

    setCopyData(zzz);   
  };      

  const RemoveCertainNumber = (a: number) => {     
    const sortedData = [...copyData];     
    const result = [];     
    for (let index = 0; index < sortedData.length; index++) {       
      if (sortedData[index][0] + sortedData[index][1] !== a) {         
        result.push(sortedData[index]);       
      }     
    }     
    setCopyData(result);   
  };   

  const reset = () => {     
    setCopyData(data);   
  };   

  const countDuplicates = () => {     
    let double = 0;     
    for (let index = 0; index < data.length; index++) {       
      if (data[index][0] === data[index][1]) {         
        double++;       
      }     
    }     
    return double;   
  };    

  const duplicateCount = countDuplicates();   

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {     
    setInputValue(e.target.value);   
  };   

  return (     
    <div className="flex flex-col justify-center items-center gap-[1rem] my-[1rem]">       
      <div className="border-2  p-[1rem]">         
        <h1>Source</h1>         
        <div className="flex">           
          {data.map((item, index) => (             
            <div key={index} className="px-2">{`[${item.join(", ")}]`}</div>           
          ))}         
        </div>       
      </div>        

      <div className="border-2  p-[1rem] mt-4">         
        <h1>Duplicated</h1>         
        <p>{`There are ${duplicateCount} duplicate entries.`}</p>       
      </div>        

      <div className="flex gap-[1rem]">         
        {copyData.map((item, idx) => (           
          <div key={idx}>             
            <div className="flex flex-col border-2 p-[1rem] gap-[1rem]">               
              <div>{item[0]}</div>               
              <div>                 
                <hr></hr>               
              </div>               
              <div>{item[1]}</div>               
              <div></div>             
            </div>           
          </div>         
        ))}       
      </div>        

      <div className="flex justify-center gap-[1rem]">         
        <div>           
          <button             
            onClick={sorting_asc}             
            className="bg-blue-800 p-[1rem] rounded-lg"           
          >             
            Sort Asc           
          </button>         
        </div>         
        <div>           
          <button             
            onClick={sorting_desc}             
            className="bg-blue-800 p-[1rem] rounded-lg"           
          >             
            Sort Desc           
          </button>         
        </div>         
        <div>           
          <button onClick={reverse} className="bg-blue-800 p-[1rem] rounded-lg">             
            Flip           
          </button>         
        </div>         
        <div>           
          <button onClick={RemoveDuplicate} className="bg-blue-800 p-[1rem] rounded-lg">             
            Remove dup           
          </button>         
        </div>         
        <div>           
          <button onClick={reset} className="bg-blue-800 p-[1rem] rounded-lg">             
            Reset           
          </button>         
        </div>       
      </div>        

      <div>         
        <input           
          id="input"           
          type="text"           
          placeholder="input number"           
          className="py-[0.3rem] px-[1rem] text-black"           
          value={inputValue}           
          onChange={handleInputChange}         
        />       
      </div>        

      <div>         
        <button           
          onClick={() => RemoveCertainNumber(Number(inputValue))}           
          className="bg-blue-800 p-[1rem] rounded-lg"         
        >           
          Remove         
        </button>       
      </div>     
    </div>   
  ); 
}
