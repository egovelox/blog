---
title: "Introduction to deno"
description: "traditional post"
date: "2024-04-04"
public: false
---

## Installation

Install the deno binary in the ``$HOME/DEV/deno/bin/`` directory :

```bash
curl -fsSL https://deno.land/install.sh | DENO_INSTALL="$HOME/DEV/deno" sh
```

Then, running ``deno info`` will tell you where deno installed modules caches, etc :
```bash
deno info
DENO_DIR location: /Users/maxime.richard/Library/Caches/deno
Remote modules cache: /Users/maxime.richard/Library/Caches/deno/deps
npm modules cache: /Users/maxime.richard/Library/Caches/deno/npm
Emitted modules cache: /Users/maxime.richard/Library/Caches/deno/gen
Language server registries cache: /Users/maxime.richard/Library/Caches/deno/registries
Origin storage: /Users/maxime.richard/Library/Caches/deno/location_data
```

