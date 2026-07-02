# Shopify Theme Collection

This repository contains multiple Shopify themes, each maintained on its own branch.

The `main` branch holds only this README. Switch to the relevant branch to access a specific theme's code.

---

## Available Themes

| Branch | Theme |
|--------|-------|
| *(branches will be listed here as they are added)* | |

---

## How to Get a Theme

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **List all available branches**
   ```bash
   git branch -a
   ```

3. **Switch to the theme branch you want**
   ```bash
   git checkout <branch-name>
   ```

4. **Deploy to Shopify** using the [Shopify CLI](https://shopify.dev/docs/themes/tools/cli):
   ```bash
   shopify theme push
   ```

---

## Branch Naming Convention

Each branch is named after the theme it contains, e.g.:

```
nautica-development
dawn-custom
refresh-v2
```

---

## Notes

- Do **not** commit theme code directly to `main`.
- Each branch is self-contained — it holds the complete theme files for that store/theme.
- Developed and maintained by [NexGi](https://nexgi.com).
