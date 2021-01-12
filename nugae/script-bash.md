---
title: "Scripting shell sous UNIX"
description: "traditional post"
date: "2020-01-15"
public: true
---


L'écriture d'un script shell sous UNIX passe invariablement par quelques étapes indispensables. Cet article permettra de les rappeler clairement.

### Mise en place

Créons un répertoire /bin dans notre dossier d'utilisateur, et le fichier dans lequel nous écrirons notre script:

```shell
$ mkdir $HOME/bin
$ touch $HOME/bin/monScript.sh
```

### Au commencement était le SHEBANG
Le SHEBANG permet d'indiquer le shell que l'on choisit pour exécuter notre script.
Nous indiquons ici que l'on choisit le shell "bash".

```bash
#!/bin/bash
```

### Le contenu du script
Evidemment notre script aura un contenu, mais il importe peu ici. Nous plaçons simplement un 'echo':

```bash
#!/bin/bash
echo "Le script a bien été exécuté"
```

### Les droits d'exécution
Sous UNIX, un script bash ne pourra être exécuté par l'utilisateur, que si ce dernier possède bien les droits d'exécution sur le script. 

Donnons-nous donc les droits d'exécution sur notre script, en envoyant dans notre console (pas dans le script lui-même) la commande suivante :

```shell
$ sudo chmod 755 /chemin/vers/monScript.sh
```


### Le lancement du script
Soit le lancer depuis le repértoire où il se trouve:

```shell
$ cd /chemin/vers/monScript.sh && ./monScript.sh
```

Soit le lancer sans considération du répertoire; nous devrons alors auparavant inclure le répertoire du script dans notre variable d'environnement PATH : 

```shell
$ export PATH=PATH:$HOME/bin
$ monScript.sh
```



