import { render, screen, within } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import { DeveloperLab } from "./developer-lab"

describe("DeveloperLab", () => {
  it("changes the active monitor without navigating away", async () => {
    const user = userEvent.setup()
    render(<DeveloperLab />)

    expect(screen.getAllByRole("region", { name: "Inicio" }).length).toBeGreaterThan(0)

    const navigation = screen.getAllByRole("navigation", {
      name: "Secciones del Developer Lab",
    })[0]

    await user.click(within(navigation).getByRole("button", { name: "Proyectos" }))

    const projectRegions = screen.getAllByRole("region", { name: "Proyectos" })
    expect(projectRegions.length).toBeGreaterThan(0)
    expect(screen.getAllByText("Trabajo seleccionado").length).toBeGreaterThan(0)
    projectRegions.forEach((region) => expect(region).toHaveAttribute("data-lab-state", "projects"))
    expect(screen.getAllByRole("heading", { name: "Loretta" }).length).toBeGreaterThan(0)
    expect(screen.getAllByRole("heading", { name: "Fiborti Analytics" }).length).toBeGreaterThan(0)
  })
})
