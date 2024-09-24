/**
 * Actualización de las regiones de las ciudades.
 * Falta una región.
 */

db.getCollection("logistic_cities").updateMany(
  { regionCode: "01" },
  { $set: { regionName: "REGIÓN DE TARAPACÁ" } }
);

db.getCollection("logistic_cities").updateMany(
  { regionCode: "02" },
  { $set: { regionName: "REGIÓN DE ANTOFAGASTA" } }
);

db.getCollection("logistic_cities").updateMany(
  { regionCode: "03" },
  { $set: { regionName: "REGIÓN DE ATACAMA" } }
);

db.getCollection("logistic_cities").updateMany(
  { regionCode: "04" },
  { $set: { regionName: "REGIÓN DE COQUIMBO" } }
);

db.getCollection("logistic_cities").updateMany(
  { regionCode: "05" },
  { $set: { regionName: "REGIÓN DE VALPARAISO" } }
);

db.getCollection("logistic_cities").updateMany(
  { regionCode: "06" },
  { $set: { regionName: "REGIÓN DEL LIBERTADOR GENERAL BERNARDO O´HIGGINS" } }
);

db.getCollection("logistic_cities").updateMany(
  { regionCode: "07" },
  { $set: { regionName: "REGIÓN DEL MAULE" } }
);

db.getCollection("logistic_cities").updateMany(
  { regionCode: "08" },
  { $set: { regionName: "REGIÓN DEL BÍO-BÍO" } }
);

db.getCollection("logistic_cities").updateMany(
  { regionCode: "09" },
  { $set: { regionName: "REGIÓN DE LA ARAUCANÍA" } }
);

db.getCollection("logistic_cities").updateMany(
  { regionCode: "10" },
  { $set: { regionName: "REGIÓN DE LOS LAGOS" } }
);

db.getCollection("logistic_cities").updateMany(
  { regionCode: "11" },
  {
    $set: { regionName: "REGIÓN DE AYSÉN DEL GENERAL CARLOS IBAÑEZ DEL CAMPO" },
  }
);

db.getCollection("logistic_cities").updateMany(
  { regionCode: "12" },
  { $set: { regionName: "REGIÓN DE MAGALLANES Y LA ANTÁRTICA CHILENA" } }
);

db.getCollection("logistic_cities").updateMany(
  { regionCode: "13" },
  { $set: { regionName: "REGIÓN METROPOLITANA" } }
);

db.getCollection("logistic_cities").updateMany(
  { regionCode: "14" },
  { $set: { regionName: "REGIÓN DE LOS RÍOS" } }
);

db.getCollection("logistic_cities").updateMany(
  { regionCode: "15" },
  { $set: { regionName: "REGIÓN DE ARICA Y PARINACOTA" } }
);
