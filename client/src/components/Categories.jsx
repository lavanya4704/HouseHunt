import "../styles/Categories.css";

function Categories(){

    return(

        <section className="categories">

            <h2>Browse by Category</h2>

            <div className="category-grid">

                <div className="category-card">

                    🏢

                    <h3>Apartment</h3>

                </div>

                <div className="category-card">

                    🏡

                    <h3>Villa</h3>

                </div>

                <div className="category-card">

                    🏠

                    <h3>Independent House</h3>

                </div>

                <div className="category-card">

                    🏬

                    <h3>Commercial</h3>

                </div>

            </div>

        </section>

    );

}

export default Categories;