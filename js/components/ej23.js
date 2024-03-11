const ej23 = /*html*/`
<h1>Ejercicio 2.3</h1>
<h2>Implementacion en cada arreglo metodo quick sort</h2>
<p id="enunciado">Implementa y ejecuta los métodos de ordenamiento en cada arreglo. Compara el tiempo de ejecución y el número de comparaciones para determinar cuál método es más eficiente en este escenario</p>
<div id="codigo">
<pre class="code-container">
    <button class="copy-button">Copiar</button>
    <code class="language-cpp">
    <script type="text/x-c++src">
        class quickSortEj2 {

            public static int quickSort(String arr[], int inicio, int fin) {
                int comparaciones = 0;
                if (inicio >= fin) {
                    return comparaciones;
                }
                String pivote = arr[inicio];
                int elemIzq = inicio + 1;
                int elemDer = fin;
                while (elemIzq <= elemDer) {
                    while (elemIzq <= fin && arr[elemIzq].compareTo(pivote) < 0) {
                        elemIzq++;
                        comparaciones++;
                    }
                    while (elemDer > inicio && arr[elemDer].compareTo(pivote) >= 0) {
                        elemDer--;
                        comparaciones++;
                    }
                    if (elemIzq < elemDer) {
                        String temp = arr[elemIzq];
                        arr[elemIzq] = arr[elemDer];
                        arr[elemDer] = temp;

                    }
                }

                if (elemDer > inicio) {
                    String temp = arr[elemDer];
                    arr[elemDer] = arr[inicio];
                    arr[inicio] = temp;

                }
                quickSort(arr, inicio, elemDer - 1);
                quickSort(arr, elemDer + 1, fin);
                return comparaciones;
            }

            public static void main(String[] args) {

                // Datos proporcrionados
                String[] Nombres = {"Juan", "María", "Carlos", "Ana", "Pedro", "Sofía", "Luis", "Laura", "Diego", "Marta", "Miguel", "Elena", "Javier", "Lucía", "Pablo", "Valentina", "Andrés", "Camila", "José", "Andrea", "David", "Paula", "Fernando", "Martina", "Antonio", "Claudia", "Daniel", "Beatriz", "Alejandro", "Sara", "Manuel", "Isabel", "Sergio", "Julia", "Jorge", "Victoria", "Raúl", "Natalia", "Iván", "Carmen", "Francisco", "Alba", "Rubén", "Elena", "Alberto", "Sara", "Adrián", "María", "Sergio", "Andrea", "Pablo", "Lucía", "Luis", "Paula", "Guillermo", "Marta", "Javier", "Laura", "Raúl", "Clara", "Ángel", "Noelia", "Gabriel", "Cristina", "Jesús", "Martina", "Fernando", "Carmen", "Víctor", "Patricia", "Ricardo", "Andrea", "Gonzalo", "María", "Óscar", "Sara", "Rubén", "Julia", "Samuel", "Sofía", "Francisco", "Marta", "Diego", "Andrea", "Juan", "Laura", "Javier", "Clara", "José", "Elena", "Mario", "Natalia", "Marcos", "Paula", "Adrián", "Marina", "Carlos", "Cristina", "Alberto", "Isabel"};

                System.out.println("Array original: ");
                for (int i = 0; i < Nombres.length; i++) {
                    System.out.print(Nombres[i] + ", ");
                }

                long startTime = System.currentTimeMillis();
                int comp = quickSort(Nombres, 0, Nombres.length - 1);
                long endTime = System.currentTimeMillis();
                long executionTime = endTime - startTime;

                Runtime runtime = Runtime.getRuntime();
                long memory = runtime.totalMemory() - runtime.freeMemory();

                System.out.println("");
                System.out.println("Array ordenado: ");
                for (int i = 0; i < Nombres.length; i++) {
                    System.out.print(Nombres[i] + ", ");
                }
                System.out.println("");
                System.out.println("Cantidad de comparaciones: " + comp);

                System.out.println("Tiempo de ejecución: " + executionTime + " milisegundos");
                System.out.println("Memoria utilizada: " + memory + " bytes");

            }

        }
    </script>
    </code>
</pre>
</div>
<div id=div_img_res>
    <h5>Resultado</h5>
    <img src="imgs/ej23A.png" id="img_res">
</div>

`;
export default ej23