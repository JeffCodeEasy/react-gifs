# **App Web de Gifs**

Está Aplicación web se basa en una página de gifs que cuenta con un buscador para hacer una búsqueda, en el cual aplique el método de importaciones de barril.

## **Uso de barril para las importanciones**

>Se necesita crear un archivo con el nombre **index.js**  en la carpeta de los components donde vamos a exportar

**En este caso tenemos 3 components:**
- AddCategory
- GifGrid
- GifItem

`Escribimos el siguiente código en index.js`

```javascript
export * from './AddCategory';
export * from './GifGrid';
export * from './GifItem'
```
>Ahora podremos importar de la sigiente manera  más simple y eficiente.

```javascript
import { AddCategory, GifGrid, GifItem } from './components';
```

![Imagen Dragon Ball](https://media0.giphy.com/media/zYpbNK1E0TmRYgCDrh/giphy.gif?cid=bd72912cqdvgft0qkjcjph1mm3wsh81cwni8k0r4fjhdprng&ep=v1_gifs_search&rid=giphy.gif&ct=g)