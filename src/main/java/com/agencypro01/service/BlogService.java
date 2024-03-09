package com.agencypro01.service;

import com.agencypro01.domain.Article;
import com.agencypro01.dto.AddArticleRequest;
import com.agencypro01.repository.BlogRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

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
}