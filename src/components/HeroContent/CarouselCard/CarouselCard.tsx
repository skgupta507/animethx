import {Badge, Flex, Image, Overlay, Paper, Title} from "@mantine/core";
import classes from './CarouselCard.module.css'
import translateShikimoriStatus from "@/utils/translateShikimoriStatus";
import NextImage from "next/image";
import {AnimeType} from "@/types/Shikimori/Responses/Types/AnimeType";
import Link from "next/link";
import globalVariables from '../../../configs/globalVariables.json'

export default function CarouselCard({ animeTitle }: { animeTitle: AnimeType }) {
    return (
        <Paper
            component={Link}
            href={`/titles/${animeTitle.url.replace('https://shikimori.one/animes/', '')}`}
            radius="xl"
            className={classes.card}
        >
            <Overlay
                radius="xl"
                gradient="linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%)"
                className={classes.overlay}
            >
                <Badge className={classes.status} color="black">{translateShikimoriStatus(animeTitle.status ?? '')}</Badge>
                <Badge className={classes.score}>{animeTitle.score}</Badge>
                <Flex
                    className={classes.info}
                    direction="column"
                    justify="flex-end"
                    gap="0.25rem"
                >
                    <Badge className={classes.episodes}>
                        {animeTitle.episodesAired} / {animeTitle.episodes === 0 ? "?" : animeTitle.episodes}
                    </Badge>
                    <Title className={classes.title} order={3} lineClamp={2}>{animeTitle.russian}</Title>
                </Flex>
            </Overlay>
            <Image
                alt="Anime poster"
                src={animeTitle.poster?.originalUrl}
                placeholder="blur"
                blurDataURL={globalVariables.imagePlaceholder}
                width={300}
                height={325}
                component={NextImage}
                className={classes.poster}
                radius="xl"
            />
        </Paper>
    );
}