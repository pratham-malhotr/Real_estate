import React, { useEffect, useState, useRef } from 'react';
import './MarketTrends.css';
import propertyData from './property_data.json';

const cityIcons = {
  'New York': '🗽',
  'Los Angeles': '🌴',
  'Chicago': '🌆',
  'Houston': '🚀',
  'Miami': '🌴',
  'Dallas': '🤠',
  'San Francisco': '🌉',
  'Boston': '🎓',
  'Seattle': '☔',
  'Washington': '🏛️',
};

function normalizeCity(city) {
  if (!city || typeof city !== 'string') return '';
  return city.trim().toLowerCase().replace(/\b\w/g, c => c.toUpperCase());
}

function MarketTrends() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [avgPrice, setAvgPrice] = useState(null);
  const [medianPrice, setMedianPrice] = useState(null);
  const barGraphRef = useRef(null);
  const barGap = 18;
  const barWidth = 36;

  // Load property data (imported)
  useEffect(() => {
    setData(Array.isArray(propertyData) ? propertyData : []);
  }, []);

  // Normalize city names in property data for search/filter and display
  const normalizedData = data.map(row => ({ ...row, city: normalizeCity(row.city) }));

  // Unique city suggestions for autocomplete (normalized, case-insensitive, partial match)
  const citySuggestions = Array.from(new Set(normalizedData.map(row => row.city))).filter(city =>
    typeof city === 'string' && typeof search === 'string' &&
    city.toLowerCase().includes(search.trim().toLowerCase()) && search.trim().length > 0
  ).slice(0, 8);

  // Filtered data for property cards and stats (normalized, case-insensitive, partial match)
  const filteredData = normalizedData.filter(row =>
    typeof row.city === 'string' && typeof search === 'string' &&
    row.city.toLowerCase().includes(search.trim().toLowerCase())
  );

  // Calculate average and median price for filtered city
  useEffect(() => {
    if (!filteredData || filteredData.length === 0) {
      setAvgPrice(null);
      setMedianPrice(null);
      return;
    }
    const prices = filteredData.map(row => row.price).filter(Boolean);
    if (prices.length === 0) {
      setAvgPrice(null);
      setMedianPrice(null);
      return;
    }
    const avg = Math.round(prices.reduce((a, b) => a + b, 0) / prices.length);
    const sorted = [...prices].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    const median = sorted.length % 2 !== 0 ? sorted[mid] : Math.round((sorted[mid - 1] + sorted[mid]) / 2);
    setAvgPrice(avg);
    setMedianPrice(median);
  }, [search, data]);

  // Aggregate data by normalized city for the bar graph
  const cityPriceMap = {};
  normalizedData.forEach(row => {
    const normCity = row.city;
    if (normCity && row.price) {
      if (!cityPriceMap[normCity]) cityPriceMap[normCity] = [];
      cityPriceMap[normCity].push(row.price);
    }
  });
  const cityAverages = Object.entries(cityPriceMap).map(([city, prices]) => ({
    city,
    avgPrice: Math.round(prices.reduce((a, b) => a + b, 0) / prices.length)
  }));
  cityAverages.sort((a, b) => b.avgPrice - a.avgPrice);
  const topCityAverages = cityAverages.slice(0, 10);

  function formatPrice(price) {
    return '$' + Number(price).toLocaleString('en-US');
  }

  return (
    <div className="market-trends-page animate-fade-in">
      <h1>Market Trends</h1>
      <p>See the latest property prices in major US cities.<br/>
        <span style={{fontSize: '0.95rem', color: '#888'}}>
          Data fetched from property_data.json and from Zillow API.
        </span>
      </p>
      {/* Button to scroll to bar graph (just below heading) */}
      <div style={{width: '100%', display: 'flex', justifyContent: 'center', margin: '1.2rem 0 0.5rem 0'}}>
        <button
          style={{padding: '0.8rem 2.2rem', borderRadius: 24, background: 'var(--primary)', color: '#fff', fontWeight: 700, fontSize: '1.1rem', border: 'none', boxShadow: '0 2px 12px #0001', cursor: 'pointer', transition: 'background 0.2s'}}
          onClick={() => {
            if (barGraphRef.current) {
              const offset = window.innerWidth < 700 ? 60 : 100;
              const y = barGraphRef.current.getBoundingClientRect().top + window.scrollY - offset;
              window.scrollTo({ top: y, behavior: 'smooth' });
              setTimeout(() => {
                barGraphRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }, 400);
            }
          }}
        >
          📊 View Bar Graph
        </button>
      </div>
      {/* Search bar and city stats with suggestions */}
      <div style={{maxWidth: 500, margin: '2rem auto 1.5rem auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.1rem', position: 'relative'}}>
        <input
          type="text"
          placeholder="Search city..."
          value={search}
          onChange={e => {
            setSearch(e.target.value);
            setShowSuggestions(true);
          }}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 120)}
          style={{padding: '0.8rem 1.2rem', borderRadius: 24, border: '1.5px solid var(--primary)', fontSize: '1.1rem', width: '100%', maxWidth: 340, boxShadow: '0 2px 8px #0001', outline: 'none'}}
        />
        {showSuggestions && citySuggestions.length > 0 && (
          <div style={{position: 'absolute', top: 54, left: '50%', transform: 'translateX(-50%)', width: '100%', maxWidth: 340, background: 'var(--bg-card)', border: '1.5px solid var(--primary)', borderRadius: 12, boxShadow: '0 4px 16px #0002', zIndex: 10}}>
            {citySuggestions.map((city, idx) => (
              <div
                key={city}
                style={{padding: '0.7rem 1.2rem', cursor: 'pointer', borderBottom: idx !== citySuggestions.length - 1 ? '1px solid var(--border)' : 'none', color: 'var(--text-main)', fontWeight: 500, fontSize: '1.05rem'}}
                onMouseDown={() => {
                  setSearch(city);
                  setShowSuggestions(false);
                }}
              >
                <span role="img" aria-label="city">🏙️</span> {city}
              </div>
            ))}
          </div>
        )}
        {search && filteredData.length > 0 && (
          <div style={{background: 'var(--bg-card)', borderRadius: 12, boxShadow: '0 2px 12px #0001', padding: '1.1rem 1.5rem', color: 'var(--text-main)', border: '1.5px solid var(--primary)', width: '100%', maxWidth: 340, textAlign: 'center', fontWeight: 600, fontSize: '1.08rem'}}>
            <span style={{color: 'var(--primary)'}}>🏙 {normalizeCity(search)}</span><br/>
            <span style={{display: 'inline-block', margin: '0.3rem 0'}}>
              <span style={{color: '#FFD600', fontWeight: 700, fontSize: '1.13rem'}}>Average Price:</span>
              <b style={{color: '#FFD600', marginLeft: 6, fontSize: '1.13rem'}}>{avgPrice ? `$${avgPrice.toLocaleString()}` : 'N/A'}</b>
            </span><br/>
            <span style={{display: 'inline-block', margin: '0.3rem 0'}}>
              <span style={{color: '#43e97b', fontWeight: 700, fontSize: '1.13rem'}}>Median Price:</span>
              <b style={{color: '#43e97b', marginLeft: 6, fontSize: '1.13rem'}}>{medianPrice ? `$${medianPrice.toLocaleString()}` : 'N/A'}</b>
            </span>
          </div>
        )}
      </div>
      {/* Show a beautiful list of property cards */}
      {filteredData && filteredData.length > 0 && (
        <div style={{margin: '2rem auto', maxWidth: 900, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem'}}>
          {filteredData.map((row, idx) => (
            <div key={idx} style={{background: 'var(--bg-card)', borderRadius: 16, boxShadow: '0 4px 24px #0002', padding: '1.5rem 1.2rem', color: 'var(--text-main)', border: '1.5px solid var(--primary)', display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
              <div style={{fontWeight: 700, fontSize: '1.12rem', color: 'var(--primary)'}}>{row.address}</div>
              <div style={{color: 'var(--secondary)', fontWeight: 500, fontSize: '1.05rem'}}>{row.city}, {row.state}</div>
              <div style={{fontWeight: 700, color: 'var(--accent)', fontSize: '1.18rem', margin: '0.2rem 0 0.5rem 0'}}>
                {row.price ? `$${row.price.toLocaleString()}` : 'Price not available'}
              </div>
              <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.7rem', fontSize: '0.98rem'}}>
                <span><b>🏠 {row.property_type}</b></span>
                <span><b>📈 {row.status}</b></span>
                <span>🛏 {row.bedrooms} bd</span>
                <span>🛁 {row.bathrooms} ba</span>
                <span>📅 {row.year_built}</span>
                <span>🌳 {row.lot_area_value} sqft</span>
              </div>
            </div>
          ))}
        </div>
      )}
      {/* Horizontal Bar Chart for city average prices */}
      <div ref={barGraphRef} style={{margin: '3rem auto 2rem auto', maxWidth: 900, background: 'var(--bg-card)', borderRadius: 18, boxShadow: '0 4px 24px #0002', padding: '2.2rem 1.7rem', border: '1.5px solid var(--primary)'}}>
        <div style={{fontWeight: 700, fontSize: '1.22rem', marginBottom: '1.2rem', color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
          <span role="img" aria-label="bar-graph" style={{fontSize: '1.5rem'}}>📊</span> City Average Price Bar Graph (Top 10)
        </div>
        {topCityAverages.length > 0 ? (
          <svg width={Math.max(...topCityAverages.map(c => c.avgPrice), 1) / 2 + 300} height={topCityAverages.length * 48 + 40} style={{width: '100%', maxWidth: '100%'}}>
            {topCityAverages.map((row, idx) => {
              const barLen = (row.avgPrice / Math.max(...topCityAverages.map(c => c.avgPrice), 1)) * 500;
              return (
                <g key={row.city} className="bar-group">
                  <text
                    x={0}
                    y={idx * 48 + 38}
                    textAnchor="start"
                    fontSize="1.08rem"
                    fill="var(--text-main)"
                    fontWeight="600"
                  >
                    {cityIcons[row.city] || '🏙️'} {row.city}
                  </text>
                  <rect
                    x={120}
                    y={idx * 48 + 18}
                    width={barLen}
                    height={28}
                    fill="var(--primary)"
                    rx="8"
                    style={{ transition: 'width 0.7s' }}
                  />
                  <text
                    x={120 + barLen + 12}
                    y={idx * 48 + 38}
                    textAnchor="start"
                    fontSize="1.08rem"
                    fill="var(--accent)"
                    fontWeight="bold"
                  >
                    {row.avgPrice ? `$${row.avgPrice.toLocaleString()}` : ''}
                  </text>
                </g>
              );
            })}
          </svg>
        ) : (
          <div style={{textAlign: 'center', color: 'var(--accent)', fontWeight: 600, fontSize: '1.1rem', margin: '2rem 0'}}>No city data available for bar graph.</div>
        )}
      </div>
    </div>
  );
}

export default MarketTrends; 