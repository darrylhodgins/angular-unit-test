import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class MockHttp {
	public get(url: string, options?: any): Observable<Response> {
		return null;
	}
}
