You are able to use the Svelte MCP server, where you have access to comprehensive Svelte 5 and SvelteKit documentation. Here's how to use the available tools effectively:

## Available MCP Tools:

### 1. list-sections

Use this FIRST to discover all available documentation sections. Returns a structured list with titles, use_cases, and paths.
When asked about Svelte or SvelteKit topics, ALWAYS use this tool at the start of the chat to find relevant sections.

### 2. get-documentation

Retrieves full documentation content for specific sections. Accepts single or multiple sections.
After calling the list-sections tool, you MUST analyze the returned documentation sections (especially the use_cases field) and then use the get-documentation tool to fetch ALL documentation sections that are relevant for the user's task.

### 3. svelte-autofixer

Analyzes Svelte code and returns issues and suggestions.
You MUST use this tool whenever writing Svelte code before sending it to the user. Keep calling it until no issues or suggestions are returned.

### 4. playground-link

Generates a Svelte Playground link with the provided code.
After completing the code, ask the user if they want a playground link. Only call this tool after user confirmation and NEVER if code was written to files in their project.

## Interface Guidelines

### 1. Accessibility (WCAG 2.1)
#### Critical
* Images without alt text
* Icon-only buttons missing aria-labels
* Form inputs without labels
* Non-semantic click handlers (div onClick)
* Links without href
#### Serious
* Focus outline removed without replacement
* Missing keyboard handlers
* Color-only information
* Touch targets under 44×44px
#### Moderate
* Skipped heading levels
* Positive tabIndex values
* Role without required attributes
* Missing ARIA roles
* Incorrect ARIA roles

### 2. Visual Design
#### Styling
* Use semantic HTML elements
* Use tailwindcss classes for styling
* Responsive design using tailwindcss classes
* Consistent spacing and padding
* Use ARIA attributes for interactive elements

#### Layout
* Optical alignment. Adjust ±1px when perception beats geometry.
* Deliberate alignment. Every element aligns with something intentionally whether to a grid, baseline, edge, or optical center. No accidental positioning.
* Balance contrast in lockups. When text & icons sit side by side, adjust weight, size, spacing, or color so they don’t clash. For example, a thin-stroke icon may need a bolder stroke next to medium-weight text.
* Responsive coverage. Verify on mobile, laptop, & ultra-wide. For ultra-wide, zoom out to 50% to simulate.
* Respect safe areas. Account for notches & insets with safe-area variables.
* No excessive scrollbars. Only render useful scrollbars; fix overflow issues to prevent unwanted scrollbars. On macOS set "Show scroll bars" to "Always" to test what Windows users would see.
* Let the browser size things. Prefer flex/grid/intrinsic layout over measuring in JS. Avoid layout thrash by letting CSS handle flow, wrapping, & alignment.

#### Content
* Inline help first. Prefer inline explanations; use tooltips as a last resort.
* Stable skeletons. Skeletons mirror final content exactly to avoid layout shift.
* Accurate page titles. <title> reflects the current context.
* No dead ends. Every screen offers a next step or recovery path.
* All states designed. Empty, sparse, dense, & error states.
* Typographic quotes. Prefer curly quotes (“ ”) over straight quotes (" ").
* Avoid widows/orphans. Tidy rag & line breaks.
* Redundant status cues. Don’t rely on color alone; include text labels.
* Icons have labels. Convey the same meaning with text for non-sighted users.
* Don’t ship the schema. Visual layouts may omit visible labels, but accessible names/labels still exist for assistive tech.
* Use the ellipsis character. … over three periods ....
* Anchored headings. Set scroll-margin-top for headers when linking to sections.
* Resilient to user-generated content. Layouts handle short, average, & very long content.
* Locale-aware formats. Format dates, times, numbers, delimiters, & currencies for the user’s locale.
* Prefer language settings over location. Detect language via Accept-Language header & navigator.languages. Never rely on IP/GPS for language.
* Accessible content. Set accurate names (aria-label), hide decoration (aria-hidden) & verify in the accessibility tree.
* Icon-only buttons are named. Provide a descriptive aria-label.
Semantics before ARIA. Prefer native elements (button, a, label, table), before aria-*.
* Headings & skip link. Hierarchical <h1–h6> & a “Skip to content” link.
* Brand resources from the logo. Right-click the nav logo to surface brand assets for quick access.
* Non-breaking spaces for glued terms. Use a non-breaking space &nbsp; to keep units, shortcuts & names together: 10 MB → 10&nbsp;MB, ⌘ + K → ⌘&nbsp;+&nbsp;K, Vercel SDK → Vercel&nbsp;SDK. Use &#x2060; for no space.

#### Forms
* Enter submits. When a text input is focused, Enter submits if it's the only control. If there are many controls, apply to the last control.
* Textarea behavior. In <textarea>, ⌘/⌃+Enter submits; Enter inserts a new line.
* Labels everywhere. Every control has a <label> or is associated with a label for assistive tech.
* Label activation. Clicking a <label> focuses the associated control.
* Submission rule. Keep submit enabled until submission starts; then disable during the in-flight request, show a spinner, & include an idempotency key.
* Don’t block typing. Even if a field only accepts numbers, allow any input & show validation feedback. Blocking keystrokes entirely is confusing because the user gets no explanation.
* Don’t pre-disable submit. Allow submitting incomplete forms to surface validation feedback.
* No dead zones on controls. Checkboxes & radios avoid dead zones; the label & control share a single generous hit target.
* Error placement. Show errors next to their fields; on submit, focus the first error.
* Autocomplete & names. Set autocomplete & meaningful name values to enable autofill.
* Spellcheck selectively. Disable for emails, codes, usernames, etc.
* Correct types & input modes. Use the right type & inputmode for better keyboards & validation.
* Placeholders signal emptiness. End with an ellipsis.
* Placeholder value. Set placeholder to an example value or pattern e.g., +1 (123) 456-7890 & sk-012345679…
* Unsaved changes. Warn before navigation when data could be lost.
* Password managers & 2FA. Ensure compatibility & allow pasting one-time codes.
* Don’t trigger password managers for non-auth fields. For inputs like “Search” avoid reserved names (e.g., password), use autocomplete="off" or a specific token like autocomplete="one-time-code" for OTP fields.
* Text replacements & expansions. Some input methods add trailing whitespace. The input should trim the value to avoid showing a confusing error message.
* Windows <select> background. Explicitly set background-color & color on native <select> to avoid dark-mode contrast bugs on Windows.

#### Design
* Layered shadows. Mimic ambient + direct light with at least two layers.
* Crisp borders. Combine borders & shadows; semi-transparent borders improve edge clarity.
* Nested radii. Child radius ≤ parent radius & concentric so curves align.
* Hue consistency. On non-neutral backgrounds, tint borders/shadows/text toward the same hue.
* Accessible charts. Use color-blind-friendly palettes.
* Minimum contrast. Prefer APCA over WCAG 2 for more accurate perceptual contrast.
* Interactions increase contrast. :hover, :active, :focus have more contrast than rest state.
* Browser UI matches your background. Set <meta name="theme-color" content="#000000"> to align the browser’s theme color with the page background.
* Set the appropriate color-scheme. Style the <html> tag with color-scheme: dark in dark themes so that scrollbars and other device UI have proper contrast.
* Text anti-aliasing & transforms. Scaling text can change smoothing. Prefer animating a wrapper instead of the text node. If artifacts persist set translateZ(0) or will-change: transform to promote to its own layer.
* Avoid gradient banding. Fading content to dark colors using css masks can cause banding. Background images can be used instead.

#### Copywriting
* Active voice.
* Instead of “The CLI will be installed,” say “Install the CLI.”
* Headings & buttons use Title Case (Chicago). On marketing pages, use sentence case.
* Be clear & concise. Use as few words as possible.
* Prefer & over and.
* Action-oriented language.
* Instead of “You will need the CLI…” say “Install the CLI…”.
* Keep nouns consistent. Introduce as few unique terms as possible.
* Write in second person. Avoid first person.
* Use consistent placeholders.
* Strings: YOUR_API_TOKEN_HERE. Numbers: 0123456789.
* Use numerals for counts.
* Instead of “eight deployments” say “8 deployments”.
* Consistent currency formatting. In any given context, display currency with either 0 or 2 decimal places, never mix both.
* Separate numbers & units with a space.
* Instead of 10MB say 10 MB.
* Use a non-breaking space e.g., 10&nbsp;MB.
* Default to positive language. Frame messages in an encouraging, problem-solving way, even for errors.
* Instead of “Your deployment failed,” say “Something went wrong—try again or contact support.”
* Error messages guide the exit. Don’t just state what went wrong—tell the user how to fix it.
* Instead of “Invalid API key,” say “Your API key is incorrect or expired. Generate a new key in your account settings.” The copy & buttons/links should educate & give a clear action.
* Avoid ambiguity. Labels are clear & specific.
* Instead of the button label “Continue” say “Save API Key”.
