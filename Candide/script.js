    function scrollLoose() {
	   window.scrollBy(0, -50);
	}

	function scrollWin() {
	   window.scrollBy(0, 50);
	}

	var Esri_WorldImagery = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
	});
	//couche Esri_WorldImageryy

	var Esri_WorldGrayCanvas = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
	maxZoom: 16
	});
	//Couche Esri_WorldGrayCanvas

	var map = L.map('map', {
		center: [45.225556, 6.78277], //comme l'histoire débute en Westphalie, les coordonnées de Cologne restent pertinentes
	    zoom: 4,
		maxZoom: 14,
		minZoom: 3,
		layers : [Esri_WorldGrayCanvas]
	});
    //Fond de carte lors du démarrage

	var postes = [
	[51.225556, 6.78277], [42.697222, 23.316667], [33.512199, 36.298378],
	[52.383333, 4.9], [38.71, -9.14]
	];
    //Coordonnées des postes pour lesquels on souhaite placer une icone

	var pointA = new L.LatLng(51.225556, 6.78277);
	var pointB = new L.LatLng(42.697222, 23.316667);
	var pointC = new L.LatLng(33.512199, 36.298378);
	var pointD = new L.LatLng(52.383333, 4.9);
	var pointE = new L.LatLng(38.71, -9.14);
	
    var pointList = [pointA, pointB, pointC, pointD, pointE]

    var firstpolyline = new L.Polyline(pointList, {
        color: 'red',
        weight: 3,
        opacity: 1,
        smoothFactor: 1

    });
    firstpolyline.addTo(map);
    //Code pour créer une polyligne entre 2 points géographiques

    var infos = [
    "<span class='sous-titre'><b>Château de Vestphalie</span></b><br /><p>Défavorable, le château est un espace féodal dont il ne faut pas transgresser l’ordre, Candide le fait et est expulser. Lorsque Pangloss transgresse l’ordre, il le fait en dehors du château et n’est donc pas sanctionner.</p>",
    "<span class='sous-titre'><b>Valdberghoff-trarbk-dikdorff</span></b><br /><p>Défavorable car il se fait engager dans l’armée bulgare et cela va lui valoir 4000 coup de baguette.</p>",
    "<span class='sous-titre'><b>Terrain en guerre</span></b><br /><p>Candide ne fait que traverser les villages détruits par les Bulgares et les Abares.</p>",
    "<span class='sous-titre'><b>Hollande</span></b><br /><p>Ce lieu est défavorable à Candide car il manque de nourriture et se fait insulter et arroser par un orateur. Mais il lui est favorable car il retrouve Pangloss et rencontre Jacques.</p>",
    "<span class='sous-titre'><b>Port/Ville de Lisbonne</span></b><br /><p>Ce lieu est défavorable car Candide essuie un naufrage et Jacques se noie. Ce lieu est défavorable car il s’y produit un tremblement de terre et on y sacrifie Pangloss et Candide tue Don Issachar et le Grand Inquisiteur. Mais il est favorable aussi car Candide y retrouve Cunéguonde.</p>"
    ];
    //Attacher une infobulle à une icone

    for (var i=0; i < postes.length; i++) {
       var poste = new L.Marker(postes[i], {
        icon: L.icon({
            iconUrl: 'icons/icon-poste-'+(i+1)+'.png',
            iconSize: [20, 20], iconAnchor: [10, 10]
        })
    });
    poste.bindPopup(infos[i]); //ajoute une info-bulle (popup)
    poste.on("mouseover", function() {
        document.getElementById("texte_annexe").innerHTML = this._popup.getContent();
    });
    poste.on("mouseout", function() {
        document.getElementById("texte_annexe").innerHTML = texte_info;
    });
    poste.addTo(map); //ajoute le marqueur à la carte... puis la boucle redémarre
    }
    //Code complémentaires aux coordonnées pour donner suite à tous les postes + insértion d'info séparée par infobulle

    var baseMaps = { //variable qui stocke la liste des différents fonds de carte
      "Satellite": Esri_WorldImagery,
      "Politique": Esri_WorldGrayCanvas
  };
    L.control.layers(baseMaps, {}).addTo(map); //fonction qui ajoute le sélecteur à la carte

    function centrer() {
        map.setView(new L.LatLng(45.225556, 6.78277), 4);
    }
	//Centrer sur la carte aux coordonnées indiquées

    function centrer_sur(x, y) { //la fonction marche avec n'importe quelle paire de coordonnées x et y.
        map.setView(new L.LatLng(x, y),5); //4 est le niveau de zoom
    }

    L.control.scale({
        position:'bottomright',
        metric: true,
        imperial: false
    }).addTo(map);


    $(function() {
     $.scrolline({
        direction : 'vertical',
        position : 'left',
        backColor : 'salmon',
        frontColor : 'seagreen',
        weight : 8
    });
 });