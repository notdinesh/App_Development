package com.example.db.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.db.model.*;
import com.example.db.repository.*;
import com.example.db.service.*;

@RestController
@RequestMapping("/")
public class Controller {
	@Autowired

    @GetMapping("/user")
    public List getUser() {
        return Service.getUser();
    }

}