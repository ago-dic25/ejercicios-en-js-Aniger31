//Inventores

    const inventors = [
      { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
      { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
      { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
      { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
      { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
      { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
      { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
      { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
      { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
      { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
      { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
      { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
    ];

    const people = [
      'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
      'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
      'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
      'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
      'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
    ];
    
    
    // 1. Filter para filtrar la lista de inventores que nacieron en los 1500
    //filter() recorre el arreglo y devuelve solo los elementos que cumplen una condición.

    const inventores1500 = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);
    console.table(inventores1500);

    // Array.prototype.map()
    // 2. Un arreglo de los apellidos de los inventores
    //map() transforma cada elemento y devuelve un nuevo arreglo.

    const nombres = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
    console.log(nombres);

    // Array.prototype.sort()
    // 3. Ordenar los inventores por fecha de nacimiento, de los mas viejos a los mas jovenes
    //sort() ordena los elementos según una función de comparación.
    
    const ordenados = inventors.sort((a,b) => a.year -b.year);
    console.table(ordenados);


    // Array.prototype.reduce()
    // 4. Cuantos años vivieron todos en total?
    //reduce() acumula valores. Aquí restamos el año de fallecimiento menos el de nacimiento y lo sumamos.

    const totalAnios = inventors.reduce((total, inventor) => {
        return total + (inventor.passed - inventor.year);
    }, 0);
    console.log('Años vividos en total: ', totalAnios);

    // 5. Ordenar los inventores por años que vivieron

    const porLongevidad = inventors.sort((a, b) => {
        const vidaA = a.passed - a.year;
        const vidaB = b.passed - b.year;
        return vidaB - vidaA;
    });
    console.table(porLongevidad);


    // 6. sort 
    // Ordenar la gente alfabeticamente por apellido 
    //Cada elemento tiene el formato "Apellido, Nombre". Puedes separar con split(', ').
    const personasOrdenadas = people.sort((a, b) => {
        const [aLast] = a.split(', ');
        const [bLast] = b.split(', ');
        return aLast.localeCompare(bLast);
    });
    console.log(personasOrdenadas);


    // 7. Reduce
    // Sumar las instancias de cada uno de los siguientes medios de transporte
    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
    //Crea un objeto acumulador donde cada clave sea un transporte.

    const transporteContado = data.reduce((obj, item) => {
        if (!obj[item]) {
            obj[item] = 0;
        }
        obj[item]++;
        return obj;
    }, {});
    console.log(transporteContado);

