import { use, useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data }) => {

    const [showItems, setShowItems] = useState(false);
    const handleClick=()=>{
        setShowItems(!showItems);
        console.log("click")
    }
    return(
        <div className=" mx-auto my-4 bg-gray-100 shadow-lg rounded-md p-4 w-230">
    {/* Header */}
    <div className="flex justify-between items-center cursor-pointer w-220" onClick={handleClick}>
        <span className="font-bold text-lg text-gray-800 ">
            {data.title} ({data.itemCards.length})
        </span>
        <span className="text-xl">⬇️</span>
    </div>

    {/* Item List */}
    <div className="mt-4">
        {showItems && <ItemList items={data.itemCards} />}
    </div>
</div>

    )
}
export default RestaurantCategory;


// import { useState } from "react";

// const RestaurantCategory = ({ data }) => {
//     const [isOpen, setIsOpen] = useState(false);

//     const toggleAccordion = () => setIsOpen(!isOpen);

//     return (
//         <div className="w-6/12 mx-auto my-4 bg-white rounded-md shadow-md">
//             {/* Header */}
//             <div
//                 className="flex justify-between items-center cursor-pointer bg-gray-100 px-4 py-3 rounded-t-md"
//                 onClick={toggleAccordion}
//             >
//                 <span className="font-semibold text-lg">{data.title} ({data.itemCards.length})</span>
//                 <span className="text-xl">{isOpen ? "⬆️" : "⬇️"}</span>
//             </div>

//             {/* Accordion Body */}
//             {isOpen && (
//                 <div className="px-4 py-2 divide-y divide-gray-200">
//                     {data.itemCards.map((item, index) => (
//                         <div key={index} className="py-2">
//                             <div className="text-md font-medium">{item.card.info.name}</div>
//                             <div className="text-sm text-gray-600">₹{item.card.info.price / 100}</div>
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default RestaurantCategory;







// import React, { useState } from "react";

// const ItemSection = ({ data }) => {
//     const [isOpen, setIsOpen] = useState(false);

//     const toggleDropdown = () => {
//         setIsOpen(!isOpen);
//     };

//     return (
//         <div className="w-full max-w-[600px] mx-auto my-3 bg-gray-100 shadow-lg p-4 rounded-md">
//             {/* Header */}
//             <div 
//                 className="flex justify-between items-center cursor-pointer"
//                 onClick={toggleDropdown}
//             >
//                 <span className="font-bold text-lg">
//                     {data.title} ({data.itemCards.length})
//                 </span>
//                 <span className="text-xl">
//                     {isOpen ? "⬆️" : "⬇️"}
//                 </span>
//             </div>

//             {/* Dropdown List */}
//             {isOpen && (
//                 <div className="mt-4 space-y-2">
//                     {data.itemCards.map((item, index) => (
//                         <div 
//                             key={index} 
//                             className="p-3 bg-white border rounded shadow-sm hover:bg-gray-50"
//                         >
//                             <p className="font-medium">{item.name}</p>
//                             <p className="text-sm text-gray-600">{item.description}</p>
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default ItemSection;
