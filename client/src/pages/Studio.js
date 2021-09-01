import ProductCard from "@components/ProductCard";
import useFetchProducts from "../hooks/useFetchProducts";

const Studio = () => {
    const product = {
        category: 'studio',
        sort: '',
        search: ''
    }
    
    const products = useFetchProducts(product.category, product.sort, product.search);

    return(
        <div className="productsPage">
                    <h1>Studio</h1>
                    <div className="productsPage_container">
                        {products.map((product) => {
                            return (
                                <ProductCard key={product.id} product={product} />
                            );
                        })}
                    </div>
                </div>
    )
}

export default Studio;