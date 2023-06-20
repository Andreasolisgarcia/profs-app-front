import React from "react";

const Teachers = () => {
  return (
    <div className="container">
      <div className="left-panel">
        {/* <img src="chemin_vers_la_photo" alt="Photo du professeur" /> */}
        <h2>Nom Prénom</h2>
        <div>
          <span style={{ display: "block" }}>Nombre d'étoiles : 5</span>
          <span style={{ display: "block" }}>Prix horaire : 10€</span>
        </div>
        <div>
          <h3>Niveau de cours</h3>
          <p>Niveau débutant à avancé</p>
        </div>
        <div>
          <h3>Matières enseignées</h3>
          <ul>
            <li>Mathématiques</li>
            <li>Physique</li>
            <li>Chimie</li>
          </ul>
        </div>
      </div>
      <div className="right-panel">
        <div>
          <h2>Renseignements sur le professeur</h2>
          <div>
            <h3>À propos de</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis
              orci id ipsum vestibulum, vitae varius mi aliquam. Phasellus
              sagittis malesuada dolor, eget eleifend enim sollicitudin a.
              Pellentesque habitant morbi tristique senectus et netus et malesuada
              fames ac turpis egestas. Quisque interdum dignissim arcu, sit amet
              fringilla urna pulvinar in. Sed iaculis varius massa ut malesuada.
              Curabitur ut iaculis dui, ac elementum mi. In vehicula tincidunt
              odio ac pharetra. Maecenas nec elit a sem pellentesque consequat eu
              at felis. Nam consectetur euismod neque in cursus. Morbi non metus
              eget tortor mattis tempus. Fusce consectetur, tortor in efficitur
              efficitur, lacus enim efficitur nulla, et finibus sem dui id lectus.
              Donec auctor velit vel erat pellentesque lobortis. Integer hendrerit
              augue eget eros laoreet, id vestibulum nisl venenatis. Praesent
              iaculis justo sed metus scelerisque varius. Nunc pulvinar tortor sit
              amet ligula tincidunt, eget vestibulum ipsum ultricies. Nullam nec
              velit in ipsum semper lacinia non et lectus. Maecenas dapibus
              condimentum eros, a interdum odio finibus eget. Quisque malesuada
              efficitur ex, vitae congue nisl fermentum in.
            </p>
          </div>
          <div>
            <h3>À propos du cours</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis
              orci id ipsum vestibulum, vitae varius mi aliquam. Phasellus
              sagittis malesuada dolor, eget eleifend enim sollicitudin a.
              Pellentesque habitant morbi tristique senectus et netus et malesuada
              fames ac turpis egestas. Quisque interdum dignissim arcu, sit amet
              fringilla urna pulvinar in. Sed iaculis varius massa ut malesuada.
              Curabitur ut iaculis dui, ac elementum mi. In vehicula tincidunt
              odio ac pharetra. Maecenas nec elit a sem pellentesque consequat eu
              at felis. Nam consectetur euismod neque in cursus. Morbi non metus
              eget tortor mattis tempus. Fusce consectetur, tortor in efficitur
              efficitur, lacus enim efficitur nulla, et finibus sem dui id lectus.
              Donec auctor velit vel erat pellentesque lobortis. Integer hendrerit
              augue eget eros laoreet, id vestibulum nisl venenatis. Praesent
              iaculis justo sed metus scelerisque varius. Nunc pulvinar tortor sit
              amet ligula tincidunt, eget vestibulum ipsum ultricies. Nullam nec
              velit in ipsum semper lacinia non et lectus. Maecenas dapibus
              condimentum eros, a interdum odio finibus eget. Quisque malesuada
              efficitur ex, vitae congue nisl fermentum in.
            </p>
          </div>
        </div>
        <div>
          <h3>Recommandations</h3>
          <div className="recommendation-section">
            <div className="recommendation-card">
              <div className="recommendation-card__profile">
                {/* Photo du profil */}
              </div>
              <div className="recommendation-card__content">
                <h4>Nom de l'utilisateur</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  mollis orci id ipsum vestibulum, vitae varius mi aliquam.
                </p>
                <div className="recommendation-card__rating">
                  {/* Étoiles de notation */}
                </div>
              </div>
            </div>
            {/* Ajoutez d'autres cartes de recommandation ici */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teachers;
