<br id="toppage"/>

# :fire: <a href="https://big-screen-em.vercel.app/"  target="_blank" rel="noopenner noreferrer" >DEMO EN LIGNE</a> :fire:



### :closed_book: <a target="_blank" rel="noopenner noreferrer" href="https://github.com/BastosC/big-screen-em/raw/front-bastien/documentation/Brief.pdf">Brief</a> :closed_book:

### :green_book: <a target="_blank" rel="noopenner noreferrer" href="https://github.com/BastosC/big-screen-em/raw/front-bastien/documentation/Compétences-Livret-Pédagogique.pdf">Compétences Livret pédagogique</a> :green_book:

### :newspaper: <a target="_blank" rel="noopenner noreferrer" href="https://github.com/BastosC/big-screen-em/raw/front-bastien/documentation/Diagramme-Tables-SQL.jpg">Diagrame tables SQL</a> :newspaper:

<hr />

## <i>Déploiement rapide</i>

    dans /api :
        $ composer update
        -> configurer le .env en fonction de la DB 
      ( $ php artisan key:generate )
        $ php artisan migrate
        $ php artisan db:seed 
        $ php artisan serve

    dans /admin :
        -> configurer le .env en fonction de l'url de l'Api
        $ npm install
        $ npm run dev



<hr />

-   ### 1. Mise en place & compréhension du projet

    -   #### [1.1 - Description du projet](#section-1-1)
    -   #### [1.2 - Contexte et Méthode de travail](#section-1-2)

-   ### 2. Cahier des charges / Respect du brief / Livrables Annexes

    -   #### [2.1 - Libertés](#section-2-1)
    -   #### [2.2 - Contraintes de développement](#section-2-2)
    -   #### [2.3 - L'administraton](#section-2-3)
    -   #### [2.4 - L'API](#section-2-4)
    -   #### [2.5 - Données](#section-2-5)
    -   #### [2.6 - Analyse client](#section-2-6)
    -   #### [2.7 - Choix technologiques](#section-2-7)
    -   #### [2.8 - Evaluation du temps de travail](#section-2-8)
    -   #### [2.9 - Liste fonctionelle](#section-2-9)
    -   #### [2.10 - Diagramme de la base de données](#section-2-10)
    -   #### [2.11 - Documentation de l'API](#section-2-11)
    -   #### [2.12 - Adresse github](#section-2-12)
    -   #### [2.13 - Wireframe de la partie front de l'adminsitration'](#section-2-13)

-   ### 3. Divers
    -   #### [3.1 - Développeurs](#section-3-1)
    -   #### [3.2 - Hébergement en ligne](#section-3-2)
    -   #### [3.3 - Technologies utilisées](#section-3-3)

<br/>
<hr/>
<br/>

# <u>1. Mise en place & compréhension du projet</u>

<div id="section-1-1">
    <h4>1.2 Description du projet  <small><a href="#toppage">↑↑↑</a></small></h4>
Vous êtes développeur web dans une web agency internationale.
Votre nouveau client - Bigscreen - est une entreprise qui développe une application VR
permettant aux utilisateurs de regarder en VR des films, émissions TV et jeux vidéos sur un
écran géant virtuel, seul ou à plusieurs.
Afin de préparer la prochaine itération de leur application, ils désirent récolter des informations
de la part de leurs utilisateurs via un sondage en ligne.
Vous avez la responsabilité de la réalisation de ce sondage.


> Plus de détails dans le [Brief](https://github.com/BastosC/big-screen-em/raw/front-bastien/documentation/Brief.pdf)

</div>

<div id="section-1-2">
    <h4>1.2 Contexte et Méthode de travail <small><a href="#toppage">↑↑↑</a></small></h4>

Le site web que vous allez développer doit impérativement répondre à ces critères : 
⦁ L’application web est développée uniquement par le binôme
⦁ Elle doit utiliser le framework Laravel coté serveur
⦁ Elle doit répondre aux demandes décrites dans le cahier des charges
⦁ Utilisation de Github pour le versionning de votre code


# <u>2. Points du brief</u>

☑️✅🅾️

<div id="section-2-1">
    <h3>2.1 Libertés <small><a href="#toppage">↑↑↑</a></small></h3>
   <ul>
   <li>✅ Vous êtes libre d’utiliser les librairies tierces dont vous avez besoin</li>
   <br/>
   <p>Pour l'authentification de l'api nous avons utilisé comme base un <a href="https://github.com/PrijalBista/laravel-api-auth-sanctum-boilerplate">repo github</a> qui utilise Sanctum de laravel  </p>
   <p>Pour le front nous avons utilisé :
   <ul>
   <li>"axios": "^0.27.2" - Pour les appels REST</li>
   <li>"formik": "^2.2.9", - Pour les formulaires</li>
   <li>"gsap": "^3.11.1" - Pour les animations</li>
   <li>"react-collapsible": "^2.10.0" - React Element Collapse </li>
   <li>"react-router": "^6.4.0" - Router en V6</li>
   <li>"react-scripts": "^5.0.1" - CRA</li>
   <li>"@craco/craco": "^6.4.5" - Extend CRA config</li>
   <li>"react-select": "^5.4.0" - React Element Select</li>
   <!-- <li>"react-toastify": "^3.0.7" - Bundle vue app</li> -->
   <li>"recharts": "^2.1.14" - Graphiques / Datavizualisation</li>
   <li>"sass": "^1.54.9" - Better Stylesheets</li>
   </ul>
   </p>
   <li>☑️ Vous êtes libre d’utiliser les API et services tiers nécessaires</li>
   <br/>
 
   <li>✅ Vous êtes libre d’ajouter des fonctionnalités EN PLUS de la demande client</li>
  <ul>
  <li>Front : Scroll automatique </li>
  <li>Front : Légères animations </li>
  <li>Hébergement et démo en ligne </li>
  </ul>
   </ul>
</div>

<div id="section-2-2">
    <h3>2.2 Contraintes de développement <small><a href="#toppage">↑↑↑</a></small></h3>
     <ul>
     <li>☑️ L’anglais sera toujours utilisé pour les champs et les variables</li>
        <p>Fait .</p>
            <li>☑️ On utilisera le nommage en camelCase / PascalCase pour le nommage des fonctions et
        variables et nom des classes (gérées automatiquement par la CLI de Laravel)</li>
        <p>Fait .</p>
            <li>✅ Les méthodes et propriétés doivent être toujours commentées</li>
        <p>Quelques methodes sont comentés, 
        <!-- <details>
        <summary>Exemple 1</summary><img src="https://raw.githubusercontent.com/BastosC/big-screen-em/master/documentation/Capture1.JPG" /></details>
         <details>
        <summary>Exemple 2</summary><img src="https://raw.githubusercontent.com/BastosC/big-screen-em/master/documentation/Capture2.JPG" /></details> -->
        </p>
            <li>✅ Vous utiliserez la technique du contrôleur de ressource de Laravel pour le CRUD de
        ressource.</li>
        <p>
        <!-- <details>
        <summary>Exemple</summary><img src="https://raw.githubusercontent.com/BastosC/big-screen-em/master/documentation/Capture3.JPG" /></details> -->
        </p>
            <li>🅾️ Vous utiliserez le service de validation de Laravel pour la gestion des formulaires.</li>
        <p></p>
            <li>✅ Les données seront récupérées/traitées dans le code à l’aide du composant Eloquent de
        Laravel.</li>
        <p>
         <!-- <details>
        <summary>Exemple</summary><img src="https://raw.githubusercontent.com/BastosC/big-screen-em/master/documentation/Capture4.JPG" /></details> -->
        </p>
                <li>✅  Vous devez mettre en place un github pour versionner votre code</li>
        <p>Ce github</p>
                <li>✅ Vous devez mettre en place des migrations et des seeders pour la base de données.</li>
        <p>  
           <!-- <details>
        <summary>Exemple 1</summary><img src="https://raw.githubusercontent.com/BastosC/big-screen-em/master/documentation/Capture5.JPG" /></details>
         <details>
        <summary>Exemple 2</summary><img src="https://raw.githubusercontent.com/BastosC/big-screen-em/master/documentation/Capture6.JPG" /></details> -->
        </p>
     </ul>
</div>

<div id="section-2-3">
    <h3>2.3 L'administration <small><a href="#toppage">↑↑↑</a></small></h3>
    <ul>
     <li>✅ S’identifier et accéder à l’administration privée</li>
   <p>  
   Authentification avec Laravel Sanctum<br/>
   Access token sauvegardé dans le localstorage
   <!-- <details>
        <summary>Exemple 1</summary><img src="https://raw.githubusercontent.com/BastosC/big-screen-em/master/documentation/Capture7.JPG" /></details></p>
      <li>✅ Visualiser la liste des pairs supportées</li>
   <p> <details>
        <summary>Exemple 1</summary><img src="https://raw.githubusercontent.com/BastosC/big-screen-em/master/documentation/Capture8.JPG" /></details></p>
      <li>✅ Ajouter, modifier ou supprimer une paire de conversion</li>
   <p><details>
        <summary>Exemple 1</summary><img src="https://raw.githubusercontent.com/BastosC/big-screen-em/master/documentation/Capture9.JPG" /></details> -->
 </p>
     </ul>
</div>

<div id="section-2-4">
    <h3>2.4 L'API <small><a href="#toppage">↑↑↑</a></small></h3>
     <ul>
     <li>✅ L’API est de type REST</li>
   <p>
   <!-- <details>
        <summary>Exemple 1</summary><img src="https://raw.githubusercontent.com/BastosC/big-screen-em/master/documentation/Capture10.JPG" /></details> -->
        </p>
      <li>✅ Le endpoint de l’API devra être : /api</li>
   <p>
   Touts les points de l'api sont préfixés avec "/api"
   <details>
        <summary>Exemple 1</summary><img src="https://raw.githubusercontent.com/BastosC/big-screen-em/master/documentation/Capture11.JPG" /></details></p>
     </ul>
</div>

<div id="section-2-5">
    <h3>2.5 Les données <small><a href="#toppage">↑↑↑</a></small></h3>
  <ul>
      <li>✅ Questions - Une question comporte un body</li>
      <li>✅ Réponses -  Une réponse comporte un body et un question_id.</li>
      <li>✅ Questionnaires - Chaque questionnaire comporte 20 questions et un nom</li>
      <li>✅ Résultats - Chaque Résultat possède plusieurs réponses et un nom</li>
     </ul>
</div>

<div id="section-2-6">
    <h3>2.6 Analyse client <small><a href="#toppage">↑↑↑</a></small></h3>
   <p> </p>
</div>

<div id="section-2-7">
    <h3>2.7 Choix technologiques<small><a href="#toppage">↑↑↑</a></small></h3>
 <p> Motivez vos choix technologiques, aussi bien côté administration (front) que du côté de l’API
(back)</p>
> 
<i></i>
</div>

<div id="section-2-8">
    <h3>2.8 Evaluation du temps de travail<small><a href="#toppage">↑↑↑</a></small></h3>
 <a href="#section-1-2">Voir section "1.2 Contexte et Méthode de travail"</a>
</div>

<div id="section-2-9">
    <h3>2.9 Liste fonctionelle <small><a href="#toppage">↑↑↑</a></small></h3>
Listez de manière exhaustive les fonctionnalités à développer (administration et API)

Recettage
Faites un tableau avec comme entrée la liste fonctionnelle, et comme sortie si la fonctionnalité
est opérationnelle ou non opérationnelle (ou possède un bug, une limitation …)
[Voir ce repo github](https://github.com/BastosC/big-screen-em)
</div>

<div id="section-2-10">
    <h3>2.10 Diagramme de la base de données <small><a href="#toppage">↑↑↑</a></small></h3>
<p>  Insérez ici un diagramme des tables MySQL (réalisé sur feuille de papier ou à l’aide d’un logiciel
dédié, tel que mySql Worksbench)
Dans ce but expliciter les relations dans votre schéma : représentez les à l'aide de "flèches"
normalisées entre les tables ou entités.</p>
<img src="https://raw.githubusercontent.com/BastosC/big-screen-em/master/currencies/Diagramme table SQL.JPG" />
</div>

<div id="section-2-11">
    <h3>2.11  Documentation de l'API<small><a href="#toppage">↑↑↑</a></small></h3>
Rédigez de manière succincte :
<li>1. les différentes URL de l’API REST (avec le verbe HTTP)</li>
<li>2. Leur fonctionnalité</li>
<li>3. Les données retournées</li>
<li>4. Les message d’erreur possible</li>
<br/>

<ul>
<li>
<p><b>https://big-screen-em.herokuapp.com/api/ping</b></p>
<p>📗 Méthode : GET</p>
<p>Pour tester le status de l'api</p>
<p>Réponse : </p>
<code>{ api_on: Bool }</code> 
</li>
<br/>
<li>
<p><b>https://big-screen-em.herokuapp.com/api/convert</b></p>
<p>📘 Méthode : POST</p>
<p>Pour convertir un montant et deux monnaies</p>
<p>Requete : </p>
<code>{ currency_1:String, currency_2:String, amount: Number }</code>
<p>Réponse : </p>
<code>{ data: Number }</code> 
</li>
<br/>
<li>
<p><b>https://big-screen-em.herokuapp.com/api/currencies</b></p>
<p>📗 Méthode : GET</p>
<p>Pour obtenir la liste de toutes les monnaies</p>
<p>Réponse : </p>
<code>{ data: [ { name: String, code: String, rate:Float } ] }</code> 
</li>
<br/>
<li>
<p><b>https://big-screen-em.herokuapp.com/api/currencies</b></p>
<p>🔒 Cette route a besoin d'un token d'authentification</p>
<p>📘 Méthode : POST</p>
<p>Pour créer une monnaie</p>
<p>Requete : </p>
<code>{ name:String, code:String, rate: Float }</code>
<p>Réponse : </p>
<code>{ name:String, code:String, rate: Float }</code> 
</li>
<br/>
<li>
<p><b>https://big-screen-em.herokuapp.com/api/currencies/{id}</b></p>
<p>🔒 Cette route a besoin d'un token d'authentification</p>
<p>📙 Méthode : PUT</p>
<p>Pour modifier une monnaie grâce à l'id de la monnaie</p>
<p>Requete : </p>
<code>{ name:String, code:String, rate: Float }</code>
<p>Réponse : </p>
<code>{ name:String, code:String, rate: Float }</code> 
</li>
<br/>
<li>
<p><b>https://big-screen-em.herokuapp.com/api/currencies/{id}</b></p>
<p>🔒 Cette route a besoin d'un token d'authentification</p>
<p>📕 Méthode : DELETE</p>
<p>Pour supprimer une monnaie grâce à l'id de la monnaie</p>
<p>Réponse : </p>
<code>{ name:String, code:String, rate: Float }</code> 
</li>
<br/>
<li>
<p><b>https://big-screen-em.herokuapp.com/api/auth/login</b></p>
<p>📘 Méthode : POST</p>
<p>Pour se connecter et récuperer un access token</p>
<p>Requete : </p>
<code>{ email:String, password:String }</code>
<p>Réponse : </p>
<code>{ access_token: String }</code> 
</li>
<br/>
<li>
<p><b>https://big-screen-em.herokuapp.com/api/auth/user</b></p>
<p>🔒 Cette route a besoin d'un token d'authentification</p>
<p>📗 Méthode : GET</p>
<p>Pour récuperer les informations de l'utilisateur connecté avec l'access token</p>
<p>Réponse : </p>
<code>{ email: String, name: String }</code> 
</li>
<br/>
</ul>
</div>

<div id="section-2-12">
    <h3>2.12  Adresse github <small><a href="#toppage">↑↑↑</a></small></h3>
    <p>Adresse Gihtub : <a href="https://github.com/BastosC/big-screen-em">https://github.com/BastosC/big-screen-em</a></p> 
    <p>Adresse Démo : <a href="https://big-screen-em.vercel.app/" >https://big-screen-em.vercel.app/</a></p> 


</div>

<div id="section-2-13">
    <h3>2.13  Wireframe de la partie front<small><a href="#toppage">↑↑↑</a></small></h3>
<details>  <summary>Wireframe 1</summary><img src="https://raw.githubusercontent.com/BastosC/big-screen-em/master/documentation/Wireframe.jpg" /></details>
<details>  <summary>Wireframe 2</summary><img src="https://raw.githubusercontent.com/BastosC/big-screen-em/master/documentation/Wireframe2.jpg" /></details>
<details>  <summary>Wireframe 3</summary><img src="https://raw.githubusercontent.com/BastosC/big-screen-em/master/documentation/Wireframe3.jpg" /></details>
</div>


# <u>3. Divers</u>

<div id="section-3-1">
    <h3>3.1 Développeurs<small><a href="#toppage">↑↑↑</a></small></h3>
    <h5>Bastien CHANTREL</h5>
    <a href="mailto:bastien.chantrel.pro@gmail.com">bastien.chantrel.pro@gmail.com</a>
    <p>étudiant à l'école multimédia depuis 2018</p>
    <a href="https://fr.linkedin.com/in/bastien-chantrel" target='_blank' rel="noopenner noreferrer">Linkedin</a>
    <h5>Romain DENEUVE</h5>
    <p>étudiant à l'école multimédia depuis 2018</p>
    <a href="https://fr.linkedin.com/in/romain-deneuve" target='_blank' rel="noopenner noreferrer">Linkedin</a>
    
</div>

<div id="section-3-2">
    <h3>3.2 Hébergement en ligne<small><a href="#toppage">↑↑↑</a></small></h3>
    <h4>Base de données</h4>
    <span>remotemysql.com</span>
    <br/>
    <span>Gratuit avec limite</span>
    <span>
    <br/>
    DB_HOST=remotemysql.com
    <br/>
DB_PORT=3306
    <br/>
DB_DATABASE=MoLR1J1ETG
    <br/>
- Me contacter pour identifiants
</span>
    <h4>Hébergement front-end</h4>
  <span>Vercel</span>
    <br/>
    <span>Gratuit avec limite</span>
    <br/>
    <span>Sync avec le repo github</span>
        <br/>
    <a href="https://big-screen-em.vercel.app/">https://big-screen-em.vercel.app/</a>
       <h4>Hébergement back-end</h4>
  <span>Heroku</span>
    <br/>
    <span>Gratuit jusqu'au 22 Novembre 2022</span>
        <br/>
    <span>Sync avec le repo github</span>
<br/>
<a href="https://big-screen-em.herokuapp.com/api/ping" >https://big-screen-em.herokuapp.com/api/</a>
</div>

<div id="section-3-3">
    <h3>3.3 Technologies utilisées<small><a href="#toppage">↑↑↑</a></small></h3>
   <ul>
       <li> 
        <a href="https://vuejs.org/" target='_blank' rel="noopenner noreferrer">React.js</a>
    </li>
     <li> 
        <a href="https://www.php.net/" target='_blank' rel="noopenner noreferrer">PHP</a>
    </li>
     <li> 
        <a href="https://www.mysql.com/fr/" target='_blank' rel="noopenner noreferrer">MySQL</a>
    </li>
       <li> 
        <a href="https://laravel.com/" target='_blank' rel="noopenner noreferrer">Laravel</a>
        <li> 
        <a href="https://www.heroku.com/home" target='_blank' rel="noopenner noreferrer">Heroku</a>
    </li>
          <li> 
        <a href="https://vercel.com/features/previews" target='_blank' rel="noopenner noreferrer">Vercel</a>
    </li>

    
   </ul>
</div> 
