import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/courses";

class CourseService {

    getDetails(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    create(courseInfo){
        return axios.post(EMPLOYEE_API_BASE_URL, courseInfo);
    }

    getCourseById(id){
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + id);
    }

    update(courseInfo, id){
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + id, courseInfo);
    }

    delete(id){
        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + id);
    }
}

export default new CourseService()