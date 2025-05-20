import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, from, map, Observable, tap, throwError } from 'rxjs';

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  serviceCategory: string;
  specificService: string;
  message: string;
  submissionDate: string;
}

@Injectable({
  providedIn: 'root',
})
export class SheetsService {
  // Replace with your Google Apps Script Web App URL
  private sheetsApiUrl =
    'https://script.google.com/macros/s/AKfycbwG5TSUcUM17yZa8MEpOTlG3ixcCfmtCczZJx4U3gfjyYcdBP324JMd9588CqoQe9DznA/exec';

  constructor() {}

  submitFormData(formData: ContactFormData): Observable<any> {
    // Create URL encoded form data
    const formBody = new URLSearchParams();
    Object.entries(formData).forEach(([key, value]) => {
      formBody.append(key, value.toString());
    });

    const requestOptions = {
      method: 'POST',
      mode: 'no-cors' as RequestMode,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formBody.toString(),
    };

    console.log('Sending request with options:', requestOptions);

    return from(fetch(this.sheetsApiUrl, requestOptions)).pipe(
      tap((response) => {
        console.log('Received response:', response);
        // Log response details
        console.log('Response status:', response.status);
        console.log('Response type:', response.type);
        const headers: { [key: string]: string } = {};
        response.headers.forEach((value, key) => (headers[key] = value));
        console.log('Response headers:', headers);
      }),
      map((response) => {
        if (response.type === 'opaque') {
          // This is expected with no-cors mode
          console.log('Received opaque response (expected with no-cors)');
          return {
            success: true,
            message: 'Form submitted successfully',
          };
        }
        return response;
      }),
      catchError((error) => {
        console.error('Error in submission:', error);
        return throwError(
          () => new Error(`Failed to submit form: ${error.message}`)
        );
      })
    );
  }

  // Add a test connection method
  testConnection(): Observable<any> {
    console.log('Testing connection to:', this.sheetsApiUrl);

    return from(
      fetch(`${this.sheetsApiUrl}?test=true`, {
        method: 'GET',
        mode: 'no-cors',
      })
    ).pipe(
      tap((response) => {
        console.log('Test connection response:', response);
      }),
      map((response) => ({
        success: true,
        message: 'Connection test completed',
      })),
      catchError((error) => {
        console.error('Test connection failed:', error);
        return throwError(() => error);
      })
    );
  }
}
