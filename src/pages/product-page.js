import { getProduct } from "../api"
import {getUrlRequest} from '/util.js'

const ProductPage = {
    render: async() => {
        const request = getUrlRequest();
        const product = await getProduct(request.id);
        if(product.error){
            return `
                <div>
                ${product.error}
                </div>
            `
        }
        console.log(product);
        return `
            <div class="content">
                <div class="back-to-result">
                    <a href='/#/'>Back to result</a>
                </div>
                <div class="product-details">
                    <div class="product-image">
                        <img src="${product.image}" alt="${product.name}" />
                    </div>
                </div>    
            </div>
        `
    }
}

export default ProductPage