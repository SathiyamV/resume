# sathiya-sundaram-v.netlify.app

Personal portfolio of **Sathiya Sundaram V** — Cloud & AI Engineer.
Built with [Hugo](https://gohugo.io) and a hand-written theme (no external theme), deployed on Netlify.

## Edit content

Everything on the page comes from YAML in `data/` — no HTML needed:

| File | What it holds |
|---|---|
| `data/profile.yaml` | Name, role, summary, headline metrics, skills, education, `open_to_work` badge |
| `data/experience.yaml` | Jobs, grouped by tag |
| `data/projects.yaml` | Project cards — summary, architecture `flow`, optional CI/CD `pipeline`, links |
| `data/certs.yaml` | Certifications |
| `data/archive.yaml` | Early (2023) projects, shown in the collapsible list |

**Photo:** put a square image at `static/images/profile.jpg` (about 800×800). Until it exists, a monogram is shown.
**CV:** replace `static/Sathiya-Sundaram-V-CV.pdf`.

To publish the SAP ByDesign assistant code later, add to its entry in `data/projects.yaml`:

```yaml
  status: Open source
  status_kind: live
  links:
    - label: Source
      url: https://github.com/SathiyamV/<repo>
```

## Run locally

```sh
hugo server        # http://localhost:1313
hugo --gc --minify # production build into public/
```

Netlify reads `netlify.toml` (Hugo version is pinned there).
