import { siteMetadata } from "@/data/siteMetadata";
import { navigation } from "@/data/navigation";
import { socialLinks } from "@/data/socialLinks";

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="font-mono text-sm font-semibold text-foreground">
              {siteMetadata.name}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              {siteMetadata.tagline}
            </p>
          </div>

          <ul className="flex flex-wrap items-center justify-center gap-4">
            {navigation.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className="text-xs text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.url}
                className="text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.platform}
              </a>
            ))}
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} {siteMetadata.name}. Built with Next.js,
          TypeScript &amp; Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
