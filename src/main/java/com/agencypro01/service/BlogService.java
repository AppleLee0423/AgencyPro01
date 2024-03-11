package com.agencypro01.service;

import com.agencypro01.domain.Article;
import com.agencypro01.dto.AddArticleRequest;
import com.agencypro01.dto.UpdateArticleRequest;
import com.agencypro01.repository.BlogRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@RequiredArgsConstructor
@Service
public class BlogService {

    private final BlogRepository blogRepository;

    //글 등록
    public Article save(AddArticleRequest request) {
        return blogRepository.save(request.toEntity());
    }

    //글 조회
    public List<Article> findAll() {
        return blogRepository.findAll();
    }

    //글 상세 조회
    public Article findById(long id) {
        return blogRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("not found: " + id));
    }

    //글 삭제
    public void delete(long id){
        blogRepository.deleteById(id);;
    }

    //글 수정
    @Transactional
    public Article update(long id, UpdateArticleRequest request) {
        Article article = blogRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("not fount: " + id));

        article.update(request.getTitle(), request.getContent());

        return article;
    }
}