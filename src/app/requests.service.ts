import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

@Injectable()
export class RequestsService {
	apiUrl = 'https://test-api-nebula.recaudia.com';

	constructor(private http: Http) { }

	public login(){
		const loginData = { "authentication": { "username": "admin", "password": "12345" } }
	
		this.http
		    .post(this.apiUrl + '/user/authentication', loginData) 
		    .subscribe ((data: Response) => console.log(data));
	}

	public createToken(){
		console.log('createToken')

		const createTokenData = { "token": { "merchant_id": "unete" } }
		
		let headers = new Headers({
			'Accept': 'application/json',
			'Authorization':'Basic YVRianlLU0xjY09oZDR3STVpOm4wZjRHS2RMV2Z6b1owU0hSSg=='
		});  
		let options = new RequestOptions({headers: headers, method:"POST"});

		console.log(headers);
		return this.http
		    .post(this.apiUrl + '/access-token/create', createTokenData, options) 
		    .subscribe ((data: Response) => {
		    	console.log(data)
		    });
	}
}
