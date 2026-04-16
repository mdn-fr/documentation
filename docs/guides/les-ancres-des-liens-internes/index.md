---
title: Les ancres des liens internes
slug: /guides/les-ancres-des-liens-internes
tags: [guides, markdown]
---

Nous avons vu, dans un précédent guide, qu'il était possible de créer des liens en Markdown. Nous allons maintenant voir plus en détail comment fonctionnent les liens internes, leurs ancres et le types de liens qui existent.

## Les différents types de liens

### Les liens externes

Les liens en Markdown sont écrits d'une manière standardisée que nous avons vue précédemment :

```markdown
[Texte du lien](https://www.exemple.test)
```

Ce lien est un lien vers une ressource externe au site, on le voit à la présence du protocole au début de ce dernier (`https://`). Sur la documentation française, nous distinguons **deux types** de liens externes :

- les liens externes vers une ressource française : ces derniers sont simplement traités comme des liens.
- les liens externes vers une ressource anglophone : dans ce cas nous ajoutons un peu de HTML avec l'élément HTML [`<sup>`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/sup) pour afficher un texte en exposant, avec le texte « _angl._ » pour indiquer que la ressource est en anglais.

Les liens externes sont décidés par l'auteur·ice anglais·e, cependant nous pouvons parfois ajouter des liens vers des ressources françaises similaires pour agrémenter la page avec des informations et outils utiles.

### Les liens internes

Les liens internes ont le même format que les liens externes, à la différence que tous les chemins vont commencer par `/fr/docs/` et contenir le chemin vers les pages de la documentation.
Ce qui est ajouté après la barre oblique est le contenu qui est [utilisé dans la clé `slug`](/docs/guides/le-front-matter#clés-et-valeurs) des pages.

Nous distinguons **trois types** de liens internes, deux qui utilisent l'écriture Markdown et une qui utilise les macros.

- le premier type de liens internes utilisent la méthode d'écriture de Markdown avec un chemin qui commence avec `/fr/docs/`, mais lorsque la page n'existe pas en français, le MDN va convertir le lien vers un lien de repli avec `/docs/en-US/` et marquer le lien comme anglais dans son titre.
- le second type de liens a des similarités avec la première méthode, mais ajoute un [Fragment d'une URI](https://developer.mozilla.org/docs/Web/URI/Reference/Fragment) pour diriger la personne qui clique sur ce lien, vers le titre ciblé. Les fragments ont une règle d'écriture sur le MDN, voici ce qu'il faut savoir :
  - Les espaces sont remplacés par des tirets bas `_` `U+005F UNDERSCRORE`, car les tirets sont préservés dans les liens pour les titres qui en contiennent (ce qui va donner `mot_-_mot` autour d'un tiret) ;
  - Le fragment doit être écrit en minuscules ;
  - Les accents sont préservés ;
  - Les apostrophes sont supprimées ;

  Cela donne ceci avec un titre comme `La représentation d'une ancre « dans la page »` :
  
  ```markdown
  Voir la section [La représentation d'une ancre «&nbsp;dans la page&nbsp;»](lien/vers/la/page#la_représentation_dune_«_ancre_dans_la_page_») pour plus d'informations.
  ```

- les macros, que nous verrons plus tard, sont des liens vers des pages pour certaines comme `HTMLElement`, `CSSxRef` ou `JSxRef`. Toutes les macros ne sont pas des liens, mais une partie des macros qui font référence à des ressources régulièrement nommées `xRef` seront des liens.

Il faut donc pouvoir discerner les différents liens pour savoir quand transformer des liens vers des macros. Les macros sont une méthode d'écriture permettant de faciliter la lecture des pages pour les contributeur·ice·s, mais aussi de fournir des options sur les liens qui enlèvent certains usages de balises Markdown.

#### Les liens erronés

Afin de voir facilement les liens qui n'exsitent pas, le MDN ajoute un style différent pour les pages qui ne dirivent vers rien. Les liens sont affichés en rouge et sont signalés comme des erreurs. Pour les macros se transformant en liens, ce style est également appliqué pour signaler l'erreur.

## Résumé

Nous avons vu dans ce guide les différents types de liens et leur écriture, les liens externes vers des ressources complémentaires et les liens internes que nous pouvons créer entre les pages avec le balisage Markdown, ou les macros. Nous allons pouvoir aborder ensuite ce qui rend nos exemples interactifs et comment cela fonctionne, car comme les liens faisant référence à une ancre d'un titre, les exemples interactifs ont une particularité liée aux titres.
