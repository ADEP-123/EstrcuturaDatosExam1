import config from "../config.js";
const ej7 = /*html*/`
<h1>Ejercicio 7</h1>
<p>Pida al usuario que ingrese la cantidad de días e imprima los minutos y segundos</p>
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
    
      // Asignacion de variables
      cout << "Ingrese la cantidad de dias: ";
      cin >> d;
    
      if (d < 0) {
        cout << "No existe una cantidad de dias menor que 0";
      
      } else {
        cout << "La cantidad de minutos es: " << (d * 24 * 60) << endl
             << "La cantidad de segundos es: " << (d * 24 * 60 * 60);
      }
    
      return 0;
    }
    </script>
    </code>
</pre>
</div>
<div id=div_img_res>
    <h5>Resultado</h5>
    <img src="imgs/ej7.png" id="img_res">
    <!--<img src="https://adepfolder.000webhostapp.com/Programacion%201/imgs/ej7.png" id="img_res"> -->
</div>

`;
export default ej7