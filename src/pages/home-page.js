import { getProducts } from "../api";
const HomePage ={
    render: async () => {
        const products = await getProducts();
        console.log(products);
        if (products.error){
            return `
                <div class="error">
                    ${products.error}
                </div>
            `
        }
        return `
            <ul class="products">
                ${products.map(product => `
                    <li>
                        <div class="product">
                            <a href='/#/product/${product.id}'>
                                <img src="${product.image}" alt="${product.name}" />
                            </a>
                        </div>
                    </li>
                ` )}
            </ul>
        `
    }
}

export default HomePage;