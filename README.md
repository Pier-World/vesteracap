# Vestera Capital Partners

Minimal, no-scroll landing page for [vesteracap.com](https://vesteracap.com).

## Local preview

```bash
npx --yes serve .
```

Open the URL shown (usually `http://localhost:3000`).

## Deploy to Netlify

1. Push this repo to GitHub (`Pier-World/vesteracap`).
2. Log in at [app.netlify.com](https://app.netlify.com).
3. **Add new site → Import an existing project → GitHub**.
4. Authorize Netlify for the **Pier-World** org if prompted, then select **vesteracap**.
5. Build settings (should match `netlify.toml`):
   - **Build command:** leave as-is / the echo command is fine
   - **Publish directory:** `.` (site root)
6. Deploy. You’ll get a URL like `https://random-name.netlify.app` — confirm the page looks right there first.

## Point vesteracap.com (GoDaddy → Netlify)

### Option A — Netlify nameservers (simplest)

1. In Netlify: **Domain management → Add a domain → `vesteracap.com`**.
2. Choose to use Netlify DNS. Copy the nameservers Netlify shows (e.g. `dns1.pXX.nsone.net`, …).
3. In GoDaddy: **My Products → Domains → vesteracap.com → DNS → Nameservers → Change → Enter my own nameservers**.
4. Paste Netlify’s nameservers and save.
5. Back in Netlify, wait for DNS verification, then enable HTTPS (Let’s Encrypt).
6. Set **Primary domain** to `vesteracap.com` and redirect `www` → apex.

Nameserver changes can take from a few minutes up to 24–48 hours.

### Option B — Keep GoDaddy DNS

1. In Netlify, add `vesteracap.com` and choose to configure DNS externally.
2. In GoDaddy DNS records:
   - **A** record: Host `@` → Netlify load balancer IP (Netlify shows the current value; commonly `75.2.60.5`)
   - **CNAME** record: Host `www` → your Netlify site hostname (`something.netlify.app`)
3. Remove conflicting A/AAAA/CNAME records for `@` or `www` if GoDaddy added parking defaults.
4. In Netlify, verify the domain and provision HTTPS.
5. Prefer apex as primary; redirect `www` → `vesteracap.com`.

## Contact

The Contact link opens `mailto:hello@vestera.capital`.
