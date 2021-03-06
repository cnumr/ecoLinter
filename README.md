# eslint-plugin-greenit

GreenIT rules for JavaScript and CSS

# Javascript 

## Installation 

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-greenit`:

```
$ npm install eslint-plugin-greenit --save-dev
```

## Usage

Add `greenit` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "greenit"
    ]
}
```

Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "greenit/rule-name": 2
    }
}
```

## Supported Rules

| Name | Description |
| :--  | :--         |
| [measure-triggering-reflow](docs/rules/measure-triggering-reflow.md) | Signal measurements that might force the browser to reflow |
| [no-function-call-in-loop-declaration](docs/rules/no-function-call-in-loop-declaration.md) | Prevent calling a function at each iteration of a for loop |
| [no-multiple-css-modifications](docs/rules/no-multiple-css-modifications.md) | Signal stylistic changes that could be grouped to limit repaint and reflow |

# CSS

Linter CSS du plugin sonar green IT. Linter basé sur stylelint. 

## Prerequis
- Node >= 10

## Liens

- https://stylelint.io/user-guide/get-started

## Getting started

Installer les dépendances du project :

`npm i`

### Ajouter de nouvelles règles

Créer un fichier JS pour votre règle dans le répertoire `rules` basé vous sur une des règles déja créé.

Les points important d'une règle :

- Son nom qu'il faudra réferencer dans le fichier de configuration du plugin `.stylelintrc.json`.
`const ruleName = "testim-plugin/standard-policy";
`

- Le message renvoyé :
``const messages = ruleMessages(ruleName, {
expected: (unfixed, fixed) => `Expcted "${unfixed}" to be one of "${fixed}"`, }
);
``

- La règle en elle même

`module.exports = stylelint.createPlugin(.....)`


### Test
Pour tester votre règle exécuter la commande suivante :

`npm test`

Ou bien en testant uniquement sur le fichier CSS correspondant à votre règle :

`npx stylelint ressources/MonFichierCss.css `

### Génerer et importer le rapport dans sonarqube

Considérons que vous vous trouvez dans le répertoire du projet. Exécuter la commande :

`stylelint $PATH_DU_PROJET_CIBLE -f json > stylelint-report.json`

#### Depuis L'IHM
Administration -> Configuration -> Language -> CSS

![img.png](../images/img_6.png)

https://docs.sonarqube.org/latest/analysis/external-issues/

#### Configuuration Sonar

Pour configurer les rapports du linter CSS dans sonarqube passez une liste de path délimité par des virgules.
La configuration peut se faire dans sonar-project.properties : 

`sonar.css.stylelint.reportPaths=/opt/project/stylelint-report.json`

ou bien en paramètre de lancement du jar :

`-Dsonar.css.stylelint.reportPaths=/opt/project/stylelint-report.json`

## Architecture

Voici un aperçu de l'architecture du projet :
```

css-linter             # Dossier racine du projet de linter JS
|
+--ressources          # Repertoire des fichiers css utilisé pour tester les règles
|  |
+--rules               # Repertoire contenant toutes les les règles
+--package.json  
\--.stylelintrc.json   # Fichier de configuration du plugin
```
