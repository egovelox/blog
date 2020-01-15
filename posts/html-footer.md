---
title: "Footer en HTML"
description: "traditional post"
date: "2020-01-16"
public: true
---

Il est relativement difficile de placer correctement un footer sur une page HTML.
L'arrivée de l'unité css vh a pu considérablement simplifier les choses.
Voilà simplement ce qu'il faudra tâcher de retenir : 

```css
html{
    box-sizing: border-box;
}
body 
{
    min-height: 100vh;
    position: relative;
}
/* 
Dans le dernier enfant du body, on anticipe la hauteur du footer :
*/
article
{
    padding-bottom: 2.5rem;    
}

#footer
{
    border-top: 1px solid lightgray;
    width: 100%;
    width: 100%;
    position: absolute;
    bottom: 0;
}

```
