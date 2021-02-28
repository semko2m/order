import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private REST_API_SERVER = 'http://localhost:1337/';


  constructor(private httpClient: HttpClient) {
  }

  public getOrders(email): any {
    const postData = {
      email,
    };
    return this.httpClient.post(this.REST_API_SERVER + 'orders/', postData);
  }

  public getOrder(id): any {
    const postData = {
      id,
    };
    return this.httpClient.post(this.REST_API_SERVER + 'order/', postData);
  }
}
