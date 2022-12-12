![Logo](docs/resources/logo-large.png)

---

<div style="color: red">

<h1>⚠️ WARNING: This repository is no longer maintained ⚠️
<br />
Please use the latest ecoCode version here :</h1>

</div>

<h2>
    <a href="https://github.com/green-code-initiative">Visit the new ecoCode repository</a>
</h2>
<h3>
<br />
Continue to follow the project on : 
<ul>
    <li>
        <a href="https://www.ecocode.io/">Our website</a>
    </li>
    <li>
        <a href="https://www.linkedin.com/showcase/ecocode-io/">Linkedin</a>
    </li>
</ul>
And join us on our public Slack : 
<ul>
    <li>
        <a href="https://join.slack.com/t/ecocode-workspace/shared_invite/zt-1lhvbit2p-WbaBoYZM6pcz4zZHE1WajQ">Slack</a>
    </li>
</ul>
<br /> © The ecoCode team that continues to love <a href="https://github.com/cnumr">cnmur</a> ♥
</h3>
</div>
<br />
<br />

---

# eslint-plugin-ecolinter

GreenIT rules for JavaScript and CSS

# Javascript 

## Installation 

You'll first need to install [ESLint](http://eslint.org) and eslint-plugin-ecolinter:

```
$ npm i eslint --save-dev
$ npm i eslint-plugin-ecolinter
```

## Usage (ESLint Rules)

Add `ecolinter` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "ecolinter"
    ]
}
```

Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "ecolinter/rule-name": "warn"
    }
}
```

It is always recommended to create npm scripts so that you can use them in CI systems as well.

`package.json` file:

For JavaScript projects, use the following npm scripts.
 
```json
{
    "scripts": {
        "lint:js": "eslint -c .eslintrc.js --ext .js,.jsx ."
    }
}
```
For TypeScript projects, use the following npm scripts.

```json
{
    "scripts": {
        "lint:js": "eslint -c .eslintrc.js --ext .js,.jsx,.ts,.tsx ."
    }
}
```

## Supported ESLint Rules

| Name | Description |
| :--  | :--         |
| [externalize-js-css](docs/rules/js/externalize-js-css.md) | Externalize the import of .js and .css files |
| [no-full-sql-request](docs/rules/js/no-full-sql-request.md) | SQL request should not select all fields in a table |
| [no-function-call-in-loop](docs/rules/js/no-function-call-in-loop.md) | Functions should not be called inside the declaration of a loop |
| [no-post-increment-var](docs/rules/js/no-post-increment-var.md) | Replace $i++ by ++$i |
| [no-try-catch-finally](docs/rules/js/no-try-catch-finally.md) | Avoid using try-catch-finally |
| [multiple-css-changes](docs/rules/js/multiple-css-changes.md) | Batch multiple CSS properties changes at once |
| [no-call-dom-object-multiple-times](docs/rules/js/no-call-dom-object-multiple-times.md) | Reduce DOM access assigning |
| [no-direct-DOM-access](docs/rules/js/no-direct-DOM-access.md) | No DOM access without assignation to avoid requesting the same element multiple times |
| [no-override-get-set](docs/rules/js/no-override-get-set.md) | Avoid to override getter or setter |
| [no-string-argument-settimeout-setinterval](docs/rules/js/no-string-argument-settimeout-setinterval.md) | Use a function for the first argument of setTimeout() and setInterval() |
| [no-resize-image](docs/rules/js/no-resize-image.md) | The file width and height should be adapted to the target size in the browser |


## Usage (Stylelint Rules)

Add the file of the rule to the plugins section of your `.stylelintrc` configuration file:

```json
{
    "plugins": [
        "./node_modules/eslint-plugin-ecolinter/lib/rules/css/rule-name.js"
    ]
}
```

Then activate the rules you want to use under the rules section.

```json
{
    "rules": {
        "greenit/rule-name": true
    }
}

```
It is always recommended to create npm scripts so that you can use them in CI systems as well.

`package.json` file:

 
```json
{
    "scripts": {
       "lint:css": "stylelint src"
    }
}
```

## Supported Stylelint Rules

| Name | Description |
| :--  | :--         |
| [no-custom-font](docs/rules/css/no-custom-font.md) | Avoid using custom font |
| [avoid-animation](docs/rules/css/avoid-animation.md) | Avoid too many css animations |


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
