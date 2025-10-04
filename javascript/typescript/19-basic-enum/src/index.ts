// enum adalah sebuah tipe data yang berisi kumpulan nilai konstan
// enum digunakan untuk membuat kode lebih mudah dibaca dan dipahami
// enum juga digunakan untuk membatasi nilai yang bisa diterima oleh sebuah variabel
// enum digunakan untuk membuat kode lebih mudah dibaca dan dipahami
// enum digunakan untuk membatasi nilai yang bisa diterima oleh sebuah variabel

// enum ada 2 yaitu numeric enum dan string enum

// numeric enum

enum Color {
  Red, // 0
  Green, // 1
  Blue, // 2
}

console.log(Color); // { '0': 'Red', '1': 'Green', '2': 'Blue', Red: 0, Green: 1, Blue: 2 }

let color: Color = Color.Red;
console.log(color); // 0

// enum incremental
enum Status {
  Active = 5, // 5
  Inactive, // 6
  Pending, // 7
}

console.log(Status); // { '5': 'Active', '6': 'Inactive', '7': 'Pending', Active: 5, Inactive: 6, Pending: 7 }

enum StatusCode {
  OK = 200, // 200
  BadRequest = 400, // 400
  NotFound = 404, // 404
  InternalServerError = 500, // 500
}

console.log(StatusCode); // { '200': 'OK', '400': 'BadRequest', '404': 'NotFound', '500': 'InternalServerError', OK: 200, BadRequest: 400, NotFound: 404, InternalServerError: 500 }

// string enum
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

console.log(Direction); // { Up: 'UP', Down: 'DOWN', Left: 'LEFT', Right: 'RIGHT' }
let direction: Direction = Direction.Up;
console.log(direction); // UP

enum Response {
  Success = "SUCCESS",
  Error = "ERROR",
  NotFound = "NOT_FOUND",
}

function getResponseMessage(question: string, response: Response): void {
  console.log(question, response);
}


getResponseMessage("Do you like TypeScript?", Response.Success); // Do you like TypeScript? SUCCESS
getResponseMessage("Do you like TypeScript?", Response.Error); // Do you like TypeScript? ERROR

