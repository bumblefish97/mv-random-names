//
//
//Game_Battler: rpg_objects.js, 2833
//Game_Enemy: rpg_objects.js, 4251
//
//how to override methods? Can probably override initialize
//ANSWER: http://stackoverflow.com/questions/296667/overriding-a-javascript-function-while-referencing-the-original
//
//Line 4262:
//Game_Enemy.prototype.initialize = function(enemyId, x, y) {
//    Game_Battler.prototype.initialize.call(this);
//    this.setup(enemyId, x, y);
//};
//
//Allow player to set multiple lists for a unit, with names, and say how to use them? EG. firstname, surname, nameformat:firstname lastname?
//
/*:
 * @plugindesc Allows actors and enemies to randomly pick a name from user-defined sets.
 * @author Feldherren
 *
 * @param Separator Character
 * @desc Separator character to use in name lists
 * @default ,
 *
 * @param list1
 * @desc First list of names that can easily be used for multiple units; default list is male names. Uses separator defined above.
 * @default Abel,Abelard,Abraham,Addison,Alaire,Albin,Aldebrand,Aldous,Aleyn,Alistair,Ancelot,Anselm,Aran,Arnald,Arnott,Arthur,Augustine,Aylmer,Baderon,Baldric,Bardolf,Bartholomew,Bayard,Belmont,Benedict,Beneger,Bernard,Berndan,Bertram,Bertrand,Blackburn,Blavier,Bouchard,Boyle,Bran,Brice,Brien,Bruce,Bryce,Cain,Cameron,Caplan,Carmine,Caspar,Ceadda,Chamberlain,Charlys,Chartain,Claudien,Clifton,Clive,Cole,Colson,Conphas,Cornell,Coster,Cutbert,Cuthbert,Cyriac,Daimbert,Dalmas,Danyell,Dauid,Davyd,Dawson,Deitrich,Denston,Derwin,Deryk,Donner,Drake,Drew,Drystan,Eadbert,Ealdwine,Edmund,Edwyn,Eldred,Eleazar,Emanuel,Emerick,Erasmus,Erik,Esmond,Esmour,Esperaunce,Etgar,Ethelbert,Ethelred,Eustace,Fawkes,Fiebras,Flambard,Folke,Foxe,Francis,Frederick,Frederyk,Fulke,Galfrid,Ganelon,Gared,Gauwyn,Gembert,Geoffrey,Gerald,Gerbold,Gerhardt,Gerland,Goddard,Godebert,Godfrey,Gregory,Grimbald,Gryffen,Guston,Gwayne,Gylbart,Gyles,Habreham,Hadrian,Haimirich,Halstein,Hamon,Heinlein,Hewrey,Humphrey,Ingham,Ingram,Isleton,Ivan,Jakys,Jeger,Jenlyns,Johannes,Jonathas,Joseph,Josaias,Joyce,Kain,Kennard,Kenrick,Kerrich,Khellus,Kimball,Kinnison,Kurtz,Ladislas,Lambert,Lars,Laurence,Laurentius,Leavold,Lefwyne,Leopold,Littlejohn,Lloyd,Lodwycke,Lowell,Madison,Mainfroi,Mansel,Mathye,Morgant,Morys,Myles,Nathaniel,Navarre,Neale,Noes,Norman,Olyver,Orrick,Orwen,Osric,Owyne,Parnell,Patrick,Paul,Percival,Peter,Philippe,Piers,Podie,Radcliffe,Radolf,Raffe,Randall,Randwulf,Rauffe,Raulin,Redwald,Reeve,Reginald,Reinholdt,Reynard,Reyner,Reynfred,Ricard,Richarde,Rickeman,Ridel,Robert,Robyn,Roger,Rolfe,Ronald,Roundelph,Rowland,Samson,Sandre,Sevrin,Sighard,Sigurdh,Simond,Singleton,Solyeuse,Spenser,Stewart,Swift,Symon,Symond,Taran,Taylor,Templeton,Theodore,Thomas,Thrydwulf,Timothy,Tristan,Turstin,Ulric,Valentyne,Vannes,Victor,Voyce,Vyncent,Wadard,Walter,Warin,Wauter,Werner,Wilfred,Wilham,Willielmus,Wineburg,Wolfstan,Wymon,Wymond,Wystan,Ywain,Zacheus,Zell,Zerig
 *
 * @param list2
 * @desc Second list of names that can easily be used for multiple units; default list is female names. Uses separator defined above.
 * @default Adela,Adelaide,Admiranda,Aeditha,Aelina,Agnys,Alainne,Alianore,Alison,Alyme,Alys,Amelia,Amice,Amphelice,Angelet,Anna,Annabel,Anne,Anthoinette,Anys,Arabella,Arlette,Atilda,Aubrey,Audrye,Ava,Avelin,Avelyn,Averil,Ayleth,Baterich,Bathsua,Beatrix,Bellinda,Bertana,Berte,Bess,Brangwine,Braya,Brunhild,Bryde,Caesaria,Carmen,Casandra,Cecilia,Cecily,Celeste,Celestine,Celestria,Cenota,Chloe,Christabel,Cicely,Clarimond,Claudia,Clemence,Collys,Concessa,Constance,Cornelia,Crestian,Cristiana,Cwengyth,Cyndra,Crnewyn,Damaris,Dametta,Decima,Deloys,Denys,Diamanda,Dionisia,Dominy,Dorcas,Dorothe,Durilda,Dyana,Edelinne,Edithe,Eilonwy,Elaisse,Ele,Eleanor,Elewys,Ellerete,Ellie,Elsebee,Elyn,Elynor,Elyzabeth,Emblyn,Emeline,Emeny,Emeria,Emery,Emilie,Emlinie,Emmet,Eschina,Eschiva,Esdeline,Esmenet,Estienne,Estrild,Ethelia,Eugenia,Eustacia,Eva,Evelyn,Felice,Florens,Frances,Francisca,Fridgia,Gaynor,Germainne,Gethrude,Gillian,Giselle,Glenda,Gloriana,Guinevere,Gylda,Helena,Helenor,Helvynya,Hester,Hilda,Hildegard,Hilith,Imedia,Isabella,Isemeine,Isolde,Jaane,Jacquette,Jeanne,Jellion,Jemime,Jenet,Jenyfer,Jessamine,Jillian,Jocea,Jocelyn,Joleicia,Jolline,Josephine,Josian,Josiane,Joyse,Judithe,Judye,Juliana,Julyan,June,Justina,Katelyn,Kath,Katherine,Katrine,Kinborow,Latisha,Lauda,Leofwen,Leofwynn,Letita,Lettice,Linette,Linyeve,Lora,Maddeline,Maerwyn,Maisenta,Malin,Margarete,Margry,Maria,Maronne,Marsilia,Martine,Mathild,Melodie,Melusine,Meredithe,Merewyn,Merilda,Meryell,Millicent,Minerva,Mirabelle,Morgayne,Muriel,Murienne,Mydrede,Nesta,Nicholina,Nicia,Nicolaa,Olyffe,Ophellia,Ottilia,Paige,Parnella,Pelinne,Penelope,Petronilla,Placencia,Pridence,Pulmia,Purnell,Rebeccah,Rianna,Richenda,Rosa,Rosalind,Rosamund,Rose,Roysia,Rychyld,Samantha,Sanche,Sarra,Scarlet,Selphina,Sence,Serendipity,Somerhild,Sreda,Sybell,Sylphie,Syndony,Sysley,Systeleley,Tansa,Temperance,Theda,Theresa,Thomasine,Thomasyn,Thora,Tiphina,Tristana,Ursula,Vrsela,Wenyld,Willmott,Wulfhilda,Wynefreede,Yedythe,Ysabel,Ysmeina
 *
 * @param list3
 * @desc Third list of names that can easily be used for multiple units; default list is monster names. Uses separator defined above.
 * @default Achaios,Acis,Adonis,Aegipan,Aigis,Aigyptos,Aiolides,Aion,Aisa,Aisakos,Aithilla,Aithon,Aitne,Akakos,Alkmene,Ampelos,Anaxibia,Anius,Antigone,Apemosyne,Archedios,Argo,Arkeisios,Askalabos,Atropos,Atys,Augeias,Auson,Bacchus,Bakis,Belos,Berekyntia,Bormos,Bromios,Brontes,Bukolos,Camers,Carna,Catillus,Charis,Chesias,Chryses,Cybele,Damia,Danae,Dardanos,Deianeira,Deidameia,Deimachos,Deimos,Dekelos,Delphos,Derkynos,Dodona,Dryope,Dwyvaer,Dysaules,Echetlos,Echo,Eidothea,Elatus,Elpenor,Enipeus,Epigonoi,Epione,Erato,Erebos,Euadne,Euchenor,Euenos,Eunomos,Eupalamos,Euphorbos,Europe,Fames,Fauna,Galateia,Galeos,Glauke,Grups,Gyes,Gygas,Halia,Halisera,Helias,Helios,Hemithea,Hepaklos,Herkyna,Hippotes,Hopladamos,Huaina,Hylas,Iamos,Ianthe,Ilos,Inferi,Inuus,Iobes,Iphis,Irae,Irus,Ischys,Isyrion,Janus,Jupiter,Justitia,Kampe,Kapys,Kaukon,Kaunos,Kelmis,Kephalos,Kilix,Klaros,Kleobis,Kranaos,Kyknos,Kyzikos,Laios,Lampetos,Laodameia,Laodike,Lapithes,Latinos,Latona,Lausus,Laverna,Leimone,Leipephile,Leuke,Leukippe,Leukon,Linos,Lityerses,Llawran,Lykeios,Lykomedes,Lykophron,Lykurgos,Lynkos,Lysippe,Machaon,Maiandros,Makaria,Mars,Mavors,Megareus,Melaineus,Melampus,Memphis,Menestheus,Merops,Mestor,Metaneira,Metis,Metope,Minos,Minyas,Misericordia,Mnestra,Molossos,Morpheus,Mulciber,Musa,Mykenai,Myrine,Myrto,Nausithos,Nautes,Neaira,Neilos,Nemea,Nessos,Nireus,Nomios,Nyx,Ogaphos,Ogygos,Oiax,Oibalos,Oinomaos,Ophis,Orthaia,Oxylos,Pallene,Pasiphae,Pedasos,Peirene,Pelias,Penates,Penia,Penthesileia,Peripanos,Persephone,Perseus,Phobos,Phrasios,Phrixos,Phthonos,Pieria,Pisos,Pitane,Pittheus,Poine,Polybos,Polydamna,Polykaon,Polyxo,Prokne,Prokris,Proteus,Prothoos,Remnus,Rhadamanthys,Rhadine,Rhakios,Rhea,Salamis,Salios,Satyros,Semele,Sibyl,Sikyon,Silvanus,Sinope,Sisyphos,Sithon,Sol,Sybaris,Syme,Talaos,Tantalos,Tatius,Telephassa,Tenes,Teukros,Thaeox,Thamyris,Thelxion,Theophane,Thespis,Thoas,Thyia,Tyche,Typhon,Uranos,Vesta,Zephyrus
 * 
 * @help This plugin does not provide plugin commands.

 Notebox tags:
 <name_list:list>
 Defines an actor or enemy as using the named list of random names, 
 for easy definition of commonly-used name lists. The lists 'list1',
 'list2' and 'list3' are set up as parameters by default.

 <random_names:name,othername,anothername,etcetera>
 Defines a list of names for an actor or enemy to randomly be 
 initialised with, in the notebox. Uses the separator set in 
 plugin parameters.
 */ 
(function() {
 var parameters = PluginManager.parameters('RandomNames');

 var _Game_Actor_setup = Game_Actor.prototype.setup;
 Game_Actor.prototype.setup = function(actorId) {
 	_Game_Actor_setup.call(this, actorId);
 	// read and switch names here
 	var actor = $dataActors[actorId];
 	if (actor.meta.name_list)
 	{
 		name_set = parameters[actor.meta.name_list].split(parameters['Separator Character']);
 	}
 	else if (actor.meta.random_names)
 	{
 		name_set = actor.meta.random_names.split(parameters['Separator Character']);
 	}
 	else
 	{
 		name_set = [actor.name];
 	}
 	var choice = Math.random();
 	choice *= name_set.length;
 	choice = Math.floor(choice);
 	this.setName(name_set[choice]);
 };

})();