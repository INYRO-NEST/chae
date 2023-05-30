import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import { JwtGuard } from "src/strategies/guards/jwt.guard";
import { ArticleService } from "./article.service";
import { User } from "src/decorators/user.decorator";

@Controller('articles')
export class ArticleController{
    constructor(private readonly articleService:ArticleService){}
    @UseGuards(JwtGuard) 
    @Post()

    async createArticle(@Body() body, @User() user){
        const title=body.title;
        const content=body.content;
        const userId=user.id; 

        const article = await this.articleService.createArticle(
            title,
            content,
            userId,
        );
        return article;
    }    
        

}