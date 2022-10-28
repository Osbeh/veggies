# veggies
koodihaaste

Front-end on toteutettu Reactilla
Back-end on toteutettu Node + Express + Mongoose combolla
Tietokantana toimii MongoDB

Datat on haettu Finelin API:n kautta. Admin pystyy lisäämään tietokantaan vihanneksia admin-lomakkeen kautta (ei käytössä herokussa)

Lokaali asennus: 

Lokaalissa asennuksessa täytyy löytyä Mongo-palvelin ja sieltä kanta "veggies" ja collection "vegs", joka sisältää server\data\vegs.json - datat.
Serverin .env -tiedostoon tulee määritellä MONGODB_URI, jossa on Mongon connection string.

cd client
npm install

cd server
npm install

npm start


