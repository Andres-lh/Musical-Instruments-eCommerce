import ProductCard from '@components/ProductCard';
import useFetchProducts from '@hooks/useFetchProducts';



const Section = () => {

    const product = {
        category: 'featured',
        sort: '',
        search: ''
    }
    
    const products = useFetchProducts(product.category, product.sort, product.search);

    return(
        <div className="section">
            <h1>Featured items</h1>
            <div className="section-grid">
                {products.map((product) => {
                    return (
                        <ProductCard key={product.id} product={product} />
                    );
                })}
            </div>
        </div>
        
    )
}

export default Section;