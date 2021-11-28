import { authReducer } from "auth/authReducer";
import { types } from "types/types";


describe("Pruebas en authReducer", () => {
    test("Debe retornar el estado por defecto", () => {
        const state = authReducer({ logged: false }, {});

        expect(state).toEqual({ logged: false });
    });

    test("Debe autenticar y colocar el name del usuario", () => {
        const state = authReducer({ logged: false }, { type: types.login, payload: { name: "Francisco" } });

        expect(state).toEqual({ logged: true, name: "Francisco" });
    });

    test("Debe borrar el name y logged en false", () => {
        const state = authReducer({ logged: true, name: "Francisco" }, { type: types.logout });

        expect(state).toEqual({ logged: false });
    });
});