# LOT 6 — Page « Comment ça marche »

**Cible** : `/how-it-works`
**Fichiers i18n** : `src/lib/i18n/locales/fr.json` (référence), `en.json`
**Dépôt** : `www.pytune.com`
**Namespace** : `how.*` — la page n'utilise aucune i18n aujourd'hui

---

## Ce qui change, en résumé

**Suppression du système d'onglets.** Quatre onglets aux libellés opaques — Overview, Features & Demos, Technology, Platform & Engineering — dont un totalement vide en production. Le visiteur ne peut pas deviner lequel ouvrir.

**La page devient linéaire**, structurée sur les quatre étapes du parcours. Chaque étape porte sa démonstration. C'est ce que le titre promet.

**Les neuf PDF quittent la page.** Ce sont des présentations institutionnelles, pas des explications de produit. Elles partent sur `/for/investors`.

**Les vidéos pédagogiques descendent en fin de page**, dans une section identifiée. Elles ont de la valeur, mais elles ne répondent pas à « comment ça marche ».

**Rien à changer côté technique.** Pas de carrousel, chargement au clic déjà en place, vignettes en lazy loading. La grille CSS et la modale sont conservées telles quelles.

---

## 1. En-tête

| Clé | Français |
|---|---|
| `how.header.title` | Comment ça marche |
| `how.header.subtitle` | De trois photos à un dossier qui suit votre piano dans le temps. |

| Clé | English |
|---|---|
| `how.header.title` | How it works |
| `how.header.subtitle` | From three photos to a record that follows your piano over time. |

**Supprimé** : « A next-generation platform combining AI acoustics, precision tuning analysis, expert guidance, and real-world piano science. » — décrit la plateforme, pas le parcours.

---

## 2. Les quatre étapes

Section principale de la page. Chaque étape porte sa vidéo de démonstration en vignette, à droite du texte en desktop, au-dessus en mobile.

### Étape 1

| Clé | Français |
|---|---|
| `how.step1.title` | Identifiez votre piano |
| `how.step1.body` | Prenez quelques photos, ou décrivez-le simplement. PyTune reconnaît la marque, le modèle, l’époque et l’état visuel. Vous obtenez une fiche d’instrument vérifiée, point de départ de tout le reste. |
| `how.step1.media` | `video-5` — PyTune ID |

| Clé | English |
|---|---|
| `how.step1.title` | Identify your piano |
| `how.step1.body` | Take a few photos, or simply describe it. PyTune recognises the make, model, era and visual condition. You get a verified instrument record — the starting point for everything else. |

### Étape 2

| Clé | Français |
|---|---|
| `how.step2.title` | Mesurez son état réel |
| `how.step2.body` | Un balayage note par note relève la justesse, la stabilité et le comportement acoustique de l’instrument. Ce sont des mesures, pas des estimations — comparables d’une visite à l’autre. |
| `how.step2.media` | `video-3` — PyTune Tuner |

| Clé | English |
|---|---|
| `how.step2.title` | Measure its actual condition |
| `how.step2.body` | A note-by-note sweep captures tuning, stability and the instrument’s acoustic behaviour. These are measurements, not estimates — comparable from one visit to the next. |

### Étape 3

| Clé | Français |
|---|---|
| `how.step3.title` | Comprenez ce que ça veut dire |
| `how.step3.body` | L’assistant a vos mesures sous les yeux : l’instrument identifié, sa courbe d’inharmonicité, le diagnostic en cours. Ses réponses portent sur ce piano-là, pas sur les pianos en général. |
| `how.step3.media` | `video-5.1` — PyTune ID-Pro |

| Clé | English |
|---|---|
| `how.step3.title` | Understand what it means |
| `how.step3.body` | The assistant has your measurements in front of it: the identified instrument, its inharmonicity curve, the diagnosis in progress. Its answers are about this piano, not about pianos in general. |

### Étape 4

| Clé | Français |
|---|---|
| `how.step4.title` | Suivez-le dans le temps |
| `how.step4.body` | Photos, relevés d’accord, empreinte acoustique, interventions passées : tout reste attaché à l’instrument. D’une année sur l’autre, vous savez comment il a évolué. |
| `how.step4.media` | *(à définir — voir note en fin de deck)* |

| Clé | English |
|---|---|
| `how.step4.title` | Follow it over time |
| `how.step4.body` | Photos, tuning readings, acoustic fingerprint, past work: everything stays with the instrument. Year after year, you know how it has evolved. |

---

## 3. Section pédagogique

Placée après les quatre étapes, avant le CTA final. Titre explicite, pour que le visiteur sache ce qu'il regarde.

| Clé | Français | English |
|---|---|---|
| `how.learn.title` | Comprendre l’accordage | Understanding tuning |
| `how.learn.subtitle` | Quelques repères sur ce qui se passe réellement dans un piano. | A few pointers on what actually happens inside a piano. |

**Médias conservés dans cette section**

| ID | Titre actuel | Titre retenu (FR) | Langue |
|---|---|---|---|
| `video-7` | L'Art de l'accord du piano | L’art de l’accord du piano | FR |
| `video-8` | The Unstable Art of Piano Tuning | La stabilité de l’accord | FR |
| `video-6` | Complexité d'une note | Ce que contient une seule note | FR |
| `video-4` | La science cachée du piano | La science cachée du piano | FR |
| `slide-13` | L'art de l'accordage - 1 | *(doublon probable de video-7 — vérifier avant de conserver)* | FR |

Ces contenus sont en français uniquement. Les afficher tels quels, sans version anglaise, plutôt que de laisser des cases vides.

---

## 4. CTA final

| Clé | Français | English |
|---|---|---|
| `how.final.title` | Commencez par identifier votre piano. | Start by identifying your piano. |
| `how.final.cta` | Identifier mon piano | Identify my piano |
| `how.final.reassurance` | Votre premier piano est gratuit — pour toujours. | Your first piano is free — forever. |

Lien : `appHref('/piano-identify')`, comme sur la Home.

**Supprimé** : la section « Built with Real Acoustics & AI Research » et son paragraphe sur le traitement du signal et les systèmes d'IA modernes. Elle décrit l'ingénierie, pas le bénéfice. Le vocabulaire est celui que le `CLAUDE.md` demande d'éviter.

---

## 5. Suppressions et déplacements

### Le système d'onglets

Supprimer intégralement : les quatre boutons, la variable `activeTab`, la fonction `getItemsForTab`, et le champ `tabs` des objets de `galleryItems`.

Motif : libellés opaques, et le 4ᵉ onglet (`engineering`) n'a aucun média associé — il affiche une grille vide en production.

### Les neuf PDF

Tous quittent cette page. Ce sont des présentations institutionnelles.

| ID | Titre | Fichier |
|---|---|---|
| `slide-1` | PyTune Experience | PyTune_Piano_Intelligence_2.pdf |
| `slide-2` | PyTune - L'Expérience | PyTune_Piano_Intelligence_1.pdf |
| `slide-3` | The OS of Piano Intelligence-1 | PyTune_Piano_Intelligence_3.pdf |
| `slide-4` | The OS of Piano Intelligence-2 | PyTune_Piano_Intelligence_5.pdf |
| `slide-4.1` | The OS of Piano Intelligence-2 | PyTune_Technical_Architecture.pdf |
| `slide-4.2` | Connecting Piano Owners & Professionals | The_PyTune_Technical_Ecosystem.pdf |
| `slide-5` | The Operating System of Piano Intelligence | Piano_Intelligence_OS_(2).pdf |
| `slide-6` | The Architecture of Intonation | Piano_Tuning_Architecture.pdf |
| `slide-7` | Maîtrise de l'accordage - 1 | Maîtrise_de_l_Accordage_1.pdf |

**Anomalie à signaler** : `slide-4` et `slide-4.1` portent le même titre — « The OS of Piano Intelligence-2 » — mais pointent vers deux fichiers différents. À trancher avant le déplacement.

**Destination** : `/for/investors`. Ne pas déplacer les fichiers dans `static/` — seules les références changent.

**Note** : `slide-7` (« Maîtrise de l'accordage ») est peut-être un contenu pédagogique plutôt qu'institutionnel. À vérifier avant de le classer avec les autres.

### Les vidéos institutionnelles

Ne restent pas sur cette page. Elles décrivent le modèle économique, pas le produit.

| ID | Titre | Destination |
|---|---|---|
| `video-1` | L'Expérience PyTune - 1 | `/for/investors` |
| `video-2` | L'Expérience PyTune - 2 | `/for/investors` |
| `video-2.1` | PyTune Shared Platform Model | `/for/investors` |
| `video-2.2` | PyTune: Plateforme Partagée | `/for/investors` |

---

## 6. Ce qui reste inchangé

- La grille CSS responsive et la modale plein écran
- Le chargement au clic : vignette statique, `<iframe>` créé seulement à l'ouverture
- Le `loading="lazy"` sur les vignettes
- L'usage de `youtube-nocookie.com`

Ces choix sont corrects et conformes aux contraintes de performance du projet. Ne pas les modifier.

---

## Point ouvert avant application

**L'étape 4 n'a pas de média.** Aucune vidéo existante ne montre le dossier de l'instrument dans le temps — c'est pourtant l'argument le plus différenciant du produit.

Deux options :

1. Une capture d'écran de la fiche piano dans le studio, avec l'historique visible. C'est le plus simple et probablement le plus convaincant.
2. Laisser l'étape sans média, en texte seul.

À trancher avant application. Ne pas réutiliser une vidéo d'une autre étape pour combler.

**Question connexe** : les vidéos `video-5` (PyTune ID), `video-5.1` (ID-Pro) et `video-3` (Tuner) montrent-elles réellement le produit à l'écran, ou sont-ce des animations explicatives ? Si ce sont des illustrations, la page ne montre nulle part le studio en fonctionnement, et des captures d'écran deviennent nécessaires pour les quatre étapes.
