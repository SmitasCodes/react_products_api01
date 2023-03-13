const productsServices = async (search) =>{
  if(search === undefined){
    search = ''
  }

  const response = await fetch('https://dummyjson.com/products/search?q='+ search)
  const products = await response.json();
  return products;
}

export default productsServices;
