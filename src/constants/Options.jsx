export const SelectTravelList=[
    {
        id:1,
        title:'Just Me',
        desc:'Going on a trip solo',
        icon:'✈︎',
        people:'1 Solo',
    },
    {
        id:2,
        title:'Friends',
        desc:'Going on a trip with friends',
        icon:'🥂',
        people:'3 to 10 People',
    },
    {
        id:3,
        title:'Family',
        desc:'Going on a trip with family',
        icon:'🏠',
        people:'3 to 5 People',
    },
    {
        id:4,
        title:'Business',
        desc:'Going on a trip for business',
        icon:'🧑‍💼',
        people:'5 to 8 People',
    },
    {
        id:5,
        title:'Couple',
        desc:'Going on a trip for couple',
        icon:'👩🏻‍❤️‍👨🏻',
        people:'2 People'
    },
    {
        id:6,
        title:'Pet',
        desc:'On a mission',
        icon:'🐾',
        people:'with pet',
    }

]

export const SelectBudgetOption=[
    {
        id:1,
        title:'Cheap',
        desc:'Stay conscious of costs',
        icon:'🚨',
    },
    {
        id:2,
        title:'Moderate',
        desc:'Keep cost expendature on average side',
        icon:'😑',
    },
    {
        id:3,
        title:'Luxury',
        desc:'Spend more on trips',
        icon:'💰',
    }
    
    
]

export const AI_PROMPT = `Generate a travel plan for location: {location}, for {totalDays} days for {traveler} with a {budget} budget in Ruppes if and only if place is in india else Dolar. Provide a list of hotel options can be more than 3 as much as needed for no of days provided and options available with the following details: hotelName, hotelAddress, price, hotelImageUrl, geoCoordinates, rating, and description. Additionally, suggest an itinerary including placeName, placeDetails, placeImageUrl, geoCoordinates, ticketPricing, and timeTravel for each location, with a detailed plan for each of the {totalDays} days, and indicate the best time to visit each location. Please present the response in JSON format.`;
