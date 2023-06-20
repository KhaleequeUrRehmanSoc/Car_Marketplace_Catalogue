
export const calculateCarRent = (city_mpg, year) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export const updateSearchParams = (type, value) => {
  // Get the current URL search params
  const searchParams = new URLSearchParams(window.location.search);

  // Set the specified search parameter to the given value
  searchParams.set(type, value);

  // Set the specified search parameter to the given value
  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname;
};

export const deleteSearchParams = (type) => {
  // Set the specified search parameter to the given value
  const newSearchParams = new URLSearchParams(window.location.search);

  // Delete the specified search parameter
  newSearchParams.delete(type.toLocaleLowerCase());

  // Construct the updated URL pathname with the deleted search parameter
  const newPathname = `${window.location.pathname}?${newSearchParams.toString()}`;

  return newPathname;
};


export async function fetchCars(filters) {
    const { manufacturer, year, model, limit, fuel } = filters;
  
      const options = {
          method: 'GET',
          headers: {
              'X-RapidAPI-Key': process.env.X_RapidAPI_Key,
              // 'X-RapidAPI-Key': "5cd6d7215bmsh5dcea764a05ee20p1ac13ejsnbe236c43938c",
              'X-RapidAPI-Host': "cars-by-api-ninjas.p.rapidapi.com"
          }
      };
  
      try {
            const response = await fetch(
              `${process.env.url}?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`
              , options);
          
            const result = await response.json();
            return result;
      } catch (err) {
            console.log('error=> ',err) 
      }
  }

// export async function fetchCars(filters) {
//   const { manufacturer, year, model, limit, fuel } = filters;

//   // Set the required headers for the API request
//   const headers: HeadersInit = {
//     // "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY || "",
//     "X-RapidAPI-Key": process.env.X_RapidAPI_Key || "",
//     "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
//   };

//   // Set the required headers for the API request
//   const response = await fetch(
//     `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
//     {
//       headers: headers,
//     }
//   );

//   // Parse the response as JSON
//   const result = await response.json();

//   return result;
// }

export const generateCarImageUrl = (car, angle) => {
  const url = new URL("https://cdn.imagin.studio/getimage");
  const { make, model, year } = car;

  // url.searchParams.append('customer', process.env.IMAGIN_API_KEY || '');
  url.searchParams.append('customer', 'pksoc');
  url.searchParams.append('make', make);
  url.searchParams.append('modelFamily', model.split(" ")[0]);
  url.searchParams.append('zoomType', 'fullscreen');
  url.searchParams.append('modelYear', `${year}`);
  // url.searchParams.append('zoomLevel', zoomLevel);
  url.searchParams.append('angle', `${angle}`);

  return `${url}`;
} 
