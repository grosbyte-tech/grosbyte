export type ProjectKey = "tailr" | "booksansar" | "dhune" | "sopdraft" | "setu";

export interface ProjectMeta {
  key: ProjectKey;
  image: string;
}

export const PROJECTS_MAP: Record<ProjectKey, ProjectMeta> = {
  tailr: {
    key: "tailr",
    image: "/images/projects/tailr.png",
  },
  booksansar: {
    key: "booksansar",
    image: "/images/projects/booksansar.png",
  },
  dhune: {
    key: "dhune",
    image: "/images/projects/dhune.png",
  },
  sopdraft: {
    key: "sopdraft",
    image: "/images/projects/sopdraft.png",
  },
  setu: {
    key: "setu",
    image: "/images/projects/setu.png",
  },
};

// 3 Staggered Columns with unique combinations
export const COLUMN1_KEYS: ProjectKey[] = ["tailr", "booksansar", "dhune"];
export const COLUMN2_KEYS: ProjectKey[] = ["dhune", "setu", "sopdraft", "tailr"];
export const COLUMN3_KEYS: ProjectKey[] = ["setu", "sopdraft", "booksansar"];
