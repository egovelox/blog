---
title: "Start smart with GCP"
description: "traditional post"
date: "2021-02-08"
public: false
---
# creation de compte
Pour qui ? 
moi VS entreprise => Choix entreprise
entrer adresse email
vérification via code envoyé par mail
entrer age, genre (tel facultatif)
param de personnalisations google : dire non à 4 ou 5 choses
N.B account.google.com pour config ultérieure
Acceptation des règles de confidentialité et des conditions d'utilisation
Profil d'etablissement (entreprise): passer

Démarrer un essai gratuit en mode entreprise
Pays / Conditions d'utilisation à nouveau
Infos entreprise: nom (mamaka), adresse (max)
Infos bancaire: CB (max, aucun prélévement auto après la fin de l'essai gratuit)
"Vous ne paierez rien tant que vous n'activerez pas la facturation automatique."

# Atterissage sur GCP : complexité ?
Une première chose, lorsque vous aimez lire en anglais : régler la langue dans Préférences

une notification: création du projet MyFirstProject (MFP)
une page d'accueil sur ce projet MFP
1. En allant plus loin, on remarque que MFP est un enfant de "No organization", qui est une ressource, 
mais, sic :
"Vous ne disposez pas des autorisations nécessaires pour afficher les autorisations de la ressource sélectionnée "

En lisant : 
"Once a Google Cloud Organization resource has been created for your domain, you can move your existing projects into the organization. You must be an owner of the project and a Project Creator in the organization to be able to move the projects.
Note: To acquire an Organization resource, you must have a Google Workspace or Cloud Identity account. Once you have the account set up, you must create a Project resource for the Organization resource to be provisioned. "

il apparait qu'il faudrait aller lire :
https://cloud.google.com/resource-manager/docs/quickstart-organizations

2. Le menu IAM : Autorisations pour le projet MFP
possibilité d'ajouter des membres

3. Le Menu Identité et organisation 
    Gérer les groupes et les comptes utilisateur pour les employés
    Créer une structure organisationnelle et contrôler de manière centralisée l'ensemble des projets et ressources de votre organisation
    Configurer des garde-fous de sécurité

On retombe sur 1. Il faut en effet 
    Configurer votre compte d'identité cloud, votre domaine et votre ressource d'organisation 

Pour conclure cette partie, notons l'adresse qui permet de configurer la sécurité de notre compte
https://myaccount.google.com/security?pli=1
et notons cette ressource à lire sur IAM
https://cloud.google.com/iam/docs/overview

# Install SDK and default Cloud SDK components : gcloud gsutils bq
python -V : must be >=2.7.9
https://cloud.google.com/sdk/docs/install

If you want python3, add in your bash_profile or .bashrc
export CLOUDSDK_PYTHON=python3

**A METTRE EN SCRIPT ?**
cd $HOME
wget https://dl.google.com/dl/cloudsdk/channels/rapid/downloads/google-cloud-sdk-326.0.0-darwin-x86_64.tar.gz

tar -xzf google-cloud-sdk-326.0.0-darwin-x86_64.tar.gz
rm google-cloud-sdk-326.0.0-darwin-x86_64.tar.gz 

To configure your PATH, disable reporting to google, and add completion
run the script  :
./google-cloud-sdk/install.sh

Test your install : 
```bash
$ gcloud -v
Google Cloud SDK 326.0.0
bq 2.0.64
core 2021.01.29
gsutil 4.58
```
0. At this point, you can use : 
https://cloud.google.com/sdk/docs/cheatsheet
1. view of the installed modules
gcloud components list
2. view of your CLI setup, where your logs are, etc.
gcloud info 

# Uninstall sdk (MacOS)
1. Remove both directories returned from the below commands

 gcloud info --format='value(installation.sdk_root)'
 gcloud info --format='value(config.paths.global_config_dir)'


2. Eventually remove cache :
 find ~/Library/Caches/ -type d -name "google-cloud-sdk" | xargs rm -r

 # Run gcloud init to initialize the SDK