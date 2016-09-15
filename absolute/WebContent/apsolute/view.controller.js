sap.ui.controller("apsolute.view", {
	onInit: function() {
		//Create a layout instance
		oLayout = new sap.ui.commons.layout.AbsoluteLayout({width: "100%", height: "100%"});
		this.parentClicks = 0;
		this.childClicks = 0;
		this.cessValue = 50;
		this.initialItem();
	},

	//First Item on the view
	initialItem: function(){
		//Set the beach image, descriptions, ...
		var Tile= new sap.m.Button({
			id:"Tile1",
			text:"TEXT",
			press:[this.childItem,this]
		});
		oLayout.addContent(Tile, {left:"600px"});
		oLayout.placeAt("content");
	},

	//All sub childs
	childItem: function(oEvent){
		debugger;
		var pos = 4;
		var ids = oEvent.oSource.getId();
		if(ids == "Tile1"){
			if(ids == "Tile1" && this.parentClicks == 0){
				var topofParent = oEvent.oSource.getParent().mProperties.top;
				var leftofParent = oEvent.oSource.getParent().mProperties.left;
				var topArr = topofParent.split('p');
				var leftArr = leftofParent.split('p');
				var parsedLeft = parseInt(leftArr[0]);
				if(topArr[0]!= ""){
					var parsedTop = parseInt(topArr[0]);
				}else{
					parsedTop = topArr[0];
				}
				var newTop = parsedTop + 100;
//				var newLeft = leftArr[0]/pos;
//				newLeft = newLeft + 50;
				var newLeft = parsedLeft - 300;
				var childTile = new sap.m.Button({text:"Tile", press:[this.childItem,this]});
				oLayout.addContent(childTile, {top:newTop+"px", left:newLeft+"px"});
				this.parentClicks++;
			}
			else if(ids == "Tile1" && this.parentClicks == 1){
				var topofParent = oEvent.oSource.getParent().mProperties.top;
				var leftofParent = oEvent.oSource.getParent().mProperties.left;
				var topArr = topofParent.split('p');
				var leftArr = leftofParent.split('p');
				var parsedLeft = parseInt(leftArr[0]);
				if(topArr[0]!= ""){
					var parsedTop = parseInt(topArr[0]);
				}else{
					parsedTop = topArr[0];
				}
				var newTop = parsedTop + 100;
//				var newLeft = leftArr[0]/(pos-2);
//				newLeft = newLeft + 50;
				var newLeft = parsedLeft - 50;
				var childTile = new sap.m.Button({text:"Tile", press:[this.childItem,this]});
				oLayout.addContent(childTile, {top:newTop+"px", left:newLeft+"px"});
				this.parentClicks++;
			}
			else if(ids == "Tile1" && this.parentClicks == 2){
				var topofParent = oEvent.oSource.getParent().mProperties.top;
				var leftofParent = oEvent.oSource.getParent().mProperties.left;
				var topArr = topofParent.split('p');
				var leftArr = leftofParent.split('p');
				var parsedLeft = parseInt(leftArr[0]);
				if(topArr[0]!= ""){
					var parsedTop = parseInt(topArr[0]);
				}else{
					parsedTop = topArr[0];
				}
				var newTop = parsedTop + 100;
//				var newLeft = (leftArr[0]/pos)+parsedLeft;
//				newLeft = newLeft + 50;
				var newLeft = parsedLeft + 100;
				var childTile = new sap.m.Button({text:"Tile", press:[this.childItem,this]});
				oLayout.addContent(childTile, {top:newTop+"px", left:newLeft+"px"});
				this.parentClicks++;
			}
			else if(ids == "Tile1" && this.parentClicks == 3){
				var topofParent = oEvent.oSource.getParent().mProperties.top;
				var leftofParent = oEvent.oSource.getParent().mProperties.left;
				var topArr = topofParent.split('p');
				var leftArr = leftofParent.split('p');
				var parsedLeft = parseInt(leftArr[0]);
				if(topArr[0]!= ""){
					var parsedTop = parseInt(topArr[0]);
				}else{
					parsedTop = topArr[0];
				}
				var newTop = parsedTop + 100;
//				var newLeft = (leftArr[0]/(pos-2))+parsedLeft;
//				newLeft = newLeft + 50;
				var newLeft = parsedLeft + 300;
				var childTile = new sap.m.Button({text:"Tile", press:[this.childItem,this]});
				oLayout.addContent(childTile, {top:newTop+"px", left:newLeft+"px"});
				this.parentClicks++;
			}else{ 
				return; 
			}
		}else{
			if(this.childClicks == 0){
				var topofParent = oEvent.oSource.getParent().mProperties.top;
				var leftofParent = oEvent.oSource.getParent().mProperties.left;
				var topArr = topofParent.split('p');
				var leftArr = leftofParent.split('p');
				var parsedLeft = parseInt(leftArr[0]);
				if(topArr[0]!= ""){
					var parsedTop = parseInt(topArr[0]);
				}else{
					parsedTop = topArr[0];
				}
				var newTop = parsedTop + 100;
//				var newLeft = leftArr[0]/(pos -2);
//				newLeft = newLeft + 50;
				var newLeft = parsedLeft - this.cessValue; 
				var childTile = new sap.m.Button({text:"Tile", press:[this.childItem,this]});
				oLayout.addContent(childTile, {top:newTop+"px", left:newLeft+"px"});
				this.childClicks++;
			}else if(this.childClicks == 1){
				var topofParent = oEvent.oSource.getParent().mProperties.top;
				var leftofParent = oEvent.oSource.getParent().mProperties.left;
				var topArr = topofParent.split('p');
				var leftArr = leftofParent.split('p');
				var parsedLeft = parseInt(leftArr[0]);
				if(topArr[0]!= ""){
					var parsedTop = parseInt(topArr[0]);
				}else{
					parsedTop = topArr[0];
				}
				var newTop = parsedTop + 100;
//				var newLeft = (leftArr[0]/(pos -2))+ parsedLeft;
//				newLeft = newLeft + 50;
				var newLeft = parsedLeft + this.cessValue;
				var childTile = new sap.m.Button({text:"Tile", press:[this.childItem,this]});
				oLayout.addContent(childTile, {top:newTop+"px", left:newLeft+"px"});
				this.childClicks=0;
				this.cessValue - 15;
			}else{
				this.cessValue - 15;
				this.childClicks = 0;
				return;
			}
		}
		
	},
});