# LOT 7 — LiveSync

**Cibles** : `/for/technicians-workshops`, `/for/schools`, `/how-it-works`
**Fichiers i18n** : `src/lib/i18n/locales/fr.json` (référence), `en.json`
**Dépôt** : `www.pytune.com`

---

## Contexte

LiveSync permet de diffuser l'interface de mesure en temps réel vers autant d'écrans que souhaité, y compris à distance. La fonctionnalité est **active aujourd'hui sur le diagnostic**. Toute la copie ci-dessous s'écrit donc au présent.

**Ne pas mentionner le tuner.** LiveSync s'y branchera automatiquement quand la V1 sera livrée, mais aucune formulation ne doit le laisser entendre avant.

---

## Note de nomenclature

Une formulation proche — « PyTune Live · Real-Time Collaboration » — a été retirée du site au lot Discover, faute de preuve d'implémentation dans le dépôt vitrine. Elle décrivait bien cette fonctionnalité, mais en langage de plateforme.

**Un seul nom désormais : LiveSync.** Ne pas réintroduire « PyTune Live ». Si l'ancienne appellation subsiste quelque part, l'aligner.

---

## 1. Page techniciens — section à ajouter

`/for/technicians-workshops`, namespace `pro.*`.

**Position** : après la section `pro.ai.*` (position 6), donc en position 7, avant PRO × INDY LOOP.

Motif : `pro.ai.*` parle de ce que l'accordeur comprend, LiveSync de ce qu'il montre. L'enchaînement est naturel.

| Clé | Français |
|---|---|
| `pro.livesync.title` | Votre client voit ce que vous entendez |
| `pro.livesync.subtitle` | Diffusez vos mesures en direct sur autant d’écrans que vous voulez. Une tablette posée sur le piano suffit. |
| `pro.livesync.body` | Un accordage est un travail que le client ne peut ni voir ni juger. C’est pourquoi il finit souvent par le trouver cher. Avec LiveSync, il suit les courbes pendant que vous travaillez, note par note. Il comprend enfin ce qu’il paie. |
| `pro.livesync.case1.title` | Devant le client |
| `pro.livesync.case1.body` | Posez une tablette sur le piano. Les déviations, les unissons, la stabilité s’affichent au fur et à mesure. Rien à installer de son côté. |
| `pro.livesync.case2.title` | À distance |
| `pro.livesync.case2.body` | Un propriétaire absent, un confrère consulté, un second avis sur un cas difficile : partagez la vue en direct, où qu’ils soient. |
| `pro.livesync.case3.title` | Sur plusieurs écrans |
| `pro.livesync.case3.body` | Téléphone en main, tablette sur le piano, écran de l’atelier. Autant de vues que nécessaire, toutes synchronisées. |

**Anglais**

| Clé | English |
|---|---|
| `pro.livesync.title` | Your client sees what you hear |
| `pro.livesync.subtitle` | Stream your measurements live to as many screens as you like. A tablet on the piano is enough. |
| `pro.livesync.body` | Tuning is work a client can neither see nor judge. That is why it so often ends up feeling expensive. With LiveSync, they follow the curves as you work, note by note. They finally understand what they are paying for. |
| `pro.livesync.case1.title` | In front of the client |
| `pro.livesync.case1.body` | Put a tablet on the piano. Deviations, unisons, stability appear as you go. Nothing for them to install. |
| `pro.livesync.case2.title` | Remotely |
| `pro.livesync.case2.body` | An absent owner, a colleague consulted, a second opinion on a difficult case: share the live view wherever they are. |
| `pro.livesync.case3.title` | Across several screens |
| `pro.livesync.case3.body` | Phone in hand, tablet on the piano, workshop display. As many views as needed, all in sync. |

---

## 2. Page écoles — section à ajouter

`/for/schools`. Cette page est intégralement en texte en dur aujourd'hui (~155 mots). **Créer le namespace `schools.*`** et y ajouter cette section, sans convertir le reste de la page — ce sera un lot i18n distinct.

**Position** : à déterminer selon la structure existante. Idéalement après la section qui décrit le suivi des instruments.

| Clé | Français |
|---|---|
| `schools.livesync.title` | Un geste montré, dix élèves qui voient la même chose |
| `schools.livesync.subtitle` | L’écran du professeur, diffusé en direct sur tous les postes. |
| `schools.livesync.body` | Enseigner l’accordage suppose de faire regarder plusieurs personnes au même endroit, au même moment. Avec LiveSync, le professeur mesure et chacun suit les courbes sur son propre écran. Aucun outil du marché ne le permet. |
| `schools.livesync.case1.title` | En atelier |
| `schools.livesync.case1.body` | Le formateur intervient sur l’instrument, la classe observe les relevés en temps réel plutôt que par-dessus son épaule. |
| `schools.livesync.case2.title` | À distance |
| `schools.livesync.case2.body` | Un élève empêché, un intervenant extérieur, un second site : la séance se suit d’où que ce soit, sans rien installer. |

**Anglais**

| Clé | English |
|---|---|
| `schools.livesync.title` | One gesture shown, ten students seeing the same thing |
| `schools.livesync.subtitle` | The teacher’s screen, streamed live to every station. |
| `schools.livesync.body` | Teaching tuning means getting several people to look at the same place at the same moment. With LiveSync, the teacher measures and everyone follows the curves on their own screen. No other tool on the market allows it. |
| `schools.livesync.case1.title` | In the workshop |
| `schools.livesync.case1.body` | The instructor works on the instrument while the class watches the readings in real time, rather than over their shoulder. |
| `schools.livesync.case2.title` | Remotely |
| `schools.livesync.case2.body` | An absent student, a visiting expert, a second site: the session can be followed from anywhere, with nothing to install. |

---

## 3. Page « Comment ça marche » — encart

`/how-it-works`, namespace `how.*`.

**Position** : après l'étape 2 (« Mesurez son état réel »), en encart et non en étape numérotée. LiveSync n'est pas une étape du parcours, c'est une capacité de l'étape de mesure.

| Clé | Français | English |
|---|---|---|
| `how.livesync.label` | AU PASSAGE | ALONG THE WAY |
| `how.livesync.title` | Vos mesures, sur autant d’écrans que vous voulez | Your measurements, on as many screens as you like |
| `how.livesync.body` | Pendant que vous mesurez, la même vue peut s’afficher en direct ailleurs : une tablette posée sur le piano, l’écran d’un élève, celui d’un confrère à distance. Rien à installer de leur côté. | While you measure, the same view can appear live elsewhere: a tablet on the piano, a student’s screen, a colleague’s display across the country. Nothing for them to install. |

---

## 4. Le lien avec l'absence d'installation

Deux arguments qui se tenaient séparément se renforcent désormais. À utiliser ensemble partout où ils apparaissent :

> PyTune fonctionne sans installation — et c’est ce qui rend le partage possible. On ne demande pas à un client d’installer une application pour regarder trois minutes de mesures.

Ne pas présenter l'absence d'installation comme un bénéfice en soi. Installer une application n'est un problème pour personne. Ce qui compte, c'est ce que cela permet : partager instantanément avec quelqu'un qui n'est pas équipé.

---

## 5. Ce qu'il ne faut pas écrire

- **Aucune mention du tuner.** LiveSync s’y branchera automatiquement, mais le tuner n’est pas livré. Écrire « accordez à plusieurs » serait une promesse non tenue.
- **Ne pas réintroduire « PyTune Live »** ni « Real-Time Collaboration ». Un seul nom : LiveSync.
- **Ne pas mentionner les concerts.** L’ancienne formulation évoquait un usage en concert — hors sujet et invérifiable.
- **Pas de vocabulaire de plateforme** : « collaboration temps réel », « multi-écran synchronisé », « architecture distribuée ». Décrire la scène, pas le mécanisme.

---

## 6. Point à vérifier avant application

**Y a-t-il une limite au nombre d’écrans, ou au partage à distance ?** La copie dit « autant que vous voulez ». Si une limite existe — nombre de vues simultanées, restriction selon le plan — la formulation doit être ajustée avant publication.
