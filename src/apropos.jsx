const AProPos = ({ viewBox, setViewBox }) => {
  return (
    viewBox && (
      <div id="APropos" className="modal">
        <div class="modalBlocAPropos">
          <div class="imagemodal">
            <img src="./public/EduRhum.png" />
          </div>
          <div class="modalText">
            <h3 class="modalTextTitle">A propos</h3>
            <p class="modalTextParagraphe">Salut à toutes et à tous !</p>
            <p class="modalTextParagraphe">
              Bienvenue dans le Bureau des Étudiants du BUT Informatique de
              Lille ! Le BDE est là pour animer vos journées, briser la routine
              des lignes de code et vous offrir des moments de détente bien
              mérités. Que ce soit pour des soirées, des tournois de jeux
              vidéos, ou des sorties, on s’assure qu’il y ait toujours une bonne
              occasion de se retrouver et de s’amuser. En plus de ça, on est là
              pour vous accompagner tout au long de votre parcours, répondre à
              vos questions (même les plus techniques), et surtout, vous
              rappeler que l'université est aussi là pour que l'on s'amuse.
              Alors, si vous avez des idées, des envies ou juste besoin de
              souffler entre deux TP, rejoignez-nous ! Venez discuter avec nous
              autour d’un café, et pourquoi pas, nous rejoindre pour faire vivre
              ce BDE encore plus fort !
            </p>
            <div id="contenuAPropos">
              <h1>LE BUREAU :</h1>
              <h2 class="gauche">PRESIDENT : Enzo</h2>
              <p class="gauche">
                Le captain -morgan- du navire, mais entre-nous il est juste là
                pour faire joli.
              </p>
              <h2 class="droite">VICE PRESIDENT : Hugo</h2>
              <p class="droite">Elisabeth Borne, sans les 49.3.</p>
              <h2 class="gauche">SECRETAIRE : Malori</h2>
              <p class="gauche">
                Gère la paperasse & les injonctions d'éloignement contre Enzo.
              </p>
              <h2 class="droite">TRESORIER : Antoine</h2>
              <p class="droite">
                Détourne les fonds, il lui arrive d'accidentellement d'en
                laisser au BDE.
              </p>

              <h1>L'EQUIPAGE</h1>
              <h2 class="gauche">POLE EVENT : Léa, Ilies </h2>
              <p class="gauche">
                Nés pour aller au bar sur les frais d'entreprise, forcés à
                organiser les soirées.{" "}
              </p>
              <h2 class="droite">POLE COMMUNICATION : Florine, Malori </h2>
              <p class="droite">
                Rien à voir avec Deconninck, on ping juste everyone quand il
                faut (surtout Florine).
              </p>
              <h2 class="gauche">POLE EMPLOI : Mathéo, Maxime, Ambroise </h2>
              <p class="gauche">
                Livrés avec le local, purement décoratifs, nous aident parfois.{" "}
              </p>
            </div>

            <p class="modalTextParagraphe millieu">
              À très vite, et que le code soit avec vous !
            </p>
          </div>
          <div class="modalBtn" id="goHomeAP">
            <button
              onClick={() => {
                setViewBox(!viewBox);
              }}
            >
              retour a l'accueil
            </button>
          </div>
        </div>
      </div>
    )
  );
};
export default AProPos;
