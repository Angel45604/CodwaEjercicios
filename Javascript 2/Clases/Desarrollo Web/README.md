# Desarrollo Web
Clases y ejercicios de desarrollo web

## Grid Layout
![](https://user-images.githubusercontent.com/20376969/89110760-9b1c1f00-d413-11ea-88c2-6bc0b702ac31.png)
Fundamentos de [Grid Layout](https://css-tricks.com/snippets/css/complete-guide-grid/)
## Super Centrado
![](https://user-images.githubusercontent.com/20376969/88968003-3c6c6f00-d274-11ea-96c5-6488a9d974de.png)
```css
.parent {
	display: grid;
	place-items: center;
}
```
## Layout de Pinterest
![](https://user-images.githubusercontent.com/20376969/89131723-a4b98b80-d4d4-11ea-8752-9b39050aca5a.png)
```css
.parent {
	display: grid;
	justify-content: center;
	gap: 15px;
}

.vacio:nth-child(1) {
    grid-column-start: 2;
    grid-row-start: 1;
    grid-row-end: 2;
}

.vacio:nth-child(2) {
    grid-column-start: 6;
    grid-row-start: 1;
    grid-row-end: 2;
}

.vacio:nth-child(3) {
    grid-column-start: 3;
    grid-row-start: 1;
    grid-row-end: 3;
}

.vacio:nth-child(4) {
    grid-column-start: 5;
    grid-row-start: 1;
    grid-row-end: 3;
}

.vacio:nth-child(5) {
    grid-column-start: 4;
    grid-row-start: 1;
    grid-row-end: 4;
    display: grid;
    place-items: center;
}

.item {
	grid-row-end: span 4 ;
}
```
## Pseudo Pan
![](https://user-images.githubusercontent.com/20376969/89131848-70929a80-d4d5-11ea-8177-3dc39adf71e6.png)

Qué es un charset, ejemplos de pseudo clases y pseudo elementos .