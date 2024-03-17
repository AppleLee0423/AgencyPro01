package com.agencypro01.controller;

import com.agencypro01.domain.Article;
import com.agencypro01.dto.*;
import com.agencypro01.service.BlogService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/articles")
public class BlogApiController {

    private final BlogService blogService;

    //글 조회
    @GetMapping
    public ResponseEntity<List<ArticleListViewResponse>> findAllArticles() {
        List<ArticleListViewResponse> articles = blogService.findAll()
                .stream()
                .map(ArticleListViewResponse::new)
                .toList();

        return ResponseEntity.ok()
                .body(articles);
    }

    //글 상세조회
    @GetMapping("/{id}")
    public ResponseEntity<ArticleViewResponse> findArticle(@PathVariable long id) {
        Article article = blogService.findById(id);
        ArticleViewResponse response = new ArticleViewResponse(article);
        return ResponseEntity.ok()
                .body(response);
    }

    //글 등록페이지로
    @GetMapping("/new")
    public ResponseEntity<ArticleViewResponse> newArticle(@RequestParam(required = false) Long id) {
        if(id == null) {
            ArticleViewResponse response = new ArticleViewResponse();
            return ResponseEntity.ok()
                    .body(response);
        } else {
            Article article = blogService.findById(id);
            if(article != null){
                ArticleViewResponse response = new ArticleViewResponse(article);
                return ResponseEntity.ok()
                        .body(response);
            } else {
                return ResponseEntity.notFound().build();
            }
        }
    }

    //글 등록
    @PostMapping
    public ResponseEntity<Article> addArticle(@RequestBody AddArticleRequest request) {
        Article savedArticle = blogService.save(request);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(savedArticle);
    }

    //글 삭제
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteArticle(@PathVariable long id) {
        blogService.delete(id);
        return ResponseEntity.ok()
                .build();
    }

    //글 수정
    @PutMapping("/{id}")
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