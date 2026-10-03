import { useState } from "react";
import { FICHES, NOTIONS, NIVEAUX, libelleNiveau } from "../data/fiches";
import { REGIONS, TOUTES_REGIONS, libelleRegion } from "../data/carte-regions";
import { VUE_NATIONALE, TRACE_REGIONS, TRACE_DISTRICTS } from "../data/carte-trace";
import { FicheDetail } from "./Ressources";
import { ArrowLeft, MapPin, Globe } from "lucide-react";

const TOUS = "Tous";

// ─── Couleur d'une zone selon son nombre de fiches ───────────
const PALIERS = [
  { min: 4, couleur: "#1a6b5a", label: "4 et plus" },
  { min: 2, couleur: "#4f9c7f", label: "2 ou 3" },
  { min: 1, couleur: "#a9d3c1", label: "1" },
  { min: 0, couleur: "#e6e0d3", label: "Aucune" },
];

function couleur(nombre) {
  return PALIERS.find((p) => nombre >= p.min).couleur;
}

function pluriel(n, mot) {
  return n + " " + mot + (n > 1 ? "s" : "");
}

// Rend une forme SVG utilisable au clavier comme un bouton
function surTouche(action) {
  return (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      action();
    }
  };
}

export default function Carte() {
  const [notion, setNotion] = useState(TOUS);
  const [niveau, setNiveau] = useState(TOUS);
  const [regionId, setRegionId] = useState(null);
  const [districtId, setDistrictId] = useState(null);
  const [ficheOuverte, setFicheOuverte] = useState(null);

  if (ficheOuverte) {
    return (
      <FicheDetail
        fiche={ficheOuverte}
        onRetour={() => setFicheOuverte(null)}
        libelleRetour="Retour à la carte"
      />
    );
  }

  const fiches = FICHES.filter((f) => {
    if (notion !== TOUS && f.notion !== notion) return false;
    if (niveau !== TOUS && f.niveau !== niveau) return false;
    return true;
  });

  // Nombre de fiches rattachées à une région
  function nombreDansRegion(id) {
    return fiches.filter((f) => f.region === id).length;
  }

  const partout = fiches.filter((f) => f.region === TOUTES_REGIONS);
  const region = REGIONS.find((r) => r.id === regionId);

  function choisirRegion(id) {
    setRegionId(id);
    setDistrictId(null);
  }

  return (
    <>
      <h1 className="titre-page">Carte des pratiques</h1>
      <p className="intro-page">
        Les pratiques sociales liées à la chimie, région par région. Chaque
        fiche est un point de départ possible pour une séquence.
      </p>

      <div className="filtres">
        <label className="filtre">
          <span className="filtre-label">Notion</span>
          <select value={notion} onChange={(e) => setNotion(e.target.value)}>
            <option value={TOUS}>{TOUS}</option>
            {NOTIONS.map((n) => <option key={n} value={n}>{n}</option>)}
          </select>
        </label>
        <label className="filtre">
          <span className="filtre-label">Niveau</span>
          <select value={niveau} onChange={(e) => setNiveau(e.target.value)}>
            <option value={TOUS}>{TOUS}</option>
            {NIVEAUX.map((n) => (
              <option key={n.id} value={n.id}>{n.label} ({n.usuel})</option>
            ))}
          </select>
        </label>
      </div>

      <div className="carte-zone">
        <div className="carte-cadre">
          {region ? (
            <CarteRegion
              region={region}
              fiches={fiches}
              districtId={districtId}
              onDistrict={setDistrictId}
            />
          ) : (
            <CarteNationale
              nombreDansRegion={nombreDansRegion}
              onRegion={choisirRegion}
            />
          )}
          <Legende />
        </div>

        <aside className="carte-panneau">
          {region ? (
            <PanneauRegion
              region={region}
              fiches={fiches}
              districtId={districtId}
              onDistrict={setDistrictId}
              onRetour={() => choisirRegion(null)}
              onFiche={setFicheOuverte}
            />
          ) : (
            <ListeRegions nombreDansRegion={nombreDansRegion} onRegion={choisirRegion} />
          )}

          {partout.length > 0 && (
            <div className="carte-partout">
              <h3 className="carte-sous-titre"><Globe size={16} /> Valables dans toutes les régions</h3>
              {partout.map((f) => (
                <FicheMini key={f.id} fiche={f} onClick={() => setFicheOuverte(f)} />
              ))}
            </div>
          )}
        </aside>
      </div>

      <p className="carte-source">
        Limites administratives : geoBoundaries (CC BY 4.0), 119 districts
        regroupés en 23 régions. Tracé simplifié.
      </p>
    </>
  );
}

// ─── Carte de Madagascar : les 23 régions ────────────────────
function CarteNationale({ nombreDansRegion, onRegion }) {
  return (
    <svg
      className="carte-svg"
      viewBox={VUE_NATIONALE}
      role="group"
      aria-label="Carte des 23 régions de Madagascar"
    >
      {REGIONS.map((r) => {
        const n = nombreDansRegion(r.id);
        const nom = libelleRegion(r.id);
        return (
          <path
            key={r.id}
            d={TRACE_REGIONS[r.id].d}
            fill={couleur(n)}
            className="zone"
            vectorEffect="non-scaling-stroke"
            role="button"
            tabIndex={0}
            aria-label={nom + ", " + pluriel(n, "fiche")}
            onClick={() => onRegion(r.id)}
            onKeyDown={surTouche(() => onRegion(r.id))}
          >
            <title>{nom + " : " + pluriel(n, "fiche")}</title>
          </path>
        );
      })}
    </svg>
  );
}

// ─── Une région agrandie, découpée en districts ──────────────
function CarteRegion({ region, fiches, districtId, onDistrict }) {
  const districts = TRACE_DISTRICTS.filter((d) => d.region === region.id);

  return (
    <svg
      className="carte-svg"
      viewBox={TRACE_REGIONS[region.id].vue}
      role="group"
      aria-label={"Districts de la région " + region.nom}
    >
      {/* Les autres régions en fond, pour garder le repère */}
      {REGIONS.filter((r) => r.id !== region.id).map((r) => (
        <path
          key={r.id}
          d={TRACE_REGIONS[r.id].d}
          className="zone-fond"
          vectorEffect="non-scaling-stroke"
        />
      ))}

      {districts.map((d) => {
        const n = fiches.filter((f) => f.district === d.id).length;
        const choisi = d.id === districtId;
        return (
          <path
            key={d.id}
            d={d.d}
            fill={couleur(n)}
            className={choisi ? "zone choisie" : "zone"}
            vectorEffect="non-scaling-stroke"
            role="button"
            tabIndex={0}
            aria-pressed={choisi}
            aria-label={"District " + d.nom + ", " + pluriel(n, "fiche")}
            onClick={() => onDistrict(choisi ? null : d.id)}
            onKeyDown={surTouche(() => onDistrict(choisi ? null : d.id))}
          >
            <title>{d.nom + " : " + pluriel(n, "fiche")}</title>
          </path>
        );
      })}

      {/* Contour de la région, par-dessus les districts */}
      <path d={TRACE_REGIONS[region.id].d} className="contour-region" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

function Legende() {
  return (
    <div className="carte-legende" aria-label="Légende : nombre de fiches">
      {PALIERS.slice().reverse().map((p) => (
        <span key={p.label} className="legende-item">
          <span className="legende-pastille" style={{ background: p.couleur }} />
          {p.label}
        </span>
      ))}
    </div>
  );
}

// ─── Panneau : liste des 23 régions ──────────────────────────
function ListeRegions({ nombreDansRegion, onRegion }) {
  return (
    <>
      <h2 className="carte-panneau-titre">Toutes les régions</h2>
      <p className="carte-aide">Touchez une région sur la carte ou dans la liste.</p>
      <ul className="liste-zones">
        {REGIONS.map((r) => {
          const n = nombreDansRegion(r.id);
          return (
            <li key={r.id}>
              <button className="ligne-zone" onClick={() => onRegion(r.id)}>
                <span className="legende-pastille" style={{ background: couleur(n) }} />
                <span className="ligne-zone-nom">{libelleRegion(r.id)}</span>
                <span className="ligne-zone-nombre">{n}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

// ─── Panneau : une région ────────────────────────────────────
function PanneauRegion({ region, fiches, districtId, onDistrict, onRetour, onFiche }) {
  const districts = TRACE_DISTRICTS.filter((d) => d.region === region.id);
  const district = districts.find((d) => d.id === districtId);
  const fichesRegion = fiches.filter((f) => f.region === region.id);
  const affichees = district
    ? fichesRegion.filter((f) => f.district === district.id)
    : fichesRegion;

  return (
    <>
      <button className="bouton-retour" onClick={onRetour}>
        <ArrowLeft size={16} /> Toute l'île
      </button>

      <h2 className="carte-panneau-titre">{libelleRegion(region.id)}</h2>
      <p className="carte-aide">
        <MapPin size={14} /> Chef-lieu : {region.chefLieu}, {pluriel(districts.length, "district")}
      </p>

      {district && (
        <p className="carte-district">
          District : <strong>{district.nom}</strong>
          <button className="bouton-reset" onClick={() => onDistrict(null)}>
            Toute la région
          </button>
        </p>
      )}

      {affichees.length === 0 ? (
        <div className="vide carte-vide">
          <p className="vide-titre">Aucune fiche pour l'instant</p>
          <p>
            Les pratiques {district ? "de ce district" : "de cette région"} restent
            à documenter. Vous enseignez ici ? Votre pratique peut être la première.
          </p>
        </div>
      ) : (
        affichees.map((f) => <FicheMini key={f.id} fiche={f} onClick={() => onFiche(f)} />)
      )}

      <h3 className="carte-sous-titre">Districts</h3>
      <ul className="liste-zones">
        {districts.map((d) => {
          const n = fichesRegion.filter((f) => f.district === d.id).length;
          return (
            <li key={d.id}>
              <button
                className={d.id === districtId ? "ligne-zone choisie" : "ligne-zone"}
                aria-pressed={d.id === districtId}
                onClick={() => onDistrict(d.id === districtId ? null : d.id)}
              >
                <span className="legende-pastille" style={{ background: couleur(n) }} />
                <span className="ligne-zone-nom">{d.nom}</span>
                <span className="ligne-zone-nombre">{n}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

// ─── Une fiche en version courte ─────────────────────────────
function FicheMini({ fiche, onClick }) {
  return (
    <button className="fiche-mini" onClick={onClick}>
      <span className="fiche-mini-titre">{fiche.titre}</span>
      <span className="fiche-mini-pratique">{fiche.pratique}</span>
      <span className="fiche-mini-meta">
        {fiche.type}, {libelleNiveau(fiche.niveau)}, {fiche.notion}
      </span>
    </button>
  );
}
