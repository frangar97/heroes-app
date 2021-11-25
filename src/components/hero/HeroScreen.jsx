import { Navigate, useParams } from "react-router-dom"
import { getHeroById } from "selectors/getHeroById";

export const HeroScreen = () => {
    const { heroeId } = useParams();
    const hero = getHeroById(heroeId);

    if (!hero) {
        return <Navigate to="/" />
    }

    return (
        <div>
            <h1>{hero.superhero}</h1>
        </div>
    )
}
