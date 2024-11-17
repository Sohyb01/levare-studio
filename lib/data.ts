import pesImg from "@/public/case-studies/case-study.png";

export const links = [
  {
    name: "Home",
    hash: "/#home",
  },
  {
    name: "How it works",
    hash: "/#process",
  },
  {
    name: "Portfolio",
    hash: "/#portfolio",
  },
  {
    name: "Services",
    hash: "/#services",
  },
] as const;

export const projectsData = [
  {
    title: "Programmer's Elite School",
    description:
      "The number one Robotics & AI education institute across the middle east",
    tags: [
      "Brand strategy",
      "Brand design",
      "Website design",
      "Website development",
      "Essential SEO",
      "Copywriting",
    ],
    imageUrl: pesImg,
    projectUrl: "https://pes-edu.com/",
  },
  {
    title: "Dalia Farah Scenography",
    description:
      "Portfolio website to display the work of Scenographer & Fine Arts Professor, Dr Dalia Farah",
    tags: [
      "Website design",
      "Website development",
      "Essential SEO",
      "Blog",
      "Copywriting",
    ],
    imageUrl: "/case-studies/df-scenography/cover.png",
    projectUrl: "https://www.dalia-farah.com/",
  },
] as const;

export const testimonialsData = [
  {
    name: "M. Kamel",
    role: "CEO | Programmer's Elite School",
    imageUrl: "/client-1.jpg",
    text: "Levare helped us improve our branding & professional look. People respect & trust our brand much more and we can grow confidently and charge more.",
  },
  {
    name: "D. Farah",
    role: "Professor | WITS University",
    imageUrl: "/client-2.jpg",
    text: "I can't believe how much value I received when I asked them to make me a new portfolio website! Very easy to work with and great communication.",
  },
  {
    name: "A. Reda",
    role: "COO | Programmer's Elite School",
    imageUrl: "/client-3.jpg",
    text: "Not anyone can do the work that they do. Without them it would take us months to achieve a good result. Highly recommend if you are serious about your business.",
  },
];
