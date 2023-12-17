import "./host.scss";
import React from "react";
import Carousel from "../../components/Carrousel";
import logements from "../../logements.json";
import { useParams } from "react-router-dom";
import Collapse from "../../components/Collapse";
import { Navigate } from "react-router-dom";

function Host() {
  const { id } = useParams();
  const logement = logements.find((element) => element.id === id);

  if (!logement) {
    return <Navigate to="/error" />;
  }

  return (
    <div>
      <section>
        <Carousel pictures={logement.pictures} />
      </section>

      <section className="collapseContainer">
        <div className="collapseContainer__elements">
          <Collapse title="Description" description={logement.description} />
        </div>
        <div className="collapseContainer__elements">
          <Collapse
            title="Équipements"
            description={logement.equipments}
            isEquipments
          />
        </div>
      </section>
    </div>
  );
}

export default Host;
