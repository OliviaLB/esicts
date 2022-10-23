export interface Blog {
  id: string;
  title: string;
  description: string;
  imageId: string;
  html?: string | undefined;
  deletePosts(id: string): void;
  onAddBlog({}): void;
  isLoading(): any;
}
