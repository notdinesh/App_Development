package com.example.demo.Repository;
import com.example.demo.Entity.Song;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SongRepository extends JpaRepository<Song, Long> {
    // You can add custom query methods here if needed
}