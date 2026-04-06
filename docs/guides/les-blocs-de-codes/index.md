---
title: Les blocs de codes
slug: /guides/les-blocs-de-codes
tags: [guides, markdown, code]
---

Le MDN est une documentation des technologies utilisées sur le web, par les développeur·euse·s de site et applications. Pour présenter les différents aspects d'une technologie, nous utilisons des blocs de code qui prennent diverses formes selon le besoin.

## Comparer les différents types de blocs de code

Il existe cinq blocs de codes, chacun apportant une opération différente selon les besoins.

- [Le bloc de code standard](#le-bloc-de-code-standard)
- [Le bloc de code présentant un mauvais code](#le-bloc-de-code-présentant-un-mauvais-code)
- [Le bloc de code présentant un bon code](#le-bloc-de-code-présentant-un-bon-code)
- [Le bloc de code masqué](#le-bloc-de-code-masqué)
- [Le bloc de code intégré dans un exemple interactif](#le-bloc-de-code-intégré-dans-un-exemple-interactif)

### Le bloc de code standard

Nous l'avons présenté dans la liste des éléments Markdown, le bloc de code de base nous permet de présenter l'écriture d'un élément.

````markdown
  ```html
  <div>Contenu de votre élément</div>
  ```
````

### Le bloc de code présentant un mauvais code

Pour rendre un bloc de code comme une alerte signalant qu'on présente un code à ne pas utiliser, nous ajoutons un mot clé `example-bad` après le type de langage.

````markdown {1}
  ```html example-bad
  <div>Contenu de votre élément</div>
  ```
````

### Le bloc de code présentant un bon code

Pour rendre un bloc de code comme une alerte signalant qu'on présente un code à utiliser, nous ajoutons un mot clé `example-good` après le type de langage.

````markdown {1}
  ```html example-good
  <div>Contenu de votre élément</div>
  ```
````

### Le bloc de code masqué

Afin d'utiliser du code, mais ne pas l'afficher car : déjà présenté une fois, n'apporte rien à l'explication ou est trop long pour être présenté ; nous masqons les blocs techniques pour ne rendre visibles que les codes utiles ou les résultats. De ce fait, nous utilisons le mot clé `hidden` pour masquer un bloc de code.

````markdown {1}
  ```html hidden
  <div>Contenu de votre élément</div>
  ```
````

### Le bloc de code intégré dans un exemple interactif

Afin de créer des exemples itéractifs, il existe de nombreux mots clés avec des effets différents, nous avons présenté le résultat de ce bloc de code dans [un article présentant les exemples interactifs](/docs/guides/les-exemples-interactifs#les-exemples-interactifs).

Les divers mots clés sont les suivants :

- `interactive-example`
  - C'est le mot clé par défaut qui traite le bloc de code comme un élément à rendre directement. Le bloc créé en résultat diffère selon le langage assigné au bloc de code. Par exemple, définir du JavaScript affichera une console à la place d'un rendu HTML.
- `interactive-example-choice`
  - Ce mot clé traite le bloc de code comme un choix à cliquer pour faire évoluer l'exemple selon le choix des lecteur·ice·s. Vous pouvez voir [un exemple avec du CSS dans l'article précédent](/docs/guides/les-exemples-interactifs#les-exemples-interactifs).

## Résumé

Maintenant que vous connaissez les différents types de blocs de code que nous utilisons, nous allons pouvoir aborder un aspect que nous n'avons que effleuré, les macros. Car les macros utilisent ces blocs de codes pour créer les éléments interactifs avec `InteractiveExample` et `EmbedLiveSample`. Mais ce ne sont pas les seules macros qui existent et que nous utilisons.
