# **Tarjetas con React (Props)**

**Proyecto realizado con React cuyo objetivo es practicar la creación y reutilización de componentes, el uso de props, y la organización básica de estilos con CSS.**

La aplicación muestra una serie de tarjetas informativas sobre cómics y mangas recomendados, cada una con imagen, autor y descripción.

## **Objetivo del proyecto**
- Practicar la creación de componentes en React.
- Reutilizar un mismo componente (Card) para mostrar información diferente.
- Pasar datos desde App.jsx a los componentes mediante props.
- Aplicar estilos básicos con CSS sin lógica compleja.
- Mantener una estructura de proyecto clara y ordenada.

## **Temática**
**Cómics y Mangas**
Una selección de obras imprescindibles para cualquier aficionado al cómic y manga, incluyendo tanto títulos occidentales como orientales.

Cada tarjeta incluye:
- Imagen de portada
- Título
- Autor(es)
- Descripción

## **Componentes utilizados**
### **Card.jsx**
Componente reutilizable que representa una tarjeta individual.
Recibe la información mediante props:
- `image` - Portada del cómic/manga
- `name` - Título de la obra
- `author` - Autor(es)
- `description` - Sinopsis o descripción

### **Header.jsx**
Componente simple que muestra el título principal del proyecto: "Mi Biblioteca".

### **Footer.jsx**
Footer minimalista con información de copyright.

## 📐 **Estructura del proyecto**
```
src/
├── assets/
│   └── img/           # Portadas de cómics y mangas
├── components/
│   ├── Card.jsx
│   ├── Card.css
│   ├── Header.jsx
│   ├── Header.css
│   ├── Footer.jsx
│   └── Footer.css
├── App.jsx
├── App.css
└── main.jsx
```

## **Estilos**
- CSS modular separado por componente.
- Clases con naming claro y consistente.
- Layout con CSS Grid para la disposición de tarjetas.
- Diseño responsive que se adapta a móviles y tablets.
- Fondo uniforme aplicado a toda la página.
- No se utiliza ninguna librería externa de estilos.

## **Tecnologías usadas**
- **React** - Librería principal para la construcción de componentes
- **Vite** - Herramienta de build y desarrollo
- **JavaScript (ES6+)** - Sintaxis moderna de JavaScript
- **CSS** - Estilos personalizados sin frameworks

## **Características destacadas**
1. **Reutilización de componentes**: Un solo componente `Card` se usa para todos los cómics/mangas.
2. **Props dinámicas**: Los datos se pasan desde un array en `App.jsx`.
3. **Imágenes optimizadas**: Las portadas se cargan desde la carpeta assets.
4. **Responsive design**: Se adapta automáticamente a diferentes tamaños de pantalla.
5. **Código limpio**: Estructura clara y fácil de mantener.

## **Vista del proyecto**
Aplicación web que muestra una galería de tarjetas con cómics y mangas, organizadas en una cuadrícula responsive. Cada tarjeta muestra:
- Portada del cómic/manga centrada y completa
- Título en tamaño destacado
- Autor(es) en color distintivo
- Descripción detallada de la obra

## **Cómo ejecutar el proyecto**
1. **Clonar el repositorio** (si aplica):
```bash
git clone [url-del-repositorio]
```

2. **Instalar dependencias**:
```bash
npm install
```

3. **Ejecutar en modo desarrollo**:
```bash
npm run dev
```

4. **Abrir en el navegador**:
```bash
http://localhost:5173
```