import { AuthContext } from "auth/authContext";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router";
import { DashboardRoutes } from "routers/DashboardRoutes";

describe("Pruebas en <DashboardRoutes/>", () => {

    test("Debe mostrar correctamente", () => {
        const wrapper = mount(
            <AuthContext.Provider value={{ user: { logged: true, nombre: "probando" } }}>
                <MemoryRouter>
                    <DashboardRoutes />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').text().trim()).toBe("probando");
    });


})