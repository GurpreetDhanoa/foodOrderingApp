import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faBicycle } from '@fortawesome/free-solid-svg-icons';

const RestaurantInfo = ({ resturant }) => {

    const imageUrl = 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/';
    const cloudinaryImageId = resturant.cloudinaryImageId;

    const renderStars = () => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <FontAwesomeIcon
                    key={i}
                    icon={faStar}
                    style={{ color: i < resturant.avgRating ? 'orange' : 'gray', marginRight: '2px' }}
                />
            );
        }
        return stars;
    };

    function convertToSlug(title) {
        return title
            .toLowerCase()
            .replace(/[^a-z0-9\s-]/g, '')  // Remove non-alphanumeric characters except spaces and hyphens
            .replace(/\s+/g, '-')          // Replace spaces with hyphens
            .trim();                       // Trim leading and trailing spaces
    }

    return (
        <Link to={`/restaurant/${convertToSlug(resturant.name+'-'+resturant.areaName)}-${resturant.id}`}>
            <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white m-4 ">
                <img
                    className="w-full h-48 object-cover"
                    src={imageUrl + cloudinaryImageId}
                    alt={resturant.name}
                    style={{ width: '250px' }}
                />
                <div className="p-4">
                    <h2 className="text-xl font-semibold mb-2">{resturant.name}</h2>
                    <div className="flex items-center mb-2">
                        <span className="text-yellow-500">{renderStars()}</span>
                        <span className="text-gray-600 ml-2 text-sm">{resturant.avgRating} </span>
                    </div>
                    <div className='text-xs mb-2'><FontAwesomeIcon icon={faBicycle} style={{ fontSize: '1em', color: 'green' }} /> {resturant.sla.slaString}</div>
                    <div className="flex items-center mb-2">
                        <span className="text-xs">{resturant.cuisines.map((cuisine) => cuisine).join(', ')}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default RestaurantInfo;