import { Inter } from "next/font/google";
import {Lusitana } from "next/font/google";
import { Fredoka } from "next/font/google";
import {subset} from "semver";
import {options} from "prettier-plugin-tailwindcss";

export const inter = Inter({subsets: ['latin']})

export const lusitana = Lusitana({
    weight: ['400','700'],
    subsets: ['latin']
})

export const fredoka = Fredoka({
    weight: ['400','500','600','700'],
    subsets: ['latin']
})