import config from "../config.js";
const ej4 = /*html*/`
<h1>Ejercicio 4</h1>
<p>Area y perimetro de un triangulo</p>
<div id="codigo">
<pre class="code-container">
    <button class="copy-button">Copiar</button>
    <code class="language-cpp">
    <script type="text/x-c++src">
      #include <iostream>
      #include <cmath>
      using namespace std;

      int main() {
        // Declaracion de variables
        int base;
        int altura;
        string unidades;
      
        // Asignacion de variables
        cout << "Ingrese la longitud de la base del triangulo: ";
        cin >> base;
      
        cout << "Ingrese la longitud de la altura del triangulo: ";
        cin >> altura;
      
        cout << "Ingrese las unidades de medida \n";
        cin >> unidades;
      
        // Mostrar por pantalla
        cout << "El area del triangulo es  " << (altura * base / 2) << " " << unidades
             << " cuarados y de perimetro " << (sqrt(altura*altura+base*base)+altura+base) << " "
             << unidades;
        return 0;
      }
    </script>
    </code>
</pre>
</div>
<div id=div_img_res>
    <h5>Resultado</h5>
    <img src="imgs/ej4.png" id="img_res">
    <!--<img src="https://adepfolder.000webhostapp.com/Programacion%201/imgs/ej4.png" id="img_res"> -->
</div>

`;
export default ej4