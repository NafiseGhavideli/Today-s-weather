async function getLocation(location) {
  const res = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${location}`
  );

  const data = await res.json();
  if (!data.results) throw new Error("Location not found");
  return data;
}
async function getWeather({ name, latitude, longitude, timezone }) {
  const weatherRes = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,is_day&minutely_15=temperature_2m,relative_humidity_2m,precipitation,wind_speed_10m&hourly=temperature_2m,uv_index,is_day&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max&timezone=auto&forecast_hours=1&forecast_minutely_15=4`
  );
  const weatherData = await weatherRes.json();
  return {
    name,
    weatherData,
    timezone,
  };
}

export { getWeather, getLocation };
