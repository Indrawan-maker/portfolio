import { StaticImageData } from "next/image"
import {JSX} from "react"

export type ParamsProps = {
    params : {
        id : string
    }
}

export type cardProps = {
    projectTitle : string
    projectDescription: string
    projectImage: StaticImageData
    projectLink: string
    techStack : string[]
}


export type experienceProps = {
    imageProps : StaticImageData
    dateProps: string
    titleProps: string
    descProps: string
}

