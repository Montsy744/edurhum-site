const DivAcc = () => {
  return (
    <div id="accueil" className="">
      <header>
        <img src="./public/Logo_Eduroam.png" />
        <ul>
          <li>
            <a href="#aPropos" class="underline-effect">
              Le BDE
            </a>
          </li>
          <li>
            <a href="./videos.html" class="underline-effect">
              Les Défis
            </a>
          </li>
          <button id="sigma"># SIGMA BOY</button>
        </ul>
      </header>
      <div id="bandeau">
        <img
          id="animatedImage"
          src="./public/sigmaAntoin.png"
          alt="sigma Antoine"
        />
        <div id="contenuBandeau">
          <h1>EduRhum</h1>
        </div>
      </div>
    </div>
  );
};

export default DivAcc;
