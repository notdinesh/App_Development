package com.example.demo.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Song {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String songName;
    private String artistName;
    private String songGenre;
    private int songDuration;
    
    


	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getSongName() {
		return songName;
	}

	public void setSongName(String songName) {
		this.songName = songName;
	}

	public String getArtistName() {
		return artistName;
	}

	public void setArtistName(String artistName) {
		this.artistName = artistName;
	}

	public String getSongGenre() {
		return songGenre;
	}

	public void setSongGenre(String songGenre) {
		this.songGenre = songGenre;
	}

	public int getSongDuration() {
		return songDuration;
	}



	public void setSongDuration(int songDuration) {
		this.songDuration = songDuration;
	}



	public Song(Long id, String songName, String artistName, String songGenre, int songDuration) {
		super();
		this.id = id;
		this.songName = songName;
		this.artistName = artistName;
		this.songGenre = songGenre;
		this.songDuration = songDuration;
	}
    
    

	public Song() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Song getBody() {
		return null;
	}
}
