const RestaurantMenuItem = (item, itemIndex) => {

    const itemBaseUrl = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/";

    return (
        <div key={itemIndex} className="mb-2 p-2 ">

            <div className="flex items-center justify-between">

                <div className="w-2/3">
                    <div className="font-semibold">{item.item.name}</div>
                    <div className="text-gray-500">{item.item.description}</div>
                    <div className="text-gray-700">₹{(item.item.defaultPrice) ? (item.item.defaultPrice / 100) : (item.item.price / 100)}</div>
                </div>

                <div className="items-center relative">
                    {
                        item.item?.imageId ?
                            <img
                                src={itemBaseUrl + item.item.imageId}
                                alt={item.item.name}
                                className="w-full object-cover rounded mb-4"
                                style={{ width: '160px', height: '100px' }}
                            /> :
                            ""
                    }

                    <button className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-red-500 text-white text-xs py-2 px-4 rounded">Add</button>
                </div>


            </div>


        </div>
    )
}

export default RestaurantMenuItem;