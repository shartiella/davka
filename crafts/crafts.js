(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"crafts_atlas_1", frames: [[1001,402,149,400],[1576,0,338,400],[1498,402,230,150],[0,402,400,301],[804,402,195,400],[0,0,400,400],[1174,345,322,400],[402,402,400,285],[1174,0,400,343],[402,0,400,400],[804,0,368,400]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.airballon = function() {
	this.initialize(ss["crafts_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.feather = function() {
	this.initialize(ss["crafts_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hit = function() {
	this.initialize(ss["crafts_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.mosaic = function() {
	this.initialize(ss["crafts_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.owl = function() {
	this.initialize(ss["crafts_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.quilling = function() {
	this.initialize(ss["crafts_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.rose = function() {
	this.initialize(ss["crafts_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.scrapbook = function() {
	this.initialize(ss["crafts_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.slime = function() {
	this.initialize(ss["crafts_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.stained = function() {
	this.initialize(ss["crafts_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.string = function() {
	this.initialize(ss["crafts_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.telemtext = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.telemlink = new cjs.Text("הפקולטה לטכנולוגיות למידה\nתשפ\"א 2021", "20px 'Arial'");
	this.telemlink.name = "telemlink";
	this.telemlink.textAlign = "center";
	this.telemlink.lineHeight = 24;
	this.telemlink.lineWidth = 347;
	this.telemlink.parent = this;
	this.telemlink.setTransform(175.3,2);

	this.timeline.addTween(cjs.Tween.get(this.telemlink).wait(1).to({font:"bold 20px 'Arial'"},0).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(229,236,247,0.008)").s().p("AydEGIAAoLMAk7AAAIAAILg");
	this.shape.setTransform(175.4,27.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,350.7,58.9);


(lib.levelhard = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// Layer_1
	this.hard = new cjs.Text("מסובך", "25px 'Arial'", "#3B3838");
	this.hard.name = "hard";
	this.hard.textAlign = "center";
	this.hard.lineHeight = 30;
	this.hard.lineWidth = 100;
	this.hard.parent = this;
	this.hard.setTransform(67.4,8.15);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8B7AE").s().p("AqlDNIAAmZIVLAAIAAGZg");
	this.shape.setTransform(67.75,20.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F2F2F2").s().p("AqlDNIAAmZIVLAAIAAGZg");
	this.shape_1.setTransform(67.75,20.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.hard,p:{font:"25px 'Arial'",color:"#3B3838"}}]}).to({state:[{t:this.shape},{t:this.hard,p:{font:"bold 25px 'Arial'",color:"#3B3838"}}]},1).to({state:[{t:this.shape_1},{t:this.hard,p:{font:"25px 'Arial'",color:"#C3C3C3"}}]},1).to({state:[{t:this.shape_1},{t:this.hard,p:{font:"bold 25px 'Arial'",color:"#C3C3C3"}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,135.5,41);


(lib.leveleasy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// Layer_1
	this.easy = new cjs.Text("קליל", "25px 'Arial'", "#3B3838");
	this.easy.name = "easy";
	this.easy.textAlign = "center";
	this.easy.lineHeight = 30;
	this.easy.lineWidth = 100;
	this.easy.parent = this;
	this.easy.setTransform(68.05,8.15);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C5E0B4").s().p("AqsDNIAAmZIVZAAIAAGZg");
	this.shape.setTransform(68.475,20.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F2F2F2").s().p("AqsDNIAAmZIVZAAIAAGZg");
	this.shape_1.setTransform(68.475,20.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.easy,p:{font:"25px 'Arial'",color:"#3B3838"}}]}).to({state:[{t:this.shape},{t:this.easy,p:{font:"bold 25px 'Arial'",color:"#3B3838"}}]},1).to({state:[{t:this.shape_1},{t:this.easy,p:{font:"25px 'Arial'",color:"#C3C3C3"}}]},1).to({state:[{t:this.shape_1},{t:this.easy,p:{font:"bold 25px 'Arial'",color:"#C3C3C3"}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,137,41);


(lib.levelchal = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// Layer_1
	this.chal = new cjs.Text("מאתגר", "25px 'Arial'", "#3B3838");
	this.chal.name = "chal";
	this.chal.textAlign = "center";
	this.chal.lineHeight = 30;
	this.chal.lineWidth = 100;
	this.chal.parent = this;
	this.chal.setTransform(68.15,8.15);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFE699").s().p("AqkDNIAAmZIVJAAIAAGZg");
	this.shape.setTransform(67.725,20.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F2F2F2").s().p("AqkDNIAAmZIVJAAIAAGZg");
	this.shape_1.setTransform(67.725,20.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.chal,p:{font:"25px 'Arial'",color:"#3B3838"}}]}).to({state:[{t:this.shape},{t:this.chal,p:{font:"bold 25px 'Arial'",color:"#3B3838"}}]},1).to({state:[{t:this.shape_1},{t:this.chal,p:{font:"25px 'Arial'",color:"#C3C3C3"}}]},1).to({state:[{t:this.shape_1},{t:this.chal,p:{font:"bold 25px 'Arial'",color:"#C3C3C3"}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,135.5,41);


(lib.levelall = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// Layer_1
	this.all = new cjs.Text("הצג הכל", "25px 'Arial'", "#3B3838");
	this.all.name = "all";
	this.all.textAlign = "center";
	this.all.lineHeight = 30;
	this.all.lineWidth = 100;
	this.all.parent = this;
	this.all.setTransform(67.65,8.15);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B4C7E7").s().p("AqjDNIAAmZIVHAAIAAGZg");
	this.shape.setTransform(67.6,20.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F2F2F2").s().p("AqjDNIAAmZIVHAAIAAGZg");
	this.shape_1.setTransform(67.6,20.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.all,p:{font:"25px 'Arial'",color:"#3B3838"}}]}).to({state:[{t:this.shape},{t:this.all,p:{font:"bold 25px 'Arial'",color:"#3B3838"}}]},1).to({state:[{t:this.shape_1},{t:this.all,p:{font:"25px 'Arial'",color:"#C3C3C3"}}]},1).to({state:[{t:this.shape_1},{t:this.all,p:{font:"bold 25px 'Arial'",color:"#C3C3C3"}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,135.2,41);


(lib.gluetimeback = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEFEFE").s().p("AroCEIhAAAQgeAAgQgKIgGgFQgSgRADgpQADgrAAgrIAAhRQAUgXAyACQBWAEBXAAIFVAAQCNAACOgDIAFAAQCKgDCLADIAGABQAkAJAtABQBaABBNgIQBQgIBYABQA8AAA9ADIALAAQAZgBAEAQQATANgDAnQgEAxACAwQACAygKAkQghAKgwgBQiqgDiqAAIlVAAIlUAAQhRAAhRADIgGAAQhqAChrAAIh/gBg");
	this.shape.setTransform(91.2756,17.2979,0.9458,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(67,67,67,0.984)").s().p("AmVCuIlUgBQgYAAgWgCIgMgBQhBAEgcgeQgDgLgIgHQgDgCAAgDQgDh3AAh1QAQgcAagOQAWgMAiAAQCrACCqAAQCqAACrgBQAvgBAtgCQAtgCAvAAQBtAABuADIAGAAQBPAKBZABQAuABAjgGQBAgLBKACQBhgCBYAJQAWADAOAMQAEAEAGADQAYAigFBBQgCAWAAAXIACBWQABArgUAVQgDADgDABQgFACgCACQgGAHgKABQgoABgpAAIlUAAIlVAAIlUAAQgrAAgrAEQghADgmAAIgLAAgArpCDQCqABCqgCIAGAAQBRgDBRAAIFUAAIFVAAQCqAACqADQAwABAhgKQAKglgCgyQgCgwAEgxQADgmgTgOQgEgQgZABIgLAAQg9gCg8gBQhYgBhQAJQhNAIhagCQgtgBgkgJIgGAAQiLgDiJADIgGAAQiOACiNAAIlVAAQhXAAhWgEQgygCgUAYIAABRQAAAqgDArQgDAqASAQIAGAFQAQALAeAAIAfAAIAhAAg");
	this.shape_1.setTransform(91.3939,17.4099,0.9458,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.gluetimeback, new cjs.Rectangle(5,0,172.9,34.8), null);


(lib.glow = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("Ai5EzQhNh/AAi0QAAizBNiAQBMh+BtgBQBtABBNB+QBNCAAACzQAAC0hNB/QhNB/htABQhtgBhMh/g");
	this.shape.setTransform(26.3,43.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.glow, new cjs.Rectangle(0,0,52.6,86.9), null);


(lib.toiletowl = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_2
	this.instance = new lib.owl();
	this.instance.setTransform(39,-1,0.3819,0.3819);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.4259,scaleY:0.4259,x:35,y:-10},0).wait(1));

	// Layer_1
	this.text = new cjs.Text("ינשוף טואלט", "21px 'Arial'", "#130589");
	this.text.textAlign = "center";
	this.text.lineHeight = 25;
	this.text.lineWidth = 140;
	this.text.parent = this;
	this.text.setTransform(71.8,178.6);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({font:"bold 21px 'Arial'"},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-10,143.7,214.1);


(lib.stringball = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_2
	this.instance = new lib.string();
	this.instance.setTransform(15,38,0.26,0.26);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.3,scaleY:0.3,x:8,y:30},0).wait(1));

	// Layer_1
	this.text = new cjs.Text("כדור חוטים", "21px 'Arial'", "#100288");
	this.text.textAlign = "center";
	this.text.lineHeight = 25;
	this.text.lineWidth = 124;
	this.text.parent = this;
	this.text.setTransform(64.05,163.75);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({font:"bold 21px 'Arial'"},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,30,128.2,159.2);


(lib.slimey = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_2
	this.instance = new lib.slime();
	this.instance.setTransform(-6,-18,0.3124,0.3124);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.373,scaleY:0.373,x:-18,y:-28},0).wait(1));

	// Layer_1
	this.text = new cjs.Text("סליים", "21px 'Arial'", "#130589");
	this.text.textAlign = "center";
	this.text.lineHeight = 25;
	this.text.lineWidth = 85;
	this.text.parent = this;
	this.text.setTransform(57.75,116.55);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({font:"bold 21px 'Arial'"},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18,-28,149.2,170);


(lib.scrapbooks = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_2
	this.instance = new lib.scrapbook();
	this.instance.setTransform(1,0,0.31,0.31);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.37,scaleY:0.37,x:-11,y:-9},0).wait(1));

	// Layer_1
	this.text = new cjs.Text("סקראפבוק", "21px 'Arial'", "#130589");
	this.text.textAlign = "center";
	this.text.lineHeight = 25;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(60,117.95);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({font:"bold 21px 'Arial'"},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-9,148,152.4);


(lib.quilling_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_2
	this.instance = new lib.quilling();
	this.instance.setTransform(1,-6,0.256,0.256);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.3,scaleY:0.3,x:-8,y:-15},0).wait(1));

	// Layer_1
	this.text = new cjs.Text("קווילינג", "21px 'Arial'", "#130589");
	this.text.textAlign = "center";
	this.text.lineHeight = 25;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(52,113.05);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({font:"bold 21px 'Arial'"},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-15,120,153.5);


(lib.paperfeather = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib.feather();
	this.instance.setTransform(14,7,0.3343,0.3343);

	this.text = new cjs.Text("נוצה צבעונית", "21px 'Arial'", "#190B90");
	this.text.textAlign = "center";
	this.text.lineHeight = 25;
	this.text.lineWidth = 130;
	this.text.parent = this;
	this.text.setTransform(67.1,153.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text,p:{font:"21px 'Arial'"}},{t:this.instance,p:{scaleX:0.3343,scaleY:0.3343,x:14,y:7}}]}).to({state:[{t:this.text,p:{font:"bold 21px 'Arial'"}},{t:this.instance,p:{scaleX:0.3756,scaleY:0.3756,x:7,y:-1}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1,134.3,180.3);


(lib.mosaic_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_2
	this.instance = new lib.mosaic();
	this.instance.setTransform(0,0,0.2832,0.2832);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.3272,scaleY:0.3272,x:-9,y:-7},0).wait(1));

	// Layer_1
	this.text = new cjs.Text("פסיפס", "21px 'Arial'", "#130589");
	this.text.textAlign = "center";
	this.text.lineHeight = 25;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(57.4,116.05);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({font:"bold 21px 'Arial'"},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9,-7,130.9,148.5);


(lib.creperose = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_2
	this.instance = new lib.rose();
	this.instance.setTransform(-1,2,0.372,0.372);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.4201,scaleY:0.4201,x:-9,y:-8},0).wait(1));

	// Layer_1
	this.text = new cjs.Text("ורד מקרפ", "21px 'Arial'", "#130589");
	this.text.textAlign = "center";
	this.text.lineHeight = 25;
	this.text.lineWidth = 105;
	this.text.parent = this;
	this.text.setTransform(59.7,171.2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({font:"bold 21px 'Arial'"},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9,-8,135.3,204.7);


(lib.colorwindow = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_2
	this.instance = new lib.stained();
	this.instance.setTransform(26,-9,0.258,0.258);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.282,scaleY:0.282,x:21,y:-14},0).wait(1));

	// Layer_1
	this.text = new cjs.Text("ויטראז' לחלון", "21px 'Arial'", "#100288");
	this.text.textAlign = "center";
	this.text.lineHeight = 25;
	this.text.lineWidth = 145;
	this.text.parent = this;
	this.text.setTransform(74.5,108.15);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({font:"bold 21px 'Arial'"},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-14,149,147.6);


(lib.airballoon = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_2
	this.instance = new lib.airballon();
	this.instance.setTransform(56,-14,0.3922,0.3922);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.4641,scaleY:0.4641,x:51,y:-28},0).wait(1));

	// Layer_1
	this.text = new cjs.Text("מובייל כדור פורח", "21px 'Arial'", "#130589");
	this.text.textAlign = "center";
	this.text.lineHeight = 25;
	this.text.lineWidth = 163;
	this.text.parent = this;
	this.text.setTransform(83.55,160.55);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({font:"bold 21px 'Arial'"},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-28,167.1,214);


(lib.hitbtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.hit();
	this.instance.setTransform(0,-1,0.9985,0.9985);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(51,51,51,0.004)").ss(1,1,1).p("AwNqtMAgbAAAIAAVbMggbAAAg");
	this.shape.setTransform(114.6,71.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3B3838").s().p("AwNKuIAA1bMAgbAAAIAAVbg");
	this.shape_1.setTransform(114.6,71.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1,229.7,149.8);


(lib.cardXy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFD85E").s().p("AAbEMQhpgBhVgtIgagPQgigVgRgVQgngyAEhZQAEhRAlhGQAmhJBFgrIAMgGQAMgHAhgHQAigHAqAAQArAAA4ASQBGAVArAvQAsAwALBGQAKA/gTBDQgOAwgaApQgcArgmAdQggAZgfAJQgZAIgjAAIgIgBgAhFjxQg6APgyA6QgRAVgOAXQgQAcgLAfQgTA6ACA7IAAADQACAzAWAiIACAEQAWAdArAZQBNApBeAGQAxACAggJQAvgPAoguQA4hAAPhUQAKg4gOg2IAAgBQgPg5gnglQg7g6h4gKQgSgBgQAAQgbAAgUAEg");
	this.shape.setTransform(27.6244,26.8536);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFC409").s().p("ABZCBIhjhmIgBABQgwAogXAhQgPATgGAFQgQALgOgHQgGgEgDgHQgDgHACgHQABgFAHgKQABgGAJgIIADgCQAdgkAkgiIAMgJQg8g+geghQgJgKgCgGQgDgLAKgJQAIgIAMABQAJABAJAHIAOAPQAbAfA0A1IAEgCIADgCIAggdIA4gwIAGgEIAEgFQALgPAHgDQAJgDAJAEQAJADAEAJQAHARgVAZQgVAXgyAmIgjAbIAZAZIAdAbIAyAxQALAJADAJQAEAKgHAKQgGAKgLABIgCAAQgOAAgTgTg");
	this.shape_1.setTransform(28.136,26.9484);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CB9A00").s().p("ABZCBIhjhmIgBABQgwAogXAhQgPATgGAFQgQALgOgHQgGgEgDgHQgDgHACgHQABgFAHgKQABgGAJgIIADgCQAdgkAkgiIAMgJQg8g+geghQgJgKgCgGQgDgLAKgJQAIgIAMABQAJABAJAHIAOAPQAbAfA0A1IAEgCIADgCIAggdIA4gwIAGgEIAEgFQALgPAHgDQAJgDAJAEQAJADAEAJQAHARgVAZQgVAXgyAmIgjAbIAZAZIAdAbIAyAxQALAJADAJQAEAKgHAKQgGAKgLABIgCAAQgOAAgTgTg");
	this.shape_2.setTransform(28.136,26.9484);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape},{t:this.shape_1}]},1).to({state:[{t:this.shape},{t:this.shape_2}]},1).wait(1));

	// Layer_2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,216,94,0.008)").s().p("AgFEHQhrgChMhLQhPhNAAhtQAAhsBPhNQBOhNBuAAQBvAABOBNQBNBLACBqIAAAEQAABthPBNQhOBNhvAAIgFAAg");
	this.shape_3.setTransform(27.225,26.675);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,216,94,0.498)").s().p("AgFEHQhrgChMhLQhPhNAAhtQAAhsBPhNQBOhNBuAAQBvAABOBNQBNBLACBqIAAAEQAABthPBNQhOBNhvAAIgFAAg");
	this.shape_4.setTransform(27.225,26.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,55.3,53.7);


(lib.cardXr = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ED422B").s().p("ABZCBIhjhmIgBABQgwAogXAhQgPATgGAFQgQALgOgHQgGgEgDgHQgDgHACgHQABgFAHgKQABgGAJgIIADgCQAdgkAkgiIAMgJQg8g+geghQgJgKgCgGQgDgLAKgJQAIgIAMABQAJABAJAHIAOAPQAbAfA0A1IAEgCIADgCIAggdIA4gwIAGgEIAEgFQALgPAHgDQAJgDAJAEQAJADAEAJQAHARgVAZQgVAXgyAmIgjAbIAZAZIAdAbIAyAxQALAJADAJQAEAKgHAKQgGAKgLABIgCAAQgOAAgTgTg");
	this.shape.setTransform(28.136,26.9484);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9281").s().p("AAbEMQhpgBhVgtIgagPQgigVgRgVQgngyAEhZQAEhRAlhGQAmhJBFgrIAMgGQAMgHAhgHQAigHAqAAQArAAA4ASQBGAVArAvQAsAwALBGQAKA/gTBDQgOAwgaApQgcArgmAdQggAZgfAJQgZAIgjAAIgIgBgAhFjxQg6APgyA6QgRAVgOAXQgQAcgLAfQgTA6ACA7IAAADQACAzAWAiIACAEQAWAdArAZQBNApBeAGQAxACAggJQAvgPAoguQA4hAAPhUQAKg4gOg2IAAgBQgPg5gnglQg7g6h4gKQgSgBgQAAQgbAAgUAEg");
	this.shape_1.setTransform(27.6244,26.8536);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C52F1A").s().p("ABZCBIhjhmIgBABQgwAogXAhQgPATgGAFQgQALgOgHQgGgEgDgHQgDgHACgHQABgFAHgKQABgGAJgIIADgCQAdgkAkgiIAMgJQg8g+geghQgJgKgCgGQgDgLAKgJQAIgIAMABQAJABAJAHIAOAPQAbAfA0A1IAEgCIADgCIAggdIA4gwIAGgEIAEgFQALgPAHgDQAJgDAJAEQAJADAEAJQAHARgVAZQgVAXgyAmIgjAbIAZAZIAdAbIAyAxQALAJADAJQAEAKgHAKQgGAKgLABIgCAAQgOAAgTgTg");
	this.shape_2.setTransform(28.136,26.9484);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape_2}]},1).wait(1));

	// Layer_2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,146,129,0.008)").s().p("AgFEHQhrgChMhLQhPhNAAhtQAAhsBPhNQBOhNBuAAQBvAABOBNQBNBLACBqIAAAEQAABthPBNQhOBNhvAAIgFAAg");
	this.shape_3.setTransform(27.225,26.675);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,146,129,0.498)").s().p("AgFEHQhrgChMhLQhPhNAAhtQAAhsBPhNQBOhNBuAAQBvAABOBNQBNBLACBqIAAAEQAABthPBNQhOBNhvAAIgFAAg");
	this.shape_4.setTransform(27.225,26.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,55.3,53.7);


(lib.cardXg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#548235").s().p("ABZCBIhjhmIgBABQgwAogXAhQgPATgGAFQgQALgOgHQgGgEgDgHQgDgHACgHQABgFAHgKQABgGAJgIIADgCQAdgkAkgiIAMgJQg8g+geghQgJgKgCgGQgDgLAKgJQAIgIAMABQAJABAJAHIAOAPQAbAfA0A1IAEgCIADgCIAggdIA4gwIAGgEIAEgFQALgPAHgDQAJgDAJAEQAJADAEAJQAHARgVAZQgVAXgyAmIgjAbIAZAZIAdAbIAyAxQALAJADAJQAEAKgHAKQgGAKgLABIgCAAQgOAAgTgTg");
	this.shape.setTransform(28.136,26.9484);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#87B36A").s().p("AAbEMQhpgBhVgtIgagPQgigVgRgVQgngyAEhZQAEhRAlhGQAmhJBFgrIAMgGQAMgHAhgHQAigHAqAAQArAAA4ASQBGAVArAvQAsAwALBGQAKA/gTBDQgOAwgaApQgcArgmAdQggAZgfAJQgZAIgjAAIgIgBgAhFjxQg6APgyA6QgRAVgOAXQgQAcgLAfQgTA6ACA7IAAADQACAzAWAiIACAEQAWAdArAZQBNApBeAGQAxACAggJQAvgPAoguQA4hAAPhUQAKg4gOg2IAAgBQgPg5gnglQg7g6h4gKQgSgBgQAAQgbAAgUAEg");
	this.shape_1.setTransform(27.6244,26.8536);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#38641A").s().p("ABZCBIhjhmIgBABQgwAogXAhQgPATgGAFQgQALgOgHQgGgEgDgHQgDgHACgHQABgFAHgKQABgGAJgIIADgCQAdgkAkgiIAMgJQg8g+geghQgJgKgCgGQgDgLAKgJQAIgIAMABQAJABAJAHIAOAPQAbAfA0A1IAEgCIADgCIAggdIA4gwIAGgEIAEgFQALgPAHgDQAJgDAJAEQAJADAEAJQAHARgVAZQgVAXgyAmIgjAbIAZAZIAdAbIAyAxQALAJADAJQAEAKgHAKQgGAKgLABIgCAAQgOAAgTgTg");
	this.shape_2.setTransform(28.136,26.9484);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape_2}]},1).wait(1));

	// Layer_3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(135,179,106,0.008)").s().p("AgFEHQhrgChMhLQhPhNAAhtQAAhsBPhNQBOhNBuAAQBvAABOBNQBNBLACBqIAAAEQAABthPBNQhOBNhvAAIgFAAg");
	this.shape_3.setTransform(27.225,26.675);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(135,179,106,0.498)").s().p("AgFEHQhrgChMhLQhPhNAAhtQAAhsBPhNQBOhNBuAAQBvAABOBNQBNBLACBqIAAAEQAABthPBNQhOBNhvAAIgFAAg");
	this.shape_4.setTransform(27.225,26.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,55.3,53.7);


(lib.cardXb = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2F68C7").s().p("ABZCBIhjhmIgBABQgwAogXAhQgPATgGAFQgQALgOgHQgGgEgDgHQgDgHACgHQABgFAHgKQABgGAJgIIADgCQAdgkAkgiIAMgJQg8g+geghQgJgKgCgGQgDgLAKgJQAIgIAMABQAJABAJAHIAOAPQAbAfA0A1IAEgCIADgCIAggdIA4gwIAGgEIAEgFQALgPAHgDQAJgDAJAEQAJADAEAJQAHARgVAZQgVAXgyAmIgjAbIAZAZIAdAbIAyAxQALAJADAJQAEAKgHAKQgGAKgLABIgCAAQgOAAgTgTg");
	this.shape.setTransform(28.136,26.9484);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9DB6DF").s().p("AAbEMQhpgBhVgtIgagPQgigVgRgVQgngyAEhZQAEhRAlhGQAmhJBFgrIAMgGQAMgHAhgHQAigHAqAAQArAAA4ASQBGAVArAvQAsAwALBGQAKA/gTBDQgOAwgaApQgcArgmAdQggAZgfAJQgZAIgjAAIgIgBgAhFjxQg6APgyA6QgRAVgOAXQgQAcgLAfQgTA6ACA7IAAADQACAzAWAiIACAEQAWAdArAZQBNApBeAGQAxACAggJQAvgPAoguQA4hAAPhUQAKg4gOg2IAAgBQgPg5gnglQg7g6h4gKQgSgBgQAAQgbAAgUAEg");
	this.shape_1.setTransform(27.6244,26.8536);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1C51AA").s().p("ABZCBIhjhmIgBABQgwAogXAhQgPATgGAFQgQALgOgHQgGgEgDgHQgDgHACgHQABgFAHgKQABgGAJgIIADgCQAdgkAkgiIAMgJQg8g+geghQgJgKgCgGQgDgLAKgJQAIgIAMABQAJABAJAHIAOAPQAbAfA0A1IAEgCIADgCIAggdIA4gwIAGgEIAEgFQALgPAHgDQAJgDAJAEQAJADAEAJQAHARgVAZQgVAXgyAmIgjAbIAZAZIAdAbIAyAxQALAJADAJQAEAKgHAKQgGAKgLABIgCAAQgOAAgTgTg");
	this.shape_2.setTransform(28.136,26.9484);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape_2}]},1).wait(1));

	// Layer_2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(157,182,223,0.008)").s().p("AgFEHQhrgChMhLQhPhNAAhtQAAhsBPhNQBOhNBuAAQBvAABOBNQBNBLACBqIAAAEQAABthPBNQhOBNhvAAIgFAAg");
	this.shape_3.setTransform(27.225,26.675);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(157,182,223,0.498)").s().p("AgFEHQhrgChMhLQhPhNAAhtQAAhsBPhNQBOhNBuAAQBvAABOBNQBNBLACBqIAAAEQAABthPBNQhOBNhvAAIgFAAg");
	this.shape_4.setTransform(27.225,26.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,55.3,53.7);


(lib.aboutbtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.text = new cjs.Text("אודות", "23px 'Arial'", "#404040");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(1.7,-11.3);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(3));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(138,188,255,0.498)").s().p("AmACXQgbgDgMgFQgHgDgDgEQgEgFAAgUIACjBQAAgSAEgMQAGgQATgJQAGgDAOgDIAegGIKHgEQAwAAAcADQATACAMAEQAMAFAGAGIAJAJQADAFABAEQAHAaACAcIgBBOQAAAUgGAhIgJAuQgCANgJAHQgLAHgJACQgRADgbABIhaACIhxABIlIACQhzAAhVgDg");
	this.shape.setTransform(1.225,0.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8ABCFF").s().p("AmACXQgbgDgMgFQgHgDgDgEQgEgFAAgUIACjBQAAgSAEgMQAGgQATgJQAGgDAOgDIAegGIKHgEQAwAAAcADQATACAMAEQAMAFAGAGIAJAJQADAFABAEQAHAaACAcIgBBOQAAAUgGAhIgJAuQgCANgJAHQgLAHgJACQgRADgbABIhaACIhxABIlIACQhzAAhVgDg");
	this.shape_1.setTransform(1.225,0.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5C98E8").s().p("AmACXQgbgDgMgFQgHgDgDgEQgEgFAAgUIACjBQAAgSAEgMQAGgQATgJQAGgDAOgDIAegGIKHgEQAwAAAcADQATACAMAEQAMAFAGAGIAJAJQADAFABAEQAHAaACAcIgBBOQAAAUgGAhIgJAuQgCANgJAHQgLAHgJACQgRADgbABIhaACIhxABIlIACQhzAAhVgDg");
	this.shape_2.setTransform(1.225,0.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.3,-14.9,104,35.8);


(lib.bar = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// all_idn
	this.all = new lib.levelall();
	this.all.name = "all";
	this.all.setTransform(67.6,15.75,1,1,0,0,0,67.6,20.4);

	this.timeline.addTween(cjs.Tween.get(this.all).wait(1));

	// hard
	this.hard = new lib.levelhard();
	this.hard.name = "hard";
	this.hard.setTransform(203.55,15.75,1,1,0,0,0,67.8,20.4);

	this.timeline.addTween(cjs.Tween.get(this.hard).wait(1));

	// chal
	this.chal = new lib.levelchal();
	this.chal.name = "chal";
	this.chal.setTransform(339.65,15.75,1,1,0,0,0,67.7,20.4);

	this.timeline.addTween(cjs.Tween.get(this.chal).wait(1));

	// easy
	this.easy = new lib.leveleasy();
	this.easy.name = "easy";
	this.easy.setTransform(476.55,15.75,1,1,0,0,0,68.5,20.4);

	this.timeline.addTween(cjs.Tween.get(this.easy).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2F2F2").s().p("EgqkADNIAAmZMBVJAAAIAAGZg");
	this.shape.setTransform(272.5,15.825);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bar, new cjs.Rectangle(0,-4.6,545,40.9), null);


(lib.tapetime = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.text = new cjs.Text("אין זמן ייבוש - מיידי", "15px 'Arial'", "#404441");
	this.text.textAlign = "center";
	this.text.lineHeight = 19;
	this.text.lineWidth = 154;
	this.text.parent = this;
	this.text.setTransform(92.05,10.2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// Layer_1
	this.instance = new lib.gluetimeback();
	this.instance.setTransform(91.4,17.4,1,1,0,0,0,91.4,17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tapetime, new cjs.Rectangle(5,0,172.9,34.8), null);


(lib.sticktime = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.text = new cjs.Text("זמן ייבוש: 10 שניות", "15px 'Arial'", "#404441");
	this.text.textAlign = "center";
	this.text.lineHeight = 19;
	this.text.lineWidth = 154;
	this.text.parent = this;
	this.text.setTransform(92.05,10.2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// Layer_1
	this.instance = new lib.gluetimeback();
	this.instance.setTransform(91.4,17.4,1,1,0,0,0,91.4,17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sticktime, new cjs.Rectangle(5,0,172.9,34.8), null);


(lib.silicontime = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.text = new cjs.Text("זמן ייבוש: 5 דקות", "15px 'Arial'", "#404441");
	this.text.textAlign = "center";
	this.text.lineHeight = 19;
	this.text.lineWidth = 154;
	this.text.parent = this;
	this.text.setTransform(92.05,10.2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// Layer_1
	this.instance = new lib.gluetimeback();
	this.instance.setTransform(91.4,17.4,1,1,0,0,0,91.4,17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.silicontime, new cjs.Rectangle(5,0,172.9,34.8), null);


(lib.plastitime = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.text = new cjs.Text("זמן ייבוש: שעה או יותר", "15px 'Arial'", "#404441");
	this.text.textAlign = "center";
	this.text.lineHeight = 19;
	this.text.lineWidth = 154;
	this.text.parent = this;
	this.text.setTransform(92.05,10.2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// Layer_1
	this.instance = new lib.gluetimeback();
	this.instance.setTransform(91.4,17.4,1,1,0,0,0,91.4,17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.plastitime, new cjs.Rectangle(5,0,172.9,34.8), null);


(lib.hottime = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.text = new cjs.Text("זמן ייבוש: 5 שניות", "15px 'Arial'", "#404441");
	this.text.textAlign = "center";
	this.text.lineHeight = 19;
	this.text.lineWidth = 154;
	this.text.parent = this;
	this.text.setTransform(92.05,10.2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// Layer_1
	this.instance = new lib.gluetimeback();
	this.instance.setTransform(91.4,17.4,1,1,0,0,0,91.4,17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hottime, new cjs.Rectangle(5,0,172.9,34.8), null);


(lib.gluetime = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.tape = new lib.tapetime();
	this.tape.name = "tape";
	this.tape.setTransform(86.2,481.95,0.9431,0.9431,0,0,0,91.4,17.4);

	this.hot = new lib.hottime();
	this.hot.name = "hot";
	this.hot.setTransform(86.2,376.2,0.9431,0.9431,0,0,0,91.4,17.4);

	this.stick = new lib.sticktime();
	this.stick.name = "stick";
	this.stick.setTransform(86.2,16.4,0.9431,0.9431,0,0,0,91.4,17.4);

	this.plasti = new lib.plastitime();
	this.plasti.name = "plasti";
	this.plasti.setTransform(86.2,131.8,0.9431,0.9431,0,0,0,91.4,17.4);

	this.silicon = new lib.silicontime();
	this.silicon.name = "silicon";
	this.silicon.setTransform(86.2,254.7,0.9431,0.9431,0,0,0,91.4,17.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.silicon},{t:this.plasti},{t:this.stick},{t:this.hot},{t:this.tape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.gluetime, new cjs.Rectangle(4.7,0,163.10000000000002,498.4), null);


(lib.siliconeglue = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Asset_3_svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#357BB8").s().p("AlFEjIkHgEIAAhEIITAAQA6AABtgTQCEgXAIgcQAIgbALixQALidAAgeQAAgPAxgQQA1gRBDAAQBEAAAmATQAhAQABAZIAAGSQgnAFgsAEQhbAHgmgIQgcAhhWAWQgzANiZAbQhfAQkCAAIgfAAg");
	this.shape.setTransform(57.2489,27.9062,0.1173,0.1173);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#357BB8").s().p("AgSU0QjCgCjNgdQiigYgkgPQgvgOgbgOQg0gZAAgfQAAgtA+gSQAhgLArgEQAIgbANlJQAMk7AQgYQATgaCJgWQBFgMBBgGICR3GQAAgHAPgNIAPgKQAGhsAAgZQAAgNASgGQAOgGAhgEIATgBIAUABQAfAEAOAGQASAHAAAMQAAAYAHBtIAOALQAPAMAAAHICRXHICGARQCJAXATAZQARAYAME7QAMFKAIAaQAIADBDAMQA/ASAAAtQAAA5g2ANQgRAFgVgBIgRgCIpKBKQgNAJgPgBg");
	this.shape_1.setTransform(50.559,15.6254,0.1173,0.1173);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F49236").s().p("AqnVFQk9hHgehiMgApgokQBgBWFjAiQDmAWGCABQGDgBDngWQFigiBghWMgApAokQgjBwlOBCQknA7l+AAQllAAkvhEg");
	this.shape_2.setTransform(50.559,63.0615,0.1173,0.1173);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D1D1D1").s().p("Ao5FjQhsgShjgpQiEg5Acg3ICXkhQBOiWAag9QAvhrEBAXQCTANCuAxQCvgxCTgNQEBgXAvBrQAaA7BOCYICWEhQAdA3iEA5QhjAphtASQkdAyklAAIgKAAQkTAAkTgyg");
	this.shape_3.setTransform(50.5599,34.3785,0.1173,0.1173);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E2E3E8").s().p("EgGtAiiQiBgUhjgkQhggjhfhOQhuhZg3hqQgXgtgFmGQAAoWgDkwQgDmjgKn9IgKmrQgDkmAAh+QAAhPC/l1ICWkdQBPiZAZg4QAvhrEBAXQCTANCuAxQCvgxCTgNQEBgXAvBrQAYA4BQCZICVEdQDAF1AABPQAAB+gDEmIgKGWQgLHmgDGYQgCE5AAIuQgEGbgYAuQg3BqhuBZQhgBOhgAjQjiBUmvAAQj7AAiygcg");
	this.shape_4.setTransform(50.5619,55.8582,0.1173,0.1173);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CBCACA").s().p("AlFEjIkHgEIAAhEIITAAQA6AABtgTQCEgXAIgcQAIgbALixQALidAAgeQAAgPAxgQQA1gRBDAAQBEAAAmATQAhAQABAZIAAGSQgnAFgsAEQhbAHgmgIQgcAhhWAWQgzANiZAbQhfAQkCAAIgfAAg");
	this.shape_5.setTransform(57.2564,27.9171,0.1173,0.1173);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CBCACA").s().p("AgSU0QjCgCjNgdQiigYgkgPQgvgOgbgOQg0gZAAgfQAAgtA+gSQAhgLArgEQAIgbANlJQAMk7AQgYQATgaCJgWQBFgMBBgGICR3GQAAgHAPgNIAPgKQAGhsAAgZQAAgNASgGQAOgGAhgEIATgBIAUABQAfAEAOAGQASAHAAAMQAAAYAHBtIAOALQAPAMAAAHICRXHICGARQCJAXATAZQARAYAME7QAMFKAIAaQAIADBDAMQA/ASAAAtQAAA5g2ANQgRAFgVgBIgRgCIpKBKQgNAJgPgBg");
	this.shape_6.setTransform(50.5639,15.6315,0.1173,0.1173);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#DCDCDC").s().p("AqnVFQk9hHgehiMgApgokQBgBWFjAiQDmAWGCABQGDgBDngWQFigiBghWMgApAokQgjBwlOBCQknA7l+AAQllAAkvhEg");
	this.shape_7.setTransform(50.5639,63.0862,0.1173,0.1173);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F5F5F5").s().p("Ao5FjQhsgShjgpQiEg5Acg3ICXkhQBOiWAag9QAvhrEBAXQCTANCuAxQCvgxCTgNQEBgXAvBrQAaA7BOCYICWEhQAdA3iEA5QhjAphtASQkdAyklAAIgKAAQkTAAkTgyg");
	this.shape_8.setTransform(50.5648,34.3919,0.1173,0.1173);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EEEEEE").s().p("EgGtAiiQiBgUhjgkQhggjhfhOQhuhZg3hqQgXgtgFmGQAAoWgDkwQgDmjgKn9IgKmrQgDkmAAh+QAAhPC/l1ICWkdQBPiZAZg4QAvhrEBAXQCTANCuAxQCvgxCTgNQEBgXAvBrQAYA4BQCZICVEdQDAF1AABPQAAB+gDEmIgKGWQgLHmgDGYQgCE5AAIuQgEGbgYAuQg3BqhuBZQhgBOhgAjQjiBUmvAAQj7AAiygcg");
	this.shape_9.setTransform(50.5668,55.88,0.1173,0.1173);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},1).wait(1));

	// text
	this.text = new cjs.Text("דבק סיליקון", "15px 'Arial'", "#404441");
	this.text.textAlign = "center";
	this.text.lineHeight = 19;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(52,88.4);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(2).to({color:"#CCCCCC"},0).wait(1));

	// glow
	this.instance = new lib.glow();
	this.instance.setTransform(50.55,42.45,1,1,0,0,0,26.3,43.5);
	this.instance._off = true;
	this.instance.filters = [new cjs.BlurFilter(50, 50, 1)];
	this.instance.cache(-2,-2,57,91);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,-26,120,143.4);


(lib.schoolglue = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Asset_4_svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F49236").s().p("AAAJQQhaAChugMQhtgLgSgMIAAhbQAAgKAQgKIAQgIIAVpZQAAgHAMgIIALgHQACgbAHglQANhMAVg2QAXg/AqhAQAqg/AggZICLAAQAgAZAqA/QAqBAAXA/QAVA2ANBMQAHAlADAbIALAHQALAIgBAHIAWJZIAQAIQAQAKAAAKIAABbQgSAMhtALQhhALhTAAIgVgBg");
	this.shape.setTransform(52.7716,6.6022,0.1182,0.1182);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D1D1D1").s().p("AgHFnQjegBjKgZQifgYgGAAQgHAAgCgIQgCgFAAgTQAAgOAFgFIAGgDQgDheABhpQADjRAUg2QAGgNAJgGIAHgDIgEgdQgDggAHgOQAJgQBMgTQBNgTBAAAQBeAADpAMQDqgMBeAAQBAAABNATQBNATAJAQQAKAWgKA1IAHADQAIAFAGAOQAUA2ACDRQACBpgDBeIAGADQAFAFAAAOQAAATgCAFQgBAIgIAAQg/AMhlAMQjLAZjdABg");
	this.shape_1.setTransform(52.7716,17.3217,0.1182,0.1182);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#357BB8").s().p("AtzZfQgzAAgjgkQgkgkAAgzMAAAgvHQAAgzAkgkQAjgkAzAAIbnAAQAzAAAjAkQAlAkgBAzMAAAAvHQABAzglAkQgjAkgzAAg");
	this.shape_2.setTransform(53.4038,49.3973,0.1182,0.1182);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E2E3E8").s().p("EAAAAkRIleABQgSAAgSgEQmDgGiqgQQiLgMg0gbQhAgfgmgbQg0glgegsQgog9gQhjIgIhYMAAAg3JQgCgrgBgfQABg5ANhKQAPhQA3hIQAsg5A6gmQAqgdCKgbQBXgRBtgOQBXgKD0gWIAAhbIHsAfIHtgfIAABbICEANQCRAMA1AHQBpANBcASQCKAbAqAdQA6AmAsA5QA3BIAPBQQAOBKAAA5QAAAfgDArMAAAA3JIgIBYQgRBjgoA9QgdArg1AmQglAbhAAfQg0AbiMAMQiqAQmCAGQgSAEgTAAQj0gBhqAAg");
	this.shape_3.setTransform(52.7716,48.6026,0.1182,0.1182);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CBCACA").s().p("AAAJQQhaAChugMQhtgLgSgMIAAhbQAAgKAQgKIAQgIIAVpZQAAgHAMgIIALgHQACgbAHglQANhMAVg2QAXg/AqhAQAqg/AggZICLAAQAgAZAqA/QAqBAAXA/QAVA2ANBMQAHAlADAbIALAHQALAIgBAHIAWJZIAQAIQAQAKAAAKIAABbQgSAMhtALQhhALhTAAIgVgBg");
	this.shape_4.setTransform(52.778,6.605,0.1182,0.1182);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EEEEEE").s().p("AgHFnQjegBjKgZQifgYgGAAQgHAAgCgIQgCgFAAgTQAAgOAFgFIAGgDQgDheABhpQADjRAUg2QAGgNAJgGIAHgDIgEgdQgDggAHgOQAJgQBMgTQBNgTBAAAQBeAADpAMQDqgMBeAAQBAAABNATQBNATAJAQQAKAWgKA1IAHADQAIAFAGAOQAUA2ACDRQACBpgDBeIAGADQAFAFAAAOQAAATgCAFQgBAIgIAAQg/AMhlAMQjLAZjdABg");
	this.shape_5.setTransform(52.778,17.3285,0.1182,0.1182);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#DCDCDC").s().p("AtzZfQgzAAgjgkQgkgkAAgzMAAAgvHQAAgzAkgkQAjgkAzAAIbnAAQAzAAAjAkQAlAkgBAzMAAAAvHQABAzglAkQgjAkgzAAg");
	this.shape_6.setTransform(53.4104,49.4166,0.1182,0.1182);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F5F5F5").s().p("EAAAAkRIleABQgSAAgSgEQmDgGiqgQQiLgMg0gbQhAgfgmgbQg0glgegsQgog9gQhjIgIhYMAAAg3JQgCgrgBgfQABg5ANhKQAPhQA3hIQAsg5A6gmQAqgdCKgbQBXgRBtgOQBXgKD0gWIAAhbIHsAfIHtgfIAABbICEANQCRAMA1AHQBpANBcASQCKAbAqAdQA6AmAsA5QA3BIAPBQQAOBKAAA5QAAAfgDArMAAAA3JIgIBYQgRBjgoA9QgdArg1AmQglAbhAAfQg0AbiMAMQiqAQmCAGQgSAEgTAAQj0gBhqAAg");
	this.shape_7.setTransform(52.778,48.6216,0.1182,0.1182);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

	// text
	this.text = new cjs.Text("דבק פלסטי", "15px 'Arial'", "#404441");
	this.text.textAlign = "center";
	this.text.lineHeight = 19;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(52,81.5);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(2).to({color:"#CCCCCC"},0).wait(1));

	// glow
	this.instance = new lib.glow();
	this.instance.setTransform(52.6,40.45,1,1,0,0,0,26.3,43.5);
	this.instance._off = true;
	this.instance.filters = [new cjs.BlurFilter(50, 50, 1)];
	this.instance.cache(-2,-2,57,91);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,-28,120,140);


(lib.hotglue = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Asset_5_svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#357BB8").s().p("EAbVAsQQgcgCgTgLIgbgSQgFgDjtANQjtAMgdgRQghgThbhtIh+iaQg4hFgthkQg3h9AmgnIBvhtQBGhIAKgeQAJgbAFiKQAHiugLi7QgiovitmAQjfoUhrjPQirlIkXkKQi6ibh/hTQjtibisgYQiEgTnogTQm3gRglgPQgjgPjoi+Qjdi1gXgCQgWgBiKABQiKABgXgCQgegCgJhpQgDgogKk/QgHjiAcieQAXiCAWABQBFAECQAEQDLAEArgLQAfgIBkhFQBcg/AfgBMArtgAOQA2CKgNCUQgMCCANBoQAOByAoBFQAXAmANALQARANAiADIBqACQBlABBmAGQEVAQA9gFQArgEAWgOQASgMAPgcQAWgsAJkYQAEiMABiSQABgQAsgCQAqgBAUAMQALAGAOAcQAKAWAPgEQAXgHEAAEQEEADARALQARAJACBGQABAkgCAhIArADQAtAGANAPQAPAQgMGjQgMGggMAVQgJAPgsAEQgyAGgGAEQgJAGgJDYQgIDdgKASQgKARkYAtQkpAvgpAWQhHAmhDBZQhMBmgGBcQgEBCEcSFQEoS3AVCvQAaDXg3B7QgQAkgaAhQgWAcgBAFQgDAQAqAYQAoAXgHANQgPAZhYBgQhgBogiATQhQAxg2AeQhjA5gcAAIgBAAg");
	this.shape.setTransform(45.803,33.4902,0.1183,0.1183);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D1D1D1").s().p("AGMDfQjfgZgegCQhGgDlphFQi1giingiIgBiJQKMh0CGgPQCHgOE9gMIAdDrQAWDrgnAGQgJABgQAAQg1AAiLgQg");
	this.shape_1.setTransform(7.5439,7.6976,0.1183,0.1183);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F49236").s().p("AAGDbQjIg4gHgaQgJghAKixQAJi0AOgJQALgICjACQBQABBPADIAzIVQhkgWhlgcg");
	this.shape_2.setTransform(66.9385,8.3109,0.1183,0.1183);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F49236").s().p("Ag8jYQDwACADANQACAJgBC6IgBC3IlvAog");
	this.shape_3.setTransform(56.2857,7.5713,0.1183,0.1183);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F49236").s().p("AtEODQgcgaAQgYQAegfATgYQBYhqBpicQCukBAzikQCooehkhwQhChLiChOQiJhRg5AIQg6AJgYgnQgJgRAJgOQALgQAggHQBlgWCsgiIO+IpIBLChQBYDDBBClQDPIVhoA3QiNBLjAAkQjlArjqgcQjMgYjAhGQikg8gugvQhQBtgvA1Qg9BGgnAAQgPAAgMgLg");
	this.shape_4.setTransform(46.3336,29.6315,0.1183,0.1183);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E2E3E8").s().p("Egl8AB3IAmlhMBJXABEIA2A0QA4BCALBEQADAVAAAVQAAAzgSA4QgNAngPAag");
	this.shape_5.setTransform(85.623,9.5314,0.1183,0.1183);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CBCACA").s().p("ADJFOIgDgDIgdACQgcABgDgCQgEgDgLgMIgPgSQgGgJgGgLQgGgQAEgEIANgNQAJgJABgDIACgTIgBgrQgEhCgUguQgbg9gMgZQgVgnghgfQgVgSgPgKQgcgTgUgDQgQgCg5gCQg0gCgFgCQgEgCgbgWQgbgVgCgBIgTAAIgTAAQgEAAgBgNIgBgqQgBgbADgTQADgPADAAIAZABQAYABAFgBQADgCAMgHQALgIAEAAIFKgCQAGAQgCASQgBAPACAMQABAOAFAIIAEAGQACABAEABIANAAIAYABQAhACAHgBQAFgBACgBQADgCABgDQADgFABghIABgiQAAgCAFAAQAFAAACACQABAAAAAAQABAAAAABQAAAAABABQAAABAAAAQABABAAABQAAAAABAAQAAABABAAQAAAAAAAAQADgBAeAAQAfAAACACQACABAAAIIAAAJIAFAAQAGAAABACQACACgCAyQgBAxgBADQgBABgGABIgGABQgBAAgBAaQgBAagCACQgBADghAFQgjAFgFADQgIAEgIALQgJAMgBALQAAAHAhCIQAjCPADAVQADAagHAOIgFAIIgCAEQgBACAFACQAFAEgBABIgMAOQgLAMgEADIgQAJQgMAHgDAAIgGgBg");
	this.shape_6.setTransform(45.8014,33.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EEEEEE").s().p("AGMDfQjfgZgegCQhGgDlphFQi1giingiIgBiJQKMh0CGgPQCHgOE9gMIAdDrQAWDrgnAGQgJABgQAAQg1AAiLgQg");
	this.shape_7.setTransform(7.5439,7.6976,0.1183,0.1183);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#DCDCDC").s().p("AAGDbQjIg4gHgaQgJghAKixQAJi0AOgJQALgICjACQBQABBPADIAzIVQhkgWhlgcg");
	this.shape_8.setTransform(66.9385,8.3109,0.1183,0.1183);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#DCDCDC").s().p("Ag8jYQDwACADANQACAJgBC6IgBC3IlvAog");
	this.shape_9.setTransform(56.2857,7.5713,0.1183,0.1183);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#DCDCDC").s().p("AtEODQgcgaAQgYQAegfATgYQBYhqBpicQCukBAzikQCooehkhwQhChLiChOQiJhRg5AIQg6AJgYgnQgJgRAJgOQALgQAggHQBlgWCsgiIO+IpIBLChQBYDDBBClQDPIVhoA3QiNBLjAAkQjlArjqgcQjMgYjAhGQikg8gugvQhQBtgvA1Qg9BGgnAAQgPAAgMgLg");
	this.shape_10.setTransform(46.3336,29.6315,0.1183,0.1183);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F5F5F5").s().p("Egl8AB3IAmlhMBJXABEIA2A0QA4BCALBEQADAVAAAVQAAAzgSA4QgNAngPAag");
	this.shape_11.setTransform(85.623,9.5314,0.1183,0.1183);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).wait(1));

	// text
	this.text = new cjs.Text("דבק חם", "15px 'Arial'", "#404441");
	this.text.textAlign = "center";
	this.text.lineHeight = 19;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(54.4,72.8);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(2).to({color:"#CCCCCC"},0).wait(1));

	// glow
	this.instance = new lib.glow();
	this.instance.setTransform(55.4,31.6,1.8597,0.5904,0,0,0,26.3,43.6);
	this.instance._off = true;
	this.instance.filters = [new cjs.BlurFilter(50, 50, 1)];
	this.instance.cache(-2,-2,57,91);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.5,-19.1,152,120.9);


(lib.gluetape = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Asset_1_svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D1D1D1").s().p("AFsI9QkAgHlGgoQlGgnkUg6Qkog9iOg/QhagoiEjRQiEjRgZiRQCgB1DeBYQDiBaD3ArQIxBjGgihQA8CHCOBcQCiBqC7gOQDegRDTi9QD4jdDTm7QiTF9kxFnQiACWh5BnQh1BjhKAZQhZAejPAAIhWgBg");
	this.shape.setTransform(31.8843,24.6964,0.1187,0.1187);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E2E3E8").s().p("AlmJ8QAuA5i1hKQijhDkJiJQiihUiIhNQE0ByEFj2QCPiGB+jyQAxhfBkjtQAthqE2gWQEYgUF0A0QFzAzDrBbQEFBlgpBoQhaDmjWEhQjfExiYBSQiEBHi+gkQg7gMg7gVIgugSIgRAsQgeAzhBAeQhUAoiAAAQi7AAkbhUgA3mBLQA0AkBPAwQBLAuBVAxQiMg0iXh/gA5GgMQAxAvAvAoQhZg+gHgZg");
	this.shape_1.setTransform(32.2882,21.8774,0.1187,0.1187);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#357BB8").s().p("EgC8AgOQkKgcjli7Qjei1iakwQickwg/l8QhCmKArmiQAqmTCCloQB/lcDCkIQDCkJDriPQDyiUD+AAQArAAAsAEQEKAcDjC7QDbC0CYExQCXEwA+F8QA/GKgrGiQgqGTiFFoQiAFcjGEIQjFEIjtCQQj1CUj+AAQgcAAgbgEgACF9/QjhAAjfCDQjkCGi2D1QjEEGh4FAQh9FKgmF3QgmFsBAFqQBBFqCjFKQCMEZDKCfQDFCcDrAZQAjADAoAAQDkAADMhzQDWh4C0jyQDCkEB6lLQB8lPAnl5QApmHhBmAQg/l2iXkuQiMkYjBiYQi8iUjsgYQgpgEgjAAIgDgcg");
	this.shape_2.setTransform(68.3089,30.2231,0.1187,0.1187);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D1D1D1").s().p("EgD2An6Qi2gSi9hkQi/hliRidQh6iDhvizQh0i5hJi5QigmXg3mJQg4mVAunEQAsmnCungQCknBDXlKQDhlaEvi7QEti6FLABQA+AAA6AGQCtARDJB6QC5BvCLCZQCCCQBqCiQB1C2BGC1QEmL0hdOGQgtGxiCGGQiAF+jUFaQjmF3lDDiQlMDnlEABQg9AAg8gHgAk58jQjiCDi0D0Qi1D0h2FPQh4FXgqGUQgsGnAxF5QAwFzCEEdQCFEhDMCoQDTCvELAbQArAEAsABQD/gBDqiDQDmiCC5jxQC6j0B5lNQB8lXApmTQAsmlg0l7Qgzl0iJkgQiKkijPiqQjXiwkLgbQgrgFgsAAQj/AAjnCFg");
	this.shape_3.setTransform(67.834,30.1252,0.1187,0.1187);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E2E3E8").s().p("EAG0AlBQtVjGgogMQkchWhugxQi2hRiDiEQh6h6hvilQh0irhJirQigl4g3lsQg4l3AumhQAtmSCdmwQCbmrDPklQDek9FDiwQE6isFPAAIAYAAQcQACAnAEQAmAEg+AvQhwBNhYBAQmAEWjrE/QkRFyjZJPQhUDng6DZQg0DEgNByQgMBoAEC2QAFDZAbDcQBJJSDDFgQDGFmGaFvQCoCWAUAYQAYAegHANQgHAOgsAAQgbAAtljJg");
	this.shape_4.setTransform(48.2107,30.0985,0.1187,0.1187);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F49236").s().p("A1ZU4QAlgMA7gkQB0hJBmh3QFIl8BGq/QBGq+i/m9Qg8iLhPhgQgYgfgYgWIgSgQIKdshIM5AmIInKZIEUL6IAgRNImWRvIpnKIIusCCg");
	this.shape_5.setTransform(68.9193,30.1638,0.1187,0.1187);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EEEEEE").s().p("AFsI9QkAgHlGgoQlGgnkUg6Qkog9iOg/QhagoiEjRQiEjRgZiRQCgB1DeBYQDiBaD3ArQIxBjGgihQA8CHCOBcQCiBqC7gOQDegRDTi9QD4jdDTm7QiTF9kxFnQiACWh5BnQh1BjhKAZQhZAejPAAIhWgBg");
	this.shape_6.setTransform(31.8843,24.6964,0.1187,0.1187);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F5F5F5").s().p("AlmJ8QAuA5i1hKQijhDkJiJQiihUiIhNQE0ByEFj2QCPiGB+jyQAxhfBkjtQAthqE2gWQEYgUF0A0QFzAzDrBbQEFBlgpBoQhaDmjWEhQjfExiYBSQiEBHi+gkQg7gMg7gVIgugSIgRAsQgeAzhBAeQhUAoiAAAQi7AAkbhUgA3mBLQA0AkBPAwQBLAuBVAxQiMg0iXh/gA5GgMQAxAvAvAoQhZg+gHgZg");
	this.shape_7.setTransform(32.2882,21.8774,0.1187,0.1187);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CBCACA").s().p("EgC8AgOQkKgcjli7Qjei1iakwQickwg/l8QhCmKArmiQAqmTCCloQB/lcDCkIQDCkJDriPQDyiUD+AAQArAAAsAEQEKAcDjC7QDbC0CYExQCXEwA+F8QA/GKgrGiQgqGTiFFoQiAFcjGEIQjFEIjtCQQj1CUj+AAQgcAAgbgEgACF9/QjhAAjfCDQjkCGi2D1QjEEGh4FAQh9FKgmF3QgmFsBAFqQBBFqCjFKQCMEZDKCfQDFCcDrAZQAjADAoAAQDkAADMhzQDWh4C0jyQDCkEB6lLQB8lPAnl5QApmHhBmAQg/l2iXkuQiMkYjBiYQi8iUjsgYQgpgEgjAAIgDgcg");
	this.shape_8.setTransform(68.3089,30.2231,0.1187,0.1187);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EEEEEE").s().p("EgD2An6Qi2gSi9hkQi/hliRidQh6iDhvizQh0i5hJi5QigmXg3mJQg4mVAunEQAsmnCungQCknBDXlKQDhlaEvi7QEti6FLABQA+AAA6AGQCtARDJB6QC5BvCLCZQCCCQBqCiQB1C2BGC1QEmL0hdOGQgtGxiCGGQiAF+jUFaQjmF3lDDiQlMDnlEABQg9AAg8gHgAk58jQjiCDi0D0Qi1D0h2FPQh4FXgqGUQgsGnAxF5QAwFzCEEdQCFEhDMCoQDTCvELAbQArAEAsABQD/gBDqiDQDmiCC5jxQC6j0B5lNQB8lXApmTQAsmlg0l7Qgzl0iJkgQiKkijPiqQjXiwkLgbQgrgFgsAAQj/AAjnCFg");
	this.shape_9.setTransform(67.834,30.1252,0.1187,0.1187);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F5F5F5").s().p("EAG0AlBQtVjGgogMQkchWhugxQi2hRiDiEQh6h6hvilQh0irhJirQigl4g3lsQg4l3AumhQAtmSCdmwQCbmrDPklQDek9FDiwQE6isFPAAIAYAAQcQACAnAEQAmAEg+AvQhwBNhYBAQmAEWjrE/QkRFyjZJPQhUDng6DZQg0DEgNByQgMBoAEC2QAFDZAbDcQBJJSDDFgQDGFmGaFvQCoCWAUAYQAYAegHANQgHAOgsAAQgbAAtljJg");
	this.shape_10.setTransform(48.2107,30.0985,0.1187,0.1187);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#DCDCDC").s().p("A1ZU4QAlgMA7gkQB0hJBmh3QFIl8BGq/QBGq+i/m9Qg8iLhPhgQgYgfgYgWIgSgQIKdshIM5AmIInKZIEUL6IAgRNImWRvIpnKIIusCCg");
	this.shape_11.setTransform(68.9193,30.1638,0.1187,0.1187);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).wait(1));

	// text
	this.text = new cjs.Text("סרט דבק", "15px 'Arial'", "#404441");
	this.text.textAlign = "center";
	this.text.lineHeight = 19;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(52,65.5);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(2).to({color:"#CCCCCC"},0).wait(1));

	// glow
	this.instance = new lib.glow();
	this.instance.setTransform(57.45,28.1,1.2338,0.8113,0,0,0,26.3,43.5);
	this.instance._off = true;
	this.instance.filters = [new cjs.BlurFilter(50, 50, 1)];
	this.instance.cache(-2,-2,57,91);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,-32.2,124,126.7);


(lib.gluestick = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Asset_2_svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E2E3E8").s().p("AAAGuQi6ACkIgSQlkgXgbgqIAAqMIAuhNQBrgMCXgNQEvgZDiAAQDjAAEwAZQCWANBqAMIAuBNIAAKMQgaAqlkAXQjzARiyAAIgegBg");
	this.shape.setTransform(52.5841,5.0542,0.1174,0.1174);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#357BB8").s().p("AjfMdQhohBhQh4Qipj9AAlnQAAllCpj+QBQh4BohBQBrhEB0AAQB2AABrBEQBnBCBQB3QCpD+AAFlQAAFnipD9QhQB4hnBBQhrBEh2AAQh0AAhrhEg");
	this.shape_1.setTransform(52.634,33.3757,0.1174,0.1174);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F49236").s().p("EgJ5AhCQh5gvgrgwMAAAg/NIMdi3IMeC3MAAAA/NQgrAwh5AvQjyBgmIAAQmGAAjzhgg");
	this.shape_2.setTransform(52.5812,32.9531,0.1174,0.1174);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D1D1D1").s().p("Am9H9QjcgxgOgwQgLgog2g2Ig0guIAAsdQAAgnF/AHQDAADC/ALIAfBwIAfhwIF/gOQF/gHgBAnIAAMdIg0AuQg2A2gLAoQgNAwjcAxQjhAzjeAAQjcAAjhgzg");
	this.shape_3.setTransform(52.5753,62.8246,0.1174,0.1174);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F5F5F5").s().p("AAAGuQi6ACkIgSQlkgXgbgqIAAqMIAuhNQBrgMCXgNQEvgZDiAAQDjAAEwAZQCWANBqAMIAuBNIAAKMQgaAqlkAXQjzARiyAAIgegBg");
	this.shape_4.setTransform(52.5892,5.0568,0.1174,0.1174);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CBCACA").s().p("AjfMdQhohBhQh4Qipj9AAlnQAAllCpj+QBQh4BohBQBrhEB0AAQB2AABrBEQBnBCBQB3QCpD+AAFlQAAFnipD9QhQB4hnBBQhrBEh2AAQh0AAhrhEg");
	this.shape_5.setTransform(52.6391,33.3931,0.1174,0.1174);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#DCDCDC").s().p("EgJ5AhCQh5gvgrgwMAAAg/NIMdi3IMeC3MAAAA/NQgrAwh5AvQjyBgmIAAQmGAAjzhgg");
	this.shape_6.setTransform(52.5863,32.9703,0.1174,0.1174);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EEEEEE").s().p("Am9H9QjcgxgOgwQgLgog2g2Ig0guIAAsdQAAgnF/AHQDAADC/ALIAfBwIAfhwIF/gOQF/gHgBAnIAAMdIg0AuQg2A2gLAoQgNAwjcAxQjhAzjeAAQjcAAjhgzg");
	this.shape_7.setTransform(52.5804,62.8573,0.1174,0.1174);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

	// text
	this.text = new cjs.Text("דבק סטיק", "15px 'Arial'", "#404441");
	this.text.textAlign = "center";
	this.text.lineHeight = 19;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(52,74.55);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(2).to({color:"#CCCCCC"},0).wait(1));

	// glow
	this.instance = new lib.glow();
	this.instance.setTransform(52.4,36,1,1,0,0,0,26.3,43.5);
	this.instance._off = true;
	this.instance.filters = [new cjs.BlurFilter(50, 50, 1)];
	this.instance.cache(-2,-2,57,91);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,-32.5,120,140);


(lib.card = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.stop();
	}
	this.frame_7 = function() {
		this.stop();
	}
	this.frame_8 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1).call(this.frame_8).wait(1).call(this.frame_9).wait(1));

	// pic
	this.instance = new lib.slime();
	this.instance.setTransform(-176.5,-154,0.8313,0.8313,0,0,180);

	this.instance_1 = new lib.owl();
	this.instance_1.setTransform(-271.5,-224,0.9872,0.9872,0,0,180);

	this.instance_2 = new lib.airballon();
	this.instance_2.setTransform(-504,-224,0.9872,0.9872);

	this.instance_3 = new lib.scrapbook();
	this.instance_3.setTransform(-513,-130,0.8831,0.8831);

	this.instance_4 = new lib.string();
	this.instance_4.setTransform(-227.1,-132,0.7089,0.7089,0,0,180);

	this.instance_5 = new lib.mosaic();
	this.instance_5.setTransform(-517,-132,0.8057,0.8057);

	this.instance_6 = new lib.feather();
	this.instance_6.setTransform(-196.9,-159,0.8791,0.8791,0,0,180);

	this.instance_7 = new lib.stained();
	this.instance_7.setTransform(-522,-153,0.5465,0.5465);

	this.instance_8 = new lib.quilling();
	this.instance_8.setTransform(-510,-153,0.5465,0.5465);

	this.instance_9 = new lib.rose();
	this.instance_9.setTransform(-298.5,-153,0.7127,0.7127,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).wait(1));

	// numbers
	this.text = new cjs.Text(".1\n\n.2\n.3\n\n.4\n.5", "bold 25px 'Arial'", "#404441");
	this.text.textAlign = "right";
	this.text.lineHeight = 29;
	this.text.lineWidth = 26;
	this.text.parent = this;
	this.text.setTransform(362.05,-72.75);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({text:".1\n.2\n\n.3\n\n.4\n.5"},0).wait(1).to({text:".1\n.2\n.3\n.4\n.5"},0).wait(1).to({text:".1\n.2\n\n.3\n.4"},0).wait(1).to({text:".1\n.2\n.3\n.4\n.5\n.6\n.7\n.8"},0).wait(1).to({text:".1\n\n.2\n.3\n\n.4\n\n.5"},0).wait(1).to({text:".1\n.2\n.3\n.4"},0).wait(1).to({text:".1\n.2\n.3\n.4\n.5\n\n.6\n.7"},0).wait(1).to({text:".1\n\n.2\n.3\n\n.4\n.5"},0).wait(1).to({text:".1\n.2\n\n.3\n\n.4\n.5\n.6"},0).wait(1));

	// text
	this.text_1 = new cjs.Text("!מומלץ לכסות את משטח העבודה בעיתונים/ניילונים כדי למנוע לכלוך", "25px 'Arial'", "#404441");
	this.text_1.textAlign = "right";
	this.text_1.lineHeight = 48;
	this.text_1.lineWidth = 878;
	this.text_1.parent = this;
	this.text_1.setTransform(405.6,196.3);

	this.text_2 = new cjs.Text("ערבבו בכוס מים חמים כפית שטוחה של אבקת בוראקס\nערבבו בקערה דבק פלסטי עם צבע מאכל\nערבבו לתוך הדבק קצת מתמיסת הבוראקס בהדרגה עד שהסליים נהיה לא דביק\nלושו את הסליים עד שיגיע למרקם הרצוי\n!הוסיפו איזה קישוטים שבא לכם", "25px 'Arial'", "#404441");
	this.text_2.textAlign = "right";
	this.text_2.lineHeight = 29;
	this.text_2.lineWidth = 522;
	this.text_2.parent = this;
	this.text_2.setTransform(334.7,-72.75);

	this.text_3 = new cjs.Text("בוראקס, צבע, קישוטים, מים", "25px 'Arial'", "#404441");
	this.text_3.textAlign = "right";
	this.text_3.lineHeight = 48;
	this.text_3.lineWidth = 477;
	this.text_3.parent = this;
	this.text_3.setTransform(362.85,-129.15);

	this.text_4 = new cjs.Text("סליים", "80px 'David'", "#404441");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 81;
	this.text_4.lineWidth = 481;
	this.text_4.parent = this;
	this.text_4.setTransform(-28.15,-245.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_4,p:{text:"סליים"}},{t:this.text_3,p:{text:"בוראקס, צבע, קישוטים, מים",lineHeight:47.95,lineWidth:477}},{t:this.text_2,p:{text:"ערבבו בכוס מים חמים כפית שטוחה של אבקת בוראקס\nערבבו בקערה דבק פלסטי עם צבע מאכל\nערבבו לתוך הדבק קצת מתמיסת הבוראקס בהדרגה עד שהסליים נהיה לא דביק\nלושו את הסליים עד שיגיע למרקם הרצוי\n!הוסיפו איזה קישוטים שבא לכם",lineWidth:522,x:334.7}},{t:this.text_1,p:{text:"!מומלץ לכסות את משטח העבודה בעיתונים/ניילונים כדי למנוע לכלוך",lineHeight:47.95,lineWidth:878}}]}).to({state:[{t:this.text_4,p:{text:"ינשוף טואלט"}},{t:this.text_3,p:{text:"גליל נייר טואלט, דפי סול צבעוניים",lineHeight:47.95,lineWidth:477}},{t:this.text_2,p:{text:"גזרו מהסול מלבן בגודל של פריסת גליל נייר הטואלט\nהדביקו בעזרת דבק הסיליקון את הסול על הגליל, כך שיצפה אותו, וחכו כ-5 דקות עד שיתייבש\nגזרו מהסול בצבעים שונים צורות נוספות לקישוט הינשוף: עיגולים לעיניים, משולש קטן למקור, וכנפיים \nהדביקו את כל הצורות על הגליל\n!הינשוף שלכם מוכן",lineWidth:602,x:334.7}},{t:this.text_1,p:{text:"!ניתן להוסיף עיניים זזות, או להוסיף לינשוף סרט נוצה כדי שיהיה פרוותי",lineHeight:27.95,lineWidth:920}}]},1).to({state:[{t:this.text_4,p:{text:"כדור פורח"}},{t:this.text_3,p:{text:"בריסטולים צבעוניים, סול, חוט",lineHeight:47.95,lineWidth:477}},{t:this.text_2,p:{text:"גזרו מהבריסטולים בצעוניים עיגולים כמספר הצבעים שתרצו\nקפלו כל עיגול ל-2 חצאים שווים\nהדביקו את הצדדים החיצוניים של כל עיגול לעיגול אחר\nלפני סגירת הכדור השלם, הדביקו את חוט התלייה במרכזו\nניתן להוסיף גם סלסלה וענן כקישוט",lineWidth:681,x:334.45}},{t:this.text_1,p:{text:"!אפשר לחתוך כמה שכבות של בריסטול בו זמנית כדי לחסוך חיתוכים",lineHeight:47.95,lineWidth:878}}]},1).to({state:[{t:this.text_4,p:{text:"סקראפבוק"}},{t:this.text_3,p:{text:"תמונות, מדבקות, וואשי טייפ, ניירות, טושים",lineHeight:47.95,lineWidth:477}},{t:this.text_2,p:{text:"הדפיסו תמונות שסביבן תרצו לקשט\nהדביקו את התמונות על הדף בעזרת סרט דבק דו צדדי\nקשטו מסביב במדבקות ובוואשי טייפ\n!אפשר להוסיף גם צורות מסול שיוסיפו עומק",lineWidth:493,x:334}},{t:this.text_1,p:{text:"ניתן להשתמש בשבלונות של אותיות או במדבקות מוכנות בצורת אותיות",lineHeight:47.95,lineWidth:878}}]},1).to({state:[{t:this.text_4,p:{text:"כדור חוטים"}},{t:this.text_3,p:{text:"חוטי נייר, בלון",lineHeight:47.95,lineWidth:477}},{t:this.text_2,p:{text:"ערבבו בקערה דבק פלסטי מדולל עם קצת מים\nטבלו את חוט הנייר בתוך התערובת\nנפחו בלון לגודל הכדור הרצוי\nלפפו את חוט הנייר סביב הבלון כרצונכם\nחכו 24 שעות בסבלנות שהדבק יתייבש\nלאחר הייבוש, הפרידו בעדינות את החוט מהבלון\nפוצצו את הבלון וחלצו אותו מאחד החורים\n!כדור החוטים שלכם מוכן",lineWidth:538,x:331.45}},{t:this.text_1,p:{text:"!אפשר להכניס לתוך הכדור אורות וליצור ממנו אהיל מגניב",lineHeight:47.95,lineWidth:878}}]},1).to({state:[{t:this.text_4,p:{text:"פסיפס"}},{t:this.text_3,p:{text:"(אבני פסיפס, מצע לפסיפס (כדאי מעץ",lineHeight:47.95,lineWidth:477}},{t:this.text_2,p:{text:"תכננו מראש את הפסיפס שלכם ובחרו את הצבעים\nציירו על המשטח את הדימוי שבחרתם\nבחרו מראש כמות אבנים קטנה עבור חלק מהפסיפס וסדרו אותן בצד לפי התכנון\nמרחו מעט דבק על החלק הרצוי והדביקו אותן במקום\nהמשיכו למלא את המשטח באבני פסיפס בהדרגה: קצת בכל פעם, עד שכולו יהיה מלא",lineWidth:525,x:333.45}},{t:this.text_1,p:{text:"בסוף התהליך אפשר למרוח דבק פלסטי על האבנים כדי שיתפקד כלכה מגינה",lineHeight:47.95,lineWidth:919}}]},1).to({state:[{t:this.text_4,p:{text:"נוצה מעיתונים"}},{t:this.text_3,p:{text:"נייר עיתון, בריסטול",lineHeight:47.95,lineWidth:477}},{t:this.text_2,p:{text:"מרחו דבק על צד אחד של נייר העיתון\nגלגלו את הנייר על הצד הדביק\nהניחו לגלילי נייר העיתון זמן להתייבש\nהדביקו את גלילי הנייר זה לזה, לצורת נוצה",lineWidth:527,x:334}},{t:this.text_1,p:{text:"השתדלו שגלילי הנייר יהיו ברוחב זהה, אחרת זה יראה מוזר",lineHeight:47.95,lineWidth:878}}]},1).to({state:[{t:this.text_4,p:{text:"ויטראז' לחלון"}},{t:this.text_3,p:{text:"בריסטול שחור, צלופן צבעוני",lineHeight:47.95,lineWidth:477}},{t:this.text_2,p:{text:"קפלו את הבריסטול ל-2 חצאים שווים\nסמנו בעיפרון על גבי הבריסטול את הדימוי שתרצו\nגזרו משתי השכבות של הבריסטול את החלקים הרצויים\nגזרו מהצלופן הצבעוני את הצבעים הרצויים לפי הצורות\nהדביקו את הצלופן בין שתי שכבות הבריסטול עם דבק הסיליקון\nהוסיפו שכבת דבק נוספת על החיבורים כדי לחבר בין שני חלקי הבריסטול",lineWidth:608,x:330.7}},{t:this.text_1,p:{text:"היזהרו עם כמות הדבק, כדי למנוע זליגה של הדבק לחלקי הויטראז' השקופים",lineHeight:47.95,lineWidth:878}}]},1).to({state:[{t:this.text_4,p:{text:"קווילינג"}},{t:this.text_3,p:{text:"נייר לקווילינג, מחט לקווילינג, קרטון ביצוע",lineHeight:27.95,lineWidth:604}},{t:this.text_2,p:{text:"השחילו את הקצה של רצועת הנייר לתוך מחט הקווילינג וסובבו אותה כדי ללפף את הנייר לצורת ספירלה צפופה\nהוציאו את הנייר בעדינות מתוך החריץ\nעצבו את הספירלה המגולגלת לצורה הרצויה בעזרת האצבעות\nהדביקו את קצה רצועת הנייר כדי שלא יזוז\nהדביקו על קרטון הביצוע את הצורות המוכנות לפי הצורך",lineWidth:622,x:333.45}},{t:this.text_1,p:{text:"תכננו מראש איך אתם הולכים ליצור את הצורות הרצויות בעזרת גלגולי הנייר",lineHeight:47.95,lineWidth:878}}]},1).to({state:[{t:this.text_4,p:{text:"ורד קרפ"}},{t:this.text_3,p:{text:"נייר קרפ איטלקי, חוט מתכת או מקל עץ",lineHeight:47.95,lineWidth:477}},{t:this.text_2,p:{text:"גזרו את נייר הקרפ בצורת עלים של ורד\nגלגלו כל עלה סביב גליל צר כמו עיפרון, ומתחו את קצוותיו בעזרת האצבעות\nגלגלו את אחד העלים לתוך עצמו, והדביקו אותו סביב קצה החוט או המקל שישמש כגבעול\nהדביקו כל עלה נוסף בתורו על גבי העלה הקודם\nלפפו והדביקו רצועת נייר קרפ ירוק בקצה התחתון של הפרח\nניתן להוסיף עלים נוספים על הגבעול",lineWidth:644,x:331.85}},{t:this.text_1,p:{text:"להוספת נפח, אפשר להתחיל מכדור קטן מנייר אלומיניום, סביבו עוטפים את הפרח",lineHeight:27.95,lineWidth:929}}]},1).wait(1));

	// seifim
	this.text_5 = new cjs.Text("!טיפ", "35px 'David'", "#404441");
	this.text_5.lineHeight = 54;
	this.text_5.lineWidth = 71;
	this.text_5.parent = this;
	this.text_5.setTransform(423.55,194);

	this.text_6 = new cjs.Text(":חומרים\n:שלבי הכנה", "35px 'David'", "#404441");
	this.text_6.lineHeight = 54;
	this.text_6.lineWidth = 173;
	this.text_6.parent = this;
	this.text_6.setTransform(385.7,-133.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_6},{t:this.text_5}]}).wait(10));

	// X
	this.cardXg = new lib.cardXg();
	this.cardXg.name = "cardXg";
	this.cardXg.setTransform(450.45,-215.95,1,1,0,0,0,27.6,26.9);
	new cjs.ButtonHelper(this.cardXg, 0, 1, 2);

	this.cardXy = new lib.cardXy();
	this.cardXy.name = "cardXy";
	this.cardXy.setTransform(450.3,-216,1,1,0,0,0,27.6,26.9);
	new cjs.ButtonHelper(this.cardXy, 0, 1, 2);

	this.cardXr = new lib.cardXr();
	this.cardXr.name = "cardXr";
	this.cardXr.setTransform(450.45,-215.95,1,1,0,0,0,27.6,26.9);
	new cjs.ButtonHelper(this.cardXr, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.cardXg}]}).to({state:[{t:this.cardXy}]},4).to({state:[{t:this.cardXr}]},3).wait(3));

	// back
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#548235").ss(16,1,1).p("EhT4gBaQAIihADiiQACimgBimQAAh7gBh6QgBilACilQAAhYAGhaQABgQgCgRQgHgxAAgyQABhJgBhNQADgCADgCQACgCACgDQADgDABgDQACgEABgEQABgDABgEQABgEAAgFQABgFAAgEQAAgGgBgGQAAgKAAgKQAAgFAAgFIAoh4QAIgHAGgMQAJgPAEgQQAEgUAGgRQAUg+Afg5QCrk8FOiGQBggmBmgTQAngGAoAAQEfgBEagPQAAgCABgDQCcgDCaAOQAygBAyABQASAAAQAFQAvAMAxgIQAHAJAMADQAQAEAPgFQAcACAdADQAwAIAtgKQAjgFAtAAQAUgCAUgDQDkgYDygGQB4gGCCACQARADASADQBCAHBFgDQAmgBApAGQAHgBAIADQAaALAegCQAygGAyAAQARACASAFQAbAJAcgFQARACARACQBOAKBPgGQBtgNB3gBQCJgLCaAGQALAEAMAEQBfgBBcgHQEBgNEHADQAjAAAjAAQAPACARAFQAcAKAeAAQBBgHBBAAQAGAHAKAAQAlAJAnACQBOAGBNAAQBXgBBVgJQEHgIEVAAQBqAABqANQAiAFAiAAQCtAECmgjQAugLBBAIQCpAACrgCQBkgBBiAMQAKACAMgBQBlgGBjAOQA9AJA7gHQCagCCcgBQC8gCC7AKQAQACAQADQBcAEBbgEQAJAHAMABQHGAMGzgeQA3AAA3AAQAjAAAjAAQAIANANAEQAQAHAPgEQAkgDAlAJQBhAZBbAnQDFBUCDCrQBqCKA1CmQAWBEAKBMQAQB/gFCDQgEBPABBQIgKAAIAUOiIgKAAIAKUnIgKAAIAAL4IgKAAQgBBDAKA/QAFAggEAwQgEAzAGAxQADAVgMAQQgBACgCABQACAfgGAcQgNBAgXA9QgcBNgoBIQg4BohRBWQjEDRkTBRQh0Aih3AEQiBAJiCAAQjdgMjlACIAAAKIhGAAIAAAKIuigUIAAAOIiMAGIAAAKQgUAAgUgBQhQgBhQgBQgrgFgvgBQhfgChfgJQh/gGiFgEIAAAUIiWAAIAAAKQgsAFgkgFQh4AAh4gCQgBAAAAACQhVgMhUgGQgogBgogBIAAAKIhQAAIAAAKQgWABgcAAQiRgCiRACQiXADiLgHQhRgEhQgHQg6gIg9AAQgBAAAAgDQiPgGiRABIAAAKIhQAAIAAAKIhkAAIAAAKQgngDgogDQgnAAghgEQgpgJgmgEQiBgJiDABQhBABhBAAIAAAKIiqAAIAAAKInWgKIAAAKIiWAAIAAAKQgigBgkABQiWABiWgDQgBAAAAgCQh0gGhxgKQhygMh+ACIAAAKIwuAAIAAAKIkiAAIAAAKQiIABiGgBQgcgEgdgEQg4gCg5AAQgNgDgMgDQjsgnjFiEQhbg+hOhKQiyiphQjyQgnh5gNh9QgCgQAAgPQAAgugFgsQgGg2gBg3QgDjFAIi2QAFgCACgDQADgFgBgGQgFgWACgXQARiZgKikQgIiSAFiSQAAgVgCgVQgDgQgCgOQgHg7AAg8QgBi+ABi9g");
	this.shape.setTransform(-7.1401,-7.9389,1.021,1.021);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(234,243,229,0.996)").s().p("EAYtAqzQh4AAh4gCIgBACQhVgMhUgGIhQgCIAAAKIhQAAIAAAKQgWABgcAAQiRgCiRACQiXADiLgHQhRgEhQgHQg6gIg9AAIgBgDQiPgGiRABIAAAKIhQAAIAAAKIhkAAIAAAKIhPgGQgnAAghgEQgpgJgmgEQiBgJiDABIiCABIAAAKIiqAAIAAAKInWgKIAAAKIiWAAIAAAKQgigBgkABQiWABiWgDIgBgCQh0gGhxgKQhygMh+ACIAAAKIwuAAIAAAKIkiAAIAAAKQiIABiGgBIg5gIQg4gCg5AAIgZgGQjsgnjFiEQhbg+hOhKQiyiphQjyQgnh5gNh9QgCgQAAgPQAAgugFgsQgGg2gBg3QgDjFAIi2QAFgCACgDQADgFgBgGQgFgWACgXQARiZgKikQgIiSAFiSQAAgVgCgVIgFgeQgHg7AAg8IAAl7QAIihADiiQACimgBimIgBj1QgBilACilQAAhYAGhaQABgQgCgRQgHgxAAgyIAAiWIAGgEIAEgFIAEgGIADgIIACgHIABgJIABgJIgBgMIAAgUIAAgKIAoh4QAIgHAGgMQAJgPAEgQQAEgUAGgRQAUg+Afg5QCrk8FOiGQBggmBmgTQAngGAoAAQEfgBEagPIABgFQCcgDCaAOIBkAAQASAAAQAFQAvAMAxgIQAHAJAMADQAQAEAPgFIA5AFQAwAIAtgKQAjgFAtAAIAogFQDkgYDygGQB4gGCCACIAjAGQBCAHBFgDQAmgBApAGQAHgBAIADQAaALAegCQAygGAyAAQARACASAFQAbAJAcgFIAiAEQBOAKBPgGQBtgNB3gBQCJgLCaAGIAXAIQBfgBBcgHQEBgNEHADIBGAAQAPACARAFQAcAKAeAAQBBgHBBAAQAGAHAKAAQAlAJAnACQBOAGBNAAQBXgBBVgJQEHgIEVAAQBqAABqANQAiAFAiAAQCtAECmgjQAugLBBAIQCpAACrgCQBkgBBiAMQAKACAMgBQBlgGBjAOQA9AJA7gHIE2gDQC8gCC7AKIAgAFQBcAEBbgEQAJAHAMABQHGAMGzgeIBuAAIBGAAQAIANANAEQAQAHAPgEQAkgDAlAJQBhAZBbAnQDFBUCDCrQBqCKA1CmQAWBEAKBMQAQB/gFCDQgEBPABBQIgKAAIAUOiIgKAAIAKUnIgKAAIAAL4IgKAAQgBBDAKA/QAFAggEAwQgEAzAGAxQADAVgMAQIgDADQACAfgGAcQgNBAgXA9QgcBNgoBIQg4BohRBWQjEDRkTBRQh0Aih3AEQiBAJiCAAQjdgMjlACIAAAKIhGAAIAAAKIuigUIAAAOIiMAGIAAAKIgogBIiggCQgrgFgvgBQhfgChfgJQh/gGiFgEIAAAUIiWAAIAAAKQgWACgUAAQgUAAgSgCg");
	this.shape_1.setTransform(-7.1401,-7.9389,1.021,1.021);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFC409").ss(16,1,1).p("EhVpgBcQAIilADilQADipgBiqQgBh+AAh8QgBioABipQABhaAGhbQABgRgDgRQgHgyABgzQAAhLgBhOQADgCADgCQADgDACgDQACgDACgDQABgEABgEQACgDABgEQABgFAAgEQAAgFAAgFQAAgGAAgGQgBgKAAgKQAAgFAAgFIAph7QAIgHAHgMQAJgQAEgQQAEgUAGgSQAVg/Agg7QCulCFViJQBignBogTQAogGApAAQElgBEggPQAAgDABgCQCfgDCdANQAzAAAzAAQATABAQAFQAwAMAygIQAHAJAMADQARAEAPgFQAdACAeADQAxAIAtgKQAkgFAuAAQAUgCAVgDQDogYD4gHQB7gGCEACQASADASAEQBDAHBGgDQAngBArAGQAHgCAHADQAbALAfgBQAzgGAzAAQARACATAFQAbAJAdgFQARACARACQBQAKBRgGQBvgOB6AAQCMgLCcAGQAMADAMAEQBhAABegHQEGgOENADQAkABAjAAQAQACARAFQAdAJAfABQBCgHBCAAQAHAGAJABQAmAJAoACQBQAGBPAAQBYgBBXgJQENgIEaAAQBtAABsANQAiAFAjAAQCxAECpgkQAvgLBCAJQCuAACugCQBmgBBkALQALADALgBQBngGBmANQA+AKA8gHQCegCCfgCQC/gBC/AKQARACAQADQBeAEBdgEQAKAHALABQHQAMG8geQA4AAA4AAQAkAAAkAAQAIANANAEQARAIAPgFQAlgDAmAKQBjAZBcAoQDKBWCFCuQBtCNA2CqQAWBFAKBNQARCCgFCGQgEBRABBSIgLAAIAVO1IgKAAIAKVDIgKAAIAAMIIgLAAQAABEAKBAQAFAhgEAxQgFA0AHAyQADAWgMAQQgCACgCABQADAggGAcQgOBBgXA/QgdBPgoBJQg6BqhSBYQjJDWkZBSQh2Ajh5AEQiEAJiFAAQjigMjqACIAAAKIhHAAIAAALIu2gVIAAAOIiPAHIAAAKQgTgBgVAAQhSgBhSgCQgsgFgwgBQhggChigJQiBgGiIgEIAAAVIiZAAIAAAKQgtAEglgEQh7AAh6gDQgBAAAAACQhXgMhWgGQgogBgpgBIAAALIhSAAIAAAKQgWABgdgBQiUgCiUADQiaADiOgIQhTgEhRgHQg8gIg+AAQgBAAAAgDQiSgGiUABIAAAKIhSAAIAAALIhmAAIAAAKQgngEgpgCQgogBgigEQgqgJgngEQiDgJiGABQhDABhCAAIAAAKIiuAAIAAALInggLIAAALIiZAAIAAAKQgigBglAAQiZABiZgDQgBAAAAgBQh2gHh0gKQh1gMiAACIAAAKIxFAAIAAALIkoAAIAAAKQiLABiJgBQgcgEgdgEQg6gCg6AAQgNgEgNgDQjwgojJiHQheg/hPhLQi2ithRj3Qgph8gNh/QgBgQAAgQQAAgvgGgsQgGg4gBg4QgDjJAIi6QAFgCADgDQADgFgCgGQgFgXADgXQAQicgJioQgJiVAFiVQABgWgDgVQgDgRgCgNQgHg9AAg9QgBjCABjBg");
	this.shape_2.setTransform(-7.1409,-7.9472);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFF6DD").s().p("EAZOArtQh7AAh6gDIgBACQhXgMhWgGIhRgCIAAALIhSAAIAAAKQgWABgdgBQiUgCiUADQiaADiOgIQhTgEhRgHQg8gIg+AAIgBgDQiSgGiUABIAAAKIhSAAIAAALIhmAAIAAAKIhQgGQgogBgigEQgqgJgngEQiDgJiGABIiFABIAAAKIiuAAIAAALInggLIAAALIiZAAIAAAKQgigBglAAQiZABiZgDIgBgBQh2gHh0gKQh1gMiAACIAAAKIxFAAIAAALIkoAAIAAAKQiLABiJgBIg5gIQg6gCg6AAIgagHQjwgojJiHQheg/hPhLQi2ithRj3Qgph8gNh/QgBgQAAgQQAAgvgGgsQgGg4gBg4QgDjJAIi6QAFgCADgDQADgFgCgGQgFgXADgXQAQicgJioQgJiVAFiVQABgWgDgVIgFgeQgHg9AAg9IAAmDQAIilADilQADipgBiqIgBj6QgBioABipQABhaAGhbQABgRgDgRQgHgyABgzQAAhLgBhOIAGgEIAFgGIAEgGIACgIIADgHIABgJIAAgKIAAgMIgBgUIAAgKIAph7QAIgHAHgMQAJgQAEgQQAEgUAGgSQAVg/Agg7QCulCFViJQBignBogTQAogGApAAQElgBEggPIABgFQCfgDCdANIBmAAQATABAQAFQAwAMAygIQAHAJAMADQARAEAPgFIA7AFQAxAIAtgKQAkgFAuAAIApgFQDogYD4gHQB7gGCEACIAkAHQBDAHBGgDQAngBArAGQAHgCAHADQAbALAfgBQAzgGAzAAQARACATAFQAbAJAdgFIAiAEQBQAKBRgGQBvgOB6AAQCMgLCcAGIAYAHQBhAABegHQEGgOENADIBHABQAQACARAFQAdAJAfABQBCgHBCAAQAHAGAJABQAmAJAoACQBQAGBPAAQBYgBBXgJQENgIEaAAQBtAABsANQAiAFAjAAQCxAECpgkQAvgLBCAJQCuAACugCQBmgBBkALQALADALgBQBngGBmANQA+AKA8gHIE9gEQC/gBC/AKIAhAFQBeAEBdgEQAKAHALABQHQAMG8geIBwAAIBIAAQAIANANAEQARAIAPgFQAlgDAmAKQBjAZBcAoQDKBWCFCuQBtCNA2CqQAWBFAKBNQARCCgFCGQgEBRABBSIgLAAIAVO1IgKAAIAKVDIgKAAIAAMIIgLAAQAABEAKBAQAFAhgEAxQgFA0AHAyQADAWgMAQIgEADQADAggGAcQgOBBgXA/QgdBPgoBJQg6BqhSBYQjJDWkZBSQh2Ajh5AEQiEAJiFAAQjigMjqACIAAAKIhHAAIAAALIu2gVIAAAOIiPAHIAAAKIgogBIikgDQgsgFgwgBQhggChigJQiBgGiIgEIAAAVIiZAAIAAAKQgWACgVAAQgUAAgTgCg");
	this.shape_3.setTransform(-7.1409,-7.9472);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#ED422B").ss(16,1,1).p("EhT4gBaQAIihADiiQACimgBimQAAh7gBh6QgBilACilQAAhYAGhaQABgQgCgRQgHgxAAgyQABhJgBhNQADgCADgCQACgCACgDQADgDABgDQACgEABgEQABgDABgEQABgEAAgFQABgFAAgEQAAgGgBgGQAAgKAAgKQAAgFAAgFIAoh4QAIgHAGgMQAJgPAEgQQAEgUAGgRQAUg+Afg5QCrk8FOiGQBggmBmgTQAngGAoAAQEfgBEagPQAAgCABgDQCcgDCaAOQAygBAyABQASAAAQAFQAvAMAxgIQAHAJAMADQAQAEAPgFQAcACAdADQAwAIAtgKQAjgFAtAAQAUgCAUgDQDkgYDygGQB4gGCCACQARADASADQBCAHBFgDQAmgBApAGQAHgBAIADQAaALAegCQAygGAyAAQARACASAFQAbAJAcgFQARACARACQBOAKBPgGQBtgNB3gBQCJgLCaAGQALAEAMAEQBfgBBcgHQEBgNEHADQAjAAAjAAQAPACARAFQAcAKAeAAQBBgHBBAAQAGAHAKAAQAlAJAnACQBOAGBNAAQBXgBBVgJQEHgIEVAAQBqAABqANQAiAFAiAAQCtAECmgjQAugLBBAIQCpAACrgCQBkgBBiAMQAKACAMgBQBlgGBjAOQA9AJA7gHQCagCCcgBQC8gCC7AKQAQACAQADQBcAEBbgEQAJAHAMABQHGAMGzgeQA3AAA3AAQAjAAAjAAQAIANANAEQAQAHAPgEQAkgDAlAJQBhAZBbAnQDFBUCDCrQBqCKA1CmQAWBEAKBMQAQB/gFCDQgEBPABBQIgKAAIAUOiIgKAAIAKUnIgKAAIAAL4IgKAAQgBBDAKA/QAFAggEAwQgEAzAGAxQADAVgMAQQgBACgCABQACAfgGAcQgNBAgXA9QgcBNgoBIQg4BohRBWQjEDRkTBRQh0Aih3AEQiBAJiCAAQjdgMjlACIAAAKIhGAAIAAAKIuigUIAAAOIiMAGIAAAKQgUAAgUgBQhQgBhQgBQgrgFgvgBQhfgChfgJQh/gGiFgEIAAAUIiWAAIAAAKQgsAFgkgFQh4AAh4gCQgBAAAAACQhVgMhUgGQgogBgogBIAAAKIhQAAIAAAKQgWABgcAAQiRgCiRACQiXADiLgHQhRgEhQgHQg6gIg9AAQgBAAAAgDQiPgGiRABIAAAKIhQAAIAAAKIhkAAIAAAKQgngDgogDQgnAAghgEQgpgJgmgEQiBgJiDABQhBABhBAAIAAAKIiqAAIAAAKInWgKIAAAKIiWAAIAAAKQgigBgkABQiWABiWgDQgBAAAAgCQh0gGhxgKQhygMh+ACIAAAKIwuAAIAAAKIkiAAIAAAKQiIABiGgBQgcgEgdgEQg4gCg5AAQgNgDgMgDQjsgnjFiEQhbg+hOhKQiyiphQjyQgnh5gNh9QgCgQAAgPQAAgugFgsQgGg2gBg3QgDjFAIi2QAFgCACgDQADgFgBgGQgFgWACgXQARiZgKikQgIiSAFiSQAAgVgCgVQgDgQgCgOQgHg7AAg8QgBi+ABi9g");
	this.shape_4.setTransform(-7.1401,-7.9389,1.021,1.021);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FDEAE7").s().p("EAYtAqzQh4AAh4gCIgBACQhVgMhUgGIhQgCIAAAKIhQAAIAAAKQgWABgcAAQiRgCiRACQiXADiLgHQhRgEhQgHQg6gIg9AAIgBgDQiPgGiRABIAAAKIhQAAIAAAKIhkAAIAAAKIhPgGQgnAAghgEQgpgJgmgEQiBgJiDABIiCABIAAAKIiqAAIAAAKInWgKIAAAKIiWAAIAAAKQgigBgkABQiWABiWgDIgBgCQh0gGhxgKQhygMh+ACIAAAKIwuAAIAAAKIkiAAIAAAKQiIABiGgBIg5gIQg4gCg5AAIgZgGQjsgnjFiEQhbg+hOhKQiyiphQjyQgnh5gNh9QgCgQAAgPQAAgugFgsQgGg2gBg3QgDjFAIi2QAFgCACgDQADgFgBgGQgFgWACgXQARiZgKikQgIiSAFiSQAAgVgCgVIgFgeQgHg7AAg8IAAl7QAIihADiiQACimgBimIgBj1QgBilACilQAAhYAGhaQABgQgCgRQgHgxAAgyIAAiWIAGgEIAEgFIAEgGIADgIIACgHIABgJIABgJIgBgMIAAgUIAAgKIAoh4QAIgHAGgMQAJgPAEgQQAEgUAGgRQAUg+Afg5QCrk8FOiGQBggmBmgTQAngGAoAAQEfgBEagPIABgFQCcgDCaAOIBkAAQASAAAQAFQAvAMAxgIQAHAJAMADQAQAEAPgFIA5AFQAwAIAtgKQAjgFAtAAIAogFQDkgYDygGQB4gGCCACIAjAGQBCAHBFgDQAmgBApAGQAHgBAIADQAaALAegCQAygGAyAAQARACASAFQAbAJAcgFIAiAEQBOAKBPgGQBtgNB3gBQCJgLCaAGIAXAIQBfgBBcgHQEBgNEHADIBGAAQAPACARAFQAcAKAeAAQBBgHBBAAQAGAHAKAAQAlAJAnACQBOAGBNAAQBXgBBVgJQEHgIEVAAQBqAABqANQAiAFAiAAQCtAECmgjQAugLBBAIQCpAACrgCQBkgBBiAMQAKACAMgBQBlgGBjAOQA9AJA7gHIE2gDQC8gCC7AKIAgAFQBcAEBbgEQAJAHAMABQHGAMGzgeIBuAAIBGAAQAIANANAEQAQAHAPgEQAkgDAlAJQBhAZBbAnQDFBUCDCrQBqCKA1CmQAWBEAKBMQAQB/gFCDQgEBPABBQIgKAAIAUOiIgKAAIAKUnIgKAAIAAL4IgKAAQgBBDAKA/QAFAggEAwQgEAzAGAxQADAVgMAQIgDADQACAfgGAcQgNBAgXA9QgcBNgoBIQg4BohRBWQjEDRkTBRQh0Aih3AEQiBAJiCAAQjdgMjlACIAAAKIhGAAIAAAKIuigUIAAAOIiMAGIAAAKIgogBIiggCQgrgFgvgBQhfgChfgJQh/gGiFgEIAAAUIiWAAIAAAKQgWACgUAAQgUAAgSgCg");
	this.shape_5.setTransform(-7.1401,-7.9389,1.021,1.021);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},4).to({state:[{t:this.shape_5},{t:this.shape_4}]},3).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-563.5,-295.8,1123.9,575.8);


(lib.aboutcard = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var self = this;
		stage.enableMouseOver(24);
		this.stop();
		
		this.hitbtn.addEventListener("click", hit);
		this.telemlink.addEventListener("click", telem);
		this.telemlink.addEventListener("mouseover", telemover);
		this.telemlink.addEventListener("mouseout", telemout);
		
		function hit() {
			window.open("https://www.hit.ac.il", "_blank");
		}
		
		function telem() {
			window.open("https://www.hit.ac.il/telem/overview", "_blank");
		}
		
		function telemover() {
				stage.cursor = "pointer";
			self.telemlink.gotoAndStop(1);
		}
		
		function telemout() {
				stage.cursor = "initial";
			self.telemlink.gotoAndStop(0);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// pic
	this.hitbtn = new lib.hitbtn();
	this.hitbtn.name = "hitbtn";
	this.hitbtn.setTransform(145.15,118.25,1,1,0,0,0,114.8,74.9);
	new cjs.ButtonHelper(this.hitbtn, 0, 1, 2, false, new lib.hitbtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.hitbtn).wait(1));

	// text
	this.telemlink = new lib.telemtext();
	this.telemlink.name = "telemlink";
	this.telemlink.setTransform(144.75,221.55,1,1,0,0,0,175.3,29.4);

	this.text = new cjs.Text("לספק רעיונות ומדריכים ליצירות שניתן לעשות בעזרת הדבקים השונים\n\nאלה שרתיאל, דניאל רביב, שחר כהן\n\n\"פרויקט משותף לקורסים \"ארגון ויצוג ידע\n\"ו-\"מבוא לתכנות אינטרקציה ואנימציה\n\nד\"ר מיטל אמזלג ונגה רזניק", "27px 'Arial'");
	this.text.textAlign = "right";
	this.text.lineHeight = 32;
	this.text.lineWidth = 505;
	this.text.parent = this;
	this.text.setTransform(253.15,-298.7);

	this.text_1 = new cjs.Text("אודות", "80px 'David'", "#404441");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 81;
	this.text_1.lineWidth = 309;
	this.text_1.parent = this;
	this.text_1.setTransform(137.85,-411.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1},{t:this.text},{t:this.telemlink}]}).wait(1));

	// seifim
	this.text_2 = new cjs.Text(":מטרת הייצוג\n:צוות הפרויקט\n:פותח במסגרת\n:מנחות", "42px 'David'", "#404441");
	this.text_2.lineHeight = 82;
	this.text_2.lineWidth = 239;
	this.text_2.parent = this;
	this.text_2.setTransform(271.4,-291.65);

	this.timeline.addTween(cjs.Tween.get(this.text_2).wait(1));

	// X
	this.cardXb = new lib.cardXb();
	this.cardXb.name = "cardXb";
	this.cardXb.setTransform(480.15,-371.9,1,1,0,0,0,27.6,33);
	new cjs.ButtonHelper(this.cardXb, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.cardXb).wait(1));

	// back
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#9DB6DF").ss(16,1,1).p("EhT4gBaQAIihADiiQACimgBimQAAh7gBh6QgBilACilQAAhYAGhaQABgQgCgRQgHgxAAgyQABhJgBhNQADgCADgCQACgCACgDQADgDABgDQACgEABgEQABgDABgEQABgEAAgFQABgFAAgEQAAgGgBgGQAAgKAAgKQAAgFAAgFIAoh4QAIgHAGgMQAJgPAEgQQAEgUAGgRQAUg+Afg5QCrk8FOiGQBggmBmgTQAngGAoAAQEfgBEagPQAAgCABgDQCcgDCaAOQAygBAyABQASAAAQAFQAvAMAxgIQAHAJAMADQAQAEAPgFQAcACAdADQAwAIAtgKQAjgFAtAAQAUgCAUgDQDkgYDygGQB4gGCCACQARADASADQBCAHBFgDQAmgBApAGQAHgBAIADQAaALAegCQAygGAyAAQARACASAFQAbAJAcgFQARACARACQBOAKBPgGQBtgNB3gBQCJgLCaAGQALAEAMAEQBfgBBcgHQEBgNEHADQAjAAAjAAQAPACARAFQAcAKAeAAQBBgHBBAAQAGAHAKAAQAlAJAnACQBOAGBNAAQBXgBBVgJQEHgIEVAAQBqAABqANQAiAFAiAAQCtAECmgjQAugLBBAIQCpAACrgCQBkgBBiAMQAKACAMgBQBlgGBjAOQA9AJA7gHQCagCCcgBQC8gCC7AKQAQACAQADQBcAEBbgEQAJAHAMABQHGAMGzgeQA3AAA3AAQAjAAAjAAQAIANANAEQAQAHAPgEQAkgDAlAJQBhAZBbAnQDFBUCDCrQBqCKA1CmQAWBEAKBMQAQB/gFCDQgEBPABBQIgKAAIAUOiIgKAAIAKUnIgKAAIAAL4IgKAAQgBBDAKA/QAFAggEAwQgEAzAGAxQADAVgMAQQgBACgCABQACAfgGAcQgNBAgXA9QgcBNgoBIQg4BohRBWQjEDRkTBRQh0Aih3AEQiBAJiCAAQjdgMjlACIAAAKIhGAAIAAAKIuigUIAAAOIiMAGIAAAKQgUAAgUgBQhQgBhQgBQgrgFgvgBQhfgChfgJQh/gGiFgEIAAAUIiWAAIAAAKQgsAFgkgFQh4AAh4gCQgBAAAAACQhVgMhUgGQgogBgogBIAAAKIhQAAIAAAKQgWABgcAAQiRgCiRACQiXADiLgHQhRgEhQgHQg6gIg9AAQgBAAAAgDQiPgGiRABIAAAKIhQAAIAAAKIhkAAIAAAKQgngDgogDQgnAAghgEQgpgJgmgEQiBgJiDABQhBABhBAAIAAAKIiqAAIAAAKInWgKIAAAKIiWAAIAAAKQgigBgkABQiWABiWgDQgBAAAAgCQh0gGhxgKQhygMh+ACIAAAKIwuAAIAAAKIkiAAIAAAKQiIABiGgBQgcgEgdgEQg4gCg5AAQgNgDgMgDQjsgnjFiEQhbg+hOhKQiyiphQjyQgnh5gNh9QgCgQAAgPQAAgugFgsQgGg2gBg3QgDjFAIi2QAFgCACgDQADgFgBgGQgFgWACgXQARiZgKikQgIiSAFiSQAAgVgCgVQgDgQgCgOQgHg7AAg8QgBi+ABi9g");
	this.shape.setTransform(141.2145,-88.2794,0.674,1.5734,90);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E5ECF7").s().p("EAYtAqzQh4AAh4gCIgBACQhVgMhUgGIhQgCIAAAKIhQAAIAAAKQgWABgcAAQiRgCiRACQiXADiLgHQhRgEhQgHQg6gIg9AAIgBgDQiPgGiRABIAAAKIhQAAIAAAKIhkAAIAAAKIhPgGQgnAAghgEQgpgJgmgEQiBgJiDABIiCABIAAAKIiqAAIAAAKInWgKIAAAKIiWAAIAAAKQgigBgkABQiWABiWgDIgBgCQh0gGhxgKQhygMh+ACIAAAKIwuAAIAAAKIkiAAIAAAKQiIABiGgBIg5gIQg4gCg5AAIgZgGQjsgnjFiEQhbg+hOhKQiyiphQjyQgnh5gNh9QgCgQAAgPQAAgugFgsQgGg2gBg3QgDjFAIi2QAFgCACgDQADgFgBgGQgFgWACgXQARiZgKikQgIiSAFiSQAAgVgCgVIgFgeQgHg7AAg8IAAl7QAIihADiiQACimgBimIgBj1QgBilACilQAAhYAGhaQABgQgCgRQgHgxAAgyIAAiWIAGgEIAEgFIAEgGIADgIIACgHIABgJIABgJIgBgMIAAgUIAAgKIAoh4QAIgHAGgMQAJgPAEgQQAEgUAGgRQAUg+Afg5QCrk8FOiGQBggmBmgTQAngGAoAAQEfgBEagPIABgFQCcgDCaAOIBkAAQASAAAQAFQAvAMAxgIQAHAJAMADQAQAEAPgFIA5AFQAwAIAtgKQAjgFAtAAIAogFQDkgYDygGQB4gGCCACIAjAGQBCAHBFgDQAmgBApAGQAHgBAIADQAaALAegCQAygGAyAAQARACASAFQAbAJAcgFIAiAEQBOAKBPgGQBtgNB3gBQCJgLCaAGIAXAIQBfgBBcgHQEBgNEHADIBGAAQAPACARAFQAcAKAeAAQBBgHBBAAQAGAHAKAAQAlAJAnACQBOAGBNAAQBXgBBVgJQEHgIEVAAQBqAABqANQAiAFAiAAQCtAECmgjQAugLBBAIQCpAACrgCQBkgBBiAMQAKACAMgBQBlgGBjAOQA9AJA7gHIE2gDQC8gCC7AKIAgAFQBcAEBbgEQAJAHAMABQHGAMGzgeIBuAAIBGAAQAIANANAEQAQAHAPgEQAkgDAlAJQBhAZBbAnQDFBUCDCrQBqCKA1CmQAWBEAKBMQAQB/gFCDQgEBPABBQIgKAAIAUOiIgKAAIAKUnIgKAAIAAL4IgKAAQgBBDAKA/QAFAggEAwQgEAzAGAxQADAVgMAQIgDADQACAfgGAcQgNBAgXA9QgcBNgoBIQg4BohRBWQjEDRkTBRQh0Aih3AEQiBAJiCAAQjdgMjlACIAAAKIhGAAIAAAKIuigUIAAAOIiMAGIAAAKIgogBIiggCQgrgFgvgBQhfgChfgJQh/gGiFgEIAAAUIiWAAIAAAKQgWACgUAAQgUAAgSgCg");
	this.shape_1.setTransform(141.2145,-88.2794,0.674,1.5734,90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// dark
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.498)").s().p("Eh5gBE2MAAAiJrMDzBAAAMAAACJrg");
	this.shape_2.setTransform(140.975,-114.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.aboutcard, new cjs.Rectangle(-636.7,-554.7,1555.4,881.2), null);


// stage content:
(lib.crafts = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var self = this;
		stage.enableMouseOver(24);
		
		var level = "none";
		var glue = "none";
		var slimeState = "disabled";
		var owlState = "disabled";
		var mobileState = "disabled";
		var scrapbookState = "disabled";
		var ballState = "disabled";
		var psifasState = "disabled";
		var featherState = "disabled";
		var vitrazState = "disabled";
		var quillingState = "disabled";
		var roseState = "disabled";
		
		self.card.visible = false;
		self.aboutcard.visible = false;
		levelColor();
		glueGray();
		levelListenersOn();
		craftDisableAll();
		glueListenersOff();
		self.gluetime.visible = false;
		self.instructMain.text = "בחרו מידת קושי כדי להתחיל";
		self.instructGlue1.text = "";
		self.instructGlue2.text = "";
		self.instructLevel1.text = "לחצו על מידת קושי כדי לבחור אותה או לבטל אותה";
		self.instructLevel2.text = "בחירה ב''הצג הכל'' תאפשר לסנן את היצירות לפי הדבקים שצמד ימין";
		
		//***********************************כרטיסיית המידע*****************************
		
		// כרטיס אודות
		self.aboutbtn.addEventListener("click", aboutCard);
		function aboutCard() {
			self.aboutcard.visible = true;
			self.aboutcard.cardXb.addEventListener("click", aboutX);
		}
		function aboutX() {
			self.aboutcard.visible = false;
		}
		
		//לחיצה על האיקס
		function closeCard() {
			self.card.visible = false;
			stage.cursor = "initial";
			craftAllOut();
			levelListenersOn();
			if (level == "all") {
				showLevel();
				self.instructGlue1.text = "עברו עם העכבר על הדבקים כדי לגלות";
				self.instructGlue2.text = "אילו יצירות ניתן ליצור איתם";
				if (glue == "none") {
					glueListenersOn();
					glueColor();
					craftActivateAll();
				} else {
					self.instructGlue1.text = "לחצו שוב על הדבק";
					self.instructGlue2.text = "כדי לשחרר את הקיבוע";
					glueListenersOff();
					levelListenersOff();
					glueGray();
					checkGlueState();
				}
			} else {
				self.instructGlue1.text = "עברו עם העכבר על יצירה כדי לראות";
				self.instructGlue1.text = "באילו דבקים יש להשתמש עבורה";
				checkLevelState();
				glueListenersOff();
				glueGray();
			}
		}
		
		//בדיקת הרמה המקובעת
		function checkLevelState() {
			craftDisableAll();
			if (level == "easy") {
				activateSlime();
				activateOwl();
				activateMobile();
				activateScrapbook();
			} else {
				if (level == "chal") {
					activateBall();
					activatePsifas();
					activateFeather();
				} else {
					if (level == "hard") {
						activateVitraz();
						activateQuilling();
						activateRose();
					}
				}
			}
		}
		
		//בדיקת הדבק המקובע
		function checkGlueState() {
			if (glue == "stick") {
				activateQuilling();
				self.stick.addEventListener("click", glueStick);
				self.stick.addEventListener("mouseover", glueStickOver);
				self.stick.addEventListener("mouseout", glueStickOut);
				self.stick.gotoAndStop(1);
			} else {
				if (glue == "plasti") {
					activateBall();
					activateSlime();
					activateFeather();
					self.plasti.addEventListener("click", gluePlasti);
					self.plasti.addEventListener("mouseover", gluePlastiOver);
					self.plasti.addEventListener("mouseout", gluePlastiOut);
					self.plasti.gotoAndStop(1);
				} else {
					if (glue == "silicon") {
						activateVitraz();
						activateMobile();
						activatePsifas();
						activateOwl();
						self.silicon.addEventListener("click", glueSilicon);
						self.silicon.addEventListener("mouseover", glueSiliconOver);
						self.silicon.addEventListener("mouseout", glueSiliconOut);
						self.silicon.gotoAndStop(1);
					} else {
						if (glue == "hot") {
							activateRose();
							self.hot.addEventListener("click", glueHot);
							self.hot.addEventListener("mouseover", glueHotOver);
							self.hot.addEventListener("mouseout", glueHotOut);
							self.hot.gotoAndStop(1);
						} else {
							activateScrapbook();
							activateMobile();
							self.tape.addEventListener("click", glueTape);
							self.tape.addEventListener("mouseover", glueTapeOver);
							self.tape.addEventListener("mouseout", glueTapeOut);
							self.tape.gotoAndStop(1);
						}
					}
				}
			}
		}
		
		
		
		//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~דבקים~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
		
		//הפעלת ליסנרים
		function glueListenersOn() {
			self.silicon.addEventListener("click", glueSilicon);
			self.hot.addEventListener("click", glueHot);
			self.plasti.addEventListener("click", gluePlasti);
			self.tape.addEventListener("click", glueTape);
			self.stick.addEventListener("click", glueStick);
			self.silicon.addEventListener("mouseover", glueSiliconOver);
			self.hot.addEventListener("mouseover", glueHotOver);
			self.plasti.addEventListener("mouseover", gluePlastiOver);
			self.tape.addEventListener("mouseover", glueTapeOver);
			self.stick.addEventListener("mouseover", glueStickOver);
			self.silicon.addEventListener("mouseout", glueSiliconOut);
			self.hot.addEventListener("mouseout", glueHotOut);
			self.plasti.addEventListener("mouseout", gluePlastiOut);
			self.tape.addEventListener("mouseout", glueTapeOut);
			self.stick.addEventListener("mouseout", glueStickOut);
		}
		
		//ביטול ליסנרים
		function glueListenersOff() {
			self.silicon.removeEventListener("click", glueSilicon);
			self.hot.removeEventListener("click", glueHot);
			self.plasti.removeEventListener("click", gluePlasti);
			self.tape.removeEventListener("click", glueTape);
			self.stick.removeEventListener("click", glueStick);
			self.silicon.removeEventListener("mouseover", glueSiliconOver);
			self.hot.removeEventListener("mouseover", glueHotOver);
			self.plasti.removeEventListener("mouseover", gluePlastiOver);
			self.tape.removeEventListener("mouseover", glueTapeOver);
			self.stick.removeEventListener("mouseover", glueStickOver);
			self.silicon.removeEventListener("mouseout", glueSiliconOut);
			self.hot.removeEventListener("mouseout", glueHotOut);
			self.plasti.removeEventListener("mouseout", gluePlastiOut);
			self.tape.removeEventListener("mouseout", glueTapeOut);
			self.stick.removeEventListener("mouseout", glueStickOut);
		}
		
		//אפרור
		function glueGray() {
			self.silicon.gotoAndStop(2);
			self.hot.gotoAndStop(2);
			self.plasti.gotoAndStop(2);
			self.tape.gotoAndStop(2);
			self.stick.gotoAndStop(2);
		}
		
		//הפעלת צבע
		function glueColor() {
			self.silicon.gotoAndStop(0);
			self.hot.gotoAndStop(0);
			self.plasti.gotoAndStop(0);
			self.tape.gotoAndStop(0);
			self.stick.gotoAndStop(0);
		}
		
		//ביטול קיבוע
		function glueUnlock() {
			if (glue == "none") {
				craftActivateAll();
				glueColor();
				glueListenersOn();
			}
		}
		
		//זמן ייבוש
		function showTime() {
			self.gluetime.visible = true;
			self.gluetime.stick.visible = false;
			self.gluetime.plasti.visible = false;
			self.gluetime.silicon.visible = false;
			self.gluetime.hot.visible = false;
			self.gluetime.tape.visible = false;
		
			if (glue == "stick") {
				self.gluetime.stick.visible = true;
			} else {
				if (glue == "plasti") {
					self.gluetime.plasti.visible = true;
				} else {
					if (glue == "silicon") {
						self.gluetime.silicon.visible = true;
					} else {
						if (glue == "hot") {
							self.gluetime.hot.visible = true;
						} else {
							if (glue == "tape") {
								self.gluetime.tape.visible = true;
							}
						}
					}
				}
			}
		}
		
		//***********************************דבק סטיק*****************************
		function glueStick() {
			if (glue == "stick") {
				glue = "none";
				self.instructLevel1.text = "לחצו על מידת קושי כדי לבחור אותה או לבטל אותה";
				self.instructLevel2.text = "בחירה ב''הצג הכל'' תאפשר לסנן את היצירות לפי הדבקים שצמד ימין";
				self.instructGlue1.text = "לחצו על הדבק";
				self.instructGlue2.text = "כדי לקבע את בחירתכם";
				glueColor();
				levelListenersOn();
				self.gluetime.visible = false;
			} else {
				self.instructGlue1.text = "לחצו שוב על הדבק";
				self.instructGlue2.text = "כדי לשחרר את הקיבוע";
				self.instructLevel1.text = "בטלו את קיבוע הדבק כדי לבחור רמה אחרת";
				self.instructLevel2.text = "";
				glue = "stick";
				showTime();
				stage.cursor = "initial";
				glueGray();
				self.stick.gotoAndStop(1);
				glueListenersOff();
				levelListenersOff();
				self.stick.addEventListener("click", glueStick);
				self.stick.addEventListener("mouseover", glueStickOver);
				self.stick.addEventListener("mouseout", glueStickOut);
			}
		}
		function glueStickOver() {
			stage.cursor = "pointer";
			if (glue != "stick") {
				self.instructGlue1.text = "לחצו על הדבק";
				self.instructGlue2.text = "כדי לקבע את בחירתכם";
				craftDisableAll();
				activateQuilling();
			}
		}
		function glueStickOut() {
			stage.cursor = "initial";
			glueUnlock();
			if (glue != "stick") {
				craftActivateAll();
				self.instructGlue1.text = "עברו עם העכבר על הדבקים כדי לגלות";
				self.instructGlue2.text = "אילו יצירות ניתן ליצור איתם";
			}
		}
		
		//***********************************דבק פלסטי*****************************
		function gluePlasti() {
			if (glue == "plasti") {
				glue = "none";
				self.instructLevel1.text = "לחצו על מידת קושי כדי לבחור אותה או לבטל אותה";
				self.instructLevel2.text = "בחירה ב''הצג הכל'' תאפשר לסנן את היצירות לפי הדבקים שצמד ימין";
				self.instructGlue1.text = "לחצו על הדבק";
				self.instructGlue2.text = "כדי לקבע את בחירתכם";
				stage.cursor = "initial";
				glueColor();
				levelListenersOn();
				self.gluetime.visible = false;
			} else {
				self.instructGlue1.text = "לחצו שוב על הדבק";
				self.instructGlue2.text = "כדי לשחרר את הקיבוע";
				self.instructLevel1.text = "בטלו את קיבוע הדבק כדי לבחור רמה אחרת";
				self.instructLevel2.text = "";
				glue = "plasti";
				showTime();
				stage.cursor = "initial";
				glueGray();
				self.plasti.gotoAndStop(1);
				glueListenersOff();
				levelListenersOff();
				self.plasti.addEventListener("click", gluePlasti);
				self.plasti.addEventListener("mouseover", gluePlastiOver);
				self.plasti.addEventListener("mouseout", gluePlastiOut);
			}
		}
		function gluePlastiOver() {
			stage.cursor = "pointer";
			if (glue != "plasti") {
				self.instructGlue1.text = "לחצו על הדבק";
				self.instructGlue2.text = "כדי לקבע את בחירתכם";
				craftDisableAll();
				activateBall();
				activateSlime();
				activateFeather();
			}
		}
		function gluePlastiOut() {
			stage.cursor = "initial";
			glueUnlock();
			if (glue != "plasti") {
				craftActivateAll();
				self.instructGlue1.text = "עברו עם העכבר על הדבקים כדי לגלות";
				self.instructGlue2.text = "אילו יצירות ניתן ליצור איתם";
			}
		}
		
		//***********************************דבק סיליקון*****************************
		function glueSilicon() {
			if (glue == "silicon") {
				glue = "none";
				self.instructLevel1.text = "לחצו על מידת קושי כדי לבחור אותה או לבטל אותה";
				self.instructLevel2.text = "בחירה ב''הצג הכל'' תאפשר לסנן את היצירות לפי הדבקים שצמד ימין";
				self.instructGlue1.text = "לחצו על הדבק";
				self.instructGlue2.text = "כדי לקבע את בחירתכם";
				stage.cursor = "initial";
				glueColor();
				levelListenersOn();
				self.gluetime.visible = false;
			} else {
				self.instructGlue1.text = "לחצו שוב על הדבק";
				self.instructGlue2.text = "כדי לשחרר את הקיבוע";
				self.instructLevel1.text = "בטלו את קיבוע הדבק כדי לבחור רמה אחרת";
				self.instructLevel2.text = "";
				glue = "silicon";
				showTime();
				stage.cursor = "initial";
				glueGray();
				self.silicon.gotoAndStop(1);
				glueListenersOff();
				levelListenersOff();
				self.silicon.addEventListener("click", glueSilicon);
				self.silicon.addEventListener("mouseover", glueSiliconOver);
				self.silicon.addEventListener("mouseout", glueSiliconOut);
			}
		}
		function glueSiliconOver() {
			stage.cursor = "pointer";
			if (glue != "silicon") {
				self.instructGlue1.text = "לחצו על הדבק";
				self.instructGlue2.text = "כדי לקבע את בחירתכם";
				craftDisableAll();
				activateVitraz();
				activateMobile();
				activatePsifas();
				activateOwl();
			}
		}
		function glueSiliconOut() {
			if (glue != "silicon") {
				craftActivateAll();
				self.instructGlue1.text = "עברו עם העכבר על הדבקים כדי לגלות";
				self.instructGlue2.text = "אילו יצירות ניתן ליצור איתם";
			}
		
			stage.cursor = "initial";
			glueUnlock();
		}
		
		//***********************************דבק חם*****************************
		function glueHot() {
			if (glue == "hot") {
				glue = "none";
				self.instructLevel1.text = "לחצו על מידת קושי כדי לבחור אותה או לבטל אותה";
				self.instructLevel2.text = "בחירה ב''הצג הכל'' תאפשר לסנן את היצירות לפי הדבקים שצמד ימין";
				self.instructGlue1.text = "לחצו על הדבק";
				self.instructGlue2.text = "כדי לקבע את בחירתכם";
				stage.cursor = "initial";
				glueColor();
				levelListenersOn();
				self.gluetime.visible = false;
			} else {
				self.instructGlue1.text = "לחצו שוב על הדבק";
				self.instructGlue2.text = "כדי לשחרר את הקיבוע";
				self.instructLevel1.text = "בטלו את קיבוע הדבק כדי לבחור רמה אחרת";
				self.instructLevel2.text = "";
				glue = "hot";
				showTime();
				stage.cursor = "initial";
				glueGray();
				self.hot.gotoAndStop(1);
				glueListenersOff();
				levelListenersOff();
				self.hot.addEventListener("click", glueHot);
				self.hot.addEventListener("mouseover", glueHotOver);
				self.hot.addEventListener("mouseout", glueHotOut);
			}
		}
		function glueHotOver() {
			stage.cursor = "pointer";
			if (glue != "hot") {
				self.instructGlue1.text = "לחצו על הדבק";
				self.instructGlue2.text = "כדי לקבע את בחירתכם";
				craftDisableAll();
				activateRose();
			}
		}
		function glueHotOut() {
			if (glue != "hot") {
				craftActivateAll();
				self.instructGlue1.text = "עברו עם העכבר על הדבקים כדי לגלות";
				self.instructGlue2.text = "אילו יצירות ניתן ליצור איתם";
			}
		
			stage.cursor = "initial";
			glueUnlock();
		}
		
		//***********************************סרט דבק*****************************
		function glueTape() {
			if (glue == "tape") {
				glue = "none";
				self.instructLevel1.text = "לחצו על מידת קושי כדי לבחור אותה או לבטל אותה";
				self.instructLevel2.text = "בחירה ב''הצג הכל'' תאפשר לסנן את היצירות לפי הדבקים שצמד ימין";
				self.instructGlue1.text = "לחצו על הדבק";
				self.instructGlue2.text = "כדי לקבע את בחירתכם";
				stage.cursor = "initial";
				glueColor();
				levelListenersOn();
				self.gluetime.visible = false;
			} else {
				self.instructGlue1.text = "לחצו שוב על הדבק";
				self.instructGlue2.text = "כדי לשחרר את הקיבוע";
				self.instructLevel1.text = "בטלו את קיבוע הדבק כדי לבחור רמה אחרת";
				self.instructLevel2.text = "";
				glue = "tape";
				showTime();
				stage.cursor = "initial";
				glueGray();
				self.tape.gotoAndStop(1);
				glueListenersOff();
				levelListenersOff();
				self.tape.addEventListener("click", glueTape);
				self.tape.addEventListener("mouseover", glueTapeOver);
				self.tape.addEventListener("mouseout", glueTapeOut);
			}
		}
		function glueTapeOver() {
			stage.cursor = "pointer";
			if (glue != "tape") {
				self.instructGlue1.text = "לחצו על הדבק";
				self.instructGlue2.text = "כדי לקבע את בחירתכם";
				craftDisableAll();
				activateScrapbook();
				activateMobile();
			}
		}
		function glueTapeOut() {
			if (glue != "tape") {
				craftActivateAll();
				self.instructGlue1.text = "עברו עם העכבר על הדבקים כדי לגלות";
				self.instructGlue2.text = "אילו יצירות ניתן ליצור איתם";
			}
		
			stage.cursor = "initial";
			glueUnlock();
		}
		
		//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~רמות קושי~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
		
		//הפעלת ליסנרים
		function levelListenersOn() {
			self.level.easy.addEventListener("click", levelEasy);
			self.level.chal.addEventListener("click", levelChal);
			self.level.hard.addEventListener("click", levelHard);
			self.level.all.addEventListener("click", levelAll);
			self.level.easy.addEventListener("mouseover", easyOver);
			self.level.chal.addEventListener("mouseover", chalOver);
			self.level.hard.addEventListener("mouseover", hardOver);
			self.level.all.addEventListener("mouseover", allOver);
			self.level.easy.addEventListener("mouseout", easyOut);
			self.level.chal.addEventListener("mouseout", chalOut);
			self.level.hard.addEventListener("mouseout", hardOut);
			self.level.all.addEventListener("mouseout", allOut);
		}
		
		//ביטול ליסנרים
		function levelListenersOff() {
			self.level.easy.removeEventListener("click", levelEasy);
			self.level.chal.removeEventListener("click", levelChal);
			self.level.hard.removeEventListener("click", levelHard);
			self.level.all.removeEventListener("click", levelAll);
			self.level.easy.removeEventListener("mouseover", easyOver);
			self.level.chal.removeEventListener("mouseover", chalOver);
			self.level.hard.removeEventListener("mouseover", hardOver);
			self.level.all.removeEventListener("mouseover", allOver);
			self.level.easy.removeEventListener("mouseout", easyOut);
			self.level.chal.removeEventListener("mouseout", chalOut);
			self.level.hard.removeEventListener("mouseout", hardOut);
			self.level.all.removeEventListener("mouseout", allOut);
		}
		
		//איפרור
		function levelGray() {
			self.level.easy.gotoAndStop(2);
			self.level.chal.gotoAndStop(2);
			self.level.hard.gotoAndStop(2);
			self.level.all.gotoAndStop(2);
		}
		
		//הפעלת צבע
		function levelColor() {
			self.level.easy.gotoAndStop(0);
			self.level.chal.gotoAndStop(0);
			self.level.hard.gotoAndStop(0);
			self.level.all.gotoAndStop(0);
		}
		
		//הצגת הרמה הנבחרת
		function showLevel() {
			if (level == "all") {
				levelGray();
				self.level.all.gotoAndStop(0);
			}
			if (level == "easy") {
				levelGray();
				self.level.easy.gotoAndStop(0);
			}
			if (level == "chal") {
				levelGray();
				self.level.chal.gotoAndStop(0);
			}
			if (level == "hard") {
				levelGray();
				self.level.hard.gotoAndStop(0);
			}
			if (level == "none") {
				levelColor();
			}
		}
		
		//***************************************רמה: קליל******************************
		function levelEasy() {
			if (level == "easy") {
				self.instructGlue1.text = "";
				self.instructGlue2.text = "";
				self.instructMain.text = "בחרו מידת קושי כדי להמשיך";
				level = "none";
				showLevel();
				craftDisableAll();
			} else {
				self.gluetime.visible = false;
				self.instructGlue1.text = "עברו עם העכבר על יצירה כדי לראות";
				self.instructGlue2.text = "באילו דבקים יש להשתמש עבורה";
				self.instructMain.text = "לחצו על יצירה כדי ללמוד איך להכין אותה";
				level = "easy";
				showLevel();
				craftDisableAll();
				activateSlime();
				activateOwl();
				activateMobile();
				activateScrapbook();
				glueListenersOff();
				glueGray();
			}
		}
		function easyOver() {
			stage.cursor = "pointer";
			if (level == "easy" || level == "none") {
				self.level.easy.gotoAndStop(1);
			} else {
				self.level.easy.gotoAndStop(3);
			}
		}
		function easyOut() {
			stage.cursor = "initial";
			if (level == "easy" || level == "none") {
				self.level.easy.gotoAndStop(0);
			} else {
				self.level.easy.gotoAndStop(2);
			}
		}
		
		//***************************************רמה: מאתגר******************************
		function levelChal() {
			if (level == "chal") {
				self.instructGlue1.text = "";
				self.instructGlue2.text = "";
				self.instructMain.text = "בחרו מידת קושי כדי להמשיך";
				level = "none";
				showLevel();
				craftDisableAll();
			} else {
				self.gluetime.visible = false;
				self.instructGlue1.text = "עברו עם העכבר על יצירה כדי לראות";
				self.instructGlue2.text = "באילו דבקים יש להשתמש עבורה";
				self.instructMain.text = "לחצו על יצירה כדי ללמוד איך להכין אותה";
				level = "chal";
				showLevel();
				craftDisableAll();
				activateBall();
				activatePsifas();
				activateFeather();
				glueListenersOff();
				glueGray();
			}
		}
		function chalOver() {
			stage.cursor = "pointer";
			if (level == "chal" || level == "none") {
				self.level.chal.gotoAndStop(1);
			} else {
				self.level.chal.gotoAndStop(3);
			}
		}
		function chalOut() {
			stage.cursor = "initial";
			if (level == "chal" || level == "none") {
				self.level.chal.gotoAndStop(0);
			} else {
				self.level.chal.gotoAndStop(2);
			}
		}
		
		//***************************************רמה: מסובך******************************
		function levelHard() {
			if (level == "hard") {
				self.instructGlue1.text = "";
				self.instructGlue2.text = "";
				self.instructMain.text = "בחרו מידת קושי כדי להמשיך";
				level = "none";
				showLevel();
				craftDisableAll();
			} else {
				self.gluetime.visible = false;
				self.instructGlue1.text = "עברו עם העכבר על יצירה כדי לראות";
				self.instructGlue2.text = "באילו דבקים יש להשתמש עבורה";
				self.instructMain.text = "לחצו על יצירה כדי ללמוד איך להכין אותה";
				level = "hard";
				showLevel();
				craftDisableAll();
				activateVitraz();
				activateQuilling();
				activateRose();
				glueListenersOff();
				glueGray();
			}
		}
		function hardOver() {
			stage.cursor = "pointer";
			if (level == "hard" || level == "none") {
				self.level.hard.gotoAndStop(1);
			} else {
				self.level.hard.gotoAndStop(3);
			}
		}
		function hardOut() {
			stage.cursor = "initial";
			if (level == "hard" || level == "none") {
				self.level.hard.gotoAndStop(0);
			} else {
				self.level.hard.gotoAndStop(2);
			}
		}
		
		//***************************************רמה: הצג הכל******************************
		function levelAll() {
			if (level == "all") {
				self.instructGlue1.text = "";
				self.instructGlue2.text = "";
				self.instructMain.text = "בחרו מידת קושי כדי להמשיך";
				level = "none";
				showLevel();
				craftDisableAll();
				glueListenersOff();
				glueGray();
			} else {
				self.instructGlue1.text = "עברו עם העכבר על הדבקים כדי לגלות";
				self.instructGlue2.text = "אילו יצירות ניתן ליצור איתם";
				self.instructMain.text = "לחצו על יצירה כדי ללמוד איך להכין אותה";
				level = "all";
				showLevel();
				activateSlime();
				activateOwl();
				activateMobile();
				activateScrapbook();
				activateBall();
				activatePsifas();
				activateFeather();
				activateVitraz();
				activateQuilling();
				activateRose();
				glueListenersOn();
				glueColor();
			}
		}
		function allOver() {
			stage.cursor = "pointer";
			if (level == "all" || level == "none") {
				self.level.all.gotoAndStop(1);
			} else {
				self.level.all.gotoAndStop(3);
			}
		}
		function allOut() {
			stage.cursor = "initial";
			if (level == "all" || level == "none") {
				self.level.all.gotoAndStop(0);
			} else {
				self.level.all.gotoAndStop(2);
			}
		}
		
		//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~יצירות~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
		
		//הפעלת ליסנרים
		function craftListenersOn() {
			self.slime.addEventListener("click", slimeClick);
			self.owl.addEventListener("click", owlClick);
			self.mobile.addEventListener("click", mobileClick);
			self.scrapbook.addEventListener("click", scrapbookClick);
			self.ball.addEventListener("click", ballClick);
			self.psifas.addEventListener("click", psifasClick);
			self.feather.addEventListener("click", featherClick);
			self.vitraz.addEventListener("click", vitrazClick);
			self.quilling.addEventListener("click", quillingClick);
			self.rose.addEventListener("click", roseClick);
			self.slime.addEventListener("mouseover", slimemouseover);
			self.owl.addEventListener("mouseover", owlmouseover);
			self.mobile.addEventListener("mouseover", mobilemouseover);
			self.scrapbook.addEventListener("mouseover", scrapbookmouseover);
			self.ball.addEventListener("mouseover", ballmouseover);
			self.psifas.addEventListener("mouseover", psifasmouseover);
			self.feather.addEventListener("mouseover", feathermouseover);
			self.vitraz.addEventListener("mouseover", vitrazmouseover);
			self.quilling.addEventListener("mouseover", quillingmouseover);
			self.rose.addEventListener("mouseover", rosemouseover);
			self.slime.addEventListener("mouseout", slimemouseout);
			self.owl.addEventListener("mouseout", owlmouseout);
			self.mobile.addEventListener("mouseout", mobilemouseout);
			self.scrapbook.addEventListener("mouseout", scrapbookmouseout);
			self.ball.addEventListener("mouseout", ballmouseout);
			self.psifas.addEventListener("mouseout", psifasmouseout);
			self.feather.addEventListener("mouseout", feathermouseout);
			self.vitraz.addEventListener("mouseout", vitrazmouseout);
			self.quilling.addEventListener("mouseout", quillingmouseout);
			self.rose.addEventListener("mouseout", rosemouseout);
		}
		
		//ביטול ליסנרים
		function craftListenersOff() {
			self.slime.removeEventListener("click", slimeClick);
			self.owl.removeEventListener("click", owlClick);
			self.mobile.removeEventListener("click", mobileClick);
			self.scrapbook.removeEventListener("click", scrapbookClick);
			self.ball.removeEventListener("click", ballClick);
			self.psifas.removeEventListener("click", psifasClick);
			self.feather.removeEventListener("click", featherClick);
			self.vitraz.removeEventListener("click", vitrazClick);
			self.quilling.removeEventListener("click", quillingClick);
			self.rose.removeEventListener("click", roseClick);
			self.slime.removeEventListener("mouseover", slimemouseover);
			self.owl.removeEventListener("mouseover", owlmouseover);
			self.mobile.removeEventListener("mouseover", mobilemouseover);
			self.scrapbook.removeEventListener("mouseover", scrapbookmouseover);
			self.ball.removeEventListener("mouseover", ballmouseover);
			self.psifas.removeEventListener("mouseover", psifasmouseover);
			self.feather.removeEventListener("mouseover", feathermouseover);
			self.vitraz.removeEventListener("mouseover", vitrazmouseover);
			self.quilling.removeEventListener("mouseover", quillingmouseover);
			self.rose.removeEventListener("mouseover", rosemouseover);
			self.slime.removeEventListener("mouseout", slimemouseout);
			self.owl.removeEventListener("mouseout", owlmouseout);
			self.mobile.removeEventListener("mouseout", mobilemouseout);
			self.scrapbook.removeEventListener("mouseout", scrapbookmouseout);
			self.ball.removeEventListener("mouseout", ballmouseout);
			self.psifas.removeEventListener("mouseout", psifasmouseout);
			self.feather.removeEventListener("mouseout", feathermouseout);
			self.vitraz.removeEventListener("mouseout", vitrazmouseout);
			self.quilling.removeEventListener("mouseout", quillingmouseout);
			self.rose.removeEventListener("mouseout", rosemouseout);
		}
		
		//ביטול כל היצירות (אפרור וביטול לינסרים)
		function craftDisableAll() {
			self.slime.alpha = 0.2;
			self.owl.alpha = 0.2;
			self.mobile.alpha = 0.2;
			self.scrapbook.alpha = 0.2;
			self.ball.alpha = 0.2;
			self.psifas.alpha = 0.2;
			self.feather.alpha = 0.2;
			self.vitraz.alpha = 0.2;
			self.quilling.alpha = 0.2;
			self.rose.alpha = 0.2;
			self.slime.removeEventListener("click", slimeClick);
			self.owl.removeEventListener("click", owlClick);
			self.mobile.removeEventListener("click", mobileClick);
			self.scrapbook.removeEventListener("click", scrapbookClick);
			self.ball.removeEventListener("click", ballClick);
			self.psifas.removeEventListener("click", psifasClick);
			self.feather.removeEventListener("click", featherClick);
			self.vitraz.removeEventListener("click", vitrazClick);
			self.quilling.removeEventListener("click", quillingClick);
			self.rose.removeEventListener("click", roseClick);
			self.slime.removeEventListener("mouseover", slimemouseover);
			self.owl.removeEventListener("mouseover", owlmouseover);
			self.mobile.removeEventListener("mouseover", mobilemouseover);
			self.scrapbook.removeEventListener("mouseover", scrapbookmouseover);
			self.ball.removeEventListener("mouseover", ballmouseover);
			self.psifas.removeEventListener("mouseover", psifasmouseover);
			self.feather.removeEventListener("mouseover", feathermouseover);
			self.vitraz.removeEventListener("mouseover", vitrazmouseover);
			self.quilling.removeEventListener("mouseover", quillingmouseover);
			self.rose.removeEventListener("mouseover", rosemouseover);
			self.slime.removeEventListener("mouseout", slimemouseout);
			self.owl.removeEventListener("mouseout", owlmouseout);
			self.mobile.removeEventListener("mouseout", mobilemouseout);
			self.scrapbook.removeEventListener("mouseout", scrapbookmouseout);
			self.ball.removeEventListener("mouseout", ballmouseout);
			self.psifas.removeEventListener("mouseout", psifasmouseout);
			self.feather.removeEventListener("mouseout", feathermouseout);
			self.vitraz.removeEventListener("mouseout", vitrazmouseout);
			self.quilling.removeEventListener("mouseout", quillingmouseout);
			self.rose.removeEventListener("mouseout", rosemouseout);
			slimeState = "disabled";
			owlState = "disabled";
			mobileState = "disabled";
			scrapbookState = "disabled";
			ballState = "disabled";
			psifasState = "disabled";
			featherState = "disabled";
			vitrazState = "disabled";
			quillingState = "disabled";
			roseState = "disabled";
		}
		
		//הפעלת כל היצירות (צבע וליסנרים)
		function craftActivateAll() {
			activateSlime();
			activateOwl();
			activateMobile();
			activateScrapbook();
			activateBall();
			activatePsifas();
			activateFeather();
			activateVitraz();
			activateQuilling();
			activateRose();
		}
		
		function craftAllOut() {
			self.slime.gotoAndStop(0);
			self.owl.gotoAndStop(0);
			self.mobile.gotoAndStop(0);
			self.scrapbook.gotoAndStop(0);
			self.ball.gotoAndStop(0);
			self.psifas.gotoAndStop(0);
			self.feather.gotoAndStop(0);
			self.vitraz.gotoAndStop(0);
			self.quilling.gotoAndStop(0);
			self.rose.gotoAndStop(0);
		}
		
		//***********************************סליים*******************************
		
		function slimeClick() {
			stage.cursor = "initial";
			self.card.visible = true;
			self.card.gotoAndStop(0);
			self.card.cardXg.addEventListener("click", closeCard);
			glueGray();
			self.plasti.gotoAndStop(1);
			levelGray();
			self.level.easy.gotoAndStop(0);
			craftListenersOff();
			glueListenersOff();
			levelListenersOff();
		}
		function slimemouseover() {
			self.slime.gotoAndStop(1);
			stage.cursor = "pointer";
			if (glue == "none") {
				glueGray();
				self.plasti.gotoAndStop(0);
			}
		}
		function slimemouseout() {
			self.slime.gotoAndStop(0);
			stage.cursor = "initial";
			if (level == "all" && glue == "none") {
				glueColor();
			} else {
				if (level != "none" && level != "all" && glue == "none") {
					glueGray();
				}
			}
		}
		function activateSlime() {
			slimeState = "active";
			self.slime.addEventListener("click", slimeClick);
			self.slime.addEventListener("mouseover", slimemouseover);
			self.slime.addEventListener("mouseout", slimemouseout);
			self.slime.alpha = 1;
		}
		
		
		//***********************************ינשוף טואלט*******************************
		
		function owlClick() {
			stage.cursor = "initial";
			self.card.visible = true;
			self.card.gotoAndStop(1);
			self.card.cardXg.addEventListener("click", closeCard);
			glueGray();
			self.silicon.gotoAndStop(1);
			levelGray();
			self.level.easy.gotoAndStop(0);
			craftListenersOff();
			glueListenersOff();
			levelListenersOff();
			self.instructGlue1.text = ",כדי ליצור את היצירה הזאת";
			self.instructGlue2.text = "צריך להשתמש בדבק המודגש מטה";
		}
		
		function owlmouseover() {
			self.owl.gotoAndStop(1);
			stage.cursor = "pointer";
			if (glue == "none") {
				glueGray();
				self.silicon.gotoAndStop(0);
			}
		}
		function owlmouseout() {
			self.owl.gotoAndStop(0);
			stage.cursor = "initial";
			if (level == "all" && glue == "none") {
				glueColor();
			} else {
				if (level != "none" && level != "all" && glue == "none") {
					glueGray();
				}
			}
		}
		function activateOwl() {
			owlState = "active";
			self.owl.addEventListener("click", owlClick);
			self.owl.addEventListener("mouseover", owlmouseover);
			self.owl.addEventListener("mouseout", owlmouseout);
			self.owl.alpha = 1;
		}
		
		
		//***********************************כדור פורח*******************************
		function mobileClick() {
			stage.cursor = "initial";
			self.card.visible = true;
			self.card.gotoAndStop(2);
			self.card.cardXg.addEventListener("click", closeCard);
			self.tape.gotoAndStop(1);
			self.silicon.gotoAndStop(1);
			levelGray();
			self.level.easy.gotoAndStop(0);
			craftListenersOff();
			glueListenersOff();
			levelListenersOff();
			self.instructGlue1.text = ",כדי ליצור את היצירה הזאת";
			self.instructGlue2.text = "צריך להשתמש בדבק המודגש מטה";
		}
		function mobilemouseover() {
			self.mobile.gotoAndStop(1);
			stage.cursor = "pointer";
			if (glue == "none") {
				glueGray();
				self.tape.gotoAndStop(0);
				self.silicon.gotoAndStop(0);
			}
		}
		function mobilemouseout() {
			self.mobile.gotoAndStop(0);
			stage.cursor = "initial";
			if (level == "all" && glue == "none") {
				glueColor();
			} else {
				if (level != "none" && level != "all" && glue == "none") {
					glueGray();
				}
			}
		}
		function activateMobile() {
			mobileState = "active";
			self.mobile.addEventListener("click", mobileClick);
			self.mobile.addEventListener("mouseover", mobilemouseover);
			self.mobile.addEventListener("mouseout", mobilemouseout);
			self.mobile.alpha = 1;
		}
		
		
		//***********************************סקראפבוק*******************************
		
		function scrapbookClick() {
			stage.cursor = "initial";
			self.card.visible = true;
			self.card.gotoAndStop(3);
			self.card.cardXg.addEventListener("click", closeCard);
			glueGray();
			self.tape.gotoAndStop(1);
			levelGray();
			self.level.easy.gotoAndStop(0);
			craftListenersOff();
			glueListenersOff();
			levelListenersOff();
			self.instructGlue1.text = ",כדי ליצור את היצירה הזאת";
			self.instructGlue2.text = "צריך להשתמש בדבק המודגש מטה";
		}
		function scrapbookmouseover() {
			self.scrapbook.gotoAndStop(1);
			stage.cursor = "pointer";
			if (glue == "none") {
				glueGray();
				self.tape.gotoAndStop(0);
			}
		}
		function scrapbookmouseout() {
			self.scrapbook.gotoAndStop(0);
			stage.cursor = "initial";
			if (level == "all" && glue == "none") {
				glueColor();
			} else {
				if (level != "none" && level != "all" && glue == "none") {
					glueGray();
				}
			}
		}
		function activateScrapbook() {
			scrapbookState = "active";
			self.scrapbook.addEventListener("click", scrapbookClick);
			self.scrapbook.addEventListener("mouseover", scrapbookmouseover);
			self.scrapbook.addEventListener("mouseout", scrapbookmouseout);
			self.scrapbook.alpha = 1;
		}
		
		//***********************************כדור חוטים*******************************
		
		function ballClick() {
			stage.cursor = "initial";
			self.card.visible = true;
			self.card.gotoAndStop(4);
			self.card.cardXy.addEventListener("click", closeCard);
			glueGray();
			self.plasti.gotoAndStop(1);
			levelGray();
			self.level.chal.gotoAndStop(0);
			craftListenersOff();
			glueListenersOff();
			levelListenersOff();
			self.instructGlue1.text = ",כדי ליצור את היצירה הזאת";
			self.instructGlue2.text = "צריך להשתמש בדבק המודגש מטה";
		}
		function ballmouseover() {
			self.ball.gotoAndStop(1);
			stage.cursor = "pointer";
			if (glue == "none") {
				glueGray();
				self.plasti.gotoAndStop(0);
			}
		}
		function ballmouseout() {
			self.ball.gotoAndStop(0);
			stage.cursor = "initial";
			if (level == "all" && glue == "none") {
				glueColor();
			} else {
				if (level != "none" && level != "all" && glue == "none") {
					glueGray();
				}
			}
		}
		function activateBall() {
			ballState = "active";
			self.ball.addEventListener("click", ballClick);
			self.ball.addEventListener("mouseover", ballmouseover);
			self.ball.addEventListener("mouseout", ballmouseout);
			self.ball.alpha = 1;
		}
		
		//***********************************פסיפס*******************************
		
		function psifasClick() {
			stage.cursor = "initial";
			self.card.visible = true;
			self.card.gotoAndStop(5);
			self.card.cardXy.addEventListener("click", closeCard);
			glueGray();
			self.silicon.gotoAndStop(1);
			levelGray();
			self.level.chal.gotoAndStop(0);
			craftListenersOff();
			glueListenersOff();
			levelListenersOff();
			self.instructGlue1.text = ",כדי ליצור את היצירה הזאת";
			self.instructGlue2.text = "צריך להשתמש בדבק המודגש מטה";
		}
		function psifasmouseover() {
			self.psifas.gotoAndStop(1);
			stage.cursor = "pointer";
			if (glue == "none") {
				glueGray();
				self.silicon.gotoAndStop(0);
			}
		}
		function psifasmouseout() {
			self.psifas.gotoAndStop(0);
			stage.cursor = "initial";
			if (level == "all" && glue == "none") {
				glueColor();
			} else {
				if (level != "none" && level != "all" && glue == "none") {
					glueGray();
				}
			}
		}
		function activatePsifas() {
			psifasState = "active";
			self.psifas.addEventListener("click", psifasClick);
			self.psifas.addEventListener("mouseover", psifasmouseover);
			self.psifas.addEventListener("mouseout", psifasmouseout);
			self.psifas.alpha = 1;
		}
		
		//***********************************נוצה מעיתונים*******************************
		
		function featherClick() {
			stage.cursor = "initial";
			self.card.visible = true;
			self.card.gotoAndStop(6);
			self.card.cardXy.addEventListener("click", closeCard);
			glueGray();
			self.plasti.gotoAndStop(1);
			levelGray();
			self.level.chal.gotoAndStop(0);
			craftListenersOff();
			glueListenersOff();
			levelListenersOff();
			self.instructGlue1.text = ",כדי ליצור את היצירה הזאת";
			self.instructGlue2.text = "צריך להשתמש בדבק המודגש מטה";
		}
		function feathermouseover() {
			self.feather.gotoAndStop(1);
			stage.cursor = "pointer";
			if (glue == "none") {
				glueGray();
				self.plasti.gotoAndStop(0);
			}
		}
		function feathermouseout() {
			self.feather.gotoAndStop(0);
			stage.cursor = "initial";
			if (level == "all" && glue == "none") {
				glueColor();
			} else {
				if (level != "none" && level != "all" && glue == "none") {
					glueGray();
				}
			}
		}
		function activateFeather() {
			featherState = "active";
			self.feather.addEventListener("click", featherClick);
			self.feather.addEventListener("mouseover", feathermouseover);
			self.feather.addEventListener("mouseout", feathermouseout);
			self.feather.alpha = 1;
		}
		
		//***********************************ויטראז' לחלון*******************************
		
		function vitrazClick() {
			stage.cursor = "initial";
			self.card.visible = true;
			self.card.gotoAndStop(7);
			self.card.cardXr.addEventListener("click", closeCard);
			glueGray();
			self.silicon.gotoAndStop(1);
			levelGray();
			self.level.hard.gotoAndStop(0);
			craftListenersOff();
			glueListenersOff();
			levelListenersOff();
			self.instructGlue1.text = ",כדי ליצור את היצירה הזאת";
			self.instructGlue2.text = "צריך להשתמש בדבק המודגש מטה";
		}
		function vitrazmouseover() {
			self.vitraz.gotoAndStop(1);
			stage.cursor = "pointer";
			if (glue == "none") {
				glueGray();
				self.silicon.gotoAndStop(0);
			}
		}
		function vitrazmouseout() {
			self.vitraz.gotoAndStop(0);
			stage.cursor = "initial";
			if (level == "all" && glue == "none") {
				glueColor();
			} else {
				if (level != "none" && level != "all" && glue == "none") {
					glueGray();
				}
			}
		}
		function activateVitraz() {
			vitrazState = "active";
			self.vitraz.addEventListener("click", vitrazClick);
			self.vitraz.addEventListener("mouseover", vitrazmouseover);
			self.vitraz.addEventListener("mouseout", vitrazmouseout);
			self.vitraz.alpha = 1;
		}
		
		//***********************************קווילינג*******************************
		
		function quillingClick() {
			stage.cursor = "initial";
			self.card.visible = true;
			self.card.gotoAndStop(8);
			self.card.cardXr.addEventListener("click", closeCard);
			glueGray();
			self.stick.gotoAndStop(1);
			levelGray();
			self.level.hard.gotoAndStop(0);
			craftListenersOff();
			glueListenersOff();
			levelListenersOff();
			self.instructGlue1.text = ",כדי ליצור את היצירה הזאת";
			self.instructGlue2.text = "צריך להשתמש בדבק המודגש מטה";
		}
		function quillingmouseover() {
			self.quilling.gotoAndStop(1);
			stage.cursor = "pointer";
			if (glue == "none") {
				glueGray();
				self.stick.gotoAndStop(0);
			}
		}
		function quillingmouseout() {
			self.quilling.gotoAndStop(0);
			stage.cursor = "initial";
			if (level == "all" && glue == "none") {
				glueColor();
			} else {
				if (level != "none" && level != "all" && glue == "none") {
					glueGray();
				}
			}
		}
		function activateQuilling() {
			quillingState = "active";
			self.quilling.addEventListener("click", quillingClick);
			self.quilling.addEventListener("mouseover", quillingmouseover);
			self.quilling.addEventListener("mouseout", quillingmouseout);
			self.quilling.alpha = 1;
		}
		
		//***********************************ורד מקרפ*******************************
		
		function roseClick() {
			stage.cursor = "initial";
			self.card.visible = true;
			self.card.gotoAndStop(9);
			self.card.cardXr.addEventListener("click", closeCard);
			glueGray();
			self.hot.gotoAndStop(1);
			levelGray();
			self.level.hard.gotoAndStop(0);
			craftListenersOff();
			glueListenersOff();
			levelListenersOff();
			self.instructGlue1.text = ",כדי ליצור את היצירה הזאת";
			self.instructGlue2.text = "צריך להשתמש בדבק המודגש מטה";
		}
		function rosemouseover() {
			self.rose.gotoAndStop(1);
			stage.cursor = "pointer";
			if (glue == "none") {
				glueGray();
				self.hot.gotoAndStop(0);
			}
		}
		function rosemouseout() {
			self.rose.gotoAndStop(0);
			stage.cursor = "initial";
			if (level == "all" && glue == "none") {
				glueColor();
			} else {
				if (level != "none" && level != "all" && glue == "none") {
					glueGray();
				}
			}
		}
		function activateRose() {
			roseState = "active";
			self.rose.addEventListener("click", roseClick);
			self.rose.addEventListener("mouseover", rosemouseover);
			self.rose.addEventListener("mouseout", rosemouseout);
			self.rose.alpha = 1;
		}
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// aboutcard
	this.aboutcard = new lib.aboutcard();
	this.aboutcard.name = "aboutcard";
	this.aboutcard.setTransform(582.2,415.8,0.8381,0.8381,0,0,0,70,-50.9);

	this.timeline.addTween(cjs.Tween.get(this.aboutcard).wait(1));

	// infocard
	this.card = new lib.card();
	this.card.name = "card";
	this.card.setTransform(582.2,415.8,0.8381,0.8381,0,0,0,70,-50.9);

	this.timeline.addTween(cjs.Tween.get(this.card).wait(1));

	// gluefacts
	this.gluetime = new lib.gluetime();
	this.gluetime.name = "gluetime";
	this.gluetime.setTransform(1056.2,404.9,1,1,0,0,0,86.2,249.2);

	this.timeline.addTween(cjs.Tween.get(this.gluetime).wait(1));

	// bar
	this.level = new lib.bar();
	this.level.name = "level";
	this.level.setTransform(428.2,143.25,1,1,0,0,0,272.5,18.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(51,51,51,0.004)").ss(1,1,1).p("EgqkgC0MBVJAAAIAAFpMhVJAAAg");
	this.shape.setTransform(539.65,212.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.level}]}).wait(1));

	// crafts
	this.aboutbtn = new lib.aboutbtn();
	this.aboutbtn.name = "aboutbtn";
	this.aboutbtn.setTransform(102.05,46.05,1,1,0,0,0,4,1);
	new cjs.ButtonHelper(this.aboutbtn, 0, 1, 2);

	this.slime = new lib.slimey();
	this.slime.name = "slime";
	this.slime.setTransform(157.9,582,1,1,0,0,0,58.9,71);

	this.rose = new lib.creperose();
	this.rose.name = "rose";
	this.rose.setTransform(343,581.3,1,1,0,0,0,57,98.3);

	this.scrapbook = new lib.scrapbooks();
	this.scrapbook.name = "scrapbook";
	this.scrapbook.setTransform(542.6,577.7,1,1,0,0,0,62.6,71.7);

	this.owl = new lib.toiletowl();
	this.owl.name = "owl";
	this.owl.setTransform(719.5,587,1,1,0,0,0,71.8,102);

	this.psifas = new lib.mosaic_1();
	this.psifas.name = "psifas";
	this.psifas.setTransform(905.6,592.8,1,1,0,0,0,56.6,70.8);

	this.mobile = new lib.airballoon();
	this.mobile.name = "mobile";
	this.mobile.setTransform(157.4,347,1,1,0,0,0,83.5,93);

	this.quilling = new lib.quilling_1();
	this.quilling.name = "quilling";
	this.quilling.setTransform(337.3,337.2,1,1,0,0,0,52,69.2);

	this.feather = new lib.paperfeather();
	this.feather.name = "feather";
	this.feather.setTransform(520.1,339.6,1,1,0,0,0,67.1,89.6);

	this.vitraz = new lib.colorwindow();
	this.vitraz.name = "vitraz";
	this.vitraz.setTransform(704.25,359.55,1,1,0,0,0,74.5,66.8);

	this.ball = new lib.stringball();
	this.ball.name = "ball";
	this.ball.setTransform(897,349.6,1,1,0,0,0,64,94.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(51,51,51,0.004)").ss(1,1,1).p("AhYBOQgCAAgCAAQgcAAgVgaQgVgaAAgjQAAgkAVgaQAVgaAcAAQAKAAAIADQASAGAOARQAUAaAAAkQAAAjgUAaQgTAYgbACgAhKheQABgBABgCQApgoA4AAQA5AAAoAoQApApAAA4QAAA5gpAoQgoApg5AAQg4AAgpgpQgJgJgHgK");
	this.shape_1.setTransform(739.15,337.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.ball},{t:this.vitraz},{t:this.feather},{t:this.quilling},{t:this.mobile},{t:this.psifas},{t:this.owl},{t:this.scrapbook},{t:this.rose},{t:this.slime},{t:this.aboutbtn}]}).wait(1));

	// glues
	this.tape = new lib.gluetape();
	this.tape.name = "tape";
	this.tape.setTransform(1188.4,654.1,1,1,0,0,0,52,42.1);

	this.hot = new lib.hotglue();
	this.hot.name = "hot";
	this.hot.setTransform(1191.1,543.8,1,1,0,0,0,57.1,45.8);

	this.silicon = new lib.siliconeglue();
	this.silicon.name = "silicon";
	this.silicon.setTransform(1188.4,419.6,1,1,0,0,0,52,53.6);

	this.plasti = new lib.schoolglue();
	this.plasti.name = "plasti";
	this.plasti.setTransform(1188.4,300.1,1,1,0,0,0,52,50.1);

	this.stick = new lib.gluestick();
	this.stick.name = "stick";
	this.stick.setTransform(1188.4,182.6,1,1,0,0,0,52,46.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.stick},{t:this.plasti},{t:this.silicon},{t:this.hot},{t:this.tape}]}).wait(1));

	// headings_instructions
	this.instructLevel2 = new cjs.Text("בחירה ב\"הצג הכל\" תאפשר לסנן את היצירות לפי הדבקים שמצד ימין", "16px 'Arial'", "#404441");
	this.instructLevel2.name = "instructLevel2";
	this.instructLevel2.textAlign = "right";
	this.instructLevel2.lineHeight = 20;
	this.instructLevel2.lineWidth = 541;
	this.instructLevel2.parent = this;
	this.instructLevel2.setTransform(698.8,191.6);

	this.instructGlue2 = new cjs.Text("כדי לגלות אילו יצירות ניתן ליצור איתם", "16px 'Arial'", "#404441");
	this.instructGlue2.name = "instructGlue2";
	this.instructGlue2.textAlign = "right";
	this.instructGlue2.lineHeight = 20;
	this.instructGlue2.lineWidth = 287;
	this.instructGlue2.parent = this;
	this.instructGlue2.setTransform(1259.85,98.25);

	this.instructLevel1 = new cjs.Text("לחצו על מידת קושי כדי לבחור אותה או לבטל אותה", "16px 'Arial'", "#404441");
	this.instructLevel1.name = "instructLevel1";
	this.instructLevel1.textAlign = "right";
	this.instructLevel1.lineHeight = 20;
	this.instructLevel1.lineWidth = 541;
	this.instructLevel1.parent = this;
	this.instructLevel1.setTransform(698.8,170.6);

	this.instructGlue1 = new cjs.Text("עברו עם העכבר על הדבקים", "16px 'Arial'", "#404441");
	this.instructGlue1.name = "instructGlue1";
	this.instructGlue1.textAlign = "right";
	this.instructGlue1.lineHeight = 20;
	this.instructGlue1.lineWidth = 287;
	this.instructGlue1.parent = this;
	this.instructGlue1.setTransform(1259.85,74.35);

	this.text = new cjs.Text("דבקים", "50px 'David'", "#404441");
	this.text.textAlign = "center";
	this.text.lineHeight = 51;
	this.text.lineWidth = 174;
	this.text.parent = this;
	this.text.setTransform(1172.4,18.05);

	this.text_1 = new cjs.Text(":מידת קושי", "50px 'David'", "#404441");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 51;
	this.text_1.lineWidth = 284;
	this.text_1.parent = this;
	this.text_1.setTransform(820.55,113.45);

	this.instructMain = new cjs.Text("בחרו מידת קושי כדי להתחיל", "21px 'Arial'", "#130589");
	this.instructMain.name = "instructMain";
	this.instructMain.textAlign = "center";
	this.instructMain.lineHeight = 25;
	this.instructMain.lineWidth = 395;
	this.instructMain.parent = this;
	this.instructMain.setTransform(544.45,73);

	this.text_2 = new cjs.Text("?איזו יצירה ניצור היום", "60px 'David'", "#130589");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 61;
	this.text_2.lineWidth = 560;
	this.text_2.parent = this;
	this.text_2.setTransform(531.45,10.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_2},{t:this.instructMain},{t:this.text_1},{t:this.text},{t:this.instructGlue1},{t:this.instructLevel1},{t:this.instructGlue2},{t:this.instructLevel2}]}).wait(1));

	// background
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E6E5FD").s().p("EhWaA4xMAAAhxhMCcyAAAQhFBAg4BIQhuCNg5CtIgEAPQg5C3ANC5QANC7BTCrQBTCtCKB9QAxAsBJA1IB/BYQCBBZB6BjQAlAeARARQAdAcAQAcQA5BdggCNQgLAugZBGQghBagIAYQgpCBgCCJQgCCJAlCDQAUBJAmBWQAXA2AxBkICOEhQAgBAAMAjQATA7gFAwQgDAkgSAtQgLAagYAyQg6B9gmC7QgbCCgDBfQgEB8AiBgQAcBPBEBhQAnA4BRBrQCUDUgoCkQgOA8gxBKQg7BSgbApQhRB+gcCXQgcCWAdCTQARBTA5CYQA7CdARBOQASBSgIA+QgCATgFAQQgVBRhSBVQgjAjhBA5QhMBCgaAYQgTATgSASg");
	this.shape_2.setTransform(551.8755,362.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("EgKSA4xQARgSATgTQAagYBMhCQBBg5AjgjQBShVAVhRQAFgQACgTQAIg+gShSQgRhOg7idQg5iYgRhTQgdiTAciWQAciXBRh+QAbgpA7hSQAxhKAOg8QAoikiUjUQhRhrgng4QhEhhgchPQgihgAEh8QADhfAbiCQAmi7A6h9QAYgyALgaQASgtADgkQAFgwgTg7QgMgjgghAIiOkhQgxhkgXg2QgmhWgUhJQgliDACiJQACiJApiBQAIgYAhhaQAZhGALguQAgiNg5hdQgQgcgdgcQgRgRglgeQh6hjiBhZIh/hYQhJg1gxgsQiKh9hTitQhTirgNi7QgNi5A5i3IAFgPQA4itBuiNQA4hIBGhAMAr0AAAMAAABxhg");
	this.shape_3.setTransform(1125.4534,362.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(629.9,353.6,663.6,378.5);
// library properties:
lib.properties = {
	id: '6C433A4A168543449D167A7DFA4C7471',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/crafts_atlas_1.png", id:"crafts_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['6C433A4A168543449D167A7DFA4C7471'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;