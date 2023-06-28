const inventory = [
    { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
    { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
    { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
    { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
    { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
  ];

  function getCarHonda(carInventory) {
    const firstHonda = carInventory.find(element => element.car_make === 'Honda');
    // carInventory.forEach(element => {
    if (firstHonda) {
            console.log(`This is a ${firstHonda.car_make} ${firstHonda.car_model} from ${firstHonda.car_year}`);
            return;
        }
    };
    // console.log('First Honda:', firstHonda);
// };

  getCarHonda(inventory); 
  // This is a Honda Accord from 1983
  // This is a Honda Accord from 1995

function sortCarInventoryByYear(carInventory) {
    const sorted = carInventory.sort((x, y) => x.car_year - y.car_year);
    return sorted;
}

console.log(sortCarInventoryByYear(inventory));