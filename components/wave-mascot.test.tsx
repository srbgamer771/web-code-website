import { render, screen } from "@testing-library/react"
import { WaveMascot } from "./wave-mascot"

describe("WaveMascot", () => {
  it("renders the requested Wave variant with accessible alt text", () => {
    render(<WaveMascot variant="programando" size="md" />)

    expect(
      screen.getByRole("img", { name: /wave programando, mascota de webcode/i }),
    ).toHaveAttribute("src", "/assets/wave/wave-programando-transparent.png")
  })

  it("supports numeric sizing without deforming the image", () => {
    render(<WaveMascot variant="error404" size={96} className="custom-wave" />)

    const image = screen.getByRole("img", {
      name: /wave en error 404, mascota de webcode/i,
    })

    expect(image).toHaveAttribute("src", "/assets/wave/wave-error-404.png")
    expect(image).toHaveClass("object-contain", "custom-wave")
    expect(image).toHaveStyle({ width: "96px", height: "96px" })
  })
})
