import ProductCard from "@components/ProductCard";
import useFetchProducts from "@hooks/useFetchProducts";

const Orchestra = () => {
    const product = {
        category: 'orchestra',
        sort: '',
        search: ''
    }
    
    const products = useFetchProducts(product.category, product.sort, product.search);


    return(
        <div className="productsPage">
                    <h1>Orchestra</h1>
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

export default Orchestra;