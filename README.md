# Ace Editor for Vaadin 25

Verbaria's fork of [F0rce/ace](https://github.com/F0rce/ace) — an embeddable
[Ace](http://ace.c9.io/) editor add-on for Vaadin 25.

Differences from upstream:

- Styles extracted to `themes/` — pick `ace-aura.css` or `ace-lumo.css`.
- New Ace theme `vaadin` whose colors come from CSS variables (`--ace-*`),
  bridged to Vaadin tokens by the theme files above.
  
## Install

Add JitPack as a repository:

```xml
<repositories>
    <repository>
        <id>jitpack.io</id>
        <url>https://jitpack.io</url>
    </repository>
</repositories>
```

Add the dependency:

```xml
<dependency>
    <groupId>com.github.verbaria</groupId>
    <artifactId>ace</artifactId>
    <version>25.0.0</version>
</dependency>
```

Version values JitPack accepts:

- a release tag — e.g. `25.0.0` (recommended).
- `master-SNAPSHOT` — latest commit on master, rebuilt on push.
- a commit SHA — pinned build.

## Theme

The component ships **base styles only**. You must import one palette
stylesheet, otherwise marker / status colors fall back to hardcoded
neutrals.

In your `AppShell`:

```java
@CssImport("./@f0rce/lit-ace/themes/ace-aura.css")   // for Aura
// or
@CssImport("./@f0rce/lit-ace/themes/ace-lumo.css")   // for Lumo
```

Aura tokens used: `--aura-{red,green,blue,orange,purple,yellow}` and the
matching `-text` variants, plus the standard `--vaadin-*` tokens for
neutrals (background, gutter, borders). Lumo tokens used: `--lumo-*`
contrast / primary / success / error.

## Tuning

CSS knobs from `ace-base.css` (override per-instance or per-app):

| variable                | purpose                          |
|-------------------------|----------------------------------|
| `--lae-border`          | editor outer border              |
| `--lae-border-radius`   | editor border radius             |
| `--las-background-color`| status indicator background      |
| `--las-color`           | status indicator text            |
| `--las-border-radius`   | status indicator radius          |
| `--ace-content-padding` | inner text padding (px)          |

All `--ace-*` syntax tokens are listed in the theme files — override any
of them in your app CSS to recolor a single token.

## Release

Releases happen only through the GitHub Actions workflow. To cut one:

1. Bump `<version>` in `pom.xml`.
2. Commit with a message ending in `[release]`.
3. Push to `master`.

The workflow reads the version, creates the matching git tag, and
publishes a GitHub Release with the built JAR. JitPack picks up the new
tag on the next consumer request.

## License

[MIT](https://github.com/verbaria/ace/blob/master/LICENSE) — inherited
from upstream F0rce/ace.
