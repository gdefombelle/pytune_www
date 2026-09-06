# LOT 1-B — Page Plans

**Cible** : `/plans` (et `/plan-indy`, `/plan-pro`, `/plan-enterprise` si elles existent séparément)
**Fichiers i18n** : `src/lib/i18n/locales/fr.json` (référence), `en.json` (traduction)
**Dépôt** : `www.pytune.com` uniquement

---

## Instructions pour Codex / agent

1. **Même protocole que le lot 1-A** : repérer d'abord les clés existantes de `/plans`, proposer une table de correspondance, attendre validation avant d'éditer.
2. Conserver le namespace existant s'il y en a un. Les clés `plans.*` ci-dessous sont indicatives.
3. Convention typographique : apostrophes courbes `’` comme dans le reste du fichier.
4. **Lire la section « Ce qui n'est pas de la copie » en fin de document avant de commencer.** Trois changements de cette page exigent une modification produit, pas seulement du texte.

---

## Changement de nommage

Les plans propriétaires sont renommés pour que l'échelle figure dans le nom.

| Ancien | Nouveau | Périmètre | Prix |
|---|---|---|---|
| Free Plan | **Indy Solo** | 1 piano | Gratuit, pour toujours |
| Indy | **Indy Multi** | jusqu'à 5 pianos | 2,50 €/mois ou 25 €/an |
| Indy+ | **Indy Collection** | jusqu'à 15 pianos | 5 €/mois ou 50 €/an |

« Indy » reste le nom du segment et de la famille. L'onglet s'appelle simplement **Indy**.

---

## 1. En-tête de page

| Clé | Français |
|---|---|
| `plans.header.eyebrow` | PYTUNE · FORMULES |
| `plans.header.title` | Choisissez votre formule |
| `plans.header.subtitle` | Un piano ? C’est gratuit, pour toujours. Plusieurs ? Choisissez votre échelle. |

| Clé | English |
|---|---|
| `plans.header.eyebrow` | PYTUNE · PLANS |
| `plans.header.title` | Choose your plan |
| `plans.header.subtitle` | One piano? Free, forever. Several? Pick your scale. |

---

## 2. Onglets

| Clé | Français | English |
|---|---|---|
| `plans.tabs.indy` | Indy | Indy |
| `plans.tabs.pro` | Professionnels | Professionals |
| `plans.tabs.community` | Communautés | Community |

---

## 3. Onglet Indy

| Clé | Français | English |
|---|---|---|
| `plans.indy.intro` | Pour les propriétaires et les passionnés. Le soin de votre piano, à votre rythme. | For owners and enthusiasts. Caring for your piano, at your pace. |

### Carte Indy Solo

| Clé | Français |
|---|---|
| `plans.indy.solo.badge` | GRATUIT POUR TOUJOURS |
| `plans.indy.solo.name` | Indy Solo |
| `plans.indy.solo.scale` | 1 piano |
| `plans.indy.solo.price` | 0 € |
| `plans.indy.solo.tagline` | Prendre soin de son piano ne devrait jamais coûter quelque chose. |
| `plans.indy.solo.feat1` | Accordages et diagnostics illimités |
| `plans.indy.solo.feat2` | Identification par photo et estimation du modèle |
| `plans.indy.solo.feat3` | Historique complet de votre instrument |
| `plans.indy.solo.feat4` | Partage de vos rapports avec un professionnel |
| `plans.indy.solo.feat5` | Conseils d’entretien |
| `plans.indy.solo.cta` | Commencer gratuitement |

### Carte Indy Multi

| Clé | Français |
|---|---|
| `plans.indy.multi.name` | Indy Multi |
| `plans.indy.multi.scale` | Jusqu’à 5 pianos |
| `plans.indy.multi.price` | 2,50 €/mois ou 25 €/an |
| `plans.indy.multi.tagline` | Pour ceux qui veillent sur plusieurs instruments. |
| `plans.indy.multi.feat1` | Tout Indy Solo, pour cinq pianos |
| `plans.indy.multi.feat2` | Rapports PDF détaillés |
| `plans.indy.multi.feat3` | Assistant d’accordage |
| `plans.indy.multi.cta` | Choisir Indy Multi |

### Carte Indy Collection

| Clé | Français |
|---|---|
| `plans.indy.collection.name` | Indy Collection |
| `plans.indy.collection.scale` | Jusqu’à 15 pianos |
| `plans.indy.collection.price` | 5 €/mois ou 50 €/an |
| `plans.indy.collection.tagline` | Pour les collections, les salles de répétition et les professeurs. |
| `plans.indy.collection.feat1` | Tout Indy Multi, pour quinze pianos |
| `plans.indy.collection.feat2` | Support prioritaire |
| `plans.indy.collection.cta` | Choisir Indy Collection |

**Anglais — cartes Indy**

| Clé | English |
|---|---|
| `plans.indy.solo.badge` | FREE FOREVER |
| `plans.indy.solo.name` | Indy Solo |
| `plans.indy.solo.scale` | 1 piano |
| `plans.indy.solo.tagline` | Caring for your piano should never cost anything. |
| `plans.indy.solo.feat1` | Unlimited tunings and diagnostics |
| `plans.indy.solo.feat2` | Photo identification and model estimation |
| `plans.indy.solo.feat3` | Full history of your instrument |
| `plans.indy.solo.feat4` | Share your reports with a professional |
| `plans.indy.solo.feat5` | Maintenance guidance |
| `plans.indy.solo.cta` | Start free |
| `plans.indy.multi.name` | Indy Multi |
| `plans.indy.multi.scale` | Up to 5 pianos |
| `plans.indy.multi.price` | €2.50/month or €25/year |
| `plans.indy.multi.tagline` | For those looking after several instruments. |
| `plans.indy.multi.feat1` | Everything in Indy Solo, for five pianos |
| `plans.indy.multi.feat2` | Detailed PDF reports |
| `plans.indy.multi.feat3` | Tuning assistant |
| `plans.indy.multi.cta` | Choose Indy Multi |
| `plans.indy.collection.name` | Indy Collection |
| `plans.indy.collection.scale` | Up to 15 pianos |
| `plans.indy.collection.price` | €5/month or €50/year |
| `plans.indy.collection.tagline` | For collections, rehearsal rooms and teachers. |
| `plans.indy.collection.feat1` | Everything in Indy Multi, for fifteen pianos |
| `plans.indy.collection.feat2` | Priority support |
| `plans.indy.collection.cta` | Choose Indy Collection |

---

## 4. Onglet Professionnels

| Clé | Français |
|---|---|
| `plans.pro.intro` | Pour les accordeurs, techniciens et ateliers. Des demandes qualifiées, et des clients qui reviennent. |

### Carte Pro Découverte

| Clé | Français |
|---|---|
| `plans.pro.starter.badge` | 60 JOURS D’ESSAI |
| `plans.pro.starter.name` | Pro Découverte |
| `plans.pro.starter.price` | Gratuit pendant 60 jours |
| `plans.pro.starter.tagline` | Le temps de voir ce que PyTune vous apporte. |
| `plans.pro.starter.feat1` | Toutes les fonctions Pro |
| `plans.pro.starter.feat2` | Sans carte bancaire |
| `plans.pro.starter.cta` | Essayer gratuitement |

### Carte Pro

| Clé | Français |
|---|---|
| `plans.pro.main.badge` | LE PLUS CHOISI |
| `plans.pro.main.name` | Pro |
| `plans.pro.main.tagline` | Des clients qui vous appellent avec le diagnostic de leur piano déjà fait. |
| `plans.pro.main.feat1` | Demandes qualifiées de propriétaires près de chez vous |
| `plans.pro.main.feat2` | Clients et pianos illimités |
| `plans.pro.main.feat3` | Historique complet par instrument |
| `plans.pro.main.feat4` | Rapports à votre marque et à vos couleurs |
| `plans.pro.main.feat5` | Visibilité locale sur PyTune |
| `plans.pro.main.cta` | Créer mon compte professionnel |

### Carte Entreprise

| Clé | Français |
|---|---|
| `plans.pro.enterprise.name` | Entreprise |
| `plans.pro.enterprise.price` | Sur devis |
| `plans.pro.enterprise.tagline` | Pour les fabricants, distributeurs et réseaux d’ateliers. |
| `plans.pro.enterprise.feat1` | La sonorité que vous avez voulue, respectée dans tout votre réseau |
| `plans.pro.enterprise.feat2` | Suivi de parc à l’échelle, sur tous vos sites |
| `plans.pro.enterprise.feat3` | Plateforme à votre marque |
| `plans.pro.enterprise.feat4` | Intégration à vos outils |
| `plans.pro.enterprise.cta` | Parlons de votre projet |

**Note** : `enterprise.feat1` et `feat2` remplacent les mentions de « RAG », « fine-tuning » et « API ». Un directeur de marque achète un résultat, pas une technologie. L’intégration technique reste mentionnée en `feat4`, sans jargon.

**Anglais — cartes Pro**

| Clé | English |
|---|---|
| `plans.pro.intro` | For tuners, technicians and workshops. Qualified requests, and clients who come back. |
| `plans.pro.starter.badge` | 60-DAY TRIAL |
| `plans.pro.starter.name` | Pro Trial |
| `plans.pro.starter.price` | Free for 60 days |
| `plans.pro.starter.tagline` | Time enough to see what PyTune brings you. |
| `plans.pro.starter.feat1` | All Pro features |
| `plans.pro.starter.feat2` | No credit card |
| `plans.pro.starter.cta` | Start free trial |
| `plans.pro.main.badge` | MOST CHOSEN |
| `plans.pro.main.name` | Pro |
| `plans.pro.main.tagline` | Clients who call you with their piano already diagnosed. |
| `plans.pro.main.feat1` | Qualified requests from owners near you |
| `plans.pro.main.feat2` | Unlimited clients and pianos |
| `plans.pro.main.feat3` | Full history per instrument |
| `plans.pro.main.feat4` | Reports under your brand and colours |
| `plans.pro.main.feat5` | Local visibility on PyTune |
| `plans.pro.main.cta` | Create my professional account |
| `plans.pro.enterprise.name` | Enterprise |
| `plans.pro.enterprise.price` | On request |
| `plans.pro.enterprise.tagline` | For manufacturers, distributors and workshop networks. |
| `plans.pro.enterprise.feat1` | The voice you intended, respected across your network |
| `plans.pro.enterprise.feat2` | Fleet tracking at scale, across all your sites |
| `plans.pro.enterprise.feat3` | A platform under your brand |
| `plans.pro.enterprise.feat4` | Integration with your own tools |
| `plans.pro.enterprise.cta` | Let’s talk about your project |

---

## 5. Onglet Communautés

| Clé | Français | English |
|---|---|---|
| `plans.community.intro` | Pour les écoles de musique, conservatoires, paroisses et salles communautaires. | For music schools, conservatories, parishes and community venues. |
| `plans.community.name` | Communauté | Community |
| `plans.community.price` | Gratuit | Free |
| `plans.community.tagline` | Les lieux qui font vivre la musique méritent des instruments bien entretenus. | Places that keep music alive deserve well-maintained instruments. |
| `plans.community.feat1` | Pianos illimités pour votre lieu | Unlimited pianos for your venue |
| `plans.community.feat2` | Accès partagé pour votre équipe | Shared access for your team |
| `plans.community.feat3` | Suivi complet de chaque instrument | Full tracking for each instrument |
| `plans.community.cta` | Demander un accès | Request access |

---

## 6. Bas de page

| Clé | Français | English |
|---|---|---|
| `plans.compare.cta` | Comparer toutes les formules | Compare all plans |
| `plans.footer.title` | Plus qu’un accordage — PyTune veille sur votre piano. | More than tuning — PyTune looks after your piano. |
| `plans.footer.body` | Diagnostic de précision, mémoire de l’instrument et conseil d’expert, au même endroit. | Precision diagnosis, instrument memory and expert guidance, in one place. |

---

## 7. Suppressions

À retirer intégralement de cette page :

- **« Ad-supported experience »** sur le plan gratuit — voir section suivante, c’est aussi un changement produit
- **« Buy Me a Coffee »** sur les onglets Pro et Communautés
- **« Publish DIY articles on PyTune »** en tant qu’avantage payant — remplacé par `plans.pro.main.feat5` (« Visibilité locale sur PyTune »)
- **« RAG & AI fine-tuning on your data »** — remplacé par `enterprise.feat1`, `feat2` et `feat4`
- Toute mention de **« 1 piano »** sur un plan payant

---

## Ce qui n’est pas de la copie

**Trois points de ce deck exigent une décision ou un développement produit. Ne pas publier la copie correspondante avant que la réalité suive.**

### A. La publicité

Retirer « Ad-supported experience » du texte suppose que la publicité soit effectivement désactivée sur le plan gratuit. Publier la copie sans le faire serait mensonger.

**À vérifier avant publication** : la publicité est-elle réellement active aujourd’hui ?

### B. Le prix Pro

Le prix du plan Pro n’apparaît volontairement pas dans ce deck. Il reste à sa valeur actuelle tant que la boucle de demandes qualifiées n’a pas fait ses preuves. La note stratégique recommande 29–39 €/mois avec garantie de remboursement — c’est un lot ultérieur, conditionné.

**Action** : conserver l’affichage de prix Pro existant, ne pas le modifier.

### C. Le plan Communauté

La copie ci-dessus décrit le mécanisme actuel — accès gratuit sur demande. La note stratégique recommande de le rendre **parrainé par un professionnel**, ce qui supprime l’arbitrage évident et transforme un centre de coût en canal d’acquisition.

C’est un changement produit, pas un changement de texte. À traiter dans un lot ultérieur.

### D. Les quotas

Le passage à 1 / 5 / 15 pianos suppose que ces valeurs soient **des données, pas des conditions écrites dans le code**. Si les quotas sont codés en dur dans le studio, la copie annoncera des paliers que le produit n’applique pas.

**À vérifier avant publication** : où vivent les quotas, et sont-ils modifiables sans déploiement ?
