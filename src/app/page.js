import {dropdownsArr, fuels, manufacturer, price, rating, type, yearsOfProduction} from '@/app/constants';
import { fetchCars } from '@/utils';
import { Card, CustomFilter, CustomFilter2, Dropdown, SearchBar,} from './components';

export default async function Home({ searchParams }) {

  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2023,
    fuel: searchParams.fuel || "gas",
    limit: searchParams.limit || 9,
    model: searchParams.model || "",
  });


  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-3">
      {/* heading and dropdown section */}
      <div className="my-3 w-full sm:w-[95%] p-4 rounded-[2.428rem] flex flex-col lg:flex-row items-start lg:items-center justify-start lg:justify-between">
        <div>
          <h1 className="text-primary text-[2.088rem] font-extrabold">Car Catalogue</h1>
          <h5 className="text-primary text-[0.958rem] font-normal">Explore out cars you might like!</h5>
        </div>

        {/* <div className="my-3 sm:flex sm:justify-start lg:justify-end items-center sm:flex-wrap [&>*]:mr-3 lg:[&>*]:mr-0 lg:[&>*]:ml-3">  
            {
              dropdownsArr && dropdownsArr.map((item,i)=> (
                <Dropdown
                title={item}
                key={i}
                />
              ))
            }
        </div> */}
        <div className="my-3 sm:flex sm:justify-start lg:justify-end items-center sm:flex-wrap [&>*]:mr-3 lg:[&>*]:mr-0 lg:[&>*]:ml-3">  
          <CustomFilter2 title='price' options={price} />
          <CustomFilter2 title='manufacturer' options={manufacturer} />
          <CustomFilter2 title='type' options={type} />
          <CustomFilter2 title='rating' options={rating} />
        </div>
      </div>

      {/* <div className='home__filters'>
        <SearchBar />

        <div className='home__filter-container'>
          <CustomFilter title='fuel' options={fuels} />
          <CustomFilter title='year' options={yearsOfProduction} />
        </div>
      </div> */}

            {/* cards section */}
      <section className='mt-4 w-full sm:w-[95%] p-3'>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 min-h-[200px]:">

                {
                  !isDataEmpty ?
                      allCars?.map((car) => (
                        <Card
                        car={car}
                        />
                      ))
                  :(
                    <div className='home__error-container'>
                      <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
                      <p>{allCars?.message}</p>
                    </div>
                  )
                }
          </div>
      </section>
    </main>
  )
}
