import React, {useState} from "react";
const options = [
  { id: 1, day: "Monday" },
  { id: 2, day: "Tuesday" },
  { id: 3, day: "Wednesday" }
];
const breads = [
  { id:  1, bread: "tea bread" , price: 2 },
  { id: 2, bread: "sugar bread", price: 4 },
  { id: 3, bread: "brown bread", price:6 }
];
export default function Order({addTask}) {
  
  const [bread, setBread] = useState("");
  const [day, setDay] = useState("");
  const [price, setPrice] = useState(0);

  const handleChange = (event) => {
    setBread(event.target.value);
  };
  const handleChanges = (event) => {
    setDay(event.target.value)
  };
  const handlePrice = (event) => {
    setPrice(event.target.value)

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask([bread, day, price]);
    setBread('');
  }
 

  return (
    <div className="App">
        {console.log(bread)}
        {console.log(day)}

     <form className="mt-8 border-2 border-blue-500 p-4 max-w-2xl mx-auto" action="" onSubmit={handleSubmit}>
     <div className="mb-8">
        <select
          className="p-2 border-2 border-blue-500 rounded"
            value={bread}
            onChange={handleChange}
          >
            <option value="">--select bread--</option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.day}
              </option>
            ))}
          </select>
     </div>
     <div className="mb-8">
        <select
            className="p-2 border-2 border-blue-500 rounded"
            value={day}
            onChange={handleChanges}
          >
              <option value="">--select day--</option>
            {breads.map((option) => (
              <option key={option.value} value={option.value}>
                {option.bread}
              </option>
            ))}
          </select>
     </div>
     <div className="mb-8">
     <select
            className="p-2 border-2 border-blue-500 rounded"
            value={day}
            onChange={handlePrice}
          >
            <option value="">--select price--</option>
            {breads.map((option) => (
              <option key={option.price} value={option.price}>
             {option.bread} {option.price} ghc
              </option>
            ))}
          </select>
     </div>
     <button className="bg-blue-500 p-2 rounded-lg w-24 text-white">Add</button>
     </form>
     {console.log(price)}
    </div>
  );
}