import config from "../config.js";
const ej6 = /*html*/`
<h1>Ejercicio 6</h1>
<p>El banco de la republica los ha seleccionado para que construyan un programa que permita calcular el valor en pesos de x número de dólares  en cierto momento del día consultando la TRM </p>
<div id="codigo">
<pre class="code-container">
    <button class="copy-button">Copiar</button>
    <code class="language-cpp">
    <script type="text/x-c++src">
      #include <cmath>
      #include <iostream>
      
      using namespace std;
      
      int main() {
        // Declaracion de variables
        double d;
        double trm;
      
        // Asignacion de variables
        cout << "Ingrese el numero de dolares que desea convertir: $";
        cin >> d;
      
        if (d < 0) {
          cout << "No puede existir una cantidad de dolares negativa ";
        
        } else {
          cout << "Ingrese la taza de cambio actual: ";
          cin >> trm;
          if (trm < 0) {
            cout << "La taza de cambio no puede ser negativa";
          } else {
            cout << "La cantidad en pesos colombianos es : $" << (d * trm);
          }
        }
      
        return 0;
      }

    </script>
    </code>
</pre>
</div>
<div id=div_img_res>
    <h5>Resultado</h5>
    <img src="imgs/ej6.png" id="img_res">
    <!--<img src="https://adepfolder.000webhostapp.com/Programacion%201/imgs/ej6.png" id="img_res"> -->
</div>

`;
export default ej6