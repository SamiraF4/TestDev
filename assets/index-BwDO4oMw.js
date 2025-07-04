(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))t(n);new MutationObserver(n=>{for(const e of n)if(e.type==="childList")for(const i of e.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function a(n){const e={};return n.integrity&&(e.integrity=n.integrity),n.referrerPolicy&&(e.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?e.credentials="include":n.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function t(n){if(n.ep)return;n.ep=!0;const e=a(n);fetch(n.href,e)}})();const o=`<section class="destinations section">
  <div class="container destinations__container">
    <h2 class="destinations__title">
      Voyage de noces, quelle destination choisir ?
    </h2>
    <p class="destinations__subtitle">
      Découvrez notre sélection de voyage de noces à la hauteur de vos envies !
    </p>

    <div class="cards">
      <div
        class="card card--australie"
        style="--bg: url('images/australie.png')"
      >
        <div class="card__content">
          <h3>📍 Australie</h3>
          <p>
            L’Australie, la plus grande île du monde. Entre désert, forêt et
            barrière de corail.
          </p>
          <div class="stars">★ ★ ★ ★ ☆</div>
        </div>
      </div>

      <div class="card card--maldives" style="--bg: url('images/maldives.png')">
        <div class="card__content">
          <h3>📍 Maldives</h3>
          <p>Les Maldives et leurs trésors sous-marins.</p>
          <div class="stars">★ ★ ★ ★ ★</div>
        </div>
      </div>

      <div class="card card--tanzanie" style="--bg: url('images/tanzanie.png')">
        <div class="card__content">
          <h3>📍 Tanzanie</h3>
          <p>
            La Tanzanie, un safari exceptionnel au cœur de la vie sauvage et
            authentique.
          </p>
          <div class="stars">★ ★ ★ ★ ★</div>
        </div>
      </div>

      <div
        class="card card--thailande"
        style="--bg: url('images/thailande.png')"
      >
        <div class="card__content">
          <h3>📍 Thaïlande</h3>
          <p>La Thaïlande, entre Soleil, eau chaude et vue imprenable.</p>
          <div class="stars">★ ★ ★ ★ ☆</div>
        </div>
      </div>
    </div>
  </div>
</section>
`,r=`<section class="unique section">
  <div class="container unique__content">
    <h2 class="unique__title">Ce qui nous rend unique</h2>
    <p class="unique__intro">
      Votre expert voyage prend le temps de comprendre vos envies et vous aidera
      dans l’organisation de votre voyage de noces.
    </p>

    <div class="unique__image-block">
      <img
        src="/TestDev/assets/images/transats.png"
        alt="Plage paradisiaque"
        class="unique__image"
      />

      <div class="unique__advantages">
        <div class="advantage-card">
          <img
            src="/TestDev/assets/icons/oreille.png"
            alt="À votre écoute"
            class="advantage-card__icon"
          />
          <div>
            <h3 class="advantage-card__title">À votre écoute</h3>
            <p class="advantage-card__text">
              Votre expert voyage prend le temps de comprendre vos envies et
              vous aidera dans l’organisation de votre voyage de noces.
            </p>
          </div>
        </div>

        <div class="advantage-card">
          <img
            src="/TestDev/assets/icons/mesure.png"
            alt="Création sur-mesure"
            class="advantage-card__icon"
          />
          <div>
            <h3 class="advantage-card__title">Création sur-mesure</h3>
            <p class="advantage-card__text">
              Votre expert voyage crée un voyage de noces sur-mesure entièrement
              personnalisé pour vous.
            </p>
          </div>
        </div>

        <div class="advantage-card">
          <img
            src="/TestDev/assets/icons/vip.png"
            alt="Prestations exclusives"
            class="advantage-card__icon"
          />
          <div>
            <h3 class="advantage-card__title">Nos prestations exclusives</h3>
            <p class="advantage-card__text">
              Nous vous proposons des services qui vous faciliteront et vous
              accompagneront tout au long de votre séjour.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="unique__text-block">
      <h3 class="unique__text-title">
        Organiser votre lune de miel n’aura jamais été aussi simple !
      </h3>
      <p class="unique__text-paragraph">
        Vous recherchez un voyage de noces pas cher, un voyage de noces luxe,
        une destination farniente ou encore à partir avec vos enfants, nous vous
        accompagnons à chaque étape de votre voyage pour répondre à vos besoins.
      </p>
      <a href="#" class="unique__text-link">En savoir plus</a>
    </div>
  </div>
</section>
`,c=`<section class="section-devis">
  <div id="devis-rectangle">
    <div id="devis-text">
      <h2>Demandez votre devis en ligne gratuitement !</h2>
      <p>
        My Honeymoon, confectionne avec vous des devis sur-mesures pour votre
        voyage de noce.
      </p>
      <button class="btn-outline">Demander un devis</button>
    </div>
  </div>

  <div id="devis-image-group">
    <div id="devis-image"></div>
  </div>

  <div id="devis-circles">
    <div id="devis-circle1"></div>
    <div id="devis-circle2"></div>
  </div>
</section>
`,d=`<section class="mylist section">
  <div class="container mylist__content">
    <div class="centered-container">
      <img
        src="/TestDev/assets/icons/logo.png"
        alt="Logo centré"
        class="centered-img"
      />
    </div>

    <p class="mylist__description">
      Avec My Liste, votre famille et vos amis participent à votre voyage de
      noces …
    </p>

    <div class="mylist__steps">
      <div class="mylist__step">
        <img
          src="/TestDev/assets/icons/formulaire.png"
          alt="Formulaire"
          class="mylist__icon"
        />
        <div class="mylist__text">
          <span>1.</span>
          <p>Remplissez le formulaire pour créer votre liste.</p>
        </div>
      </div>
      <div class="mylist__step">
        <img
          src="/TestDev/assets/icons/pinceau.png"
          alt="Pinceau"
          class="mylist__icon"
        />
        <div class="mylist__text">
          <span>2.</span>
          <p>Personnalisez et remplissez votre espace.</p>
        </div>
      </div>
      <div class="mylist__step">
        <img
          src="/TestDev/assets/icons/enveloppe.png"
          alt="Invitation"
          class="mylist__icon"
        />
        <div class="mylist__text">
          <span>3.</span>
          <p>
            Informez vos proches grâce à l’invitation électronique que nous
            mettons à votre disposition.
          </p>
        </div>
      </div>
    </div>

    <button class="mylist__button">Decouvrir my liste</button>
  </div>
</section>
`;document.getElementById("app").innerHTML=`
  ${o}
  ${r}
  ${c}
  ${d}
`;
