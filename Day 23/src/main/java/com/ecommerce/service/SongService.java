package com.ecommerce.service;
import com.ecommerce.entity.Song;
import com.ecommerce.repository.SongRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.List;
import java.util.Optional;

@Service
public class SongService {
    @Autowired
    SongRepository songRepository;
    @Bean
    public RestTemplate restTemplate(){
        return new RestTemplate();
    }
    public List<Song> getAllSongs() {
        ResponseEntity<List<Song>> responseEntity = restTemplate().exchange("http://localhost:8088/songs", HttpMethod.GET, null, new ParameterizedTypeReference<List<Song>>() {});
        return responseEntity.getBody();
    }



    public ResponseEntity<Song> saveSong(Song song) {
        return new RestTemplate().postForEntity("http://localhost:8088/songs", song, Song.class);
    }
    public void deleteSong(Long id) {
        HashMap<String, Long> uriVariables = new HashMap<>();
        uriVariables.put("id", id);
        restTemplate().exchange("http://localhost:8088/songs/{id}", HttpMethod.DELETE, null, Song.class, uriVariables);
    }
//    public Song updateProduct(Long id, Song product) {
//        String microserviceUrl = "http://localhost:8088/songs/editProduct/" + id;
//
//        HttpHeaders headers = new HttpHeaders();
//        headers.setContentType(MediaType.APPLICATION_JSON);
//        HttpEntity<Song> requestEntity = new HttpEntity<>(product, headers);
//
//        ResponseEntity<Song> responseEntity = restTemplate().exchange(
//                microserviceUrl,
//                HttpMethod.PUT,
//                requestEntity,
//                Song.class
//        );
//
//        return responseEntity.getBody();
//    }
    public Optional<Song> getSongById(Long id) {
        return songRepository.findById(id);
    }

//    public Song saveSong(Song song) {
//        return saveSong(song);
//    }
}