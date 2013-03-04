// used variables
var newBordersize = null;
var newTop = null;

/**
 * This function will call after clicking on the widget and will show the settings menu
 * @since 2.0
 * @author Marco Büttner
 */
function openSettings()
{
	if (g_currentDirection == g_LANDSCAPE)
	{
		alert(GetMessage("stringError"));
	}
	else
	{
    	if(getFullmodeSize == "480,762,0,0" || getFullmodeSize == null)
    	{
    		resize(g_fullwidth, g_fullheight);
    	}
    	else if(getFullmodeSize == "240,381,0,0" || deviceCode == "GT-S533")
    	{
    		resize(g_wqvga_fullwidth, g_wqvga_fullheight);
    	}
    	else
    	{
    		resize(g_hvga_fullwidth, g_hvga_fullheight);
    	}
		
    	var mySettings = getElement("settingbox");
		mySettings.style.display = "block";
		var myClock = getElement("clockbox");
		myClock.style.display = "none";
	}
}

/**
 * This function will call after clicking the cancel button and close the settings menu
 * @since 2.0
 * @author Marco BÜttner
 */
function closeSettings()
{
	var dateOn = widget.preferenceForKey("datemode");
	if(dateOn == "block") 
	{
		var mySettings = getElement("settingbox");
		mySettings.style.display = "none";
		var myClock = getElement("clockbox");
		myClock.style.display = "block";
		
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
		var mySettings = getElement("settingbox");
		mySettings.style.display = "none";
		var myClock = getElement("clockbox");
		myClock.style.display = "block";
			
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
 * This function load design and settings they was change by the user
 * @since 2.0
 * @author Marco Büttner
 */
function loadSettings()
{
	try
	{
		// Text Values
		document.forms["selectForm"].fontStyle.value =	widget.preferenceForKey("fontStyle");
		document.forms["selectForm"].fontWeight.value = widget.preferenceForKey("fontWeight");
		document.forms["selectForm"].fontcolor.value =	widget.preferenceForKey("fontcolor");
		if(deviceCode == "GT-S860" || deviceCode == "SHW-M410" || deviceCode == "GT-S853" || deviceCode == "SHW-M210" || deviceCode == "GT-S850" || deviceCode == "SCH-F859" || deviceCode == "GT-S725" || deviceCode == "GT-S723" || deviceCode == "SHW-M270" || deviceCode == "SCH-W689" || deviceCode == "GT-S578" || deviceCode == "GT-S575" || deviceCode == "GT-S538")
		{
			document.forms["selectForm"].fontopacity.value = widget.preferenceForKey("fontopacity");
			document.forms["selectForm"].opacity.value = widget.preferenceForKey("opacity");
		}
		else
		{
			document.forms["selectForm"].opacityAlt.value = widget.preferenceForKey("opacityAlt");
		}
		document.forms["selectForm"].alignment.value = widget.preferenceForKey("alignment");
		// Border Values
		document.forms["selectForm"].borderstyle.value = widget.preferenceForKey("borderstyle");
		document.forms["selectForm"].bordersize.value = widget.preferenceForKey("bordersize");
		document.forms["selectForm"].bordercolor.value = widget.preferenceForKey("bordercolor");
		document.forms["selectForm"].borderradiusTopLeft.value = widget.preferenceForKey("borderradiusTopLeft");
		document.forms["selectForm"].borderradiusTopRight.value = widget.preferenceForKey("borderradiusTopRight");
		document.forms["selectForm"].borderradiusBottomLeft.value = widget.preferenceForKey("borderradiusBottomLeft");
		document.forms["selectForm"].borderradiusBottomRight.value = widget.preferenceForKey("borderradiusBottomRight");
		// Background Values
		document.forms["selectForm"].backgroundcolor.value = widget.preferenceForKey("backgroundcolor");
		// Date Values
		document.forms["selectForm"].datemode.value = widget.preferenceForKey("datemode");
		document.forms["selectForm"].yearMode.value = widget.preferenceForKey("yearMode");
		document.forms["selectForm"].shortMode.value = widget.preferenceForKey("shortMode");
		// Effect Values
		document.forms["selectForm"].glasses.value = widget.preferenceForKey("glasses");
		
		if(badaVersion == "Bada/2.0")
		{
		document.forms["selectForm"].glow.value = widget.preferenceForKey("glow");
		document.forms["selectForm"].glowColor.value = widget.preferenceForKey("glowColor");
		}
		
		saveSettings();
		reload();
	}
	catch (error)
	{
		reload();
	}
}

/**
 * This function save the changes by the use!
 * @since 2.0
 * @author Marco Büttner
 */
function saveSettings()
{
	
	//Text Values
	var fontStyle = document.forms["selectForm"].fontStyle.value;
	var fontWeight = document.forms["selectForm"].fontWeight.value;
	var fontcolor = document.forms["selectForm"].fontcolor.value;
	var fontopacity = document.forms["selectForm"].fontopacity.value;
	
	var alignment = document.forms["selectForm"].alignment.value;
	// Border Values
	var borderstyle = document.forms["selectForm"].borderstyle.value;
	var bordersize = document.forms["selectForm"].bordersize.value;
	var bordercolor = document.forms["selectForm"].bordercolor.value;
	var borderradiusTopLeft = document.forms["selectForm"].borderradiusTopLeft.value;
	var borderradiusTopRight = document.forms["selectForm"].borderradiusTopRight.value;
	var borderradiusBottomLeft = document.forms["selectForm"].borderradiusBottomLeft.value;
	var borderradiusBottomRight = document.forms["selectForm"].borderradiusBottomRight.value;
	var opacity = document.forms["selectForm"].opacity.value;
	var opacityAlt = document.forms["selectForm"].opacityAlt.value;
	// Background Values
	var backgroundcolor = document.forms["selectForm"].backgroundcolor.value;
	
	// Date Values
	var datemode = document.forms["selectForm"].datemode.value;
	var yearMode = document.forms["selectForm"].yearMode.value;
	var shortMode = document.forms["selectForm"].shortMode.value;
	// Effect Values
	var glasses = document.forms["selectForm"].glasses.value;
	var glow = document.forms["selectForm"].glow.value;
	var glowColor = document.forms["selectForm"].glowColor.value;
	
	if(fontcolor == backgroundcolor)
	{
		alert(GetMessage("ErrorColor"));
	}
	else
	{
		var toChange = getElement("background");
		toChange.style.background = backgroundcolor;
		
		if(deviceCode == "GT-S860" || deviceCode == "SHW-M410" || deviceCode == "GT-S853" || deviceCode == "SHW-M210" || deviceCode == "GT-S850" || deviceCode == "SCH-F859" || deviceCode == "GT-S725" || deviceCode == "GT-S723" || deviceCode == "SHW-M270" || deviceCode == "SCH-W689" || deviceCode == "GT-S578" || deviceCode == "GT-S575" || deviceCode == "GT-S538")
			toChange.style.opacity = opacity;
		else
			toChange.style.opacity = opacityAlt;
		
		toChange.style.border = "solid "+bordersize+"px "+bordercolor;
		toChange.style.borderRadius = borderradiusTopLeft+" "+borderradiusTopRight+" "+borderradiusBottomLeft+" "+borderradiusBottomRight;
	
		var toChange2 = getElement("clocklayer");
		toChange2.style.textAlign = alignment;
		
		var toChange3 = getElement("time");
		toChange3.style.fontStyle = fontStyle;
		toChange3.style.fontWeight = fontWeight;
		toChange3.style.color = fontcolor;
		
		if(deviceCode == "GT-S860" || deviceCode == "SHW-M410" || deviceCode == "GT-S853" || deviceCode == "SHW-M210" || deviceCode == "GT-S850" || deviceCode == "SCH-F859" || deviceCode == "GT-S725" || deviceCode == "GT-S723" || deviceCode == "SHW-M270" || deviceCode == "SCH-W689" || deviceCode == "GT-S578" || deviceCode == "GT-S575" || deviceCode == "GT-S538")
			toChange3.style.opacity = fontopacity;
		
		if(badaVersion == "Bada/2.0")
			toChange3.style.textShadow = "0px 0px "+glow+" "+glowColor;
		
		var toChange4 = getElement("foreground");
		toChange4.style.opacity = glasses;
		toChange4.style.left = bordersize+"px";
		if(getFullmodeSize == "480,762,0,0" || getFullmodeSize == null)
		{
			newBordersize = 4 + parseInt(document.forms["selectForm"].bordersize.value);
		}
		else
		{
			newBordersize = 2 + parseInt(document.forms["selectForm"].bordersize.value);
		}
		toChange4.style.top = newBordersize+"px";
		toChange4.style.borderRadius = borderradiusTopLeft+" "+borderradiusTopRight+" "+borderradiusBottomLeft+" "+borderradiusBottomRight;
	
		var toChange5 = getElement("dateBG");
		if(deviceCode == "GT-S860" || deviceCode == "SHW-M410" || deviceCode == "GT-S853" || deviceCode == "SHW-M210" || deviceCode == "GT-S850" || deviceCode == "SCH-F859" || deviceCode == "GT-S725" || deviceCode == "GT-S723" || deviceCode == "SHW-M270" || deviceCode == "SCH-W689" || deviceCode == "GT-S578" || deviceCode == "GT-S575" || deviceCode == "GT-S538")
			toChange5.style.opacity = opacity;
		else
			toChange5.style.opacity = opacityAlt;
		
		toChange5.style.display = datemode;
		toChange5.style.background = backgroundcolor;
		toChange5.style.border = "solid "+bordersize+"px "+bordercolor;
		
		var toChange6 = getElement("datelayer");
		if(getFullmodeSize == "480,762,0,0" || getFullmodeSize == null)
		{
			newTop = 90 + newBordersize;
		}
		else if(getFullmodeSize == "240,381,0,0" || deviceCode == "GT-S533")
		{
			newTop = 44 + newBordersize;
		}
		else
		{
			newTop = 59 + newBordersize;
		}
		toChange6.style.top = newTop+"px";
		toChange6.style.color = fontcolor;
		toChange6.style.display = datemode;
	
		closeSettings();
		// 	Text Values
		
		widget.setPreferenceForKey(fontStyle, "fontStyle");
		widget.setPreferenceForKey(fontWeight, "fontWeight");
		widget.setPreferenceForKey(fontcolor, "fontcolor");
		
		if(deviceCode == "GT-S860" || deviceCode == "SHW-M410" || deviceCode == "GT-S853" || deviceCode == "SHW-M210" || deviceCode == "GT-S850" || deviceCode == "SCH-F859" || deviceCode == "GT-S725" || deviceCode == "GT-S723" || deviceCode == "SHW-M270" || deviceCode == "SCH-W689" || deviceCode == "GT-S578" || deviceCode == "GT-S575" || deviceCode == "GT-S538")
			widget.setPreferenceForKey(fontopacity, "fontopacity");
		
		widget.setPreferenceForKey(alignment, "alignment");
		// Border Values
		widget.setPreferenceForKey(borderstyle, "borderstyle");
		widget.setPreferenceForKey(bordersize, "bordersize");
		widget.setPreferenceForKey(bordercolor, "bordercolor");
		widget.setPreferenceForKey(borderradiusTopLeft, "borderradiusTopLeft");
		widget.setPreferenceForKey(borderradiusTopRight, "borderradiusTopRight");
		widget.setPreferenceForKey(borderradiusBottomLeft, "borderradiusBottomLeft");
		widget.setPreferenceForKey(borderradiusBottomRight, "borderradiusBottomRight");
		// Background Values
		widget.setPreferenceForKey(backgroundcolor, "backgroundcolor");
		
		if(deviceCode == "GT-S860" || deviceCode == "SHW-M410" || deviceCode == "GT-S853" || deviceCode == "SHW-M210" || deviceCode == "GT-S850" || deviceCode == "SCH-F859" || deviceCode == "GT-S725" || deviceCode == "GT-S723" || deviceCode == "SHW-M270" || deviceCode == "SCH-W689" || deviceCode == "GT-S578" || deviceCode == "GT-S575" || deviceCode == "GT-S538")
			widget.setPreferenceForKey(opacity, "opacity");
		else
			widget.setPreferenceForKey(opacity, "opacityAlt");
		
		// Date Values
		widget.setPreferenceForKey(datemode, "datemode");
		widget.setPreferenceForKey(yearMode, "yearMode");
		widget.setPreferenceForKey(shortMode, "shortMode");
		// Effect Values
		widget.setPreferenceForKey(glasses, "glasses");
		
		if(badaVersion == "Bada/2.0")
		{
			widget.setPreferenceForKey(glow, "glow");
			widget.setPreferenceForKey(glowColor, "glowColor");
		}
		
		reload();
	}
}

/**
 * This function overwrites non saving changes on the setting menu
 * @since 3.1
 * @author Marco Büttner
 */
function reset()
{
	document.forms["selectForm"].reset();
	loadSettings();
}