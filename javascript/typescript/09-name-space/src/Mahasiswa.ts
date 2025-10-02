namespace University {
  export class Mahasiswa {
    private _nama: string;
    private _nim: number;

    constructor(nama: string, nim: number) {
      this._nama = nama;
      this._nim = nim;
    }
    public get nama(): string {
      return this._nama;
    }
    public set nama(value: string) {
      this._nama = value;
    }

    public get nim(): number {
      return this._nim;
    }
    public set nim(value: number) {
      this._nim = value;
    }
  }
}
