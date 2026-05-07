# Location — site vitrine (GitHub Pages)

Site statique pour présenter un appartement à louer. Aucune étape de build : ouvrez `index.html` dans un navigateur ou publiez tel quel sur GitHub Pages.

## Fichiers

- `index.html` — page unique
- `styles.css` — mise en page responsive
- `main.js` — galerie (agrandissement des photos)
- `images/` — photos (`CONTENT.md` explique comment les remplacer)
- `CONTENT.md` — checklist et formats `tel` / `mailto` / WhatsApp

## Publier sur GitHub Pages

1. Créez un dépôt sur [GitHub](https://github.com/new) (par ex. `location-appartement`).
2. Dans ce dossier :

```bash
git init
git add .
git commit -m "Initial site location vitrine"
git branch -M main
git remote add origin https://github.com/VOTRE_USER/VOTRE_REPO.git
git push -u origin main
```

3. Sur GitHub : **Settings → Pages**
   - **Build and deployment** → **Source** : *Deploy from a branch*
   - **Branch** : `main` → **`/ (root)`**
   - Enregistrer.

Après une à deux minutes, le site est accessible à :

**`https://VOTRE_USER.github.io/VOTRE_REPO/`**

*(Si le dépôt s’appelle exactement `VOTRE_USER.github.io`, l’URL peut être `https://VOTRE_USER.github.io/` — voir la [documentation GitHub Pages](https://docs.github.com/pages).)*

## Contact

Les boutons utilisent des **liens directs** (`tel:`, `mailto:`, WhatsApp), sans formulaire ni backend — adapté à GitHub Pages. Pour un formulaire par email, vous pouvez plus tard intégrer un service tiers (Formspree, etc.) en modifiant `index.html`.
