export function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-muted text-sm">
          © {new Date().getFullYear()} Eliott Lee
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://www.linkedin.com/in/eliott-lee"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted text-sm hover:text-accent transition-colors duration-200"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/lee-eliott"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted text-sm hover:text-accent transition-colors duration-200"
          >
            GitHub
          </a>
          <a
            href="mailto:eliottlee13@gmail.com"
            className="text-muted text-sm hover:text-accent transition-colors duration-200"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
