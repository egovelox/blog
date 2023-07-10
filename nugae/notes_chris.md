---
title: "Notes for Chris"
description: "traditional post"
date: "2020-01-22"
public: true
---

# Notes pour Chris

## 🦶2023 July 10

### Un terminal unix sous Linux

le shell, un langage pour commander :

```bash
echo $shell 
# /bin/bash
```

Le fichier de configuration de bash est ``$HOME/.bashrc``

```bash
vim $HOME/.bashrc
```

```text
# edit .bashrc

alias ls="ls -al"
export EDITOR="vim"
```

Lancer un nouveau terminal pour prise en compte des changements. 

Ou bien utiliser ``source`` pour faire relire le fichier de config :
```bash
source $HOME/.bashrc
```

### Commandes shell pour commencer avec vim & git

#### Initialisation :

```bash
ls $HOME

cat $HOME/mon_fichier

mkdir -p $HOME/DEV/learn_git/test_1

which git
# /usr/bin/git

man git

cd $HOME/DEV/learn_git/test_1

git init

vim README.md
## utiliser :wq pour enregistrer et quitter
```

```bash
git status

## staging
git add .

## committing
git commit
```

#### Autres commandes ``git``

```bash
git checkout -b my_new_branch

git checkout master

git clone https://...

```



### TO DO ca :

 - Créer un utilisateur admin (ForceMFA) dans AWS
 - Créer un utilisateur (sign-up) dans [https://github.com/](Github)
 - Créer depuis une machine Linux un dossier surveillé par git, puis ``push`` sur le compte GitHub récemment créé.
 - Essayer de simplifier des commandes avec un alias git (non un alias bash)


### Ressources utiles

 - [https://www.atlassian.com/git/tutorials/git-alias](Git alias)


