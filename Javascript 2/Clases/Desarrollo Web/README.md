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
![](https://user-images.githubusercontent.com/20376969/89110810-2990a080-d414-11ea-8a8a-57d82becbcce.png)
```css
.parent {
	display: grid;
	justify-content: center;
	gap: 10px;
}

.item-s {
	grid-row-end: span 1 ;
}

.item-m {
	grid-row-end: span 2;
}

.item-l {
	grid-row-end: span 3;
}
```

