export const getProducts = async () => {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        return data;
    }

    catch(err){
        console.log(err);
        return {
            error: err.message
        }
    }
}

export const getProduct = async(id) => {
    try{
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json(); 
        return data;
    }
    catch(err){
        console.log(err);
        return {
            err
        }
    }
    
}

