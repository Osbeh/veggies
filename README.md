# veggies
koodihaaste

Haaste on toteutettu tajunnanvirtana ilman suurempaa suunnitelmaa alussa. Testattu toimivaksi Windows-koneella Firefoxilla ja Chromella.
Jatkokehitysideoita olisi vielä paljon, mutta aika on rajallista.

Front-end on toteutettu Reactilla
Back-end on toteutettu Node + Express + Mongoose combolla
Tietokantana toimii MongoDB - Itsellä käytössä lähinnä Atlas Herokua varten, mutta myös lokaalia pyöritetty alkuvaiheessa.

Main-branch sisältää lokaalissa toimivan kehitysversion ja heroku-branch on deployattu Herokuun.

Datat on haettu Finelin API:n kautta. Admin pystyy lisäämään tietokantaan vihanneksia admin-lomakkeen kautta syöttämällä Fineli ID:n ja vihannestyypin (hedelmä, vihannes, juures). Admin-lomake on poistettu käytöstä Herokusta.

Lokaali asennus: 

    npm run install-all
    npm start


Lokaalissa asennuksessa täytyy löytyä Mongo-palvelin joko lokaalisti tai pilvestä ja sieltä kanta "veggies" ja collection "vegs", joka sisältää server\data\vegs.json - datat. Myös tyhjä kanta käy, mutta silloin täytyy vihannekset lisätä admin-lomakkeen kautta manuaalisesti.

Serverin .env -tiedostoon tulee määritellä MONGODB_URI, jossa on Mongon connection string.





