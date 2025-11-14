
import { Suspense } from 'react';
import './App.css'
import Countries from './Components/Countries'
function App() {
  const fetchCountry=async()=>{
    const res = await fetch(
      "https://restcountries.com/v3.1/all?fields=name,capital,flags"
    );
    return res.json();
  }
const countryPromise=fetchCountry();
  return (
    <>
      <div>
        <Suspense
          fallback={
            <h1 className="text-xl font-bold text-center pt-20">
              Countries are loading..
            </h1>
          }
        >
          <div className='w-11/12 mx-auto'>
            <Countries countryPromise={countryPromise}></Countries>
          </div>
        </Suspense>
      </div>
    </>
  );
}

export default App
