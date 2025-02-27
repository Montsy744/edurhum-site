import { useState } from "react";

const Equipe = ({ equipage, setEquipage }) => {
  const [index, setIndex] = useState(0);
  const [team, setTeam] = useState([
    {
      name: "Ensoho",
      person: "Enzo Leclercq",
      role: "Président",
    },
    {
      name: "Max on the beach",
      person: "MAXIME GOSSELIN",
      role: "Pôle Emplois",
    },
    {
      name: "Léalcoolique",
      person: "LEA BAR",
      role: "Pôle Event",
    },
    {
      name: "Maloricard",
      person: "MALORI ALVAREZ",
      role: "Pôle com",
    },
    {
      name: "Mathéopen bar",
      person: "MATHEO DESPREZ",
      role: "Pôle Emplois",
    },
    {
      name: "Hugueule de bois",
      person: "HUGO STRASEELE",
      role: "Vice-Président",
    },
    {
      name: "Florivre",
      person: "FLORINE LEFEBVRE",
      role: "Pôle Communication",
    },
    {
      name: "L'Ambroise",
      person: "AMBROISE DONNET",
      role: "Pôle Emplois",
    },
    {
      name: "Stupéfiantoine",
      person: "ANTOINE USAL",
      role: "Trésorier",
    },
    {
      name: "Le punch des ilies",
      person: "ILIES HARKOU",
      role: "Pôle Event",
    },
    {
      name: "Louismoncello",
      person: "LOUIS TREELS",
      role: "Pôle Emplois",
    },
  ]);
  const handlePrev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? team.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setIndex((prevIndex) =>
      prevIndex === team.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    equipage && (
      <div id="Notreequipe" class="modal">
        <div class="modalBlocNotreEquipe">
          <div class="imagemodal">
            <img src="./public/EduRhum.png" />
          </div>
          <div class="modalText">
            <h3 class="modalTextTitle">Notre équipe</h3>
            <p class="modalTextParagraphe">
              Voici notre équipe composée des étudiants les plus drôles et les
              plus investis que cette université puisse compter.
            </p>
          </div>
          <div className="carrousselNE">
            <main
              id="carousel"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {team.map((element, i) => (
                <div key={i} className="item">
                  <h1>{element.name}</h1>
                  <h3>{element.person}</h3>
                  <p>{element.role}</p>
                </div>
              ))}
            </main>

            {/* Bouton précédent */}
            <button onClick={handlePrev} className="mr-5">
              {"<-"}
            </button>

            {/* Bouton suivant */}
            <button onClick={handleNext}>{"->"}</button>
          </div>
          <div class="modalBtn" id="goHomeNE">
            <button
              onClick={() => {
                setEquipage(!equipage);
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

export default Equipe;
