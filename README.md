# Test

<h4>Untuk menjalankan backend</h4>

- pastikan sudah terinstall Node.js

- buat database baru

- buka file ``Database.js`` yang berada di ``backend/config/``

- sesuaikan dengan environment anda
``const db = new Sequelize('nama_database', 'user_db', 'password_db', {
    host: 'localhost',
    dialect: 'mysql'
});``

- jalankan terminal / console / command promp ``cd [project_dir]\backend``

- jalankan ``npm install``

- jalankan backend ``nodemon index``

<h4>Untuk menjalankan frontned</h4>

- pastikan sudah terinstall Node.js

- jalankan terminal / console / command promp ``cd [project_dir]\frontend``

- jalankan ``npm install``

- jalankan backend ``npm start``
