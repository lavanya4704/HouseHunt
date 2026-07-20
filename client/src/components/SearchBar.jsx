import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../pages/styles/SearchBar.css";

function SearchBar() {

    const [search, setSearch] = useState("");

    const navigate = useNavigate();

    const handleSearch = () => {

        if(search.trim() !== ""){

            navigate(`/properties?search=${search}`);

        }else{

            navigate("/properties");

        }

    };

    return (

        <div className="search-container">

            <input

                type="text"

                placeholder="Search by City or Location"

                value={search}

                onChange={(e)=>setSearch(e.target.value)}

            />

            <button onClick={handleSearch}>

                🔍 Search

            </button>

        </div>

    );

}

export default SearchBar;