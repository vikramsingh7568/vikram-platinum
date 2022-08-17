const people = [
    {name: 'Adam', age: 30},
    {name: 'Bob', age: 40},
    {name: 'Carl', age: 30},
  ];
  
  const results = people.filter(element => {
    // 👇️ using AND (&&) operator
    return element.age === 30 && element.name === 'Carl';
  });
  
  // 👉️ [ {name: 'Carl', age: 30} ]
  console.log(results);

  cars.map(car => active_filters.find(x =>
    if (car.attr(x.id) !== x.value)
        return car.addClass("filtered-out");
));