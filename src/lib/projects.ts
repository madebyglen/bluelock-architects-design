import project01 from "@/assets/project-01.jpg";
import project02 from "@/assets/project-02.jpg";
import project03 from "@/assets/project-03.jpg";
import project04 from "@/assets/project-04.jpg";

export interface Project {
  index: string;
  slug: string;
  title: string;
  description: string;
  typology: string;
  location: string;
  area: string;
  year: string;
  image: string;
  imageAlt: string;
}

export const projects: Project[] = [
  {
    index: "01",
    slug: "esker-house",
    title: "Esker House",
    description: "High-density residential",
    typology: "Residential",
    location: "Zurich, CH",
    area: "2,400 m²",
    year: "Built 2022",
    image: project01,
    imageAlt: "Esker House — minimalist wood and glass residence in a snowy landscape",
  },
  {
    index: "02",
    slug: "void-gallery",
    title: "Void Gallery",
    description: "Cultural institution",
    typology: "Cultural",
    location: "Tokyo, JP",
    area: "8,150 m²",
    year: "Built 2023",
    image: project02,
    imageAlt: "Void Gallery — interior with stark white walls and geometric skylights",
  },
  {
    index: "03",
    slug: "stone-arch",
    title: "Stone Arch",
    description: "Public landscape",
    typology: "Public",
    location: "Vals, CH",
    area: "—",
    year: "Built 2021",
    image: project03,
    imageAlt: "Stone Arch — a massive stone structure integrated into a mountainside",
  },
  {
    index: "04",
    slug: "obsidian-pavilion",
    title: "Obsidian Pavilion",
    description: "Private retreat",
    typology: "Residential",
    location: "Reykjavik, IS",
    area: "1,100 m²",
    year: "In progress",
    image: project04,
    imageAlt: "Obsidian Pavilion — modern concrete pavilion with reflecting pool at dusk",
  },
];
