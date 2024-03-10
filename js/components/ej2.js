import config from "../config.js";
const ej2 = /*html*/`
<h1>Ejercicio 2</h1>
<p>Area y perimetro de un rectangulo</p>
<div id="codigo">
<pre class="code-container">
    <button class="copy-button">Copiar</button>
    <code class="language-cpp">
    <script type="text/x-c++src">
      #include <iostream>
      using namespace std;

      int main() {
        // Declaracion de variables
        int base;
        int altura;
        string unidades;
      
        // Asignacion de variables
        cout << "Ingrese la longitud de la base del rectangulo: ";
        cin >> base;
      
          cout << "Ingrese la longitud de la altura del rectangulo: ";
        cin >> altura;
      
        cout << "Ingrese las unidades de medida: ";
        cin >> unidades;
      
        // Mostrar por pantalla
        cout << "El area del rectangulo es  " << (altura * base) << " " << unidades << " cuarados y de perimetro " << (altura*2+base*2) << " " << unidades;
        return 0;
      }
    </script>
    </code>
</pre>
</div>
<div id=div_img_res>
    <h5>Resultado</h5>
    <img src="imgs/ej2.png" id="img_res">
    <!--<img src="https://adepfolder.000webhostapp.com/Programacion%201/imgs/ej2.png" id="img_res"> -->
</div>

`;
export default ej2