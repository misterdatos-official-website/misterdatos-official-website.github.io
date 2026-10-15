export interface FanartWork {
  id: string;
  title: string;
  artist: string;
  artistSocialUrl?: string;
  /** Direct image URL copied from ImgBB. */
  imageUrl: string;
  alt: string;
  date?: string;
}

export const fanartWorks: FanartWork[] = [
  {
    id: "misterfurry",
    title: "MisterFurry",
    artist: "Bumblebee Art",
    imageUrl: "https://i.ibb.co/8yZ0kW8/Mister-Furry-by-Bumblebee.png",
    alt: "Dibujo de MisterFurry por Bumblebee Art",
  },
  {
    id: "misteroso-by-novastellar",
    title: "MisterOso",
    artist: "NovaStellar",
    artistSocialUrl: "https://www.youtube.com/@NovaStargazer03",
    imageUrl: "https://i.ibb.co/PvTj2g8q/Mister-Furry.png",
    alt: "Fanart de MisterOso por NovaStellar",
  },
  {
    id: "mister-drama-total-fullbody",
    title: "Mister Drama Total Fullbody",
    artist: "DuskNevil",
    artistSocialUrl: "https://www.instagram.com/ovejahadez_/",
    imageUrl: "https://i.ibb.co/jktb6cY5/Proyecto-nuevo.webp",
    alt: "Dibujo fanart de la comunidad",
  },
    {
      id: "mister-drama-total",
      title: "Mister Drama Total",
      artist: "DuskNevil",
      artistSocialUrl: "https://www.instagram.com/ovejahadez_/",
      imageUrl: "https://i.ibb.co/mC873d0Y/no-soportaste-panzona.jpg",
      alt: "Dibujo fanart de la comunidad",
  },
];
