import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Hero from './Hero';
import Card from './Card';
import Data from './data';
function Page(){
  const cards = Data.map(item=>{
    return(
      <Card 
                key={item.id}
                img={item.coverImg}
                rating={item.stats.rating}
                reviewCount={item.stats.reviewCount}
                location={item.location}
                title={item.title}
                price={item.price}
                openSpot={item.openSpots}
      />
    )
  })
  return(
    <div>
      <App />
      <Hero />
      <section className="cards-list">
                {cards}
            </section>
    </div>
  )
}

ReactDOM.render(<Page />,
  document.getElementById('root')
);

reportWebVitals();
