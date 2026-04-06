---
title: Le « Front Matter »
slug: /guides/le-front-matter
tags: [guides, markdown, front-matter]
---

Le Markdown prend en charge les métadonnées comme le ferait une page HTML, dans un encadré nommé « <i lang="en">Front Matter</i> » qui peut se traduire par **Page de garde**. Ces métadonnées sont rangées en haut de la page Markdown, dans un format nommé YAML (équivalent à du JSON avec une syntaxe simplifiée).

## Le balisage des métadonnées

Pour que les métadonnées soient lues et interprétées par le moteur de rendu [Rari <sup>(angl.)</sup>](https://github.com/mdn/rari), elles doivent être encadrées en haut du document, dès la première ligne, par trois tirets `---` comme si vous ouvriez un bloc de code en Markdown. Le bloc doit être refermé de la même manière.

Cela donne ceci :

```markdown title="index.md" {1-2} showLineNumbers
---
---

Contenu de votre page
```

Cet exemple est bien, mais il manque l'essentiel : les données.

### Clés et valeurs

Les données qui sont utilisées dans la partie traduite de la documentation sont :

- `title`
  - Représente le titre de la page, en texte long.
- `short_title`
  - Représente le titre court de la page, il est affiché dans le fil d'Ariane et dans les barres de navigation latérales en remplacement du titre long.
- `slug`
  - Représente le chemin d'accès à la page, à partir de la racine `/files/fr/`. Les pages ne comportent donc que la suite du chemin selon les noms des dossiers.

    Par exemple, pour la page d'un élément HTML comme `<section>`, le chemin sera `Web/HTML/Reference/Elements/section`.
- `original_slug`
  - Cette valeur est créée par le robot des synchronisations des pages. Cela se produit quand une page change de chemin, par exemple lorsqu'un dossier change de nom ou de place. La valeur de `slug` utilisant l'ancien chemin est remplacée par le nouveau, et l'ancien chemin est enregistré dans `original_slug`.

    Cette valeur n'a pas d'utilité en dehors du processus de synchronisation. Nous supprimons systématiquement cette clé et sa valeur.
- `l10n.sourceCommit`
  - Afin de suivre l'évolution des pages par rapport à leur source, nous enregistrons le code de 40 caractères qui identife l'instantané de la page source. Cette valeur est récupérable sur la page Github anglaise dans son historique de modifications.

    :::note
    Vous pouvez également utiliser le plugin [MDN Macro Syntax <sup>(angl.)</sup>](https://marketplace.visualstudio.com/items?itemName=tristantheb.mdn-macros-syntax) sur VSCode pour profiter de la proposition automatique de mise à jour de la valeur de `sourceCommit`.
    :::

    :::warning
    Cette clé ne s'écrit pas comme nous le présentons, regardez [l'exemple de page de garde](#exemple-de-page-de-garde) que nous présentons après.
    :::

### Exemple de page de garde

Mettons en pratique ce que nous avons appris avec un exemple d'une page de garde provenant du MDN.

```markdown title="index.md" {2-5} showLineNumbers
---
title: "<section> : l'élément de section générique"
slug: Web/HTML/Reference/Elements/section
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Contenu de la page
```

Comme vous pouvez le remarquer, les données sont écrites sous une forme `clé: valeur` et ne sont séparées que par des retours à la ligne. Lorsqu'une clé contient une autre clé, on ajoute une indentation pour ajouter un niveau hiérarchique à la clé enfant.

C'est pourquoi nous n'écrivons pas :

```yaml showLineNumbers=4
# bad-example
l10n.sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
```

mais plutôt :

```yaml showLineNumbers=4
# good-example-start
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
# good-example-end
```

## La différence avec les pages anglaises

Les données présentes dans les pages anglaises sont différentes, car elles servent à définir tous les éléments qui seront affichés dans la page comme les barres latérales, les icônes d'état de la fonctionnalité, les liens vers les spécifications, les liens vers les ressources de comptatibilité, définitions css, etc.

Nous ne gardons aucune de ces données, car seule la page parente a besoin de les admnistrer, ce que nous utilisons permet de surcharger les données anglaises pour afficher une traduction à la place.

## Résumé

Nous savons maintenant écrire les métadonnées d'une page et savons ce qu'il est possible d'y écrire. Maintenant, nous allons regarder plus en détail comment fonctionnent certains éléments du MDN.
