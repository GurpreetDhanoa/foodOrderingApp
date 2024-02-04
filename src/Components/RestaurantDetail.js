import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RestaurantMenu from "./RestaurantMenu";

const RestaurantDetail = () => {

    const [loading, setLoading] = useState(true);
    const [rest, setRest] = useState({});
    const [categories, setCategories] = useState({});

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
                setRest(data.data.cards[0]?.card?.card?.info);
                setCategories(data.data.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
                setLoading(false)
            })
    }, [restaurantId])

    return (
        <>
            {
                loading ? <h1>Loading...</h1> :
                    <>
                        <div className="flex mt-10 mb-10 px-20">
                            <div className="w-80">
                                <div className="mb-4">
                                    <h1 className="text-2xl font-semibold">{rest.name}</h1>
                                    <p className="text-xs">{rest.cuisines.map((cuisine) => cuisine).join(', ')}</p>
                                    <p className="text-xs">{rest.areaName}, {rest.sla?.lastMileTravelString}</p>
                                    {
                                        rest?.expectationNotifiers ?

                                            <div className="mt-2 text-sm">
                                                {rest?.expectationNotifiers[0]?.text}
                                            </div>
                                            : ""
                                    }

                                </div>
                            </div>
                        </div>

                        {
                            categories.map((category, index) => (
                                <RestaurantMenu key={index} category={category} />
                            ))
                        }

                    </>
            }
        </>
    )

}

export default RestaurantDetail;