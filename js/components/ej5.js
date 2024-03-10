import config from "../config.js";
const ej5 = /*html*/`
<h1>Ejercicio 5</h1>
<p>Construya un programa que permita realizar las 4 operaciones básicas</p>
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
      int p; double n1;
      double n2;
    
      // Asignacion de variables
      cout << "Ingrese el numero del tipo de operacion segun desee de la siguiente "
              "manera: "
           << endl
           << "1. Suma" << endl
           << "2. Resta" << endl
           << "3. Multiplicacion" << endl
           << "4. Division" << endl;
      cin >> p;
    
      if (p == 1 || p == 2 || p == 3 || p == 4) {
        cout << "Ingrese el primer numero a operar: ";
        cin >> n1;
      
        cout << "Ingrese el segundo numero a operar: ";
        cin >> n2;
      
        switch (p) {
        case 1:
          cout << "El resultado es " << (n1 + n2);
          break;
        
        case 2:
          cout << "El resultado es " << (n1 - n2);
          break;
        case 3:
          cout << "El resultado es " << (n1 * n2);
          break;
        case 4:
          if (n2 == 0) {
            cout << "La division entre 0 no es posible, recapacite";
          }
          cout << "El resultado es " << (n1 / n2);
          break;
        }
      }
      else{
        cout << "La opcion ingresada no es valida, recapacite";
      }
    
      return 0;
    }

    </script>
    </code>
</pre>
</div>
<div id=div_img_res>
    <h5>Resultado</h5>
    <img src="imgs/ej5.png" id="img_res">
    <!--<img src="https://adepfolder.000webhostapp.com/Programacion%201/imgs/ej5.png" id="img_res"> -->
</div>

`;
export default ej5