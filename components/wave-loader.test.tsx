import { act, cleanup, render, screen } from "@testing-library/react"
import WaveLoader from "./wave-loader"

describe("WaveLoader", () => {
  beforeEach(() => {
    vi.useFakeTimers()
    sessionStorage.clear()
  })

  afterEach(() => {
    cleanup()
    vi.useRealTimers()
    sessionStorage.clear()
  })

  it("renders the premium Web Code loading identity with Wave", async () => {
    render(<WaveLoader durationMs={1200} exitDurationMs={300} />)

    await act(async () => {})

    expect(screen.getByRole("status")).toHaveAccessibleName(
      /cargando experiencia web code/i,
    )
    expect(
      screen.getByRole("img", { name: /wave, mascota de webcode/i }),
    ).toHaveAttribute("src", "/assets/wave/wave-programando-transparent.png")
    expect(screen.getByText("Web Code")).toBeInTheDocument()
    expect(
      screen.getByText("Conectando ideas, creando futuro."),
    ).toBeInTheDocument()
    expect(screen.queryByText("</>")).not.toBeInTheDocument()
  })

  it("hides after the configured duration and stores the session flag", async () => {
    render(
      <WaveLoader
        durationMs={1000}
        exitDurationMs={250}
        storageKey="wave-loader-test"
      />,
    )

    await act(async () => {})

    expect(screen.getByRole("status")).toBeInTheDocument()

    await act(async () => {
      vi.advanceTimersByTime(999)
    })
    expect(screen.getByRole("status")).toBeInTheDocument()

    await act(async () => {
      vi.advanceTimersByTime(251)
    })
    expect(screen.queryByRole("status")).not.toBeInTheDocument()
    expect(sessionStorage.getItem("wave-loader-test")).toBe("true")
  })

  it("does not render when it has already been shown in the session", () => {
    sessionStorage.setItem("wave-loader-seen-v2", "true")

    render(<WaveLoader />)

    expect(screen.queryByRole("status")).not.toBeInTheDocument()
  })

  it("keeps the main layout accessible after the loader exits", async () => {
    render(
      <>
        <WaveLoader durationMs={800} exitDurationMs={200} />
        <main>
          <a href="#contacto">Contacto</a>
          <section id="contacto">Agenda tu proyecto</section>
        </main>
      </>,
    )

    await act(async () => {})

    expect(screen.getByRole("status")).toBeInTheDocument()
    expect(screen.getByRole("link", { name: "Contacto" })).toHaveAttribute(
      "href",
      "#contacto",
    )

    await act(async () => {
      vi.advanceTimersByTime(1000)
    })

    expect(screen.queryByRole("status")).not.toBeInTheDocument()
    expect(screen.getByText("Agenda tu proyecto")).toBeInTheDocument()
  })
})
