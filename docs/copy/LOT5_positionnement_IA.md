# LOT 5 — Positionnement IA

**Portée** : ce deck ne cible pas une page unique. Il fixe le vocabulaire et les formulations de l'IA, qui alimenteront ensuite `/for/technicians-workshops`, `/for/schools`, `/for/manufacturers` et `/how-it-works`.

**À appliquer dans l'ordre** : d'abord la section 3 (page techniciens), le reste dans les lots suivants.

---

## 1. L'argument central

Une seule phrase porte tout le positionnement :

> **Une IA générale connaît la technologie du piano. Elle ne connaît pas *votre* piano.**

L'IA de PyTune reçoit, en plus de son corpus documentaire, le contexte de l'instrument : identification, courbe d'inharmonicité, diagnostic en cours, historique des interventions. Elle ne répond pas sur les pianos en général — elle répond sur celui qui est devant vous.

Tout ce qui suit découle de cette phrase. Ne jamais présenter l'IA comme une fonctionnalité de plus : c'est la jonction entre le savoir documentaire et le dossier de l'instrument.

---

## 2. Vocabulaire

**À utiliser**

- « Sur ce piano-là », « l'instrument devant vous », « vos mesures »
- « Un second avis », « un avis argumenté »
- « Ce qu'elle voit » plutôt que « ce qu'elle sait »
- Nommer les données concrètes : inharmonicité, courbe d'accord, déviations, historique

**À bannir** — s'ajoute à la liste du `CLAUDE.md`

- « cognitive AI », « IA cognitive », « plateforme cognitive »
- « RAG », « fine-tuning », « graphe de connaissance », « embeddings », « corpus vectoriel »
- « alimenté par l'IA », « propulsé par l'IA », « AI-powered », « AI-driven »
- « révolutionne », « transforme votre métier »
- Toute mention d'un modèle ou d'un fournisseur

**Règle de formulation** : décrire ce que la personne obtient, jamais comment c'est produit.

Mauvais : *« Un moteur RAG interroge un corpus vectorisé de documentation technique. »*
Bon : *« Demandez pourquoi cette note résiste, avec vos mesures sous les yeux. »*

---

## 3. Page techniciens — section à ajouter

À insérer dans `/for/technicians-workshops`, **après** la section « Ce que contient une demande » et **avant** la section outils reléguée en bas de page.

| Clé | Français |
|---|---|
| `pro.ai.title` | Un avis argumenté, sur l’instrument que vous avez devant vous |
| `pro.ai.subtitle` | Une IA générale connaît la technologie du piano. Elle ne connaît pas votre piano. Celle de PyTune a vos mesures sous les yeux. |
| `pro.ai.body` | Elle voit l’instrument identifié, sa courbe d’inharmonicité, le diagnostic que vous venez de faire et ce qui a été constaté lors des visites précédentes. Ses réponses portent sur ce piano-là, pas sur les pianos en général. |
| `pro.ai.case1.title` | Le cas qui résiste |
| `pro.ai.case1.body` | Une note qui ne tient pas, un unisson qui refuse de se stabiliser. Décrivez ce que vous observez : l’analyse tient compte de vos relevés et des interventions passées sur cet instrument. |
| `pro.ai.case2.title` | Le second avis |
| `pro.ai.case2.body` | Avant de conclure à des marteaux durcis ou à un problème d’étouffoirs, confrontez votre hypothèse. Un avis qui vous contredit vaut mieux qu’un avis qui vous approuve. |
| `pro.ai.case3.title` | La documentation, sans la chercher |
| `pro.ai.case3.body` | Spécifications de mécanique, particularités d’un modèle, pratiques de facture. Posez la question pendant l’intervention plutôt que de rouvrir un manuel le soir. |
| `pro.ai.footnote` | Vous gardez la décision. L’outil documente, argumente et rappelle — il ne remplace ni votre oreille ni votre jugement. |

**Anglais**

| Clé | English |
|---|---|
| `pro.ai.title` | A reasoned second opinion, on the instrument in front of you |
| `pro.ai.subtitle` | A general AI knows piano technology. It doesn’t know your piano. PyTune’s has your measurements in front of it. |
| `pro.ai.body` | It sees the identified instrument, its inharmonicity curve, the diagnosis you just ran and what was found on previous visits. Its answers are about this piano, not about pianos in general. |
| `pro.ai.case1.title` | The stubborn case |
| `pro.ai.case1.body` | A note that won’t hold, a unison that refuses to settle. Describe what you observe: the analysis accounts for your readings and past work on this instrument. |
| `pro.ai.case2.title` | The second opinion |
| `pro.ai.case2.body` | Before concluding hardened hammers or a damper issue, test your hypothesis. An opinion that contradicts you is worth more than one that agrees. |
| `pro.ai.case3.title` | The documentation, without the search |
| `pro.ai.case3.body` | Action specifications, model quirks, manufacturing practices. Ask during the job rather than reopening a manual that evening. |
| `pro.ai.footnote` | The decision stays yours. The tool documents, argues and reminds — it replaces neither your ear nor your judgement. |

---

## 4. Ateliers, écoles et formation — pour un lot ultérieur

Ne pas appliquer maintenant. Consigné ici parce que c’est le débouché le plus important du positionnement IA.

**Le constat** : un accordeur seul n’a ni collaborateurs ni recrues. Les arguments de méthode et de transmission ne s’adressent pas à lui, mais aux **ateliers, écoles et fabricants** — c’est-à-dire à un segment dont la disposition à payer est très supérieure.

**Les trois promesses, à travailler quand le lot viendra**

- **Votre savoir, versé quelque part.** Vos méthodes, vos procédures, vos manuels — chargés dans PyTune et interrogeables en contexte. Le métier se transmet aujourd’hui à l’oral et se perd.
- **La même méthode appliquée par tous.** Cinq techniciens, une pratique commune, plutôt que cinq pratiques personnelles.
- **Un nouveau qui monte en compétence sur votre pratique**, pas sur des généralités trouvées en ligne.

**Pourquoi c’est stratégique** : un atelier qui a versé vingt ans de savoir-faire dans son corpus ne s’en va plus. C’est un verrou par la valeur, pas par le contrat — et c’est la réponse au risque de court-circuitage identifié dans la note stratégique. Un professionnel peut contourner la plateforme après un premier contact ; il ne contourne pas ce qui contient son propre savoir.

**Conséquence tarifaire** : cette offre ne se situe pas au niveau du plan Pro. Elle ouvre un palier au-dessus, dont l’économie n’a rien à voir avec celle de l’accordeur indépendant.

---

## 5. Fabricants — pour un lot ultérieur

Une seule promesse, à ne pas noyer :

> **La sonorité que vous avez voulue, respectée partout dans le monde.**

Pas de RAG, pas de white-label, pas d’API en argument principal. L’intégration technique se mentionne, elle ne se vend pas.

---

## 6. Ce qui ne doit pas être écrit

Aucune de ces formulations ne doit apparaître tant que la fonctionnalité correspondante n’est pas livrée et vérifiée :

- **Partage de session en temps réel**, multi-écran, assistance à distance, usage en concert — retiré du site au lot Discover, ne pas réintroduire.
- **Relance automatique**, prédiction de dérive, notification de prochaine visite.
- **Chargement du corpus client** par le professionnel lui-même — à vérifier avant le lot de la section 4.
- **Réunions clients**.

Vérifier avant d’écrire, pas après.
