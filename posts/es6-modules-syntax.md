---
title: "javascript ES6: export/import "
description: "traditional post"
date: "2020-01-17"
public: true
---

En langage javascript, la fonctionnalité d'exportation / importation permet de partitionner le code sur plusieurs fichiers. On travaille ainsi de façon modulaire, en liant l'un avec l'autre deux (ou plusieurs) fichiers .js appelés modules.

### Mise en place
Créeons dans notre espace de travail un dossier /src avec deux fichiers distincts, module1.js et module2.js

```shell
cd monEspace
mkdir src/
touch src/module1.js && touch src/module2.js
```

### Exportation en ES5
En ES5, avant l'arrivée de ES6 (ES2015), on trouve la syntaxe suivante (encore présente un peu partout, par exemple dans NodeJS) :

```javascript
//module.js
module.exports = {msg : "hello", lang: "english"}

//main.js
var englishGreeting = require('./module.js');
console.log(englishGreeting.msg)
```

### ES6 l'exportation "default" : export default
Elle permet d'exporter des parties de code en les nommant par défaut, i.e d'un nom qu'il n'est pas nécessaire de respecter lors de l'importation.
Ce nom par défaut peut même être omis, si l'on y tient : c'est utile pour le cas de simples valeurs, comme des tableaux, des objets, ou pour le cas de fonctions anonymes, ou même de classes anonymes : pour tout cela, on pourra exporter sans nom, et nommer seulement lors de l'importation.
#### Limitation
L'exportation "default", dans chaque fichier .js, est forcément unique.

#### Exemple 1
```javascript
// module2.js
// on exporte un objet nommé, par défault, "greeting"
export default greeting = {msg : "hello", lang: "eng"}

// module1.js
// on importe l'objet "greeting" en le renommant "englishGreeting".
import englishGreeting from 'module2.js'
const greeting = () => {
    console.log(englishGreeting);
}
```

#### Exemple 2
```javascript
// module2.js
console.log("module2.js exported")
// on exporte un objet sans nom
export default {msg : "hello", lang: "eng"}

// module1.js
// on importe l'objet anonyme en lui donnant un nom.
import englishGreeting from 'module2.js'
const greeting = () => {
    console.log(englishGreeting);
}
```

### ES6 l'exportation "nommée"
... coming soon

