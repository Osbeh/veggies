# veggies
koodihaaste

Front-end on toteutettu Reactilla
Back-end on toteutettu Node + Express + Mongoose combolla
Tietokantana toimii MongoDB

Datat on haettu Finelin API:n kautta. Admin pystyy lisäämään tietokantaan vihanneksia admin-lomakkeen kautta (ei käytössä herokussa)

Lokaali asennus: 

    npm run install-all
    npm start


Lokaalissa asennuksessa täytyy löytyä Mongo-palvelin joko lokaalisti tai pilvestä ja sieltä kanta "veggies" ja collection "vegs", joka sisältää server\data\vegs.json - datat. Myös tyhjä kanta käy, mutta silloin täytyy vihannekset lisätä admin-lomakkeen kautta manuaalisesti.

Serverin .env -tiedostoon tulee määritellä MONGODB_URI, jossa on Mongon connection string.





