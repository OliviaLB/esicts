export interface Blog {
	id?: string;
	title: string;
	description: string;
	imageId: string;
	html?: string;
	createdDate?: Date;
	updatedDate?: Date;
	deletePosts?(id: string, blogImageId: string): void;
	onAddBlog?({}): void;
	isLoading?(): any;
}
