import React from 'react'

// props passed to the componen
 export default function Result({weatherData, historyData, historySearch}) {

    const historyItems = historyData.map(
        (item, index) => {
            return <li onClick={() => historySearch(item)} className='cursor-pointer text-center pt-2 uppercase' key={index}>{item}</li>
        }
    )
      
  return (
    <div className='grid grid-cols-4 shadow-xl mt-5 p-2'>
        <div className='col-span-1 border-r-2 '>
            <span className='text-center block font-bold'>SEARCH HISTORY</span>
            <ul>
                {historyItems}
            </ul>
        </div>
        <div className='col-span-3 '>
        {
            weatherData.length !== 0
            ?
            <>
                <div className='text-2xl flex justify-around my-2'>
                    <h2 className='text-4xl text-center'>{weatherData.name}</h2>
                    <h2 className='text-4xl text-center'>{weatherData.sys.country}</h2>
                </div>
                <div className='text-2xl flex justify-around my-2'>
                    <div>Temperature: {weatherData.main.temp} deg</div>
                    <div>Pressure: {weatherData.main.pressure} mb</div>
                </div>
                <div className='text-2xl flex justify-around my-2'>
                    <div>Visibility: {weatherData.visibility} m</div>
                    <div>Wind/gust : {weatherData.wind.gust} Km/h</div>
                </div>
                <div className='text-2xl flex justify-around my-2'>
                    <div>FeelsLike: {weatherData.main.feels_like}  deg</div>
                    <div>Humidity: {weatherData.main.humidity} %</div>
                </div>
                <div className='text-2xl flex justify-around my-2'>
                    <div>Max Tem: {weatherData.main.temp_max} deg</div>
                    <div>Min Tem: {weatherData.main.temp_min} deg</div>
                </div>
                <div className='text-2xl flex justify-around my-2'>
                <div className='pt-4'>{weatherData.weather[0].main}</div>
                    <div className='border-1 rounded-md bg-slate-50'>
                        <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="" />
                    </div>
                    
                </div>
            </>
            :
            <>
                <h3 className='text-center font-bold text-3xl p-4'>Please enter the city name</h3>
            </>
        }
        </div>
        
    </div>
  )
}

