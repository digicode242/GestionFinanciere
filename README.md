# FinÉtu — Gérez votre argent étudiant, simplement.

> Site vitrine moderne pour **FinÉtu**, une application de gestion financière pensée pour les étudiants sénégalais.

![Stack](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Status](https://img.shields.io/badge/status-projet%20universitaire-4ABFA5)

---

## Sommaire
- [À propos](#-à-propos)
- [Aperçu des sections](#-aperçu-des-sections)
- [Stack technique](#-stack-technique)
- [Structure du projet](#-structure-du-projet)
- [Lancement](#-lancement)
- [Personnalisation](#-personnalisation)
- [Identité visuelle](#-identité-visuelle)
- [Équipe](#-équipe)
- [Licence](#-licence)

---

## À propos

**FinÉtu** est un projet universitaire (L2 Génie Logiciel — G3) qui propose une application web vitrine pour aider les étudiants à :

- Suivre leurs **dépenses** quotidiennes en FCFA
- Gérer leur **budget** par catégorie
- **Simuler** la croissance de leur épargne
- Découvrir des **opportunités** d'investissement adaptées au marché sénégalais
- Définir et suivre des **objectifs d'épargne** personnels

> Slogan : *« Gérez votre argent étudiant, simplement. »*

---

## Aperçu des sections

| Section | Description |
| --- | --- |
| **Hero** | Présentation principale avec illustration, statistiques animées et cartes flottantes |
| **Fonctionnalités** | 5 outils clés présentés en cartes avec icônes Lucide |
| **Aperçu** | Carrousel Swiper.js des écrans de l'application |
| **À propos** | Mission, valeurs et présentation de l'équipe |
| **Contact** | Formulaire de pré-inscription avec validation côté client |
| **Footer** | Coordonnées, navigation rapide et réseaux sociaux |

---

## Stack technique

- **HTML5** — structure sémantique
- **CSS3** — variables, Grid, Flexbox, animations, responsive (mobile-first)
- **JavaScript (Vanilla)** — pas de framework
- **[Lucide Icons](https://lucide.dev/)** — icônes SVG modernes
- **[AOS](https://michalsnik.github.io/aos/)** — animations au scroll
- **[Swiper.js](https://swiperjs.com/)** — carrousels
- **Google Fonts** — police *Inter*

> ✅ Aucune installation, aucun build : il suffit d'ouvrir `index.html` dans un navigateur.

---

## Structure du projet

```
GestionFinanciereEtudiant/
├── index.html              # Structure HTML
├── styles.css              # Tous les styles
├── script.js               # Logique JavaScript (validation, animations, carrousels)
├── README.md               # Ce fichier
└── resources/
    └── images/             # Photos de l'équipe et illustrations
        ├── ANTA DIOP.jpeg
        ├── Dior Dieng.jpeg
        ├── NDEYE MATY DIOUF.jpeg
        └── MOULOUNDOU KIMBASSA MARDOCHE.jpeg
```

---

## Lancement

### Option 1 — Ouvrir directement
Double-cliquez simplement sur `index.html`.

### Option 2 — Serveur local (recommandé)

Avec **Python** :
```bash
python -m http.server 8000
```

Avec **Node.js** :
```bash
npx serve .
```

Puis ouvrez [http://localhost:8000](http://localhost:8000) dans votre navigateur.

> 💡 Une connexion Internet est recommandée au premier chargement pour récupérer les bibliothèques (Lucide, AOS, Swiper) et les polices Google Fonts via CDN.

---

## Personnalisation

### Ajouter / remplacer des images
1. Placez vos fichiers dans `resources/images/`.
2. Référencez-les dans `index.html` :
   ```html
   <img src="resources/images/votre-image.jpg" alt="Description" />
   ```

### Modifier les couleurs
Toutes les couleurs sont centralisées dans `styles.css` au début du fichier :

```css
:root {
    --primary: #1A3C5E;          /* Bleu profond */
    --secondary: #4ABFA5;        /* Vert émeraude */
    --bg-alt: #F4F8FB;           /* Fond alterné */
    /* ... */
}
```

### Modifier le formulaire
La logique de validation se trouve dans `script.js` (section *VALIDATION FORMULAIRE*).

---

## Identité visuelle

| Élément | Valeur |
| --- | --- |
| **Nom** | FinÉtu |
| **Slogan** | *Gérez votre argent étudiant, simplement.* |
| **Couleur principale** | `#1A3C5E` (bleu profond) |
| **Couleur secondaire** | `#4ABFA5` (vert émeraude) |
| **Police** | Inter (Google Fonts) |
| **Style** | Moderne, épuré, professionnel, mobile-first |

---

## Équipe

Projet réalisé par les étudiants de **L2 GL G3** :

- **Anta Diop**
- **Dior Dieng**
- **Ndeye Maty Diouf**
- **Mouloundou Kimbassa Mardoche**

---

## Licence

© 2025 FinÉtu — Projet universitaire · Sénégal.
Tous droits réservés.
