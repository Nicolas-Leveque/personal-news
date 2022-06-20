# Personal News

https://personal-news.netlify.app/

La veille technologique est le quotidien de tout développeur, il existe de nombreux moyen de se tenir au courant des dernières nouveautés du monde de l'informatique, dont le célèbre daily.dev.

Mais quand est il de lq veille informationnelle généraliste? 

J'ai créé cet app pour obtenir en un instant les grand titre des principaux journaux de france avec un lien pour aller vers l'article, le tout avec une interface simple, minimaliste sans publicitées ni distraction.

Cette app est alimentée par une api que vous trouverez ici: https://github.com/Nicolas-Leveque/webscrapper-api 
Cette api va charger la page d'accueil et extraire les titres, liens et si possible une image d'illustration ( en cas d'impossibillité de charger une image, l'api utilisera une image de remplacement correspondant au site )

##Installation

Après avoir cloné le repo il suffit d'installer les dépendances:

```
npm install
```

et lancer l'application via les scripts nodejs:
```
npm start
```

Et voila, l'application va automatiquement se connecter au backend hébergé sur Heroku> Il suffit alors de cliquer sur un des boutons de la barre supérieur pour avoir accès au grand titre du site choisi.
