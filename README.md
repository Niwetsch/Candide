## Candide ou l’Optimiste : Géolocalisation de Candide au fil de son histoire (5 chapitres)
### 1.	Introduction
Candide ou l’Optimiste est une œuvre de Voltaire écrite durant le XVIIIe siècle. Ce conte traite du voyage de Candide, le héros de l’histoire, à travers le monde après avoir été banni de ce qui constituait pour lui un paradis à savoir le château de Thunder-ten-tronckh de Vestphalie. C’est justement ce long voyage au travers duquel Candide retrouve ces amis, eux aussi exclus du château, que ce tourne ce travail de publication numérique. L’idée de base était de pouvoir suivre les lieux traversés par Candide géographiquement tout en lisant le texte. En effet, la question de fond de ce projet était de savoir comment faciliter la reprise de la lecture à une personne lorsqu’elle lit un livre numérique. Les éléments de géolocalisation du personnage Candide permettent en partie de resituer le lecteur à la ligne où il s’était arrêté lors de la précédente lecture. Quelques éléments facilitant la découverte du texte ont également été ajoutés (pour des raisons pratiques, il a été décidé de limiter le texte de Candide aux cinq premiers chapitres. Le processus existant dans cette première partie du texte peut par la suite être généralisé à toute l’œuvre). Ce site est fait avant tout pour les ordinateurs, mais peut également être vu sur les tablettes si elles sont tenues en mode paysage. 

Le lien suivant en montre le résultat : https://cdn.rawgit.com/Niwetsch/Candide/342270e3/Candide/index.html

Cependant, il est possible que certaines fonctionnalités ne s'affichent pas correctement depuis Github. Ainsi, l'image suivante permet de visualiser et apprécier le travail en cas de problème.




![Candide](https://github.com/Niwetsch/Candide/blob/master/Candide/Image%20Candide.PNG "Candide")


### 2.	Fonctionnalités
Dans le schéma de base, l’idée de départ était de diviser la page internet en deux avec une colonne réservée au texte et une autre pour l’essentiel à des interactions avec la carte. Ainsi, en décortiquant la présentation, à gauche se trouve le texte avec lequel deux interactions sont possibles. La première, par un click sur les numéros surélevés dans le texte, il est possible d’arriver directement sur la note en bas de page contenant les explications d’un mot ou d’une phrase. En cliquant sur la flèche tournée vers le haut située dans les notes en bas de page, la lecture reprend sur la ligne où se situait le mot avec le numéro. 
La deuxième interaction se fait avec l’aide de certains mots placés en bleu. Il s’agit en fait de liens qui permettent au lecteur au moyen d’un click de se situer sur la carte située à la droite du texte. La carte zoome ainsi directement sur le lieu sélectionné.

Au niveau de la colonne de droite, il y a d’abord deux boutons pour avancer et reculer dans la lecture. Certains lecteurs préfèrent avancer à pas de click plutôt que de défiler le texte en utilisant la roue de la souris ou le doigt sur une tablette. Avec ces deux boutons, le lecteur peut avancer et reculer dans la lecture de manière adaptée, car l’espace d’avancement et de recul a été réglé pour permettre de s’y retrouver. 

En dessous de ces fonctions se trouve un autre bouton ainsi qu’un menu déroulant et une carte. Cette dernière correspond à une carte politique actuelle du monde. Il est possible de la changer grâce au bouton situé en haut à droite de la carte. Il permet d’activer la carte physique du monde. 

En dessous du zoom se trouve la légende qui explique les icônes et les traits situés sur la carte. Les premières correspondent aux lieux de passages de Candide, numérotés dans l’ordre de la fréquentation de ces lieux ; les seconds montrent le tracé reliant ces lieux. Sur la carte n’apparaissent que cinq lieux, soit autant d’endroits que Candide a fréquentés dans les cinq premiers chapitres du conte. De plus, chaque numéro possède une infobulle qui s’active en cliquant sur l’icône. 

En bas à droite de la carte se trouvent l’échelle et les crédits de chaque carte. 

Les deux boutons situés sur la carte permettent également de régler le zoom. En centrant sur la carte, le premier permet de faire en sorte que l’essentiel des points soient visibles et possède donc un niveau de zoom faible. Le second bouton permet de zoomer sur les lieux que Candide a visités avec un niveau de zoom accru.  

Pour finir, sur la gauche de la page internet, un plugin a été ajouté (barre de couleur bleu-vert et saumon). Elle indique la taille de la page et le lieu où se situe le lecteur par rapport à la fin. Ce plugin JQuery Scrolline provient du site internet suivant : https://github.com/anthonyly/Scrolline.js?files=1. 

Concernant le format de la page internet, c’est par Bootstrap que les divers éléments ont pu être fixés. Ainsi, pour les formats plus petits que les tablettes paysages, la carte et les fonctionnalités de la colonne de droite ne sont plus accessibles au lecteur.  
### 3.	Auteur du travail
Ce travail a été réalisé par Monsieur Kevin Bouchir dans le cadre du cours de « publication numérique » donné à l’Université de Lausanne (Unil) par Monsieur Isaac Pante. Le lien suivant permet d'accéder à la section des sciences du langages et de l'information de l'Unil pour plus de détails : https://www.unil.ch/sli/fr/home.html.

La licence se trouve derrière le lien suivant: [LICENCE](https://github.com/Niwetsch/Candide/blob/master/LICENCE)
### 4.	Sources
Candide, ou l’Optimisme/Garnier 1877 (2015, 27 décembre). In Wikisource [en ligne]. Disponible sur https://fr.wikisource.org/wiki/Candide,_ou_l’Optimisme/Garnier_1877

Candide ou l'optimisme : Personnages et lieux principaux, résumé et thèmes du conte (s.d.) [en ligne]. Disponible sur  http://www.litterales.com/document_disparu.php?id=1454&table=litterature#ixzz4UzSLYtTz (consulté le 18 octobre 2016)
