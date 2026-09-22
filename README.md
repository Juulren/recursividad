# Práctica 2: Algoritmos Recursivos

Esta es una aplicación web interactiva desarrollada con HTML, CSS y JavaScript (Vanilla) orientada a la demostración visual y matemática de algoritmos clásicos utilizando **recursividad**. 

## 🚀 Cómo ejecutar el proyecto

Dado que el proyecto utiliza módulos de JavaScript (`import` / `export`), es necesario ejecutarlo a través de un servidor local HTTP para evitar errores de políticas de CORS (Cross-Origin Resource Sharing) en el navegador.

1. **Abre una terminal** en el directorio raíz del proyecto.
2. Puedes usar herramientas como `npx` (Node.js) o Python para levantar un servidor:
   - **Usando Node.js:**
     ```bash
     npx http-server ./ -p 8080
     ```
   - **Usando Python:**
     ```bash
     python -m http.server 8080
     ```
3. Abre tu navegador web y entra a `http://localhost:8080/`.

---

## 🧠 Explicación de los Ejercicios y Código

El proyecto está estructurado usando un patrón de diseño MVC (Modelo-Vista-Controlador). La lógica matemática (las funciones recursivas) se encuentra dentro de los archivos de la carpeta `models`.

### 1. Factorial
**¿Cómo funciona?** 
El factorial de un número $n$ (denotado como $n!$) es el producto de todos los números enteros positivos desde 1 hasta $n$. 
Por ejemplo, $5! = 5 \times 4 \times 3 \times 2 \times 1 = 120$. En recursión, el factorial de $n$ se define como $n \times (n-1)!$.

**Explicación del código (`FactorialModel.js`):**
La función se llama a sí misma multiplicando el número actual $n$ por el factorial de $n-1$. Se implementó la técnica de **memoización** (uso de un mapa de caché) para almacenar los resultados previamente calculados. El caso base detiene la recursión cuando $n$ es 0 o 1, regresando 1.

### 2. Fibonacci
**¿Cómo funciona?**
La secuencia de Fibonacci comienza con 0 y 1. A partir de ahí, cada número es la suma de los dos anteriores ($F_n = F_{n-1} + F_{n-2}$).
Secuencia: `0, 1, 1, 2, 3, 5, 8, 13...`

**Explicación del código (`FibonacciModel.js`):**
Calcular Fibonacci con recursividad pura genera un árbol de llamadas de crecimiento exponencial ($O(2^n)$), lo cual satura la memoria rápidamente y crashea el programa. Para optimizar, se agregó **memoización** (caché), convirtiendo el proceso de exponencial a lineal ($O(n)$). También se incluyó un límite numérico de `n <= 1000` para proteger contra errores de desbordamiento de pila (*Stack Overflow*).

### 3. Máximo Común Divisor (MCD)
**¿Cómo funciona?**
Calcula el número más grande que divide exactamente a dos números enteros. Se utiliza el clásico **Algoritmo de Euclides**.

**Explicación del código (`McdModel.js`):**
El código utiliza recursividad basándose en la regla matemática: $MCD(a, b) = MCD(b, a \pmod b)$. La función se llama a sí misma pasando a ser el viejo valor de `b` el nuevo valor de `a`, y el residuo de `a / b` el nuevo valor de `b`. Se detiene (el caso base) cuando `b` es 0, retornando el valor absoluto de `a`.

### 4. Cambio de Moneda
**¿Cómo funciona?**
Es un algoritmo implementado de manera recursiva para devolver el cambio después de una compra. 

**Explicación del código (`CambioMonedaModel.js`):**
En lugar de restar iterativamente (1 por 1) la denominación de la moneda al monto restante (lo cual generaría profundísimas pilas de llamadas en el motor V8 del navegador), el código está optimizado para usar divisiones y saber inmediatamente cuántas monedas de una denominación exacta caben en el cambio. Luego, extrae ese monto e invoca la recursión apuntando al siguiente valor de moneda. Se detiene al agotar la deuda o las denominaciones.

### 5. Torres de Hanói
**¿Cómo funciona?**
Es un rompecabezas matemático que consta de tres varillas y una serie de discos de diferentes tamaños. El objetivo es mover toda la pila a otra varilla cumpliendo dos reglas: solo se mueve un disco a la vez, y no se puede poner un disco mayor sobre uno menor.

**Explicación del código (`TorresHanoiModel.js`):**
El patrón recursivo para mover $n$ discos es:
1. Mover $n-1$ discos del origen al auxiliar.
2. Mover el disco restante del origen al destino.
3. Mover los $n-1$ discos del auxiliar al destino.
El código genera un listado paso a paso para resolver el problema. Debido al crecimiento exponencial de los movimientos requeridos ($2^n - 1$), se limitó el ingreso máximo a 15 discos para evitar que el renderizado de la UI bloquee o crashee el navegador por falta de memoria.
