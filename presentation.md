title: Server side rendering with React
author:
  name: Ioan Eugen Stan
  twitter: ieugen222
  url: http://ieugen.ro
output: index.html
controls: true

--

# React.js pe server
## Frontent Bucharest, Iulie 2015

--

### Despre mine

* Consultant software 
* Freelancer/Antreprenor
* Instructor ( trainer adică )
* Pasionat de tehnologie, în special Software Liber
* Implicat în comunități: BJUG, Apache Software Foundation, Debian ..
* Mă găsiți [http://ieugen.ro](ieugen.ro)

--

### Agendă

* Ce opțiuni avem pentru aplicații web
  * pagini HTML create pe server
  * pagini HTML + apeluri AJAX
  * aplicații 'single-page'
* React pe server
* Aplicații Web Isomorfe/universale
* Demo

--

### Aplicații web clasice

* întreaga pagina HTML este renderizată pe server.
* JavaScript este foarte puțin/deloc folosit.
* experiența la utilizare este mai puțin plăcută

```
   .------------.               .---------.
   |            |     GET       |         |
   |   Pagina   |-------------->|  Server |
   |   web      |     HTML      |         |
   |            |<--------------|         |
   |            |               |         |
   '------------'               '---------'

```
--

### Aplicații web Server + AJAX

* pagina este generate pe server
* după care se încarcă diferențe, bucăți HTML
* experiență la utilizare mai bună
* greu de dezvoltat

```
  .-------------------------.
  |        Pagina web       |
  |                         |               .---------.
  | .---------.  .---------.|     GET       |         |
  | | Fragment|  | Fragment||-------------->|  Server |
  | '---------'  '---------'|    HTML       |         |
  | .----------------------.|<--------------|         |
  | |    Fragment HTML     ||               |         |
  | '----------------------'|               '---------'
  |                         |
  '-------------------------'
```

--

### Aplicații web "single-page"

* încarcăre inițială greoaie
* experiență la utilizare foarte bună
* nu funcționează fără JavaScript
* nepotrivit pentru SEO

```
   .-------------------------.
   |        Pagina web       |
   |                         |               .---------.
   | .--------------------.  |     GET       |         |
   | |                    |  |-------------->|  Server |
   | |    Aplicatie       |  |    JSON       |         |
   | |    JavaScript      |  |<--------------|         |
   | |                    |  |               |         |
   | '--------------------'  |               '---------'
   |                         |
   '-------------------------'
```

--

### React (intro)

React poate crea pagini HTML statice.

```
  var str = React.renderToString(<h1>Frontentd Bucharest</h1>)
  var strWithAttr = React.renderToStaticMarkup(<h1>Is Awesome</h1>)

```
--

### Aplicații web isomorfe/universale

**Isomorf/Universal** , în context,  înseamnă *codul care poate fi executat fără modificări pe server și pe client*

Componentele React pot fi scrise în așa fel.

--

### Câteva componente React Isomorfe

* [Newforms - formulare](http://newforms.readthedocs.org/en/latest/)
* [React Router - Rute declarative](http://rackt.github.io/react-router/)
* [Redux - Isomorphic React Flux ](https://github.com/gaearon/redux/)

--

# Demo
## ...murmur în sală

--

# Sfârșit
## Sper că v-a plăcut


