export interface Project {
  title: string;
  description: string;
  technologies: string[];
  preview_url: string;
  github_url?: string;
  image_url: string;
  order: number;
  id: string;
  created_date: string;
  updated_date: string;
  created_by: string;
  is_sample: boolean;
}
