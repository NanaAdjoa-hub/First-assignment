import './App.css';




function App() {

    const planets=[
        {name:"Mars", isGasPlanet:false},
        {name:"Mars", isGasPlanet:false},
        {name:"Mars", isGasPlanet:true},
        {name:"Mars", isGasPlanet:false},
        {name:"Mars", isGasPlanet:true},
        {name:"Mars", isGasPlanet:true},

    ];
    return<div className="App">
        {planets.map((planet,key)=>{
        if (planet.isGasPlanet)return<h1>{planet.name}</h1>
})}
    </div>
}
