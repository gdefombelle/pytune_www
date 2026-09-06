# www.pytune.com — Contexte projet

Site vitrine public de PyTune. SvelteKit 5.
**Ce dépôt ne contient que le site public.** L'application produit (studio) est ailleurs.

---

## Ce qu'est PyTune

Une plateforme pour pianos acoustiques. Deux faces :

- **Les propriétaires** identifient leur piano par photo, mesurent son état acoustique, suivent son évolution. Gratuit pour un instrument.
- **Les professionnels** — accordeurs, techniciens, ateliers — reçoivent des demandes de propriétaires dont le piano est déjà diagnostiqué, et suivent leurs clients dans la durée.

**Le modèle économique est la mise en relation, pas l'outil d'accordage.**
Les concurrents (Pianoscope, PianoMeter, TuneLab, Verituner) vendent d'excellents outils d'accordage entre 30 et 700 $. Aucun n'apporte un client à son utilisateur. C'est là qu'est la valeur de PyTune, et c'est ce que le site doit vendre.

Le module de mesure n'est pas la proposition de valeur : c'est ce qui rend la demande qualifiée. Il ne se vend pas, il fait exister ce qui se vend.

---

## Langues

- **Le français est la langue de référence.** L'anglais est une traduction.
- Tout le contenu vit dans `src/lib/i18n/`. Quatre langues prévues, seules `fr` et `en` sont actives.
- Ne jamais écrire de texte en dur dans un composant. Toute chaîne visible passe par une clé i18n.

---

## Registre d'écriture

Le lecteur est soit un propriétaire de piano, soit un artisan de cinquante ans qui accorde des pianos depuis vingt ans. Ni l'un ni l'autre n'achète de la technologie.

- Phrases courtes. Verbes concrets. Vouvoiement.
- Des chiffres quand on en a.
- Décrire ce que la plateforme fait pour la personne, jamais ce qu'elle est.

### Formulations bannies

- « cognitive AI platform », « OS of piano intelligence », « scientific, real-time and collaborative platform »
- « leverage », « unlock », « empower », « seamless », « révolutionnaire »
- Toute description de l'architecture technique sur une page destinée aux utilisateurs finaux
- « RAG », « fine-tuning », « graphe de connaissance » — même sur la page Enterprise. Un directeur de marque achète un résultat, pas une technologie.

### Ne jamais promettre ce qui n'existe pas

Certaines fonctionnalités de la feuille de route sont très vendeuses et ne sont pas construites. Elles ne doivent apparaître nulle part sur le site tant qu'elles ne sont pas livrées :

- **Relance automatique** et **prédiction de dérive**
- **Notification de prochaine visite**

Sur un marché de quelques milliers de professionnels, une promesse non tenue se sait vite. En cas de doute sur l'existence d'une fonctionnalité, demander plutôt qu'écrire.

---

## Contraintes techniques

Le site doit rester prérendu, léger et rapide. C'est le canal d'acquisition principal.

- Contenu HTML/Svelte essentiellement statique
- Aucune bibliothèque PDF
- Vidéos en vignette, chargement au clic
- Images AVIF/WebP redimensionnées
- Animations CSS légères uniquement
- Pas de carrousel, pas de bibliothèque UI lourde

---

## Nomenclature

| Terme | Sens |
|---|---|
| **Indy** | Le segment propriétaires de pianos, et la famille de plans associée |
| **Pro** | Le segment professionnels : accordeurs, techniciens, ateliers |
| **Community** | Écoles, paroisses, salles communautaires |
| **Studio** | L'application produit authentifiée. N'est pas dans ce dépôt. |
| **Identify** | Le module d'identification par photo |
| **Diagnostic** | Le balayage acoustique note par note |

---

## Méthode de travail

Le contenu est produit sous forme de **decks de copie** dans `docs/copy/`, un par lot.

Un deck contient le texte final, clé par clé, en français et en anglais. Il ne contient pas d'intentions — la chaîne exacte à écrire.

**Avant d'appliquer un deck :**

1. Repérer les clés existantes de la page concernée dans `fr.json`
2. Proposer une table de correspondance clé existante → clé du deck
3. Attendre validation avant d'éditer

Réutiliser les clés existantes plutôt que d'en créer. Deux jeux de traductions qui divergent est le principal risque de ce travail.

**Pendant l'application :**

- Ne rien inventer qui ne figure pas dans le deck
- Signaler les clés existantes sans équivalent dans le deck, sans les supprimer
- Ne pas refactorer, ne pas améliorer ce qui n'est pas demandé
- Ne toucher qu'aux fichiers concernés par le lot en cours

---

## Décisions actées

Ne pas les rouvrir sans discussion explicite.

| N° | Décision |
|---|---|
| D-01 | Le français est la langue de référence du site |
| D-02 | La promesse de demandes qualifiées passe avant toute description d'outil |
| D-03 | « Indy » est conservé comme nom de segment et de famille de plans |
| D-04 | L'axe de segmentation des plans propriétaires est le nombre de pianos |
| D-05 | Le site public est séparé de l'application produit |
| D-06 | Aucune mention de relance automatique tant qu'elle n'est pas livrée |
| D-07 | Pas de carrousel ni de bibliothèque UI lourde |