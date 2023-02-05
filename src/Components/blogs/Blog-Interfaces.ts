export interface Blog {
	id: string;
	title: string;
	description: string;
	imageId: string;
	html?: string | undefined;
	deletePosts?(id: string, blogImageId: string): void;
	onAddBlog?({}): void;
	isLoading?(): any;
}

export interface BlogData {
	title?: string;
	description?: string;
	__html?: string | undefined;
	html: string | undefined;
	imageId: string;
	id?: string;
}
