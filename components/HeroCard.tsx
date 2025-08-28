import { nolan } from "../data/hero";
import { Hero } from "../types/hero";

type Props = {
    nolan: Hero;
};

export default function HeroCard({ nolan }: Props) {
    return (
        <div className={`p-4 border rounded shadow hover:shadow-lg`}>
            <h3> {nolan.name} </h3>
            <h3> {nolan.title} </h3>
            <h3> {nolan.subtitle} </h3>
        </div>
    );
}