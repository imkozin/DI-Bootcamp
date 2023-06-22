const planets = [
    {name: "Mercury", moons: 0}, 
    {name: "Venus", moons: 0}, 
    {name: "Earth", moons: 1}, 
    {name: "Mars", moons: 2}, 
    {name: "Jupiter", moons: 13}, 
    {name: "Saturn", moons: 10}, 
    {name: "Uranus", moons: 5}, 
    {name: "Neptune", moons: 2}
];

const getSection = document.querySelector('section');

for (let planet of planets) {
    const planetDiv = document.createElement('div');
    planetDiv.classList.add('planet');
    planetDiv.classList.add(planet.name.toLowerCase());
    const text = document.createTextNode(planet.name);
    planetDiv.appendChild(text);

    for (let i=0; i < planet.moons; i++) {
        const moonDiv = document.createElement('div');
        moonDiv.classList.add('moon');
        moonDiv.style.left = i * 10 + 'px';
        planetDiv.appendChild(moonDiv);
    }

    const section = document.querySelector('.listPlanets');
    section.appendChild(planetDiv);
}