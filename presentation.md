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

Întreaga pagina HTML este renderizată pe server.
JavaScript este foarte puțin/deloc folosit.

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

