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

Qué es un charset, ejemplos de pseudo clases y pseudo elementos.

## Google
![](https://user-images.githubusercontent.com/20376969/89574968-9e881f80-d7f2-11ea-9c25-853beb549da0.png)
[Google](https://google.com) clonado, no hay gran ciencia.

## Tumblr
![](https://user-images.githubusercontent.com/20376969/90321677-6dee6700-df11-11ea-94e7-3c94afc91cc0.png)
Clon de [Tumblr](https://www.tumblr.com)
### Posicionamiento, scroll sticky con las imagenes de perfil
![](https://media.giphy.com/media/kZtSKarOyDP5GPggi3/giphy.gif)
```css
.post {
	position: relative;
}

.post > .avatar {
    height: 100%;
    position: absolute;
    left: -85px;
}

.avatar > img {
    position: sticky;
    top: 69px;
}
```
## Ahorcado
![](https://user-images.githubusercontent.com/20376969/114278420-6a09da80-99f5-11eb-9d24-c39eb63803dc.png)
Juego del ahorcado hecho con HTML, CSS y JS

## Gato
![](https://user-images.githubusercontent.com/20376969/114278499-bead5580-99f5-11eb-8ac5-30ece4a890dc.png)
Juego de 3 en linea hecho con HTML, CSS y JS

## Ouija
![](https://user-images.githubusercontent.com/20376969/114278542-f3211180-99f5-11eb-96c6-2ad03b3a9844.png)
Pregúntale cosas al señor de las tinieblas