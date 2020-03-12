export class Media
{
  id: string;
  fileUrl: string;
  description: string;
  author: string;
  likedCount: number;
  dislikedCount: number;
  comments: string[];
  title: string;
  constructor(fileUrl: string, title: string, description: string, author: string )
  {
        this.fileUrl = fileUrl;
        this.title = title;
        this.description = description;
        this.author = author;
        this.comments = [];
        this.likedCount = 0;
        this.dislikedCount = 0;
  }

}
