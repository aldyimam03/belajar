import bcrypt from 'bcrypt';

// saltRounds digunakan untuk menentukan tingkat kompleksitas enkripsi
const saltRounds = 10;

// encript digunakan untuk mengenkripsi password
const encript = (password) => {
    return bcrypt.hashSync(password, saltRounds);
};
// compare digunakan untuk membandingkan password dengan hash
const compare = (password, hash) => {
    return bcrypt.compareSync(password, hash);
};

export { encript, compare };
