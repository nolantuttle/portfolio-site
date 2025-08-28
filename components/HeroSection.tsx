"use client"

import { nolan } from "../data/hero";
import HeroCard from "./HeroCard";

export default function HeroSection() {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">About Me</h2>
            <HeroCard nolan={nolan} />
        </div>
    );
}