# UI kit — Site vitrine du Haricot Magique

Recréation du site public de la ferme: une page d'accueil unique, en lecture verticale, avec ancres de navigation.

## Fichiers
| Fichier | Rôle |
| --- | --- |
| `index.html` | Page complète interactive (nav ancrée, filtres de légumes, FAQ dépliable, formulaire de réservation avec état envoyé) |
| `data.js` | Contenu: liens, légumes, familles, FAQ, horaires, coordonnées |
| `Hero.jsx` | Titre, chapeau, deux actions, emplacement photo portrait 4:5 |
| `FarmStory.jsx` | Récit de la conduite en permaculture + 4 chiffres |
| `VegetableSection.jsx` | Onglets de saison, filtres par famille, grille de `VegetableCard` |
| `VisitSection.jsx` | Bloc sombre: horaires, adresse, emplacement plan, action contact |
| `FaqContact.jsx` | `Accordion` FAQ + formulaire de réservation |
| `SiteFooter.jsx` | Signature typographique et coordonnées |

## Contenu à compléter
- Photos: hero (portrait 4:5), une photo par légume, plan d'accès. Les emplacements affichent « photo à fournir ».
- Téléphone et e-mail de la ferme (marqués « à compléter » dans `data.js`).
- Prix, variétés et horaires sont des exemples plausibles à valider avec Nina.
