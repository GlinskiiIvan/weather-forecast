import React, {useContext, useReducer} from "react";

export const CitiesContext = React.createContext({
    cities: [],
});


const initialStateCities = {
    cities: ['Усть-Каменогорск', 'Москва'],
    cityIncludes: false,
};
// const initialStateCities = JSON.parse(localStorage.getItem('state' || {}));
const reducerCities = (state, action) => {
    switch (action.type) {
        case 'ADD_CITY': {
            if(!state.cities.includes(action.city)) {
                const updatedCities = [...state.cities, action.city];
                return {...state, cities: updatedCities, cityIncludes: false};
            } else {
                return {...state, cityIncludes: true};
            }
        }
        case 'CHANGE_CITY': {
            if(!state.cities.includes(action.newCity)) {
                const updatedCities = state.cities;
                const indexRemovedCity = updatedCities.indexOf(action.oldCity)
                updatedCities[indexRemovedCity] = action.newCity;
                return {...state, cities: updatedCities, cityIncludes: false};
            } else {
                return {...state, cityIncludes: true};
            }
        }
        case 'REMOVE_CITY': {
            const updatedCities = state.cities.filter((city) => city !== action.city)
            return {...state, cities: updatedCities};
        }
        case 'CLOSE_WARNING_INCLUDES': {
            return {...state, cityIncludes: false};
        }
    }
}

export const CitiesContextProvider = (props) => {
    const value = useReducer(reducerCities, initialStateCities);
    return (
        <CitiesContext.Provider value={value}>
            {props.children}
        </CitiesContext.Provider>
    )
}