// readonly property

// readonly adalah property yang hanya bisa dibaca, tidak bisa diubah

class Lingkaran {
  readonly jariJari: number;

  constructor(jariJari: number) {
    this.jariJari = jariJari;
  }

  public hitungLuas(): number {
    return Math.PI * this.jariJari * this.jariJari;
  }
}

const lingkaran = new Lingkaran(5);
// lingkaran.jariJari = 10; // error karena readonly property tidak bisa diubah
console.log(lingkaran.hitungLuas());

// readonly pada interface
interface Persegi {
  sisi: number;
}
let persegi: Readonly<Persegi> = { sisi: 10 };
// persegi.sisi = 20; // error karena readonly property tidak bisa diubah
console.log(persegi.sisi);

// readonly untuk generics
type ReadonlyArray<T> = {
  readonly [K in keyof T]: T[K];
};

type Point = {
  x: number;
  y: number;
};

type ReadonlyPoint2D = ReadonlyArray<Point>;
let point2D: ReadonlyPoint2D = { x: 10, y: 20 };

// point2D.x = 20; // error karena readonly property tidak bisa diubah
console.log(point2D.x);
console.log(point2D.y);