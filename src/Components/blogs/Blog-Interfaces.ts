export interface Blog {
	id: string;
	title: string;
	description: string;
	imageId: string;
	html?: string | undefined;
	image?: string;
	deletePosts(id: string): void;
	onAddBlog({}): void;
	isLoading(): any;
}

export interface BlogData {
	title?: string;
	description?: string;
	__html?: string | undefined;
	html: string;
	imageId?: string;
	id?: string;
}
