package com.agencypro01.controller;

import com.agencypro01.domain.Article;
import com.agencypro01.dto.*;
import com.agencypro01.service.BlogService;
import lombok.RequiredArgsConstructor;
import org.apache.coyote.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
public class BlogApiController {

    private final BlogService blogService;

    //글 조회
    @GetMapping("/api/articles")
    public ResponseEntity<List<ArticleListViewResponse>> findAllArticles() {
        List<ArticleListViewResponse> articles = blogService.findAll()
                .stream()
                .map(ArticleListViewResponse::new)
                .toList();

        return ResponseEntity.ok()
                .body(articles);
    }

    //글 상세조회
    @GetMapping("/api/articles/{id}")
    public ResponseEntity<ArticleViewResponse> findArticle(@PathVariable long id) {
        Article article = blogService.findById(id);
        ArticleViewResponse response = new ArticleViewResponse(article);
        return ResponseEntity.ok()
                .body(response);
    }


    //글 등록
    @PostMapping("/api/articles")
    public ResponseEntity<Article> addArticle(@RequestBody AddArticleRequest request) {
        Article savedArticle = blogService.save(request);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(savedArticle);
    }

    //글 삭제
    @DeleteMapping("/api/articles/{id}")
    public ResponseEntity<Void> deleteArticle(@PathVariable long id) {
        blogService.delete(id);
        return ResponseEntity.ok()
                .build();
    }

    //글 수정
    @PutMapping("/api/articles/{id}")
    public ResponseEntity<Article> updateArticle(@PathVariable long id, @RequestBody UpdateArticleRequest request) {
        Article updatedArticle = blogService.update(id, request);
        return ResponseEntity.ok()
                .body(updatedArticle);
    }

    //테스트
    @GetMapping("/api/test")
    public String test() {
        return "나는 이충주다";
    }
}