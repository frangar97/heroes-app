import { HeroCard } from "components/hero/HeroCard";
import { useForm } from "hooks/useForm"
import { useLocation, useNavigate } from "react-router";
import { getHeroesByName } from "selectors/getHerosByName";

export const SearchScreen = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const searchParam = new URLSearchParams(location.search);
    const { values, handleInputChange } = useForm({ searchText: "" });
    const heroes = getHeroesByName(searchParam.get("q") ? searchParam.get("q") : "");

    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`?q=${values.searchText}`)
    }

    return (
        <>
            <h1>Busquedas</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h4>Buscar</h4>
                    <hr />
                    <form onSubmit={handleSearch}>
                        <input type="text" value={values.searchText} onChange={handleInputChange} placeholder="Buscar un heroe" className="form-control" name="searchText" autoComplete="off" />
                        <button className="btn btn-outline-primary mt-1" type="submit">Buscar...</button>
                    </form>
                </div>

                <div className="col-7">
                    <h4>Resultados</h4>
                    <hr />
                    {heroes.map(heroe => <HeroCard key={heroe.id} {...heroe} />)}
                </div>
            </div>
        </>
    )
}