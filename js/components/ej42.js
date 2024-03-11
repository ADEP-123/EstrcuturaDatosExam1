const ej42 = /*html*/`
<h1>Ejercicio 4.2</h1>
<h2>Implementacion de los 3 metodos en arreglo tipo int invertido</h2>
<p id="enunciado">Compara los métodos de ordenamiento. Analiza cómo cada algoritmo maneja este tipo de entrada y cuál es más rápido en esta situación.</p>
<div id="codigo">
<pre class="code-container">
    <button class="copy-button">Copiar</button>
    <code class="language-cpp">
    <script type="text/x-c++src">
        class Ej4Numbers {

            public static int bubbleSort(int[] arr) {
                int n = arr.length;
                int comparaciones = 0;
                for (int i = 0; i < n - 1; ++i) {
                    for (int j = 0; j < n - i - 1; ++j) {
                        comparaciones++;
                        if (arr[j] > arr[j + 1]) {
                            int temp = arr[j];
                            arr[j] = arr[j + 1];
                            arr[j + 1] = temp;
                        }
                    }
                }
                return comparaciones;
            }

            public static int improvBubbleSort(int[] arr) {
                int N = arr.length;
                int comparaciones = 0;
                for (int i = N - 1; i > 0; i--) {
                    for (int j = 0; j < i; j++) {
                        comparaciones++;
                        if(arr[j]>arr[j+1]){
                            int temp = arr[j];
                            arr[j] = arr[j + 1];
                            arr[j + 1] = temp;

                        }
                    }

                }
                return comparaciones;
            }

            public static int quickSort(int arr[], int inicio, int fin) {
                int comparaciones = 0;
                if (inicio >= fin) {
                    return comparaciones;
                }
                int pivote = arr[inicio];
                int elemIzq = inicio + 1;
                int elemDer = fin;
                while (elemIzq <= elemDer) {
                    while (elemIzq <= fin && arr[elemIzq] < pivote) {
                        elemIzq++;
                        comparaciones++;
                    }
                    while (elemDer > inicio && arr[elemDer] >= pivote) {
                        elemDer--;
                        comparaciones++;
                    }
                    if (elemIzq < elemDer) {
                        int temp = arr[elemIzq];
                        arr[elemIzq] = arr[elemDer];
                        arr[elemDer] = temp;

                    }
                }

                if (elemDer > inicio) {
                    int temp = arr[elemDer];
                    arr[elemDer] = arr[inicio];
                    arr[inicio] = temp;

                }
                quickSort(arr, inicio, elemDer - 1);
                quickSort(arr, elemDer + 1, fin);
                return comparaciones;
            }

            public static void main(String[] args) {

                // Datos proporcrionados
                int[] numeros_casi_ordenados = {1106, 1105, 1104, 1103, 1100, 1099, 1098, 1097, 1096, 1095, 1094, 1092, 1091, 1090, 1089, 1088, 1087, 1086, 1085, 1084, 1083, 1082, 1081, 1080, 1079, 1078, 1077, 1076, 1075, 1074, 1073, 1072, 1071, 1070, 1069, 1068, 1067, 1066, 1065, 1064, 1062, 1061, 1060, 1059, 1058, 1057, 1056, 1055, 1054, 1053, 1052, 1051, 1050, 1049, 1048, 1047, 1046, 1045, 1044, 1043, 1042, 1041, 1040, 1039, 1038, 1037, 1036, 1035, 1034, 1033, 1032, 1031, 1030, 1029, 1028, 1027, 1026, 1025, 1024, 1023, 1022, 1021, 1020, 1019, 1018, 1017, 1016, 1015, 1014, 1013, 1012, 1011, 1010, 1009, 1008, 1007, 1006, 1005, 1004, 1003, 1002, 1001};;

                // Burbuja
                System.out.println("xxxxx Metodo de burbuja xxxxx");
                System.out.println("Array original: ");
                for (int i = 0; i < numeros_casi_ordenados.length; i++) {
                    System.out.print(numeros_casi_ordenados[i] + ", ");
                }

                long startTimeBurb = System.currentTimeMillis();
                int compBurb = bubbleSort(numeros_casi_ordenados);
                long endTimeBurb = System.currentTimeMillis();
                long executionTimeBurb = endTimeBurb - startTimeBurb;

                Runtime runtimeBurb = Runtime.getRuntime();
                long memoryBurb = runtimeBurb.totalMemory() - runtimeBurb.freeMemory();

                System.out.println("");
                System.out.println("Array ordenado: ");
                for (int i = 0; i < numeros_casi_ordenados.length; i++) {
                    System.out.print(numeros_casi_ordenados[i] + ", ");
                }
                System.out.println("");
                System.out.println("Cantidad de comparaciones: " + compBurb);

                System.out.println("Tiempo de ejecución: " + executionTimeBurb + " milisegundos");
                System.out.println("Memoria utilizada: " + memoryBurb + " bytes");

                // Burbuja Mejorada
                System.out.println("");
                System.out.println("");
                System.out.println("xxxxx Metodo de burbuja mejorada xxxxx");
                System.out.println("Array original: ");
                for (int i = 0; i < numeros_casi_ordenados.length; i++) {
                    System.out.print(numeros_casi_ordenados[i] + ", ");
                }

                long startTimeBurbMej = System.currentTimeMillis();
                int compBurbMej = improvBubbleSort(numeros_casi_ordenados);
                long endTimeBurbMej = System.currentTimeMillis();
                long executionTimeBurbMej = endTimeBurbMej - startTimeBurbMej;

                Runtime runtimeBurbMej = Runtime.getRuntime();
                long memoryBurbMej = runtimeBurbMej.totalMemory() - runtimeBurbMej.freeMemory();

                System.out.println("");
                System.out.println("Array ordenado: ");
                for (int i = 0; i < numeros_casi_ordenados.length; i++) {
                    System.out.print(numeros_casi_ordenados[i] + ", ");
                }
                System.out.println("");
                System.out.println("Cantidad de comparaciones: " + compBurbMej);

                System.out.println("Tiempo de ejecución: " + executionTimeBurbMej + " milisegundos");
                System.out.println("Memoria utilizada: " + memoryBurbMej + " bytes");

                // Quick Sort
                System.out.println("");
                System.out.println("");
                System.out.println("xxxxx Metodo Quick Sort xxxxx");
                System.out.println("Array original: ");
                for (int i = 0; i < numeros_casi_ordenados.length; i++) {
                    System.out.print(numeros_casi_ordenados[i] + ", ");
                }

                long startTimeQS = System.currentTimeMillis();
                int compQS = quickSort(numeros_casi_ordenados, 0, numeros_casi_ordenados.length - 1);
                long endTimeQS = System.currentTimeMillis();
                long executionTimeQS = endTimeQS - startTimeQS;

                Runtime runtimeQS = Runtime.getRuntime();
                long memoryQS = runtimeQS.totalMemory() - runtimeQS.freeMemory();

                System.out.println("");
                System.out.println("Array ordenado: ");
                for (int i = 0; i < numeros_casi_ordenados.length; i++) {
                    System.out.print(numeros_casi_ordenados[i] + ", ");
                }
                System.out.println("");
                System.out.println("Cantidad de comparaciones: " + compQS);

                System.out.println("Tiempo de ejecución: " + executionTimeQS + " milisegundos");
                System.out.println("Memoria utilizada: " + memoryQS + " bytes");

            }

        }
    </script>
    </code>
</pre>
</div>
<div id=div_img_res>
    <h5>Resultado</h5>
    <img src="imgs/ej42A.png" id="img_res">
</div>

`;
export default ej42