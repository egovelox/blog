---
title: "Move fast with vim!"
description: "traditional post"
date: "2020-10-13"
public: true
---

### Préalable

La faculté de mouvement, dans vim, est séparée de l'édition de texte par les touches ``Esc`` pour en sortir, et par diverses touches comme `i` (insert) pour y entrer. Passer d'une faculté à l'autre, càd faire l'aller retour entre i et Esc, peut sembler fastidieux. 

Pour éviter cette lourdeur, on peut remap la touche Esc sur une autre combinaison de touches. 'kj' est une possibilité. ``Capslock`` en est une autre.

```sh
# dans .vimrc par ex
# ino signifiant les 2 modes insert + normal
inoremap kj <esc> 
```

### Basiques

Le ``hjkl`` est la base, toujours gardée sous la main. Ils permettent le mouvement simple, horizontal et vertical.

Le compteur vient étendre ce mouvement: ``5j`` me mène 5 lignes plus bas.

Bien connaître le mouvement dans vim, c'est ensuite pouvoir le combiner à des actions: par exemple, 
``d5j`` me supprime les 5 lignes qui suivent celle où je me trouve (laquelle est aussi supprimée).

On en ferait un [jeu d'aventure](https://vim-adventures.com) !

### Mouvement sur la ligne

On utilise ``0`` (ou ``^``) et ``$`` pour aller au début ou à la fin de la ligne.

On utilise couramment ``w/W`` pour sauter de mot en mot. ``W`` permet de ne pas prendre ( { . et tels autres caractères pour des mots. Dans le sens arrière, on utilise ``b/B``. Ainsi arrivé au pied d'un mot, on passe à la fin avec ``e/E``

Les compteurs s'utilisent par là dessus, et ``3w`` devient : avancer de 3 mots.

Dans la ligne (ou plus loin du reste) on peut avoir repéré un mot, et vouloir s'y rendre : on utilise ``/lemot`` et ``n/N`` pour naviguer entre ses occurences éventuelles.

Vim a de la mémoire, et ``/Enter`` rappelle la dernière recherche. Si la chose cherchée est la même que sous le curseur, ``\``* suffit simplement pour trouver la prochaine occurence. 

Note, avec ``/`` on va toujours chercher devant, avec ``?`` on recherche derrière.

Toujours sur la ligne, même chose pour un caractère avec ``f`` (ou ``F`` pour rejoindre un caractère qui précède le curseur) : ``f"`` par exemple, vous mène au prochain '"'. On utilise ``;/,`` pour passer d'une occurence à l'autre.

Quasi synonyme de f/F, on trouve ``t/T`` (devant signifier 'til) pour arrêter le curseur ``juste avant`` le caractère recherché.

### Mouvement vertical

On utilise ``H/M/L`` (high, middle, low) pour le déplacement sur l'écran.
On utilise ``gg/G`` pour le déplacement vers la première ou la dernière ligne du fichier.

Le compteur est couramment employé en conjonction avec les numéros de lignes visibles à gauche. On m'enmène à la ligne 18 avec la commande ``18gg`` ou ``18G``.

Ce qui est donc pratique, en mode visuel (Ctrl + V) pour sélectionner une portion comprise entre deux lignes déterminées.
