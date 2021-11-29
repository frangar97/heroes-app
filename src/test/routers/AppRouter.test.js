import { AuthContext } from "auth/authContext";
import { mount } from "enzyme";
import { AppRouter } from "routers/AppRouter";

describe("Pruebas en el componente <AppRouter/>", () => {

    const contextValue = {
        user: {
            logged: false
        }
    }

    test("Debe mostrar el login si no esta autenticado", () => {
        const wrapper = mount(<AuthContext.Provider value={contextValue}><AppRouter /></AuthContext.Provider>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('h1').text().trim()).toBe("Login");
    })

    test("Debe mostrar el componente de marvel si esta autenticado", () => {
        const wrapper = mount(<AuthContext.Provider value={{ user: { logged: true, nombre: "probando" } }}><AppRouter /></AuthContext.Provider>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.navbar').exists()).toBe(true);
    })

})