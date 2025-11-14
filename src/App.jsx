
import { Suspense } from 'react';
import './App.css'
import Countries from './Components/Countries'
function App() {
  const fetchCountry=async()=>{
    const res = await fetch("https://restcountries.com/v3.1/all?fields=name");
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
          <Countries countryPromise={countryPromise}></Countries>
        </Suspense>
      </div>
    </>
  );
}

export default App
