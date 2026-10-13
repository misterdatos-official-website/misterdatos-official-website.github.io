export interface FanartWork {
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
    title: "MisterFurry",
    artist: "Bumblebee Art",
    imageUrl: "https://i.ibb.co/8yZ0kW8/Mister-Furry-by-Bumblebee.png",
    alt: "Dibujo de MisterFurry por Bumblebee Art",
  },
  {
    title: "Mister Drama Total Fullbody",
    artist: "DuskNevil",
    artistSocialUrl: "https://www.instagram.com/ovejahadez_/",
    imageUrl: "https://i.ibb.co/jktb6cY5/Proyecto-nuevo.webp",
    alt: "Dibujo fanart de la comunidad",
  },
    {
    title: "Mister Drama Total",
    artist: "DuskNevil",
    artistSocialUrl: "https://www.instagram.com/ovejahadez_/",
    imageUrl: "https://i.ibb.co/mC873d0Y/no-soportaste-panzona.jpg",
    alt: "Dibujo fanart de la comunidad",
  },
];
