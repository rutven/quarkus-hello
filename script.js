import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
    // http.get('https://test.k6.io');
    http.get('http://localhost:8080/hello');
    // sleep(1);
}
