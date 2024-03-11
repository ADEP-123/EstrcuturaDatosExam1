const ej32 = /*html*/`
<h1>Ejercicio 3.2</h1>
<h2>Implementacion de los 3 metodos en arreglo tipo entero casi ordenado</h2>
<p id="enunciado">Ejecuta los métodos de ordenamiento mencionados anterior mente para evaluar los siguientes arreglos casi ordenados. Observa cómo se comporta cada algoritmo y cuál es más eficiente en términos de tiempo de ejecución.</p>
<div id="codigo">
<pre class="code-container">
    <button class="copy-button">Copiar</button>
    <code class="language-cpp">
    <script type="text/x-c++src">
        class Ej3Numbers {

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
                int[] numeros_casi_ordenados = {1098, 1027, 1007, 1002, 1020, 1001, 1021, 1106, 1019, 1084, 1052, 1044, 1008, 1097, 1006, 1026, 1089, 1030, 1088, 1035, 1094, 1036, 1016, 1022, 1054, 1014, 1009, 1067, 1045, 1087, 1064, 1003, 1074, 1091, 1018, 1023, 1071, 1039, 1032, 1062, 1037, 1043, 1031, 1041, 1028, 1010, 1068, 1056, 1073, 1034, 1050, 1060, 1081, 1049, 1040, 1065, 1092, 1053, 1079, 1029, 1090, 1047, 1057, 1095, 1013, 1066, 1075, 1017, 1083, 1069, 1011, 1076, 1015, 1042, 1082, 1070, 1048, 1025, 1086, 1096, 1058, 1059, 1078, 1099, 1077, 1085, 1061, 1080, 1033, 1038, 1004, 1005, 1012, 1024, 1051, 1055, 1046, 1072, 1100, 1103, 1105, 1104};

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
    <img src="imgs/ej32A.png" id="img_res">
</div>

`;
export default ej32