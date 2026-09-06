# LOT 1-A — Page Professionnels

**Cible** : `/for/technicians-workshops`
**Fichiers i18n** : `src/lib/i18n/fr.json` (référence), `src/lib/i18n/en.json` (traduction)
**Langue de référence** : français. L'anglais est une traduction, pas l'inverse.

---

## Instructions pour Codex

1. Les clés proposées ci-dessous utilisent le namespace `pro.*`. **Réconcilier avec les clés existantes** de la page plutôt que d'en créer en double — si une clé équivalente existe déjà, réutiliser son nom et remplacer uniquement la valeur.
2. Traiter `fr.json` en premier. `en.json` est fourni ci-dessous.
3. Les deux autres langues restent inchangées à ce stade.
4. Ne pas modifier la structure des composants sauf indication explicite en section 8.
5. **Ne rien publier des sections marquées `[CONDITIONNEL]`** tant que la fonctionnalité n'existe pas. Voir la note finale.

---

## 1. Hero

| Clé | Français |
|---|---|
| `pro.hero.eyebrow` | POUR LES TECHNICIENS ET ATELIERS |
| `pro.hero.title` | Des clients qui vous appellent avec le diagnostic de leur piano déjà fait. |
| `pro.hero.subtitle` | Un propriétaire mesure son instrument avec PyTune. Vous recevez la demande avec la marque, le modèle, l'année, l'état de l'accord et les photos. Vous savez ce qui vous attend avant de sonner à la porte. |
| `pro.hero.cta_primary` | Créer mon compte professionnel |
| `pro.hero.cta_secondary` | Voir les tarifs |
| `pro.hero.reassurance` | Essai gratuit · Sans engagement · Aucune installation |

**Anglais**

| Clé | English |
|---|---|
| `pro.hero.eyebrow` | FOR TECHNICIANS AND WORKSHOPS |
| `pro.hero.title` | Clients who call you with their piano already diagnosed. |
| `pro.hero.subtitle` | An owner measures their instrument with PyTune. You get the request with the make, model, year, tuning condition and photos. You know what's waiting before you ring the doorbell. |
| `pro.hero.cta_primary` | Create my professional account |
| `pro.hero.cta_secondary` | See pricing |
| `pro.hero.reassurance` | Free trial · No commitment · No installation |

---

## 2. Bandeau de preuve (sous le hero)

| Clé | Français | English |
|---|---|---|
| `pro.strip.item1` | Instrument identifié | Instrument identified |
| `pro.strip.item2` | Diagnostic acoustique complet | Full acoustic diagnosis |
| `pro.strip.item3` | Historique par piano | History per piano |
| `pro.strip.item4` | Rapports à votre marque | Reports under your brand |

---

## 3. Section « Le métier »

| Clé | Français |
|---|---|
| `pro.craft.title` | Votre métier, c'est l'accordage. Pas la prospection. |
| `pro.craft.body` | Vous savez ce que vaut une heure passée au clavier. Vous savez aussi ce que coûte une semaine creuse, un déplacement pour rien, ou un client qui ne rappelle pas l'année suivante. PyTune ne vous apprend pas à accorder un piano. Il vous amène des instruments à accorder, et vous aide à ne plus en perdre. |

**Anglais**

| Clé | English |
|---|---|
| `pro.craft.title` | Your trade is tuning. Not prospecting. |
| `pro.craft.body` | You know what an hour at the keyboard is worth. You also know the cost of a quiet week, a wasted trip, or a client who never calls back the following year. PyTune won't teach you to tune a piano. It brings you pianos to tune, and helps you stop losing them. |

---

## 4. Section « Comment ça marche » — 3 étapes

| Clé | Français |
|---|---|
| `pro.how.title` | Comment la demande arrive jusqu'à vous |
| `pro.how.step1.title` | Le propriétaire mesure son piano |
| `pro.how.step1.body` | Avec son téléphone, gratuitement. PyTune identifie l'instrument à partir de photos et analyse note par note l'état de l'accord. |
| `pro.how.step2.title` | Il décide de partager son rapport |
| `pro.how.step2.body` | Rien n'est transmis sans son accord. Quand il souhaite faire intervenir un professionnel, il partage son diagnostic. |
| `pro.how.step3.title` | Vous recevez une demande qualifiée |
| `pro.how.step3.body` | Avec les mesures, l'instrument identifié, la localisation et les coordonnées. Vous répondez, vous vous déplacez en connaissance de cause. |

**Anglais**

| Clé | English |
|---|---|
| `pro.how.title` | How the request reaches you |
| `pro.how.step1.title` | The owner measures their piano |
| `pro.how.step1.body` | With their phone, for free. PyTune identifies the instrument from photos and analyses the tuning condition note by note. |
| `pro.how.step2.title` | They choose to share their report |
| `pro.how.step2.body` | Nothing is sent without their consent. When they want a professional to step in, they share their diagnosis. |
| `pro.how.step3.title` | You receive a qualified request |
| `pro.how.step3.body` | With the measurements, the identified instrument, the location and the contact details. You reply, and you travel knowing what to expect. |

---

## 5. Section « Ce que contient une demande »

Cette section est le cœur argumentaire. Elle transforme « un lead » en « un dossier ».

| Clé | Français |
|---|---|
| `pro.lead.title` | Ce que vous savez avant même d'avoir décroché |
| `pro.lead.subtitle` | Un formulaire de contact vous donne un nom et un numéro. Une demande PyTune vous donne un instrument. |
| `pro.lead.item1.label` | L'instrument |
| `pro.lead.item1.value` | Marque, modèle, année estimée, numéro de série, type et dimensions |
| `pro.lead.item2.label` | L'état de l'accord |
| `pro.lead.item2.value` | Déviation note par note, diapason réel, notes les plus éloignées |
| `pro.lead.item3.label` | La signature acoustique |
| `pro.lead.item3.value` | Inharmonicité mesurée, structure des partiels, analyse des unissons |
| `pro.lead.item4.label` | Les photos |
| `pro.lead.item4.value` | Meuble, clavier, table d'harmonie, numéro de série |
| `pro.lead.item5.label` | Le contexte |
| `pro.lead.item5.value` | Localisation, date du dernier accordage connu, observations du propriétaire |

**Anglais**

| Clé | English |
|---|---|
| `pro.lead.title` | What you know before you even pick up the phone |
| `pro.lead.subtitle` | A contact form gives you a name and a number. A PyTune request gives you an instrument. |
| `pro.lead.item1.label` | The instrument |
| `pro.lead.item1.value` | Make, model, estimated year, serial number, type and dimensions |
| `pro.lead.item2.label` | Tuning condition |
| `pro.lead.item2.value` | Note-by-note deviation, actual pitch, most affected notes |
| `pro.lead.item3.label` | Acoustic signature |
| `pro.lead.item3.value` | Measured inharmonicity, partial structure, unison analysis |
| `pro.lead.item4.label` | Photos |
| `pro.lead.item4.value` | Case, keyboard, soundboard, serial number |
| `pro.lead.item5.label` | Context |
| `pro.lead.item5.value` | Location, last known tuning date, owner's observations |

---

## 6. Section « Garder vos clients »

| Clé | Français |
|---|---|
| `pro.retain.title` | Un piano suivi est un client qui revient |
| `pro.retain.body` | Chaque instrument que vous touchez garde sa fiche : ce que vous avez mesuré, ce que vous avez fait, ce que vous avez recommandé. À la visite suivante, vous savez comment il a dérivé depuis la dernière fois. Votre client aussi. |
| `pro.retain.feat1.title` | La fiche de l'instrument |
| `pro.retain.feat1.body` | Un dossier par piano, qui se remplit à chaque passage et vous suit d'année en année. |
| `pro.retain.feat2.title` | Le rapport client |
| `pro.retain.feat2.body` | Courbes avant et après, points de vigilance, recommandations. À votre nom et à vos couleurs. C'est ce qui justifie votre tarif et déclenche les travaux suivants. |
| `pro.retain.feat3.title` | Vos clients au même endroit |
| `pro.retain.feat3.body` | Coordonnées, instruments, interventions passées. Sans tableur et sans carnet. |

**Anglais**

| Clé | English |
|---|---|
| `pro.retain.title` | A piano you follow is a client who comes back |
| `pro.retain.body` | Every instrument you work on keeps its record: what you measured, what you did, what you recommended. On your next visit, you know how it has drifted since. So does your client. |
| `pro.retain.feat1.title` | The instrument record |
| `pro.retain.feat1.body` | One file per piano, filled at every visit, carried from year to year. |
| `pro.retain.feat2.title` | The client report |
| `pro.retain.feat2.body` | Before and after curves, points to watch, recommendations. Under your name and your colours. It justifies your rate and triggers the next job. |
| `pro.retain.feat3.title` | Your clients in one place |
| `pro.retain.feat3.body` | Contacts, instruments, past work. No spreadsheet, no notebook. |

---

## 7. Section tarif et retour sur investissement

| Clé | Français |
|---|---|
| `pro.value.title` | Ce que ça vous coûte, ce que ça vous rapporte |
| `pro.value.body` | Une intervention se facture entre 90 et 150 €. Trois clients supplémentaires dans l'année, et votre abonnement est remboursé plusieurs fois. |
| `pro.value.guarantee.title` | Notre engagement |
| `pro.value.guarantee.body` | Si PyTune ne vous apporte aucune intervention la première année, nous vous remboursons intégralement. |
| `pro.value.cta` | Voir les tarifs professionnels |

**Anglais**

| Clé | English |
|---|---|
| `pro.value.title` | What it costs you, what it brings you |
| `pro.value.body` | A tuning job bills between €90 and €150. Three extra clients in a year, and your subscription is paid back several times over. |
| `pro.value.guarantee.title` | Our commitment |
| `pro.value.guarantee.body` | If PyTune brings you no work in your first year, we refund you in full. |
| `pro.value.cta` | See professional pricing |

---

## 8. Modifications de structure

Trois changements de composants, à faire en même temps que la copie :

1. **Supprimer « Buy Me a Coffee »** de cette page. Signale un projet personnel à côté d'une offre professionnelle.
2. **Remonter la promesse de demandes qualifiées.** Elle figure aujourd'hui en quatrième position d'une liste à puces, à la voix passive. Les sections 4 et 5 ci-dessus doivent apparaître avant toute description d'outil.
3. **Reléguer les outils de mesure en bas de page.** L'accordeur a déjà son outil et il l'aime. La précision d'accordage n'est pas un argument d'entrée — c'est un argument de confiance, à placer après la promesse.

---

## Note importante — sections à ne pas publier

La section 6 (`pro.retain.*`) décrit la fiche instrument et le rapport client. **Vérifier que ces fonctionnalités existent réellement dans le studio avant publication.**

Deux formulations ont été volontairement écartées de ce deck parce que la fonctionnalité correspondante n'est pas construite :

- Toute mention de **relance automatique** ou de **prédiction de dérive**
- Toute promesse de **notification** à date de prochaine visite

Ce sont les fonctionnalités les plus vendeuses de la feuille de route, et c'est précisément pourquoi elles ne doivent pas apparaître avant d'exister. Un artisan qui s'abonne pour une relance automatique et ne la trouve pas ne se réabonne pas, et le dit à ses confrères. Sur un marché de quelques milliers de personnes, une réputation se fait et se défait vite.

À réintégrer dans un lot ultérieur, dès que la brique est livrée.

---

## Vocabulaire

**À bannir sur cette page** — et sur tout le site destiné aux professionnels et aux propriétaires :

- « cognitive AI platform », « OS of piano intelligence », « scientific, real-time and collaborative platform »
- « leverage », « unlock », « empower », « seamless »
- Toute formulation qui décrit la plateforme plutôt que ce qu'elle fait pour la personne

**Registre** : celui d'un fournisseur qui parle à un artisan. Phrases courtes. Verbes concrets. Chiffres quand on en a. Vouvoiement.