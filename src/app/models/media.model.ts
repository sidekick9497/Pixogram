export class Media
{
  id: string;
  imageUrl: string;
  description: string;
  author: string;
  likes: number;
  comments: string[];
  title: string;
  constructor(imageUrl: string, title: string, description: string, author: string )
  {
        this.imageUrl = imageUrl;
        this.title = title;
        this.description = description;
        this.author = author;
        this.comments = [];
        this.likes = 0;
  }

}
