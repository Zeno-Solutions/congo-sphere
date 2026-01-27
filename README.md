# CongoSphere

## Description

CongoSphere est une plateforme complète d'événements qui connecte les habitants de la République du Congo aux expériences qui comptent. Des conférences et ateliers professionnels aux festivals culturels, concerts et rassemblements communautaires, CongoSphere facilite la découverte, la participation et la gestion d'événements, le tout sur une seule plateforme.

Notre outil permet aux organisateurs de gérer facilement la billetterie, le suivi des participants et les analyses, tout en offrant aux participants une expérience fluide pour trouver, réserver et interagir avec les événements qui les intéressent.

CongoSphere n'est pas seulement une application d'événements — c'est un hub dynamique où se rencontrent culture, connaissances et connexions, pour faire grandir les communautés et les professionnels.

## Guide du Développeur

### Prérequis

Ce projet utilise [Next.js](https://nextjs.org) et [pnpm](https://pnpm.io) comme gestionnaire de paquets.

### Cloner le projet

Clonez le dépôt sur votre machine locale :

```bash
git clone https://github.com/Zeno-Solutions/congo-sphere.git
cd congo-sphere
```

### Installation

1. **Installer pnpm globalement** (si ce n'est pas déjà fait) :

```bash
npm i -g pnpm
```

2. **Installer les dépendances** :

```bash
pnpm install
# ou
pnpm i
```

### Démarrer le projet

Pour lancer le serveur de développement :

```bash
pnpm dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur pour voir le résultat.

Vous pouvez commencer à éditer la page en modifiant `app/page.tsx`. La page se met à jour automatiquement au fur et à mesure que vous modifiez le fichier.

## Comment Contribuer

### Créer une branche

Créez toujours une branche à partir de `main` avec un nom descriptif selon le type de modification :

```bash
git checkout -b <prefix>/<description>
```

**Préfixes disponibles :**

- **ft/** : Pour ajouter une nouvelle fonctionnalité (feature)
  - Exemple : `git checkout -b ft/ajout-page-evenements`
- **bg/** : Pour corriger un bug (bug)
  - Exemple : `git checkout -b bg/fix-affichage-image`
- **hotfix/** : Pour une correction urgente en production
  - Exemple : `git checkout -b hotfix/erreur-paiement-critique`
- **docs/** : Pour la documentation
  - Exemple : `git checkout -b docs/mise-a-jour-readme`
- **chore/** : Pour les tâches de maintenance (mise à jour des dépendances, configuration, etc.)
  - Exemple : `git checkout -b chore/mise-a-jour-dependances`
- **refactor/** : Pour la restructuration du code sans changer son comportement
  - Exemple : `git checkout -b refactor/optimisation-composant-carte`

### Soumettre vos changements

1. Développez votre fonctionnalité ou correction sur votre branche
2. Committez vos changements avec des messages clairs
3. Poussez votre branche vers le dépôt distant :

```bash
git push origin <nom-de-votre-branche>
```

4. Créez une **Pull Request** (PR) vers la branche `main`

**Besoin d'aide pour créer une Pull Request ?** Regardez cette vidéo : [Comment créer une Pull Request sur GitHub](https://www.youtube.com/watch?v=jRLGobWwA3Y)

### Bonnes pratiques

- Assurez-vous que votre code fonctionne localement avant de créer une PR
- Écrivez des messages de commit descriptifs
- Gardez vos PR concentrées sur un seul sujet
- Testez vos modifications avant de les soumettre

---

## Ressources

Pour en savoir plus sur Next.js :

- [Documentation Next.js](https://nextjs.org/docs)
- [Tutoriel interactif Next.js](https://nextjs.org/learn)
