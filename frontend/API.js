
var pais = [];
var poblacion = [];

var capital = [];
var idioma = [];



fetch('http://127.0.0.1:8000/api/paises')
.then(datos=>datos.json())
//.then(datos_paises=>console.log(datos_paises))

.then(function transformar (datos_paises) {
    datos_paises.forEach(function agregar (datos_paises) 
    {   
        pais.push(datos_paises.nombre);
        poblacion.push(datos_paises.poblacion);
        capital.push(datos_paises.capital);
        idioma.push(datos_paises.idioma);
    });

    var datos = [
    {
        x: pais,
        y: poblacion,
        name: 'Población',
        type: 'bar'
    }
    ];

    var layout = {
        xaxis: {
          title: 'País',
        },
        yaxis: {
          title: 'Cantidad de Población',
        }
      };
        
    Plotly.newPlot('pais', datos, layout);
      
});


