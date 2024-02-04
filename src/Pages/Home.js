import React, { useState, useEffect} from "react";
import RestaurantInfo from "../Components/RestaurantInfo";

const Home = () => {

    const [rests, setRests] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {

        fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.73390&lng=76.78890&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        .then((res) => res.json())
        .then((data) => {
            
            const rest = data.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            setRests(rest);
            setLoading(false)
        })
        
    },[])

    return (
        <>
            { loading ? <h1>Loading...</h1> 
                : 

                <div className="flex flex-wrap p-20">
                    { rests.map((rest) => 
                        <div key={rest.info.id} className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 mb-4">
                            <RestaurantInfo resturant={rest.info} key={rest.info.id} /> 
                        </div>
                    )}
                </div>
            
            }
        </>
    );
}

export default Home;