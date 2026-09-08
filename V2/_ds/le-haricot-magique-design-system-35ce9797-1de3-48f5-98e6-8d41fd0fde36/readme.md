# Le Haricot Magique — Design System

Ferme maraîchère en permaculture à **La Tour de Salvagny** (Métropole de Lyon), conduite par **Nina Papin**, avec vente directe à la ferme. Le produit numérique est unique: **une page vitrine** qui présente la ferme, la manière de cultiver, les légumes en vente et les informations pratiques de visite.

Ce dépôt contient les fondations visuelles (couleurs, typographie, espacements, mouvement), les composants React réutilisables, et une recréation du site vitrine.

## Sources fournies
- **GitHub — https://github.com/Leonxlnx/taste-skill** (branche `main`). Collection d'*Agent Skills* de direction artistique (`skills/soft-skill`, `skills/minimalist-skill`, `skills/brandkit`, `skills/taste-skill`, …). Ce dépôt ne contient **aucun** asset de marque du Haricot Magique: pas de logo, pas de police, pas de composant. Il a servi de direction de goût — l'archétype « Editorial Luxury » de `skills/soft-skill/SKILL.md` (crèmes chauds, sauge, serif variable à fort contraste, grain léger) croisé avec les règles anti-génériques de `skills/minimalist-skill/SKILL.md` (filets 1px, ombres quasi nulles, pastels lavés, pas d'emoji, pas de dégradé bleu-violet). Le lecteur qui a accès au dépôt gagne à le parcourir: les fichiers `SKILL.md` détaillent les motifs de composants, les physiques d'interaction et les listes d'anti-patterns qui ont cadré ce système.
- **Brief client** (texte): nom de la ferme, nom de la maraîchère, commune, mode de vente, demande d'une landing page, et la consigne de couleurs « qui rappellent les légumes et le bien-être humain ».
- Aucune maquette Figma, aucun code produit existant, aucune photo n'a été fournie. Tout ce qui suit est donc **créé**, pas recopié — et signalé comme tel dans les CAVEATS.

## Index du dépôt
| Chemin | Contenu |
| --- | --- |
| `styles.css` | Point d'entrée unique: uniquement des `@import` |
| `tokens/` | `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `elevation.css`, `motion.css` |
| `guidelines/` | 15 cartes-spécimen des fondations (Colors, Type, Spacing, Brand) |
| `components/core/` | Button, IconButton, Badge, Tag, Card, SectionHeading, Wordmark |
| `components/forms/` | Input, Select, Checkbox |
| `components/navigation/` | NavBar, Tabs |
| `components/content/` | Accordion, VegetableCard |
| `ui_kits/site-vitrine/` | Recréation interactive de la page d'accueil (voir son README) |
| `templates/landing-ferme/` | Point de départ éditable pour une nouvelle page de la ferme |
| `thumbnail.html` | Vignette du design system |
| `SKILL.md` | Emballage Agent Skill pour réutilisation hors de cet outil |
| `github.md` | Association au dépôt source et journal de synchronisation |

### Composants
Button, IconButton, Badge, Tag, Card, SectionHeading, Wordmark, Input, Select, Checkbox, NavBar, Tabs, Accordion, VegetableCard.

**Ajouts assumés** (aucune source ne définissait d'inventaire de composants, l'ensemble est donc dimensionné au besoin de la page vitrine):
- `Wordmark` — il n'existe pas de logo; la signature typographique tient ce rôle.
- `VegetableCard` — brique métier centrale: sans elle, la page « légumes en vente » n'existe pas.
- `Badge` à trois états de récolte — le cœur de l'information que la ferme doit publier chaque semaine.

## Fondamentaux de contenu
**Voix.** Celle de la ferme, au **nous** (« on remplit son panier », « ce qu'on nous demande souvent »), et **Nina à la troisième personne** quand on la présente (« Nina Papin cultive un hectare… »). Le visiteur est **vous**, jamais tutoyé.

**Registre.** Descriptif et concret. On énonce des faits vérifiables: surface, jours d'ouverture, prix, variété, date de récolte. Jamais de promesse abstraite. Comparaison utile:
- Oui: « Des légumes cueillis le matin, vendus l'après-midi. »
- Non: « Réinventez votre rapport au vivant. »
- Oui: « Pas de labour, pas de traitement, des planches couvertes toute l'année. »
- Non: « Une agriculture d'exception au service de votre bien-être. »

**Casse.** Phrases en casse normale, accents inclus sur les capitales. Les surtitres sont les **seules** capitales (« AU POTAGER », « LA FERME »), en `--text-micro` + `--tracking-eyebrow`. Les titres serif ne sont jamais en capitales.

**Longueur.** Titre h1 ≤ 9 mots. Chapeau: 2 phrases. Note de légume: 1 phrase. Réponse de FAQ: 2 à 3 phrases.

**Chiffres et unités.** Format français: virgule décimale et espace avant l'euro (« 2,80 € »), horaires en « 17h – 19h », unités écrites en clair (« la botte », « le kg », « la pièce »). Toujours en `--font-mono`, jamais en serif.

**Vocabulaire maison.** « la boutique de la ferme », « les planches », « la récolte », « le potager », « libre-service », « panier ». On évite « produits », « offre », « gamme », « expérience client ».

**Émoji: jamais.** Ni dans l'interface, ni dans les titres, ni dans les textes alternatifs. Les icônes Phosphor jouent ce rôle.

**Interdits d'écriture.** « Élevez », « sans couture », « révolutionnaire », « nouvelle génération », « au service de », « croustillant de fraîcheur ». Pas de point d'exclamation en dehors d'un mot d'accueil.

## Fondations visuelles
**Couleur.** Deux bases: un crème lin (`--lin-100` #FBF7EF pour la page, `--lin-50` pour les cartes) et un vert basilic profond (`--basilic-700` #2F4A32 pour l'action et l'encre, `--basilic-800` pour les titres). Sept accents tirés des cultures — carotte, tomate, betterave, aubergine, courgette, blé, chou — chacun avec sa version lavée `-soft` réservée aux fonds. **Un seul accent saturé par écran**, et c'est presque toujours la carotte (`--action-accent`, surtitres, +/− de la FAQ). La couleur porte une information: la famille d'un légume, un état de récolte. Elle n'est jamais décorative. Maximum deux fonds par page: crème et, une fois, le bloc basilic sombre de la section visite. Aucun dégradé de fond, aucun néon, aucun bleu-violet.

**Typographie.** Deux familles. **Newsreader** (serif variable, opsz 6–72) pour tous les titres, les noms de légumes et les questions de FAQ: poids 400, `letter-spacing: -.025em`, `line-height: 1.06` en display. L'italique du serif est un marqueur de marque: « *Magique* » dans la signature, les noms latins des légumes. **Work Sans** pour le corps, l'interface et les surtitres, interligne 1.62, mesure 64ch. **DM Mono** pour prix, horaires, quantités et libellés techniques. Pas de troisième famille, pas de graisses ≥ 700.

**Mise en page.** Page de 1200px maximum, gouttière fluide `clamp(20px,5vw,56px)`, rythme vertical `--section-y` = `clamp(64px,10vw,128px)`. Grilles à deux colonnes asymétriques (1.05 / 0.95, 0.9 / 1.1) qui retombent en une colonne sous 900px. Un seul élément fixe: la barre de navigation collante, crème à 86% avec `backdrop-filter: blur(14px)` — la transparence et le flou ne servent qu'à ça.

**Fonds et imagerie.** Aplats de couleur, pas d'illustration dessinée. Les emplacements photo affichent un aplat de la famille du légume et la mention « photo à fournir » en mono. Direction attendue pour les vraies photos: lumière naturelle, tons chauds, terre et légumes réels, léger grain (`--grain-opacity` .035), jamais de saturation de banque d'images ni de noir et blanc. Formats: hero portrait 4:5, fiches légumes 4:3, plan d'accès 16:7.

**Bordures, rayons, ombres.** Filet `1px solid var(--border-hairline)` (#E4DCCB) sur toute surface — c'est la structure principale. Rayons: 4px (cases), 8px (champs), 14px (cartes), 22px (hero), pilule (boutons, pastilles, tags uniquement). Les ombres sont quasi inexistantes: `--shadow-rest` 0 1px 2px à 4% au repos, `--shadow-hover` diffuse à 16% au survol, `--shadow-lift` réservée aux éléments flottants. Aucune ombre dure, aucun `shadow-lg`. Pas de bordure colorée à gauche des cartes.

**États.** Survol: les cartes montent de `-2px` et prennent l'ombre diffuse; les boutons pleins passent au ton plus sombre (`--action-primary-hover`), les contours prennent un fond crème, les liens passent en carotte. Pression: `scale(.98)`, aucun changement de couleur. Focus: anneau carotte `0 0 0 3px rgba(201,98,44,.16)` + filet basilic — jamais l'anneau bleu du navigateur. Désactivé: opacité .45, curseur `not-allowed`.

**Mouvement.** Discret, organique, sans rebond. `--ease-soft` cubic-bezier(.16,1,.3,1) pour les révélations au scroll (translateY 12px + fade, 800ms, `IntersectionObserver`), `--dur-quick` 200ms pour les couleurs, `--dur-base` 320ms pour les transformations. On n'anime que `transform` et `opacity`. La flèche dans sa pastille glisse de 2px en diagonale au survol: c'est le seul geste ludique du système.

## Iconographie
- **Aucun jeu d'icônes n'existait dans les sources.** Substitution assumée: **Phosphor Icons, poids Regular**, chargé depuis le CDN — `<link rel="stylesheet" href="https://unpkg.com/@phosphor-icons/web@2.1.1/src/regular/style.css">`. Choix motivé par le trait fin et régulier recommandé par `skills/soft-skill` (qui bannit explicitement Lucide/Material épais). **À valider ou remplacer par un vrai jeu si la ferme en fait dessiner un.**
- Usage: `<i class="ph ph-carrot"></i>`. Jeu restreint et récurrent — `ph-basket`, `ph-map-pin`, `ph-phone`, `ph-envelope`, `ph-clock`, `ph-plant`, `ph-carrot`, `ph-caret-down`, `ph-plus`/`ph-minus`, `ph-arrow-up-right`, `ph-check`. Taille alignée sur le texte (`1.15em`), couleur héritée (`currentColor`).
- Les icônes n'apparaissent jamais seules sans libellé accessible: `IconButton` impose `label`.
- **Aucun SVG dessiné à la main** dans ce système, et aucun logo: le nom de la ferme est composé en Newsreader via `Wordmark`. Ne pas dessiner de mark — attendre un fichier de la ferme.
- Émoji et caractères unicode décoratifs: exclus. Seul `·` sert de séparateur, et `–` pour les plages d'horaires.

## CAVEATS — ce qui reste à valider
1. **Polices substituées.** Aucun fichier de police fourni. Newsreader, Work Sans et DM Mono viennent de Google Fonts (chargées par `@import` dans `tokens/fonts.css`, donc pas de binaire embarqué). Si la ferme a des licences, remplacer par des `@font-face` locales.
2. **Icônes substituées** (Phosphor Regular, CDN).
3. **Aucun logo.** Signature typographique uniquement, par choix explicite.
4. **Aucune photo.** Tous les emplacements sont marqués « photo à fournir ».
5. **Contenu d'exemple.** Variétés, prix, horaires, adresse, chiffres de la ferme sont plausibles mais inventés; téléphone et e-mail sont marqués « à compléter ».
