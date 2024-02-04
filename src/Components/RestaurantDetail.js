import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const RestaurantDetail = () => {

    const [rest, setRest] = useState({});

    const params = useParams();

    const getRestId = inputString => {
        const parts = inputString.split('-');
        return parts.length > 1 ? parts.slice(-1)[0] : inputString;
    };

    const restaurantId = getRestId(params.id);

    useEffect(() => {
        fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.73390&lng=76.78890&restaurantId=${restaurantId}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
        })
    },[restaurantId])

    return (
        <div className="flex flex-wrap p-20">
            <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 mb-4">

                dgsgsd
                gsdgdsg


            </div>
        </div>
    );
}

export default RestaurantDetail;