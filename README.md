# España Campeón Mundial 2026

Aplicación móvil desarrollada con **React Native**, **Expo Go** y **Expo Router**, que simula el campeonato mundial de la Selección Española de Fútbol en el Mundial 2026. La aplicación cuenta con una pantalla de bienvenida, navegación mediante pestañas inferiores y componentes reutilizables para mostrar información de los jugadores y del desarrollador.

---

## Características

- Splash Screen con temporizador.
- Navegación mediante Bottom Tabs.
- Pantalla principal con información del campeón del Mundial 2026.
- Pantalla con los jugadores destacados de la final.
- Pantalla "Acerca de" con información del desarrollador.
- Componentes reutilizables.
- Diseño responsivo.
- Uso de imágenes locales.

---

## Tecnologías utilizadas

- React Native
- Expo Go
- Expo Router
- JavaScript
- JSX
- React Hooks
- StyleSheet
- @expo/vector-icons

---

## Estructura del proyecto

```text
src
│
├── app
│   ├── _layout.tsx
│   ├── index.tsx
│   │
│   └── menu
│       ├── _layout.tsx
│       ├── home.tsx
│       ├── espana.tsx
│       └── acerca.tsx
│
├── components
│   ├── PlayerCard.tsx
│   └── StudentCard.tsx
│
├── assets
│   └── images
│       ├── Escudo_selección_española_2026.png
│       ├── Ferran.jpg
│       ├── Nico.jpg
│       ├── Pedri.jpg
│       ├── argentina.png
│       └── adri.jpg
│
└── constants
```

---

## Pantallas

### Splash Screen

Pantalla de bienvenida que permanece visible durante 3 segundos antes de ingresar automáticamente a la aplicación.

Contiene:

- Escudo de la Selección Española.
- Mensaje de bienvenida.
- Indicador de carga (`ActivityIndicator`).

---

### Home

Presenta la información del campeonato mundial.

Información mostrada:

- Escudo de España.
- Campeón Mundial 2026.
- Bandera del subcampeón (Argentina).
- Resultado de la final.
- Gol del campeonato.
- Estadio.
- Fecha de la final.

---

### España

Muestra los jugadores más destacados del campeonato utilizando el componente reutilizable **PlayerCard**.

Jugadores:

- Ferran Torres
- Nico Williams
- Pedri González

Cada tarjeta muestra:

- Fotografía.
- Nombre.
- Descripción.

---

### Acerca de

Presenta la información del desarrollador utilizando el componente **StudentCard**.

Información:

- Fotografía.
- Nombre.
- Carrera.
- Universidad.
- Semestre.
- Proyecto.

---

## Componentes reutilizables

### PlayerCard

Componente encargado de mostrar la información de cada jugador.

Recibe tres propiedades:

- `nombre`
- `descripcion`
- `imagen`

Ejemplo:

```jsx
<PlayerCard
  nombre="Ferran Torres"
  descripcion="Autor del gol del campeonato."
  imagen={require("../assets/images/Ferran.jpg")}
/>
```

---

### StudentCard

Componente encargado de mostrar la información del estudiante.

Incluye:

- Fotografía.
- Nombre.
- Carrera.
- Universidad.
- Semestre.
- Proyecto.

---

## Navegación

La aplicación utiliza **Expo Router**.

### Stack Navigation

Permite navegar desde el Splash Screen hacia el menú principal.

Pantallas:

- Splash Screen
- Menú principal

### Bottom Tab Navigation

Incluye tres pestañas:

- Home
- España
- Acerca

---

## Instalación

Clonar el repositorio:

```bash
git clone https://github.com/AdrianaVallejo97/Seleccion_Espana_2026.git
```

Ingresar al proyecto:

```bash
cd Seleccion_Espana_2026
```

Instalar dependencias:

```bash
npm install
```

Ejecutar el proyecto:

```bash
npx expo start
```

Escanear el código QR utilizando **Expo Go** o ejecutar en un emulador Android/iOS.

---

## Dependencias principales

- expo
- expo-router
- react
- react-native
- @expo/vector-icons

---

## Funcionalidades implementadas

- Splash Screen.
- Navegación mediante Stack.
- Bottom Navigation.
- Componentes reutilizables.
- Imágenes locales.
- Diseño responsivo.
- Organización modular del proyecto.
- Uso de StyleSheet para los estilos.

---

## Autora

**Adriana Vallejo**

Estudiante de Ingeniería en Sistemas de Información.

Universidad Central del Ecuador.

---

## Licencia

Proyecto desarrollado con fines académicos para la asignatura de Desarrollo de Aplicaciones Móviles.