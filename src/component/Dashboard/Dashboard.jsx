import React, { useState } from 'react';
import Products from './Products/Products';
import Sidebar from './Sidebar/Sidebar';
import products from './db/data'
import Card from './Card';
const Dashboard = () => {
   const [selectedCategory, setSelectedCategory] = useState(null);
   const handleChange = (event) => {
      setSelectedCategory(event.target.value);
   };

   function filteredData(products, selected) {
      let filteredProducts = products;


      // Applying selected filter
      if (selected) {
         filteredProducts = filteredProducts.filter(
            ({ skill }) =>
               skill === selected
         );
      }

      return filteredProducts.map(
         ({ skill }) => (
            <Card
               key={Math.random()}
               skill={skill}
            />
         )
      );
   }

   const result = filteredData(products, selectedCategory);

   return (
      <>
         <Sidebar handleChange={handleChange} />
         <Products result={result} />
      </>
   )
}

export default Dashboard
