// current engine version
var curCSver = "2.0.0"; // CheckSystem
var CSver = "";

// Device variables
var deviceCode = getUserAgent();
var badaVersion = getBadaVersion();
var getFullmodeSize = getFullmodeSize();

// Check variables
var g_currentDirection = -1;
var g_PORTRAIT = -1;
var g_LANDSCAPE = 1;
var g_horizontal = true;

/**
 * Check the current rotation position of the device (only on Wave 533)
 * 
 * @author Pierre Kretschmar
 * @since 2.2
 */
function check()
{
	if(g_horizontal)
	{
	    try
	    {
	    	widget.addEventListener("widgetmodechange", getWindowDirection, false);
	    }
	    catch (e)
	    {
	    	alert(e);
	    }
	}
}

/**
 * Handle the 'widgetmodechange' event from check()
 * 
 * @author Pierre Kretschmar
 * @see check()
 * @since 2.2
 * @returns {Number}
 */
function getWindowDirection()
{
	try
	{
		var currentDirection = widget.window.getCurrentDirection();
		if(currentDirection == "vertical")
			g_currentDirection = g_PORTRAIT;
		else if(currentDirection == "horizontal")
			g_currentDirection = g_LANDSCAPE;
	}
	catch(e)
	{
		return g_currentDirection;
	}
}

/**
 * Cut the model code from the UserAgent of the browser
 * @author Marco Büttner
 * @since 2.0
 * @returns {String} (exp. "GT-S850" for GT-S8500)
 */
function getUserAgent()
{
	try
	{
        var uaValue = navigator.userAgent;
        var uaMuster = /GT.{5}/i;
        var uaVersion = uaValue.match(uaMuster);
        return uaVersion;
    }
	catch (e)
	{
        try
        {
            var uaValue = navigator.userAgent;
            var uaMuster = /SHW.{5}/i;
            var uaVersion = uaValue.match(uaMuster);
            return uaVersion;        	
        }
        catch (e)
        {
        	try
        	{
                var uaValue = navigator.userAgent;
                var uaMuster = /SCH.{5}/i;
                var uaVersion = uaValue.match(uaMuster);
                return uaVersion;        		
        	}
        	catch (e)
        	{
        		return "unknown device";
        	}
        }
    }
}

/**
 * Cut the operating system from the UserAgent of the browser
 * @author Marco Büttner
 * @since 2.0
 * @returns {String} (exp. "Bada/2.0" for bada 2.0)
 */
function getBadaVersion()
{
	try
	{
        var uaValue = navigator.userAgent;
        var uaMuster = /Bada.{4}/i;
        var uaVersion = uaValue.match(uaMuster);
        return uaVersion;
    }
	catch (e)
    {
        return "";
    }
}


/**
 * Read out the fullscreen resolution of the device
 * @author Marco Büttner
 * @since 2.0
 * @returns  {String} (exp. "480,762,0,0" for WVGA (480x800))
 */
function getFullmodeSize()
{
	try
	{
           return widget.getFullmodeSize();
	}
	catch(e)
	{
           return null;
	}
}