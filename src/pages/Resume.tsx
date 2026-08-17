function Resume() {
  return (
    <div>
      <h1 className="font-section-title text-4xl font-semibold tracking-tight text-text">Resume</h1>
      <div className="mt-8 overflow-hidden rounded-lg border border-muted/20 bg-surface">
        <object
          data="/Angel Verde-Salas Resume 2026 S.pdf"
          type="application/pdf"
          className="h-[80vh] w-full"
          aria-label="Resume PDF"
        >
          <p className="p-6 text-sm text-muted">
            Your browser can't preview PDFs inline.{' '}
            <a href="/Angel Verde-Salas Resume 2026 S.pdf" className="text-accent underline">
              Download the PDF
            </a>{' '}
            instead.
          </p>
        </object>
      </div>
      <a
        href="/Angel Verde-Salas Resume 2026 S.pdf"
        download
        className="font-caption mt-4 inline-block text-sm text-muted underline hover:text-accent"
      >
        Download PDF
      </a>
    </div>
  )
}

export default Resume
