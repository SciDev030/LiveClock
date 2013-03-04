// current engine version
var curLCver = "3.2.0"; // LiveClock
var LCver = "";

// WVGA
var g_idlewidth=475;
var g_idleheight=120;
var g_idlewidthold=465;
var g_idledateheight=135;
var g_fullwidth=480;
var g_fullheight=800;
// HVGA
var g_hvga_idlewidth=315;
var g_hvga_idleheight=85;
var g_hvga_idledateheight=105;
var g_hvga_fullwidth=320;
var g_hvga_fullheight=480;
// WQVGA
var g_wqvga_idlewidth=235;
var g_wqvga_idleheight=65;
var g_wqvga_idledateheight=85;
var g_wqvga_fullwidth=240;
var g_wqvga_fullheight=400;
var type = "full";

var ShortOfWeek = new Array(7);
ShortOfWeek[0] = GetMessage("shortSun");
ShortOfWeek[1] = GetMessage("shortMon");
ShortOfWeek[2] = GetMessage("shortTue");
ShortOfWeek[3] = GetMessage("shortWed");
ShortOfWeek[4] = GetMessage("shortThu");
ShortOfWeek[5] = GetMessage("shortFri");
ShortOfWeek[6] = GetMessage("shortSat");

var ShortOfYear = new Array(12);
ShortOfYear[0] = GetMessage("shortJan");
ShortOfYear[1] = GetMessage("shortFeb");
ShortOfYear[2] = GetMessage("shortMar");
ShortOfYear[3] = GetMessage("shortApr");
ShortOfYear[4] = GetMessage("shortMay");
ShortOfYear[5] = GetMessage("shortJun");
ShortOfYear[6] = GetMessage("shortJul");
ShortOfYear[7] = GetMessage("shortAug");
ShortOfYear[8] = GetMessage("shortSep");
ShortOfYear[9] = GetMessage("shortOct");
ShortOfYear[10] = GetMessage("shortNov");
ShortOfYear[11] = GetMessage("shortDec");

var DaysOfWeek = new Array(7);
DaysOfWeek[0] = GetMessage("tSunday");
DaysOfWeek[1] = GetMessage("tMonday");
DaysOfWeek[2] = GetMessage("tTuesday");
DaysOfWeek[3] = GetMessage("tWednesday");
DaysOfWeek[4] = GetMessage("tThursday");
DaysOfWeek[5] = GetMessage("tFriday");
DaysOfWeek[6] = GetMessage("tSaturday");

var MonthsOfYear = new Array(12);
MonthsOfYear[0] = GetMessage("tJanuary");
MonthsOfYear[1] = GetMessage("tFebruary");
MonthsOfYear[2] = GetMessage("tMarch");
MonthsOfYear[3] = GetMessage("tApril");
MonthsOfYear[4] = GetMessage("tMay");
MonthsOfYear[5] = GetMessage("tJune");
MonthsOfYear[6] = GetMessage("tJuly");
MonthsOfYear[7] = GetMessage("tAugust");
MonthsOfYear[8] = GetMessage("tSeptember");
MonthsOfYear[9] = GetMessage("tOctober");
MonthsOfYear[10] = GetMessage("tNovember");
MonthsOfYear[11] = GetMessage("tDecember");

var timerUpdate, time, date;

/**
 * short handle of the document.getElementById method
 * @param id
 * @returns document.getElementById
 * @author Marco Büttner
 * @since 3.2
 */
function getElement(id)
{
	return document.getElementById(id);	
}

/**
 * short handle of the document.getElementsByTagName method
 * @param id
 * @returns document.getElementsByTagName
 * @author Marco Büttner
 * @since 3.2
 */
function getElements(id)
{
	return document.getElementsByTagName(id);	
}

/**
 * This function load the correct css file for the different supporting resolution
 * @since 3.0
 * @author Marco Büttner
 */
function loadCSS()
{
	if(getFullmodeSize == "480,762,0,0" || getFullmodeSize == null)
	{
		getElement("sheet").href = "css/main.css";
		getElements("myWidget");
		return;
	}
	else if(getFullmodeSize == "240,381,0,0" || deviceCode == "GT-S533")
	{
		getElement("sheet").href = "css/main_wqvga.css";
		getElements("myWidget");
		return;
	}
	else
	{
		getElement("sheet").href = "css/main_hvga.css";
		getElements("myWidget");
		return;
	}
}

/**
 * This function represent the main feature of the LiveClock
 * @since 1.0
 * @author Marco Büttner
 */
function show()
{
	var yearOn = widget.preferenceForKey("yearMode");
	var shortOn = widget.preferenceForKey("shortMode");
	
	var today=new Date();
	
	var hours=today.getHours();
	var minutes=today.getMinutes();
	var seconds=today.getSeconds();
	var dateday = today.getDate();
	var month, day, year;
	
	if(shortOn == "on")
	{
		month = ShortOfYear[today.getMonth()];
		day = ShortOfWeek[today.getDay()];
	}
	else
	{
		month = MonthsOfYear[today.getMonth()];
		day = DaysOfWeek[today.getDay()];
	}
	
	if(yearOn == "on")
	{
		year = today.getFullYear();
	}
	else
	{
		year = "";
	}
	
	if(hours<=9)
		hours="0"+hours;
	if(minutes<=9)
		minutes="0"+minutes;
	if(seconds<=9)
		seconds="0"+seconds;
	if(dateday<=9)
		dateday="0"+dateday;
	
	date = day+", "+dateday+". "+month+" "+year;
	time = hours+":"+minutes+":"+seconds;
	
	getElement("time").innerHTML = time;
	getElement("date").innerHTML = date;
	
	timerUpdate = setTimeout("show()",1000);
}

/**
 * This function will be listen by event 'widgetgoasleep'. It shrink the usage of memory by this application
 * @since 3.0
 * @author Marco Büttner
 */
function sleep()
{
	clearTimeout(timerUpdate);
	
	date = GetMessage("tMonday") + ", " + "01" + ". " + GetMessage("tJanuary") + " " + GetMessage("1900");
	time = "12:00:00";
	
	getElement("time").innerHTML = time;
	getElement("date").innerHTML = date;
}

/**
 * This function will be listen by event 'widgetsleepawakened'. It restore the application after returning from the sleep state
 * @since 3.0
 * @author Marco Büttner
 */
function awake()
{
	closeSettings();
	appInit();
}

/**
 * This method modify the max size of the widget area
 * @param width
 * @param height
 * @since 3.0
 */
function resize(width, height)
{
	try
	{
		widget.window.resizeWindow(width, height);
	}
	catch (e)
	{
		window.resizeTo(width, height);
	}
}

/**
 * This method update the time after changing the time/date on the system
 * @since 2.0
 */
var isTimeChangeRunning = false;
function onLocalTimeChanged(event, mode)
{
    if(isTimeChangeRunning)
    	return;
    isTimeChangeRunning = true;
    setTimeout(function()
	{
		isTimeChangeRunning = false;
	},3000);
    try
    {
    	clearTimeout(timerUpdate);
    	appInit();
    }
    catch (e)
    {
    	isTimeChangeRunning = false;
    }
    isTimeChangeRunning = false;
}

/**
 * This method fix design changes between bada 1.x und bada 2.0
 * @since 3.1
 * @author Pierre Kretschmar
 */
function redesign()
{
	var dateOn = widget.preferenceForKey("datemode");
	
	if(type == "lite") {
		getElement("background").style.borderRadius = "25px 10px 25px 10px";
		getElement("foreground").style.borderRadius = "25px 10px 25px 10px";
		getElement("clocklayer").style.textAlign = "center";
	}
	
	if(badaVersion != "Bada/2.0" && deviceCode== "GT-S850" || badaVersion != "Bada/2.0" && deviceCode== "SCH-F859" || badaVersion != "Bada/2.0" && deviceCode== "GT-S853" || badaVersion != "Bada/2.0" && deviceCode== "SHW-M210") {
		getElement("clockbox").style.width = "450px";
		getElement("background").style.width = "434px";
		getElement("background").style.top = "4px";
		getElement("clocklayer").style.width = "412px";
		getElement("clocklayer").style.left = "11px";
		getElement("clocklayer").style.top = "10px";
		getElement("foreground").style.width = "434px";
		getElement("foreground").style.top = "4px";
		document.getElementsByTagName("span").style.width = "414px";
		document.getElementsByTagName("span").style.top = "10px";
		getElement("date").style.left = "110px";
		getElement("time").style.top = "10px";
		if(dateOn == "block") {
			resize(g_idlewidthold, g_idledateheight);
		}
		else {
			resize(g_idlewidthold, g_idleheight);
		}
	}
	
	if(badaVersion != "Bada/2.0" && deviceCode== "GT-S723" || badaVersion != "Bada/2.0" && deviceCode== "SHW-M270" || badaVersion != "Bada/2.0" && deviceCode== "SCH-W689" || badaVersion != "Bada/2.0" && deviceCode== "GT-S578" || badaVersion != "Bada/2.0" && deviceCode== "GT-S575" || badaVersion != "Bada/2.0" && deviceCode== "GT-S533" || badaVersion != "Bada/2.0" && deviceCode== "GT-S525") {
		getElement("clockbox").style.width = "225px";
		getElement("background").style.width = "217px";
		getElement("background").style.top = "2px";
		getElement("clocklayer").style.width = "206px";
		getElement("clocklayer").style.left = "6px";
		getElement("clocklayer").style.top = "5px";
		getElement("foreground").style.width = "217px";
		getElement("foreground").style.top = "2px";
		getElement("span").style.width = "207px";
		getElement("span").style.top = "5px";
		getElement("date").style.left = "55px";
		getElement("time").style.top = "5px";
		
		if(dateOn == "block") {
			resize(g_wqvga_idlewidthold, g_wqvga_idledateheight);
		}
		else {
			resize(g_wqvga_idlewidthold, g_wqvga_idleheight);
		}
	}
}

/**
 * This function shows elements for LiveClock PRO/LITE and the feature-specific devices
 * @since 3.0
 * @author Pierre Kretschmar
 */
function showItem()
{
	var glowCheck = widget.preferenceForKey("glow");
	var dateOn = widget.preferenceForKey("datemode");
	
	if(type == "full")
	{
		if(deviceCode == "" || deviceCode == null || deviceCode == "GT-S860" || deviceCode == "SHW-M410" || deviceCode == "GT-S853" || deviceCode == "SHW-M210" || deviceCode == "GT-S850" || deviceCode == "SCH-F859" || deviceCode == "GT-S725" || deviceCode == "GT-S723" || deviceCode == "SHW-M270" || deviceCode == "SCH-W689" || deviceCode == "GT-S578" || deviceCode == "GT-S575" || deviceCode == "GT-S538")
		{
			hide("backgroundOpacityAlt");
		}
		else
		{
			hide("foreground");
			hide("EffectSettings");
			hide("fontOpacity");
			hide("backgroundOpacity");
		}

		if(badaVersion == "Bada/2.0")
		{
			showElement("glowSet");
			if(glowCheck == "10px")
			{
				showElement("glowSetColor");
			}
			else
			{
				hide("glowSetColor");
			}
		}
		else
		{
			hide("glowSet");
			hide("glowSetColor");
		}
		
		if(dateOn == "block")
		{
			showElement("yearSet");
			showElement("shortSet");
		}
		else
		{
			hide("yearSet");
			hide("shortSet");
		}
	}
	else
	{
		hide("fontStyleSet");
		hide("fontAlignSet");
		hide("fontOpacity");
		hide("borderStyleSet");
		hide("borderRadiusSet");
		hide("EffectSettings");
		hide("yearSet");
		hide("shortSet");
		
		if(deviceCode == "" || deviceCode == null || deviceCode == "GT-S860" || deviceCode == "SHW-M410" || deviceCode == "GT-S853" || deviceCode == "SHW-M210" || deviceCode == "GT-S850" || deviceCode == "SCH-F859" || deviceCode == "GT-S725" || deviceCode == "GT-S723" || deviceCode == "SHW-M270" || deviceCode == "SCH-W689" || deviceCode == "GT-S578" || deviceCode == "GT-S575" || deviceCode == "GT-S538")
		{
			hide("backgroundOpacityAlt");
		}
		else
		{
			hide("foreground");
			hide("EffectSettings");
			hide("fontOpacity");
			hide("backgroundOpacity");
		}
	}
}

/**
 * show element by id.
 * @param id {String} element
 * @since 3.1
 * @author Marco Büttner
 */
function showElement(id) {
	getElement(id).style.display = "block";
}

/**
 * hide element with id
 * @param id {String} element
 * @since 3.1
 * @author Marco Büttner
 */
function hide(id) {
	getElement(id).style.display = "none";
}

/**
 * handle the different size of the widget if datemode on/off
 * @author Marco Büttner
 * @since 3.2
 */
function dateMode()
{
	var dateOn = widget.preferenceForKey("datemode");
	
	if(dateOn == "block")
    {
    	if(getFullmodeSize == "480,762,0,0" || getFullmodeSize == null)
    	{
    		resize(g_idlewidth, g_idledateheight);
    	}
    	else if(getFullmodeSize == "240,381,0,0" || deviceCode == "GT-S533")
    	{
    		resize(g_wqvga_idlewidth, g_wqvga_idledateheight);
    	}
    	else
    	{
    		resize(g_hvga_idlewidth, g_hvga_idledateheight);
    	}
    }
	else
	{
    	if(getFullmodeSize == "480,762,0,0" || getFullmodeSize == null)
    	{
    		resize(g_idlewidth, g_idleheight);
    	}
    	else if(getFullmodeSize == "240,381,0,0" || deviceCode == "GT-S533")
    	{
    		resize(g_wqvga_idlewidth, g_wqvga_idleheight);
    	}
    	else
    	{
    		resize(g_hvga_idlewidth, g_hvga_idleheight);
    	}
	}	
}

/**
 * reload after saving
 * Also this method install the follow events
 * * widgetsleepawakened - the widget wake up after idle/sleep mode
 * * widgetsleepawakened - the widget goto sleep/idle mode
 * * widgetendkey - the endkey will be initialize
 * * widgetlocaltimechanged - the widget will be available to change the time/date from the system
 * 
 * @since 3.1
 * @author Marco Büttner
 * @see show()
 * @see check()
 * @see dateMode()
 * @see showItem()
 * @see redesign()
 */
function reload()
{
	show();
	check();
	dateMode();
    showItem();
    redesign();
    
    try
	{
		widget.addEventListener("widgetsleepawakened", awake, false);
	    widget.addEventListener("widgetgoasleep", sleep, false);
	    widget.addEventListener("widgetendkey", closeSettings, false);
	    widget.addEventListener("widgetlocaltimechanged", onLocalTimeChanged, false);
	}
	catch (e)
	{
		console.log(e);
	}
}

/**
 * This method handles the onblur event of the elements for datemode, glow and bordersize
 * @param id {String}	Element which fired the onBlur event
 * @since 3.2
 * @author Marco Büttner
 */
function onBlurAction(id)
{
	var form = document.selectForm;
	switch(id)
	{
		case 'date':
			if(form.datemode.selectedIndex == 0)
			{
				if(type != "lite")
					showElement('yearSet');
				showElement('shortSet');
			}
			else
			{
				hide('yearSet');
				hide('shortSet');
			}
		break;

		case 'border':
			if(form.bordersize.selectedIndex != 0)
			{
				showElement('borderColorSet');
				if(type != "lite")
					showElement('borderStyleSet');
			}
			else
			{
				hide('borderColorSet');
				hide('borderStyleSet');
			}		
		break;
		
		case 'glow':
			if(form.glow.selectedIndex == 0)
			{
				showElement('glowSetColor');
			}
			else
			{
				hide('glowSetColor');
			}		
		break;
	}
}

/**
 * Initialize the application
 * @since 1.0
 * @author Marco Büttner
 * @see show()
 * @see check()
 * @see showItem()
 * @see loadCSS()
 * @see loadSettings()
 * @see redesign()
 */
function appInit()
{
	show();
	check();
	showItem();
	loadCSS();
	loadSettings();
	redesign();
}