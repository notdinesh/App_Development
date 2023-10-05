package com.ecommerce.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;


import com.ecommerce.entity.CourseInfo;
import com.ecommerce.entity.UserInfo;
import com.ecommerce.service.UserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
@RestController
@RequestMapping("/api/userinfos")
public class UserAdminController {
	@Autowired
	UserService userService;

	@PostMapping
	public ResponseEntity<UserInfo> create(final @RequestBody UserInfo userI){
		UserInfo createuser = userService.create(userI);
		return ResponseEntity.ok(createuser);
	}
	
	//Get User
	@Operation(summary = "Get an userinfo with given email")
	@ApiResponses(value = {@ApiResponse(responseCode = "200",description = "User Details Retrieved Successfully"),
			               @ApiResponse(responseCode = "401",description = "Invalid User Details"),
			               @ApiResponse(responseCode = "404",description = "UserInfo not found")
	                      })
	@GetMapping(value = "/{email}",produces = "application/json")
	public ResponseEntity<Optional<UserInfo>> read(final @PathVariable String email){
		Optional<UserInfo> getuser = userService.read(email);
		return ResponseEntity.ok(getuser);
	}
	@GetMapping()
	public List<UserInfo> getDetails()
	{
		return userService.getDetails();
	}
	//delete
	  @Operation(summary = "Deletes a  course BY GIVEN ID")
	  @ApiResponses(value = {@ApiResponse(responseCode = "201",description = "course deleted successfully"),
	       @ApiResponse(responseCode = "401" , description = "Invalid credentials"),
	         @ApiResponse(responseCode = "404" , description = "course not  found")
	  })
	  @ResponseStatus(HttpStatus.OK)
	  @DeleteMapping("/{id}")
	  public void  delete (final @PathVariable("id") Long id)
	  {
	    userService.delete(id);
	  }
}
