import { useState } from "react";
import RestaurantMenuItem from "./RestaurantMenuItem";

const RestaurantMenu = (category, index) => {

    const type = category.category.card.card["@type"];
    const menu = category.category.card.card;
    const [activeCategory, setActiveCategory] = useState(null);

    return (

        (type === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory") ?
            <div key={index} className="mb-5 px-20">

                <div
                    className="bg-gray-200 py-2 px-4 cursor-pointer"
                    onClick={() => setActiveCategory(activeCategory === index ? null : index)}
                >
                    {menu.title} ({menu.itemCards.length})
                </div>

                {activeCategory === index && (
                    <div className="ml-4">
                        {menu.itemCards.map((item, itemIndex) => (
                            <RestaurantMenuItem key={itemIndex} item={item.card.info} />
                        ))}
                    </div>
                )}

            </div>
            : ""
    )

}

export default RestaurantMenu;