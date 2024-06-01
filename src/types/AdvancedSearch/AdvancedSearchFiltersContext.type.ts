import {Dispatch, SetStateAction} from "react";

export type AdvancedSearchFiltersContextType = {
    censored: boolean,
    toggleCensored: () => void,
    durations: string[],
    setDurations: Dispatch<SetStateAction<string[]>>,
    demographicGenresValue: string[],
    setDemographicGenresValue: Dispatch<SetStateAction<string[]>>,
    genreGenresValue: string[],
    setGenreGenresValue: Dispatch<SetStateAction<string[]>>,
    themeGenresValue: string[],
    setThemeGenresValue: Dispatch<SetStateAction<string[]>>,
    kinds: string[],
    setKinds: Dispatch<SetStateAction<string[]>>,
    limit: number,
    setLimit: Dispatch<SetStateAction<number>>,
    order: string | null,
    setOrder: Dispatch<SetStateAction<string | null>>,
    ratings: string[] | undefined,
    setRatings: Dispatch<SetStateAction<string[] | undefined>>,
    score: number,
    setScore: Dispatch<SetStateAction<number>>,
    year: number,
    setYear: Dispatch<SetStateAction<number>>,
    rangedYears: [number, number],
    setRangedYears: Dispatch<SetStateAction<[number, number]>>,
    yearStart: number,
    setYearStart: Dispatch<SetStateAction<number>>,
    yearsRanged: boolean,
    toggleYearsRanged: () => void,
    seasons: string[],
    setSeasons: Dispatch<SetStateAction<string[]>>,
    statuses: string[],
    setStatuses: Dispatch<SetStateAction<string[]>>,
    studio: string | null,
    setStudio: Dispatch<SetStateAction<string | null>>,
};